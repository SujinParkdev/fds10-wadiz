import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <div class="footer">
      <div class="footer-info">
        <p class="copyright">
          <strong>
            시대를 만듭니다<br>
            라이프스타일 투자플랫폼 와디즈
          </strong><br>
          © Wadiz Corp.
        </p>
      </div>
    </div>
  `,
  styles: [`
    .footer {
      width: 100%;
      padding: 48px 16px 25px;
      background: #00cca3;
    }
    .footer-info {
      position: relative;
      width: 100%;
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 16px;
      background: #ebeced;
    }
  `]
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
