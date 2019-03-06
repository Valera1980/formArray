import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceAsyncService {

  _some = null;
  constructor() { 
    this.fff();
  }

  get some():{aaa:number,bbb:number}{
   return this._some;
  } 

  fff(){
    setTimeout(() => {
      this._some = {aaa:999,bbb:777}
    }, 4000);
  }
}
