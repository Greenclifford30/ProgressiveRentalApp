import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public test: any;

    public constructor(private http: HttpClient, private router: Router, private location: Location) {
        this.test = [];
    }

    public ngOnInit() {
      this.location.subscribe(() => {
          this.refresh();
      });
      this.refresh();
  }

  private refresh() {
      this.http.get("http://localhost:8080/list").subscribe
          (result => {
              this.test = result;
          });
  }

  public search(event: any) {
    let url = "http://localhost:8000";
    if(event.target.value) {
        url = "http://localhost:8000/search/" + event.target.value;
    }
    this.http.get(url)
        .subscribe(result => {
            this.test = result;
        });
    }
}
