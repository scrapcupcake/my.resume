import {Component, Input} from '@angular/core';

@Component({
    selector: 'skill',
    template: `<section>
    <p>{{name}}</p> <div class="skillDisplay">Skill Level: {{level}}</div>
    <ng-content></ng-content>
    </section>
    `
})
export class Skill{
   @Input() name: string;
   @Input() level: number;

}