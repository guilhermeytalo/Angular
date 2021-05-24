import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  actualValue: string = '';
  valueSaved: string = '';

  isMouseOver: boolean = false;

  name: string = 'abc';

  person: any = {
    name: 'def',
    age: 24,
  };

  constructor() {
  }

  ngOnInit(): void {
  }

  event(): any {
    alert('Button');
  }

  onKeyUp(e: KeyboardEvent): any {
    this.actualValue = (e.target as HTMLInputElement).value;
    console.log(this.actualValue);
  }

  saveValue(value): any {
    this.valueSaved = value;
    console.log(this.valueSaved);
  }

  onMouseOverOut(): any {
    this.isMouseOver = !this.isMouseOver;
    console.log(this.isMouseOver);
  }
}
