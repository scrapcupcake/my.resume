import {Component, Input,
  trigger,
  state,
  style,
  transition,
  animate, 
  keyframes
} from '@angular/core';

@Component({
    selector: 'skill',
    template: `
    <section (click)="skillModal.open()" class="skillContainer">
      <div class="skillDisplay">{{name}}</div> <div class="levelDisplay"><img [src]="'../../../assets/img/skills' + level + '.png'"/></div>
      
   <rpg-details #skillModal>
        <title>
            {{name}}
        </title>
        <detail-body>
          <ng-content></ng-content>
        </detail-body>
    </rpg-details>

    `,
    animations: [
    trigger('showContent', [
      state('show', style({
        height: '*',
        opacity: 1,
        display: 'block;'
      })),
      state('hide',   style({
        height: '0',
        opacity: 0,
        display: 'none'
      })),
      transition('hide => show', animate('250ms ease-in', keyframes([
        style({display: 'block', offset: 0}),
        style({height: '*', opacity: 1, offset: 1})
      ]))),
      transition('show => hide', animate('250ms ease-out', keyframes([
        style({height: 0, opacity: 0, offset: 0.99}),
        style({display: 'none', offset: 1}),
      ])))
    ])
  ]

})
export class Skill{
   @Input() name: string;
   @Input() level: number;

   showSkill : boolean = false;
   currentAnim : string = "hide";

  toggleShow(){
    this.showSkill = !this.showSkill;
    this.currentAnim = this.showSkill ? "show" : "hide";    
  }
}