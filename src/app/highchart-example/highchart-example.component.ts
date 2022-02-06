import {
  Component,
  DoCheck,
  NgZone,
} from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_customEvents from 'highcharts-custom-events';
HC_customEvents(Highcharts);

@Component({
  selector: 'app-highchart-example',
  templateUrl: './highchart-example.component.html',
  styleUrls: ['./highchart-example.component.scss']
})
export class HighchartExampleComponent implements DoCheck {

  time = Date.now();

  constructor(zone: NgZone) {
    zone.runOutsideAngular(() => {
      // setInterval(() => {
      //   this.time = Date.now();
      // }, 0);
    });
  }

  ngDoCheck(): void {
    console.log('called??');
  }

  Highcharts: typeof Highcharts = Highcharts; // Highcharts, it's Highcharts

  optFromInputString: string = `
  {
    "title": { "text": "Highcharts chart" },
    "series": [{
      "data": [11,2,3],
      "zones": [{
        "value": 7.2,
        "dashStyle": "dot",
        "color": "red"
      }]
    }, {
      "data": [5,6,7]
    }]
  }
  `;

  optFromInput: Highcharts.Options = JSON.parse(this.optFromInputString);
  updateFromInput: boolean = false;

  // Demonstrate chart instance
  logChartInstance(chart: Highcharts.Chart) {
    console.log('Chart instance: ', chart);
  }

  updateInputChart() {
    this.optFromInput = JSON.parse(this.optFromInputString);
  }

  seriesTypes: { [key: string]: string } = {
    line: 'column',
    column: 'scatter',
    scatter: 'spline',
    spline: 'line',
  };

  toggleSeriesType(index: number = 0) {
    this.optFromInput.series[index].type = this.seriesTypes[
      this.optFromInput.series[index].type || 'line'
    ] as 'column' | 'scatter' | 'spline' | 'line';
    // nested change - must trigger update
    this.updateFromInput = true;
  }
}
