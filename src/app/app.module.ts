import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RoutingModule } from './/routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { JoinComponent } from './join/join.component';
import { SettingComponent } from './setting/setting.component';
import { DetailComponent } from './detail/detail.component';
import { SearchComponent } from './search/search.component';
import { FundingComponent } from './funding/funding.component';
import { PaymentComponent } from './payment/payment.component';
import { LikelistComponent } from './likelist/likelist.component';
import { FundinglistComponent } from './fundinglist/fundinglist.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    LoginComponent,
    JoinComponent,
    SettingComponent,
    DetailComponent,
    SearchComponent,
    FundingComponent,
    PaymentComponent,
    LikelistComponent,
    FundinglistComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
