import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fundinglist',
  template: `
  <div class="fundinglist-container">
    <div class="title-container">
      <div class="title">펀딩 내역</div>
    </div>
    <div class="list"></div>
  </div>
  `,
  styles: [`
    .fundinglist-container {
      background: orange;
    }
    .fundinglist-container .title-container {
      position: relative;
      box-shadow: 0 1px 0 0 rgba(0,0,0,.08);
    }
    .fundinglist-container .title-container .title {
      width: 960px;
      margin: 0 auto;
      padding: 56px 24px 24px;
      font-size: 36px;
      line-height: 44px;
      text-align: left;
      background: white;
    }
    .fundinglist-container .list {
      background: #f5f7fa;    
      padding-bottom: 160px;
    }
  `]
})
export class FundinglistComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
