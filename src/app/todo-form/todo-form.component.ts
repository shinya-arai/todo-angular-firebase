import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {
  content: string;

  constructor(private todoService: TodoService) { }

  ngOnInit() {
  }

  addTodo(content: string): void {
    this.todoService.addTodo(content);
    this.content = '';
  }

}
