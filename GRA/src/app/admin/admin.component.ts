import { Router } from '@angular/router';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireAuth } from 'angularfire2/auth';
import { Component, OnInit, ElementRef, ViewChild, NgZone } from '@angular/core';
import {FormBuilder, FormGroup, FormControl} from '@angular/forms';
import {AgmCoreModule, MapsAPILoader} from '@agm/core';
import {} from '@types/googlemaps';
import {observable, Observable} from 'rxjs';
import {s, st} from '@angular/core/src/render3';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  @ViewChild('search')
  public searchElementRef: ElementRef;

  autocomplete: google.maps.places.Autocomplete;
  searchResult: google.maps.places.PlaceResult;
  address: string;
  propertyForm: FormGroup;
  tenantForm: FormGroup;

  constructor(private afauth: AngularFireAuth, private afs: AngularFirestore,
              private router: Router, private fb: FormBuilder,
              private mapsAPILoader: MapsAPILoader, private ngZone: NgZone) {
  }

  ngOnInit() {

    this.mapsAPILoader.load().then(() => {
      this.autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {types: ['address']});
      this.autocomplete.addListener('place_changed', () => {
        this.ngZone.run(() => {
          const place: google.maps.places.PlaceResult = this.autocomplete.getPlace();
          const address: string = place.formatted_address;
          this.searchResult = place;
          this.address = address;
          console.log(place);

          this.propertyForm.controls['address'].setValue(place.name);
          if (!(place.geometry === undefined || place.geometry === null)) {
          } else {
            return;
          }
        });
      });
    });

    this.propertyForm = this.fb.group({
        address: new FormControl(''),
        rate: 0,
        sqFootage: 0,
        bedrooms: 0
    });


    this.tenantForm = this.fb.group({
      'firstName': '',
      'lastName': '',
      'dob': ''
    });


    (<FormControl>this.propertyForm.controls['address']).valueChanges.subscribe(val => {

    });
  }
}
