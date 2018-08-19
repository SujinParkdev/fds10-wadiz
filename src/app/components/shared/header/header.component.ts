import { Component, OnInit, ViewChild, ComponentFactoryResolver, HostListener } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import { CreateElementService } from '../../../core/services/create-element/create-element.service';
import { LoginService } from '../../../core/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
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
    // this.loginService.isLogin = true;
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
