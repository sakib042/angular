import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListnamesService } from '../listnames.service'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  characters = [];
  activatedRoute: ActivatedRoute;
  listnamesService: ListnamesService;

  constructor(activatedRoute: ActivatedRoute, listnamesService: ListnamesService) {
    this.activatedRoute = activatedRoute;
    this.listnamesService = listnamesService;
  }

  ngOnInit() {
  this.activatedRoute.params.subscribe(
    (params) => {
      this.characters = this.listnamesService.getCharacters(params.side)
    }
  );
  }

}
