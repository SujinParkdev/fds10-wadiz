import { Component, OnInit,  } from '@angular/core';
import { ModalService } from './modal.service';

@Component({
  selector: 'app-join',
  template: `
    <div class="join-container content">
      <h2 class="join-large-text">회원가입</h2>
      <p class="join-medium-text">와디즈 펀딩을 위한 최소한의 정보를 받고있습니다.</p>

      <!--이메일 섹션-->
      <form name="frm_join" id="frm_join" method="post" class="wz form">
      <!--동의 체크 박스-->


      <div class="field check-list">
        <div class="control">
          <label class="checkbox">
            <input type="checkbox" class="checkbox">
            <p class="text text-large">회원가입</p>
            {{clickMessage}}
            <p class="text text-normal">와디즈 서비스 이용약관, 쿠폰포인트 오픈알림 뉴스레터 수신(선택)</p>
          </label>
          <button type="button" class="button" (click)="openModal('custom-modal-1')">
            C
            <i class="icon"> </i>
          </button>
        </div>
      </div>

      <!--동의 모달-->


      <modal id="custom-modal-1">
      <div class="modal">
          <div class="modal-content">
          <div class="field">
          <p class="text-large">약관확인</p>
          <p>약관에 동의하셔야 이용가능합니다.</p>
          <form class="wz-form">
            <label>
              <input type="checkbox" name="agreeAllCheckBox" id="agreeAllCheckBox" class="input-agree-term" value="Y">
              <span class="">전체동의</span>
            </label>
            <ul>
              <li>
                <label>
                  <input type="checkbox" name="agreeCheck" id="agreeCheck" class="input-agree-term" value="Y" required>
                  와디즈 서비스 이용약관(필수)
                </label>
                <ul class="term-more">
                  <li class="more">
                    <p>회원가입 약관</p>
                    <input type="checkbox" class="toggle" id="terms-toggle1">
                    <label class="toggle" for="terms-toggle1">
                      <span>내용보기</span>
                      <span>내용닫기</span>
                    </label>
                    <div class="term-box">
                    <div class="article">
                      <article>
    <h1>회원가입약관</h1>
    <p>와디즈 회원가입과 관련하여 필요한 사항을 규정합니다.</p>
    <div class="update">
      <h5>업데이트 노트</h5>
      <ul>
        <li>본 약관은 2016년 01월 25일부터 시행됩니다.</li>
      </ul>
    </div>
    <ol class="table">
      <li><a href="#제1장-총칙">제1장 총칙</a></li>
      <li><a href="#제2장-서비스의-이용">제2장 서비스의 이용</a></li>
      <li><a href="#제3장-회원정보의-보호-및-관리">제3장 회원정보의 보호 및 관리</a></li>
      <li><a href="#제4장-기타">제4장 기타</a></li>
      <li><a href="#부칙">부칙</a></li>
      <li><a href="#별지-서비스-이용료">별지: 서비스 이용료</a></li>
    </ol>
                  </article>
                  </div>
                  </div>
                  </li>

                  <li class="more">
                      <p>리워드 서비스 이용약관</p>
                      <input type="checkbox" class="toggle" id="terms-toggle2">
                      <label class="toggle" for="terms-toggle2">
                        <span>내용보기</span>
                        <span>내용닫기</span>
                      </label>
                  </li>

                  <li class="more">
                    <p>리워드 서비스 개인정보취급방침</p>
                    <input type="checkbox" class="toggle" id="terms-toggle3">
                    <label class="toggle" for="terms-toggle3">
                      <span>내용보기</span>
                      <span>내용닫기</span>
                    </label>
                  </li>

                  <li>
                    <label>
                    <input type="checkbox" name="allowEmail" id="allowEmail" class="input-agree-term" value="0">
                    쿠폰∙포인트, 오픈알림, 뉴스레터 수신(선택)
                    <em class="wz text caption2">동의하지 않으면, 웰컴패키지(첫 펀딩을 위한 혜택)을 받을 수 없습니다. (이메일 수신)</em>
                    </label>
                  </li>
                </ul>
              </li>
            </ul>
          <button type="button" class="modal-agree" disabled="true">확인</button>
          </form>
          <button type="button" class="modal-close" (click)="closeModal('custom-modal-1')" title="창닫기"></button>
          </div>
          </div>
      </div>
      <div class="modal-background"></div>
      </modal>


      <!--동의 모달-->
      <div id="email-field" class="field check-email-field" >
        <div class="control">
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
  clickMessage = '';


  constructor(private modalService: ModalService) { }

  ngOnInit() {
  }

  openCodal() {
    this.clickMessage = 'You are my hero!';
  }

  openModal(id: string) {
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }

}
