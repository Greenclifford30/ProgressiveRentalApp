import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  user: Observable<firebase.User>;
  userDetails: firebase.User = null;
  itemsRef: AngularFireList<any>;
  items: Observable<any[]>;

  constructor(db: AngularFireDatabase, private afauth: AngularFireAuth, private router: Router, private authService: AuthService) 
  { 
    this.user = afauth.authState;
    this.itemsRef = db.list('users');
    this.items = db.list('users').valueChanges();

        // Use snapshotChanges().map() to store the key
        this.items = this.itemsRef.snapshotChanges().pipe( 
          map(changes => 
            changes.map(c => ({key: c.payload.key, ...c.payload.val})))
        );
      
    this.user.subscribe(
      (user) => {
        if (user) {
          this.userDetails = user;
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
