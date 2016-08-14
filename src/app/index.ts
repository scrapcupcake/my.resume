import {CommonModule} from "@angular/common";
import {BrowserModule} from "@angular/platform-browser";
import {RouterModule} from "@angular/router";
// App
import {App} from './app.component';

import {RpgResumeMod} from './rpg-resume';
import {ViewComponents} from './rpg-resume/view-components';

import {NgModule} from '@angular/core';

@NgModule({
    imports: [RpgResumeMod, CommonModule, BrowserModule, RouterModule, ViewComponents ],
    declarations: [App],
    bootstrap: [App]
})
export class AppModule{

}