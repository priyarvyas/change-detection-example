import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { HighchartExampleComponent } from './highchart-example/highchart-example.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HighchartExampleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HighchartsChartModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
