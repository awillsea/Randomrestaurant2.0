import { Component,OnInit } from '@angular/core';
import { Business } from '../yelp-info';
import {  spinTheWheel,  } from '../animations/rotate';
import { fade } from '../animations/fadeAnimation';

@Component({
  selector: 'app-randomselection',
  templateUrl: './randomselection.component.html',
  styleUrls: ['./randomselection.component.css'],
  animations:[
    spinTheWheel,
    fade,
    //wheel
  ]
})
export class RandomselectionComponent implements OnInit {
ListOfBiz:Business[] = [];
constructor(){
  
}
ngOnInit(): void {
    let wheel = document.querySelector('.wheel');
    let spin = document.querySelector('.spinBtn');
    let value = Math.floor(Math.random() * 3600 + 180);
}
state:string = 'default';
lastState:string = 'rotated1';
rotate() {
  
  let value = Math.floor(Math.random() * 10);
  this.state = (this.state === 'default' ? `rotated${value}` : `rotated${value}`);
  if(this.state === this.lastState){
    console.log(`The last state and current state are the same. The LastState is ${this.lastState} The CurrentState is ${this.state} and the random Value is ${value}`)
    if(value >= 0 && value < 10){
      this.state=`rotated${value+1}`
    }
    else{
      this.state=`rotated${value-1}`
    }
  }

  this.lastState = this.state;
 

  console.log(value)
}
// test:string = ''
// spinThis(){
//   this.test = (this.test === '' ? `spin` : `spin`);
// }

}
