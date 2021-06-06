import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
  // one line example
  /*  styles: [
      `
        .highLight {
          background-color: rebeccapurple;
          font-weight: bold;
        }
      `
    ]*/
})

export class DataBindingComponent implements OnInit {

  url: string = 'https://google.com';
  angularCourse: boolean = true;
  urlImage: string = 'https://images.pexels.com/photos/1376201/pexels-photo-1376201.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940';

  courseName: string = 'Angular';

  initialValue: number = 15;


  constructor() {

  }

  ngOnInit(): void {
  }

  getValue() {
    return 1;
  }

  getCourseLike() {
    return true;
  }


  onChangeValue(event) {
    console.log(event.newValue);
  }


}
