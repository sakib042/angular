import { Component, OnInit } from '@angular/core';
import { ListnamesService } from './listnames.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';
  newInitialValue = 90;

  listnamesService: ListnamesService;

  constructor(listnamesService: ListnamesService){
    this.listnamesService = listnamesService;
  }

  ngOnInit(){
    this.listnamesService.fetchGameData("https://web-developer-exam.firebaseio.com/sakib-Kr57W_b-YVvc52AJdps.json");
    this.listnamesService.fetchCharacters('http://swapi.co/api/people/');
  }
}
