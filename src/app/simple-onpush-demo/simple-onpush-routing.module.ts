import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SimpleOnpushDemoComponent } from './simple-onpush-demo.component';

const routes: Routes = [
  {path: '', component: SimpleOnpushDemoComponent},
  {path: '**', component: SimpleOnpushDemoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SimpleOnPushRoutingModule { }