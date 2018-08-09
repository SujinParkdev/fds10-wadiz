import { Component, OnInit } from '@angular/core';
import { Router } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: 'detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goFunding() {
    this.router.navigate(['/funding/1/step1']);
  }
}
