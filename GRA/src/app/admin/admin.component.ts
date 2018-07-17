import { Router } from '@angular/router';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireAuth } from 'angularfire2/auth';
import { Component, OnInit, ElementRef, ViewChild, NgZone } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms'
import { AgmCoreModule, MapsAPILoader } from '@agm/core'
import {} from 'googlemaps'


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  @ViewChild("search")
  public searchElementRef: ElementRef;

  autocomplete: google.maps.places.Autocomplete;
  propertyForm: FormGroup;
  tenantForm: FormGroup;

  constructor(private afauth: AngularFireAuth, private afs: AngularFirestore, private router: Router, private fb: FormBuilder, private mapsAPILoader: MapsAPILoader, private ngZone: NgZone) { }

  ngOnInit() {
    
    this.mapsAPILoader.load().then(() => {
       this.autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {types: ["address"]});
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

    //this.autocomplete.addListener("");
    (<FormControl>this.propertyForm.controls['address']).valueChanges.subscribe(val => {
      //console.log(this.propertyForm.controls['address'].value);
      console.log(this.autocomplete);
      //this.propertyForm.controls['address'].updateValueAndValidity({onlySelf: true});
      //this.propertyForm.controls['address'].setValue(this.autocomplete.getPlace().name);
    });
  }

  addressChange()
  {
    console.log("event");
  }
}
