import { Component } from '@angular/core';
import { PrefixNot } from '@angular/compiler';
import { ITS_JUST_ANGULAR } from '@angular/core/src/r3_symbols';

@Component({
  selector: 'app-root',
  template: `
    <h1>
      Welcome to {{title}}!
    </h1>

    <app-input-button-unit></app-input-button-unit>
  `,

  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-list';
}

