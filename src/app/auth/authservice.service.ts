import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  isUserLogged: BehaviorSubject<boolean> = new BehaviorSubject(false);
  users = [
    {name:'Valera',password:'1111'},
    {name:'Admin',password:'7777'}
  ]
  constructor() { }

  login(userName, pwd):Observable<{success:boolean,because:string}>{
    console.log('*******************************************************');
    return Observable.create(observer => {
      setTimeout(() => {
        const {success,because} = this.checkPassword(userName,pwd);
        if(success){
          observer.next({success,because});
          this.isUserLogged.next(true);
        }else{
          observer.error({success,because});
        }
      },1000);
    })
  }
  private checkPassword(userName, pwd):{success:boolean,because:string}{
    const user = this.users.find(item => item.name === userName);
    if(!user){
        return {success:false, because:'User not found'};
    }else{
       if(user['password'] === pwd){
         return {success:true, because:'User exist'};
       }else{
        return {success:false, because:'Wrong password'};
       }
    }
  }
}
