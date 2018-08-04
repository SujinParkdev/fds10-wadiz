import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-join',
  template: `
    <div class="join-container content">
        <h2>회원가입</h2>
        <p>와디즈 펀딩을 위한 최소한의 정보를 받고있습니다.</p>
        <div class="field">
        <p class="control is-expanded has-icons-left has-icons-right">
          <input class="input is-success" type="email" placeholder="Email" value="alex@smith.com">
          <span class="icon is-small is-left">
            <i class="fas fa-envelope"></i>
          </span>
          <span class="icon is-small is-right">
            <i class="fas fa-check"></i>
          </span>
        </p>
      </div>
    </div>

  `,
  styles: [`
    .join-container {
      margin: 0 auto;
      width: 100%;
      max-width: 400px;
      padding: 16px 16px 32px;
      background: grey;
    },



  `]
})
export class JoinComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
