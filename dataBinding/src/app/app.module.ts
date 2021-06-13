import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {DataBindingComponent} from './data-binding/data-binding.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';

import {FormModule} from './form/form.module';
import { InputPropertieComponent } from './input-propertie/input-propertie.component';
import { OutputPropertieComponent } from './output-propertie/output-propertie.component';
import { LifeCicleComponent } from './life-cicle/life-cicle.component';

@NgModule({
  declarations: [
    AppComponent,
    DataBindingComponent,
    InputPropertieComponent,
    OutputPropertieComponent,
    LifeCicleComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    FormModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
