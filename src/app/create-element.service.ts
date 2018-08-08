import { Injectable, ViewContainerRef, ElementRef, Renderer2 } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CreateElementService {
  public viewContainerRef: ViewContainerRef;
  public el: ElementRef;
  public renderer: Renderer2;
  fade: HTMLElement;
  isFade = false;

  constructor() { }

  toast(msg: string) {
    const toast = this.renderer.createElement('div');
    this.renderer.addClass(toast, 'toast');

    this.renderer.appendChild(
      toast,
      this.renderer.createText(msg)
    );

    this.renderer.appendChild(this.el.nativeElement, toast);

    setTimeout(() => {
      this.renderer.addClass(toast, 'active');
    }, 1);

    setTimeout(() => {
      this.renderer.removeClass(toast, 'active');
    }, 3000);

    setTimeout(() => {
      this.renderer.removeChild(this.el.nativeElement, toast);
    }, 4000);
  }

  alert(msg: string, callback?: Function) {
    const alert = this.renderer.createElement('div');
    const alertText = this.renderer.createElement('div');
    const alertBtn = this.renderer.createElement('button');
    this.renderer.addClass(alert, 'pop');
    this.renderer.addClass(alertText, 'pop-text');
    this.renderer.addClass(alertText, 'alert-text');
    this.renderer.addClass(alertBtn, 'pop-btn');
    this.renderer.addClass(alertBtn, 'alert-btn');

    this.renderer.appendChild(alert, alertText);
    this.renderer.appendChild(alert, alertBtn);
    this.renderer.appendChild(
      alertText,
      this.renderer.createText(msg)
    );
    this.renderer.appendChild(
      alertBtn,
      this.renderer.createText('확인')
    );

    this.renderer.appendChild(this.el.nativeElement, alert);
    this.fadeIn();
    alertBtn.focus();

    setTimeout(() => {
      this.renderer.addClass(alert, 'active');
    }, 1);

    // alert btn click
    this.renderer.listen(alertBtn, 'click', (e) => {
      this.fadeOut();

      setTimeout(() => {
        this.renderer.removeClass(alert, 'active');
      }, 1);
      setTimeout(() => {
        this.renderer.removeChild(this.el.nativeElement, alert);
      }, 1000);

      if (callback) {
        callback();
      }
    });

    // alert auto focus
    this.renderer.listen(alertBtn, 'blur', (e) => {
      alertBtn.focus();
    });
  }

  confirm(msg: string, btn: string, callback: Function) {
    const confirm = this.renderer.createElement('div');
    const confirmText = this.renderer.createElement('div');
    const confirmFalseBtn = this.renderer.createElement('button');
    const confirmTrueBtn = this.renderer.createElement('button');
    this.renderer.addClass(confirm, 'pop');
    this.renderer.addClass(confirmText, 'pop-text');
    this.renderer.addClass(confirmText, 'confirm-text');
    this.renderer.addClass(confirmFalseBtn, 'pop-btn');
    this.renderer.addClass(confirmFalseBtn, 'confirm-false-btn');
    this.renderer.addClass(confirmTrueBtn, 'pop-btn');
    this.renderer.addClass(confirmTrueBtn, 'confirm-true-btn');

    this.renderer.appendChild(confirm, confirmText);
    this.renderer.appendChild(confirm, confirmFalseBtn);
    this.renderer.appendChild(confirm, confirmTrueBtn);
    this.renderer.appendChild(
      confirmText,
      this.renderer.createText(msg)
    );
    this.renderer.appendChild(
      confirmFalseBtn,
      this.renderer.createText('취소')
    );
    this.renderer.appendChild(
      confirmTrueBtn,
      this.renderer.createText(btn)
    );

    this.renderer.appendChild(this.el.nativeElement, confirm);
    this.fadeIn();
    confirmFalseBtn.focus();

    setTimeout(() => {
      this.renderer.addClass(confirm, 'active');
    }, 1);

    // confirm false btn click
    this.renderer.listen(confirmFalseBtn, 'click', (e) => {
      this.fadeOut();

      setTimeout(() => {
        this.renderer.removeClass(confirm, 'active');
      }, 1);
      setTimeout(() => {
        this.renderer.removeChild(this.el.nativeElement, confirm);
      }, 1000);
    });

    // confirm true btn click
    this.renderer.listen(confirmTrueBtn, 'click', (e) => {
      this.fadeOut();

      setTimeout(() => {
        this.renderer.removeClass(confirm, 'active');
      }, 1);
      setTimeout(() => {
        this.renderer.removeChild(this.el.nativeElement, confirm);
      }, 1000);

      callback();
    });
  }

  fadeIn() {
    this.isFade = true;
    if (!this.fade) {
      this.fade = this.renderer.createElement('div');
      this.renderer.addClass(this.fade, 'fade-bg');
    }
    this.renderer.appendChild(this.el.nativeElement, this.fade);

    setTimeout(() => {
      this.renderer.addClass(this.fade, 'active');
    }, 1);
  }

  fadeOut() {
    this.isFade = false;
    setTimeout(() => {
      if (!this.isFade) {
        this.renderer.removeClass(this.fade, 'active');
      }
    }, 1);
    setTimeout(() => {
      if (!this.isFade) {
        this.renderer.removeChild(this.el.nativeElement, this.fade);
      }
    }, 1000);
  }
}
