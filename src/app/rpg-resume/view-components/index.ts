import {BiographyCard} from "./bio-card.component";
import {EmploymentCard} from "./employment-card.component";
import {Employment} from "./employment.component";
import {SkillCard} from "./skill-card.component";
import {Skill} from "./skill.component";
import {TitleCard} from "./title-card.component";
import {SkillKey} from './skill-key.component';
import {EmploymentCardSet} from './employment-cardset.component';

import {RpgModals} from '../modal';
import {NgModule} from '@angular/core';

import {CommonModule} from "@angular/common";
import {BrowserModule} from "@angular/platform-browser";

@NgModule({
    imports:[RpgModals, CommonModule, BrowserModule],
    declarations: [BiographyCard, Employment, EmploymentCard, Skill, SkillCard, TitleCard, SkillKey, EmploymentCardSet],
    exports: [RpgModals, CommonModule, BrowserModule, BiographyCard, Employment, EmploymentCard, Skill, SkillCard, TitleCard, SkillKey, EmploymentCardSet]
})
export class ViewComponents{

}

export * from "./bio-card.component";
export * from "./employment-card.component";
export * from "./employment.component";
export * from "./skill-card.component";
export * from "./skill.component";
export * from "./title-card.component";
export * from './skill-key.component';
export * from './employment-cardset.component';
