import { Component,Output,EventEmitter } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-landinghero',
  templateUrl: './landinghero.component.html',
  styleUrls: ['./landinghero.component.css']
})
export class LandingheroComponent {

@Output() sendRouteOutlet:EventEmitter<string> = new EventEmitter<string>();

  sendRoute(route:string){

    this.sendRouteOutlet.emit(route);
  }
}
