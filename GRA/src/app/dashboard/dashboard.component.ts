import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';
//import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AuthService } from '../services/auth.service';
import {Observable} from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  users: Observable<any[]>;

  constructor(db: AngularFirestore, private afauth: AngularFireAuth, private router: Router, private authService: AuthService) {

    this.users = db.collection('/users').valueChanges();

    // Use snapshotChanges().map() to store the key
  }

  ngOnInit() {
    this.users.subscribe(test => console.log('wow test'));
  }
}
