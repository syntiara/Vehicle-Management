import { Injectable, } from '@angular/core';
import { HttpClient, HttpHeaders, HttpEventType } from '@angular/common/http';
import { map } from "rxjs/operators";
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  private readonly endpointVP: string = environment.detailsUrl


  constructor(private _http: HttpClient) { }

  upload(vehicleId, photo) {
    const formData = new FormData();
    formData.append("file", photo);
    return this._http.post<any>(`${this.endpointVP}/${vehicleId}/photos`, formData, {
      reportProgress: true,
      observe: 'events'
    })
      .pipe(map((event) => {
        switch (event.type) {
          //to show the progress
          case HttpEventType.UploadProgress:
            const progress = Math.round(100 * event.loaded / event.total);
            return { status: 'progress', message: progress };
          case HttpEventType.Response:
            return event.body;
          default:
            return `Unhandled event: ${event.type}`;
        }
      }));
  }

  getPhotoList(vehicleId) {
    return this._http.get(`${this.endpointVP}/${vehicleId}/photos`)
      .pipe(map((res: any) => res));
  }

}
