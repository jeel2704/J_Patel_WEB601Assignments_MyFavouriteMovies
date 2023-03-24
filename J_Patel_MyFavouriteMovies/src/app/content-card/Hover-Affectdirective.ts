import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[hoverAffect]'
})
export class HoverAffectDirective {

  @Input('hoverAffect') affectStyle: string | undefined;

  constructor(private el: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {
    switch(this.affectStyle) {
      case 'underline':
        this.el.nativeElement.style.textDecoration = 'underline';
        break;
      case 'bold':
        this.el.nativeElement.style.fontWeight = 'bold';
        break;
    }
  }

  @HostListener('mouseleave') onMouseLeave() {
    switch(this.affectStyle) {
      case 'underline':
        this.el.nativeElement.style.textDecoration = 'none';
        break;
      case 'bold':
        this.el.nativeElement.style.fontWeight = 'normal';
        break;
    }
  }

}
