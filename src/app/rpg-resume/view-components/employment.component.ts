import {Component, Input} from '@angular/core';

@Component({
    selector: 'employment',
    template: `<header>
                <h1 class="dates">{{startDate}} through {{endDate}}</h1>
                <h1 class="Employer">{{employer}}</h1>
                <h1 class="Location">{{location}}</h1>
                </header>
                <main>
                <h2 class="JobTitle">{{jobTitle}}</h2>
                <ng-content></ng-content>
                </main>`
})
export class Employment{
    @Input('job-title') jobTitle: string;
    @Input('start-date') startDate: string;
    @Input('end-date') endDate: string;
    @Input() employer: string;
    @Input() location: string;
}