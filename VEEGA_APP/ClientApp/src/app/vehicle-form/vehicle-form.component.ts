import { Component, OnInit } from '@angular/core';
import { VehicleService } from '../service/vehicle.service';
import { isNullOrUndefined } from 'util';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl, EmailValidator } from "@angular/forms";

@Component({
  selector: 'app-vehicle-form',
  templateUrl: './vehicle-form.component.html',
  styleUrls: ['./vehicle-form.component.css']
})
export class VehicleFormComponent implements OnInit {
vehicleForm: FormGroup;
contact: FormArray;
feature: FormArray;
messg: string;
makes;
models;
features;

  constructor(private _vehicleService: VehicleService, private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.vehicleForm = this._formBuilder.group({
      modelId: ["", Validators.required],
      features: this._formBuilder.array([]),
      isRegistered: [""],
      contact: this._formBuilder.group({
        name: ['', Validators.required],
        email: ['', [Validators.required, Validators.pattern("[a-zA-Z0-9.-]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}")]],
        phone_number: ['', [Validators.required, Validators.pattern("^[0-9]*$")]]
      })
  });
    this._vehicleService.getMakes().subscribe(val => {
      this.makes = val;
    })

    this._vehicleService.getFeatures().subscribe(val => {
      this.features = val
    })

  }

  get modelId(){
    return this.vehicleForm.get("modelId")
  }
  get isRegistered(){
    return this.vehicleForm.get("isRegistered")
  } 
  get name(){
    return this.vehicleForm.get("contact.name")
  } 
  get email(){
    return this.vehicleForm.get("contact.email")
  }
  get phone_number(){
    return this.vehicleForm.get("contact.phone_number")
  }

   onCheckChanges(target){
    const formArray: FormArray = this.vehicleForm.controls.features as FormArray;
    //selected
    if(target.checked){
      //add a new control in the for array
      formArray.push(new FormControl(target.value));
    } 
    //unselected
    else{
      const index = formArray.controls.findIndex(x => x.value === target.value);
      formArray.removeAt(index);
    }
  }

  onMakeChange(val){
    const selectedMake = this.makes.find(x => x.id === parseInt(val)).models;
    this.models = !isNullOrUndefined(selectedMake) ? selectedMake : [];
  }

  onSubmit(){
    if(this.vehicleForm.invalid)
    return;
    
    let formValue = this.vehicleForm.value;
    console.log(formValue);
    this._vehicleService.createVehicleDetails(formValue).subscribe(val => {
      console.log(val);
    }, 
    err => {
      this.messg = "Unexpected error occured."
    });
  }

}
