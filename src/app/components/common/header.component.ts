import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <div class="header">
      <div class="gnb">
        <a [routerLink]="['/main']" class="logo" title="wadiz"></a>
        <ul class="gnb-menu">
          <li>
            <div class="user"></div>
          </li>
          <li>
            <a [routerLink]="['/login']" title="login">로그인</a>
          </li>
          <li>
            <a [routerLink]="['/join']" title="join">회원가입</a>
          </li>
        </ul>
      </div>
      <div class="user-pop">
        <div class="user-pop-bg"></div>
        <div class="user-pop-body">
          <div class="user-profile">
            <div class="user-picture"></div>
            <div class="user-name">noname</div>
          </div>
          <ul class="user-menu">
            <li>
              <a [routerLink]="['/fundinglist']" class="fundinglist">펀딩 내역</a>
            </li>
            <li>
              <a [routerLink]="['/likelist']" class="likelist">좋아한 프로젝트</a>
            </li>
          </ul>
          <ul class="user-setting">
            <li><a [routerLink]="['/setting']">설정</a></li>
            <li><a [routerLink]="['/logout']">로그아웃</a></li>
          </ul>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .header {
      position: relative;
      width: 100%;
      box-shadow: 0 1px 0 0 rgba(0,0,0,.08);
      z-index: 100;
      background: #fff;
    }
    .gnb {
      position: relative;
      width: 100%;
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 16px;
      height: 56px;
      background: #fff;
    }
    .logo {
      display: block;
      padding: 15px 0;
      width: 98px;
      height: 100%;
    }
    .logo:before {
      display: block;
      background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTEyIiBoZWlnaHQ9IjMwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxwYXRoIGQ9Ik01NSAyNi41aC0uNmEuNy43IDAgMCAxLS43LS40IDguOCA4LjggMCAwIDEtLjItMi4zdi02LjNhOS44IDkuOCAwIDAgMC0uNC0zIDQuNyA0LjcgMCAwIDAtMS4zLTIuMWgtLjFjLTEuNC0xLjMtNC4yLTItNi45LTJhOS43IDkuNyAwIDAgMC01LjUgMS41aC0uMWEyLjkgMi45IDAgMSAwIDIuOC0uMyA0LjIgNC4yIDAgMCAxIDIuMi0uNWMxLjQgMCAyLjkuOSAyLjkgMy41IDAgLjIuMSAxLjEuMSAxLjN2MS43YTE4LjUgMTguNSAwIDAgMC04IDIuNiA1LjQgNS40IDAgMCAwLTIuNyA0LjUgNC4xIDQuMSAwIDAgMCAxLjMgMy4yIDUgNSAwIDAgMCAzLjUgMS4yaDEuM2wxLjgtLjMgMi45LTIuMmE0LjIgNC4yIDAgMCAwIDEuMyAxLjkgNSA1IDAgMCAwIDMuMS42IDcuMyA3LjMgMCAwIDAgMi4yLS41IDIwLjIgMjAuMiAwIDAgMCAyLjQtMS40bC0uNC0uOS0uOS4yem0tNy44LTcuM2MtLjIgMCAwIDAgMCAwVjI1Yy0uMiAwIDAgMCAwIDB2LjRsLTEuNS43Yy0yLjEuNi0zLjktLjQtMy45LTIuNHMxLjktMy44IDMuOS00LjdsMS41LS41di43em0zMC4yIDcuNmE3LjYgNy42IDAgMCAxLS40LTMuMVYuNGwtOC41IDMuMSAyLjQgMnY2LjZhMTAuNiAxMC42IDAgMCAwLTQuNy0xLjEgNy42IDcuNiAwIDAgMC02LjEgMi44IDEwLjUgMTAuNSAwIDAgMC0yLjQgNy4xIDguNiA4LjYgMCAwIDAgMiA2IDcgNyAwIDAgMCA1LjUgMi4yaC45bDEuNC0uMiAzLjYtMi40IDEuMSAyLjcgNC4yLS42IDIuNy0uMnYtMUg3OWExLjkgMS45IDAgMCAxLTEuNi0uNnptLTYuNS0xMy41djEyLjVhNS41IDUuNSAwIDAgMS0yLjEuNGwtMS43LS4zYTQgNCAwIDAgMS0yLjQtMS43IDcuOCA3LjggMCAwIDEtMS4zLTQuNyA4LjggOC44IDAgMCAxIDEuMi01IDQuMSA0LjEgMCAwIDEgMS43LTEuNSA0LjYgNC42IDAgMCAxIDIuMS0uNSA0LjkgNC45IDAgMCAxIDIuMy42bC4yLjJ6bTM3LjQgMTMuOWE5LjQgOS40IDAgMCAxLTMuMy42aC0yLjlsOS4yLTE1Ljd2LS44SDk1LjVWMTVsMi45LTJhNS41IDUuNSAwIDAgMSAyLjYtLjhoMy4ybC05LjQgMTUuNHYxLjJoMTdWMjVhMjQuMyAyNC4zIDAgMCAxLTMuNSAyLjJ6TTM5IDRoLTcuNnMzIDIgMyAzLjFhMTAuOCAxMC44IDAgMCAxLTEuMyA0bC0zLjYgOC41LTUuNi0xNC44aC0uNWwtNS4zIDE1LjQtNC05LjhhOS4zIDkuMyAwIDAgMS0uOS0zLjNjMC0xLjEgMy0zIDMtM0gwczMuNCAyLjIgNC4zIDQuMkwxMy42IDI5aDIuM2w0LjItMTIuM0wyNC40IDI5aDIuMmw4LjUtMjAuOEMzNi4xIDYuMiAzOSA0IDM5IDR6bTQ3LjggNGEzLjQgMy40IDAgMCAwIDMuNC0zLjQgMy40NSAzLjQ1IDAgMSAwLTYuOSAwQTMuNCAzLjQgMCAwIDAgODYuOCA4em0zLjMgMTkuMWE3LjIgNy4yIDAgMCAxLS41LTMuMVYxMC41bC04LjIgMyAyLjUgMlYyNGE3LjkgNy45IDAgMCAxLS40IDMuMSAyLjEgMi4xIDAgMCAxLTEuNi42aC0uMXYuOWgxMHYtMWEyLjEgMi4xIDAgMCAxLTEuNy0uNXoiIGZpbGw9IiMwMENDQTMiLz4KPC9zdmc+Cg==) no-repeat 50%/contain;
      height: 100%;
      content: "";
    }
    .gnb-menu {
      position: absolute;
      top: 0;
      right: 16px;
      height: 56px;
      overflow: hidden;
    }
    .gnb-menu li {
      float: left;
      height: 56px;
      line-height: 56px;
      padding-left: 15px;
    }
    .gnb-menu a {
      color: #44484b;
    }
    .user {
      width: 32px;
      height: 32px;
      border: 1px solid rgba(0,0,0,.1);
      border-radius: 16px;
      overflow: hidden;
      background: url(http://www.wadiz.kr/resources/static/img/common/img_blank.png) no-repeat -1px;
      background-size: 108%;
      margin-top: 12px;
      cursor: pointer;
    }
    .user-pop {
      position: relative;
      margin: 0 auto;
      width: 100%;
      max-width: 1200px;
      transition: all .25s;
    }
    .user-pop a {
      color: rgba(0,0,0,.87);
      font-size: 13px;
    }
    .user-pop:before, .user-pop:after {
      position: absolute;
      top: -8px;
      right: 152px;
      border-width: 0 7px 7px;
      border-style: solid;
      border-color: transparent;
      border-bottom-color: #fff;
      content: "";
    }
    .user-pop:before {
      margin-top: -1.5px;
      border-bottom-color: #dedede;
    }
    .user-pop-bg {
      position: fixed;
      left: 0;
      width: 100%;
      height: 100%;
    }
    .user-pop-body {
      position: absolute;
      width: 100%;
      max-width: 360px;
      top: 0;
      right: 0;
      background: #fff;
      border: 1px solid rgba(0,0,0,.1);
      box-shadow: 1px 1px 1px rgba(0,0,0,.2);
      margin-top: -4px;
      padding: 36px 0 0;
    }
    .user-profile {
      position: relative;
      padding-left: 18px;
      min-height: 56px;
    }
    .user-picture {
      position: absolute;
      width: 48px;
      height: 48px;
      background: url(http://www.wadiz.kr/resources/static/img/common/img_blank.png) no-repeat -1px;
      background-size: 108%;
      border-radius: 50px;
    }
    .user-picture:after {
      border: 1px solid rgba(0,0,0,.1);
    }
    .user-name {
      padding-left: 66px;
      padding-top: 4px;
      font-size: 21px;
      font-weight: 700;
    }
    .user-menu:after {
      display: block;
      content: "";
      clear: both;
    }
    .user-menu li {
      float: left;
      width: 50%;
      text-align: center;
      padding: 15px 0;
    }
    .user-setting {
      border-top: 1px solid rgba(0,0,0,.1);
      padding-top: 12px;
      padding-bottom: 20px;
    }
    .fundinglist:before {
      display: block;
      content: url(https://png.icons8.com/dotty/50/000000/overview-pages-1.png);
    }
    .likelist:before {
      display: block;
      content: url(https://png.icons8.com/ios/50/000000/like.png);
    }
  `]
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
}
