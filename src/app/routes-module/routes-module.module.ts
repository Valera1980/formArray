import { NgModule } from '@angular/core';

/**ROUTING */
import { RouterModule, Routes } from '@angular/router';
import { DropDownListComponent } from '../drop-down-list/drop-down-list.component';
import { ParentlistComponent } from '../parentlist/parentlist.component';
import { IntreceptorComponent } from '../intreceptor/intreceptor.component';
import { ParentComponent } from '../parent/parent.component';
import { RouterParamsComponent } from '../router-params/router-params.component';
import { AuthComponent } from '../auth/auth.component';
import { AuthGuard } from '../guards/auth.guard';
import { Page404Component } from '../page404/page404.component';
import { DdlGuard } from '../guards/ddl.guard';

const appRoutes: Routes = [
   {path:'',redirectTo: 'ddl',pathMatch:'full',canActivate:[DdlGuard]},
   {path:'auth',component:AuthComponent,canActivate:[AuthGuard]},
   {path:'ddl',component: DropDownListComponent,canActivate:[DdlGuard]},
   {path:'forms',component: ParentlistComponent},
   {path:'interceptor',component: IntreceptorComponent},
   {path:'parentchild',component: ParentComponent},
   {path:'city/:code/:id',component: RouterParamsComponent },
   {path:'page404',component:Page404Component},
   {path:'**',redirectTo: 'page404',pathMatch:'full'},

];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [],
  exports:[RouterModule]
})
export class RoutesModuleModule { }
