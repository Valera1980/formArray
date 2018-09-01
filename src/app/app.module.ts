import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CitiesInterceptorService } from './intreceptor/cities-interceptor.service'; 
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
import { ParentlistComponent } from './parentlist/parentlist.component';
import { ChildlistComponent } from './childlist/childlist.component';
import { IntreceptorComponent } from './intreceptor/intreceptor.component';
import { RouterParentComponent } from './router-parent/router-parent.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RoutesModuleModule } from './routes-module/routes-module.module';
import { RouterParamsComponent } from './router-params/router-params.component';



@NgModule({
  declarations: [
    AppComponent,
    DropDownListComponent,
    ParentComponent,
    ChildComponent,
    ReactFormOneComponent,
    ParentlistComponent,
    ChildlistComponent,
    IntreceptorComponent,
    RouterParentComponent,
    NavbarComponent,
    RouterParamsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DropdownModule,
    ButtonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RoutesModuleModule   
  ],
  entryComponents:[ChildlistComponent],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CitiesInterceptorService,
      multi:true
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
