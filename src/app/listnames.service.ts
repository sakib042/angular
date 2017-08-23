import { Injectable } from '@angular/core';

@Injectable()
export class ListnamesService{
  private characters = [
    {name: 'Nazmus Sakib', side:''},
    {name: 'Zinath Farhana', side:''},
    {name: 'Rakibul Hasan', side:''},
    {name: 'Tanzina Nipa', side:''},
    {name: 'Shahid Hasan', side:''},
    {name: 'Farhan Faysal', side:''}
  ];

  getCharacters(chosenList){
    if(chosenList === 'all'){
      return this.characters.slice();
    }
    return this.characters.filter((char) => {
      return char.side === chosenList;
    });
  }

  onSideChosen(charInfo){
    const pos = this.characters.findIndex((char)=>{
      return char.name === charInfo.name;
    })
    this.characters[pos].side = charInfo.side;
  }

  addCharacters(name, side){
    const pos = this.characters.findIndex((char)=>{
      return char.name === name;
    })
    if(pos !== -1){
      return;
    }
    const chars = {name:name, side:side};
    this.characters.push(chars);
  }
}
