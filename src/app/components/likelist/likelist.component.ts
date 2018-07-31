import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-likelist',
  template: `
    <div class="likelist-container">
      <div class="title-container">
        <div class="title">좋아한 프로젝트</div>
      </div>
      <div class="list">
        <div class="empty-text" *ngIf="likeList.length === 0">
          <p>
            좋아하는 리워드 프로젝트가 없습니다.<br>
            프로젝트를 좋아해보실래요?<br><br>
            <a [routerLink]="['/main']">
              <span class="link-text">
                리워드 프로젝트 바로가기
              </span>
            </a>
          </p>
        </div>
        <ul class="likelist" *ngIf="likeList.length > 0">
          <li>
            <div class="reward" (click)="goReward();">
              <div class="reward-img-wrapper">
                <div class="reward-img"></div>
                <div class="reward-img-info">
                  <div class="reward-progressbar">
                    <span class="reward-progressbar-percent" [ngStyle]="{ 'width' : '134%' }"></span>
                  </div>
                  <div class="reward-percent">134%</div>
                  <div class="reward-amount">2,800,000원 달성</div>
                </div>
                <div class="reward-days">28일 남음</div>
              </div>
              <div class="reward-info">
                <div class="reward-title">[4차] 10초완성 밀크티베이스, 이제 마음껏 즐겨요.</div>
                <div class="reward-company">마녀의부엌</div>
                <div class="reward-category">푸드</div>
                <div class="reward-caution">성공해야 리워드</div>
              </div>
              <button class="reward-remove" (click)="removeList(1)"></button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  `,
  styles: [`
    .likelist-container {
      position: relative;
    }
    .likelist-container .title-container {
      position: relative;
      box-shadow: 0 1px 0 0 rgba(0,0,0,.08);
    }
    .likelist-container .title-container .title {
      width: 1032px;
      margin: 0 auto;
      padding: 56px 24px 44px;
      font-size: 36px;
      line-height: 44px;
      text-align: left;
      color: #44484b;
    }
    .likelist-container .list {
      background: #f5f7fa;
      padding-bottom: 160px;
    }
    .empty-text {
      font-size: 17px;
      line-height: 24px;
      text-align: center;
      padding-top: 100px;
    }
    .empty-text a {
      color: #00bf99;
    }
    .empty-text .link-text:after {
      content: "";
      background: url("https://png.icons8.com/android/50/00bf99/forward.png") no-repeat;
      background-size: contain;
      width: 12px;
      height: 12px;
      display: inline-block;
    }
    .likelist {
      position: relative;
      width: 960px;
      margin: 0 auto;
      padding-top: 50px;
    }
    .likelist:after {
      display: block;
      content: "";
      clear: both;
    }
    .likelist li {
      float: left;
      width: 320px;
      padding: 0 15px;
      margin-bottom: 20px;
    }
    .likelist li .reward {
      display: block;
      position: relative;
      cursor: pointer;
    }
    .likelist li .reward::after {
      position: absolute;
      background: rgba(0,0,0,0);
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      content: "";
      display: block;
      transition: all .3s;
    }
    .likelist li .reward:hover::after {
      position: absolute;
      background: rgba(0,0,0,.5);
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      content: "";
      display: block;
    }
    .likelist li .reward:hover .reward-remove {
      display: block;
    }
    .likelist li .reward .reward-remove {
      margin: 0;
      padding: 0;
      border: 0;
      outline: none;
      width: 40px;
      height: 40px;
      position: absolute;
      top: 5px;
      right: 5px;
      background: url("https://png.icons8.com/windows/40/ffffff/delete-sign.png") no-repeat;
      background-size: contain;
      z-index: 10;
      cursor: pointer;
      display: none;
    }
    .reward-img-wrapper {
      position: relative;
      width: 100%;
      height: 225px;
      overflow: hidden;
    }
    .reward-img-wrapper:after {
      position: absolute;
      width: 100%;
      height: 100%;
      border: 1px solid rgba(0,0,0,.06);
      content: "";
      top: 0;
      left: 0;
    }
    .reward-img {
      background: url("http://placehold.it/290x225") no-repeat;
      width: 100%;
      height: 225px;
    }
    .reward-img-info {
      padding: 10px 20px;
      position: absolute;
      bottom: 0;
      width: 100%;
      font-size: 14px;
      color: #fff;
      font-weight: 500;
    }
    .reward-img-info .reward-progressbar {
      width: 100%;
      height: 8px;
      background: rgba(255,255,255,.4);
      margin-bottom: 5px;
    }
    .reward-img-info .reward-progressbar .reward-progressbar-percent {
      max-width: 100%;
      height: 100%;
      display: block;
      background: #17e5bc;
    }
    .reward-img-info .reward-percent {
      float: left;
    }
    .reward-img-info .reward-amount {
      float: right;
    }
    .reward-days {
      position: absolute;
      top: 0;
      left: 0;
      background: #17e5bc;
      padding: 3px 10px;
      color: #fff;
      font-size: 12px;
    }
    .reward-info {
      background: #fff;
      width: 100%;
      height: 143px;
      padding: 20px;
      border: 1px solid #DADCE0;
      border-top: none;
    }
    .reward-info .reward-title {
      margin-bottom: 8px;
      font-size: 17px;
      font-weight: 600;
      line-height: 24px;
      max-height: 48px;
      color: #1d2129;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      word-wrap: break-word;
    }
    .reward-info .reward-company {
      margin-bottom: 16px;
      font-weight: 400;
      font-size: 13px;
      line-height: 18px;
      color: #90949c;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    .reward-info .reward-category {
      font-size: 13px;
      color: #0d0f12;
      float: left;
    }
    .reward-info .reward-caution {
      font-size: 11px;
      color: #00cca3;
      float: right;
      padding-top: 2px;
    }
  `]
})
export class LikelistComponent implements OnInit {
  likeList = [];

  constructor() { }

  ngOnInit() {
    this.likeList = [
      {
        id: 1
      }
    ]
  }

  goReward() {
    console.log('go');
  }

  removeList(id: number) {
    this.likeList = this.likeList.filter(like => like.id !== id);
  }

}
