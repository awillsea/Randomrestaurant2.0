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
import { emitDistinctChangesOnlyDefaultValue } from '@angular/compiler';

export const spinTheWheel = 
    trigger('spinTheWheel',[
    state('default', style({ transform: 'rotate(0)' })),
    state('rotated1', style({ transform: degValue()})),
    state('rotated2', style({ transform: degValue()})),
    state('rotated3', style({ transform: degValue()})),
    state('rotated4', style({ transform: degValue()})),
    state('rotated5', style({ transform: degValue()})),
    state('rotated6', style({ transform: degValue()})),
    state('rotated7', style({ transform: degValue()})),
    state('rotated8', style({ transform: degValue()})),
    state('rotated9', style({ transform: degValue()})),
    state('rotated10', style({ transform: degValue()})),
    // transition('rotated => default', animate('1500ms ease-out')),
    // transition('default => rotated', animate('1500ms ease-in'))
    transition('* => *',animate('3000ms ease-in-out'))
    ])
    function degValue(){
    let value = Math.ceil(Math.random()* 3600 );
    
    let ran = Math.floor(Math.random()*2);
    let posOrNeg = ''
    if(ran = 1){
        return `rotate(${value}deg)`
    }else {
        return  `rotate(-${value}deg)`
    }
    function newState(){
        // state('rotated1', style({ transform: degValue()})),
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
    