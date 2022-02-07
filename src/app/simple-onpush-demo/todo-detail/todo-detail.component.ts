import {
  AfterViewChecked,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  NgZone,
  OnInit,
  Output,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { Todo } from '../../todo.models';
import { getRandomInt } from 'src/app/util';
import { List } from 'immutable';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.scss'],
})
export class TodoDetailComponent implements OnInit {
  constructor(private zone: NgZone, public render: Renderer2, private cdRef: ChangeDetectorRef) {}

  @ViewChild('todoEle') todoEle: ElementRef<HTMLElement>;
  todoLabel: string;

  @Output() addTodo = new EventEmitter<string>();

  ngOnInit(): void {
    this.todoLabel = '';
  }

  resetTodo(): void {
    this.todoLabel = '';
  }
}
