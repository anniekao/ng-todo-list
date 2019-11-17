import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-button-unit',
  template: `
    <input #inputElementRef
           [value]="title" 
           (keyup.enter)="submitValue(inputElementRef.value)"
           class="todo-input" >

    <button class="btn" (click)="submitValue(inputElementRef.value)">
      Save
    </button>
  `,
  styleUrls: ['./input-button-unit.component.css']
})
export class InputButtonUnitComponent implements OnInit {
  @Output() submit: EventEmitter<string> = new EventEmitter();

  title = "To-do's right here!";

  constructor() {}

  ngOnInit() {}

  submitValue(newTitle: string) {
    this.submit.emit(newTitle);
  }

}
