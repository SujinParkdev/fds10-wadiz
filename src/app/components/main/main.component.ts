import { Component, OnInit } from '@angular/core';
import { MainService } from '../../core/services/main.service';

@Component({
  selector: 'app-main',
  templateUrl: 'main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  categoryX = 0;

  get categorys() {
    return this.mainService.categorys;
  }

  constructor(
    private mainService: MainService
  ) {
    this.mainService.init();
  }

  ngOnInit() { }

  prevCategory() {
    this.categoryX += 930;
  }

  nextCategory() {
    this.categoryX -= 930;
  }
}
