import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { DetailComponent } from './components/detail/detail.component';
import { LoginComponent } from './components/login/login.component';
import { JoinComponent } from './components/join/join.component';
import { SettingComponent } from './components/setting/setting.component';
import { FundinglistComponent } from './components/fundinglist/fundinglist.component';
import { LikelistComponent } from './components/likelist/likelist.component';
import { LoginGuard } from './core/guards/login.guard';


const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'main', component: MainComponent },
  { path: 'login', component: LoginComponent },
  { path: 'join', component: JoinComponent },
  { path: 'setting', component: SettingComponent, canActivate: [LoginGuard] },
  { path: 'fundinglist', component: FundinglistComponent, canActivate: [LoginGuard] },
  { path: 'likelist', component: LikelistComponent, canActivate: [LoginGuard] },
  { path: 'reward/detail/:id', component: DetailComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
