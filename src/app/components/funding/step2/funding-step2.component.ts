import { Component, OnInit } from '@angular/core';
import { Router } from '../../../../../node_modules/@angular/router';
import { FormBuilder } from '../../../../../node_modules/@angular/forms';

@Component({
  selector: 'app-funding-step2',
  templateUrl: './funding-step2.component.html',
  styleUrls: ['./funding-step2.component.css']
})
export class FundingStep2Component implements OnInit {

  constructor(
    private router: Router,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
  }

  nextStep() {
    this.router.navigate(['/funding/1/step3']);
  }
}
