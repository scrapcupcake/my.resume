import {Component, Input} from '@angular/core';

@Component({
    selector: 'employment-card',
    template: `
    <h1>{{title}}</h1>
    <ng-content></ng-content>
    `
})
export class EmploymentCard
{
    @Input() title: string;
}