import { Injectable } from '@angular/core';

@Injectable()
export class HelperHeadService {

  head = null;

  constructor() { }

  setHeader(head){
    this.head = head;
  }

  getHeader(){
    return this.head;
  }

}
