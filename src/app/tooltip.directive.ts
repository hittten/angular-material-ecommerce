import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appTooltip]',
  standalone: true
})
export class TooltipDirective {

  @Input('appTooltip') message = '';
  private readonly tooltipElement: HTMLElement;

  constructor(private el: ElementRef<HTMLElement>) {
    this.tooltipElement = document.createElement('div');
  }

  @HostListener('mouseenter') onMouseEnter() {
    // create
    this.tooltipElement.textContent = this.message;

    // style
    this.tooltipElement.style.position = 'absolute';
    this.tooltipElement.style.background = 'black';
    this.tooltipElement.style.color = 'white';
    this.tooltipElement.style.opacity = '0.7';
    this.tooltipElement.style.padding = '5px 10px';
    this.tooltipElement.style.borderRadius = '2px';

    // positioning
    document.body.appendChild(this.tooltipElement);
    const elementRect = this.el.nativeElement.getBoundingClientRect();
    const tooltipRect = this.tooltipElement.getBoundingClientRect();
    this.tooltipElement.style.top = (elementRect.top - elementRect.height + window.scrollY).toString() + 'px';
    this.tooltipElement.style.left = (elementRect.left + (elementRect.width - tooltipRect.width)).toString() + 'px';
  }

  @HostListener('mouseleave') onMouseLeave() {
    document.body.removeChild(this.tooltipElement);
  }

}
