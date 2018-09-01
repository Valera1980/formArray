import { NgModule } from '@angular/core';

/**ROUTING */
import { RouterModule, Routes } from '@angular/router';
import { DropDownListComponent } from '../drop-down-list/drop-down-list.component';
import { ParentlistComponent } from '../parentlist/parentlist.component';
import { IntreceptorComponent } from '../intreceptor/intreceptor.component';
import { ParentComponent } from '../parent/parent.component';
import { RouterParamsComponent } from '../router-params/router-params.component';

const appRoutes: Routes = [
   {path:'',redirectTo: 'ddl',pathMatch:'full'},
   {path:'ddl',component: DropDownListComponent},
   {path:'forms',component: ParentlistComponent},
   {path:'interceptor',component: IntreceptorComponent},
   {path:'parentchild',component: ParentComponent},
   {path:'city/:code/:id',component: RouterParamsComponent },
  //  {path:'**',redirectTo: 'ddl',pathMatch:'full'},

];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [],
  exports:[RouterModule]
})
export class RoutesModuleModule { }
