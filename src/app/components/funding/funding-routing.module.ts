import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FundingStep1Component } from './step1/funding-step1.component';
import { FundingStep2Component } from './step2/funding-step2.component';
import { FundingStep3Component } from './step3/funding-step3.component';
import { LoginGuard } from '../../core/guards/login.guard';

const routes: Routes = [
    { path: 'funding/:id/step1', component: FundingStep1Component, canActivate: [LoginGuard] },
    { path: 'funding/:id/step2', component: FundingStep2Component, canActivate: [LoginGuard] },
    { path: 'funding/:id/step3', component: FundingStep3Component, canActivate: [LoginGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FundingRoutingModule { }
