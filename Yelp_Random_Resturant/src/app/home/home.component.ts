import { Component } from '@angular/core';
import {fader, slider, stepper, transformers} from '../animations/routeAnimations'
import { RouterOutlet,Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations:[
    //fade,
    //fader,
    //slider,
    //transformers
    stepper],
})
export class HomeComponent {
  constructor(public router:Router){
    
  }
 prepareRoute(outlet2:RouterOutlet){
  return outlet2 && outlet2.activatedRouteData && outlet2.activatedRouteData['animation']
 }
}
