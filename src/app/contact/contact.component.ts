import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() {}

  ngOnInit() { }

  onSubmit(info){
    if(info.invalid){
      return;
    }
    console.log(info.value);
  }

}
