import { Injectable, } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from "rxjs/operators";
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  private readonly endpointVP: string  = environment.detailsUrl


  constructor(private _http: HttpClient) { }

  upload(vehicleId, photo){
    const formData = new FormData();
    formData.append("file", photo);
   return this._http.post<any>(`${this.endpointVP}/${vehicleId}/photos`, formData)
    .pipe(map((res: any) => res));
  }

  getPhotoList(vehicleId){
    return this._http.get(`${this.endpointVP}/${vehicleId}/photos`)
    .pipe(map((res: any) => res));
  }
}
