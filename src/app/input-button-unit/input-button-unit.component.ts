import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-button-unit',
  template: `
    <p>
      Here goes the {{ title }}
    </p>
    <input #inputElementRef
           [value]="title" 
           (keyup.enter)="changeTitle(inputElementRef.value)">

    <button (click)="changeTitle(inputElementRef.value)">
      Save
    </button>
  `,
  styleUrls: ['./input-button-unit.component.css']
})
export class InputButtonUnitComponent implements OnInit {
  title = 'Hello World';

  constructor() {}

  ngOnInit() {}

  // changeTitle(newTitle: string) {
  //   this.title = newTitle;
  // }

  changeTitle(value) {
    console.log(value);
    this.title = value;
  }
}
