import { AfterViewChecked, Component, ElementRef, Input, NgZone, OnInit, ViewChild} from '@angular/core';
import { Todo } from '../../todo.models';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit, AfterViewChecked {

  constructor(private zone: NgZone) { }

  @ViewChild('todoListEle') todoListEle: ElementRef<HTMLElement>;

  ngAfterViewChecked(): void {
    this.zone.runOutsideAngular(() => {
      this.todoListEle.nativeElement.classList.add('highlight')
      setTimeout(() => {
        this.todoListEle.nativeElement.classList.remove('highlight')
      }, 1500)
    })
  }

  @Input() todoList: Todo[];

  ngOnInit(): void {
  }

}
