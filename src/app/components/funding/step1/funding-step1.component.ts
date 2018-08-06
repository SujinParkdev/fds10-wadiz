import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-funding-step1',
  template: `
    <div class="notice-pop" *ngIf="isNoticePop">
      <div class="notice-container">
        <a [routerLink]="['/reward/detail/1']" class="notice-back-btn">스토리로 돌아가기</a>
        <p class="title"><strong>잠깐!</strong> 펀딩과 쇼핑이 어떻게 다른지 확인 후 펀딩을 진행하세요</p>
        <form [formGroup]="noticeForm" novalidate>
          <dl>
            <dt><label><input type="checkbox"  formControlName="check1"><span>바로 결제되지 않아요</span></label></dt>
            <dd>
              <p>지금 펀딩하시면 <strong>결제 예약</strong>되며, 목표금액 달성 시, <strong>2018.08.29</strong>에 모두 함께 결제됩니다.</p>
            </dd>
						<dt><label><input type="checkbox" formControlName="check2"><span>펀딩 종료 후에는 취소할 수 없어요</span></label></dt>
            <dd>
              <p>리워드 결제 예약 취소와 변경은 <strong>프로젝트 펀딩기간 중</strong>에만 가능합니다.<br>펀딩 취소는 <strong>2018.08.28</strong>까지 가능합니다. 이후로는 취소가 불가합니다.
            </p></dd>
            <dt><label><input type="checkbox"  formControlName="check3"><span>바로 리워드가 발송되지 않아요</span></label></dt>
            <dd>
              <p>리워드는 메이커가 <strong>약속한 날짜</strong>에 발송됩니다.<br>선택한 리워드의 발송 예정일을 확인한 후에 펀딩해 주세요.</p>
              <p><em>
	              - 리워드 펀딩 특성상 발송이 지연되거나 불가할 수 있습니다.<br>
	              - 펀딩 안내 탭의 리워드 발송 예상 변동 기간 및 교환, 환불, AS 정책을 참고해주세요.<br>
	              - 기부•후원인 경우, 리워드가 발송되지 않습니다.
              </em></p>
            </dd>
          </dl>
          <button type="button" class="notice-close-btn" (click)="noticePopClose()" [disabled]="noticeForm.invalid">계속해서 펀딩하기</button>
        </form>
      </div> 
    </div>
  `,
  styles: [`
    .notice-pop {
      position: fixed;
      width: 100%;
      height: 100%;
      background: rgba(0,0,0,.8);
      top: 0;
      left: 0;
      z-index: 6000;
      transition: all .2s;
      overflow-y: auto;
    }
    .notice-container {
      position: relative;
      width: 100%;
      max-width: 560px;
      margin: 5% auto;
      padding: 36px 32px 76px;
      background: #fff;
    }
    .notice-back-btn {
      color: rgba(0,0,0,.54);
    }
    .notice-back-btn:hover {
      color: rgba(0,0,0,.84);
    }
    .notice-close-btn {
      opacity: 1;
      border: 0;
      position: absolute;
      bottom: 0;
      left: 0;
      margin: 0;
      width: 100%;
      height: 56px;
      line-height: 56px;
      font-weight: 700;
      padding: 0 32px;
      font-size: 21px;
      cursor: pointer;
      background-color: #00cca3;
      color: #fff;
      transition: all .2s;
    }
    .notice-close-btn:hover {
      background-color: #00be8f;
    }
    .notice-close-btn:disabled {
      cursor: no-drop;
      background-color: #e6eaed;
      color: hsla(0,0%,100%,.7);
    }
    .title {
      margin-bottom: 24px;
      line-height: 1.29;
      font-size: 28px;
      font-weight: 400;
    }
    .title strong {
      color: #363636;
      font-weight: 700;
    }
    .notice-container dt, .notice-container dd {
      border: 1px solid #f0f2f5;
    }
    .notice-container dd {
      margin-bottom: 12px;
      border-top: 0;
      padding: 16px;
    }
    .notice-container dd p {
      line-height: 1.33;
      letter-spacing: -.4px;
      font-weight: 400;
      font-size: 15px;
    }
    .notice-container dd p em {
      display: block;
      margin-top: 8px;
      margin-bottom: 0;
      color: #90949c;
      font-size: 13px;
      font-style: normal;
    }
    .notice-container label {
      padding: 12px;
      color: #babdc0;
      font-size: 17px;
      display: block;
      line-height: 24px;
      cursor: pointer;
    }
    .notice-container input[type=checkbox] {
      margin-top: -4px;
      border-radius: 50%;
      border-color: #e6eaed;
      width: 22px;
      height: 22px;
      display: inline-block;
      transition: all .2s;
      outline: none;
      border: 1px solid #babdc0;
      background: #fff;
      cursor: pointer;
      vertical-align: middle;
      box-sizing: border-box;
      -webkit-appearance: none;
      margin-right: 8px;
    }
    .notice-container input[type=checkbox]:before {
      display: inline-block;
      margin-top: -.2em;
      vertical-align: middle;
      text-transform: none;
      line-height: 1;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      font-style: normal;
      font-variant: normal;
      speak: none;
      content: "";
      font-size: 12px;
      font-weight: 700;
    }
    .notice-container span {
      transition: all .2s;
    }
    .notice-container input[type=checkbox]:checked+span {
      color: #7c8288;
    }
  `]
})
export class FundingStep1Component implements OnInit {
  isNoticePop = false;
  noticeForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.noticeForm = new FormGroup({
      check1: new FormControl(false, Validators.pattern('true')),
      check2: new FormControl(false, Validators.pattern('true')),
      check3: new FormControl(false, Validators.pattern('true'))
    });
  }

  noticePopClose() {
    this.isNoticePop = false;
  }

}
