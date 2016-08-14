import {Component, ViewChildren, Input} from '@angular/core';
import {RpgModal} from './rpg-modal.component';

@Component({
    selector: `rpg-details`,
    directives: [RpgModal],
    templateUrl: "rpg-details.html",
    styleUrls: ['./rpg-details.css']
})
export class RpgDetails{
    @ViewChildren('rpg-modal') modal : RpgModal;
}