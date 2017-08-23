import { Component, OnInit } from '@angular/core';
import { ListnamesService } from '../listnames.service';

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
  list:ListnamesService;
  heading = "Add New Character";

  constructor(list:ListnamesService) {
    this.list = list;
  }

  ngOnInit() {
  }

  onSubmit(submittedData){
    //console.log(submittedData);
    if(submittedData.invalid){
      return;
    }
    this.list.addCharacters(submittedData.value.name, submittedData.value.side);
  }
}
