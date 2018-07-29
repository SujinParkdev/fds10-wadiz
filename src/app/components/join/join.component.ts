import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-join',
  template: `
    <div class="join-container">join</div>
  `,
  styles: [`
    .join-container {
      margin: 0 auto;
      width: 100%;
      max-width: 400px;
      padding: 40px 16px 96px 16px;
      background: lime;
    }
  `]
})
export class JoinComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
