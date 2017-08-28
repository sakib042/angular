import { Component, OnInit } from '@angular/core';
import { ListnamesService } from '../listnames.service';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-create-character',
	templateUrl: './create-character.component.html',
	styleUrls: ['./create-character.component.css']
})
export class CreateCharacterComponent implements OnInit {

	availableSides = [
		{display: 'None', value: ''},
		{display: 'Light', value: 'light'},
		{display: 'Dark', value: 'dark'}
	];
	title = '';
	subtitle = '';
	list: ListnamesService;
  activatedRoute: ActivatedRoute;
  formSubmitted = false;

	constructor(activatedRoute: ActivatedRoute, list:ListnamesService) {
		this.list = list;
		this.activatedRoute = activatedRoute;
	}

	ngOnInit() {
		this.activatedRoute.data.subscribe(
			(data) => {
				this.title = data.title;
				this.subtitle = data.subtitle;
			}
		)
  }

  timeout() {
    setTimeout(() => {
      this.formSubmitted = false;
    }, 2000);
  }

	onSubmit(submittedData){
    this.formSubmitted = true;
		if(submittedData.invalid){
      this.formSubmitted = false;
			return;
		}
    this.list.addCharacters(submittedData.value.name, submittedData.value.side);
    this.timeout();
	}
}
