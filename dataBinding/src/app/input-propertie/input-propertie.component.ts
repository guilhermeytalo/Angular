import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-propertie',
  templateUrl: './input-propertie.component.html',
  styleUrls: ['./input-propertie.component.css']
})
export class InputPropertieComponent implements OnInit {
  @Input() name: string ='';

  constructor() { }

  ngOnInit(): void {
  }

}
