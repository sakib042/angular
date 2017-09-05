import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ListnamesService } from "../listnames.service";

@Component({
  selector: 'app-detail-game',
  templateUrl: './detail-game.component.html',
  styleUrls: ['./detail-game.component.css']
})
export class DetailGameComponent implements OnInit {

    listnamesService: ListnamesService;

    constructor(listnamesService: ListnamesService) {
      this.listnamesService = listnamesService;
    }

    ngOnInit() { }

    @Input() detailFormMain;
    @Input() data;
    @Output() newDetailFormMain = new EventEmitter<boolean>();

    removeAddForm(){
      this.newDetailFormMain.emit(false);
      this.detailFormMain = false;
    }
}
