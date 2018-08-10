import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

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

interface Category {
  id: number;
  name: string;
  img: string;
  url: string;
}

interface HashMap {
  key: string;
  value: string;
}

interface RewardApi {
  count: number;
  next?: string;
  previous?: string;
  results: Reward[];
}

@Component({
  selector: 'app-main',
  templateUrl: 'main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  rewards: Reward[];
  categorys: Category[];
  categoryX = 0;
  statusArr: HashMap[];
  orderArr: HashMap[];
  status: string;
  order: string;
  isSearch = false;
  rewardsUrl = environment.rewardsUrl;
  @ViewChild('keyword') keyword: ElementRef;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.categorys = [
      {
        id: 1,
        name: '전체보기',
        img: 'https://cdn.wadiz.kr/resources/assets/img/912f519d6d62214aea09ffd35630daab.jpg',
        url: ''
      },
      {
        id: 2,
        name: '테크·가전',
        img: 'https://cdn.wadiz.kr/resources/assets/img/56a64dc0f600839f467920a2598e1340.jpg',
        url: '/tech'
      },
      {
        id: 3,
        name: '패션·잡화',
        img: 'https://cdn.wadiz.kr/resources/assets/img/29ca1d6c801542767c5f9fe2a14746c6.jpg',
        url: '/fashion'
      },
      {
        id: 4,
        name: '뷰티',
        img: 'https://cdn.wadiz.kr/resources/assets/img/b8f23dda2954a81dcb83ee92460d14fe.jpg',
        url: '/beauty'
      },
      {
        id: 5,
        name: '푸드',
        img: 'https://cdn.wadiz.kr/resources/assets/img/8794e59843df576beb42a54be20444a6.jpg',
        url: '/food'
      },
      {
        id: 6,
        name: '홈리빙',
        img: 'https://cdn.wadiz.kr/resources/assets/img/c215ebf31bc7d3d28a2e427ce47c4886.jpg',
        url: '/home'
      },
      {
        id: 7,
        name: '디자인소품',
        img: 'https://cdn.wadiz.kr/resources/assets/img/165c7094a3543601cf70fa4ba859ac96.jpg',
        url: '/design'
      },
      {
        id: 8,
        name: '여행·레저',
        img: 'https://cdn.wadiz.kr/resources/assets/img/963a880fd2ee56a0e1869cee8b69c363.jpg',
        url: '/travel'
      },
      {
        id: 9,
        name: '스포츠·모빌리티',
        img: 'https://cdn.wadiz.kr/resources/assets/img/9d7f8702ca73c5fcc73bc871983fc684.jpg',
        url: '/sport'
      },
      {
        id: 10,
        name: '반려동물',
        img: 'https://cdn.wadiz.kr/resources/assets/img/3e377b6e291726caad316b351ff0b0e1.jpg',
        url: '/pet'
      },
      {
        id: 11,
        name: '공연·컬쳐',
        img: 'https://cdn.wadiz.kr/resources/assets/img/b69e31ae71576ea7828dbd843523f290.jpg',
        url: '/design'
      },
      {
        id: 12,
        name: '소셜·캠페인',
        img: 'https://cdn.wadiz.kr/resources/assets/img/ce7018e9f7e9edff7f485690aa8eafb9.jpg',
        url: '/social'
      },
      {
        id: 13,
        name: '교육·키즈',
        img: 'https://cdn.wadiz.kr/resources/assets/img/a2a7bf7dd6a7033044bffdeee61cb10b.jpg',
        url: '/education'
      },
      {
        id: 14,
        name: '게임·취미',
        img: 'https://cdn.wadiz.kr/resources/assets/img/054172ab8f51de834b1bdb70dbf1ebe0.jpg',
        url: '/game'
      },
      {
        id: 15,
        name: '출판',
        img: 'https://cdn.wadiz.kr/resources/assets/img/91f7858ffb25fc99f643acafdba45546.jpg',
        url: '/publishing'
      }
    ];

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

    console.log(this.rewardsUrl);

    this.http.get<RewardApi>(this.rewardsUrl)
      .subscribe(
        res => {
          this.rewards = res.results;
        },
        error => {
          console.log(error);
        }
      );
  }

  prevCategory() {
    this.categoryX += 930;
  }

  nextCategory() {
    this.categoryX -= 930;
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

  getPercent(amount, target): number {
    const p = Math.round(amount / target * 100);
    return p > 100 ? 100 : p;
  }
}
