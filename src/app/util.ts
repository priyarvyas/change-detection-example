import { ElementRef, NgZone, Renderer2 } from '@angular/core';

export function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

export function highlightComponent(
  zone: NgZone,
  targetEl: ElementRef,
  render: Renderer2
) {
  zone.runOutsideAngular(() => {
    render.addClass(targetEl.nativeElement, 'highlight');
    setTimeout(() => {
      render.removeClass(targetEl.nativeElement, 'highlight');
    }, 1500);
  });
}
