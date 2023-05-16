import { Component,OnInit,OnDestroy,Output,EventEmitter } from '@angular/core';
import { Yelpinfo,Business } from '../yelp-info';
import { YelpServiceService } from '../yelp-service.service';
import { Observable, of, Subscription } from 'rxjs';
import { EndPoints } from '../end-point';
import { LocationService } from '../location.service';


@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit,OnDestroy {
ip:string = '';
  constructor(private YelpSrv:YelpServiceService){
   
  }
@Output() sendDegree:EventEmitter<Business> = new EventEmitter<Business>();

  YelpInfo:Yelpinfo = {
    businesses:[]
  }
  BusinessesInfo:Business = {
    id: "",
    name: "",
    imageUrl: "",
    is_closed: false,
    url: "",
    reviewCount: 0,
    categories: [],
    rating: 0,
    transactions: [],
    price: "",
    phone: "",
    display_phone: "",
    distance: 0,
  }
  UsersEndPoint:EndPoints = {
    location: "",
    categories:"",
    offSet:0,
    limit:0,
    price:[]

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
  winningBiz:Business ={
    id: "",
    name: "",
    imageUrl: "",
    is_closed: false,
    url: "",
    reviewCount: 0,
    categories: [],
    rating: 0,
    transactions: [],
    price: "",
    phone: "",
    display_phone: "",
    distance: 0,
  };
  winningIndex:number =0;


  showWheel:boolean = false;
  CreateUsersEndPoint(userEndPoint:EndPoints){
    
    if(userEndPoint.price.length === 0){
      this.APIEndPoint = `location=${userEndPoint.location}&categories=${userEndPoint.categories}`
    }else{
      this.APIEndPoint = `location=${userEndPoint.location}&categories=${userEndPoint.categories}&price=${userEndPoint.price.length}`
    }
    this.getRandomRestaurant(this.APIEndPoint)
    this.showWheel = true;
    console.log(this.APIEndPoint)
    
    // this.showWheel = showWheel;
    // console.log(this.showWheel)
  }

  getRandomRestaurant(apiendpoint:string){
    if(apiendpoint === "" ){
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
      console.log(XPathResult)
      console.log(result);
      this.YelpInfo = result;
      this.batchOfBusinesses = this.YelpInfo.businesses;
  this.listOfBusinesses = this.YelpInfo.businesses
    })
  }
  let randomNum = Math.floor(Math.random() * 20)
  let winner = this.listOfBusinesses[randomNum]
  this.winningIndex = randomNum
}
  addMoreBusinesses(){
    // remember to look into changing end point from isndie function since its a member variable 
    console.log("inside add more function");
   
    // this.getRandomRestaurant()
  }



}
