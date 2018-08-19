import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FundingRoutingModule } from './funding-routing.module';
import { FundingStep1Component } from './step1/funding-step1.component';
import { FundingStep2Component } from './step2/funding-step2.component';
import { FundingStep3Component } from './step3/funding-step3.component';
import { FundingComponent } from './funding.component';
import { CoreModule } from '../../core/core.module';

@NgModule({
  imports: [
    CommonModule,
    FundingRoutingModule,
    CoreModule
  ],
  declarations: [
    FundingStep1Component,
    FundingStep2Component,
    FundingStep3Component,
    FundingComponent
  ]
})
export class FundingModule { }
