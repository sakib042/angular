import { Component, OnInit, OnDestroy} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListnamesService } from '../listnames.service'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit, OnDestroy {

  characters = [];
  activatedRoute: ActivatedRoute;
  listnamesService: ListnamesService;
  loadedSide = 'all';
  subscribtion;

  constructor(activatedRoute: ActivatedRoute, listnamesService: ListnamesService) {
    this.activatedRoute = activatedRoute;
    this.listnamesService = listnamesService;
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params) => {
        this.characters = this.listnamesService.getCharacters(params.side);
        this.loadedSide = params.side;
      }
    );
    this.subscribtion = this.listnamesService.charactersChanged.subscribe(
      () => {
        this.characters = this.listnamesService.getCharacters(this.loadedSide);
      }
    );
  }

  ngOnDestroy() {
    this.subscribtion.unsubscribe();
  }
}
