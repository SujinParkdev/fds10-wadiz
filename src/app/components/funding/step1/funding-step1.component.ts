import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-funding-step1',
  templateUrl: './funding-step1.component.html',
  styleUrls: ['./funding-step1.component.css']
})
export class FundingStep1Component implements OnInit {
  isNoticePop = false;
  noticeForm: FormGroup;
  rewardForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.noticeForm = new FormGroup({
      check1: new FormControl(false, Validators.pattern('true')),
      check2: new FormControl(false, Validators.pattern('true')),
      check3: new FormControl(false, Validators.pattern('true'))
    });
  }

  noticePopClose() {
    this.isNoticePop = false;
  }

}
