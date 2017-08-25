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

	onSubmit(info){
		if(info.invalid){
			return;
		}
		console.log(info.value);
	}
}
