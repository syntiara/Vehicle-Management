import { Component, OnInit } from '@angular/core';
import { VehicleService } from '../service/vehicle.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Vehicle } from '../model/vehicle';

@Component({
  selector: 'app-view-vehicle',
  templateUrl: './view-vehicle.component.html',
  styleUrls: ['./view-vehicle.component.css']
})
export class ViewVehicleComponent implements OnInit {
  vehicleInfo: any;
  vehicleId: number;


  constructor(private _vehicleService: VehicleService, private _route: ActivatedRoute, private _router: Router) {
    
    _route.params.subscribe(p =>{
      this.vehicleId = +p['id'] // the plus sign converts it to a number
      if(isNaN(this.vehicleId) || this.vehicleId == 0){
        this._router.navigate(['/vehicles']);
        return;
      }
    })
   }
  ngOnInit() {
    this._vehicleService.getVehicleDetails(this.vehicleId).subscribe(val =>{
      this.vehicleInfo = val;
    });
  }

  
  delete(){
    //display a confirmation box
    if(confirm("Are you sure")){
     this._vehicleService.deleteVehicleDetails(this.vehicleInfo.id).subscribe(val => {
       console.log(val);
       //navigate to home page
       this._router.navigate(['/home'])
     })
    }
   }

}
