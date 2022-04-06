import {Directive, ElementRef, HostListener, Renderer2} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private element: ElementRef, private renderer: Renderer2) { }

  @HostListener('mouseenter') onMuseEnter(){
    this.renderer.addClass(this.element.nativeElement, "highlight")
  }

  @HostListener('mouseleave') onMuseLeave(){
    this.renderer.removeClass(this.element.nativeElement, "highlight")
  }

}
