import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'helperHead',
  templateUrl: './helper.component.html',
  styleUrls: ['./helper.component.css']
})
export class HelperComponent implements OnInit {

  @Input()
  head = null;

  constructor() {}

  ngOnInit() {}

}
