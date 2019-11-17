import { Injectable } from '@angular/core';

import { TodoItem } from '../interfaces/todo-item';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {
  private   todoList: TodoItem[] = [
    { title: 'install NodeJS' },
    { title: 'install AngularCLI' },
    { title: 'create new app' },
    { title: 'server app' },
    { title: 'developer app' },
    { title: 'deploy app' } 
  ]

  constructor() { }

  getTodoList() {
    return this.todoList;
  }
}
