import { HttpClient, HttpInterceptor,HttpRequest,HttpHandler,HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { Yelpinfo } from './yelp-info';

@Injectable({
  providedIn: 'root'
})
export class YelpServiceService  {
  // implements HttpInterceptor
// intercept(req:HttpRequest<any>,next:HttpHandler): Observable<HttpEvent<any>>{
//  const accessToken = "PIUZTblrnJ0TCwXLfSbXOzhHHC2_3td-i0hfiCKFsV8JMrd6WRjfWHvbAdPV_DJCi-6bxK2_h4bGu7M06WGikMVr8e_q_HMKUaD6Xf-cLazQLsztWeQeCM4uz3NNY3Yx";

// let token = req.clone({
//   setHeaders:{
//     Authorization:'Bearer'+ accessToken,
//     Accept:'application/json'
//   }
// })
// return next.handle(token)
// }
  constructor(private http : HttpClient) { }

  httpString:string = "https://api.yelp.com/v3/" ;
  azRestaurants: string = "businesses/search?location=az";
  
  // getRestaurant(){
  //   return this.http.get<Yelpinfo>("https://api.yelp.com/v3/businesses/search?location=az");
  // }
  // GETALL(){
  //   return this.http.get<Yelpinfo>("https://localhost:7174/yelp");
  // }
  GetByCategory(endPoint:string){
    return this.http.get<Yelpinfo>(`https://localhost:7174/yelp/${endPoint}`);

  }
  GetBusinessInfo(businessID:number){
    return this.http.get<Yelpinfo>(`https://localhost:7174/yelp/id/${businessID}`)
  }

  
}
