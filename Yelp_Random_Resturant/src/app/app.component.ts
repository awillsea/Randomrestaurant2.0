import { Component,OnInit,OnDestroy } from '@angular/core';
import { Yelpinfo } from './yelp-info';
import { YelpServiceService } from './yelp-service.service';
import { Business } from './yelp-info';
import { Location } from './yelp-info';
import { Observable, of, Subscription } from 'rxjs';
import { EndPoints,FinalEndPoint } from './end-point';
import { style, transition, trigger,animate, state } from '@angular/animations';
import { fade } from './animations/fadeAnimation';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations:[fade]
})
export class AppComponent  {
 
  
  }



