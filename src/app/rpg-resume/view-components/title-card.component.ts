import {Component, Input} from '@angular/core';

@Component({
    selector: 'title-card',
    template: `
    <section class="RpgUiBox">
    <h1>{{name}}</h1>
    <h2>Email: {{email}}</h2>
    <h2>Phone Number: {{phone}}</h2>
    <h2><ng-content></ng-content></h2>
    </section>
    `
})
export class TitleCard{
    @Input() name: string;
    @Input() email: string;
    @Input() phone: string;
}
