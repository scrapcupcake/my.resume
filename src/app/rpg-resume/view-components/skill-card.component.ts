import {Component, Input} from '@angular/core';

@Component({
    directives: [],
    selector: 'skill-card',
    template: `
    <h1>{{title}}</h1>
    <div>
        <ng-content></ng-content>
    </div>
    `
})
export class SkillCard
{
    @Input() title: string;

}