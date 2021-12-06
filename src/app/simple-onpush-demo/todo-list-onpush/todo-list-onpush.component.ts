import { AfterViewChecked, ChangeDetectionStrategy, Component, ElementRef, Input, NgZone, OnInit, ViewChild } from '@angular/core';
import { Todo } from '../../todo.models';

@Component({
  selector: 'app-todo-list-onpush',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './todo-list-onpush.component.html',
  styleUrls: ['./todo-list-onpush.component.scss']
})
export class TodoListOnpushComponent implements OnInit, AfterViewChecked {

  constructor(private zone: NgZone) { }

  @ViewChild('todoListEle2') todoListEle: ElementRef<HTMLElement>;

  ngAfterViewChecked(): void {
    this.zone.runOutsideAngular(() => {
      this.todoListEle.nativeElement.classList.add('highlight')
      setTimeout(() => {
        this.todoListEle.nativeElement.classList.remove('highlight')
      }, 1500)
    })
  }

  get runChangeDetection() {
    console.log('TodosListComponent - Checking the view');
    return true;
  }

  @Input() todoList: Todo[];
  

  ngOnInit(): void {
  }
}
