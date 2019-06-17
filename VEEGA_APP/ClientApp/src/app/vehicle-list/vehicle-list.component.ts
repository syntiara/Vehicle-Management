import { Component, OnInit } from '@angular/core';
import { VehicleService } from '../service/vehicle.service';
import { Vehicle, Base, VehicleQuery } from '../model/vehicle';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.css']
})
export class VehicleListComponent implements OnInit {
  private readonly _PageSize = 3;
  vehicles: Vehicle[];
  allVehicles: Vehicle[];
  totalItems: number;
  makes: Base[];
  queryObj = new VehicleQuery(this._PageSize);
  

  constructor(private _vehicleService: VehicleService) { }

  ngOnInit() {
    this.getMakes();
    this.populateVehicles(this.queryObj);
  }

  private populateVehicles(queryObj){
    this._vehicleService.getVehicleDetailsList(queryObj).subscribe(val =>{
      this.allVehicles = this.vehicles = val.items;
      this.totalItems = val.totalItems;
    })
  }

  getMakes(){
  this._vehicleService.getMakes().subscribe(val =>{
    this.makes = val;
  })
}

//for filtering
onFilterChange(id){
  //server side filtering
  this.queryObj.makeId = id;
  //this ensures that filetering of data starts at 0 index in the middleware
  this.queryObj.page = 1;
  this.populateVehicles(this.queryObj);

  //commented code works for client side filtering
//  if(id){
//   const vehicles = this.allVehicles;
//   this.vehicles = vehicles.filter(v => v.makes.id == id);
//  }
//  else{
//    this.vehicles = this.allVehicles;
//  }
}

sortBy(columnName){
  console.log(this.queryObj)
if(this.queryObj.sortString === columnName){
  this.queryObj.isAscending = !this.queryObj.isAscending;
}
else{
  this.queryObj.sortString = columnName;
  this.queryObj.isAscending = false;
}
this.populateVehicles(this.queryObj);
}

onPageChanged(page){
this.queryObj.page = page;
this.populateVehicles(this.queryObj);
}

}
