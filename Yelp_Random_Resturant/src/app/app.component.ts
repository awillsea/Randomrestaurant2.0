import { Component,OnInit,OnDestroy } from '@angular/core';
import { Yelpinfo } from './yelp-info';
import { YelpServiceService } from './yelp-service.service';
import { Business } from './yelp-info';
import { Location } from './yelp-info';
import { Observable, of, Subscription } from 'rxjs';
import { EndPoints,FinalEndPoint } from './end-point';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy  {
  title = 'Yelp_Random_Resturant';

  offsetValue:number = 0;
  newOffsetValue :number = this.addMoreBusinesses();
  limitValue:number = 0;
  newLimitValue:number  = 20;
  baseEndPoint:string = `location=az&categories=mexican&offset=${this.newOffsetValue}&limit=${this.newLimitValue}`;
  yelpSubscription: Subscription | undefined;
  
  YelpInfo:Yelpinfo = {
    businesses:[]
  }
  constructor(private YelpSrv:YelpServiceService){
    

  }
  ngOnInit(){
    this.yelpSubscription = this.YelpSrv.GetByCategory(this.baseEndPoint).subscribe(result=>{
      console.log(result);
      this.YelpInfo = result;
      this.listOfBusinesses = this.YelpInfo.businesses;
      this.batchOfBusinesses = this.YelpInfo.businesses;})
    
  }
  ngOnDestroy(): void {
      this.yelpSubscription?.unsubscribe();
  }
  batchOfBusinesses:Business[] = [];
  listOfBusinesses:Business[] = [];

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
  // defaultOffSetLimit:string =`limit=50`;
  // baseEndPoint:string = `location=az&categories=mexican&${this.defaultOffSetLimit}`;

  
  
  getRandomRestaurant(){
    console.log(this.baseEndPoint)
    this.yelpSubscription = this.YelpSrv.GetByCategory(this.baseEndPoint).subscribe(result=>{
      console.log(result);
      this.YelpInfo = result;
      this.batchOfBusinesses = this.YelpInfo.businesses;

    })
    this.batchOfBusinesses.forEach(business => {this.listOfBusinesses.push(business)});
  }
  addMoreBusinesses(){
    // remember to look into changing end point from isndie function since its a member variable 
    console.log("inside add more function");
    let newOffsetValue
    if(this.offsetValue <= 0){
    newOffsetValue = 2;
    }else return 0
   return newOffsetValue
    // this.getRandomRestaurant()
  }
  CheckIfDuplicates(){
    this.batchOfBusinesses.forEach(business => {
      this.listOfBusinesses.forEach(b => {
        if(business.id != b.id){
          this.listOfBusinesses.push(business);
        }
      });
      
    
      
    });
  }
    
  }



