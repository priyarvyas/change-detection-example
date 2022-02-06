import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DoCheck,
} from '@angular/core';
import { List } from 'immutable';
import { Todo } from '../todo.models';
import { TodoService } from '../todo.service';
import { getRandomInt } from '../util';

@Component({
  selector: 'app-onpush-with-immutables-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './onpush-with-immutables-demo.component.html',
  styleUrls: ['./onpush-with-immutables-demo.component.scss'],
})
export class OnPushWithImmutablesDemoComponent implements DoCheck {
  todoList: List<Todo>;
  constructor(public todoService: TodoService, private cd: ChangeDetectorRef) {}
  ngDoCheck(): void {
    //console.log(this.constructor.name, ' -- ', this.ngDoCheck.name);
  }

  addTodo(label: string) {
    //console.log('Adding todo');
    const newTodo: Todo = {
      id: getRandomInt(1, 25),
      name: label,
      completed: false,
    };
    this.todoService.addNewTodo(newTodo);
  }
}
