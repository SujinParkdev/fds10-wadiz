import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../core/services/login.service';
import { Router } from '@angular/router';
import { CreateElementService } from '../../core/services/create-element/create-element.service';


@Component({
  selector: 'app-likelist',
  templateUrl: './likelist.component.html',
  styleUrls: ['./likelist.component.css']
})
export class LikelistComponent implements OnInit {
  nowTime: number;

  get userInfo() {
    return this.loginServce.userInfo;
  }

  constructor(
    private router: Router,
    private loginServce: LoginService,
    private createElementService: CreateElementService
  ) { }

  ngOnInit() {
    this.nowTime = Date.now();
  }

  goReward(id: number) {
    this.router.navigate(['reward/detail/', id]);
  }

  removeList(id: number) {
  }

  private getPercent(amount: number, target: number, max?: boolean): number {
    const p = Math.round(amount / target * 100);
    if (max) {
      return p > 100 ? 100 : p;
    } else {
      return p;
    }
  }

  private getTerm(endDate: string): string {
    const end = new Date(endDate).getTime();
    const dday = Math.ceil((end - this.nowTime) / (1000 * 60 * 60 * 24));
    if (dday > 1) {
      return dday + '일 남음';
    } else if (dday <= 1 && dday > 0) {
      return '오늘 마감';
    } else {
      return '종료';
    }
  }

  private isDeadline(endDate: string): boolean {
    const end = new Date(endDate).getTime();
    const dday = Math.ceil((end - this.nowTime) / (1000 * 60 * 60 * 24));
    return dday > 0 && dday <= 3 ? true : false;
  }
}
