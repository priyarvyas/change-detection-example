import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { TodoDetailImmutableComponent } from './todo-detail-immutable/todo-detail-immutable.component';

import { OnPushWithImmutablesRoutingModule } from './onpush-with-immutables-routing.module';
import { TodoListImmutableComponent } from './todo-list-immutable/todo-list-immutable.component';
import { OnPushWithImmutablesDemoComponent } from './onpush-with-immutables-demo.component';
import { TodoService } from '../todo.service';
import { TodoListImmutableComponent2 } from './todo-list-immutable2/todo-list-immutable2.component';

@NgModule({
  declarations: [
    OnPushWithImmutablesDemoComponent,
    TodoDetailImmutableComponent,
    TodoListImmutableComponent,
    TodoListImmutableComponent2
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    OnPushWithImmutablesRoutingModule
  ],
  providers: [TodoService]
})
export class OnPushWithImmutablesDemoModule { }