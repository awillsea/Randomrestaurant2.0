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
import { AppRoutingModule } from './app-routing.module';
import { LandingheroComponent } from './landinghero/landinghero.component';


@NgModule({
  declarations: [
    AppComponent,
    UserinputComponent,
    RestaurantComponent,
    RandomselectionComponent,
    LandingheroComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
