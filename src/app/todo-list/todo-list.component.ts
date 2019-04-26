import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  contents;

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.contents = this.todoService.todos;
  }

  delete(i: number): void {
    this.todoService.delete(i);
  }

}
