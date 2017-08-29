import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-game',
  templateUrl: './add-game.component.html',
  styleUrls: ['./add-game.component.css']
})
export class AddGameComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

  @Input() addFormMain;
  @Output() newAddFormMain = new EventEmitter<boolean>();

  removeAddForm(){
    this.newAddFormMain.emit(false);
    this.addFormMain = false;
  }
}
