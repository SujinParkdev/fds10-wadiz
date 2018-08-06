import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-join',
  template: `
    <div class="join-container content">
      <p class="join-large-text">회원가입</p>
      <p class="join-medium-text">와디즈 펀딩을 위한 최소한의 정보를 받고있습니다.</p>
      <!--이메일 섹션-->
      <form name="frm_join" id="frm_join" method="post" class="wz form">
      <div id="email-field" class="field check-email-field" >
        <div class="wz input action">
          <input id="userName" name="userName" type="email" class="input email large" placeholder="이메일 계정" readonly="true" required>
          <button id="btnCheckEmail" class="wz button primary dense" type="button" disabled="true">인증하기</button>
        </div>
      </div>
      <!--이름 섹션-->
      <div class="field">
        <div class="wz input icon">
          <input id="nickName" name="nickName" type="text" class="input text block large" maxlength="20" placeholder="이름" value="" readonly="true" required>
          <i class="icon person-o"></i>
        </div>
      </div>
      <!--비밀번호 섹션-->
      <div class="field group">
      <div class="field">
        <div class="wz input icon">
          <input id="pwd1" type="password" name="password" class="input large" placeholder="비밀번호 입력" readonly="true" required>
          <i class="icon lock-o"></i>
        </div>
      </div>
      <div class="field">
        <div class="wz input icon">
          <input id="pwd2" type="password" name="password2" class="input large" placeholder="비밀번호 확인" readonly="true" required>
          <i class="icon lock-o"></i>
        </div>
          <em class="helper">영문, 숫자, 특수문자 (!@#$%^&*+=-)를 조합한 8자 이상</em>
        </div>
      </div>
      <button type="submit" id="btnJoin" class="wz-btn primary block" disabled>완료</button>
      </form>
    </div>
  `,
  styleUrls: [`./join.component.css`,`./join2.component.css`]
})
export class JoinComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
