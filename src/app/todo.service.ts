import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todos: string[] = [];

  constructor() { }

  list(): Observable<string[]> {
    return of(this.todos);
  }

  add(content: string): void {
    this.todos.push(content);
  }

  delete(i: number): void {
    this.todos.splice(i, 1);
  }

  getContent(i: number): Observable<string> {
    return of(this.todos[i]);
  }

  update(i: number, content: string): string[] {
    return this.todos = this.todos.map(todo => todo === this.todos[i] ? content : todo);
  }
}
