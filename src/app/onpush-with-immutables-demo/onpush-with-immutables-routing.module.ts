import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OnPushWithImmutablesDemoComponent } from './onpush-with-immutables-demo.component';

const routes: Routes = [
  {path: '', component: OnPushWithImmutablesDemoComponent},
  {path: '**', component: OnPushWithImmutablesDemoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OnPushWithImmutablesRoutingModule { }