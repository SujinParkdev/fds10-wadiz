import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD

=======
>>>>>>> a32979245948621c6d1db89ee6dcddba349433dd
import { DetailCommentComponent } from './detail-comment/detail-comment.component';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: 'detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  id: number;

  constructor(
    private router: Router,
    private activateRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activateRoute.params.subscribe(params => {
      this.id = +params['id'];
    });
  }

  goFunding() {
    this.router.navigate(['/funding/step10', this.id]);
  }
}
