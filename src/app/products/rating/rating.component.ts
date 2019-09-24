import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {

  @Input() rating: any;

  ratingArr: any = [];

  constructor() { }

  ngOnInit() {
    this.ratingArr = Array(Math.round(this.rating)).fill(Math.round(this.rating));
  }

}
