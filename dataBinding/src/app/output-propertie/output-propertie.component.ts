import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-output-propertie',
  templateUrl: './output-propertie.component.html',
  styleUrls: ['./output-propertie.component.css']
})
export class OutputPropertieComponent implements OnInit {
  @Input() value: number = 0;

  @Output() changedValue = new EventEmitter;

  constructor() { }

  ngOnInit(): void {
  }

increment() {
  this.value++;
  this.changedValue.emit({newValue: this.value});
}
decrement() {
  this.value--;
  this.changedValue.emit({newValue: this.value});
}

}
