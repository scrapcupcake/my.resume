import {Component, ViewChild, Input, Output, EventEmitter} from '@angular/core';
import {RpgModal} from './rpg-modal.component';

@Component({
    selector: `rpg-details`,
    directives: [RpgModal],
    templateUrl: "./rpg-details.html",
    styleUrls: ['./rpg-details.css']
})
export class RpgDetails{
    @ViewChild(RpgModal) modal : RpgModal;

    open(...args: any[]){
        this.modal.open(args);
    }

    close(...args: any[]){
        this.modal.close(args);
    }
}