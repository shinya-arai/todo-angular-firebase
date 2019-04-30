import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import { Todo } from '../class/todo';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  todos;

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.todoService.readTodos();

    this.todos = this.todoService.todos;
  }

  deleteTodo(todo: Todo): void {
    this.todoService.deleteTodo(todo);
  }

  changeState(id: string, content: string, state: boolean): void {
    this.todoService.changeState(id, content, state);
  }

}
