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
  private games = []
  error = true;

  private log: HelperHeadService;
  charactersChanged = new Subject<void>();
  http: Http;

  constructor(log: HelperHeadService, http: Http){
    this.log = log;
    this.http = http;
  }

  private addGameStatus = 0;
  private deleteGameStatus = 0;

  addGameData(url, data){
    const _data = JSON.stringify(data.value);
    const addedData = data.value;
    this.http.post(url, _data).subscribe(
      (data)=>{
        this.games.push(addedData);
        this.addGameStatus = data.status;
        this.charactersChanged.next();
        //console.log(this.games);
      }
    );
  }

  getAddGameStatus(){
    return this.addGameStatus;
  }

  private results = {
    keys: [],
    data: []
  };
  private dataX = [];
  private keysX = [];

  fetchGameData(url){
    this.http.get(url)
    .map(
      (response) => {
        const data = response.json();
        for (var key in data) {
          this.dataX.push(data[key]);
          this.keysX.push(key);
        }
        this.results = {
          keys: this.keysX,
          data: this.dataX
        };
        const chars = this.results.data;
        return chars;
      }
    )
    .subscribe(
      (data) => {
        this.games = data;
        //console.log(this.games);
        this.error = false;
        this.charactersChanged.next();
      }
    );
  }

  getAllGameData(key){
    if(key === 'all'){
      return this.games.slice();
    }
    return this.games.filter((char) => {
      //console.log(char.availability);
      const newKey = key.toLowerCase();
      const name = char.name.toLowerCase();
      return name.includes(newKey);
    });
  }

  getAllAvailableGameData(key){
    //console.log(key);
    if(key === 'all'){
      return this.games.slice();
    }
    return this.games.filter((char) => {
      const newKey = key.toLowerCase();
      //console.log(newKey);
      const availability = char.availability.toLowerCase();
      return this.ContainsExactString(availability, newKey);
    });
  }

  ContainsExactString(sentence, compare) {
    var words = sentence.split(" ");
    for (var i = 0; i < words.length; ++i) {
        if(words[i] === compare) {
            return true;
        }
    }
    return false;
  }

  getOneGameData(key){
    return this.results.data[key];
  }



  deleteGameData(id, key){
    const url = 'https://web-developer-exam.firebaseio.com/sakib-Kr57W_b-YVvc52AJdps/' + key + '.json';
    this.http.delete(url).subscribe(
      (data)=>{
          this.deleteGameStatus = data.status;
          this.games.splice(id, 1);
      }
    )
  }

  deleteOne(id){
    const newKey = this.results.keys[id];
    this.deleteGameData(id, newKey);
  }

  getDeleteGameStatus(){
    return this.deleteGameStatus;
  }



  fetchCharacters(url){
    this.http.get(url)
      .map(
        (response: Response) => {
          const extractedData = response.json().results;
          //console.log(response.json());
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
