import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appBlueColor]'
})
export class BlueColorDirective {

  constructor(element:ElementRef) {
    element.nativeElement.style.color = "#202020";
  }
  @HostListener('click') doSomething(){
    alert("wow");
  }

}
