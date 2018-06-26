import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private user: Observable<firebase.User>;
  private userDetails: firebase.User = null;

  constructor(private afauth: AngularFireAuth, private router: Router) { 
      this.user = afauth.authState;

      this.user.subscribe(
        (user) => {
          if (user) 
          {
            this.userDetails = user;
            //console.log(this.user);
          }
          else{
            this.userDetails = null;
          }
        }
      );
  }

  isLoggedIn()
  {
    if (this.userDetails == null ) {
      return false;
    } else {
      return true;
    }
  }

  logout() {
    console.log("logout attempt");
    this.afauth.auth.signOut()
    .then((res) => this.router.navigate(['/']));
  }
  
  signInWithGoogle() {
    return this.afauth.auth.signInWithPopup(
      new firebase.auth.GoogleAuthProvider()
    )
  }
}
