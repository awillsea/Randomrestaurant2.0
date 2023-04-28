import {
    trigger,
    transition,
    style,
    query,
    group,
    animateChild,
    animate,
    keyframes,
    state
} from '@angular/animations'
import { degOfState } from '../degree';
import { emitDistinctChangesOnlyDefaultValue } from '@angular/compiler';
export let defaultDegree = 0;
export let rotatedDegree = 0;
export const spinTheWheel = 
    trigger('spinTheWheel',[
    state('default', style({ transform: defaultDegValue() })),
    state('rotated', style({ transform: rotatedDegValue() })),
    // state('rotated2', style({ transform: `rotate(${degValue()}deg)`})),
    // state('rotated3', style({ transform: `rotate(${degValue()}deg)`})),
    // state('rotated4', style({ transform: `rotate(${degValue()}deg)`})),
    // state('rotated5', style({ transform: `rotate(${degValue()}deg)`})),
    // state('rotated6', style({ transform: `rotate(${degValue()}deg)`})),
    // state('rotated7', style({ transform: `rotate(${degValue()}deg)`})),
    // state('rotated8', style({ transform: `rotate(${degValue()}deg)`})),
    // state('rotated9', style({ transform: `rotate(${degValue()}deg)`})),
    // state('rotated10', style({ transform:`rotate(${degValue()}deg)`})),
    // transition('rotated => default', animate('1500ms ease-out')),
    // transition('default => rotated', animate('1500ms ease-in'))
    transition('* => *',animate('3000ms ease-in-out'))
    ])
    function defaultDegValue(){
    let value = Math.ceil(Math.random()* 3600 );
    
    let ran = Math.floor(Math.random()*2);
    let posOrNeg = ''
    if(ran = 1){
        defaultDegree = value;
        return `rotate(${value}deg)`

    }else {
        defaultDegree = value
        return  `rotate(-${value}deg)`
    }
   

}
function rotatedDegValue(){
    let value = Math.ceil(Math.random()* 3600 );
    
    let posOrNeg = Math.floor(Math.random()*2);
   
    if(posOrNeg = 1){
        rotatedDegree = value;
        return `rotate(${value}deg)`

    }else {
        rotatedDegree = value
        return  `rotate(-${value}deg)`
    }
   

}
// export const wheel = 
//     trigger('spin',[
//         transition('* <=> spin',
//         [query(':self',[
//             style({transform: 'rotate(180deg)'}),
//             animate('1500ms ease-in-out')
//             ],{optional:true})])
//     ])
    