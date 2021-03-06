import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';

import { SistemaComponent } from './sistema/sistema.component';
import { AuthGuard } from './core/auth.guard';
import { DashComponent } from './sistema/pages/dash/dash.component';
import { UserCreateComponent } from './sistema/pages/user/user-create/user-create.component';





const appRoutes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'user-create', component: UserCreateComponent},
  { path: 'sistema', component: SistemaComponent, canActivate: [AuthGuard]},
	{ path: '**', component: SistemaComponent},
];
;

@NgModule({
	imports: [
    RouterModule.forRoot(appRoutes),
  ],
  exports:[RouterModule],
  providers:[
  ]
})

export class AppRoutingModule {

}