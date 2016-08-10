import {Component} from '@angular/core';

@Component({
    selector: 'bio-card',
    template: `
    <section class="RpgUiBox">
    <h2>Biography</h2>
    <ng-content></ng-content>
    </section>
    `
})
export class BiographyCard{

}