import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  template: `
    <div class="slide-container">image slide</div>
    <div class="rewards-container">
      <div class="category-container">category</div>
      <div class="rewardlist-container">
        <div class="reward-filter">
          <div class="title">전체보기</div>
        </div>
        <ul>
          <li>
            <div class="reward">
              <a [routerLink]="['/reward/detail/1']">
                <div class="reward-img">
                  <img src="http://placehold.it/322x182">
                </div>
              </a>
              <div class="reward-info">
                text
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  `,
  styles: [`
    .slide-container {
      position: relative;
      height: 440px;
      background: pink;
    }
    .rewards-container {
      position: relative;
      margin: 0 auto;
      max-width: 1065px;
    }
    .category-container {
      position: relative;
      height: 210px;
      max-width: 1032px;
      margin: 0 auto;
      background: orange;
    }
    .rewardlist-container {
      position: relative;
      max-width: 1032px;
      margin: 0 auto;
      background: skyblue;
    }
    .rewardlist-container .reward-filter {
      border-bottom: 1px solid rgba(0,0,0,.1);
    }
    .rewardlist-container ul:after {
      display: block;
      clear: both;
      content: "";
    }
    .rewardlist-container li {
      float: left;
      width: 33.33%;
    }
    .reward {
      padding: 16px;
      box-sizing: border-box;
    }
  `]
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
