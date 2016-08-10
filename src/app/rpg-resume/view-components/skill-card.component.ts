import {Component, Input} from '@angular/core';

@Component({
    selector: 'skill-card',
    template: `
    <section class="RpgUiBox">
    <h1>{{title}}</h1>
    <ng-content></ng-content>
    </section>`
})
export class SkillCard
{
    @Input() title: string;

}