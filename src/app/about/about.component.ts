import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  title = '';
  subtitle = '';
  activatedRoute: ActivatedRoute;

  constructor(activatedRoute: ActivatedRoute) {
    this.activatedRoute = activatedRoute;
  }

  ngOnInit() {
    this.activatedRoute.data.subscribe(
      (data) => {
      this.title = data.title;
      this.subtitle = data.subtitle;
      //console.log(this.title);
      }
    )
  }

}
