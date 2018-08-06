import { Component, OnInit,  } from '@angular/core';

@Component({
  selector: 'app-join',
  template: `
    <div class="join-container content">
      <h2 class="join-large-text">회원가입</h2>
      <p class="join-medium-text">와디즈 펀딩을 위한 최소한의 정보를 받고있습니다.</p>
      <!--동의 체크 박스-->
      <div class="control">
      <button (click)="openModal('custom-modal-1')">Open Modal 1</button>
      </div>




      <!--동의 모달-->



      <!--이메일 섹션-->
      <form name="frm_join" id="frm_join" method="post" class="wz form">
      <div id="email-field" class="field check-email-field" >
        <div class="wz input action">
          <input id="userName" name="userName" type="email" class="input email large" placeholder="이메일 계정" readonly="true" required>
        </div>
      </div>
      <!--이름 섹션-->
      <div class="field">
        <div class="control">
          <input id="nickName" name="nickName" type="text" class="input text block large" maxlength="20" placeholder="이름" value="" readonly="true" required>
        </div>
      </div>
      <!--비밀번호 섹션-->
      <div class="field group">
      <div class="field">
        <div class="control">
          <input id="pwd1" type="password" name="password" class="input large" placeholder="비밀번호 입력" readonly="true" required>
        </div>
      </div>
      <div class="field">
        <div class="control">
          <input id="pwd2" type="password" name="password2" class="input large" placeholder="비밀번호 확인" readonly="true" required>
        </div>
          <em class="help">영문, 숫자, 특수문자 (!@#$%^&*+=-)를 조합한 8자 이상</em>
        </div>
      </div>
      <div class="control">
        <button type="button" id="btnJoin" class="button submit-button" disabled>완료</button>
      </div>
      </form>
    </div>
  `,
  styleUrls: [`./join.component.css`]
})
export class JoinComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
}
