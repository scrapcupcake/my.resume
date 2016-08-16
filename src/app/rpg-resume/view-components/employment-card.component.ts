import {Component, Input} from '@angular/core';
import {RpgModal} from './rpg-modal.component';

@Component({
    directives: [RpgModal],
    selector: 'employment-card',
    template: `
      
   <rpg-modal hideCloseButton='true' modalClass="RpgUiBox" closeOnEscape="true" closeOnOutsideClick="true" #employmentDialog>
        <modal-header>
            <h1>{{title}}</h1>
            <h2>{{subtitle}}</h2>
        </modal-header>
        <modal-content>
          <ng-content></ng-content>
        </modal-content>
        <modal-footer>
            <button (click)="employmentDialog.close()">Close</button>
        </modal-footer>
    </rpg-modal>

    <button class="employment-nav" (click)='employmentDialog.open()'>
        <h1>{{title}}</h1>
        <h2>{{subtitle}}</h2>
    </button>
    
    `
})
export class EmploymentCard
{
    @Input() title: string;
    @Input() subtitle: string;
}