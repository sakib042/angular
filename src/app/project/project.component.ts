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

  confirm = false;
  showConfirm = -1;

  confirmDelete(id){
    this.showConfirm = -1;
    if(this.confirm == true){
      this.listnamesService.deleteOne(id);
      this.timeout();
    }
  }

  delete(id){
    if(this.showConfirm !== id){
      this.confirm = true;
      this.showConfirm = id;
    }
    else{
      this.confirm = false;
      this.showConfirm = -1;
    }
  }

  timeout(){
    setTimeout(() => {
      if(this.listnamesService.getDeleteGameStatus()==200){
        this.games = this.listnamesService.getAllGameData('all');
      }
    }, 2000);
  }

  addForm = false;
  detailForm = false;

  onStatusChanged(newStatus){
    this.addForm = newStatus;
  }

  showAddForm(){
    if(this.detailForm==false){
      this.onStatusChanged(true);
    }
  }

  onDetailStatusChanged(newStatus){
    this.detailForm = newStatus;
  }

  showDetail(id){
    this.game = this.listnamesService.getOneGameData(id);
    this.onDetailStatusChanged(true);
  }
}
