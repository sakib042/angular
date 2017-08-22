import { Component, OnInit, Input } from '@angular/core';
import { ListnamesService } from '../listnames.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() character;
  nameList: ListnamesService;

  constructor(nameList: ListnamesService) {
    this.nameList = nameList;
  }

  ngOnInit() {
  }

  onAssign(side){
    //this.character.side = side;
    this.nameList.onSideChosen({name: this.character.name, side: side});
  }

}
