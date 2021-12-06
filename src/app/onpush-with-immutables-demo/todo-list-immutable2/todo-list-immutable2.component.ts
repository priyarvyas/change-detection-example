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
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { TodoService } from 'src/app/todo.service';
import { Todo } from '../../todo.models';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-todo-list-immutable2',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './todo-list-immutable2.component.html',
  styleUrls: ['./todo-list-immutable2.component.scss'],
})
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
    public todoService: TodoService
  ) {}
  ngAfterContentChecked(): void {
    console.log(' after content checked 2>>');
  }
  ngDoCheck(): void {
    console.log(' do check 2>>');
    //this.todoList = [{id: '', name: 'hahaha', completed: false, date: new Date()}]
    console.log(this.todoList, 'is changed???');
  }
  ngOnDestroy(): void {
    this.todoSubscription.unsubscribe();
  }

  @ViewChild('todoListEle') todoListEle: ElementRef<HTMLElement>;

  todoSubscription = this.todoService.todoList$
    .pipe(
      tap((todos) => {
        this.updateTodoList(todos);
      })
    )
    .subscribe();

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes, ' why you no run??');
  }

  ngAfterViewChecked(): void {
    this.zone.runOutsideAngular(() => {
      this.todoListEle.nativeElement.classList.add('highlight');
      setTimeout(() => {
        this.todoListEle.nativeElement.classList.remove('highlight');
      }, 1500);
    });
  }

  @Input() todoList: Todo[];

  ngOnInit(): void {}

  addTodo(newTodo: Todo) {
    console.log('Adding todo');
    this.todoList.push(newTodo);
    this.todoService.setTodoList(this.todoList);
  }

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

  updateTodoList(todoList: Todo[]) {
    console.log('called??', todoList);
    this.todoList = todoList;
  }
}
