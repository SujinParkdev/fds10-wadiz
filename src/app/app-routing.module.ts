import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { DetailComponent } from './components/detail/detail.component';
import { LoginComponent } from './components/login/login.component';
import { JoinComponent } from './components/join/join.component';
import { SettingComponent } from './components/setting/setting.component';
import { FundinglistComponent } from './components/fundinglist/fundinglist.component';
import { LikelistComponent } from './components/likelist/likelist.component';
import { FundingStep1Component } from './components/funding/step1/funding-step1.component';
import { FundingStep2Component } from './components/funding/step2/funding-step2.component';
import { FundingStep3Component } from './components/funding/step3/funding-step3.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'main', component: MainComponent },
  { path: 'login', component: LoginComponent },
  { path: 'join', component: JoinComponent },
  { path: 'setting', component: SettingComponent },
  { path: 'fundinglist', component: FundinglistComponent },
  { path: 'likelist', component: LikelistComponent },
  { path: 'funding/step1', component: FundingStep1Component },
  { path: 'funding/step2', component: FundingStep2Component },
  { path: 'funding/step3', component: FundingStep3Component },
  { path: 'reward/detail/:id', component: DetailComponent },
  { path: 'funding', redirectTo: 'funding/step1', pathMatch: 'full' },
  { path: '**', redirectTo: 'main', pathMatch: 'full' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
