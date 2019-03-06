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
import { SelectButtonModule } from 'primeng/selectbutton';
import {InputTextModule} from 'primeng/inputtext';
import {CalendarModule} from 'primeng/calendar';
import {InplaceModule} from 'primeng/inplace';




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
import { AuthComponent } from './auth/auth.component';
import { Page404Component } from './page404/page404.component';
import { ReactFormComponent } from './react-form/react-form.component';
import { LeadComponent } from './lead/lead.component';
import { TaskComponent } from './task/task.component';
import { ThrowErrorComponent } from './throw-error/throw-error.component';
import { DecorComponent } from './decor/decor.component';
import { ParentasyncComponent } from './parentasync/parentasync.component';
import { ChildasyncComponent } from './childasync/childasync.component';
import { InplaceComponent } from './inplace/inplace.component';
import { CardModule} from 'primeng/card';
import { ProgressComponent } from './progress/progress.component';
import {ProgressBarModule} from 'primeng/progressbar';
import { DroppipeComponent } from './droppipe/droppipe.component';
import { ComboPipe } from './combo.pipe';
import { ServiceAsyncComponent } from './service-async/service-async.component';
import { MutateDirective } from './mutate.directive';
import { PhoneInputComponent } from './phone-input/phone-input.component';
import { FormoneComponent } from './formone/formone.component';




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
    RouterParamsComponent,
    AuthComponent,
    Page404Component,
    ReactFormComponent,
    LeadComponent,
    TaskComponent,
    ThrowErrorComponent,
    DecorComponent,
    ParentasyncComponent,
    ChildasyncComponent,
    InplaceComponent,
    ProgressComponent,
    DroppipeComponent,
    ComboPipe,
    ServiceAsyncComponent,
    MutateDirective,
    PhoneInputComponent,
    FormoneComponent
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DropdownModule,
    ButtonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RoutesModuleModule,
    SelectButtonModule,
    InputTextModule,
    CalendarModule ,
    InplaceModule,
    CardModule,
    ProgressBarModule   
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
