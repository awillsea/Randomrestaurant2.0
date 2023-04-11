import { Component } from '@angular/core';
import { Business } from '../yelp-info';

@Component({
  selector: 'app-randomselection',
  templateUrl: './randomselection.component.html',
  styleUrls: ['./randomselection.component.css']
})
export class RandomselectionComponent {
ListOfBiz:Business[] = [];
}
