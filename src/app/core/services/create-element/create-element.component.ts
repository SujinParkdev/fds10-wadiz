import { Component, OnInit, ViewContainerRef, ElementRef, Renderer2 } from '@angular/core';
import { CreateElementService } from './create-element.service';

/*
  test template :
    <div class="fade-bg active">
    <div class="pop active">
      <div class="pop-text confirm-text">텍스트</div>
      <button class="pop-btn confirm-false-btn">취소</button>
      <button class="pop-btn confirm-true-btn">확인</button>
    </div>
    <div class="pop active">
      <div class="pop-text alert-text">텍스트</div>
      <button class="pop-btn alert-btn">확인</button>
    </div>
    <div class="toast active">텍스트</div>
 */

@Component({
  selector: 'app-create-element',
  template: ``,
  styles: [`
    :host {
      position: fixed;
      bottom: 10px;
      right: 10px;
      z-index: 999999;
    }
    .toast {
      width: 350px;
      background: rgba(0,0,0,.9);
      color: #fff;
      border-radius: 4px;
      margin-top: 10px;
      padding: 15px;
      transition: all .8s cubic-bezier(0.68, -0.55, 0.265, 1.55);
      transform: translate(400px);
      opacity: 0;
    }
    .toast.active {
      transform: translate(0);
      opacity: 1;
    }
    .fade-bg {
      position: fixed;
      background: rgba(0,0,0,.8);
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      z-index: 99999;
      opacity: 0;
      transition: all .2s;
    }
    .fade-bg.active {
      opacity: 1;
    }
    .pop {
      position: fixed;
      background: #fff;
      width: 300px;
      top: -20%;
      left: 50%;
      margin-left: -150px;
      opacity: 0;
      transition: all .6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
      border: 1px solid #eee;
      border-radius: 3px;
      box-shadow: 0 3px 3px rgba(0,0,0,.3);
      text-align: center;
      z-index: 999999;
    }
    .pop.active {
      opacity: 1;
      top: 20%;
    }
    .pop-text {
      margin: 35px auto 30px;
      padding: 2px 15px 0;
      font-size: 12px !important;
      color: #4a4a4a;
      line-height: 20px;
    }
    .pop-btn {
      display: inline-block;
      width: 110px;
      height: 42px;
      line-height: 42px;
      font-size: 14px;
      font-weight: 400;
      background: #50e3c2;
      color: #fff;
      box-shadow: inset 0 1px 0 0 hsla(0,0%,100%,.5);
      margin: 0 10px 20px;
      outline: 0;
      border: 0;
      cursor: pointer;
    }
    .pop-btn:hover {
      background: #00cca3;
    }
    .confirm-false-btn {
      background: #7c8288;
    }
    .confirm-false-btn:hover {
      background: #676363;
    }
  `]
})
export class CreateElementComponent implements OnInit {
  constructor(
    private createElementService: CreateElementService,
    private viewContainerRef: ViewContainerRef,
    private el: ElementRef,
    private renderer: Renderer2
  ) { }

  ngOnInit() {
    this.createElementService.viewContainerRef = this.viewContainerRef;
    this.createElementService.el = this.el;
    this.createElementService.renderer = this.renderer;
  }
}
