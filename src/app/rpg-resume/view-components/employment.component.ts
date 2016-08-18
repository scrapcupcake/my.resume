import {Component, Input} from '@angular/core';

@Component({
    selector: 'employment',
    styles: [`
    section {border-bottom: 1px solid black; position: relative;}
    header {width: 30%; margin-top: -0.8em; margin-left: 1.5em; 
        background-color: white; border-radius: 0px 0px 10px 10px; color: black;
        text-align: center;}
    .JobTitle {
        font-size: xx-large;
        text-align: center;
        border-bottom: 1px solid black;
        margin: 0;
        padding: 10px 0;

    }
    .Employer, .Location{
        flex: 1;
        height: 100%;
        text-align: center;
        font-size: larger;
        margin: 0;
        padding: 0;
        padding: 0.3em 0;
    }
    .Employer {
        border-right: 1px solid black;
    }
    `],
    template: `<section class="RpgUiBox">
                <header>
                {{startDate}} through {{endDate}}</header>
                <main>
                <h1 class="JobTitle">{{jobTitle}}</h1>
                <div style="display: flex; width; 100%; border-bottom: 1px solid black;">
                    <h1 class="Employer">Employer: <br>{{employer}}</h1>
                    <h1 class="Location">Location: <br>{{location}}</h1>
                </div>
                <ng-content></ng-content>
                </main>
            </section>`
})
export class Employment{
    @Input('job-title') jobTitle: string;
    @Input('start-date') startDate: string;
    @Input('end-date') endDate: string;
    @Input() employer: string;
    @Input() location: string;
}