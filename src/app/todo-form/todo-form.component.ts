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
    console.log(this.todoService.todos);
  }

  add(todo: string): void {
    this.todoService.add(todo);
  }

}
