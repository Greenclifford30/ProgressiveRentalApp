import { Router } from '@angular/router';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireAuth } from 'angularfire2/auth';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators, FormControl } from '@angular/forms'

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  lat: number;
  lng: number;

  myForm: FormGroup;
  properties: FormGroup;
  constructor(private fb: FormBuilder, private afauth: AngularFireAuth, private afs: AngularFirestore, private router: Router) { }

  ngOnInit() {
    this.getUserLocation()

    this.myForm = this.fb.group({
      properties: this.fb.array([])
    })
 
    //this.myForm.valueChanges.subscribe(console.log);
  }

  private getUserLocation()
  {
    
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(
        position => {
        this.lat= position.coords.latitude;
        this.lng = position.coords.longitude;
        },
        error => {
          console.log(error.message);
        }
    )
    }
  }
  propertyForms(){
    return this.myForm.get('properties') as FormArray;
  }

  addProperty()
  {
    const property = this.fb.group(
      {
        address: ['', [
          Validators.required,
          Validators.nullValidator
        ]],
        rate: ['',[
          Validators.min(0)
        ]],
        tenant: ['', [
          Validators.maxLength(25)
        ]]
      })

      this.propertyForms().push(property);
      console.log(this.propertyForms().controls[0].get('address'));
  }

  getAddress(i)
  {
    return this.propertyForms().controls[i].get('address');
  }

  removeProperty(i)
  {
    this.propertyForms().removeAt(i);
  }



}
