import {Component} from '@angular/core';
import {FullScreenTextPanel} from './full-screen-text-panel.component';

@Component({
    selector: 'bio-card',
    directives: [FullScreenTextPanel],
    template: `
    <button (click)="fullScreen.open()">Read More</button>
    <h2>Biography</h2>
    <ng-content></ng-content>

    <full-screen-text-panel #fullScreen>
        <ng-content></ng-content>
    </full-screen-text-panel>
    `
})
export class BiographyCard{

}