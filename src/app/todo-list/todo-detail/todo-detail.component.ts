import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../todo.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Todo } from '../../class/todo';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.scss']
})
export class TodoDetailComponent implements OnInit {
  content;

  constructor(
    private todoService: TodoService,
    private route: ActivatedRoute,
    private location: Location,
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.todoService.getTodo(params.id).subscribe((todo: Todo) => {
        this.content = todo.content;
      });
    });
  }

  saveAndBack(): void {
    this.route.params.subscribe((params: Params) => {
      this.todoService.update(params.id, this.content);
    });
    this.location.back();
  }

}
