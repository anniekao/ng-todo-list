import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-button-unit',
  template: `
    <p>
      Here goes the {{ title }}
    </p>
    <input #inputElementRef
           [value]="title" 
           (keyup.enter)="submitValue(inputElementRef.value)">

    <button (click)="submitValue(inputElementRef.value)">
      Save
    </button>
  `,
  styleUrls: ['./input-button-unit.component.css']
})
export class InputButtonUnitComponent implements OnInit {
  @Output() submit: EventEmitter<string> = new EventEmitter();

  title = 'Hello World';

  constructor() {}

  ngOnInit() {}

  submitValue(newTitle: string) {
    this.submit.emit(newTitle);
  }

}
