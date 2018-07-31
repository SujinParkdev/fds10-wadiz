import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/common/header.component';
import { FooterComponent } from './components/common/footer.component';
import { MainComponent } from './components/main/main.component';
import { DetailComponent } from './components/detail/detail.component';
import { LoginComponent } from './components/login/login.component';
import { JoinComponent } from './components/join/join.component';
import { SettingComponent } from './components/setting/setting.component';
import { FundingComponent } from './components/funding/funding.component';
import { PaymentComponent } from './components/payment/payment.component';
import { LikelistComponent } from './components/likelist/likelist.component';
import { FundinglistComponent } from './components/fundinglist/fundinglist.component';
import { SlideComponent } from './components/main/slide.component';

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
    FundingComponent,
    PaymentComponent,
    LikelistComponent,
    FundinglistComponent,
    SlideComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
