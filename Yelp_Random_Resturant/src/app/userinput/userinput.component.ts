import { Component,OnInit } from '@angular/core';
import { EndPoints,FinalEndPoint } from '../end-point';


@Component({
  selector: 'app-userinput',
  templateUrl: './userinput.component.html',
  styleUrls: ['./userinput.component.css']
})
export class UserinputComponent {

  userEndPoints: EndPoints = {
  location:"",
  categories:"",
  offSet:0,
  limit:0,
}
userCategory:string= "";
userLocation:string="";
addCategories(){
  
//  cat = this.userEndPoints.categories
 console.log(this.userCategory)
}
addLocation(){
  console.log(this.userLocation)
}
}
