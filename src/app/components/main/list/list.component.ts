import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { HttpClient } from '../../../../../node_modules/@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Router, ActivatedRoute } from '../../../../../node_modules/@angular/router';

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
  status: string;
  order: string;
  isSearch = false;
  nextMoreUrl = '';
  rewardsTitle = '전체보기';
  rewardsUrl = environment.rewardsUrl;

  @ViewChild('keyword') keyword: ElementRef;
  @Input() categoryPath: string;

  constructor(
    private http: HttpClient,
    private router: Router,
    private activateRoute: ActivatedRoute) {
    activateRoute.queryParams.subscribe(params => {
      this.rewardsTitle = params['filter'] ? params['filter'] : '전체보기';
      let param = params['filter'];
      const path = router.url.replace('/main', '');
      if (param === '전체보기') { param = ''; }
      if (path) {
        this.rewardsUrl += '/category/?category=' + param;
      }
    });
  }

  ngOnInit() {
    this.statusArr = [
      { key: '전체',
        value: 'ALL'
      },
      { key: '펀딩중',
        value: 'N'
      },
      { key: '종료된',
        value: 'Y'
      }
    ];

    this.orderArr = [
      { key: '최신순',
        value: 'recent'
      },
      { key: '펀딩액순',
        value: 'amount'
      },
      { key: '인기순',
        value: 'popular'
      },
      { key: '마감임박순',
        value: 'closing'
      }
    ];

    this.status = this.statusArr[0].key;
    this.order = this.orderArr[0].key;

    this.http.get<RewardApi>(this.rewardsUrl).subscribe(
      res => {
        this.rewards = res.results;
        this.nextMoreUrl = res.next ? res.next : '';
      },
      error => {
        console.log(error);
      }
    );
  }

  setStatus(index: number) {
    this.status = this.statusArr[index].key;
  }

  setOrder(index: number) {
    this.order = this.orderArr[index].key;
  }

  rewardSearch(value: string) {
    if (!this.isSearch) {
      this.isSearch = true;
        setTimeout(() => {
          const keyword = this.keyword.nativeElement as HTMLElement;
          keyword.focus();
        }, 250);
      return;
    }
  }

  rewardMore() {
    this.http.get<RewardApi>(this.nextMoreUrl).subscribe(
      res => {
        this.rewards = this.rewards.concat(res.results);
        this.nextMoreUrl = res.next ? res.next : '';
      },
      error => {
        console.log(error);
      }
    );
  }

  getPercent(amount, target): number {
    const p = Math.round(amount / target * 100);
    return p > 100 ? 100 : p;
  }

}
