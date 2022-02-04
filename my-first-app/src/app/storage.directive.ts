import { Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[appStorage]'
})
export class StorageDirective {

  constructor(private element:ElementRef) {
    this.element.nativeElement.style.backgroundColor = "lightgreen";
  }
}

