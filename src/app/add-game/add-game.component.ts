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
    {display:'Select from list', value:'none'},
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
    var url = "https://web-developer-exam.firebaseio.com/sakib-Kr57W_b-YVvc52AJdps.json";
    this.listnamesService.addGameData(url, formData);
    this.status = 99;
    this.timeout();
  }

  timeout() {
    setTimeout(() => {
      this.status = this.listnamesService.getAddGameStatus();
      console.log(this.status);
    }, 1500);
    setTimeout(() => {
      this.status = 0;
    }, 3000);
  }
}
