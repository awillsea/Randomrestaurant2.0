
import { NgModule } from '@angular/core';
import { RouterModule, Routes,RouterLinkActive } from '@angular/router';
import { UserinputComponent } from './userinput/userinput.component';
import { AppComponent } from './app.component';
import { LandingheroComponent } from './landinghero/landinghero.component';
import { RestaurantComponent } from './restaurant/restaurant.component';

const routes: Routes = [
  // {path:'',component:AppComponent},
  {path:'hero',component:LandingheroComponent},
  {path:'input', component: UserinputComponent, data:{animation:'isLeft'}},
  {path:'restaurant',component: RestaurantComponent, data:{animation:'isRight'}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
