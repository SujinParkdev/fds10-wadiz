import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DetailCommentComponent } from './detail-comment/detail-comment.component';

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
