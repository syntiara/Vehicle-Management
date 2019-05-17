import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";
import { map } from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class VehicleService {
  private endpointM: string  = 'http://localhost:5676/api/make'
  private endpointF: string  = 'http://localhost:5676/api/feature'
  private endpointVD: string  = 'http://localhost:5676/api/vehicle-details'


  constructor(private _http: HttpClient) { }

  getMakes() {
    return this._http.get(`${this.endpointM}`)
      .pipe(map(res => res));
  }

  getFeatures() {
    return this._http.get(`${this.endpointF}`)
      .pipe(map(res => res));
  }

  createVehicleDetails(model) {
    return this._http.post(`${this.endpointVD}`, model)
      .pipe(map(res => res));
  }
}
