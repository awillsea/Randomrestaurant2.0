import { Component,OnInit,Output,Input,EventEmitter } from '@angular/core';
import { EndPoints,FinalEndPoint } from '../end-point';
import { LocationService } from '../location.service';

@Component({
  selector: 'app-userinput',
  templateUrl: './userinput.component.html',
  styleUrls: ['./userinput.component.css']
})
export class UserinputComponent implements OnInit {
  
ip:string = '';
clientsCurrentLocation:string = ''
city:string =''
useClientsLocation(){
  this.locationSrv.getIp().subscribe((data:any)=>{
    console.log(data)
    this.ip=data.ip;
  })
  this.locationSrv.sendIP(this.ip).subscribe((result:any)=>{
    console.log(result)
    this.city = result.city
    this.userLocation = `${result.city} ${result.region}`;
    // this.userLatitude = result.lat;
    // this.userLongitude = result.lon;
  })
  this.useClientsIP = true;
}
useClientsIP:boolean = false;
  constructor(private locationSrv:LocationService){
    
    
  }
  ngOnInit(): void {
      
  }
  userEndPoints: EndPoints = {
  location:"",
  categories:"",
  offSet:0,
  limit:0,
  price:[]
}
userCategory:string= "";
userLocation:string="";
userLatitude:number = 0;
userLongitude:number =0;
userPrice:number[] = [];
selectedPrice:number = 0;
addCategories(){
  
 console.log(this.userCategory)
}
addLocation(){
  console.log(this.userLocation)
}
@Output() sendEndPoint:EventEmitter<EndPoints> = new EventEmitter<EndPoints>();

addEndPoint(){
  this.calculatePriceAmount();
  console.log(this.selectedPrice)
 let newEndPoint: EndPoints ={
  location:this.userLocation,
  categories:this.userCategory,
  offSet:0,
  limit:0,
  price:this.userPrice
}  
 this.sendEndPoint.emit(newEndPoint)

}

calculatePriceAmount(){
  let priceCount = this.selectedPrice.toString();
  for(let i:number = 0; i <= priceCount.length-1; i++ ){
    this.userPrice.push(i+1);
  }
  console.log(this.userPrice)
}

}

