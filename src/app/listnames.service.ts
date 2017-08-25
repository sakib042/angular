import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { HelperHeadService } from './helper-head.service';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ListnamesService{
  private characters = [
    {name: 'error', side:''}
  ];

  error = true;

  private log: HelperHeadService;
  charactersChanged = new Subject<void>();
  http: Http;

  constructor(log: HelperHeadService, http: Http){
    this.log = log;
    this.http = http;
  }

  fetchCharacters(url){
    this.http.get(url)
      .map(
        (response: Response) => {
          const data = response.json();
          const extractedData = data.results;
          const chars = extractedData.map((char) => {
            return {name: char.name, side: ''};
          });
          return chars;
        }
      )
      .subscribe(
        (data) => {
          //console.log(data);
          this.characters = data;
          this.error = false;
          this.charactersChanged.next();
        }
      );
  }

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
    this.charactersChanged.next();
    this.log.logMessage(charInfo.name + ' has been changed to ' + charInfo.side);
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
