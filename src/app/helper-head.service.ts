export class HelperHeadService {

  head = null;

  constructor() { }

  setHeader(head){
    this.head = head;
  }

  getHeader(){
    return this.head;
  }

  logMessage(message){
    console.log(message);
  }

}
