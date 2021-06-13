import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnDestroy,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-life-cicle',
  templateUrl: './life-cicle.component.html',
  styleUrls: ['./life-cicle.component.css'],
})
export class LifeCicleComponent implements OnChanges, OnInit,
DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit,
AfterViewChecked, OnDestroy {

  @Input() initialValue: number = 10;

  constructor() {
    this.log('constructor');
  }

  ngOnChanges() {
    this.log('ngOnChanges');
  }

  ngOnInit(): void {
    this.log('ngOnInit');
  }

  ngDoCheck() {
    this.log('ngDoCheck');
  }

  ngAfterContentInit()	{
    this.log('ngAfterContentInit');
  }

  ngAfterContentChecked()	{
    this.log('ngAfterContentChecked');
  }

  ngAfterViewInit()	{
    this.log('ngAfterViewInit');
  }

  ngAfterViewChecked() {
    this.log('ngAfterViewChecked');
  }

  ngOnDestroy()	{
    this.log('ngOnDestroy');
  }



  private log(hook: string) {
    console.log(hook);
  }
}
