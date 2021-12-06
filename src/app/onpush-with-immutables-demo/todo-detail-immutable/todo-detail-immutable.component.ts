import {
  AfterViewChecked,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  NgZone,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { Todo } from '../../todo.models';
import * as faker from 'faker';

@Component({
  selector: 'app-todo-detail-immutable',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './todo-detail-immutable.component.html',
  styleUrls: ['./todo-detail-immutable.component.scss'],
})
export class TodoDetailImmutableComponent implements OnInit, AfterViewChecked {
  constructor(private zone: NgZone) {}

  @ViewChild('todoEle') todoEle: ElementRef<HTMLElement>;

  ngAfterViewChecked(): void {
    this.zone.runOutsideAngular(() => {
      this.todoEle.nativeElement.classList.add('highlight');
      setTimeout(() => {
        this.todoEle.nativeElement.classList.remove('highlight');
      }, 1500);
    });
  }

  newTodo: Todo;

  @Output() newTodoAdded = new EventEmitter<Todo>();

  ngOnInit(): void {
    this.resetTodo();
  }

  updateTodo() {
    this.newTodo.id = faker.datatype.uuid();
    this.newTodoAdded.emit(this.newTodo);
    this.resetTodo();
  }

  resetTodo() {
    this.newTodo = {
      id: '',
      name: '',
      completed: false,
      date: new Date(),
    };
  }
}
