import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { TodoFormComponent } from './todo-form/todo-form.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoDetailComponent } from './todo-list/todo-detail/todo-detail.component';

const routes: Routes = [
  {
    path: '', component: TodoFormComponent,
  },
  {
    path: 'detail/:id', component: TodoDetailComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    TodoFormComponent,
    TodoListComponent,
    TodoDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
