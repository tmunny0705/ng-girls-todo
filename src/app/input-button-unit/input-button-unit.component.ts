import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-button-unit',
  template: `
    <p>
      input-button-unit works!
      The title is {{ title }}
    </p>

    <input [value]="generateTitle()">
    <button>Save</button>
    `,
  styleUrls: ['./input-button-unit.component.css']
})

//I am learning about building classes with Angular
export class InputButtonUnitComponent implements OnInit {
  title = 'Pizza Shop de Tanja';
  constructor() {
    this.changeTitle('My First Angular App');
  }

  ngOnInit(): void {
  setTimeout(() => {
    this.title = 'This is not the title you are looking for';
  }, 3000);
}

  changeTitle(newTitle: string) {
    this.title = newTitle;
  }

  generateTitle(): string {
    return 'This title was generated by a method.';

  }

}
