import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todos: string[] = [];

  constructor() { }

  add(content: string): void {
    this.todos.push(content);
  }

  delete(i: number): void {
    this.todos.splice(i, 1);
  }
}
