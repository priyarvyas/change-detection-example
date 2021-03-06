import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HighchartExampleComponent } from './highchart-example/highchart-example.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HighchartExampleComponent,
  },
  {
    path: 'simple-onpush-demo',
    loadChildren: () =>
      import('src/app/simple-onpush-demo/simple-onpush-demo.module').then(
        (m) => m.SimpleOnPushDemoModule
      ),
  },
  {
    path: 'immutable-onpush-demo',
    loadChildren: () =>
      import(
        'src/app/onpush-with-immutables-demo/onpush-with-immutables-demo.module'
      ).then((m) => m.OnPushWithImmutablesDemoModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
