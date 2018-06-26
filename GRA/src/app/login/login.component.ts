import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Observable } from 'rxjs'
import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: Observable<firebase.User>;
  userDetails: firebase.User = null;

  constructor(private afauth: AngularFireAuth, private router: Router, private authService: AuthService) { 
    this.user = afauth.authState;

    this.user.subscribe(
      (user) => {
        if (user) {
          this.userDetails = user;
          //console.log(this.userDetails.displayName);
          //console.log(this.user);
        }
        else {
          this.userDetails = null;
        }
      }
    );
  }

  ngOnInit() {
  }

  login(){
    this.authService.signInWithGoogle();
  }

  logout() {
    console.log("logout");
    this.authService.logout();
  }
}
