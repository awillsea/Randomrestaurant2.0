import { Component,OnInit,Input,Output,EventEmitter,OnChanges,SimpleChange, SimpleChanges } from '@angular/core';
import { Business } from '../yelp-info';
import {  spinTheWheel,  } from '../animations/rotate';
import { fade } from '../animations/fadeAnimation';
import { AnimationMetadataType, style } from '@angular/animations';
import { defaultDegree,rotatedDegree } from '../animations/rotate';
import { rotatedDeg } from '../degree';
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
console.log(changes)
this.winningDeg = (this.theWinningIndex * 18) +  383
this.winningDegStyleParam = `rotate(${this.winningDeg}deg)`

}
 theRestaurant:string = '';
constructor(){
  
}
indexStyle(i:number){
  let colorIndex = i;

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

}
state:string = 'default';

finishDeg:number =0;
  
rotate() {
 console.log(this.winningDeg)
  this.state = (this.state === 'default' ? `rotated` : `default`);


}
animStart(){
console.log('start')
console.log(this.winningDeg)
console.log(`this is hopefully the degree of the winner ${this.listOfBiz[this.theWinningIndex].name} ${this.winningDeg}`) 

}
popupModalOpen:boolean = false;
// checked:boolean = true;
animEnd(){
  this.theRestaurant = this.listOfBiz[this.theWinningIndex].name;
console.log('end')
console.log(`The Top Starting Point ${document.getElementById('num0')?.innerHTML}`)
// let newName = this.listOfBiz[this.theWinningIndex].name
// let parentDiv = document.getElementById(`num${this.theWinningIndex}`)
// console.log(parentDiv?.innerHTML)
// // let p = document.createElement('p');
// // p.textContent = newName;
// let newText = parentDiv?.firstChild;
// newText!.textContent = newName;
// // console.log(newText)
// parentDiv!.firstChild!.textContent = newName
// parentDiv!.getElementsByTagName('div')[0].style.filter = 'blur(0px)';



 
let delayPopupModal = setTimeout(()=>{
  this.popupModalOpen = true;
  console.log('timer')
clearInterval(delayPopupModal);

},1000)


}
showWheel(){
  this.popupModalOpen = false;
  console.log('modal closing')

}
// blurEffect(){
//   if(this.popupModalOpen){
//     return {["filter:blur(2px)"]:["blur(2px)"]}
//   }else{
//     return {["filter:blur(1px)"]:["blur(1px)"]}
   
//   }
// }


}




