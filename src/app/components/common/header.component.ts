import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-header',
  template: `
    <div class="header">
      <div class="gnb">
        <a [routerLink]="['/main']" class="logo" title="wadiz"></a>
        <ul class="gnb-menu">
          <li>
            <div class="user" (click)="isUserPop = !isUserPop"></div>
          </li>
          <li>
            <a [routerLink]="['/login']" title="login">로그인</a>
          </li>
          <li>
            <a [routerLink]="['/join']" title="join">회원가입</a>
          </li>
        </ul>
      </div>
      <div class="user-pop" [@userState]="isUserPop">
        <div class="user-pop-bg" (click)="isUserPop = !isUserPop"></div>
        <div class="user-pop-body">
          <div class="user-profile">
            <div class="user-picture"></div>
            <div class="user-name">noname</div>
          </div>
          <ul class="user-menu">
            <li>
              <a [routerLink]="['/fundinglist']" class="fundinglist">펀딩 내역</a>
            </li>
            <li>
              <a [routerLink]="['/likelist']" class="likelist">좋아한 프로젝트</a>
            </li>
          </ul>
          <ul class="user-setting">
            <li><a [routerLink]="['/setting']" class="setting">설정</a></li>
            <li><a [routerLink]="['/logout']" class="logout">로그아웃</a></li>
          </ul>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./header.component.css'],
  animations: [
    trigger('userState', [
      state('false', style({
        opacity: '0',
        top: '-8px',
        display: 'none'
      })),
      state('true',   style({
        opacity: '1',
        top: '0',
        display: 'block'
      })),
      transition('false => true', animate('100ms ease-in')),
      transition('true => false', animate('100ms ease-out'))
    ])
  ]
})
export class HeaderComponent implements OnInit {
  isUserPop = false;

  constructor() { }

  ngOnInit() {
  }
}
