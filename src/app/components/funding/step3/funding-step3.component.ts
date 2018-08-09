import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-funding-step3',
  templateUrl: './funding-step3.component.html',
  styleUrls: ['./funding-step3.component.css']
})
export class FundingStep3Component implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goFundinglist() {
    this.router.navigate(['/fundinglist']);
  }
}
