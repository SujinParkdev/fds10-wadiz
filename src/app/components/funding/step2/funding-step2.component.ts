import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CreateElementService } from '../../../core/services/create-element/create-element.service';
import { FundingService } from '../../../core/services/funding.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { LoginService } from '../../../core/services/login.service';

interface FundingOrder {
  pk: number;
  username?: string;
  phone_number?: number;
  address1?: string;
  address2?: string;
  comment?: string;
}

@Component({
  selector: 'app-funding-step2',
  templateUrl: './funding-step2.component.html',
  styleUrls: ['./funding-step2.component.css']
})
export class FundingStep2Component implements OnInit {
  rewards: any[];
  shipping_charge = 0;
  reward_price = 0;
  total_price = 0;
  fundingForm: FormGroup;
  rewardsUrl = environment.rewardsUrl;

  get sponsorshipAmount() {
    return this.fundingService.sponsorshipAmount;
  }

  get userInfo() {
    return this.loginService.userInfo;
  }

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private fundingService: FundingService,
    private createElementServcie: CreateElementService,
    private loginService: LoginService,
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.rewards = [];

    if (this.fundingService.rewardDetail) {
      this.fundingService.rewardDetail.rewards.forEach(reward => {
        if (reward.reward_checked) {
          this.rewards.push(reward);
          this.reward_price += (reward.reward_purchase_count * reward.reward_price);
          this.shipping_charge += reward.reward_shipping_charge;
        }
      });
      this.total_price = this.reward_price + this.sponsorshipAmount + this.shipping_charge;
    }

    this.fundingForm = this.fb.group({
      username: ['', Validators.required ],
      phone_number: ['', Validators.required ],
      address1: ['', Validators.required ],
      address2: ['', Validators.required ],
      comment: [''],
      chk1: [false, Validators.pattern('true')],
      chk2: [false, Validators.pattern('true')],
      chk3: [false, Validators.pattern('true')]
    });

    // console.log(this.rewards);
  }

  nextStep() {
    const token = this.loginService.getToken();
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `token ${token}`
      })
    };

    const payload = {
      comment: this.fundingForm.get('comment').value,
      username: this.fundingForm.get('username').value,
      phone_number: this.fundingForm.get('phone_number').value,
      address1: this.fundingForm.get('address1').value,
      address2: this.fundingForm.get('address2').value
    };

    this.createElementServcie.startLoading();
    this.http.post<FundingOrder>(`${this.rewardsUrl}/funding_create/`, payload, httpOptions)
      .subscribe(
        res => {
          // console.log(res);
          this.rewards.forEach((reward, i) => {
            const p = {
              reward_amount: reward.reward_purchase_count,
              order: res.pk,
              user: this.userInfo.pk,
              reward: reward.pk
            };
            this.http.post(`${this.rewardsUrl}/funding_order/`, p, httpOptions)
            .subscribe(
              () => {
                if (i >= this.rewards.length - 1) {
                  this.createElementServcie.endLoading();
                  this.router.navigate(['/funding/step30']);
                }
              },
              error => {
                this.createElementServcie.alert('주문하신 상품 중 품절된 상품이 있거나,\n서버에 오류가 있습니다.', () => {
                  this.router.navigate(['/detail/', this.fundingService.id ]);
                });
              }
            );
          });
        }, error => {
          this.createElementServcie.endLoading();
        }
      );
  }
}
