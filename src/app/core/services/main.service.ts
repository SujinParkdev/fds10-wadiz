import { Injectable } from '@angular/core';

interface Category {
  name: string;
  img: string;
  url: string;
}

@Injectable({
  providedIn: 'root'
})
export class MainService {
  categorys: Category[];

  constructor() { }

  init() {
    this.categorys = [
      {
        name: '전체보기',
        img: 'https://cdn.wadiz.kr/resources/assets/img/912f519d6d62214aea09ffd35630daab.jpg',
        url: 'all'
      },
      {
        name: '테크·가전',
        img: 'https://cdn.wadiz.kr/resources/assets/img/56a64dc0f600839f467920a2598e1340.jpg',
        url: 'tech'
      },
      {
        name: '패션·잡화',
        img: 'https://cdn.wadiz.kr/resources/assets/img/29ca1d6c801542767c5f9fe2a14746c6.jpg',
        url: 'fashion'
      },
      {
        name: '뷰티',
        img: 'https://cdn.wadiz.kr/resources/assets/img/b8f23dda2954a81dcb83ee92460d14fe.jpg',
        url: 'beauty'
      },
      {
        name: '푸드',
        img: 'https://cdn.wadiz.kr/resources/assets/img/8794e59843df576beb42a54be20444a6.jpg',
        url: 'food'
      },
      {
        name: '홈리빙',
        img: 'https://cdn.wadiz.kr/resources/assets/img/c215ebf31bc7d3d28a2e427ce47c4886.jpg',
        url: 'home'
      },
      {
        name: '디자인소품',
        img: 'https://cdn.wadiz.kr/resources/assets/img/165c7094a3543601cf70fa4ba859ac96.jpg',
        url: 'design'
      },
      {
        name: '여행·레저',
        img: 'https://cdn.wadiz.kr/resources/assets/img/963a880fd2ee56a0e1869cee8b69c363.jpg',
        url: 'travel'
      },
      {
        name: '스포츠·모빌리티',
        img: 'https://cdn.wadiz.kr/resources/assets/img/9d7f8702ca73c5fcc73bc871983fc684.jpg',
        url: 'sport'
      },
      {
        name: '반려동물',
        img: 'https://cdn.wadiz.kr/resources/assets/img/3e377b6e291726caad316b351ff0b0e1.jpg',
        url: 'pet'
      },
      {
        name: '공연·컬쳐',
        img: 'https://cdn.wadiz.kr/resources/assets/img/b69e31ae71576ea7828dbd843523f290.jpg',
        url: 'design'
      },
      {
        name: '소셜·캠페인',
        img: 'https://cdn.wadiz.kr/resources/assets/img/ce7018e9f7e9edff7f485690aa8eafb9.jpg',
        url: 'social'
      },
      {
        name: '교육·키즈',
        img: 'https://cdn.wadiz.kr/resources/assets/img/a2a7bf7dd6a7033044bffdeee61cb10b.jpg',
        url: 'education'
      },
      {
        name: '게임·취미',
        img: 'https://cdn.wadiz.kr/resources/assets/img/054172ab8f51de834b1bdb70dbf1ebe0.jpg',
        url: 'game'
      },
      {
        name: '출판',
        img: 'https://cdn.wadiz.kr/resources/assets/img/91f7858ffb25fc99f643acafdba45546.jpg',
        url: 'publishing'
      }
    ];
  }
}
