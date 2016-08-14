import { Component, ViewEncapsulation } from '@angular/core';
import {Skill, SkillCard, SkillKey, BiographyCard, Employment, EmploymentCard, EmploymentCardSet, TitleCard} from './view-components';

@Component({
    selector: 'rpg-resume',
    encapsulation: ViewEncapsulation.None,
    directives: [Skill, SkillCard, SkillKey, BiographyCard, Employment, EmploymentCard, EmploymentCardSet, TitleCard],
    //styleUrls: [`./rpg-resume.css`],
    templateUrl: './rpg-resume.html'
})
export class RpgResume{

}