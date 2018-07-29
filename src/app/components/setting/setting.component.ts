import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-setting',
  template: `
    <div class="setting-container">setting</div>
  `,
  styles: [`
    .setting-container {
      margin: 0 auto;
      width: 100%;
      max-width: 400px;
      padding: 40px 16px;
      background: pink;
    }
  `]
})
export class SettingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
