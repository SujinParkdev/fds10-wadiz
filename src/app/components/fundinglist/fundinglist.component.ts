import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../core/services/login.service';

@Component({
  selector: 'app-fundinglist',
  templateUrl: './fundinglist.component.html',
  styleUrls: ['./fundinglist.component.css']
})
export class FundinglistComponent implements OnInit {
  get userInfo() {
    return this.loginService.userInfo;
  }

  constructor(
    private loginService: LoginService
  ) { }

  ngOnInit() {
  }

  getStatus(str: string): string {
    return str.includes('N') ? '종료' : '진행중';
  }
}
