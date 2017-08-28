import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  title = '';
  subtitle = '';
  activatedRoute: ActivatedRoute;
  formSubmitted = false;

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

  timeout() {
    setTimeout(() => {
      this.formSubmitted = false;
    }, 3000);
  }

	onSubmit(info){
    this.formSubmitted = true;
		if(info.invalid){
      this.formSubmitted = false;
      return;
		}
    console.log(info.value);
    this.timeout();
	}
}
