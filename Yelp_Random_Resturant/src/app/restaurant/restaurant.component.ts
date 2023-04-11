import { Component,OnInit,OnDestroy } from '@angular/core';
import { Yelpinfo,Business } from '../yelp-info';
import { YelpServiceService } from '../yelp-service.service';
import { Observable, of, Subscription } from 'rxjs';
import { EndPoints } from '../end-point';


@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit,OnDestroy {

  constructor(private YelpSrv:YelpServiceService){

  }
  YelpInfo:Yelpinfo = {
    businesses:[]
  }
  BusinessesInfo:Business = {
    id: "",
    name: "",
    imageUrl: "",
    is_closed: false,
    url: "",
    review_count: 0,
    categories: [],
    rating: 0,
    price: "",
    phone: "",
    display_phone: "",
    distance: 0,
  }
  UsersEndPoint:EndPoints = {
    location: "",
    categories:"",
    offSet:0,
    limit:0

  }
  APIEndPoint: string = "";
  yelpSubscription: Subscription | undefined;
  offsetValue:number = 0;
  // newOffsetValue :number = this.addMoreBusinesses();
  limitValue:number = 0;
  newLimitValue:number  = 20;
  // baseEndPoint:string = `location=az&categories=mexican&offset=${this.newOffsetValue}&limit=${this.newLimitValue}`;
  
  ngOnInit(): void {
    // this.yelpSubscription = this.YelpSrv.GetByCategory(`location=az&categories=mexican`).subscribe(result=>{
    //   console.log(result);
    //   this.YelpInfo = result;
    //   this.listOfBusinesses = this.YelpInfo.businesses;
    //   this.batchOfBusinesses = this.YelpInfo.businesses;})
  }
  ngOnDestroy(): void {
    this.yelpSubscription?.unsubscribe();
}
  batchOfBusinesses:Business[] = [];
  listOfBusinesses:Business[] = [];
  getRandomRestaurant(apiendpoint:string){
    
    if(apiendpoint == "" ){
    console.log("Inside IF statement")
    this.yelpSubscription = this.YelpSrv.GetByCategory(`location=az&categories=mexican`).subscribe(result=>{
      console.log(result);
      this.YelpInfo = result;
      this.batchOfBusinesses = this.YelpInfo.businesses;
  this.listOfBusinesses = this.YelpInfo.businesses
    })
  }
  else {
    this.yelpSubscription = this.YelpSrv.GetByCategory(this.APIEndPoint).subscribe(result=>{
      console.log(result);
      this.YelpInfo = result;
      this.batchOfBusinesses = this.YelpInfo.businesses;
  this.listOfBusinesses = this.YelpInfo.businesses
    })
  }
}
  addMoreBusinesses(){
    // remember to look into changing end point from isndie function since its a member variable 
    console.log("inside add more function");
   
    // this.getRandomRestaurant()
  }



  CreateUsersEndPoint(userEndPoint:EndPoints){
    console.log("inside the EventEmitter in CreatUsersEndPoint Function")
    console.log(this.APIEndPoint)
    if(userEndPoint.offSet == 0 || userEndPoint.limit == 0){
      this.APIEndPoint = `location=${userEndPoint.location}&categories=${userEndPoint.categories}`
    }
    this.getRandomRestaurant(this.APIEndPoint)
    console.log(this.APIEndPoint)

  }
}
