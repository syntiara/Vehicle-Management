import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { VehicleService } from '../service/vehicle.service';
import { isNullOrUndefined } from 'util';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl, EmailValidator } from "@angular/forms";
import { ActivatedRoute, Router } from '@angular/router';
import{forkJoin} from "rxjs";
import { Vehicle, SaveVehicle } from '../model/vehicle';

@Component({
  selector: 'app-vehicle-form',
  templateUrl: './vehicle-form.component.html',
  styleUrls: ['./vehicle-form.component.css']
})
export class VehicleFormComponent implements OnInit {
vehicleForm: FormGroup;
contact: FormArray;
feature: FormArray;
vehicle  = {} as Vehicle;
// {
//   id: 0,
//   model:{id: 0,name: ""},
//   make:{id: 0,name: ""},
//   feature:{id: 0,name: ""},
//   contact:{name: "", email: "", phoneNumber: ""},
//   IsRegisterd: false,
//   lastUpdate: ""
// };
messg: string;
messgSuccess: string;
makes;
models;
features;

  constructor(private _vehicleService: VehicleService, private _formBuilder: FormBuilder, private _route: ActivatedRoute, private _router: Router) {
    
    _route.params.subscribe(p =>{
      this.vehicle.id = +p['id'] // the plus sign converts it to a number
      console.log("vehicle id",this.vehicle.id )
    })
   }

  ngOnInit() {
    this.vehicleForm = this._formBuilder.group({
      makeId: [''],
      modelId: ['', Validators.required],
      features: this._formBuilder.array([]),
      isRegistered: [],
      contact: this._formBuilder.group({
        name: ['', Validators.required],
        email: ['', [Validators.required, Validators.pattern("[a-zA-Z0-9.-]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}")]],
        phone_number: ['', [Validators.required, Validators.pattern("^[0-9]*$")]]
      })
  });

  var sources = [
    this._vehicleService.getMakes(),
      this._vehicleService.getFeatures(),
  ]
  if(this.vehicle.id > 0)
  sources.push(this._vehicleService.getVehicleDetails(this.vehicle.id));

    //Sending parallel request
    forkJoin(sources).subscribe(data => {
      this.makes = data[0];
      this.features = data[1];
      //check is there is vehicle id, as the vehicle object is used for update
      if(this.vehicle.id > 0){
        this.vehicle = data[2];
        this.setVehicle(this.vehicle);
        this.populateModel(this.vehicle.makes.id);
      }
    },
    err => {
        if(err.status == 404)
        this._router.navigate(['/home']);
      });
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

  private setVehicle(v: Vehicle){
    const formArray: FormArray = this.vehicleForm.controls.features as FormArray;

    this.vehicleForm.patchValue({
      makeId: v.makes.id,
      modelId:v.models.id,
      isRegistered: v.isRegistered,
      contact: 
        {
          name: v.contact.name,
          email: v.contact.email,
          phone_number: v.contact.phone_number
        }
    });
    this.vehicle.features.forEach(val => {
      formArray.push(new FormControl((val.id)));
    });
    console.log("patchded", this.vehicleForm.value);
  }
  
  private populateModel(val){
    const selectedMake = this.makes.find(x => x.id === parseInt(val)).models;
    this.models = !isNullOrUndefined(selectedMake) ? selectedMake : [];
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
    this.populateModel(val);
  }

  onSubmit(){
    this.scrollToTop();
    if(this.vehicleForm.invalid)
    return;
    let formValue = this.vehicleForm.value;
    delete formValue["makeId"]; //not part of the model;
    console.log("update", formValue);
    this.vehicleForm.reset();
    if(this.vehicle.id){
      this._vehicleService.updateVehicleDetails(this.vehicle.id, formValue).subscribe(val => {
        if(val instanceof SaveVehicle)
        this.setVehicle(this.vehicle);

        this.messgSuccess = "Successfully updated record"
        this._router.navigate(['/vehicles/',this.vehicle.id]);
      }, 
      err => {
        this.messg = "Unexpected error occured."
      });
    }
  else{
    this._vehicleService.createVehicleDetails(formValue).subscribe(val => {
      this._router.navigate(['/vehicles/',val.id]);
    }, 
    err => {
      this.messg = "Unexpected error occured."
    });
  }
  }

  scrollToTop(){
    window.scroll(0,0);
  }
}
