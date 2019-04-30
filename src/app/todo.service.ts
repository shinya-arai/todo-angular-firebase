import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Todo } from './class/todo';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
 } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todosCollection: AngularFirestoreCollection<Todo>;
  private todoDocument: AngularFirestoreDocument<Todo>;
  todos: Observable<Todo[]>;
  todo: Observable<Todo>;

  constructor(private afs: AngularFirestore) {
    this.todosCollection = afs.collection<Todo>('todos');
  }

  readTodos(): void {
    this.todos = this.todosCollection.valueChanges();
  }

  addTodo(content: string): void {
    const id = this.afs.createId();
    const todo: Todo = {
      id,
      content,
      state: false,
    };

    this.todosCollection.doc(id).set(todo);
  }

  deleteTodo(todo: Todo): void {
    this.todosCollection.doc(todo.id).delete();
  }

  getTodo(id: string): Observable<Todo> {
    this.todoDocument = this.afs.doc<Todo>(`todos/${id}`);
    this.todo = this.todoDocument.valueChanges();

    return this.todo;
  }

  update(id: string, content: string): Observable<Todo[]> {
    const todo: Todo = {
      id,
      content,
      state: false
    };

    this.todosCollection.doc(id).update(todo);

    return this.todos;
  }

  changeState(id: string, content: string, state: boolean): void {
    const todo: Todo = {
      id,
      content,
      state: !state
    };

    this.todosCollection.doc(id).update(todo);
    }
}
