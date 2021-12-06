import { ChangeDetectionStrategy, ChangeDetectorRef, Component, DoCheck, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import { pipe, Subscription } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Todo } from '../todo.models';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-onpush-with-immutables-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './onpush-with-immutables-demo.component.html',
  styleUrls: ['./onpush-with-immutables-demo.component.scss']
})
export class OnPushWithImmutablesDemoComponent implements OnDestroy, DoCheck{

  constructor(public todoService: TodoService, private cd:ChangeDetectorRef) { }
  ngDoCheck(): void {
    console.log("parent gets checked?????");
    this.cd.detectChanges();
  }
  ngOnDestroy(): void {
    this.todoSubscription.unsubscribe();
  }
  todoSubscription: Subscription;

  ngOnInit(): void {
    this.todoSubscription = this.todoService.todoList$.
    subscribe((todos) => {
      console.log(todos);
      //this.todoList = todos
    })
  }
  todoList: Todo[];
  
}


