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

	onSubmit(submittedData){
		if(submittedData.invalid){
			return;
		}
		this.list.addCharacters(submittedData.value.name, submittedData.value.side);
	}
}
