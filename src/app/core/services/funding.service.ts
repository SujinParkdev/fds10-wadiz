import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

interface RewardDetail {
  pk: number;
  product_name: string;
  product_end_time: string;
  product_cancel_time: string;
  rewards: any[];
}

@Injectable({
  providedIn: 'root'
})
export class FundingService {
  id: number;
  rewardDetail: RewardDetail;
  rewardsUrl = environment.rewardsUrl;
  sponsorshipAmount = 0;
  isNoticePop = true;

  constructor(
    private http: HttpClient
  ) { }

  getRewardDetail() {
    this.http.get<RewardDetail>(`${this.rewardsUrl}/${this.id}/funding`).subscribe(
      res => {
        this.rewardDetail = {
          pk: res.pk,
          product_name: res.product_name,
          product_end_time: res.product_end_time,
          product_cancel_time: this.getCancelTime(res.product_end_time),
          rewards: this.getRewards(res.rewards)
        };
      }
    );
  }

  private getRewards(rewards: any[]): any[] {
    const res = [];
    rewards.forEach(reward => {
      const _reward = {
        ...reward,
        reward_checked: false,
        reward_purchase_count: 1
      };
      res.push(_reward);
    });
    return res;
  }

  private getCancelTime(endTime: string): string {
    const date = new Date(endTime);
    date.setTime(date.getTime() - (1 * 24 * 60 * 60 * 1000));
    const y = date.getFullYear();
    const m = (1 + date.getMonth());
    const d = date.getDate();
    const mm = m >= 10 ? m : '0' + m;
    const dd = d >= 10 ? d : '0' + d;
    return y + '.' + mm + '.' + dd;
  }
}
