import {Component, ContentChildren, QueryList, Input} from '@angular/core';
import {EmploymentCard} from './employment-card.component';
import {RpgModal} from './rpg-modal.component';

@Component({
  directives: [EmploymentCard, RpgModal],
    selector: 'employment-cardset',
template: `
<ng-content></ng-content>
`
})
export class EmploymentCardSet{

}