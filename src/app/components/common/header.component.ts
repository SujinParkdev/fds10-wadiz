import { Component, OnInit, ViewChild, ComponentFactoryResolver, HostListener } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import { CreateElementService } from '../../create-element.service';
import { LoginService } from '../../core/services/login.service';
import { Router } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-header',
  template: `
    <div class="header">
      <div class="gnb">
        <a [routerLink]="['/main']" class="logo" title="wadiz"></a>
        <ul class="gnb-menu">
          <li *ngIf="loginService.isLogin">
            <div class="user" (click)="isUserPop = !isUserPop"></div>
          </li>
          <li *ngIf="!loginService.isLogin">
            <a ng-href="#" title="login" (click)="login()">로그인</a>
          </li>
          <li *ngIf="!loginService.isLogin">
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
            <li><a ng-href="#" class="logout" (click)="logout()">로그아웃</a></li>
          </ul>
        </div>
      </div>
      <div class="page-top" [class.active]="isScrollTop" (click)="scrollTop()"></div>
    </div>
  `,
  styleUrls: ['./header.component.css'],
  animations: [
    trigger('userState', [
      state('false' , style({
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
  isScrollTop = false;

  constructor(
    private router: Router,
    private createElementService: CreateElementService,
    public loginService: LoginService  
  ) { }

  ngOnInit() {
    this.loginService.isLogin = true;
    this.router.navigate(['/funding/1/step1']);
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    if (scrollTop >= window.innerHeight) {
      this.isScrollTop = true;
    } else {
      this.isScrollTop = false;
    }
    this.isUserPop = false;
  }

  scrollTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  logout() {
    console.log(this.router.url);
    this.createElementService.confirm('로그아웃 하시겠습니까?', '확인', () => {
      this.createElementService.alert('로그아웃 되었습니다.', () => {
        this.isUserPop = false;
        this.loginService.isLogin = false;
        this.router.navigate(['main']);
      });
    });
  }

  login() {
    this.loginService.isLogin = true;
  }
}
