import { Component, OnInit } from '@angular/core';

import { HttpClient, HttpHeaders } from '../../../../node_modules/@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { environment } from '../../../environments/environment';
import { CreateElementService } from '../../core/services/create-element/create-element.service';
import { delay } from 'rxjs/operators';
import { LoginService } from '../../core/services/login.service';

interface Reward {
  pk: number;
  reward_name: string;
  reward_option: string;
  reward_price: number;
  reward_shipping_charge: number;
  reward_expecting_departure_date: string;
  reward_total_count: number;
  reward_sold_count: number;
  reward_on_sale: boolean;
  reward_amount: number;
  product: number;
}

interface RewardDetail {
  pk: number;
  product_name: string;
  product_type: string;
  product_company_name: string;
  product_img: string;
  product_detail_img: string;
  product_interested_count: number;
  product_start_time: string;
  product_end_time: string;
  product_cur_amount: number;
  product_total_amount: number;
  product_description: string;
  product_video_url: string;
  rewards: Reward[];
  product_term: string;
  product_deadline: boolean;
  product_percent: number;
  product_percentbar: number;
}

interface ProductLike {
  pk: number;
  user: number;
  product: number;
  liked_at: string;
}

@Component({
  selector: 'app-detail',
  templateUrl: 'detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  rewardDetail: RewardDetail;
  id: number;
  isLiked = false;
  rewardsUrl = environment.rewardsUrl;
  nowTime: number;
  isImg: boolean;
  isFillHeart: boolean;
  productLike: ProductLike;

  get userInfo() {
    return this.loginService.userInfo;
  }

  constructor(
    private http: HttpClient,
    private router: Router,
    private activateRoute: ActivatedRoute,
    private loginService: LoginService,
    private createElementService: CreateElementService
  ) {
  }

  ngOnInit() {
    this.activateRoute.params.subscribe(params => {
      this.id = +params['id'];
      this.getDetail();
    });
  }

  getDetail() {
    this.createElementService.startLoading();
    this.http.get<RewardDetail>(`${this.rewardsUrl}/${this.id}`)
      .pipe(
        delay(500)
      )
      .subscribe(
        rewards => {
          this.rewardDetail = {
            ...rewards,
            product_term: this.getTerm(rewards.product_end_time),
            product_deadline: this.isDeadline(rewards.product_end_time),
            product_percent: this.getPercent(rewards.product_cur_amount, rewards.product_total_amount),
            product_percentbar: this.getPercent(rewards.product_cur_amount, rewards.product_total_amount, true)
          };
          console.log(this.rewardDetail);
        },
        error => {
          // console.log(error);
        },
        () => {
          this.createElementService.endLoading();
        }
      );
  }

  private getPercent(amount: number, target: number, max?: boolean): number {
    const p = Math.round(amount / target * 100);
    if (max) {
      return p > 100 ? 100 : p;
    } else {
      return p;
    }
  }

  private getTerm(endDate: string): string {
    const end = new Date(endDate).getTime();
    const dday = Math.ceil((end - this.nowTime) / (1000 * 60 * 60 * 24));
    if (dday > 1) {
      return dday + '일 남음';
    } else if (dday <= 1 && dday > 0) {
      return '오늘 마감';
    } else {
      return '종료';
    }
  }

  private isDeadline(endDate: string): boolean {
    const end = new Date(endDate).getTime();
    const dday = Math.ceil((end - this.nowTime) / (1000 * 60 * 60 * 24));
    return dday > 0 && dday <= 3 ? true : false;
  }

  goFunding() {
    this.loginService.isAuthenticated();
    if (this.loginService.isLogin) {
      this.router.navigate(['/funding/step10', this.id]);
    } else {
      this.router.navigate(['/login']);
    }
  }

  liketoggle(n: number) {
    console.log(this.userInfo);

    const token = this.loginService.getToken();
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `token ${token}`
      })
    };

    const payload = {
      user: this.userInfo.pk,
      product: this.id
    };


    if (this.isLiked) {
      this.http.delete<RewardDetail>(`${this.rewardsUrl}/product_like/${this.id}`, httpOptions)
        .subscribe(() =>
        this.createElementService.toast('좋아하는 프로젝트에서 제외되었습니다.'));
      this.isLiked = false;
    } else {
      console.log(payload);
      this.http.post<ProductLike>(`${this.rewardsUrl}/product_like/`, payload, httpOptions)
        .subscribe(res => { console.log('post res', res); });
      this.renderLike();
        this.createElementService.toast('좋아하는 프로젝트에 저장되었습니다.\n관련된 다양한 소식을 전해드리겠습니다!');
      this.isLiked = true;
    }
  }

  renderLike() {
    const token = this.loginService.getToken();
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `token ${token}`
      })
    };

    this.http.get<RewardDetail>(`${this.rewardsUrl}/${this.id}`, httpOptions)
    .subscribe((res) => {
      console.log('[get res]', res);
      // this.rewardDetail.product_interested_count = res;
     } );
  }

}
