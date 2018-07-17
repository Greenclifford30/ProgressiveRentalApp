import { AuthService } from './../services/auth.service';
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

  user: User;

  constructor(private auth: AuthService, private router: Router) { 
    this.auth.user$.subscribe(user => this.user = user);
  }

  ngOnInit() {
    
  }

  admin()
  {
    return this.router.navigate(['/admin']);
  }

  home()
  {
    return this.router.navigate(['']);
  }
}
