import { Component, OnInit, Input } from '@angular/core';
import { ListnamesService } from '../listnames.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() character;
  listnamesService: ListnamesService;

  constructor(listnamesService: ListnamesService) {
    this.listnamesService = listnamesService;
  }

  ngOnInit() {}

  onAssign(side){
    this.listnamesService.onSideChosen({name: this.character.name, side: side});
  }

}
