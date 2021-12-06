import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Todo } from './todo.models';

export class TodoService {
  private todoList: BehaviorSubject<Todo[]> = new BehaviorSubject<Todo[]>([]);
  todoList$ = this.todoList.asObservable();

  public setTodoList(todoList: Todo[]) {
    const newList = Object.assign([], todoList);
    this.todoList.next(newList);
  }

  public updateTodo(currentTodo: Todo) {
    let todoList = this.todoList.getValue();
    todoList = todoList.map((todo) =>
      todo.id === currentTodo.id
        ? {
            ...todo,
            completed: currentTodo.completed,
          }
        : todo
    );

    this.todoList.next(todoList);
  }
}
