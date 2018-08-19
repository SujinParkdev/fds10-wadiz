import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { FundingService } from '../../../core/services/funding.service';
import { CreateElementService } from '../../../core/services/create-element/create-element.service';

@Component({
  selector: 'app-funding-step1',
  templateUrl: './funding-step1.component.html',
  styleUrls: ['./funding-step1.component.css']
})
export class FundingStep1Component implements OnInit {
  noticeForm: FormGroup;
  purchaseForm: FormGroup;

  get id() {
    return this.fundingService.id;
  }
  get rewardDetail() {
    return this.fundingService.rewardDetail;
  }
  get sponsorshipAmount() {
    return this.fundingService.sponsorshipAmount;
  }
  get isNoticePop() {
    return this.fundingService.isNoticePop;
  }

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private fundingService: FundingService,
    private createElementServcie: CreateElementService
  ) {
  }

  ngOnInit() {
    this.noticeForm = this.fb.group({
      check1: [false, Validators.pattern('true')],
      check2: [false, Validators.pattern('true')],
      check3: [false, Validators.pattern('true')]
    });
  }

  noticePopOpen() {
    this.fundingService.isNoticePop = true;
  }

  noticePopClose() {
    this.fundingService.isNoticePop = false;
  }

  nextStep() {
    if (this.fundingService.rewardDetail.rewards.filter(reward => reward.reward_checked).length === 0) {
      this.createElementServcie.alert('최소 1개 이상의 리워드를 선택해주세요.');
    } else {
      this.router.navigate(['/funding/step20']);
    }
  }

  clickProduct(id: number) {
    this.fundingService.rewardDetail.rewards =
    this.fundingService.rewardDetail.rewards.map(reward => {
      return reward.pk === id ? { ...reward, reward_checked: !reward.reward_checked } : reward;
    });
  }

  clickMinus(id: number) {
    this.fundingService.rewardDetail.rewards =
    this.fundingService.rewardDetail.rewards.map(reward => {
      if (reward.pk === id) {
        let count = reward.reward_purchase_count - 1;
        if (count < 1) {
          this.createElementServcie.alert('1개 이하로 수량을 선택할 수 없습니다.');
          count = 1;
        }
        return { ...reward, reward_purchase_count: count };
      }
      return reward;
    });
  }

  clickPlus(id: number) {
    this.fundingService.rewardDetail.rewards =
    this.fundingService.rewardDetail.rewards.map(reward => {
      if (reward.pk === id) {
        let count = reward.reward_purchase_count + 1;
        const max = reward.reward_total_count - reward.reward_sold_count;
        if (count > max) {
          this.createElementServcie.alert('잔여수량 내에서 수량을 선택해주세요.');
          count = max;
        }
        return { ...reward, reward_purchase_count: count };
      }
      return reward;
    });
  }

  checkPurchaseCount(id: number, value: string) {
    this.fundingService.rewardDetail.rewards =
    this.fundingService.rewardDetail.rewards.map(reward => {
      if (reward.pk === id) {
        let count = +value;
        const max = reward.reward_total_count - reward.reward_sold_count;
        if (count < 1) {
          this.createElementServcie.alert('1개 이하로 수량을 선택할 수 없습니다.');
          count = 1;
        } else if (count > max) {
          this.createElementServcie.alert('잔여수량 내에서 수량을 선택해주세요.');
          count = max;
        }
        return { ...reward, reward_purchase_count: count };
      }
      return reward;
    });
  }

  keyupSponsorshipAmount(value: string) {
    value = value.replace(/,/gi, '');
    this.fundingService.sponsorshipAmount = +value;
  }

  getTotalAmount(): number {
    let amount = this.fundingService.sponsorshipAmount;
    this.fundingService.rewardDetail.rewards.forEach(reward => {
      if (reward.reward_checked) {
        amount += (reward.reward_purchase_count * reward.reward_price);
      }
    });
    return amount;
  }
}
