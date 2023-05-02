import { Component,OnInit,Input,Output,EventEmitter,OnChanges,SimpleChange, SimpleChanges } from '@angular/core';
import { Business } from '../yelp-info';
import {  spinTheWheel,  } from '../animations/rotate';
import { fade } from '../animations/fadeAnimation';
import { AnimationMetadataType, style } from '@angular/animations';
import { defaultDegree,rotatedDegree } from '../animations/rotate';
import { rotatedDeg } from '../degree';
import { Subject, interval, window } from 'rxjs';


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
@Input() listOfBiz:Business[] = [];
@Input() theWinningIndex:number = 0;
winningDeg:number = 0;
winningDegStyleParam:string = ''
ngOnChanges(changes: SimpleChanges){

this.winningDeg = (this.theWinningIndex * 18) +  383

}
 theRestaurant:string = '';
constructor(){
  
}
indexStyle(i:number){
  let colorIndex = i;

  let color = '';

  if(colorIndex % 2 == 0){
    color = "gray"
  }else{
    color = "green"
  }
let WheelStyle = `--i:${i+1};--clr:${color}`
return WheelStyle;
}

ngOnInit(): void {

}
state:string = 'default';
defaultState:boolean = true;
finishDeg:number =0;
spinButtonCounter:number = 0;


rotate() {
console.log(this.winningDeg)
console.log(this.state)

console.log(this.state)
console.log(this.spinButtonCounter)
if(this.state === 'default' && this.spinButtonCounter > 0 ){
  let randomNum = Math.floor(Math.random() * 20)
  this.theWinningIndex = randomNum;
  console.log("the new winning index is " + this.theWinningIndex)
}
this.state = (this.state === 'default' ? `rotated` : `default`);
this.winningDeg = (this.theWinningIndex * 18) +  383
console.log(this.winningDeg)

this.winningDegStyleParam = `rotate(${this.winningDeg}deg)`


this.spinButtonCounter++;

}
animStart(){
console.log('start')
console.log(`this is hopefully the degree of the winner ${this.listOfBiz[this.theWinningIndex].name} ${this.winningDeg}`) 

}
popupModalOpen:boolean = false;
// checked:boolean = true;
animEnd(){
  this.theRestaurant = this.listOfBiz[this.theWinningIndex].name;
console.log('end')
if(this.state === 'rotated'){
let delayPopupModal = setTimeout(()=>{
  this.popupModalOpen = true;
  console.log('timer')
clearInterval(delayPopupModal);

},900)
}else{
  console.log('modal no show up ')
}
let delaySpinButtonState = setTimeout(()=>{
  this.defaultState =!this.defaultState;
  clearInterval(delaySpinButtonState);

},1000)

}
showWheel(){
  
  this.popupModalOpen = false;
  console.log('modal closing')

}


}




