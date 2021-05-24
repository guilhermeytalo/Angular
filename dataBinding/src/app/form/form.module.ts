import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormComponent} from './form.component';
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    FormComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [FormComponent]
})
export class FormModule {
}
