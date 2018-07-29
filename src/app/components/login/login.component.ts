import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  template: `
    <div class="login-container">login</div>
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
