import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommaPipe } from './pipes/comma.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CommaPipe
  ],
  exports: [
    CommaPipe
  ]
})
export class CoreModule { }
