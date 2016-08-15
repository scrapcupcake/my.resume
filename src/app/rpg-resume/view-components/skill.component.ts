import {Component, Input,
  trigger,
  state,
  style,
  transition,
  animate, 
  keyframes
} from '@angular/core';

import {RpgModal} from './rpg-modal.component';

@Component({
    directives: [RpgModal],
    selector: 'skill',
    template: `
    <section (click)="skillModal.open()" class="skillContainer">
      <div class="skillDisplay">{{name}}</div> <div class="levelDisplay"><img [src]="'../../../assets/img/skills' + level + '.png'"/></div>
      
   <rpg-modal modalClass="RpgUiBox" closeOnEscape="true" closeOnOutsideClick="true" #skillModal>
        <modal-header>
            {{name}}
        </modal-header>
        <modal-content>
          <ng-content></ng-content>
        </modal-content>
        <modal-footer>
            <button (click)="skillModal.close()">Close</button>
        </modal-footer>
    </rpg-modal>

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