import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-funding-step1',
  templateUrl: './funding-step1.component.html',
  styleUrls: ['./funding-step1.component.css']
})
export class FundingStep1Component implements OnInit {
  isNoticePop = false;
  noticeForm: FormGroup;

  constructor(
    private router: Router,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.noticeForm = this.fb.group({
      check1: [false, Validators.pattern('true')],
      check2: [false, Validators.pattern('true')],
      check3: [false, Validators.pattern('true')]
    });
  }

  noticePopClose() {
    this.isNoticePop = false;
  }

  nextStep() {
    this.router.navigate(['/funding/1/step2']);
  }

}
