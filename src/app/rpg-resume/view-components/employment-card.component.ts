import {Component, Input} from '@angular/core';

@Component({
    selector: 'employment-card',
    template: `
    <section class="RpgUiBox">
    <h1>{{title}}</h1>
    <ng-content></ng-content>
    </section>`
})
export class EmploymentCard
{
    @Input() title: string;
}