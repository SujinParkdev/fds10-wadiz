import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fundinglist',
  templateUrl: './fundinglist.component.html',
  styleUrls: ['./fundinglist.component.css']
})
export class FundinglistComponent implements OnInit {
  fundingList = [];

  constructor() { }

  ngOnInit() {
  }

}
