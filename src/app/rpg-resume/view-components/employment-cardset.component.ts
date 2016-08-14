import {Component, ContentChildren, QueryList} from '@angular/core';
import {EmploymentCard} from './employment-card.component';

@Component({
    selector: 'employment-cardset',
template: `
<ul class="nav nav-cards">
    <li *ngFor="let card of cards" (click)="selectCard(card)" [class.active]="card.active">
        <a href="#">{{card.title}}</a>
    </li>
</ul>
<ng-content></ng-content>
`
})
export class EmploymentCardSet{
   @ContentChildren(EmploymentCard) cards: QueryList<EmploymentCard>;
  
  // contentChildren are set
  ngAfterContentInit() {
    // get all active tabs
    let activeCards = this.cards.filter((card)=>card.active);
    
    // if there is no active tab set, activate the first
    if(activeCards.length === 0) {
      this.selectCard(this.cards.first);
    }
  }
  
  selectCard(card: EmploymentCard){
    // deactivate all tabs
    this.cards.toArray().forEach(card => card.active = false);
    
    // activate the tab the user has clicked on.
    card.active = true;
  }

}