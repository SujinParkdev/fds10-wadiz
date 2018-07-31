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
      background: url(https://png.icons8.com/android/50/00bf99/forward.png) no-repeat;
      background-size: contain;
      width: 12px;
      height: 12px;
      display: inline-block;
    }
  `]
})
export class LikelistComponent implements OnInit {
  likeList = [];

  constructor() { }

  ngOnInit() {
  }

}
