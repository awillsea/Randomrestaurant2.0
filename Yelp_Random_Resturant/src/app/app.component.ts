import { Component,OnInit,OnDestroy } from '@angular/core';
import { Yelpinfo } from './yelp-info';
import { YelpServiceService } from './yelp-service.service';
import { Business } from './yelp-info';
import { Location } from './yelp-info';
import { Observable, of, Subscription } from 'rxjs';
import { EndPoints,FinalEndPoint } from './end-point';
import { style, transition, trigger,animate, state, } from '@angular/animations';
import { fade } from './animations/fadeAnimation';
import {fader, slider, stepper, transformers} from './animations/routeAnimations'
import { RouterOutlet,Router } from '@angular/router';
import { spinTheWheel } from './animations/rotate';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations:[
    //fade,
    //fader,
    //slider,
    //transformers
    //stepper
    spinTheWheel
    
    //   // Each unique animation requires its own trigger. The first argument of the trigger function is the name
    //   trigger('rotatedState', [
    //     state('default', style({ transform: 'rotate(0)' })),
    //     state('rotated', style({ transform: 'rotate(-180deg)' })),
    //     transition('rotated => default', animate('1500ms ease-out')),
    //     transition('default => rotated', animate('400ms ease-in'))
    // ])

  ],
  
})
export class AppComponent  {
  constructor(public router:Router){
    
  }
 prepareRoute(outlet:RouterOutlet){
  return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation']
 }
 state:string = 'default';
rotate() {
  this.state = (this.state === 'default' ? 'rotated' : 'default');
}
  
  }



