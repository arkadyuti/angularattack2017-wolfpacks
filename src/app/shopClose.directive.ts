import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[shopCloseDirective]'
})
export class isShopClosedDirective {
  @HostBinding('class.shop-closed') isClosed = true;

  // @HostBinding('class.is-favorite-hovering') hovering = false;
  //
  // @HostListener('mouseenter') onMouseEnter() {
  //   this.hovering = true;
  // }
  //
  // @HostListener('mouseleave') onMouseLeave() {
  //   this.hovering = false;
  // }

  @Input() set shopCloseDirective(value) {
    this.isClosed = value;
  }
}
