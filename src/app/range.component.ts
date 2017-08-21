import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-range',
	template: `
		<div class="input-group">
  		<h2>{{initialValue}}</h2>
  		<input class="input-control" type="range" name="points" min="{{ min }}" max="{{ max }}" value="{{ initialValue }}" (input)="onRangeChange($event)" >
		</div>
	`,
	styles: ['div { position:fixed;bottom:50px;right:10px; }']
})

export class RangeComponent{
	min = 0;
	max = 100;
	@Input() initialValue;

	onRangeChange(event){
		//alert(event.target.value);
		this.initialValue = event.target.value;
	}
};
