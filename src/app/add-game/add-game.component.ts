import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ListnamesService } from "../listnames.service";

@Component({
  selector: 'app-add-game',
  templateUrl: './add-game.component.html',
  styleUrls: ['./add-game.component.css']
})
export class AddGameComponent implements OnInit {

  listnamesService: ListnamesService;

  availabilityOptions = [
    {display:'Available', value:'avail'},
    {display:'Unavailable', value:'unavail'}
  ]
  selectedAvailability: string = this.availabilityOptions[1].value;

  platformOptions = [
    {display:'PlayStation', value:'play'},
    {display:'Xbox', value:'xbox'},
    {display:'IOS', value:'ios'},
    {display:'Android', value:'and'},
    {display:'Windows', value:'win'}
  ]
  selectedPlatform: string = this.platformOptions[0].value;
  status = 0;

  constructor(listnamesService: ListnamesService) {
    this.listnamesService = listnamesService;
  }

  ngOnInit() { }

  @Input() addFormMain;
  @Output() newAddFormMain = new EventEmitter<boolean>();

  removeAddForm(){
    this.newAddFormMain.emit(false);
    this.addFormMain = false;
  }

  addGame(formData){
    //console.log(formData.value);
    this.listnamesService.addGameData(formData.value);
    this.status = 99;
    this.timeout();
  }

  timeout() {
    setTimeout(() => {
      this.status = this.listnamesService.getAddGameStatus();
      //console.log(this.status);
    }, 1500);
    setTimeout(() => {
      this.status = 0;
    }, 2500);
  }

  rate1 = false;
  rate2 = false;
  rate3 = false;
  rate4 = false;
  rate5 = false;
  starSelected = 0;

  star(id){
    switch (id) {
      case 1:
        this.rate1 = true;
        this.rate2 = false;
        this.rate3 = false;
        this.rate4 = false;
        this.rate5 = false;
        this.starSelected = 1;
        break;
      case 2:
        this.rate1 = true;
        this.rate2 = true;
        this.rate3 = false;
        this.rate4 = false;
        this.rate5 = false;
        this.starSelected = 2;
        break;
      case 3:
        this.rate1 = true;
        this.rate2 = true;
        this.rate3 = true;
        this.rate4 = false;
        this.rate5 = false;
        this.starSelected = 3;
        break;
      case 4:
        this.rate1 = true;
        this.rate2 = true;
        this.rate3 = true;
        this.rate4 = true;
        this.rate5 = false;
        this.starSelected = 4;
        break;
      case 5:
        this.rate1 = true;
        this.rate2 = true;
        this.rate3 = true;
        this.rate4 = true;
        this.rate5 = true;
        this.starSelected = 5;
        break;
      default:
        break;
    }

  }
}
