import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Todo } from './class/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todos: Todo[] = [];

  constructor() { }

  showList(): Observable<Todo[]> {
    return of(this.todos);
  }

  add(content: string): void {
    this.todos.push(new Todo(content, false));
  }

  delete(i: number): void {
    this.todos.splice(i, 1);
  }

  getContent(i: number): Observable<Todo> {
    return of(this.todos[i]);
  }

  update(i: number, content: string): Observable<Todo[]> {
    this.todos[i].content = content;

    return of(this.todos);
  }

  changeState(i: number): void {
    this.todos[i].state = !this.todos[i].state;
  }
}
