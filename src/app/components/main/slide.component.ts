import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slide',
  template: `
    <div class="slide-container">
      <div *ngFor="let slide of slides; let i = index"
          class="slide-img" [class.active]="slideIndex === i"
          [ngStyle]="{ 'background-image' : 'url(' + slide.url + ')'}">
        <div class="slide-info">
          <div class="slide-title">{{ slide.title }}</div>
          <div class="slide-text">{{ slide.text }}</div>
        </div>
      </div>
      <div class="slide-btn">
        <button class="slide-prev" (click)="slidePrev()" (blur)="slidePlay()"></button>
        <button class="slide-next" (click)="slideNext()" (blur)="slidePlay()"></button>
      </div>
      <div class="slide-active">
        <div class="active-bar" [ngStyle]="{
          'width' : 100 / slides.length + '%',
          'left' : slideIndex * (100 / slides.length) + '%'}"></div>
      </div>
    </div>
  `,
  styles: [`
    .slide-container {
      width: 100%;
      height: 100%;
      position: relative;
      background: #babdc0;
    }
    .slide-img {
      position: absolute;
      width: 100%;
      height: 100%;
      background: no-repeat 50%/cover;
      opacity: 0;
      transition: all .8s;
    }
    .slide-img:before {
      position: absolute;
      content: "";
      width: 100%;
      height: 100%;
      background-image: linear-gradient(180deg,rgba(0,0,0,.1),rgba(0,0,0,.2) 50%,rgba(0,0,0,.5));
    }
    .slide-img.active {
      opacity: 1;
    }
    .slide-info {
      position: absolute;
      left: 50%;
      margin-left: -516px;
      bottom: 25px;
      color: #fff;
      text-shadow: 0 0 2px rgba(0,0,0,.4);
    }
    .slide-title {
      max-width: 400px;
      line-height: 40px;
      font-size: 36px;
      font-weight: 700;
      word-break: keep-all;
      margin-bottom: 10px;
    }
    .slide-btn {
      position: absolute;
      bottom: 20px;
      width: 1032px;
      left: 50%;
      margin-left: -516px;
      text-align: right;
    }
    .slide-prev, .slide-next {
      margin: 0;
      padding: 0;
      border: 0;
      outline: none;
      width: 40px;
      height: 40px;
      background: rgba(0,0,0,.4);
      cursor: pointer;
      position: relative;
    }
    .slide-prev:before {
      content: "";
      background: url(https://png.icons8.com/android/50/ffffff/back.png) no-repeat;
      background-size: contain;
      position: absolute;
      width: 18px;
      height: 18px;
      left: 11px;
      top: 11px;
      opacity: .5;
    }
    .slide-next:before {
      content: "";
      background: url(https://png.icons8.com/android/50/ffffff/forward.png) no-repeat;
      background-size: contain;
      position: absolute;
      width: 18px;
      height: 18px;
      left: 11px;
      top: 11px;
      opacity: .5;
    }
    .slide-prev:hover::before, .slide-next:hover::before,
    .slide-prev:focus::before, .slide-next:focus::before {
      opacity: 1;
    }
    .slide-active {
      position: absolute;
      bottom: -5px;
      height: 5px;
      width: 1032px;
      left: 50%;
      margin-left: -516px;
    }
    .slide-active .active-bar {
      position: absolute;
      height: 5px;
      background: #00cca3;
      transition: all .3s;
    }
  `]
})
export class SlideComponent implements OnInit {
  slides = [];
  slideIndex = 0;
  slideHandler = null;
  slideInteval = 5000;

  constructor() { }

  ngOnInit() {
    this.slides = [
      {
        title: '다시는 보기 힘든 마감 임박 펀딩 모음',
        text: '마지막 기회를 놓치지 마세요!',
        url: 'https://cdn.wadiz.kr/ft/images/green001/2018/0709/20180709161418629_476.jpg/wadiz/format/jpg/quality/95/optimize'
      },
      {
        title: '카펫 위에 커피 쏟아도 혼날 걱정 없어요',
        text: '스위틀 물청소기 슥해주면 말끔해지니까요',
        url: 'https://cdn.wadiz.kr/ft/images/green001/2018/0720/20180720105620679_490.jpg/wadiz/format/jpg/quality/95/optimize'
      },
      {
        title: '드루와 드루와 방에 넣어주기만 하면 끝',
        text: '나도 들어가고 싶은 뽀송뽀송 팝펫 드라이룸',
        url: 'https://cdn.wadiz.kr/ft/images/green001/2018/0720/20180720105747550_492.jpg/wadiz/format/jpg/quality/95/optimize'
      },
      {
        title: '음식물 쓰레기 처리의 신세계를 보여드릴게요',
        text: '봉투 한 장만 툭 걸어두면 끝이랍니다',
        url: 'https://cdn.wadiz.kr/ft/images/green001/2018/0720/20180720105940289_493.jpg/wadiz/format/jpg/quality/95/optimize'
      },
      {
        title: '아직도 휴지로 닦으세요?',
        text: '남녀노소 쓸 수 있는 가장 깨끗한 청결티슈',
        url: 'https://cdn.wadiz.kr/ft/images/green001/2018/0720/20180720110145444_489.jpg/wadiz/format/jpg/quality/95/optimize'
      },
      {
        title: '얼굴 골격이 클수록 잘 어울리는 안경',
        text: '옹졸한 안경 크기에 상한 마음을 달래줄게요',
        url: 'https://cdn.wadiz.kr/ft/images/green001/2018/0720/20180720110237575_488.jpg/wadiz/format/jpg/quality/95/optimize'
      },
      {
        title: '앗! 신발 안 신고 나왔다 아니네? 신었네',
        text: '너무 편해서 신은 것조차 까먹게 만드는 슬립온',
        url: 'https://cdn.wadiz.kr/ft/images/green001/2018/0720/20180720110346567_495.jpg/wadiz/format/jpg/quality/95/optimize'
      },
      {
        title: '세계 시계제조 3대 강국의 명성을 담았어요',
        text: '손목 자랑하고 싶게 만드는 해리엇워치스',
        url: 'https://cdn.wadiz.kr/ft/images/green001/2018/0720/20180720110559328_494.jpg/wadiz/format/jpg/quality/95/optimize'
      }
    ];

    this.slidePlay();
  }

  slidePlay() {
    if (!this.slideHandler) {
      this.slideHandler = setInterval(() => {
        if (this.slideIndex < this.slides.length - 1) {
          this.slideIndex++;
        } else {
          this.slideIndex = 0;
        }
      }, this.slideInteval);
    }
  }

  slideStop() {
    if (this.slideHandler) {
      clearInterval(this.slideHandler);
      this.slideHandler = null;
    }
  }

  slidePrev() {
    this.slideStop();
    if (this.slideIndex <= 0) {
      this.slideIndex = this.slides.length - 1;
    } else {
      this.slideIndex--;
    }
  }

  slideNext() {
    this.slideStop();
    if (this.slideIndex < this.slides.length - 1) {
      this.slideIndex++;
    } else {
      this.slideIndex = 0;
    }
  }

}
