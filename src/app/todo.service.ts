import { List } from 'immutable';
import { BehaviorSubject } from 'rxjs';
import { Todo } from './todo.models';

export class TodoService {
  private todoList: BehaviorSubject<List<Todo>> = new BehaviorSubject<List<Todo>>(List([]));
  todoList$ = this.todoList.asObservable();


  public addNewTodo(newTodo: Todo) {
    const oldTodoList = this.todoList.getValue();
    const newList = oldTodoList.push(newTodo);
    this.todoList.next(newList);
  }

  public setTodoList(todoList: List<Todo>) {
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
