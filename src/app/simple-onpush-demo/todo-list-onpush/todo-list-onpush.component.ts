import {
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
  ViewChild,
} from '@angular/core';
import { Todo } from '../../todo.models';

@Component({
  selector: 'app-todo-list-onpush',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './todo-list-onpush.component.html',
  styleUrls: ['./todo-list-onpush.component.scss'],
})
export class TodoListOnpushComponent implements OnInit {
  constructor(
    private zone: NgZone,
    public render: Renderer2,
    private cd: ChangeDetectorRef
  ) {}

  @ViewChild('todoListEle2') todoListEle: ElementRef<HTMLElement>;

  @Input() todoList: Todo[];

  ngOnInit(): void {}

  markForCheck() {
    this.cd.markForCheck();
  }

  detectChanges() {
    this.cd.detectChanges();
  }

  detach() {
    this.cd.detach();
  }

  reattach() {
    this.cd.reattach();
  }
}
