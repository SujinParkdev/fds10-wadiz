import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FundingService } from '../../core/services/funding.service';

@Component({
  selector: 'app-funding',
  templateUrl: './funding.component.html',
  styleUrls: ['./funding.component.css']
})
export class FundingComponent implements OnInit {
  get id() {
    return this.fundingService.id;
  }
  get title() {
    return this.fundingService.rewardDetail ? this.fundingService.rewardDetail.product_name : '';
  }

  constructor(
    private router: Router,
    private activateRoute: ActivatedRoute,
    private fundingService: FundingService
  ) { }

  ngOnInit() {
    this.activateRoute.firstChild.params.subscribe(params => {
      if (params['id']) {
        this.fundingService.id = +params['id'];
        this.fundingService.getRewardDetail();
      } else {
        this.router.navigate(['/main']);
      }
    });
  }

  onActivate() {
    window.scrollTo(0, 0);
  }
}
