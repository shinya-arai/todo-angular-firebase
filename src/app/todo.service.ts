import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }

  todo: string;

  todos: string[];

  add(todo: string): void {
    this.todos.push(todo); 
  }
}
