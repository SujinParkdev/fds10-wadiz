import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { HttpClient } from '../../../../../node_modules/@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Router, ActivatedRoute } from '../../../../../node_modules/@angular/router';
import { MainService } from '../../../core/services/main.service';
import { CreateElementService } from '../../../core/services/create-element/create-element.service';
import { delay } from 'rxjs/operators';

interface Reward {
  pk: number;
  product_name: string;
  product_type: string;
  product_company_name: string;
  product_img: string;
  product_interested_count: number;
  product_start_time: string;
  product_end_time: string;
  product_cur_amount: number;
  product_total_amount: number;
  product_term: string;
  product_deadline: boolean;
  product_percent: number;
  product_percentbar: number;
}

interface RewardApi {
  count: number;
  next?: string;
  previous?: string;
  results: Reward[];
}

interface HashMap {
  key: string;
  value: string;
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  rewards: Reward[];
  statusArr: HashMap[];
  orderArr: HashMap[];
  status: HashMap;
  order: HashMap;
  isSearch = false;
  searchKeyword = '';
  nextMoreUrl = '';
  rewardsTitle = '전체보기';
  rewardsUrl = environment.rewardsUrl;
  categoryPath = '';
  nowTime: number;

  @ViewChild('keyword') keyword: ElementRef;

  constructor(
    private http: HttpClient,
    private router: Router,
    private activateRoute: ActivatedRoute,
    private mainServcie: MainService,
    private createElementService: CreateElementService
  ) {
    activateRoute.params.subscribe(params => {
      this.categoryPath = params['category'] ? params['category'] : '';
      if (!this.categoryPath) {
        this.router.navigate(['/main/all']);
      } else {
        this.statusArr = [
          { key: '전체', value: 'A' },
          { key: '펀딩중', value: 'Y' },
          { key: '종료된', value: 'N' }
        ];

        this.orderArr = [
          { key: '최신순', value: '-product_start_time' },
          { key: '펀딩액순', value: 'product_cur_count' },
          { key: '인기순', value: 'product_interested_count' },
          { key: '마감임박순', value: 'product_end_time' }
        ];

        this.status = this.statusArr[0];
        this.order = this.orderArr[0];

        this.getRewards();
      }
    });
  }

  ngOnInit() {
    this.nowTime = Date.now();
  }

  getRewards() {
    this.rewardsTitle = this.mainServcie.categorys.find(category => category.url === this.categoryPath).name;

    const path = this.rewardsTitle === '전체보기' ? '' : this.rewardsTitle;
    const url = this.rewardsUrl + `/search/?product_name=${this.searchKeyword}&category=${path}&is_funding=${this.status.value}&ordering=${this.order.value}`;

    this.createElementService.startLoading();
    this.http.get<RewardApi>(url)
    .pipe(
      delay(500)
    ).subscribe(
      res => {
        this.rewards = [];
        res.results.forEach(reward => {
          const _reward = {
            ...reward,
            product_term: this.getTerm(reward.product_end_time),
            product_deadline: this.isDeadline(reward.product_end_time),
            product_percent: this.getPercent(reward.product_cur_amount, reward.product_total_amount),
            product_percentbar: this.getPercent(reward.product_cur_amount, reward.product_total_amount, true)
          };
          this.rewards.push(_reward);
        });
        this.nextMoreUrl = res.next ? res.next : '';
      },
      error => {},
      () => {
        this.createElementService.endLoading();
      }
    );
  }

  setStatus(index: number) {
    this.status = this.statusArr[index];
    this.getRewards();
  }

  setOrder(index: number) {
    this.order = this.orderArr[index];
    this.getRewards();
  }

  rewardSearchEnter(value: string) {
    this.searchKeyword = value;
    this.getRewards();
  }

  rewardSearch(value: string) {
    if (!this.isSearch) {
      this.isSearch = true;
        setTimeout(() => {
          const keyword = this.keyword.nativeElement as HTMLElement;
          keyword.focus();
        }, 250);
      return;
    } else {
      this.searchKeyword = value;
      this.getRewards();
    }
  }

  rewardMore() {
    this.createElementService.startLoading();
    this.http.get<RewardApi>(this.nextMoreUrl)
    .pipe(
      delay(500)
    ).subscribe(
      res => {
        res.results.forEach(reward => {
          const _reward = {
            ...reward,
            product_term: this.getTerm(reward.product_end_time),
            product_deadline: this.isDeadline(reward.product_end_time),
            product_percent: this.getPercent(reward.product_cur_amount, reward.product_total_amount),
            product_percentbar: this.getPercent(reward.product_cur_amount, reward.product_total_amount, true)
          };
          this.rewards.push(_reward);
        });
        this.nextMoreUrl = res.next ? res.next : '';
      },
      error => {},
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
}
