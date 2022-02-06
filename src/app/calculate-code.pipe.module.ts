import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CalculateCodePipe } from './calculate-code.pipe';

@NgModule({
  declarations: [
    CalculateCodePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CalculateCodePipe
  ]
})
export class CalculateCodePipeModule { }
