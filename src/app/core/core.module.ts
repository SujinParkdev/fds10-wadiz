import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommaPipe } from './pipes/comma.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    CommaPipe
  ],
  exports: [
    CommaPipe,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CoreModule { }
