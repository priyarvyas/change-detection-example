import { AfterViewChecked, ChangeDetectionStrategy, Component, ElementRef, Input, NgZone, OnInit, ViewChild } from '@angular/core';
import { Todo } from '../../todo.models';
import * as faker from 'faker';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.scss'],
})
export class TodoDetailComponent implements OnInit, AfterViewChecked {
  constructor(private zone: NgZone) {}

  @ViewChild('todoEle') todoEle: ElementRef<HTMLElement>;

  ngAfterViewChecked(): void {
    this.zone.runOutsideAngular(() => {
      this.todoEle.nativeElement.classList.add('highlight')
      setTimeout(() => {
        this.todoEle.nativeElement.classList.remove('highlight')
      }, 1500)
    })
  }
  
  newTodo: Todo;
  @Input() todoList: Todo[];

  ngOnInit(): void {
    this.resetTodo()
  }

  addTodo() {
    this.newTodo.id = faker.datatype.uuid();
    this.todoList.push(this.newTodo);
    this.resetTodo();
  }

  resetTodo() {
    this.newTodo = {
      id: '',
      name: '',
      completed: false,
      date: new Date()
    };
  }
}
