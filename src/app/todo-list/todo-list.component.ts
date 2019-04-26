import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  contents: string[];

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.todoService.list().subscribe((contents: string[]) => {
      this.contents = contents;
    });
  }

  delete(i: number): void {
    this.todoService.delete(i);
  }

}
