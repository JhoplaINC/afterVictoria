import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { properties } from 'src/properties/properties';
import { Observable } from 'rxjs';
import { iApiResponse } from '../interfaces/apiResponse.interface';

@Injectable({
  providedIn: 'root'
})
export class StatusService {

  private readonly base_url: string;

  constructor(private http: HttpClient) {
    this.base_url = properties.API.BASE
  }

  getStatus(): Observable<iApiResponse | any>{
    return this.http.request('GET', this.base_url + properties.API.ENDPOINTS.STATUS);
  }
}
