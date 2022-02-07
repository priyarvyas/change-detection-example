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

@Component({
  selector: 'app-todo-detail-immutable',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './todo-detail-immutable.component.html',
  styleUrls: ['./todo-detail-immutable.component.scss'],
})
export class TodoDetailImmutableComponent implements OnInit, AfterViewChecked {
  constructor(private zone: NgZone, public render: Renderer2, private cdRef: ChangeDetectorRef) {}

  @ViewChild('todoEle') todoEle: ElementRef<HTMLElement>;
  todoLabel: string;

  @Output() addTodo = new EventEmitter<string>();

  ngOnInit(): void {
    this.todoLabel = '';
  }

  ngAfterViewChecked(): void {
    //highlightComponent(this.zone, this.todoEle, this.render);
  }

  resetTodo(): void {
    this.todoLabel = '';
  }
}
