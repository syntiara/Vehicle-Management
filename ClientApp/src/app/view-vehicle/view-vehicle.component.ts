import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { VehicleService } from '../service/vehicle.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PhotoService } from '../service/photo.service';
import { Message } from '../model/base';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-view-vehicle',
  templateUrl: './view-vehicle.component.html',
  styleUrls: ['./view-vehicle.component.css']
})
export class ViewVehicleComponent implements OnInit {
  vehicleInfo: any;
  vehicleId: number;
  imageUrl: string;
  messg = new Message();
  photos = [];
  uploadResponse = { status: '', message: ''};
  @ViewChild('fileInput') fileInput: ElementRef;

  constructor(private _vehicleService: VehicleService, private _photoService: PhotoService, _route: ActivatedRoute, private _router: Router) {

    _route.params.subscribe(p => {
      this.vehicleId = +p['id'] // the plus sign converts it to a number
      if (isNaN(this.vehicleId) || this.vehicleId == 0) {
        this._router.navigate(['/vehicles']);
        return;
      }
    })
  }

  ngOnInit() {
    this._vehicleService.getVehicleDetails(this.vehicleId).subscribe(val => {
      this.vehicleInfo = val;
    });
    this.getPhotoList();
  }

  delete() {
    //display a confirmation box
    if (confirm("Are you sure")) {
      this._vehicleService.deleteVehicleDetails(this.vehicleInfo.id).subscribe(val => {
        console.log(val);
        //navigate to home page
        this._router.navigate(['/home'])
      })
    }
  }

  uploadPhoto() {
    let nativeElement: HTMLInputElement = this.fileInput.nativeElement
    if (nativeElement.files && nativeElement.files[0]) {
      let file = nativeElement.files[0];
      //to clear the input field value from the UI after selection
      nativeElement.value = '';
      this._photoService.upload(this.vehicleId, file).subscribe(
        (res) => {
                    this.uploadResponse = res;
                    this.getPhotoList();
                 },
        (err: HttpErrorResponse) => this.messg.error = err.error
      ); 
    }
  }

  getPhotoList(){
    this._photoService.getPhotoList(this.vehicleId).subscribe(val =>{
      // this.imageUrl = "../../";
      this.photos = val;
    })
  }

}
