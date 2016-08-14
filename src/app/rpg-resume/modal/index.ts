import {RpgDetails} from './rpg-details.component';
import {RpgModal} from './rpg-modal.component';
import {CommonModule} from "@angular/common";
import {BrowserModule} from "@angular/platform-browser";

import {NgModule} from '@angular/core';

@NgModule({
    imports: [CommonModule, BrowserModule],
    declarations: [RpgModal, RpgDetails],
    exports: [RpgModal, RpgDetails, CommonModule, BrowserModule]
})
export class RpgModals{

}