import {Directive, Component, AfterContentInit, ViewChild, ContentChildren, QueryList, ElementRef, Renderer} from '@angular/core';
//import {FullScreenTextPanel} from './full-screen-text-panel.component';
//import {Modal} from 'ng2-modal';

@Directive({
    selector: 'p'
})
class Paragraph{
    content : string;
    constructor(private elm: ElementRef, private r : Renderer){
    }

    ngAfterContentInit(){
            this.content =  this.elm.nativeElement.innerText; //This may break in future
    }
}



@Component({
    selector: 'bio-card',
    directives: [Paragraph],
    template: `
    <button (click)="bioModal.open()">Read More</button>
    <h2>Biography</h2>
    <ng-content></ng-content>
    
    <rpg-details #bioModal>
        <title>
            Biography
        </title>
        <detail-body>
            <p *ngFor="let child of children">
                {{child.content}}
            </p>
        </detail-body>
    </rpg-details>
    `
})
export class BiographyCard implements AfterContentInit{
    @ContentChildren(Paragraph) children : QueryList<Paragraph>;

    ngAfterContentInit(){
    }

    
}