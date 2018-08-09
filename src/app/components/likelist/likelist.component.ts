import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-likelist',
  templateUrl: './likelist.component.html',
  styleUrls: ['./likelist.component.css']
})
export class LikelistComponent implements OnInit {
  likeList = [];

  constructor() { }

  ngOnInit() {
    this.likeList = [
      {
        id: 1
      }
    ];
  }

  goReward() {
    console.log('go');
  }

  removeList(id: number) {
    this.likeList = this.likeList.filter(like => like.id !== id);
  }

}
