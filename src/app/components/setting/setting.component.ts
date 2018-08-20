import { Component, OnInit } from '@angular/core';
import { CreateElementService } from '../../core/services/create-element/create-element.service';
import { LoginService } from '../../core/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-setting',
  template: `
    <div class="setting-container">
      <div class="field">
        <label class="text">개인정보설정</label>
        <input class="input" type="text" placeholder="nickname">
        <input class="input" type="text" placeholder="email">
        <label class="text">비밀번호설정</label>
        <input class="input" type="text" placeholder="새 비밀번호">
        <em class="help">영문, 숫자, 특수문자 (!@#$%^&*+=-)를 조합한 8자 이상</em>
        <input class="input" type="text" placeholder="새 비밀번호 확인">
        <input class="input" type="text" placeholder="현재 비밀번호">
      </div>

      <div class="control">
        <button type="button" ng-href="#" class="logout fas" >확인</button>
      </div>
      <div class="control">
        <button type="button" ng-href="#" class="logout quit fas" (click)="logout()">회원탈퇴</button>
      </div>
    </div>

  `,
  styles: [`
    .setting-container {
      margin: 0 auto;
      width: 100%;
      max-width: 400px;
      padding: 40px 16px;
      background: pink;
    }
    .logout {
      width: 100%;
      margin-bottom: 5px;
    }
    .quit {
      background-color: #d10;
    }
    .input {
      margin-bottom: 2%;
    }
  `]
})
export class SettingComponent implements OnInit {
  isUserPop = false;
  isScrollTop = false;

  constructor(  private router: Router,
    private createElementService: CreateElementService,
    public loginService: LoginService) { }

  ngOnInit() {
  }

  logout() {
    console.log(this.router.url);
    this.createElementService.confirm('정말로 탈퇴 하시겠습니까?', '확인', () => {
      this.createElementService.alert('탈퇴가 완료 되었습니다.', () => {
        this.isUserPop = false;
        this.router.navigate(['main']);
      });
    });
  }

}
