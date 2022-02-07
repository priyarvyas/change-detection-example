import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Todo } from '../todo.models';
import { getRandomInt } from '../util';

@Component({
  selector: 'app-simple-onpush-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './simple-onpush-demo.component.html',
  styleUrls: ['./simple-onpush-demo.component.scss']
})
export class SimpleOnpushDemoComponent implements OnInit {

  constructor() { }

  todoList: Todo[] = [];

  todoList2: Todo[] = [];

  todoList3: Todo[] = [];

  ngOnInit(): void {}

  addNewTodo(label: string): void {
    const newTodo: Todo = {
      id: getRandomInt(1, 25),
      name: label,
      completed: false
    };
    this.todoList.push(newTodo);
  }

  addNewTodo2(label: string): void {
    const newTodo: Todo = {
      id: getRandomInt(1, 25),
      name: label,
      completed: false
    };
    this.todoList2.push(newTodo);
    //this.todoList3 = Object.assign([], this.todoList2);
  }
}
