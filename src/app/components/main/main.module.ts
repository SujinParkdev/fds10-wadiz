import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { SlideComponent } from './slide/slide.component';
import { ListComponent } from './list/list.component';

import { CommaPipe } from '../../core/pipes/comma.pipe';

@NgModule({
  imports: [
    CommonModule,
    MainRoutingModule
  ],
  declarations: [
    MainComponent,
    SlideComponent,
    ListComponent,
    CommaPipe
  ]
})
export class MainModule { }
