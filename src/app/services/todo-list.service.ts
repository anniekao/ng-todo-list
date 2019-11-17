import { Injectable } from '@angular/core';

import { TodoItem } from '../interfaces/todo-item';
import { StorageService } from '../services/storage.service';

const todoListStorageKey = 'Todo_List';

const defaultTodoList = [
  { title: 'install NodeJS' },
  { title: 'install AngularCLI' },
  { title: 'create new app' },
  { title: 'server app' },
  { title: 'developer app' },
  { title: 'deploy app' } 
];

@Injectable({
  providedIn: 'root'
})
export class TodoListService {
  todoList: TodoItem[];

  constructor(private storageService: StorageService) {
    this.todoList = storageService.getData(todoListStorageKey) || defaultTodoList;
  }

  addItem(item: TodoItem) {
    this.todoList.push(item);
    this.saveList();
  }

  updateItem(item: TodoItem, changes) {
    const index = this.todoList.indexOf(item);
    this.todoList[index] = { ...item, ...changes };
    this.saveList();
  }

  saveList() {
    this.storageService.setData(todoListStorageKey, this.todoList);
  }

  deleteItem(item: TodoItem) {
    const index = this.todoList.indexOf(item);
    this.todoList.splice(index, 1);
    this.saveList();
  }

  getTodoList() {
    return this.todoList;
  }
}
