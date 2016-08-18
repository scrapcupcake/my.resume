import {Component, Input} from '@angular/core';
import {TitleBox} from './title-box.component';

@Component({
    directives: [TitleBox],
    selector: 'title-card',
    template:
`
    <h1 class="image-header"><img class="profileIcon" src="assets/img/HunterHunnieSprite.png"/> {{name}}</h1>
    <p class="contact-me"> <img src="assets/img/email.png" alt="Email"/> <a [href]="mailto">{{email}}</a></p>
    <p class="contact-me"> <img src="assets/img/phone.png" alt="Phone"> <a [href]="phoneto">{{phone}}</a></p>
    <title-box title="Career">
    Troubleshooter
    </title-box>
    <title-box class="seeking" title="Seeking!">
        <p>Retail</p>
        <p>Web Development</p>
    </title-box>
`
})
export class TitleCard{
    @Input() name: string;
    @Input() email: string;
    @Input() phone: string;
    @Input() careerClass: string;
    @Input() seeking: string;

    mailto: string;
    phoneto: string;
    seekingArray: string[] = [];

    constructor(){
        this.mailto = "mailto:"+this.email;
        this.phoneto = "tel:"+this.phone;
        if(this.seeking){
            this.seekingArray = this.seeking.split(', ');
        }
            
    }
}

//<img class="emailIcon" src="assets/img/email.png"/>
//<img class="phoneIcon" src="assets/img/phone.png"/>