import { Component, OnInit } from '@angular/core';
import { Observable, of, empty } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Component({
  selector: 'app-throw-error',
  templateUrl: './throw-error.component.html',
  styleUrls: ['./throw-error.component.css']
})
export class ThrowErrorComponent implements OnInit {

  constructor() { }

  getJson(){
    return Observable.create(observer => {
      setTimeout(() => {
        const ob = "";
        observer.next(ob);
      }, 1000);
    })
  }
  ngOnInit() {
  }
  test(){
     this.getJson()
     .pipe(
       map((data:any) => {
         return JSON.parse(data);
       })
     )
     .pipe(
       catchError(error =>{
         console.error(error);
         return empty();
       })
     )
     .subscribe(data => {
     console.log('TCL: ThrowErrorComponent -> test -> data', data);
     })
     
  }

}
