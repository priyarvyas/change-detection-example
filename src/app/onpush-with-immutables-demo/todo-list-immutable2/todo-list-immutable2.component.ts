import {
  AfterContentChecked,
  AfterViewChecked,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DoCheck,
  ElementRef,
  Input,
  NgZone,
  OnChanges,
  OnDestroy,
  OnInit,
  Renderer2,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { TodoService } from 'src/app/todo.service';
import { Todo } from '../../todo.models';
import { tap } from 'rxjs/operators';
import { highlightComponent } from 'src/app/util';
import { List } from 'immutable';

// tslint:disable-next-line: no-conflicting-lifecycle
@Component({
  selector: 'app-todo-list-immutable2',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './todo-list-immutable2.component.html',
  styleUrls: ['./todo-list-immutable2.component.scss'],
})
// tslint:disable-next-line: component-class-suffix
export class TodoListImmutableComponent2
  implements
    OnInit,
    AfterViewChecked,
    AfterContentChecked,
    OnChanges,
    OnDestroy,
    DoCheck
{
  constructor(
    private zone: NgZone,
    public cd: ChangeDetectorRef,
    public todoService: TodoService,
    public render: Renderer2
  ) {}

  @Input() todoList: List<Todo>;

  @ViewChild('todoListEle') todoListEle: ElementRef<HTMLElement>;

  // todoSubscription = this.todoService.todoList$
  //   .pipe(
  //     tap((todos) => {
  //       this.updateTodoList(todos);
  //     })
  //   )
  //   .subscribe();

  ngAfterContentChecked(): void {
    //console.log(this.constructor.name, '-- ', this.ngAfterContentChecked.name);
  }
  ngDoCheck(): void {
    //console.log(this.constructor.name, '-- ', this.ngDoCheck.name);
  }
  ngOnDestroy(): void {
    // this.todoSubscription.unsubscribe();
  }

  ngOnChanges(changes: SimpleChanges): void {}

  ngAfterViewChecked(): void {
    //highlightComponent(this.zone, this.todoListEle, this.render);
  }

  ngOnInit(): void {}

  markCompleted(currentTodo: Todo) {
    currentTodo.completed = !currentTodo.completed;
    this.todoService.updateTodo(currentTodo);
    // this.todoList = this.todoList.map((todo) => {
    //   if(todo.id === currentTodo.id) {
    //     todo = {
    //       ...todo,
    //       completed: currentTodo.completed,
    //     }
    //   }
    //   return todo;
    // });
  }

  updateTodoList(todoList: List<Todo>) {
    //console.log('called??', todoList);
    this.todoList = todoList;
  }

  getCode(id: number): string {
    //console.log(' func ', id);
    const code = this.calculateCode(id) + '-code';
    return code;
  }

  calculateCode(id: number): number {
    if (id === 1 || id === 2) {
      return 1;
    }
    return this.calculateCode(id - 1) + this.calculateCode(id - 2);
  }
}
