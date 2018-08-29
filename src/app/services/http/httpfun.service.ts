import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpEvent } from '@angular/common/http';
import { CityModel } from '../../drop-down-list/citymodel';

@Injectable({
  providedIn: 'root'
})
export class HttpfunService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getQuery(){
    return this.httpClient.get<HttpEvent<any>>('http://localhost:3000/cities',{
      headers: new HttpHeaders()
      .set('aaa','aaa')
      .set('mmm','mmm'),
       observe:'events'
    })
  }

  makeFailingCall(){
    return this.httpClient.get('api/fail');
  }
}
