import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-header></app-header>
    <router-outlet (activate)="onActivate()"></router-outlet>
    <app-footer></app-footer>
    <app-create-element></app-create-element>
  `,
  styles: [``]
})
export class AppComponent {
  onActivate() {
    window.scrollTo(0, 0);
  }
}
