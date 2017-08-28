import { Component, OnInit } from '@angular/core';
import { ListnamesService } from '../listnames.service'

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  listnamesService: ListnamesService;
  games;
  game = {
    name: '',
    availability: '',
    description: '',
    image_url: '',
    owner: '',
    platform: '',
    rating: 0
  };
  subscribtion;

  constructor(listnamesService: ListnamesService) {
    this.listnamesService = listnamesService;
  }

  ngOnInit() {
    this.games = this.listnamesService.getAllGameData('all');
    this.subscribtion = this.listnamesService.charactersChanged.subscribe(
      () => {
        this.games = this.listnamesService.getAllGameData('all');
      }
    );
  }

  str: string;
  doReset(): void {
    //console.log(this.str);
    if(this.str !== ''){
      this.str = undefined;
    }
    this.games = this.listnamesService.getAllGameData('all');
  }

  doSearch(searchValue : string ) {
    if(searchValue !== ''){
      this.games = this.listnamesService.getAllGameData(searchValue);
    }
    if(searchValue == ''){
      this.games = this.listnamesService.getAllGameData('all');
    }
  }

  onSearchChange(searchValue : string ) {
    this.games = this.listnamesService.getAllAvailableGameData(searchValue);
  }

  showDetail(id){
    this.game = this.listnamesService.getOneGameData(id);
    console.log(this.game);
  }

  delete(id){
    console.log(id+' Deleted.!');
  }
}
