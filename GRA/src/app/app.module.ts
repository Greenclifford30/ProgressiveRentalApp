import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './material/material.module'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PostsComponent } from './posts/posts.component';
import { PropertiesComponent } from './properties/properties.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireModule } from 'angularfire2';
import { AuthService } from './services/auth.service';
import { RouterModule } from '@angular/router';
import {AngularFireDatabaseModule} from 'angularfire2/database'


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PostsComponent,
    PropertiesComponent,
    ToolbarComponent,
    DashboardComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebase, 'angular-auth-firebase')
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
