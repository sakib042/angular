import { Component, OnInit } from '@angular/core';
import { ListnamesService } from '../listnames.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {
  // characters = [];
  // chosenList = 'all';
  // nameList: ListnamesService;

  constructor() {
    // this.nameList = nameList;
  }

  // constructor(nameList: ListnamesService) {
  //   this.nameList = nameList;
  // }

  ngOnInit() { }

  // onChoose(side){
  //   this.chosenList = side;
  // }

  // getCharacters(){
  //   this.characters = this.nameList.getCharacters(this.chosenList);
  //   return this.characters;
  // }
}
