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
              <span class="link-text fas">
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
              <button class="reward-remove fas" (click)="removeList(1)"></button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  `,
  styleUrls: ['./likelist.component.css']
})
export class LikelistComponent implements OnInit {
  likeList = [];

  constructor() { }

  ngOnInit() {
    this.likeList = [
      {
        id: 1
      }
    ];
  }

  goReward() {
    console.log('go');
  }

  removeList(id: number) {
    this.likeList = this.likeList.filter(like => like.id !== id);
  }

}
