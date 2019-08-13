import {Directive, Renderer2, ElementRef} from '@angular/core';

@Directive({
  selector: '[appB4Button]'
})
export class B4ButtonDirective {

  constructor(el: ElementRef, renderer: Renderer2) {
    renderer.setStyle(el.nativeElement, 'color', 'red');
  }

}
