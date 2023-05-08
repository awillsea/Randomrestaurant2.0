import { Component,Input,OnChanges,SimpleChange, SimpleChanges,Output,EventEmitter } from '@angular/core';
import { Business } from '../yelp-info';
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  @Input() finalBizInfo:Business = {
    id: "",
    name: "",
    imageUrl: "",
    is_closed: false,
    url: "",
    reviewCount: 0,
    categories: [],
    rating: 0,
    transactions: [],
    price: "",
    phone: "",
    display_phone: "",
    distance: 0,
  }
// @Input() elementIndex:number = 0;
newInputElement:HTMLElement = document.getElementById('ratingRadio')?.children[9] as HTMLInputElement
ngOnChanges(change:SimpleChanges){
this.settingStarRating()
this.formatPhoneNumber(this.finalBizInfo.phone)
 
}
settingStarRating(){
  let element = <HTMLElement> document.getElementById('ratingRadio')?.children[this.finalBizInfo.rating * 2] as HTMLInputElement
  if(!element.checked){
    element.checked = !element.checked
  }
  console.log(element)
   this.newInputElement = element
}
formattedPhoneNumber:string = '';

formatPhoneNumber(phoneNumberString:string) {
  var cleaned = ('' + phoneNumberString).replace(/\D/g, '');
  var match = cleaned.match(/^(1|)?(\d{3})(\d{3})(\d{4})$/);
  if (match) {
    var intlCode = (match[1] ? '+1 ' : '');
    this.formattedPhoneNumber=  [intlCode, '(', match[2], ') ', match[3], '-', match[4]].join('');
  }
}
@Output() popupModalClosed:EventEmitter<boolean> = new EventEmitter<boolean>(); 
closePopupModal(){
this.popupModalClosed.emit(true)
}

}
