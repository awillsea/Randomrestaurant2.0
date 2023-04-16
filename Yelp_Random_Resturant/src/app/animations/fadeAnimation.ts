import { style, transition, trigger,animate, state } from '@angular/animations';

export const fade = 
    //trigger()<- the first param is what we will call when wanting to use our animation
    trigger('fade',[
      // now we are defining what are animation will do when called with the @fade in the html portion
      // here we are saying that anytime our object is in the void state, it will start off with the color red and an opacity of 0
      state('void',style({color:'red',opacity:0})),
      // here we are saying what will happen when our object if moved from void to default state (aka *)
      transition('void => *',[
        // we are calling the animation function to over X amount of time, in this case 5000ms to change the object to 
        // the color black and make the opacity 1 when done with the transition
        animate(5000,style({color:'black',opacity:1}))
      ]),
    ])
  