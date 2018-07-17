import { switchMap } from 'rxjs/operators';
import { User, Roles } from './../user';
import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable, BehaviorSubject, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userBehavior: BehaviorSubject<User> = new BehaviorSubject(null);
  //private user: Observable<firebase.User>;
  user$: Observable<User>;
  private userDetails: firebase.User = null;

  constructor(private afauth: AngularFireAuth, private afs: AngularFirestore, private router: Router) { 
      this.user$ = this.afauth.authState.pipe(
        switchMap(user => 
          {
            if(user)
            {
              console.log(user);
              return this.afs.doc<User>('users/${user.uid}').valueChanges();
            }
            else 
            {
              return of(null);
            }
          }));
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
    ).then((credential) =>{
      this.updateUser(credential.user);
    })
  }

  updateUser(user)
  {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc<User>('users/${user.uid}');
    const data: User = 
      {
        uid: user.uid,
        email: user.email,
        photoUrl: user.photoURL,
        roles: {reader: true}
      }
      return userRef.set(data, {merge: true});
  }

  canEdit(user): boolean
  {
    const allowed = ['admin', 'landlord']
    return this.checkAuth(user, allowed);
  }

  canView(user): boolean
  {
    const allowed = ['admin', 'landlord', 'tenant']
    return this.checkAuth(user, allowed);
  }
  
  private checkAuth(user: User, allowedRoles: string[]): boolean
  {
    if(!user) return false
    else
    {
      for(const role of allowedRoles)
      {
        if(user.roles[role])
        {
          return true;
        }
      }
    }

    return false;
  }
}