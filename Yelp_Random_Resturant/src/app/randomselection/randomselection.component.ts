import { Component,OnInit,Input } from '@angular/core';
import { Business } from '../yelp-info';
import {  spinTheWheel,  } from '../animations/rotate';
import { fade } from '../animations/fadeAnimation';
import { AnimationMetadataType } from '@angular/animations';
import { defaultDegree,rotatedDegree } from '../animations/rotate';
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
theRestaurant:string = '';
constructor(){
  
}
indexStyle(i:number){
  let colorIndex = i;
  // if(colorIndex > 4 ){
  //   let randomNum = Math.floor(Math.random()*4)
  //   colorIndex = randomNum
  // }
  let color = '';

  if(colorIndex % 2 == 0){
    color = "blue"
  }else{
    color = "orange"
  }
let WheelStyle = `--i:${i+1};--clr:${color}`
  

  
  
  

return WheelStyle;

}



ngOnInit(): void {
    let wheel = document.querySelector('.wheel');
    let spin = document.querySelector('.spinBtn');
    let value = Math.floor(Math.random() * 3600 + 180);
}
state:string = 'default';
lastState:string = 'rotated1';
startingPoint:DOMRect | undefined = undefined;
FindTheWinner(){

  let pinOnWheel = document.querySelector('.restaurant');
  let pinRect = pinOnWheel?.getBoundingClientRect();
  console.log(pinOnWheel)
  
  console.log(pinRect?.top,pinRect?.bottom,pinRect?.left,pinRect?.right)
  let winner = document.querySelector('.restaurant')
  let winnerRect = winner?.getBoundingClientRect();
  console.log(winnerRect?.top,winnerRect?.bottom,winnerRect?.left,winnerRect?.right)
  return pinRect
  }
  defaultDegree:number = 0;
  rotatedDefault:number =0;
rotate() {
  
  let value = Math.floor(Math.random() * 10);
  this.state = (this.state === 'default' ? `rotated` : `default`);
  console.log(defaultDegree);
  console.log(rotatedDegree)
  // if(this.state === this.lastState){
  //   console.log(`The last state and current state are the same. The LastState is ${this.lastState} The CurrentState is ${this.state} and the random Value is ${value}`)
  //   if(value >= 0 && value < 10){
  //     this.state=`rotated${value+1}`
  //   }
  //   else{
  //     this.state=`rotated${value-1}`
  //   }
  // }
  // this.lastState = this.state;
  
  
  this.startingPoint = this.FindTheWinner();
}
animStart(){
console.log('start')
let randomNum = Math.floor(Math.random() * 20);
this.theRestaurant = this.listOfBiz[randomNum].name;
}
animEnd(){
console.log('end')

let winner = document.querySelector('.restaurant')
  let winnerRect = winner?.getBoundingClientRect();
  // console.log(winnerRect?.top,winnerRect?.bottom,winnerRect?.left,winnerRect?.right)
  // console.log(winner)
  let num = 20;
let x = 0;
// let divTest:any = undefined;
// let p;
// divTest = window.getComputedStyle((<any>p) = document.querySelector(`.restaurant`)).rotate
// console.log('style test below')

// console.log(divTest) 
while(x<=num){
winner = document.querySelector(`.num${x}`);
console.log(winner)

x++;

}
console.log('///////')
// console.log(this.startingPoint?.top,this.startingPoint?.bottom,this.startingPoint?.left,this.startingPoint?.right)
console.log(this.startingPoint?.x,this.startingPoint?.y)

}



}
