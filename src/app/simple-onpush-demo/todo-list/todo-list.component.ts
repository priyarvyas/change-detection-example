import { AfterViewChecked, Component, ElementRef, Input, NgZone, OnInit, Renderer2, ViewChild} from '@angular/core';
import { List } from 'immutable';
import { highlightComponent } from 'src/app/util';
import { Todo } from '../../todo.models';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit, AfterViewChecked {

  constructor(private zone: NgZone, public render: Renderer2) { }

  @ViewChild('todoListEle') todoListEle: ElementRef<HTMLElement>;

  @Input() todoList: Todo[];

  ngOnInit(): void {
  }

  ngAfterViewChecked(): void {
    highlightComponent(this.zone, this.todoListEle, this.render);
  }

  // calculateCode(id: number): number {
  //   if (id === 1 || id === 2) {
  //     return 1;
  //   }
  //   return this.calculateCode(id - 1) + this.calculateCode(id - 2);
  // }

}
