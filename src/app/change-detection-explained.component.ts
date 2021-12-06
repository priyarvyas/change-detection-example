import { ChangeDetectionStrategy, Component, DoCheck, NgZone, OnChanges, SimpleChanges } from '@angular/core';

const simpletTemplate = `
  <div class="w-80 grid gap-y-2  m-auto">
    <div class="text-sm mx-auto">
      <p [textContent]="_time | date:'hh:mm:ss:SSS'"></p>
    </div>
    <button class="mx-auto
    shadow-md
    w-24
    p-2
    bg-blue-500
    rounded
    hover:bg-blue-700
    text-white" (click)="(0)">do something</button>
  </div>
`;

@Component({
  template: simpletTemplate,
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'cd-explain'
})
export class ChangeDetectionExplainedComponent implements DoCheck {
  _time;
  get time() {  return this._time = Date.now(); }

  constructor(zone: NgZone) {
      this._time = Date.now();
      
      zone.runOutsideAngular(() => {
        // setInterval(() => {
        //     this._time = Date.now()
        // }, 1);
    });
  }

  ngDoCheck(): void {
    console.log("called??");
  }
}
