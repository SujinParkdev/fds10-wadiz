import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { DetailComponent } from './components/detail/detail.component';
import { LoginComponent } from './components/login/login.component';
import { JoinComponent } from './components/join/join.component';
import { SettingComponent } from './components/setting/setting.component';
import { LikelistComponent } from './components/likelist/likelist.component';
import { FundinglistComponent } from './components/fundinglist/fundinglist.component';
import { ModalComponent } from './components/join/modal.component';
import { ModalService } from './components/join/modal.service';
import { CreateElementComponent } from './core/services/create-element/create-element.component';

import { FundingModule } from './components/funding/funding.module';
import { MainModule } from './components/main/main.module';
import { CommaPipe } from './core/pipes/comma.pipe';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    JoinComponent,
    SettingComponent,
    DetailComponent,
    LikelistComponent,
    FundinglistComponent,
    CreateElementComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    FundingModule,
    MainModule
  ],
  providers: [
    ModalService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
