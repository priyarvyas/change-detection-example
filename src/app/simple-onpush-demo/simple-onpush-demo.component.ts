import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo.models';

@Component({
  selector: 'app-simple-onpush-demo',
  templateUrl: './simple-onpush-demo.component.html',
  styleUrls: ['./simple-onpush-demo.component.scss']
})
export class SimpleOnpushDemoComponent implements OnInit {

  constructor() { }
  todoList: Todo[] = [];
  todoList2: Todo[] = [];

  ngOnInit(): void {
  }

}
