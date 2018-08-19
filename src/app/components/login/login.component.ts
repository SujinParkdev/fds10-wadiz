import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, FormControl } from '@angular/forms';
import { User } from '../../core/interface/user';
import { AuthService } from '../../core/services/login-auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  template: `
    <div class="login-container">

      <div class="user-sign-container">
      <div class=" field form-container form-login">
        <h2 class="login-heading-text">로그인</h2>
        <form name="frm_login" id="frm_login" class="login-form-container"
          [formGroup]="signinForm"
          (ngSubmit)="signin()" novalidate>
          <div class="field">
            <div class="control">
              <input formControlName="userName" type="email" id="userName" name="userName" class="input" placeholder="이메일 아이디" pattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" required>
            </div>
            <em id="emailError" class="error-text help">이메일 형식이 올바르지 않습니다.</em>
          </div>
          <div class="field">
            <div class="control">
              <input formControlName="password" type="password" id="password" name="password" class="input"  maxlength="17"  placeholder="비밀번호(영문, 숫자, 특수문자 포함 8자 이상)">
            </div>
            <p id="loginError" class="error-text help">와디즈에 등록되지 않은 아이디거나, 아이디 또는 비밀번호가 회원정보와 일치하지 않습니다.</p>
          </div>
          <div class="control">
            <label id="saveIdLabel" class="checkbox">
              <input id="saveUserId" type="checkbox" title="아이디 저장">
              <span id="txtSaveId" class="caption">아이디 저장</span>
            </label>
          </div>
          <div class="control">
            <button [disabled]="signinForm.invalid" type="submit" class="btn btn-lg btn-success btn-block">Sign In</button>
            <button type="button" id="btnLogin" class="button submit-button">로그인</button>
          </div>
        </form>
        <div class="control bottom-message">
          <p>아직 와디즈 계정이 없나요?<a href="/join">회원가입</a></p>
        </div>
        <pre>{{ signinForm.value | json }}</pre>
        <pre>{{ signinForm.status }}</pre>
      </div>
     </div>

    </div>
  `,
  styleUrls: [`./login.component.css`]
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
export class SigninComponent implements OnInit {
  signinForm: FormGroup;
  message: string;

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router) { }

  ngOnInit() {
    this.signinForm = this.fb.group({
      userid: ['', [
        Validators.required,
        Validators.pattern(/^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/)
      ]],
      password: ['', [Validators.required,
        Validators.pattern(/[a-zA-Z0-9]/),
        Validators.minLength(4),
        Validators.maxLength(10)
      ]]
    });
  }

  signin() {
    console.log('[payload]', this.signinForm.value);
    this.auth.signin(this.signinForm.value)
      .subscribe(
        () => this.router.navigate(['dashboard']),
        ({error}) => {
          console.log(error.message);
          this.message = error.message;
        }
      );
  }

  get userid() {
    return this.signinForm.get('userid');
  }

  get password() {
    return this.signinForm.get('password');
  }
}