import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todos: string[];

  constructor() { }

  add(todo: string): void {
    this.todos.push(todo);
  }
}
