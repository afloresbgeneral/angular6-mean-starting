import {animate, state, style, transition, trigger} from '@angular/animations';

export const showAnimate =
    trigger('componentAnimation', [
        transition(':enter', [
            style({
                opacity: 0,
                transform: 'translateY(-35%)'
            }),
            animate('300ms linear'),
            style({
                opacity: 1,
                transform: 'translateY(0%)'
            })
        ])
    ]);
