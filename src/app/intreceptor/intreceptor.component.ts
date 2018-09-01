import { Component, OnInit } from '@angular/core';
import { HttpfunService } from '../services/http/httpfun.service';

@Component({
  selector: 'app-intreceptor',
  templateUrl: './intreceptor.component.html',
  styleUrls: ['./intreceptor.component.css']
})
export class IntreceptorComponent implements OnInit {

  constructor(private http: HttpfunService) { }

  ngOnInit() {
  }

  getFailQuery(){
      this.http.makeFailingCall().subscribe();
  }
  fetchCities(){
    this.http.getQuery().subscribe();
  }

}
