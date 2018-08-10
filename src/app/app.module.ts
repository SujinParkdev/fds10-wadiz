import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { MainComponent } from './components/main/main.component';
import { DetailComponent } from './components/detail/detail.component';
import { LoginComponent } from './components/login/login.component';
import { JoinComponent } from './components/join/join.component';
import { SettingComponent } from './components/setting/setting.component';
import { LikelistComponent } from './components/likelist/likelist.component';
import { FundinglistComponent } from './components/fundinglist/fundinglist.component';
import { CreateElementComponent } from './core/services/create-element/create-element.component';
import { SlideComponent } from './components/main/slide/slide.component';

import { FundingModule } from './components/funding/funding.module';

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
    LikelistComponent,
    FundinglistComponent,
    SlideComponent,
    CreateElementComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    FundingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
