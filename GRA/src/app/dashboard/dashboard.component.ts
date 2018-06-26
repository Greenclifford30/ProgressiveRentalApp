import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  user: Observable<firebase.User>;
  userDetails: firebase.User = null;

  constructor(private afauth: AngularFireAuth, private router: Router, private authService: AuthService) 
  { 
    this.user = afauth.authState;

    this.user.subscribe(
      (user) => {
        if (user) {
          this.userDetails = user;
          console.log(afauth.authState);
          console.log(user);
          //console.log(this.userDetails.displayName);
          //console.log(this.user);
        }
        else {
          this.userDetails = null;
          console.log("Not Logged in")
        }
      }
    );
  }

  ngOnInit() {

  }

}
