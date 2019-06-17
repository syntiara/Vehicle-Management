import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";
import { map } from "rxjs/operators";
import { SaveVehicle, Vehicle, QueryResult } from '../model/vehicle';
import { isNullOrUndefined } from 'util';


@Injectable({
  providedIn: 'root'
})
export class VehicleService {
  private endpointM: string  = 'http://localhost:5676/api/make'
  private endpointF: string  = 'http://localhost:5676/api/feature'
  private endpointVD: string  = 'http://localhost:5676/api/vehicle-details'


  constructor(private _http: HttpClient) { }

  getMakes() {
    return this._http.get<any>(`${this.endpointM}`)
      .pipe(map(res => res));
  }

  getFeatures() {
    return this._http.get<any>(`${this.endpointF}`)
      .pipe(map(res => res));
  }

  createVehicleDetails(model) {
    return this._http.post<Vehicle>(`${this.endpointVD}`, model)
      .pipe(map((res:Vehicle) => res));
  }

  getVehicleDetails(id) {
    return this._http.get(`${this.endpointVD}/${id}`)
      .pipe(map(res  => res));
  }

  updateVehicleDetails(id, model: SaveVehicle) {
    return this._http.put<Vehicle>(`${this.endpointVD}/${id}`, model)
      .pipe(map((res: Vehicle) => res));
  }

  deleteVehicleDetails(id) {
    return this._http.delete(`${this.endpointVD}/${id}`)
      .pipe(map(res => res));
  }

  getVehicleDetailsList(obj) {
    return this._http.get<QueryResult>(`${this.endpointVD}?${this.toQueryString(obj)}`)
      .pipe(map((res: QueryResult) => res));
  }

  //to form multiple query string, joined by &
  private toQueryString(obj){
    const parts = [];
      for(let prop in obj){
       const val = obj[prop];
      if(!isNullOrUndefined(val)){
        parts.push(`${encodeURIComponent(prop)}=${encodeURIComponent(val)}`)
      }
  }
  return parts.join('&');
}
}
