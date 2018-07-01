import { CanViewGuard } from './services/can-view.guard';
import { AdminComponent } from './admin/admin.component';
import { AdminGuard } from './services/admin.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import {PropertiesComponent} from './properties/properties.component'
import {LoginComponent} from './login/login.component';
import {UsersComponent} from './users/users.component'
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AdminGuard]
  },
  {
    path: 'user/:id',
    component: UsersComponent,
    canActivate: [CanViewGuard]
  },
  {
    path: 'properties',
    component: PropertiesComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }