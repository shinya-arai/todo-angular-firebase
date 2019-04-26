import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../todo.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.scss']
})
export class TodoDetailComponent implements OnInit {
  content: string;

  constructor(
    private todoService: TodoService,
    private router: Router,
    private route: ActivatedRoute,
    ) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.todoService.get(params.id).subscribe((content: string) => {
        this.content = content;
      });
    });
  }

  saveAndBack(event: Event): void {
    this.router.navigate(['/']);
    console.log(event);
  }

}
