import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(private http:HttpClient) { }

  getIp(){
    return this.http.get("http://api.ipify.org/?format=json")
  }
  sendIP(clientIP:string){
    return this.http.get<Location>(`https://localhost:7174/location/${clientIP}`)
  }

}
