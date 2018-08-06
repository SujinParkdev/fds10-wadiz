import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  template: `
    <div class="login-container">

      <div class="user-sign-container">
      <div class="wz container form-container form-login">
        <h2 class="wz text display2">로그인</h2>
        <form name="frm_login" id="frm_login" class="wz form">
          <div class="field">
            <div class="wz input">
              <input type="email" id="userName" name="userName" class="input-text" placeholder="이메일 아이디">
            </div>
            <em id="emailError" class="error-text helper error">이메일 형식이 올바르지 않습니다.</em>
          </div>
          <div class="field">
            <div class="wz input">
              <input type="password" id="password" name="password" class="input-text"  maxlength="17"  placeholder="비밀번호(영문, 숫자, 특수문자 포함 8자 이상)">
            </div>
            <p id="loginError" class="error-text helper error">와디즈에 등록되지 않은 아이디거나, 아이디 또는 비밀번호가 회원정보와 일치하지 않습니다.</p>
          </div>
          <div class="recaptcha">
            <p id="recaptchaMessage" class="error-text">잘못된 아이디 또는 비밀번호로 여러번 로그인 시도하였습니다. <br>계정 보안 조치를 위해 아래 사항을 체크하신 뒤 다시 진행하세요.</p>
            <p id="recaptchaComplete" class="complete-text"><span>계정 보안 조치가 완료되었습니다!</span>협조해주셔서 감사합니다. 로그인을 다시 시도하세요</p>
            <div class="g-recaptcha" data-sitekey="6Lcr70MUAAAAAHfmxpaHaXPDlgLIwiS6gRO5YCcB" data-size="600" id="recaptcha" data-callback="recaptchaComplete" style="display: none;"></div>
          </div>
          <div class="login-action wzui">
            <label id="saveIdLabel" class="save">
              <input id="saveUserId" type="checkbox" title="아이디 저장">
              <span id="txtSaveId" class="wz text caption2">아이디 저장</span>
            </label>
          </div>
          <button type="button" id="btnLogin" class="wz button primary block submit-button">로그인</button>
        </form>
        <div class="bottom-message">
          <p>아직 와디즈 계정이 없나요?<a href="/web/waccount/wAccountRegistIntro" data-return-url>회원가입</a></p>
        </div>
      </div>
     </div>

    </div>
  `,
  styles: [`
    .login-container {
      margin: 0 auto;
      width: 100%;
      max-width: 400px;
      padding: 80px 16px 96px 16px;
      background: skyblue;
    }
  `]
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
