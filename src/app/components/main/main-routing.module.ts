import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { MainComponent } from './main.component';

const routes: Routes = [
  { 
    path: 'main', 
    component: MainComponent,
    children: [
      { path: '', component: ListComponent },
      { path: 'tech', component: ListComponent },
      { path: 'fashion', component: ListComponent },
      { path: 'beauty', component: ListComponent },
      { path: 'food', component: ListComponent },
      { path: 'home', component: ListComponent },
      { path: 'food', component: ListComponent },
      { path: 'travel', component: ListComponent },
      { path: 'sport', component: ListComponent  },
      { path: 'pet', component: ListComponent },
      { path: 'design', component: ListComponent },
      { path: 'social', component: ListComponent },
      { path: 'education', component: ListComponent },
      { path: 'game', component: ListComponent },
      { path: 'publishing', component: ListComponent }
    ] 
  } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }