import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {
  characters = [
    {name: 'Nazmus Sakib', side:''},
    {name: 'Farhan Angan', side:''}
  ];
  chosenList = 'all';

  constructor() { }

  ngOnInit() {
  }

  onChoose(side){
    this.chosenList = side;
  }

  getCharacters(){
    if(this.chosenList === 'all'){
      return this.characters.slice();
    }
    return this.characters.filter((char) => {
      return char.side === this.chosenList;
    });
  }
}
