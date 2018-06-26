import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
    path: 'user/:id',
    component: UsersComponent
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
