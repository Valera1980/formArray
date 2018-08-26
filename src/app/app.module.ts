import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
/**
 * PRIMENG
 */
import { DropdownModule } from 'primeng/dropdown';
import { DropDownListComponent } from './drop-down-list/drop-down-list.component';
import { ButtonModule} from 'primeng/button';


import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { ReactFormOneComponent } from './react-form-one/react-form-one.component';



@NgModule({
  declarations: [
    AppComponent,
    DropDownListComponent,
    ParentComponent,
    ChildComponent,
    ReactFormOneComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DropdownModule,
    ButtonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  // schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
