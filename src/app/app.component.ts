import { Component, OnInit } from '@angular/core';
import { HttpfunService }  from './services/http/httpfun.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    
  }
  title = 'app';
  showNav:boolean = false;
  observ$: Observable<any>;
  constructor(private httpS: HttpfunService){

  }
  getQuery(){
    this.observ$ = this.httpS.getQuery();
    this.observ$.subscribe(data => {
      console.log(data);
    });
    
  }
}
