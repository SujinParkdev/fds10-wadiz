import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-likelist',
  template: `
    <div class="likelist-container">
      <div class="title-container">
        <div class="title">좋아한 프로젝트</div>
      </div>
      <div class="list"></div>
    </div>
  `,
  styles: [`
    .likelist-container {
      background: orange;
    }
    .likelist-container .title-container {
      position: relative;
      box-shadow: 0 1px 0 0 rgba(0,0,0,.08);
    }
    .likelist-container .title-container .title {
      width: 960px;
      margin: 0 auto;
      padding: 56px 24px 24px;
      font-size: 36px;
      line-height: 44px;
      text-align: left;
      background: white;
    }
    .likelist-container .list {
      background: #f5f7fa;    
      padding-bottom: 160px;
    }
  `]
})
export class LikelistComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
