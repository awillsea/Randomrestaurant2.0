import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {HttpInterceptor} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { UserinputComponent } from './userinput/userinput.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { RandomselectionComponent } from './randomselection/randomselection.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Component, HostBinding } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';


@NgModule({
  declarations: [
    AppComponent,
    UserinputComponent,
    RestaurantComponent,
    RandomselectionComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
