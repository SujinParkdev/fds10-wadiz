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
import { LoginGuard } from './core/guards/login.guard';


const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'main', component: MainComponent },
  { path: 'login', component: LoginComponent },
  { path: 'join', component: JoinComponent },
  { path: 'setting', component: SettingComponent, canActivate: [LoginGuard] },
  { path: 'fundinglist', component: FundinglistComponent, canActivate: [LoginGuard] },
  { path: 'likelist', component: LikelistComponent, canActivate: [LoginGuard] },
  { path: 'funding/:id/step1', component: FundingStep1Component, canActivate: [LoginGuard] },
  { path: 'funding/:id/step2', component: FundingStep2Component, canActivate: [LoginGuard] },
  { path: 'funding/:id/step3', component: FundingStep3Component, canActivate: [LoginGuard] },
  { path: 'reward/detail/:id', component: DetailComponent },
  { path: '**', redirectTo: 'main', pathMatch: 'full' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
