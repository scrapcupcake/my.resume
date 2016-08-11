import {Component, Input} from '@angular/core';

@Component({
    selector: 'skill-card',
    template: `
    <h1>{{title}}</h1>
    <ng-content></ng-content>
    `
})
export class SkillCard
{
    @Input() title: string;

}