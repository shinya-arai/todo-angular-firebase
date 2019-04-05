import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {
  public todo: string;

  constructor(private todoService: TodoService) { }

  ngOnInit() {
  }

  console(): void {
    console.log('hello');
  }

}
