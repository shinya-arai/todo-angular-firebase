import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import { Todo } from '../class/todo';


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  contents: Todo[];

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.todoService.showList().subscribe((contents: Todo[]) => {
      this.contents = contents;
    });
  }

  delete(i: number): void {
    this.todoService.delete(i);
  }

}
