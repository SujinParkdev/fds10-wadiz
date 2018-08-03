import { Injectable, ViewContainerRef, ElementRef, Renderer2 } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CreateElementService {
  public viewContainerRef: ViewContainerRef;
  public el: ElementRef;
  public renderer: Renderer2;
  fade: HTMLElement;

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

  alert(msg: string) {
    const alert = this.renderer.createElement('div');
    const alertText = this.renderer.createElement('div');
    const alertBtn = this.renderer.createElement('button');
    this.renderer.addClass(alert, 'alert');
    this.renderer.addClass(alertText, 'alert-text');
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

    const alertClick = this.renderer.listen(alertBtn, 'click', (e) => {
      this.fadeOut();

      setTimeout(() => {
        this.renderer.removeClass(alert, 'active');
      }, 1);
      setTimeout(() => {
        this.renderer.removeChild(this.el.nativeElement, alert);
      }, 1000);
    });

    const alertFocus = this.renderer.listen(alertBtn, 'blur', (e) => {
      alertBtn.focus();
    });
  }

  fadeIn() {
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
    setTimeout(() => {
      this.renderer.removeClass(this.fade, 'active');
    }, 1);
    setTimeout(() => {
      this.renderer.removeChild(this.el.nativeElement, this.fade);
    }, 1000);
  }
}
