import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FundingStep1Component } from './step1/funding-step1.component';
import { FundingStep2Component } from './step2/funding-step2.component';
import { FundingStep3Component } from './step3/funding-step3.component';
import { LoginGuard } from '../../core/guards/login.guard';
import { FundingComponent } from './funding.component';

const routes: Routes = [
  {
    path: 'funding',
    component: FundingComponent,
    children: [
      { path: 'step10/:id', component: FundingStep1Component, canActivate: [LoginGuard] },
      { path: 'step20', component: FundingStep2Component, canActivate: [LoginGuard] },
      { path: 'step30', component: FundingStep3Component, canActivate: [LoginGuard] }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FundingRoutingModule { }
