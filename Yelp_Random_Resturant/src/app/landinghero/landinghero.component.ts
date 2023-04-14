import { Component,Output,EventEmitter,OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-landinghero',
  templateUrl: './landinghero.component.html',
  styleUrls: ['./landinghero.component.css']
})
export class LandingheroComponent implements OnInit{

@Output() sendRouteOutlet:EventEmitter<string> = new EventEmitter<string>();

  sendRoute(route:string){

    this.sendRouteOutlet.emit(route);
  }
  listOfBackgroundPictures:string[] = [
    "assets/dinnerDate.jpg",
    "assets/asianDish.jpg",
    "assets/donuts.jpg",
    "assets/hamburger.jpg",
    "assets/lambDish.jpg",
    "assets/pancakes.jpg",

  ]

  ngOnInit(): void {
      let backGroundImageIndex = Math.floor(Math.random()*5);
       this.backgroundURL = this.listOfBackgroundPictures[backGroundImageIndex];
  }
 backgroundURL:string = "";

}
