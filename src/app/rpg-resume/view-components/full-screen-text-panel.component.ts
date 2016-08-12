import {Component, Input, Output, EventEmitter,
  trigger,
  state,
  style,
  transition,
  animate, 
  keyframes} from '@angular/core';

const SHOW : string = "show";
const HIDE : string = "hide";


@Component({
    selector: 'full-screen-text-panel',
    styles: [`
        .full-screen { 
            position: fixed;
            display: none;
            width: 100vw;
            height: 100vh;
            background-color: black;
            opacity: 0.5
        }
        .container {
            position: fixed;
            left: 15%;
            top: 15%;
            width: 70%;
            height: 70%;
        }
    `],
    template: `
        <section class="full-screen" [@showFade]="animName">
            <section class="container RpgUiBox" [@growIn]="animName">
                <ng-content></ng-content>
            </section>
        </section>
    `,
    animations: [
        trigger('showFade', [
            transition(`${HIDE} => ${SHOW}`, animate('250ms ease-in', keyframes([
                style({display: 'block', offset: 0}),
                style({opacity: 0.5, offset: 1})
            ]))),
            transition(`${SHOW} => ${HIDE}`, animate('250ms ease-out', keyframes([
                style({height: 0, opacity: 0, offset: 0.99}),
                style({display: 'none', offset: 1}),
            ])))
        ]
        ),
        trigger('growIn', [
        transition("hide => show", animate('250ms ease-in', keyframes([
            style({scale: '1', offset: 0}),
            style({ scale: '1.1', offset: 0.1}),
            style({ scale: '0.3', offset: 1})
        ]))),
        transition("show => hide", animate('250ms ease-out', keyframes([
            style({scale: '0.3', offset: 0}),
            style({scale: '1.1', offset: 0.9}),
            style({scale: '1.0', offset: 1})
        ])))
        ])
    ]
})
export class FullScreenTextPanel {
    animName = "hide";
    
    @Output() closed = new EventEmitter<boolean>();

    open(){
        console.log("Wat!");
        this.animName = SHOW;
    }

    close(){
        this.animName = HIDE;
        setTimeout(function() {
            this.closed.emit(true);
        }, 250); 
    }
}