import {
  AfterViewChecked,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DoCheck,
  ElementRef,
  Input,
  NgZone,
  OnChanges,
  OnInit,
  Renderer2,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { TodoService } from 'src/app/todo.service';
import { Todo } from '../../todo.models';
import { List } from 'immutable';

// tslint:disable-next-line: no-conflicting-lifecycle
@Component({
  selector: 'app-todo-list-immutable',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './todo-list-immutable.component.html',
  styleUrls: ['./todo-list-immutable.component.scss'],
})
export class TodoListImmutableComponent
  implements OnInit, AfterViewChecked, OnChanges, DoCheck
{
  constructor(
    private zone: NgZone,
    public cd: ChangeDetectorRef,
    public todoService: TodoService,
    public render: Renderer2
  ) {}

  @Input() todoList: List<Todo>;

  @ViewChild('todoListEle') todoListEle: ElementRef<HTMLElement>;

  ngDoCheck(): void {
    //console.log(this.constructor.name, '-- ', this.ngDoCheck.name);
  }

  ngOnChanges(changes: SimpleChanges): void {
    //console.log(this.constructor.name, ' -- ', this.ngOnChanges.name, ' -- ', changes);
  }

  ngAfterViewChecked(): void {
    //highlightComponent(this.zone, this.todoListEle, this.render);
  }

  ngOnInit(): void {}

  markCompleted(currentTodo: Todo) {
    currentTodo.completed = !currentTodo.completed;
    this.todoService.updateTodo(currentTodo);
  }

  updateTodoList(todoList: List<Todo>) {
    //console.log('called??', todoList);
    this.todoList = todoList;
  }

  calculateCode(id: number): number {
    if (id === 1 || id === 2) {
      return 1;
    }
    return this.calculateCode(id - 1) + this.calculateCode(id - 2);
  }
}
