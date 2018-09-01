import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler,HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
@Injectable()
export class CitiesInterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('making request to ' + req.url );
    return next.handle(req);
  }
}
