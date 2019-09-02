import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";
import { map } from "rxjs/operators";
import { SaveVehicle, Vehicle, QueryResult } from '../model/vehicle';
import { isNullOrUndefined } from 'util';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class VehicleService {
  private readonly endpointM: string  = environment.makeUrl
  private readonly endpointF: string  = environment.featureUrl
  private readonly endpointVD: string = environment.detailsUrl



  constructor(private _http: HttpClient) { }

  getMakes() {
    console.log("make", this.endpointM);
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
