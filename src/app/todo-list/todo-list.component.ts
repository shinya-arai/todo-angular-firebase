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
  // todos: Todo[];
  todos: Observable<any[]>;

  constructor(
    private todoService: TodoService,
    private db: AngularFirestore,
  ) {
    this.todos = db.collection('todos').valueChanges();
  }

  ngOnInit() {
    // this.todoService.showList().subscribe((todos: Todo[]) => {
    //   this.todos = todos;
    // });
  }

  delete(i: number): void {
    this.todoService.delete(i);
    console.log(this.todoService.todos);
  }

  changeState(i: number): void {
    this.todoService.changeState(i);
  }

}
