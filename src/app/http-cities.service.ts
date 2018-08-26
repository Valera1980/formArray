import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CityModel } from './drop-down-list/citymodel';

@Injectable({
  providedIn: 'root'
})
export class HttpCitiesService {

  READ_URL:string = 'http://localhost:3000/cities';
  constructor(
    private httpClient: HttpClient
  ) { }
  getCities():Observable<CityModel[]>{
    return this.httpClient.get<CityModel[]>(this.READ_URL);
  }
}
