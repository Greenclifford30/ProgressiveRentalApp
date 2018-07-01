import { Observable } from 'rxjs';
import { User } from './../user';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuthModule } from 'angularfire2/auth';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  user$: Observable<User>;

  constructor(private afauth: AngularFireAuthModule, private router: Router) { 
    
  }

  ngOnInit() {
    console.log("active");
  }

  admin()
  {
    console.log("routec");
    return this.router.navigate(['/admin']);
  }
}
