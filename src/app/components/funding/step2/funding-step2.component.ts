import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CreateElementService } from '../../../core/services/create-element/create-element.service';
import { FundingService } from '../../../core/services/funding.service';

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

  get sponsorshipAmount() {
    return this.fundingService.sponsorshipAmount;
  }

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private fundingService: FundingService,
    private createElementServcie: CreateElementService
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
  }

  nextStep() {
    this.router.navigate(['/funding/step30']);
  }
}
