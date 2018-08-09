import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { MainComponent } from './components/main/main.component';
import { DetailComponent } from './components/detail/detail.component';
import { LoginComponent } from './components/login/login.component';
import { JoinComponent } from './components/join/join.component';
import { SettingComponent } from './components/setting/setting.component';
import { FundingStep1Component } from './components/funding/step1/funding-step1.component';
import { FundingStep2Component } from './components/funding/step2/funding-step2.component';
import { FundingStep3Component } from './components/funding/step3/funding-step3.component';
import { LikelistComponent } from './components/likelist/likelist.component';
import { FundinglistComponent } from './components/fundinglist/fundinglist.component';
import { SlideComponent } from './components/main/slide.component';
import { CreateElementComponent } from './core/services/create-element/create-element.component';
import { FundingTopComponent } from './components/funding/shared/funding-top/funding-top.component';

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
    FundingStep1Component,
    FundingStep2Component,
    FundingStep3Component,
    LikelistComponent,
    FundinglistComponent,
    SlideComponent,
    CreateElementComponent,
    FundingTopComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
