import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  template: `
    <div class="login-container">

      <div class="user-sign-container">
      <div class=" field form-container form-login">
        <h2 class="login-heading-text">로그인</h2>
        <form name="frm_login" id="frm_login" class="login-form-container">
          <div class="field">
            <div class="control">
              <input type="email" id="userName" name="userName" class="input" placeholder="이메일 아이디" pattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" required>
            </div>
            <em id="emailError" class="error-text help">이메일 형식이 올바르지 않습니다.</em>
          </div>
          <div class="field">
            <div class="control">
              <input type="password" id="password" name="password" class="input"  maxlength="17"  placeholder="비밀번호(영문, 숫자, 특수문자 포함 8자 이상)">
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
            <button type="button" id="btnLogin" class="button submit-button">로그인</button>
          </div>
        </form>
        <div class="control bottom-message">
          <p>아직 와디즈 계정이 없나요?<a href="/join">회원가입</a></p>
        </div>
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
