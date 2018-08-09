import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.css']
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
