import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { TodoDetailComponent } from './todo-detail/todo-detail.component';

import { SimpleOnPushRoutingModule } from './simple-onpush-routing.module';
import { TodoListOnpushComponent } from './todo-list-onpush/todo-list-onpush.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { SimpleOnpushDemoComponent } from './simple-onpush-demo.component';
import { CalculateCodePipeModule } from '../calculate-code.pipe.module';

@NgModule({
  declarations: [
    SimpleOnpushDemoComponent,
    TodoListOnpushComponent,
    TodoDetailComponent,
    TodoListComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    SimpleOnPushRoutingModule,
    CalculateCodePipeModule
  ],
})
export class SimpleOnPushDemoModule { }
