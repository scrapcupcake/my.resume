var ac_main =
webpackJsonpac__name_([2],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/*
	 * Providers provided by Angular
	 */
	const platform_browser_dynamic_1 = __webpack_require__(333);
	/*
	* Platform and Environment
	* our providers/directives/pipes
	*/
	const browser_1 = __webpack_require__(523);
	const environment_1 = __webpack_require__(524);
	/*
	* App Component
	* our top level component that holds all of our components
	*/
	const app_1 = __webpack_require__(512);
	/*
	 * Bootstrap our Angular app with a top level component `App` and inject
	 * our Services and Providers into Angular's dependency injection
	 */
	function main(initialHmrState) {
	    return platform_browser_dynamic_1.bootstrap(app_1.App, [
	        // To add more vendor providers please look in the platform/ folder
	        ...browser_1.PLATFORM_PROVIDERS,
	        ...environment_1.ENV_PROVIDERS,
	        ...app_1.APP_PROVIDERS,
	    ])
	        .then(environment_1.decorateComponentRef)
	        .catch(err => console.error(err));
	}
	exports.main = main;
	/*
	 * Vendors
	 * For vendors for example jQuery, Lodash, angular2-jwt just import them anywhere in your app
	 * You can also import them in vendors to ensure that they are bundled in one file
	 * Also see custom-typings.d.ts as you also need to do `typings install x` where `x` is your module
	 */
	/*
	 * Hot Module Reload
	 * experimental version by @gdi2290
	 */
	if (false) {
	    // activate hot module reload
	    let ngHmr = require('angular2-hmr');
	    ngHmr.hotModuleReplacement(main, module);
	}
	else {
	    // bootstrap when document is ready
	    document.addEventListener('DOMContentLoaded', () => main());
	}
	

/***/ },

/***/ 102:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	const core_1 = __webpack_require__(1);
	const core_2 = __webpack_require__(1);
	// Borrowed with open source permission from 
	//https://github.com/pleerock/ng2-modal/blob/master/src/Modal.ts
	const OPEN_CLASS = 'modal-open';
	const CLOSE_CLASS = 'modal-close';
	const DIALOG_CLASS = 'modal-dialog';
	let RpgModal = class RpgModal {
	    // -------------------------------------------------------------------------
	    // Constructor
	    // -------------------------------------------------------------------------
	    constructor() {
	        this.closeOnEscape = true;
	        this.closeOnOutsideClick = true;
	        this.hideCloseButton = false;
	        // -------------------------------------------------------------------------
	        // Outputs
	        // -------------------------------------------------------------------------
	        this.onOpen = new core_1.EventEmitter(false);
	        this.onClose = new core_1.EventEmitter(false);
	        this.onSubmit = new core_1.EventEmitter(false);
	        // -------------------------------------------------------------------------
	        // Public properties
	        // -------------------------------------------------------------------------
	        this.isOpened = false;
	        this.createBackDrop();
	        this.modalClasses = [DIALOG_CLASS, this.modalClass].join(" ");
	    }
	    // -------------------------------------------------------------------------
	    // Lifecycle Methods
	    // -------------------------------------------------------------------------
	    ngOnDestroy() {
	        if (this.backdropElement && this.backdropElement.parentNode === document.body)
	            document.body.removeChild(this.backdropElement);
	    }
	    // -------------------------------------------------------------------------
	    // Public Methods
	    // -------------------------------------------------------------------------
	    open(...args) {
	        if (this.isOpened)
	            return;
	        this.isOpened = true;
	        this.onOpen.emit(args);
	        document.body.appendChild(this.backdropElement);
	        window.setTimeout(() => this.modalRoot.nativeElement.focus(), 0);
	        document.body.classList.add(OPEN_CLASS);
	        document.body.classList.remove(CLOSE_CLASS);
	    }
	    close(...args) {
	        if (!this.isOpened)
	            return;
	        this.isOpened = false;
	        this.onClose.emit(args);
	        document.body.removeChild(this.backdropElement);
	        document.body.classList.remove(OPEN_CLASS);
	        document.body.classList.add(CLOSE_CLASS);
	    }
	    // -------------------------------------------------------------------------
	    // Private Methods
	    // -------------------------------------------------------------------------
	    preventClosing(event) {
	        event.stopPropagation();
	    }
	    createBackDrop() {
	        this.backdropElement = document.createElement("div");
	        this.backdropElement.classList.add("modal-backdrop");
	        this.backdropElement.classList.add("fade");
	        this.backdropElement.classList.add("in");
	        this.backdropElement.addEventListener('click', () => { console.log("Clicked Outside"); this.close(); });
	    }
	};
	__decorate([
	    core_1.Input(), 
	    __metadata('design:type', String)
	], RpgModal.prototype, "modalClass", void 0);
	__decorate([
	    core_1.Input(), 
	    __metadata('design:type', Boolean)
	], RpgModal.prototype, "closeOnEscape", void 0);
	__decorate([
	    core_1.Input(), 
	    __metadata('design:type', Boolean)
	], RpgModal.prototype, "closeOnOutsideClick", void 0);
	__decorate([
	    core_1.Input(), 
	    __metadata('design:type', String)
	], RpgModal.prototype, "title", void 0);
	__decorate([
	    core_1.Input(), 
	    __metadata('design:type', Object)
	], RpgModal.prototype, "hideCloseButton", void 0);
	__decorate([
	    core_1.Input(), 
	    __metadata('design:type', String)
	], RpgModal.prototype, "cancelButtonLabel", void 0);
	__decorate([
	    core_1.Input(), 
	    __metadata('design:type', String)
	], RpgModal.prototype, "submitButtonLabel", void 0);
	__decorate([
	    core_1.Output(), 
	    __metadata('design:type', Object)
	], RpgModal.prototype, "onOpen", void 0);
	__decorate([
	    core_1.Output(), 
	    __metadata('design:type', Object)
	], RpgModal.prototype, "onClose", void 0);
	__decorate([
	    core_1.Output(), 
	    __metadata('design:type', Object)
	], RpgModal.prototype, "onSubmit", void 0);
	__decorate([
	    core_1.ViewChild("modalRoot"), 
	    __metadata('design:type', (typeof (_a = typeof core_1.ElementRef !== 'undefined' && core_1.ElementRef) === 'function' && _a) || Object)
	], RpgModal.prototype, "modalRoot", void 0);
	RpgModal = __decorate([
	    core_1.Component({
	        animations: [
	            core_2.trigger('openClose', [
	                core_2.state('open', core_2.style({ transform: 'translateX(0), scale(1)', display: 'block' })),
	                core_2.state('closed', core_2.style({ display: 'none' })),
	                core_2.transition('* => open', [
	                    core_2.animate(700, core_2.keyframes([
	                        core_2.style({ opacity: 0, transform: 'translateX(-100%)', display: 'block', offset: 0 }),
	                        core_2.style({ opacity: 1, transform: 'translateX(15px)', offset: 0.3 }),
	                        core_2.style({ opacity: 1, transform: 'translateX(0)', offset: 1.0 })
	                    ]))
	                ]),
	                core_2.transition('* => closed', [
	                    core_2.animate(700, core_2.keyframes([
	                        core_2.style({ opacity: 1, transform: 'translateX(0)', offset: 0 }),
	                        core_2.style({ opacity: 1, transform: 'translateX(-15px)', offset: 0.7 }),
	                        core_2.style({ opacity: 0, transform: 'translateX(100%)', offset: 0.99 }),
	                        core_2.style({ offset: 1, display: 'none' })
	                    ]))
	                ])
	            ])
	        ],
	        selector: "rpg-modal",
	        template: `
	<div [@openClose]="isOpened ? 'open' : 'closed'" class="modal" 
	     tabindex="-1"
	     role="dialog"
	     #modalRoot
	     (keydown.esc)="closeOnEscape ? close() : 0"
	     [ngClass]="{ in: isOpened, fade: isOpened, out: !isOpened, fadeOut: !isOpened }"
	     [ngStyle]="{ zIndex: isOpened ? 10 : -10 }">
	    <div [class]="modalClasses" (click)="preventClosing($event)">
	        <div class="modal-content" tabindex="0" *ngIf="isOpened">
	            <div class="modal-header">
	                <button *ngIf="!hideCloseButton" type="button" class="close" data-dismiss="modal" [attr.aria-label]="cancelButtonLabel || 'Close'" (click)="close()"><span aria-hidden="true">&times;</span></button>
	                <h4 class="modal-title" *ngIf="title">{{ title }}</h4>
	                <ng-content select="modal-header"></ng-content>
	            </div>
	            <div class="modal-body">
	                <ng-content select="modal-content"></ng-content>
	            </div>
	            <div class="modal-footer">
	                <ng-content select="modal-footer"></ng-content>
	                <button *ngIf="cancelButtonLabel" type="button" class="btn btn-default" data-dismiss="modal" (click)="close()">{{ cancelButtonLabel }}</button>
	                <button *ngIf="submitButtonLabel" type="button" class="btn btn-primary" (click)="onSubmit.emit(undefined)">{{ submitButtonLabel }}</button>
	            </div>
	        </div>
	    </div>
	</div>
	`
	    }), 
	    __metadata('design:paramtypes', [])
	], RpgModal);
	exports.RpgModal = RpgModal;
	var _a;


/***/ },

/***/ 350:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	const rpg_resume_1 = __webpack_require__(513);
	exports.routes = [
	    { path: '', component: rpg_resume_1.RpgResume },
	];
	

/***/ },

/***/ 351:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	const core_1 = __webpack_require__(1);
	const rpg_modal_component_1 = __webpack_require__(102);
	let EmploymentCard = class EmploymentCard {
	};
	__decorate([
	    core_1.Input(), 
	    __metadata('design:type', String)
	], EmploymentCard.prototype, "title", void 0);
	__decorate([
	    core_1.Input(), 
	    __metadata('design:type', String)
	], EmploymentCard.prototype, "subtitle", void 0);
	EmploymentCard = __decorate([
	    core_1.Component({
	        directives: [rpg_modal_component_1.RpgModal],
	        selector: 'employment-card',
	        template: `
	      
	   <rpg-modal hideCloseButton='true' modalClass="RpgUiBox" closeOnEscape="true" closeOnOutsideClick="true" #employmentDialog>
	        <modal-header>
	            <h1>{{title}}</h1>
	            <h2>{{subtitle}}</h2>
	        </modal-header>
	        <modal-content>
	          <ng-content></ng-content>
	        </modal-content>
	        <modal-footer>
	            <button (click)="employmentDialog.close()">Close</button>
	        </modal-footer>
	    </rpg-modal>

	    <button class="employment-nav" (click)='employmentDialog.open()'>
	        <h1>{{title}}</h1>
	        <h2>{{subtitle}}</h2>
	    </button>
	    
	    `
	    }), 
	    __metadata('design:paramtypes', [])
	], EmploymentCard);
	exports.EmploymentCard = EmploymentCard;
	

/***/ },

/***/ 352:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/*
	 * These are globally available directives in any template
	 */
	// Angular 2
	const core_1 = __webpack_require__(1);
	// Angular 2 Router
	const router_1 = __webpack_require__(146);
	// Angular 2 forms
	// application_directives: directives that are global through out the application
	exports.APPLICATION_DIRECTIVES = [
	    ...router_1.ROUTER_DIRECTIVES,
	];
	exports.DIRECTIVES = [
	    { provide: core_1.PLATFORM_DIRECTIVES, multi: true, useValue: exports.APPLICATION_DIRECTIVES }
	];
	

/***/ },

/***/ 353:
/***/ function(module, exports, __webpack_require__) {

	/*
	 * These are globally available pipes in any template
	 */
	"use strict";
	const core_1 = __webpack_require__(1);
	// application_pipes: pipes that are global through out the application
	exports.APPLICATION_PIPES = [];
	exports.PIPES = [
	    { provide: core_1.PLATFORM_PIPES, multi: true, useValue: exports.APPLICATION_PIPES }
	];
	

/***/ },

/***/ 354:
/***/ function(module, exports, __webpack_require__) {

	/*
	 * These are globally available services in any component or any other service
	 */
	"use strict";
	// Angular 2
	const common_1 = __webpack_require__(39);
	// Angular 2 Http
	const http_1 = __webpack_require__(324);
	// Angular 2 Router
	const router_1 = __webpack_require__(146);
	const app_routes_1 = __webpack_require__(350);
	// AngularClass
	//import { provideWebpack } from '@angularclass/webpack-toolkit';
	//import { providePrefetchIdleCallbacks } from '@angularclass/request-idle-callback';
	/*
	* Application Providers/Directives/Pipes
	* providers/directives/pipes that only live in our browser environment
	*/
	exports.APPLICATION_PROVIDERS = [
	    router_1.provideRouter(app_routes_1.routes),
	    ...http_1.HTTP_PROVIDERS,
	    { provide: common_1.LocationStrategy, useClass: common_1.PathLocationStrategy }
	];
	exports.PROVIDERS = [
	    ...exports.APPLICATION_PROVIDERS
	];
	

/***/ },

/***/ 511:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/*
	 * Angular 2 decorators and services
	 */
	const core_1 = __webpack_require__(1);
	/*
	 * App Component
	 * Top Level Component
	 */
	let App = class App {
	};
	App = __decorate([
	    core_1.Component({
	        selector: 'app',
	        encapsulation: core_1.ViewEncapsulation.None,
	        styles: [
	            __webpack_require__(729)
	        ],
	        template: `
	    <main>
	      <router-outlet></router-outlet>
	    </main>
	  `
	    }), 
	    __metadata('design:paramtypes', [])
	], App);
	exports.App = App;
	/*
	 * Please review the https://github.com/AngularClass/angular2-examples/ repo for
	 * more angular app examples that you may copy/paste
	 * (The examples may not be updated as quickly. Please open an issue on github for us to update it)
	 * For help or questions please contact us at @AngularClass on twitter
	 * or our chat on Slack at https://AngularClass.com/slack-join
	 */
	

/***/ },

/***/ 512:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	// App
	__export(__webpack_require__(511));
	__export(__webpack_require__(350));
	// Application wide providers
	exports.APP_PROVIDERS = [];
	

/***/ },

/***/ 513:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(514));
	

/***/ },

/***/ 514:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	const core_1 = __webpack_require__(1);
	const view_components_1 = __webpack_require__(518);
	let RpgResume = class RpgResume {
	};
	RpgResume = __decorate([
	    core_1.Component({
	        selector: 'rpg-resume',
	        encapsulation: core_1.ViewEncapsulation.None,
	        directives: [view_components_1.Skill, view_components_1.SkillCard, view_components_1.SkillKey, view_components_1.BiographyCard, view_components_1.Employment, view_components_1.EmploymentCard, view_components_1.EmploymentCardSet, view_components_1.TitleCard],
	        //styles: [`./rpg-resume.css`],
	        template: __webpack_require__(525)
	    }), 
	    __metadata('design:paramtypes', [])
	], RpgResume);
	exports.RpgResume = RpgResume;
	

/***/ },

/***/ 515:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	const core_1 = __webpack_require__(1);
	//import {FullScreenTextPanel} from './full-screen-text-panel.component';
	//import {Modal} from 'ng2-modal';
	const rpg_modal_component_1 = __webpack_require__(102);
	let Paragraph = class Paragraph {
	    constructor(elm, r) {
	        this.elm = elm;
	        this.r = r;
	    }
	    ngAfterContentInit() {
	        this.content = this.elm.nativeElement.innerText; //This may break in future
	    }
	};
	Paragraph = __decorate([
	    core_1.Directive({
	        selector: 'p'
	    }), 
	    __metadata('design:paramtypes', [(typeof (_a = typeof core_1.ElementRef !== 'undefined' && core_1.ElementRef) === 'function' && _a) || Object, (typeof (_b = typeof core_1.Renderer !== 'undefined' && core_1.Renderer) === 'function' && _b) || Object])
	], Paragraph);
	let BiographyCard = class BiographyCard {
	    ngAfterContentInit() {
	    }
	};
	__decorate([
	    core_1.ContentChildren(Paragraph), 
	    __metadata('design:type', (typeof (_c = typeof core_1.QueryList !== 'undefined' && core_1.QueryList) === 'function' && _c) || Object)
	], BiographyCard.prototype, "children", void 0);
	BiographyCard = __decorate([
	    core_1.Component({
	        selector: 'bio-card',
	        directives: [rpg_modal_component_1.RpgModal, Paragraph],
	        template: `
	    <button (click)="bioModal.open()">Read More</button>
	    <h2>Biography</h2>
	    <ng-content></ng-content>
	    
	    <rpg-modal modalClass="RpgUiBox" hideCloseButton="true" closeOnEscape="true" closeOnOutsideClick="true" #bioModal>
	        <modal-header>
	            Biography
	        </modal-header>
	        <modal-content>
	            <p *ngFor="let child of children">
	                {{child.content}}
	            </p>
	        </modal-content>
	        <modal-footer>
	            <button (click)="bioModal.close()">Close</button>
	        </modal-footer>
	    </rpg-modal>
	    `
	    }), 
	    __metadata('design:paramtypes', [])
	], BiographyCard);
	exports.BiographyCard = BiographyCard;
	var _a, _b, _c;


/***/ },

/***/ 516:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	const core_1 = __webpack_require__(1);
	const employment_card_component_1 = __webpack_require__(351);
	const rpg_modal_component_1 = __webpack_require__(102);
	let EmploymentCardSet = class EmploymentCardSet {
	};
	EmploymentCardSet = __decorate([
	    core_1.Component({
	        directives: [employment_card_component_1.EmploymentCard, rpg_modal_component_1.RpgModal],
	        selector: 'employment-cardset',
	        template: `
	<ng-content></ng-content>
	`
	    }), 
	    __metadata('design:paramtypes', [])
	], EmploymentCardSet);
	exports.EmploymentCardSet = EmploymentCardSet;
	

/***/ },

/***/ 517:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	const core_1 = __webpack_require__(1);
	let Employment = class Employment {
	};
	__decorate([
	    core_1.Input('job-title'), 
	    __metadata('design:type', String)
	], Employment.prototype, "jobTitle", void 0);
	__decorate([
	    core_1.Input('start-date'), 
	    __metadata('design:type', String)
	], Employment.prototype, "startDate", void 0);
	__decorate([
	    core_1.Input('end-date'), 
	    __metadata('design:type', String)
	], Employment.prototype, "endDate", void 0);
	__decorate([
	    core_1.Input(), 
	    __metadata('design:type', String)
	], Employment.prototype, "employer", void 0);
	__decorate([
	    core_1.Input(), 
	    __metadata('design:type', String)
	], Employment.prototype, "location", void 0);
	Employment = __decorate([
	    core_1.Component({
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
	    }), 
	    __metadata('design:paramtypes', [])
	], Employment);
	exports.Employment = Employment;
	

/***/ },

/***/ 518:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(515));
	__export(__webpack_require__(351));
	__export(__webpack_require__(517));
	__export(__webpack_require__(519));
	__export(__webpack_require__(521));
	__export(__webpack_require__(522));
	__export(__webpack_require__(520));
	__export(__webpack_require__(516));
	__export(__webpack_require__(102));
	

/***/ },

/***/ 519:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	const core_1 = __webpack_require__(1);
	let SkillCard = class SkillCard {
	};
	__decorate([
	    core_1.Input(), 
	    __metadata('design:type', String)
	], SkillCard.prototype, "title", void 0);
	SkillCard = __decorate([
	    core_1.Component({
	        directives: [],
	        selector: 'skill-card',
	        template: `
	    <h1>{{title}}</h1>
	    <div>
	        <ng-content></ng-content>
	    </div>
	    `
	    }), 
	    __metadata('design:paramtypes', [])
	], SkillCard);
	exports.SkillCard = SkillCard;
	

/***/ },

/***/ 520:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	const core_1 = __webpack_require__(1);
	let SkillKey = class SkillKey {
	};
	SkillKey = __decorate([
	    core_1.Component({
	        directives: [],
	        selector: 'skill-key',
	        template: `
	    <section class="RpgUiBox">
	    <img src="../../../assets/img/skillskey.png"/>
	    </section>
	    `
	    }), 
	    __metadata('design:paramtypes', [])
	], SkillKey);
	exports.SkillKey = SkillKey;
	

/***/ },

/***/ 521:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	const core_1 = __webpack_require__(1);
	const rpg_modal_component_1 = __webpack_require__(102);
	let Skill = class Skill {
	    constructor() {
	        this.showSkill = false;
	        this.currentAnim = "hide";
	    }
	    toggleShow() {
	        this.showSkill = !this.showSkill;
	        this.currentAnim = this.showSkill ? "show" : "hide";
	    }
	};
	__decorate([
	    core_1.Input(), 
	    __metadata('design:type', String)
	], Skill.prototype, "name", void 0);
	__decorate([
	    core_1.Input(), 
	    __metadata('design:type', Number)
	], Skill.prototype, "level", void 0);
	Skill = __decorate([
	    core_1.Component({
	        directives: [rpg_modal_component_1.RpgModal],
	        selector: 'skill',
	        template: `
	    <section (click)="skillModal.open()" class="skillContainer">
	      <div class="skillDisplay">{{name}}</div> <div class="levelDisplay"><img [src]="'../../../assets/img/skills' + level + '.png'"/></div>
	      
	   <rpg-modal modalClass="RpgUiBox"  hideCloseButton="true" closeOnEscape="true" closeOnOutsideClick="true" #skillModal>
	        <modal-header>
	            {{name}}
	        </modal-header>
	        <modal-content>
	          <ng-content></ng-content>
	        </modal-content>
	        <modal-footer>
	            <button (click)="skillModal.close()">Close</button>
	        </modal-footer>
	    </rpg-modal>

	    `,
	        animations: [
	            core_1.trigger('showContent', [
	                core_1.state('show', core_1.style({
	                    height: '*',
	                    opacity: 1,
	                    display: 'block;'
	                })),
	                core_1.state('hide', core_1.style({
	                    height: '0',
	                    opacity: 0,
	                    display: 'none'
	                })),
	                core_1.transition('hide => show', core_1.animate('250ms ease-in', core_1.keyframes([
	                    core_1.style({ display: 'block', offset: 0 }),
	                    core_1.style({ height: '*', opacity: 1, offset: 1 })
	                ]))),
	                core_1.transition('show => hide', core_1.animate('250ms ease-out', core_1.keyframes([
	                    core_1.style({ height: 0, opacity: 0, offset: 0.99 }),
	                    core_1.style({ display: 'none', offset: 1 }),
	                ])))
	            ])
	        ]
	    }), 
	    __metadata('design:paramtypes', [])
	], Skill);
	exports.Skill = Skill;
	

/***/ },

/***/ 522:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	const core_1 = __webpack_require__(1);
	let TitleCard = class TitleCard {
	};
	__decorate([
	    core_1.Input(), 
	    __metadata('design:type', String)
	], TitleCard.prototype, "name", void 0);
	__decorate([
	    core_1.Input(), 
	    __metadata('design:type', String)
	], TitleCard.prototype, "email", void 0);
	__decorate([
	    core_1.Input(), 
	    __metadata('design:type', String)
	], TitleCard.prototype, "phone", void 0);
	TitleCard = __decorate([
	    core_1.Component({
	        selector: 'title-card',
	        template: `
	    <h1><img class="profileIcon" src="../../../assets/img/HunterHunnieSprite.png"/> {{name}}</h1>
	    <h2> Email: {{email}}</h2>
	    <h2> Phone Number: {{phone}}</h2>
	    <h2><ng-content></ng-content></h2>
	    `
	    }), 
	    __metadata('design:paramtypes', [])
	], TitleCard);
	exports.TitleCard = TitleCard;
	//<img class="emailIcon" src="../../../assets/img/email.png"/>
	//<img class="phoneIcon" src="../../../assets/img/phone.png"/> 
	

/***/ },

/***/ 523:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(352));
	__export(__webpack_require__(353));
	__export(__webpack_require__(354));
	const browser_directives_2 = __webpack_require__(352);
	const browser_pipes_2 = __webpack_require__(353);
	const browser_providers_2 = __webpack_require__(354);
	exports.PLATFORM_PROVIDERS = [
	    ...browser_providers_2.PROVIDERS,
	    ...browser_directives_2.DIRECTIVES,
	    ...browser_pipes_2.PIPES
	];
	

/***/ },

/***/ 524:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	// Angular 2
	// rc2 workaround
	const platform_browser_1 = __webpack_require__(84);
	const core_1 = __webpack_require__(1);
	// Environment Providers
	let PROVIDERS = [];
	// Angular debug tools in the dev console
	// https://github.com/angular/angular/blob/86405345b781a9dc2438c0fbe3e9409245647019/TOOLS_JS.md
	let _decorateComponentRef = function identity(value) { return value; };
	if (false) {
	    // Production
	    platform_browser_1.disableDebugTools();
	    core_1.enableProdMode();
	    PROVIDERS = [
	        ...PROVIDERS,
	    ];
	}
	else {
	    _decorateComponentRef = (cmpRef) => {
	        let _ng = window.ng;
	        platform_browser_1.enableDebugTools(cmpRef);
	        window.ng.probe = _ng.probe;
	        window.ng.coreTokens = _ng.coreTokens;
	        return cmpRef;
	    };
	    // Development
	    PROVIDERS = [
	        ...PROVIDERS,
	    ];
	}
	exports.decorateComponentRef = _decorateComponentRef;
	exports.ENV_PROVIDERS = [
	    ...PROVIDERS
	];
	

/***/ },

/***/ 525:
/***/ function(module, exports) {

	module.exports = "<section class=\"rpg-resume\">\r\n    <section class=\"split-left-vertical\">\r\n        <section class=\"top-left\">\r\n            <title-card class=\"RpgUiBox\"\r\n                name=\"Hunter Hunnie Thomas\"\r\n                email=\"scrapcupcake@gmail.com\"\r\n                phone=\"503-516-2831\">\r\n                Please use email as the primary countact; phone calls available by appointment\r\n            </title-card>\r\n            <bio-card class=\"RpgUiBox\">\r\n            <p>Hello, I’m Hunter Hunnie Thomas, a transgender/non-binary person. I’m currently homeless and trying to get back to my roots of my working career, retail and website development, to get back on my feet.</p>\r\n\r\n            <p>I’m currently trying to figure out how to get the ergonomics of my disability and computer use to mesh well again, and looking for retail work to fill the time when I can’t be hunched over a laptop to be a good salesperson for stuff I believe in again.</p>\r\n\r\n            </bio-card>\r\n        </section>\r\n        <section class=\"bottom-left RpgUiBox\">\r\n            <employment-cardset>\r\n                <employment-card title=\"Modern Era\">\r\n                    <employment job-title=\"Self Care\"\r\n                    start-date=\"2014 (March)\" end-date=\"Current\" \r\n                    employer=\"Health Recovery/Freelancing\" location=\"Portland, OR and Seattle, WA\">\r\n                    <p>A whole slew of bad luck freelancing and mental health recovery has left me ready to restart my working life, but with just a few resources to do it with.</p>\r\n\r\n                    <p>Ask for the full story in person if you want it :)</p>\r\n                    </employment>\r\n                </employment-card>\r\n\r\n                <employment-card title=\"Startup Era\">\r\n                        <employment job-title=\"Senior QA Automation Consultant\"\r\n                        start-date=\"March 2013\" end-date=\"Feburary 2014\" \r\n                        employer=\"SnapFlow\" location=\"Portland, OR\">\r\n                        <p>Developed a ruby automation framework to test the startup’s extensive REST API, used as a major part of their continuous deployment process alongside their javascript unit tests. Provided QA guidance to two other employees, including full handoff of the framework to my successor.</p>\r\n                        <p>Used the income from this to pay my employees at Fat Cat Gameworks, below.</p>\r\n                        </employment>\r\n                        \r\n                        <employment job-title=\"CEO\"\r\n                        start-date=\"Feburary 2012\" end-date=\"Feburary 2014\" \r\n                        employer=\"Fat Cat GameWorks\" location=\"Portland, OR\">\r\n                        <p>Web application and game developer, general executive do-er. Project manager and business developer for a small, focused game development team, including development of contacts with intellectual property holders and acquisition of intellectual property license agreements. Developing web-based game metric tracking, authentication services, micropayment transaction processing APIs for game software as well as the game’s web presence. Provided C# API client libraries for the highly multi-threaded Unity game engine. Developed game systems and game designs.</p>\r\n                        </employment>\r\n\r\n                        <employment job-title=\"CTO\"\r\n                        start-date=\"August 2011\" end-date=\"Feburary 2012\" \r\n                        employer=\"GuruSignal\" location=\"Portland, OR\">\r\n                        <p>Primary application developer for a technical services/crowdsourced technical support startup consisting of an entirely remote team. Provided project management, website development, and set technical policy. Orchestrated development of new features through TDD and BDD practices, gathered user feedback to improve UX, and integrated graphic designer mock-ups and assets to maximize SEO and decrease page load times. Primary development was done in Ruby and Ruby on Rails, with one component being developed for Android in Java.</p>\r\n                        </employment>\r\n                </employment-card>\r\n\r\n                <employment-card title=\"QA Career Era\">\r\n                        <employment job-title=\"SDET (Software Developer In Test) Level 3\"\r\n                        start-date=\"January 2010\" end-date=\"August 2011\" \r\n                        employer=\"Experis\" location=\"Portland, OR\">\r\n                        <p>QA Team Lead and Test Software Developer. Provided technical experience and insight into testing of web applications to a team of test associates who execute manual tests for a remote client with a testing team in Seattle. Regularly traveled to meet with the client at their Seattle office. Designed and implemented automated testing of web applications using Selenium 2.0/Webdriver, including functional, stress, and load tests and a framework to ease the development of additional tests by junior developers. Configure servers and deploy web applications for testing.</p>\r\n                        <p>Designed and implemented intranet applications for metrics and reporting of ongoing project status, as well as for PC status monitoring and health reporting.</p>\r\n                        </employment>\r\n\r\n                        <employment job-title=\"QA Engineer\"\r\n                        start-date=\"2006\" end-date=\"2010\" \r\n                        employer=\"First Advantage Creditnet\" location=\"Beaverton, OR\">\r\n                        <p>Provided documentation, estimates, work breakdown structures, and team lead duties for teams of one to five QA Engineers for a variety of SDLC models, including waterfall, SCRUM and an amalgam of different agile approaches.</p>\r\n                        <p>Designed and wrote a variety of software automation tools written in C#, including two iterations of a web services automation framework, a web app automation framework using WATIN, and an asynchronous service automation application</p>\r\n                        <p>Provided extensive manual testing of asynchronous processing applications (Windows services), web services, web apps and desktop apps.</p>\r\n                        <p>Wrote and provided QA review and testing of SQL scripts and sprocs.</p>\r\n                        <p>Provided on site and remote training and coordination for offshore (India) QA resources.</p>\r\n                        <p>Provided research and feedback on the impact and level of effort for new engineering items as they are proposed by the business team.</p>\r\n                        <p>Provided web service and 'offline' (ftp batch processing) clients with development support for integration efforts</p>\r\n                        </employment>\r\n                        \r\n                        <employment job-title=\"QA Contractor\"\r\n                        start-date=\"July 2005\" end-date=\"December 2005\" \r\n                        employer=\"A1 Enterprise (Telecommute)\" location=\"Beaverton, OR\">\r\n                        <p>Provided QA testing and documentation on intranet deliverable web application.</p>\r\n                        </employment>\r\n\r\n                        <employment job-title=\"Software Developer & QA Lead\"\r\n                        start-date=\"2003\" end-date=\"2005\" \r\n                        employer=\"Media Rights Technologies\" location=\"Sanat Cruz, CA\">\r\n                        <p>Programming for major internal projects, including definitions and implementations of new modules, maintenance of existing modules, and creation and maintenance of documentation. Projects included web development of client side JavaScript, Perl and PHP on Unix servers, and utility application development on Microsoft Windows in Python and C++.</p>\r\n                        <p>Provided system administration for the development and QA teams, including setup and administration of CVS code repositories, SMB file servers, and internal DNS and DHCP.</p>\r\n                        <p>Coordinated between client and server side programming teams, including documentation of tool use, and resolution of any other inter-department support issues.</p>\r\n                        <p>Lead the QA and software defect testing team, provide technical leadership and in-depth debugging support to facilitate communication with the development teams.</p>\r\n                        <p>Adapted to an ever changing technical startup environment, including expanding responsibilities and working to find new applications of technical skills.</p>\r\n                        </employment>\r\n                </employment-card>\r\n                \r\n                <employment-card title=\"Front Desk & Retail Era\">\r\n                        <employment job-title=\"System Administrator\"\r\n                        start-date=\"2001\" end-date=\"2003\" \r\n                        employer=\"Sasquatch Computer\" location=\"Santa Cruz, CA\">\r\n                        <p>Created and maintained the content management system for the company website, developed with mod_perl and Mason.</p>\r\n                        <p>Provided programming support, debugging, and installation for web hosting customers.</p>\r\n                        <p>Provided technical support to address all customer technical queries and to provide concise, factual information for the system administrators when escalating issues.</p>\r\n                        <p>Created new accounts for users, including system accounts and billing information, added services to existing accounts, and management of password resets in adherence to a strict password policy.</p>\r\n                        <p>Handled all incoming queries, including customer service, advertising, billing and payment requests, via a multi-line phone system, walk-in, and email.  Routed all queries that could not be directly addressed to the appropriate parties. Provided solutions to customer issues, even when the customer was distraught or agitated.</p>\r\n                        <p>Researched technical and cost feasibility for possible new services, with full documentation of findings.</p>\r\n                        <p>Adapted to an ever changing small business environment. Aided in definition of own job description and responsibilities, as well as the expansion of the latter.</p>\r\n                        </employment>\r\n\r\n                        <employment job-title=\"Cash Cage Operator & Print Specialist\"\r\n                        start-date=\"2001\" end-date=\"2002\" \r\n                        employer=\"Sears\" location=\"Santa Cruz, CA\">\r\n                        <p>Was one of two personnel counting and handling the deposits, handed off to armored car, for the entire Sears store, including during the holiday season of 2001. Never had a discrepancy between my deposits, the store’s sales records or the bank’s records.</p>\r\n                        <p>Managed and maintained the large sign printer and posted price signs for the store.</p>\r\n                        <p>Worked this job and Sasquatch Computers (above) concurrently.</p>\r\n                        </employment>\r\n\r\n                        <employment job-title=\"Repair Technician\"\r\n                        start-date=\"2000\" end-date=\"2001\" \r\n                        employer=\"Dave's Computer Service\" location=\"Santa Cruz, CA\">\r\n                        <p>Managed the intake of all manner of hardware for repair, including addition to the queue system and entry into the customer database. Addressed the questions or issues of customers, and found additional information for them.</p>\r\n                        <p>Diagnosed and repaired a variety of computer systems including PCs running Windows 95-ME, NT and 2000, Macintosh Computers running OS 7.5.3-9 and Linux workstations. This includes hardware level, OS level and other software conflicts, hardware issues, as well as networking and general troubleshooting with customers.</p>\r\n                        </employment>\r\n                </employment-card>\r\n                \r\n                <employment-card title=\"Collage Era\">\r\n                    <employment job-title=\"Java Development Contractor\"\r\n                    start-date=\"October 2000\" end-date=\"December 2000\" \r\n                    employer=\"Independent Contractor\" location=\"Santa Cruz, CA\">\r\n                    <p>Aided in the development and debugging of GUI front end code for a Java sound analysis system. Development responsibilities focused on front-end performance and cross-platform debugging.</p>\r\n                    </employment>\r\n                </employment-card>\r\n            </employment-cardset>\r\n        </section>\r\n    </section>\r\n    <section class=\"right\">\r\n    <skill-card class=\"RpgUiBox\" title=\"Primary Professional Qualifications\">\r\n        <skill name=\"A Nerd’s eye for organization.\" level=\"3\">\r\n        My career as a QA professional and software developer, and my profound respect for the libraries and librarians I have relied on all my life, have left me with a deep desire to see everything in its place so everyone can easily find exactly what they need. I will be happy to develop useful and accessible displays and storage both online and off for all your products. For an example of what I’d love to work on, see <a href=\"https://www.youtube.com/watch?v=l9AqYaSRjw0\">Adam Savage’s workshop organization project</a>; that’s the level of ‘right at hand’ I want everyone to have, wherever I work.\r\n        </skill>\r\n        <skill name=\"Helpful and courteous sales person.\" level=\"4\">\r\n        I’ve worked front desk at service businesses and worked the floor in retail previously, and successfully pitched ideas for startup companies to investors. I’ve had experience dealing with irate, frustrated and confused customers, and have been able to come to terms with all of them.\r\n        </skill>\r\n        <skill name=\"Extensive website development skills.\" level=\"4\">\r\n        I’ve been working on websites for twenty years. I’m in the midst of updating my skills to the latest the web has to offer; I’m a skilled angular developer and currently developing (including this site) in Angular 2. I’m happy to put that to work for your store, help you develop a one of a kind website experience for your store.\r\n        </skill>\r\n        <skill name=\"Computer networking expert.\" level=\"4\">\r\n        I can’t fix every computer issue, but I can keep machines talking to each other. If you are looking at expanding your operation to more than one store, I can help. \r\n        </skill>\r\n    </skill-card>\r\n    <skill-card  class=\"RpgUiBox\" title=\"Additional skills, a whole career to draw skill from\">\r\n        <skill name=\"14 Years Quality Assurance Experience\" level=\"5\">\r\n        Development of QA processes in software development startups, redevelopment of QA processes inside multiple corporate environments. Team lead in multiple organizations, including  project management and process documentation as well as technical leadership and training. Extensive experience with work in a heterogeneous web development environment.\r\n        </skill>\r\n        <skill name=\"22 Years Software Development Experience\" level=\"5\">\r\n        Web Development (client and server, javascript and ruby), Test Automation (unit, integration, end-to-end, javascript and ruby), Game Development (Unity, C#). Current focus: Angular2 clients, Node.js/Express.js or servers, Firebase as a backend for rapid prototyping.\r\n        </skill>\r\n    </skill-card>\r\n    <skill-key></skill-key>\r\n    </section>\r\n</section>"

/***/ },

/***/ 729:
/***/ function(module, exports) {

	module.exports = "@font-face {\r\n    font-family: 'BitFont';\r\n    src: url(/assets/fonts/PixelDigivolve.otf);\r\n}\r\n\r\nhtml, body{\r\n  height: 100%;\r\n  width: 100%;\r\n  margin: 0;\r\n  padding: 0;\r\n  min-height: 100vh;\r\n  min-width: 100vw;\r\n  font-family: \"BitFont\", Arial, Helvetica, sans-serif;\r\n  background-color: black;\r\n}\r\n\r\n.RpgUiBox {\r\n  color: rgb(240,240,240);\r\n\r\n  border-radius: 15px;\r\n  box-sizing: border-box;\r\n  margin: 10px;\r\n  box-shadow: 0 0 3px 4px white, 0 0 0 4px black, inset 0 0 3px 4px white, inset 0 0 0 4px black, 2px 2px 2px 0 black;\r\n\r\n  background-color: blue;\r\n  background: -moz-linear-gradient(top,  #7db9e8 0%, #2989d8 50%, #1e5799 100%); /* FF3.6-15 */\r\n  background: -webkit-linear-gradient(top,  #7db9e8 0%,#2989d8 50%,#1e5799 100%); /* Chrome10-25,Safari5.1-6 */\r\n  background: linear-gradient(to bottom,  #7db9e8 0%,#2989d8 50%,#1e5799 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */\r\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#7db9e8', endColorstr='#1e5799',GradientType=0 ); /* IE6-9 */\r\n  padding: 10px;\r\n  flex: 1;\r\n  overflow-y: auto;\r\n  overflow-x: hidden;\r\n}\r\n\r\n.RpgUiBox h1, .RpgUiBox h2 {\r\n  text-shadow: 3px 4px 0px black;\r\n  clear: both;\r\n}\r\n\r\n\r\n\r\n.modal{\r\n  z-index: 10;\r\n  position: fixed;\r\n  width: 85%;\r\n  height: 85%;\r\n  top: 12.5%;\r\n  left: 12.5%;\r\n  margin: 0px;\r\n  padding: 0px;\r\n\r\n    color: rgb(240,240,240);\r\n\r\n  border-radius: 15px;\r\n  box-sizing: border-box;\r\n  margin: 10px;\r\n  box-shadow: 0 0 3px 4px white, 0 0 0 4px black, inset 0 0 3px 4px white, inset 0 0 0 4px black, 2px 2px 2px 0 black;\r\n\r\n  background-color: blue;\r\n  background: -moz-linear-gradient(top,  #7db9e8 0%, #2989d8 50%, #1e5799 100%); /* FF3.6-15 */\r\n  background: -webkit-linear-gradient(top,  #7db9e8 0%,#2989d8 50%,#1e5799 100%); /* Chrome10-25,Safari5.1-6 */\r\n  background: linear-gradient(to bottom,  #7db9e8 0%,#2989d8 50%,#1e5799 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */\r\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#7db9e8', endColorstr='#1e5799',GradientType=0 ); /* IE6-9 */\r\n  padding: 10px;\r\n  overflow-y: auto;\r\n  overflow-x: hidden;\r\n}\r\n\r\n.modal-body {\r\n    overflow-y: auto;\r\n}\r\n\r\n\r\n\r\n.modal-backdrop{\r\n    background-color: black;\r\n    opacity: 0.5;\r\n    position: fixed;\r\n    z-index: 5;\r\n    width: 100vw;\r\n    height: 100vh;\r\n    cursor: pointer;\r\n}\r\n\r\n\r\n.rpg-resume {\r\n    position: absolute;\r\n    box-sizing: border-box;\r\n    height: 100vh;\r\n    min-height: 100vh;\r\n    overflow: hidden;\r\n    margin: 0;\r\n    padding: 0;\r\n    display: flex;\r\n    flex-direction: row;\r\n}\r\n\r\n.split-left-vertical {\r\n    width: 100%;\r\n    height: 100%;\r\n    display: flex;\r\n    margin: 0;\r\n    padding: 0;\r\n    flex-direction: column;\r\n    \r\n    flex: 0 0 66%;\r\n}\r\n\r\n\r\n.top-left {\r\n    width: 100%;\r\n    margin: 0;\r\n    padding: 0;\r\n    flex-direction: row;\r\n    display: flex;\r\n    align-items: stretch;\r\n    -webkit-box-align-content: stretch;\r\n    flex-basis: 66%;\r\n}\r\n\r\n.bottom-left {\r\n    height: 50%;\r\n    flex-basis: 33%;\r\n}\r\n\r\nemployment-cardset {\r\n        display: flex;\r\n        width: 95%;\r\n        height: 80%;\r\n        margin: 0;\r\n        padding: 0;\r\n}\r\n\r\nemployment-card{\r\n    flex: 1 0 1%;\r\n}\r\n\r\n.employment-nav {\r\n    width: 95%;\r\n    height: 95%;\r\n    color: rgb(240,240,240);\r\n\r\n  border-radius: 15px;\r\n  box-sizing: border-box;\r\n  margin: 15px;\r\n  box-shadow: 0 0 3px 4px white, 0 0 0 4px black, inset 0 0 3px 4px white, inset 0 0 0 4px black, 2px 2px 2px 0 black;\r\n\r\n  background-color: blue;\r\n  background: -moz-linear-gradient(top,  #7db9e8 0%, #2989d8 50%, #1e5799 100%); /* FF3.6-15 */\r\n  background: -webkit-linear-gradient(top,  #7db9e8 0%,#2989d8 50%,#1e5799 100%); /* Chrome10-25,Safari5.1-6 */\r\n  background: linear-gradient(to bottom,  #7db9e8 0%,#2989d8 50%,#1e5799 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */\r\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#7db9e8', endColorstr='#1e5799',GradientType=0 ); /* IE6-9 */\r\n}\r\n\r\n.right {\r\n    box-sizing: border-box;\r\n    overflow-y: auto;\r\n    height: 100%;\r\n    display: flex;\r\n    margin: 0;\r\n    padding: 0;\r\n    flex-direction: column;\r\n    \r\n    flex: 0 0 33%;\r\n}\r\n\r\nbio-card {\r\n    position: relative;\r\n    overflow: hidden !important;\r\n}\r\n\r\nbio-card:before {\r\n    content:'';\r\n    width:100%;\r\n    height:100%;    \r\n    position:absolute;\r\n    left:0;\r\n    top:0;\r\n    background:linear-gradient(transparent 45%, #1e5799 85%, transparent 85.1%);\r\n    pointer-events: none;\r\n    margin-left: 3px;\r\n    margin-right: 3px;\r\n}\r\n\r\nbio-card > button {\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 15%;\r\n    bottom: 0;\r\n    left: 0;\r\n    font-family: \"BitFont\", Arial, Helvetica, sans-serif;\r\n    font-size: large;\r\n\r\n    color: rgb(240,240,240);\r\n    border-radius: 10px;\r\n    box-sizing: border-box;\r\n    box-shadow: 0 0 3px 4px white, 0 0 0 4px black, inset 0 0 3px 4px white, inset 0 0 0 4px black, 2px 2px 2px 0 black;\r\n\r\n    background-color: blue;\r\n    background: -moz-linear-gradient(top,  #7db9e8 0%, #2989d8 50%, #1e5799 100%); /* FF3.6-15 */\r\n    background: -webkit-linear-gradient(top,  #7db9e8 0%,#2989d8 50%,#1e5799 100%); /* Chrome10-25,Safari5.1-6 */\r\n    background: linear-gradient(to bottom,  #7db9e8 0%,#2989d8 50%,#1e5799 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */\r\n    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#7db9e8', endColorstr='#1e5799',GradientType=0 ); /* IE6-9 */\r\n    padding: 5px;\r\n    flex: 1;\r\n        \r\n}\r\n\r\nrpg-modal button {\r\n    width: 100%;\r\n    font-family: \"BitFont\", Arial, Helvetica, sans-serif;\r\n    font-size: large;\r\n\r\n    color: rgb(240,240,240);\r\n    border-radius: 10px;\r\n    box-sizing: border-box;\r\n    box-shadow: 0 0 3px 4px white, 0 0 0 4px black, inset 0 0 3px 4px white, inset 0 0 0 4px black, 2px 2px 2px 0 black;\r\n\r\n    background-color: blue;\r\n    background: -moz-linear-gradient(top,  #7db9e8 0%, #2989d8 50%, #1e5799 100%); /* FF3.6-15 */\r\n    background: -webkit-linear-gradient(top,  #7db9e8 0%,#2989d8 50%,#1e5799 100%); /* Chrome10-25,Safari5.1-6 */\r\n    background: linear-gradient(to bottom,  #7db9e8 0%,#2989d8 50%,#1e5799 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */\r\n    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#7db9e8', endColorstr='#1e5799',GradientType=0 ); /* IE6-9 */\r\n    padding: 5px;\r\n}\r\n\r\n\r\ntitle-card h1 {\r\n  font-size: 36px;\r\n  border-radius: 15px;\r\n  box-sizing: border-box;\r\n  margin: 10px;\r\n  box-shadow: 0 0 3px 4px white, 0 0 0 4px black, inset 0 0 3px 4px white, inset 0 0 0 4px black, 2px 2px 2px 0 black;\r\n\r\n  background-color: blue;\r\n  background: -moz-linear-gradient(top,  #7db9e8 0%, #2989d8 50%, #1e5799 100%); /* FF3.6-15 */\r\n  background: -webkit-linear-gradient(top,  #7db9e8 0%,#2989d8 50%,#1e5799 100%); /* Chrome10-25,Safari5.1-6 */\r\n  background: linear-gradient(to bottom,  #7db9e8 0%,#2989d8 50%,#1e5799 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */\r\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#7db9e8', endColorstr='#1e5799',GradientType=0 ); /* IE6-9 */\r\n\r\n  word-spacing: 99999px;\r\n  padding: 10px;\r\n}\r\n\r\ntitle-card h2 {\r\n    max-width: 46%;\r\n    font-size: 12px;\r\n    display: inline-block;\r\n    border-radius: 5px;\r\n  box-sizing: border-box;\r\n  padding: 8px;\r\n  box-shadow: 0 0 3px 4px white, 0 0 0 4px black, inset 0 0 3px 4px white, inset 0 0 0 4px black, 2px 2px 2px 0 black;\r\n  text-baseline: top;\r\n\r\n  background-color: blue;\r\n  background: -moz-linear-gradient(top,  #7db9e8 0%, #2989d8 50%, #1e5799 100%); /* FF3.6-15 */\r\n  background: -webkit-linear-gradient(top,  #7db9e8 0%,#2989d8 50%,#1e5799 100%); /* Chrome10-25,Safari5.1-6 */\r\n  background: linear-gradient(to bottom,  #7db9e8 0%,#2989d8 50%,#1e5799 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */\r\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#7db9e8', endColorstr='#1e5799',GradientType=0 ); /* IE6-9 */\r\n\r\n}\r\n\r\n.profileIcon {\r\n    float: left;\r\n    margin-right: 20px;\r\n    margin-top: -10px;\r\n}\r\n\r\n.emailIcon {\r\n    width: 54px;\r\n    height: 31px;\r\n}\r\n\r\n.skillContainer{\r\n    display: flex;\r\n    border-top: 3px inset black;\r\n    padding-top: 4px;\r\n    padding-bottom: 4px;\r\n    cursor: pointer;\r\n}\r\n\r\n.skillDisplay, .levelDisplay {\r\n    flex: 1 0 49%;\r\n}\r\n\r\nskill-key section.RpgUiBox {\r\n    overflow: hidden !important;\r\n}\r\nskill-key img{\r\n    display: block;\r\n    width: 300px;\r\n    margin: auto;\r\n}\r\n\r\n.nav-cards li{\r\n  display: inline-block;\r\n  border-radius: 5px;\r\n  box-sizing: border-box;\r\n  padding: 8px;\r\n  margin-right: 10px;\r\n  box-shadow: 0 0 3px 4px white, 0 0 0 4px black, inset 0 0 3px 4px white, inset 0 0 0 4px black, 2px 2px 2px 0 black;\r\n  text-baseline: top;\r\n\r\n  background-color: blue;\r\n  background: -moz-linear-gradient(top,  #7db9e8 0%, #2989d8 50%, #1e5799 100%); /* FF3.6-15 */\r\n  background: -webkit-linear-gradient(top,  #7db9e8 0%,#2989d8 50%,#1e5799 100%); /* Chrome10-25,Safari5.1-6 */\r\n  background: linear-gradient(to bottom,  #7db9e8 0%,#2989d8 50%,#1e5799 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */\r\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#7db9e8', endColorstr='#1e5799',GradientType=0 ); /* IE6-9 */\r\n}\r\n\r\n.nav-cards li,\r\n.nav-cards li a, \r\n.nav-cards li a:active, \r\n.nav-cards li a:hover,\r\n.nav-cards li a:visited,\r\n.nav-cards li a:focus\r\n{\r\n    color: rgb(240,240,240);\r\n    cursor: pointer;\r\n}"

/***/ }

});
//# sourceMappingURL=main.map