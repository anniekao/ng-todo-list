import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TodoItem } from '../interfaces/todo-item';

@Component({
  selector: 'app-todo-item',
  template: `
    <div class="todo-item">
      <input 
        type="checkbox" 
        class="todo-checkbox"
        (click)="completeItem()"
      />
      <span class="todo-title" [ngClass]="{'todo-complete': item.completed}">
        {{ item.title }}
      </span>
      <button 
        class="btn btn-red" 
        (click)="removeItem()"
      >
        Remove
      </button>
    </div>
  `,
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Output() remove: EventEmitter<TodoItem> = new EventEmitter();
  @Output() update: EventEmitter<any> = new EventEmitter();

  @Input() item:TodoItem;

  constructor() { }

  ngOnInit() {
  }

  removeItem() {
    this.remove.emit(this.item);
  }

  completeItem() {
    this.update.emit({
      item: this.item,
      changes: { completed: !this.item.completed }
    })
  }
}
