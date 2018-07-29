import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail',
  template: `
    <div class="detail-container">
      <div class="detail-header">
        <div class="title-info">info</div>
        <div class="title">title</div>
      </div>
      <div class="detail-nav"></div>
      <div class="detail-body">
        <div class="detail-info">info</div>
        <div class="detail-side">side</div>
      </div>
    </div>
  `,
  styles: [`
    .detail-container { }
    .detail-container .detail-header {
      position: relative;
      padding: 60px 0 55px;
      text-align: center;
      overflow: hidden;
      background: skyblue;
    }
    .detail-container .detail-header .title-info{
      position: relative;
      margin-bottom: 20px;
      line-height: 20px;
      color: #fff;
      font-size: 16px;
      font-weight: 400;
    }
    .detail-container .detail-header .title {
      position: relative;
      padding-right: 30px;
      padding-left: 30px;
      line-height: 42px;
      color: #fff;
      font-size: 36px;
      font-weight: 500;
    }
    .detail-container .detail-nav { 
      position: sticky;
      box-shadow: 0 1px 0 0 rgba(0,0,0,.08);
      height: 56px;
      margin-bottom: 12px;
      background: pink;
    }
    .detail-container .detail-body {
      padding: 0 30px;    
      margin: 0 auto;
      width: 100%;
      max-width: 1024px;
      background: orange;
    }
    .detail-container .detail-body:after {
      display: block;
      content: "";
      clear: both;
    }
    .detail-container .detail-body .detail-info {
      background: lime;
      float: left;
      width: 100%;
      max-width: 632px;

    }
    .detail-container .detail-body .detail-side {
      background: blueviolet;
      float: right;
      width: 284px;
    }
  `]
})
export class DetailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
