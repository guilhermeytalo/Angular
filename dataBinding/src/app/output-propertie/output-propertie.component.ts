import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild
} from '@angular/core';

@Component({
  selector: 'app-output-propertie',
  templateUrl: './output-propertie.component.html',
  styleUrls: ['./output-propertie.component.css']
})
export class OutputPropertieComponent implements OnInit {
  @Input() value: number = 0;

  @Output() changedValue = new EventEmitter;

  @ViewChild('inputField') inputFieldValue: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

increment() {
  console.log(this.inputFieldValue.nativeElement.value);
  this.inputFieldValue.nativeElement.value++;
  // this.value++;
  this.changedValue.emit({newValue: this.value});
}
decrement() {
  this.inputFieldValue.nativeElement.value--;
  // this.value--;
  this.changedValue.emit({newValue: this.value});
}

}
