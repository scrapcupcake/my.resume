import {Component, Input} from '@angular/core';

@Component({
    selector: 'employment-card',
    template: `
<div [style.display]='active? "block" : "none"'>
    <h1>{{title}}</h1>
    <ng-content></ng-content>
</div>
    `
})
export class EmploymentCard
{
    @Input() title: string;
    @Input() active: boolean = false;
}