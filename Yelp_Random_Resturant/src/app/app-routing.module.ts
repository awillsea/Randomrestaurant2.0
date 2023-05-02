
import { NgModule } from '@angular/core';
import { RouterModule, Routes,RouterLinkActive } from '@angular/router';
import { UserinputComponent } from './userinput/userinput.component';
import { AppComponent } from './app.component';
import { LandingheroComponent } from './landinghero/landinghero.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'home',component:HomeComponent, data:{animation:'isLeft'},children:[
    {path:'input', component: UserinputComponent, outlet:'router2',  data:{animation:'isLeft'}},
    {path:'user',component: UserinputComponent, outlet:'router2',  data:{animation:'isRight'}},
    {path:'',component: RestaurantComponent, outlet:'router2',   data:{animation:'isRight'}},
  ]},
{path:'', redirectTo:'/hero',pathMatch:'full'},
{path:'hero', component:LandingheroComponent, data:{animation:'isRight'}},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
