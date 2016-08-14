import {Component, Input} from '@angular/core';

@Component({
    selector: 'title-card',
    template: `
    <h1><img class="profileIcon" src="../../../assets/img/HunterHunnieSprite.png"/> {{name}}</h1>
    <h2> Email: {{email}}</h2>
    <h2> Phone Number: {{phone}}</h2>
    <h2><ng-content></ng-content></h2>
    `
})
export class TitleCard{
    @Input() name: string;
    @Input() email: string;
    @Input() phone: string;
}

//<img class="emailIcon" src="../../../assets/img/email.png"/>
//<img class="phoneIcon" src="../../../assets/img/phone.png"/>