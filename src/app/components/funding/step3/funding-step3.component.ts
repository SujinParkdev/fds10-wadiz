import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../../core/services/login.service';

@Component({
  selector: 'app-funding-step3',
  templateUrl: './funding-step3.component.html',
  styleUrls: ['./funding-step3.component.css']
})
export class FundingStep3Component implements OnInit {
  get userInfo() {
    return this.loginService.userInfo;
  }

  constructor(
    private router: Router,
    private loginService: LoginService
  ) { }

  ngOnInit() {
  }

  goFundinglist() {
    this.router.navigate(['/fundinglist']);
  }
}
