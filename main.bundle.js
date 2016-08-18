var ac_main =
webpackJsonpac__name_([2],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/*
	 * Providers provided by Angular
	 */
	var platform_browser_dynamic_1 = __webpack_require__(333);
	/*
	* Platform and Environment
	* our providers/directives/pipes
	*/
	var browser_1 = __webpack_require__(524);
	var environment_1 = __webpack_require__(525);
	/*
	* App Component
	* our top level component that holds all of our components
	*/
	var app_1 = __webpack_require__(512);
	/*
	 * Bootstrap our Angular app with a top level component `App` and inject
	 * our Services and Providers into Angular's dependency injection
	 */
	function main(initialHmrState) {
	    return platform_browser_dynamic_1.bootstrap(app_1.App, browser_1.PLATFORM_PROVIDERS.concat(environment_1.ENV_PROVIDERS, app_1.APP_PROVIDERS))
	        .then(environment_1.decorateComponentRef)
	        .catch(function (err) { return console.error(err); });
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
	    var ngHmr = require('angular2-hmr');
	    ngHmr.hotModuleReplacement(main, module);
	}
	else {
	    // bootstrap when document is ready
	    document.addEventListener('DOMContentLoaded', function () { return main(); });
	}
	

/***/ },

/***/ 102:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(1);
	var core_2 = __webpack_require__(1);
	// Borrowed with open source permission from 
	//https://github.com/pleerock/ng2-modal/blob/master/src/Modal.ts
	var OPEN_CLASS = 'modal-open';
	var CLOSE_CLASS = 'modal-close';
	var DIALOG_CLASS = 'modal-dialog';
	var RpgModal = (function () {
	    // -------------------------------------------------------------------------
	    // Constructor
	    // -------------------------------------------------------------------------
	    function RpgModal() {
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
	    RpgModal.prototype.ngOnDestroy = function () {
	        if (this.backdropElement && this.backdropElement.parentNode === document.body)
	            document.body.removeChild(this.backdropElement);
	    };
	    // -------------------------------------------------------------------------
	    // Public Methods
	    // -------------------------------------------------------------------------
	    RpgModal.prototype.open = function () {
	        var _this = this;
	        var args = [];
	        for (var _i = 0; _i < arguments.length; _i++) {
	            args[_i - 0] = arguments[_i];
	        }
	        if (this.isOpened)
	            return;
	        this.isOpened = true;
	        this.onOpen.emit(args);
	        document.body.appendChild(this.backdropElement);
	        window.setTimeout(function () { return _this.modalRoot.nativeElement.focus(); }, 0);
	        document.body.classList.add(OPEN_CLASS);
	        document.body.classList.remove(CLOSE_CLASS);
	    };
	    RpgModal.prototype.close = function () {
	        var args = [];
	        for (var _i = 0; _i < arguments.length; _i++) {
	            args[_i - 0] = arguments[_i];
	        }
	        if (!this.isOpened)
	            return;
	        this.isOpened = false;
	        this.onClose.emit(args);
	        document.body.removeChild(this.backdropElement);
	        document.body.classList.remove(OPEN_CLASS);
	        document.body.classList.add(CLOSE_CLASS);
	    };
	    // -------------------------------------------------------------------------
	    // Private Methods
	    // -------------------------------------------------------------------------
	    RpgModal.prototype.preventClosing = function (event) {
	        event.stopPropagation();
	    };
	    RpgModal.prototype.createBackDrop = function () {
	        var _this = this;
	        this.backdropElement = document.createElement("div");
	        this.backdropElement.classList.add("modal-backdrop");
	        this.backdropElement.classList.add("fade");
	        this.backdropElement.classList.add("in");
	        this.backdropElement.addEventListener('click', function () { console.log("Clicked Outside"); _this.close(); });
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
	                    core_2.state('open', core_2.style({ transform: 'scale(1)', display: 'block' })),
	                    core_2.state('closed', core_2.style({ display: 'none' })),
	                    core_2.transition('* => open', [
	                        core_2.animate(500, core_2.keyframes([
	                            core_2.style({ opacity: 0, transform: 'scale(0.1) translateY(100vh)', display: 'block', offset: 0 }),
	                            core_2.style({ opacity: 1, transform: 'scale(1.2) translateY(0)', offset: 0.7 }),
	                            core_2.style({ opacity: 1, transform: 'scale(1) ', offset: 1.0 })
	                        ]))
	                    ]),
	                    core_2.transition('open => closed', [
	                        core_2.animate(250, core_2.keyframes([
	                            core_2.style({ opacity: 1, transform: 'scale(1) translateX(0)', offset: 0 }),
	                            core_2.style({ opacity: 1, transform: 'scale(1.2) translateX(30%)', offset: 0.3 }),
	                            core_2.style({ opacity: 0, transform: 'scale(0.1) translateX(100%)', offset: 0.99 }),
	                            core_2.style({ offset: 1, display: 'none' })
	                        ]))
	                    ])
	                ])
	            ],
	            selector: "rpg-modal",
	            template: "\n<div [@openClose]=\"isOpened ? 'open' : 'closed'\" class=\"modal\" \n     tabindex=\"-1\"\n     role=\"dialog\"\n     #modalRoot\n     (keydown.esc)=\"closeOnEscape ? close() : 0\"\n     [ngClass]=\"{ in: isOpened, fade: isOpened, out: !isOpened, fadeOut: !isOpened }\">\n    <div [class]=\"modalClasses\" (click)=\"preventClosing($event)\">\n        <div class=\"modal-content\" tabindex=\"0\">\n            <div class=\"modal-header\">\n                <button *ngIf=\"!hideCloseButton\" type=\"button\" class=\"close\" data-dismiss=\"modal\" [attr.aria-label]=\"cancelButtonLabel || 'Close'\" (click)=\"close()\"><span aria-hidden=\"true\">&times;</span></button>\n                <h4 class=\"modal-title\" *ngIf=\"title\">{{ title }}</h4>\n                <ng-content select=\"modal-header\"></ng-content>\n            </div>\n            <div class=\"modal-body\">\n                <ng-content select=\"modal-content\"></ng-content>\n            </div>\n            <div class=\"modal-footer\">\n                <ng-content select=\"modal-footer\"></ng-content>\n                <button *ngIf=\"cancelButtonLabel\" type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\" (click)=\"close()\">{{ cancelButtonLabel }}</button>\n                <button *ngIf=\"submitButtonLabel\" type=\"button\" class=\"btn btn-primary\" (click)=\"onSubmit.emit(undefined)\">{{ submitButtonLabel }}</button>\n            </div>\n        </div>\n    </div>\n</div>\n"
	        }), 
	        __metadata('design:paramtypes', [])
	    ], RpgModal);
	    return RpgModal;
	    var _a;
	}());
	exports.RpgModal = RpgModal;
	

/***/ },

/***/ 350:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var rpg_resume_1 = __webpack_require__(513);
	exports.routes = [
	    { path: '', component: rpg_resume_1.RpgResume },
	];
	

/***/ },

/***/ 351:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(1);
	var rpg_modal_component_1 = __webpack_require__(102);
	var EmploymentCard = (function () {
	    function EmploymentCard() {
	    }
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
	            template: "\n      \n   <rpg-modal hideCloseButton='true' modalClass=\"RpgUiBox\" closeOnEscape=\"true\" closeOnOutsideClick=\"true\" #employmentDialog>\n        <modal-header>\n            <h1>{{title}}</h1>\n            <h2>{{subtitle}}</h2>\n        </modal-header>\n        <modal-content>\n          <ng-content></ng-content>\n        </modal-content>\n        <modal-footer>\n            <button (click)=\"employmentDialog.close()\">Close</button>\n        </modal-footer>\n    </rpg-modal>\n\n    <button class=\"employment-nav\" (click)='employmentDialog.open()'>\n        <h1>{{title}}</h1>\n        <h2>{{subtitle}}</h2>\n    </button>\n    \n    "
	        }), 
	        __metadata('design:paramtypes', [])
	    ], EmploymentCard);
	    return EmploymentCard;
	}());
	exports.EmploymentCard = EmploymentCard;
	

/***/ },

/***/ 352:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/*
	 * These are globally available directives in any template
	 */
	// Angular 2
	var core_1 = __webpack_require__(1);
	// Angular 2 Router
	var router_1 = __webpack_require__(146);
	// Angular 2 forms
	// application_directives: directives that are global through out the application
	exports.APPLICATION_DIRECTIVES = router_1.ROUTER_DIRECTIVES.slice();
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
	var core_1 = __webpack_require__(1);
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
	var common_1 = __webpack_require__(39);
	// Angular 2 Http
	var http_1 = __webpack_require__(324);
	// Angular 2 Router
	var router_1 = __webpack_require__(146);
	var app_routes_1 = __webpack_require__(350);
	// AngularClass
	//import { provideWebpack } from '@angularclass/webpack-toolkit';
	//import { providePrefetchIdleCallbacks } from '@angularclass/request-idle-callback';
	/*
	* Application Providers/Directives/Pipes
	* providers/directives/pipes that only live in our browser environment
	*/
	exports.APPLICATION_PROVIDERS = [
	    router_1.provideRouter(app_routes_1.routes)
	].concat(http_1.HTTP_PROVIDERS, [
	    { provide: common_1.LocationStrategy, useClass: common_1.PathLocationStrategy }
	]);
	exports.PROVIDERS = exports.APPLICATION_PROVIDERS.slice();
	

/***/ },

/***/ 511:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/*
	 * Angular 2 decorators and services
	 */
	var core_1 = __webpack_require__(1);
	/*
	 * App Component
	 * Top Level Component
	 */
	var App = (function () {
	    function App() {
	    }
	    App = __decorate([
	        core_1.Component({
	            selector: 'app',
	            encapsulation: core_1.ViewEncapsulation.None,
	            styles: [
	                __webpack_require__(527)
	            ],
	            template: "\n    <main>\n      <router-outlet></router-outlet>\n    </main>\n  "
	        }), 
	        __metadata('design:paramtypes', [])
	    ], App);
	    return App;
	}());
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
	var core_1 = __webpack_require__(1);
	var view_components_1 = __webpack_require__(518);
	var RpgResume = (function () {
	    function RpgResume() {
	    }
	    RpgResume = __decorate([
	        core_1.Component({
	            selector: 'rpg-resume',
	            encapsulation: core_1.ViewEncapsulation.None,
	            directives: [view_components_1.Skill, view_components_1.SkillCard, view_components_1.SkillKey, view_components_1.BiographyCard, view_components_1.Employment, view_components_1.EmploymentCard, view_components_1.EmploymentCardSet, view_components_1.TitleCard],
	            //styles: [`./rpg-resume.css`],
	            template: __webpack_require__(529)
	        }), 
	        __metadata('design:paramtypes', [])
	    ], RpgResume);
	    return RpgResume;
	}());
	exports.RpgResume = RpgResume;
	

/***/ },

/***/ 515:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(1);
	//import {FullScreenTextPanel} from './full-screen-text-panel.component';
	//import {Modal} from 'ng2-modal';
	var rpg_modal_component_1 = __webpack_require__(102);
	var Paragraph = (function () {
	    function Paragraph(elm, r) {
	        this.elm = elm;
	        this.r = r;
	    }
	    Paragraph.prototype.ngAfterContentInit = function () {
	        this.content = this.elm.nativeElement.innerText; //This may break in future
	    };
	    Paragraph = __decorate([
	        core_1.Directive({
	            selector: 'p'
	        }), 
	        __metadata('design:paramtypes', [(typeof (_a = typeof core_1.ElementRef !== 'undefined' && core_1.ElementRef) === 'function' && _a) || Object, (typeof (_b = typeof core_1.Renderer !== 'undefined' && core_1.Renderer) === 'function' && _b) || Object])
	    ], Paragraph);
	    return Paragraph;
	    var _a, _b;
	}());
	var BiographyCard = (function () {
	    function BiographyCard() {
	    }
	    BiographyCard.prototype.ngAfterContentInit = function () {
	    };
	    __decorate([
	        core_1.ContentChildren(Paragraph), 
	        __metadata('design:type', (typeof (_a = typeof core_1.QueryList !== 'undefined' && core_1.QueryList) === 'function' && _a) || Object)
	    ], BiographyCard.prototype, "children", void 0);
	    BiographyCard = __decorate([
	        core_1.Component({
	            selector: 'bio-card',
	            directives: [rpg_modal_component_1.RpgModal, Paragraph],
	            template: "\n    <button (click)=\"bioModal.open()\">Read More</button>\n    <h2>Biography</h2>\n    <ng-content></ng-content>\n    \n    <rpg-modal modalClass=\"RpgUiBox\" hideCloseButton=\"true\" closeOnEscape=\"true\" closeOnOutsideClick=\"true\" #bioModal>\n        <modal-header>\n            Biography\n        </modal-header>\n        <modal-content>\n            <p *ngFor=\"let child of children\">\n                {{child.content}}\n            </p>\n        </modal-content>\n        <modal-footer>\n            <button (click)=\"bioModal.close()\">Close</button>\n        </modal-footer>\n    </rpg-modal>\n    "
	        }), 
	        __metadata('design:paramtypes', [])
	    ], BiographyCard);
	    return BiographyCard;
	    var _a;
	}());
	exports.BiographyCard = BiographyCard;
	

/***/ },

/***/ 516:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(1);
	var employment_card_component_1 = __webpack_require__(351);
	var rpg_modal_component_1 = __webpack_require__(102);
	var EmploymentCardSet = (function () {
	    function EmploymentCardSet() {
	    }
	    EmploymentCardSet = __decorate([
	        core_1.Component({
	            directives: [employment_card_component_1.EmploymentCard, rpg_modal_component_1.RpgModal],
	            selector: 'employment-cardset',
	            template: "\n<ng-content></ng-content>\n"
	        }), 
	        __metadata('design:paramtypes', [])
	    ], EmploymentCardSet);
	    return EmploymentCardSet;
	}());
	exports.EmploymentCardSet = EmploymentCardSet;
	

/***/ },

/***/ 517:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(1);
	var Employment = (function () {
	    function Employment() {
	    }
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
	            styles: ["\n    section {border-bottom: 1px solid black; position: relative;}\n    header {width: 30%; margin-top: -0.8em; margin-left: 1.5em; \n        background-color: white; border-radius: 0px 0px 10px 10px; color: black;\n        text-align: center;}\n    .JobTitle {\n        font-size: xx-large;\n        text-align: center;\n        border-bottom: 1px solid black;\n        margin: 0;\n        padding: 10px 0;\n\n    }\n    .Employer, .Location{\n        flex: 1;\n        height: 100%;\n        text-align: center;\n        font-size: larger;\n        margin: 0;\n        padding: 0;\n        padding: 0.3em 0;\n    }\n    .Employer {\n        border-right: 1px solid black;\n    }\n    "],
	            template: "<section class=\"RpgUiBox\">\n                <header>\n                {{startDate}} through {{endDate}}</header>\n                <main>\n                <h1 class=\"JobTitle\">{{jobTitle}}</h1>\n                <div style=\"display: flex; width; 100%; border-bottom: 1px solid black;\">\n                    <h1 class=\"Employer\">Employer: <br>{{employer}}</h1>\n                    <h1 class=\"Location\">Location: <br>{{location}}</h1>\n                </div>\n                <ng-content></ng-content>\n                </main>\n            </section>"
	        }), 
	        __metadata('design:paramtypes', [])
	    ], Employment);
	    return Employment;
	}());
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
	__export(__webpack_require__(523));
	__export(__webpack_require__(520));
	__export(__webpack_require__(516));
	__export(__webpack_require__(102));
	

/***/ },

/***/ 519:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(1);
	var SkillCard = (function () {
	    function SkillCard() {
	    }
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', String)
	    ], SkillCard.prototype, "title", void 0);
	    SkillCard = __decorate([
	        core_1.Component({
	            directives: [],
	            selector: 'skill-card',
	            template: "\n    <h1>{{title}}</h1>\n    <div>\n        <ng-content></ng-content>\n    </div>\n    "
	        }), 
	        __metadata('design:paramtypes', [])
	    ], SkillCard);
	    return SkillCard;
	}());
	exports.SkillCard = SkillCard;
	

/***/ },

/***/ 520:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(1);
	var SkillKey = (function () {
	    function SkillKey() {
	    }
	    SkillKey = __decorate([
	        core_1.Component({
	            directives: [],
	            selector: 'skill-key',
	            template: "\n    <section class=\"RpgUiBox\">\n    <img src=\"assets/img/skillskey.png\"/>\n    </section>\n    "
	        }), 
	        __metadata('design:paramtypes', [])
	    ], SkillKey);
	    return SkillKey;
	}());
	exports.SkillKey = SkillKey;
	

/***/ },

/***/ 521:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(1);
	var rpg_modal_component_1 = __webpack_require__(102);
	var Skill = (function () {
	    function Skill() {
	        this.showSkill = false;
	        this.currentAnim = "hide";
	    }
	    Skill.prototype.toggleShow = function () {
	        this.showSkill = !this.showSkill;
	        this.currentAnim = this.showSkill ? "show" : "hide";
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
	            template: "\n    <section (click)=\"skillModal.open()\" class=\"skillContainer\">\n      <div class=\"skillDisplay\">{{name}}</div> <div class=\"levelDisplay\"><img [src]=\"'assets/img/skills' + level + '.png'\"/></div>\n      \n   <rpg-modal modalClass=\"RpgUiBox\"  hideCloseButton=\"true\" closeOnEscape=\"true\" closeOnOutsideClick=\"true\" #skillModal>\n        <modal-header>\n            {{name}}\n        </modal-header>\n        <modal-content>\n          <ng-content></ng-content>\n        </modal-content>\n        <modal-footer>\n            <button (click)=\"skillModal.close()\">Close</button>\n        </modal-footer>\n    </rpg-modal>\n\n    ",
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
	    return Skill;
	}());
	exports.Skill = Skill;
	

/***/ },

/***/ 522:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(1);
	var TitleBox = (function () {
	    function TitleBox() {
	    }
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Object)
	    ], TitleBox.prototype, "title", void 0);
	    TitleBox = __decorate([
	        core_1.Component({
	            selector: "title-box",
	            template: "\n        <section class=\"title-box RpgUiBox\">\n        <h1 class=\"title\">{{title}}</h1>\n        <ng-content></ng-content>\n        </section>\n    ",
	            styles: ["\n    section.title-box {\n        position: relative;\n        text-align: center;\n    }\n\n    h1.title{\n        font-size: small;\n        background-color: blue;\n        position: absolute;\n        top: -2em;\n        left: 1.5em;\n    }\n    "]
	        }), 
	        __metadata('design:paramtypes', [])
	    ], TitleBox);
	    return TitleBox;
	}());
	exports.TitleBox = TitleBox;
	

/***/ },

/***/ 523:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(1);
	var title_box_component_1 = __webpack_require__(522);
	var TitleCard = (function () {
	    function TitleCard() {
	        this.seekingArray = [];
	        this.mailto = "mailto:" + this.email;
	        this.phoneto = "tel:" + this.phone;
	        if (this.seeking) {
	            this.seekingArray = this.seeking.split(', ');
	        }
	    }
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
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', String)
	    ], TitleCard.prototype, "careerClass", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', String)
	    ], TitleCard.prototype, "seeking", void 0);
	    TitleCard = __decorate([
	        core_1.Component({
	            directives: [title_box_component_1.TitleBox],
	            selector: 'title-card',
	            template: "\n    <h1 class=\"image-header\"><img class=\"profileIcon\" src=\"assets/img/HunterHunnieSprite.png\"/> {{name}}</h1>\n    <p class=\"contact-me\"> <img src=\"assets/img/email.png\" alt=\"Email\"/> <a [href]=\"mailto\">{{email}}</a></p>\n    <p class=\"contact-me\"> <img src=\"assets/img/phone.png\" alt=\"Phone\"> <a [href]=\"phoneto\">{{phone}}</a></p>\n    <title-box title=\"Career\">\n    Troubleshooter\n    </title-box>\n    <title-box class=\"seeking\" title=\"Seeking!\">\n        <p>Retail</p>\n        <p>Web Development</p>\n    </title-box>\n"
	        }), 
	        __metadata('design:paramtypes', [])
	    ], TitleCard);
	    return TitleCard;
	}());
	exports.TitleCard = TitleCard;
	//<img class="emailIcon" src="assets/img/email.png"/>
	//<img class="phoneIcon" src="assets/img/phone.png"/> 
	

/***/ },

/***/ 524:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(352));
	__export(__webpack_require__(353));
	__export(__webpack_require__(354));
	var browser_directives_2 = __webpack_require__(352);
	var browser_pipes_2 = __webpack_require__(353);
	var browser_providers_2 = __webpack_require__(354);
	exports.PLATFORM_PROVIDERS = browser_providers_2.PROVIDERS.concat(browser_directives_2.DIRECTIVES, browser_pipes_2.PIPES);
	

/***/ },

/***/ 525:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	// Angular 2
	// rc2 workaround
	var platform_browser_1 = __webpack_require__(84);
	var core_1 = __webpack_require__(1);
	// Environment Providers
	var PROVIDERS = [];
	// Angular debug tools in the dev console
	// https://github.com/angular/angular/blob/86405345b781a9dc2438c0fbe3e9409245647019/TOOLS_JS.md
	var _decorateComponentRef = function identity(value) { return value; };
	if (false) {
	    // Production
	    platform_browser_1.disableDebugTools();
	    core_1.enableProdMode();
	    PROVIDERS = PROVIDERS.slice();
	}
	else {
	    _decorateComponentRef = function (cmpRef) {
	        var _ng = window.ng;
	        platform_browser_1.enableDebugTools(cmpRef);
	        window.ng.probe = _ng.probe;
	        window.ng.coreTokens = _ng.coreTokens;
	        return cmpRef;
	    };
	    // Development
	    PROVIDERS = PROVIDERS.slice();
	}
	exports.decorateComponentRef = _decorateComponentRef;
	exports.ENV_PROVIDERS = PROVIDERS.slice();
	

/***/ },

/***/ 526:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(729)();
	// imports


	// module
	exports.push([module.id, "@font-face {\r\n    font-family: 'BitFont';\r\n    src: url(" + __webpack_require__(528) + ");\r\n}\r\n\r\nhtml, body{\r\n  height: 100%;\r\n  width: 100%;\r\n  margin: 0;\r\n  padding: 0;\r\n  min-height: 100vh;\r\n  min-width: 100vw;\r\n  font-family: \"BitFont\", Arial, Helvetica, sans-serif;\r\n  background-color: black;\r\n}\r\n\r\np, h1, h2, h3, h4, h5, h6 {\r\n    font-family: \"BitFont\", Arial, Helvetica, sans-serif;\r\n}\r\n\r\n.RpgUiBox {\r\n  color: rgb(240,240,240);\r\n\r\n  border-radius: 15px;\r\n  box-sizing: border-box;\r\n  margin: 10px;\r\n  box-shadow: 0 0 3px 4px white, 0 0 0 4px black, inset 0 0 3px 4px white, inset 0 0 0 4px black, 2px 2px 2px 0 black;\r\n\r\n  background-color: blue;\r\n  background: -moz-linear-gradient(top,  #7db9e8 0%, #2989d8 50%, #1e5799 100%); /* FF3.6-15 */\r\n  background: -webkit-linear-gradient(top,  #7db9e8 0%,#2989d8 50%,#1e5799 100%); /* Chrome10-25,Safari5.1-6 */\r\n  background: linear-gradient(to bottom,  #7db9e8 0%,#2989d8 50%,#1e5799 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */\r\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#7db9e8', endColorstr='#1e5799',GradientType=0 ); /* IE6-9 */\r\n  padding: 10px;\r\n  overflow-y: auto;\r\n  overflow-x: hidden;\r\n}\r\n\r\n.RpgUiBox h1, .RpgUiBox h2 {\r\n  text-shadow: 3px 4px 0px black;\r\n  clear: both;\r\n}\r\n\r\n\r\n\r\n.modal{\r\n  z-index: 10;\r\n  position: fixed;\r\n  width: 85%;\r\n  max-height: 85%;\r\n  top: 12.5%;\r\n  left: 12.5%;\r\n  margin: 0px;\r\n  padding: 0px;\r\n\r\n  color: rgb(240,240,240);\r\n\r\n  border-radius: 15px;\r\n  box-sizing: border-box;\r\n  margin: 10px;\r\n  box-shadow: 0 0 3px 4px white, 0 0 0 4px black, inset 0 0 3px 4px white, inset 0 0 0 4px black, 2px 2px 2px 0 black;\r\n\r\n  background-color: blue;\r\n  background: -moz-linear-gradient(top,  #7db9e8 0%, #2989d8 50%, #1e5799 100%); /* FF3.6-15 */\r\n  background: -webkit-linear-gradient(top,  #7db9e8 0%,#2989d8 50%,#1e5799 100%); /* Chrome10-25,Safari5.1-6 */\r\n  background: linear-gradient(to bottom,  #7db9e8 0%,#2989d8 50%,#1e5799 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */\r\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#7db9e8', endColorstr='#1e5799',GradientType=0 ); /* IE6-9 */\r\n  padding: 10px;\r\n  overflow-y: auto;\r\n  overflow-x: hidden;\r\n}\r\n\r\n.modal-body {\r\n    overflow-y: auto;\r\n}\r\n\r\n\r\n\r\n.modal-backdrop{\r\n    background-color: black;\r\n    opacity: 0.5;\r\n    position: fixed;\r\n    z-index: 5;\r\n    width: 100vw;\r\n    height: 100vh;\r\n    cursor: pointer;\r\n}\r\n\r\n\r\n.rpg-resume {\r\n    position: absolute;\r\n    box-sizing: border-box;\r\n    height: 100vh;\r\n    min-height: 100vh;\r\n    overflow: hidden;\r\n    margin: 0;\r\n    padding: 0;\r\n    display: flex;\r\n    flex-direction: row;\r\n}\r\n\r\n.split-left-vertical {\r\n    width: 100%;\r\n    height: 100%;\r\n    display: flex;\r\n    margin: 0;\r\n    padding: 0;\r\n    flex-direction: column;\r\n    \r\n    flex: 0 0 66%;\r\n}\r\n\r\n\r\n.top-left {\r\n    width: 100%;\r\n    margin: 0;\r\n    padding: 0;\r\n    flex-direction: row;\r\n    display: flex;\r\n    align-items: stretch;\r\n    -webkit-box-align-content: stretch;\r\n    flex-basis: 66%;\r\n}\r\n\r\n.bottom-left {\r\n    height: 50%;\r\n    flex-basis: 33%;\r\n}\r\n\r\nemployment-cardset {\r\n        display: flex;\r\n        width: 95%;\r\n        height: 80%;\r\n        margin: 0;\r\n        padding: 0;\r\n}\r\n\r\nemployment-card{\r\n    flex: 1 0 1%;\r\n}\r\n\r\n.employment-nav {\r\n    width: 95%;\r\n    height: 95%;\r\n    color: rgb(240,240,240);\r\n\r\n  border-radius: 15px;\r\n  box-sizing: border-box;\r\n  margin: 15px;\r\n  box-shadow: 0 0 3px 4px white, 0 0 0 4px black, inset 0 0 3px 4px white, inset 0 0 0 4px black, 2px 2px 2px 0 black;\r\n\r\n  background-color: blue;\r\n  background: -moz-linear-gradient(top,  #7db9e8 0%, #2989d8 50%, #1e5799 100%); /* FF3.6-15 */\r\n  background: -webkit-linear-gradient(top,  #7db9e8 0%,#2989d8 50%,#1e5799 100%); /* Chrome10-25,Safari5.1-6 */\r\n  background: linear-gradient(to bottom,  #7db9e8 0%,#2989d8 50%,#1e5799 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */\r\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#7db9e8', endColorstr='#1e5799',GradientType=0 ); /* IE6-9 */\r\n\r\n  font-size: large;\r\n}\r\n\r\n.right {\r\n    box-sizing: border-box;\r\n    overflow-y: auto;\r\n    height: 100%;\r\n    display: flex;\r\n    margin: 0;\r\n    padding: 0;\r\n    flex-direction: column;\r\n    \r\n    flex: 0 0 33%;\r\n}\r\n\r\n.right skill-card{\r\n    flex: 5;\r\n}\r\n\r\nbio-card {\r\n    position: relative;\r\n    overflow: hidden !important;\r\n    flex: 2;\r\n}\r\n\r\nbio-card:before {\r\n    content:'';\r\n    width:100%;\r\n    height:100%;    \r\n    position:absolute;\r\n    left:0;\r\n    top:0;\r\n    background:linear-gradient(transparent 45%, #1e5799 85%, transparent 85.1%);\r\n    pointer-events: none;\r\n    margin-left: 3px;\r\n    margin-right: 3px;\r\n}\r\n\r\nbio-card > button {\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 15%;\r\n    bottom: 0;\r\n    left: 0;\r\n    font-family: \"BitFont\", Arial, Helvetica, sans-serif;\r\n    font-size: large;\r\n\r\n    color: rgb(240,240,240);\r\n    border-radius: 10px;\r\n    box-sizing: border-box;\r\n    box-shadow: 0 0 3px 4px white, 0 0 0 4px black, inset 0 0 3px 4px white, inset 0 0 0 4px black, 2px 2px 2px 0 black;\r\n\r\n    background-color: blue;\r\n    background: -moz-linear-gradient(top,  #7db9e8 0%, #2989d8 50%, #1e5799 100%); /* FF3.6-15 */\r\n    background: -webkit-linear-gradient(top,  #7db9e8 0%,#2989d8 50%,#1e5799 100%); /* Chrome10-25,Safari5.1-6 */\r\n    background: linear-gradient(to bottom,  #7db9e8 0%,#2989d8 50%,#1e5799 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */\r\n    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#7db9e8', endColorstr='#1e5799',GradientType=0 ); /* IE6-9 */\r\n    padding: 5px;\r\n    flex: 1;\r\n        \r\n}\r\n\r\nrpg-modal button {\r\n    width: 100%;\r\n    font-family: \"BitFont\", Arial, Helvetica, sans-serif;\r\n    font-size: large;\r\n\r\n    color: rgb(240,240,240);\r\n    border-radius: 10px;\r\n    box-sizing: border-box;\r\n    margin-top: 20px;\r\n    box-shadow: 0 0 3px 4px white, 0 0 0 4px black, inset 0 0 3px 4px white, inset 0 0 0 4px black, 2px 2px 2px 0 black;\r\n\r\n    background-color: blue;\r\n    background: -moz-linear-gradient(top,  #7db9e8 0%, #2989d8 50%, #1e5799 100%); /* FF3.6-15 */\r\n    background: -webkit-linear-gradient(top,  #7db9e8 0%,#2989d8 50%,#1e5799 100%); /* Chrome10-25,Safari5.1-6 */\r\n    background: linear-gradient(to bottom,  #7db9e8 0%,#2989d8 50%,#1e5799 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */\r\n    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#7db9e8', endColorstr='#1e5799',GradientType=0 ); /* IE6-9 */\r\n    padding: 5px;\r\n}\r\n\r\ntitle-card {\r\n      flex: 1 0;\r\n      overflow-y: hidden !important;\r\n}\r\n\r\ntitle-card a{\r\n    color: white;\r\n    font-style: none;\r\n}\r\n\r\ntitle-card h1.image-header {\r\n  font-size: 36px;\r\n  border-radius: 15px;\r\n  box-sizing: border-box;\r\n  margin: 10px;\r\n  box-shadow: 0 0 3px 4px white, 0 0 0 4px black, inset 0 0 3px 4px white, inset 0 0 0 4px black, 2px 2px 2px 0 black;\r\n\r\n  background-color: blue;\r\n  background: -moz-linear-gradient(top,  #7db9e8 0%, #2989d8 50%, #1e5799 100%); /* FF3`6-15 */\r\n  background: -webkit-linear-gradient(top,  #7db9e8 0%,#2989d8 50%,#1e5799 100%); /* Chrome10-25,Safari5.1-6 */\r\n  background: linear-gradient(to bottom,  #7db9e8 0%,#2989d8 50%,#1e5799 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */\r\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#7db9e8', endColorstr='#1e5799',GradientType=0 ); /* IE6-9 */\r\n\r\n  word-spacing: 99999px;\r\n  padding: 10px;\r\n}\r\n\r\n    li {\r\n        text-align: left !important;\r\n    }\r\n\r\n/*title-card h2 {\r\n    max-width: 46%;\r\n    font-size: 12px;\r\n    display: inline-block;\r\n    border-radius: 5px;\r\n  box-sizing: border-box;\r\n  padding: 8px;\r\n  box-shadow: 0 0 3px 4px white, 0 0 0 4px black, inset 0 0 3px 4px white, inset 0 0 0 4px black, 2px 2px 2px 0 black;\r\n  text-baseline: top;\r\n\r\n  background-color: blue;\r\n  background: -moz-linear-gradient(top,  #7db9e8 0%, #2989d8 50%, #1e5799 100%); \r\n  background: -webkit-linear-gradient(top,  #7db9e8 0%,#2989d8 50%,#1e5799 100%); \r\n  background: linear-gradient(to bottom,  #7db9e8 0%,#2989d8 50%,#1e5799 100%);\r\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#7db9e8', endColorstr='#1e5799',GradientType=0 ); \r\n\r\n}*/\r\n\r\n.profileIcon {\r\n    float: left;\r\n    margin-right: 20px;\r\n    margin-top: -10px;\r\n}\r\n\r\n.emailIcon {\r\n    width: 54px;\r\n    height: 31px;\r\n}\r\n\r\n.skillContainer{\r\n    display: flex;\r\n    border-top: 3px inset black;\r\n    padding-top: 4px;\r\n    padding-bottom: 4px;\r\n    cursor: pointer;\r\n}\r\n\r\n.skillDisplay, .levelDisplay {\r\n    flex: 1 0 49%;\r\n}\r\n\r\n\r\nskill-key section.RpgUiBox {\r\n    overflow: hidden !important;\r\n}\r\nskill-key img{\r\n    display: block;\r\n    width: 300px;\r\n    margin: auto;\r\n}\r\n\r\n.nav-cards li{\r\n  display: inline-block;\r\n  border-radius: 5px;\r\n  box-sizing: border-box;\r\n  padding: 8px;\r\n  margin-right: 10px;\r\n  box-shadow: 0 0 3px 4px white, 0 0 0 4px black, inset 0 0 3px 4px white, inset 0 0 0 4px black, 2px 2px 2px 0 black;\r\n  text-baseline: top;\r\n\r\n  background-color: blue;\r\n  background: -moz-linear-gradient(top,  #7db9e8 0%, #2989d8 50%, #1e5799 100%); /* FF3.6-15 */\r\n  background: -webkit-linear-gradient(top,  #7db9e8 0%,#2989d8 50%,#1e5799 100%); /* Chrome10-25,Safari5.1-6 */\r\n  background: linear-gradient(to bottom,  #7db9e8 0%,#2989d8 50%,#1e5799 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */\r\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#7db9e8', endColorstr='#1e5799',GradientType=0 ); /* IE6-9 */\r\n}\r\n\r\n.nav-cards li,\r\n.nav-cards li a, \r\n.nav-cards li a:active, \r\n.nav-cards li a:hover,\r\n.nav-cards li a:visited,\r\n.nav-cards li a:focus\r\n{\r\n    color: rgb(240,240,240);\r\n    cursor: pointer;\r\n}\r\n\r\n.seeking{\r\n    margin: 0;\r\n    padding: 0;\r\n    display: flex;\r\n    flex-direction: column;\r\n    width: 100%;\r\n}\r\n\r\n.seeking p{\r\n    flex: 1;\r\n    display: block;\r\n    text-shadow: 2px 3px 0px black;\r\n    border-top: 1px solid black;\r\n    text-align: center;\r\n    font-weight: bold;\r\n    width: 100%;\r\n    margin: 0;\r\n    padding: 0;\r\n    padding-top: 5px;\r\n    padding-bottom: 5px;\r\n    color: orange;\r\n}\r\n.seeking p:first-of-type{\r\n    border-top: none;\r\n    padding-top: 0 !important;\r\n\r\n}", ""]);

	// exports


/***/ },

/***/ 527:
/***/ function(module, exports, __webpack_require__) {

	// css-to-string-loader: transforms styles from css-loader to a string output

	// Get the styles
	var styles = __webpack_require__(526);

	if (typeof styles === 'string') {
	  // Return an existing string
	  module.exports = styles;
	} else {
	  // Call the custom toString method from css-loader module
	  module.exports = styles.toString();
	}

/***/ },

/***/ 528:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "assets/fonts/PixelDigivolve.otf";

/***/ },

/***/ 529:
/***/ function(module, exports) {

	module.exports = "<section class=\"rpg-resume\">\r\n    <section class=\"split-left-vertical\">\r\n        <section class=\"top-left\">\r\n            <title-card class=\"RpgUiBox\"\r\n                name=\"Hunter Hunnie Thomas\"\r\n                email=\"scrapcupcake@gmail.com\"\r\n                phone=\"503-516-2831\">\r\n                Please use email as the primary countact; phone calls available by appointment\r\n            </title-card>\r\n            <bio-card class=\"RpgUiBox\">\r\n            <p>Hello, I’m Hunter Hunnie Thomas, a transgender/non-binary person. I’m currently homeless and trying to get back to my roots of my working career, retail and website development, to get back on my feet.</p>\r\n\r\n            <p>I’m currently trying to figure out how to get the ergonomics of my disability and computer use to mesh well again, and looking for retail work to fill the time when I can’t be hunched over a laptop to be a good salesperson for stuff I believe in again.</p>\r\n\r\n            </bio-card>\r\n        </section>\r\n        <section class=\"bottom-left RpgUiBox\">\r\n            <employment-cardset>\r\n                <employment-card title=\"Modern Era\">\r\n                    <employment job-title=\"Self Care\"\r\n                    start-date=\"2014 (March)\" end-date=\"Current\" \r\n                    employer=\"Health Recovery/Freelancing\" location=\"Portland, OR and Seattle, WA\">\r\n                    <p>A whole slew of bad luck freelancing and mental health recovery has left me ready to restart my working life, but with just a few resources to do it with.</p>\r\n\r\n                    <p>Ask for the full story in person if you want it :)</p>\r\n                    </employment>\r\n                </employment-card>\r\n\r\n                <employment-card title=\"Startup Era\">\r\n                        <employment job-title=\"Senior QA Automation Consultant\"\r\n                        start-date=\"March 2013\" end-date=\"Feburary 2014\" \r\n                        employer=\"SnapFlow\" location=\"Portland, OR\">\r\n                        <p>Developed a ruby automation framework to test the startup’s extensive REST API, used as a major part of their continuous deployment process alongside their javascript unit tests. Provided QA guidance to two other employees, including full handoff of the framework to my successor.</p>\r\n                        <p>Used the income from this to pay my employees at Fat Cat Gameworks, below.</p>\r\n                        </employment>\r\n                        \r\n                        <employment job-title=\"CEO\"\r\n                        start-date=\"Feburary 2012\" end-date=\"Feburary 2014\" \r\n                        employer=\"Fat Cat GameWorks\" location=\"Portland, OR\">\r\n                        <p>Web application and game developer, general executive do-er. Project manager and business developer for a small, focused game development team, including development of contacts with intellectual property holders and acquisition of intellectual property license agreements. Developing web-based game metric tracking, authentication services, micropayment transaction processing APIs for game software as well as the game’s web presence. Provided C# API client libraries for the highly multi-threaded Unity game engine. Developed game systems and game designs.</p>\r\n                        </employment>\r\n\r\n                        <employment job-title=\"CTO\"\r\n                        start-date=\"August 2011\" end-date=\"Feburary 2012\" \r\n                        employer=\"GuruSignal\" location=\"Portland, OR\">\r\n                        <p>Primary application developer for a technical services/crowdsourced technical support startup consisting of an entirely remote team. Provided project management, website development, and set technical policy. Orchestrated development of new features through TDD and BDD practices, gathered user feedback to improve UX, and integrated graphic designer mock-ups and assets to maximize SEO and decrease page load times. Primary development was done in Ruby and Ruby on Rails, with one component being developed for Android in Java.</p>\r\n                        </employment>\r\n                </employment-card>\r\n\r\n                <employment-card title=\"QA Career Era\">\r\n                        <employment job-title=\"SDET (Software Developer In Test) Level 3\"\r\n                        start-date=\"January 2010\" end-date=\"August 2011\" \r\n                        employer=\"Experis\" location=\"Portland, OR\">\r\n                        <p>QA Team Lead and Test Software Developer. Provided technical experience and insight into testing of web applications to a team of test associates who execute manual tests for a remote client with a testing team in Seattle. Regularly traveled to meet with the client at their Seattle office. Designed and implemented automated testing of web applications using Selenium 2.0/Webdriver, including functional, stress, and load tests and a framework to ease the development of additional tests by junior developers. Configure servers and deploy web applications for testing.</p>\r\n                        <p>Designed and implemented intranet applications for metrics and reporting of ongoing project status, as well as for PC status monitoring and health reporting.</p>\r\n                        </employment>\r\n\r\n                        <employment job-title=\"QA Engineer\"\r\n                        start-date=\"2006\" end-date=\"2010\" \r\n                        employer=\"First Advantage Creditnet\" location=\"Beaverton, OR\">\r\n                        <p>Provided documentation, estimates, work breakdown structures, and team lead duties for teams of one to five QA Engineers for a variety of SDLC models, including waterfall, SCRUM and an amalgam of different agile approaches.</p>\r\n                        <p>Designed and wrote a variety of software automation tools written in C#, including two iterations of a web services automation framework, a web app automation framework using WATIN, and an asynchronous service automation application</p>\r\n                        <p>Provided extensive manual testing of asynchronous processing applications (Windows services), web services, web apps and desktop apps.</p>\r\n                        <p>Wrote and provided QA review and testing of SQL scripts and sprocs.</p>\r\n                        <p>Provided on site and remote training and coordination for offshore (India) QA resources.</p>\r\n                        <p>Provided research and feedback on the impact and level of effort for new engineering items as they are proposed by the business team.</p>\r\n                        <p>Provided web service and 'offline' (ftp batch processing) clients with development support for integration efforts</p>\r\n                        </employment>\r\n                        \r\n                        <employment job-title=\"QA Contractor\"\r\n                        start-date=\"July 2005\" end-date=\"December 2005\" \r\n                        employer=\"A1 Enterprise (Telecommute)\" location=\"Beaverton, OR\">\r\n                        <p>Provided QA testing and documentation on intranet deliverable web application.</p>\r\n                        </employment>\r\n\r\n                        <employment job-title=\"Software Developer & QA Lead\"\r\n                        start-date=\"2003\" end-date=\"2005\" \r\n                        employer=\"Media Rights Technologies\" location=\"Sanat Cruz, CA\">\r\n                        <p>Programming for major internal projects, including definitions and implementations of new modules, maintenance of existing modules, and creation and maintenance of documentation. Projects included web development of client side JavaScript, Perl and PHP on Unix servers, and utility application development on Microsoft Windows in Python and C++.</p>\r\n                        <p>Provided system administration for the development and QA teams, including setup and administration of CVS code repositories, SMB file servers, and internal DNS and DHCP.</p>\r\n                        <p>Coordinated between client and server side programming teams, including documentation of tool use, and resolution of any other inter-department support issues.</p>\r\n                        <p>Lead the QA and software defect testing team, provide technical leadership and in-depth debugging support to facilitate communication with the development teams.</p>\r\n                        <p>Adapted to an ever changing technical startup environment, including expanding responsibilities and working to find new applications of technical skills.</p>\r\n                        </employment>\r\n                </employment-card>\r\n                \r\n                <employment-card title=\"Front Desk & Retail Era\">\r\n                        <employment job-title=\"System Administrator\"\r\n                        start-date=\"2001\" end-date=\"2003\" \r\n                        employer=\"Sasquatch Computer\" location=\"Santa Cruz, CA\">\r\n                        <p>Created and maintained the content management system for the company website, developed with mod_perl and Mason.</p>\r\n                        <p>Provided programming support, debugging, and installation for web hosting customers.</p>\r\n                        <p>Provided technical support to address all customer technical queries and to provide concise, factual information for the system administrators when escalating issues.</p>\r\n                        <p>Created new accounts for users, including system accounts and billing information, added services to existing accounts, and management of password resets in adherence to a strict password policy.</p>\r\n                        <p>Handled all incoming queries, including customer service, advertising, billing and payment requests, via a multi-line phone system, walk-in, and email.  Routed all queries that could not be directly addressed to the appropriate parties. Provided solutions to customer issues, even when the customer was distraught or agitated.</p>\r\n                        <p>Researched technical and cost feasibility for possible new services, with full documentation of findings.</p>\r\n                        <p>Adapted to an ever changing small business environment. Aided in definition of own job description and responsibilities, as well as the expansion of the latter.</p>\r\n                        </employment>\r\n\r\n                        <employment job-title=\"Cash Cage Operator & Print Specialist\"\r\n                        start-date=\"2001\" end-date=\"2002\" \r\n                        employer=\"Sears\" location=\"Santa Cruz, CA\">\r\n                        <p>Was one of two personnel counting and handling the deposits, handed off to armored car, for the entire Sears store, including during the holiday season of 2001. Never had a discrepancy between my deposits, the store’s sales records or the bank’s records.</p>\r\n                        <p>Managed and maintained the large sign printer and posted price signs for the store.</p>\r\n                        <p>Worked this job and Sasquatch Computers (above) concurrently.</p>\r\n                        </employment>\r\n\r\n                        <employment job-title=\"Repair Technician\"\r\n                        start-date=\"2000\" end-date=\"2001\" \r\n                        employer=\"Dave's Computer Service\" location=\"Santa Cruz, CA\">\r\n                        <p>Managed the intake of all manner of hardware for repair, including addition to the queue system and entry into the customer database. Addressed the questions or issues of customers, and found additional information for them.</p>\r\n                        <p>Diagnosed and repaired a variety of computer systems including PCs running Windows 95-ME, NT and 2000, Macintosh Computers running OS 7.5.3-9 and Linux workstations. This includes hardware level, OS level and other software conflicts, hardware issues, as well as networking and general troubleshooting with customers.</p>\r\n                        </employment>\r\n                </employment-card>\r\n                \r\n                <employment-card title=\"Collage Era\">\r\n                    <employment job-title=\"Java Development Contractor\"\r\n                    start-date=\"October 2000\" end-date=\"December 2000\" \r\n                    employer=\"Independent Contractor\" location=\"Santa Cruz, CA\">\r\n                    <p>Aided in the development and debugging of GUI front end code for a Java sound analysis system. Development responsibilities focused on front-end performance and cross-platform debugging.</p>\r\n                    </employment>\r\n                </employment-card>\r\n            </employment-cardset>\r\n        </section>\r\n    </section>\r\n    <section class=\"right\">\r\n    <skill-card class=\"RpgUiBox\" title=\"Primary Professional Qualifications\">\r\n        <skill name=\"A Nerd’s eye for organization.\" level=\"3\">\r\n        My career as a QA professional and software developer, and my profound respect for the libraries and librarians I have relied on all my life, have left me with a deep desire to see everything in its place so everyone can easily find exactly what they need. I will be happy to develop useful and accessible displays and storage both online and off for all your products. For an example of what I’d love to work on, see <a href=\"https://www.youtube.com/watch?v=l9AqYaSRjw0\">Adam Savage’s workshop organization project</a>; that’s the level of ‘right at hand’ I want everyone to have, wherever I work.\r\n        </skill>\r\n        <skill name=\"Helpful and courteous sales person.\" level=\"4\">\r\n        I’ve worked front desk at service businesses and worked the floor in retail previously, and successfully pitched ideas for startup companies to investors. I’ve had experience dealing with irate, frustrated and confused customers, and have been able to come to terms with all of them.\r\n        </skill>\r\n        <skill name=\"Extensive website development skills.\" level=\"4\">\r\n        I’ve been working on websites for twenty years. I’m in the midst of updating my skills to the latest the web has to offer; I’m a skilled angular developer and currently developing (including this site) in Angular 2. I’m happy to put that to work for your store, help you develop a one of a kind website experience for your store.\r\n        </skill>\r\n        <skill name=\"Computer networking expert.\" level=\"4\">\r\n        I can’t fix every computer issue, but I can keep machines talking to each other. If you are looking at expanding your operation to more than one store, I can help. \r\n        </skill>\r\n        <skill name=\"14 Years Quality Assurance Experience\" level=\"5\">\r\n        Development of QA processes in software development startups, redevelopment of QA processes inside multiple corporate environments. Team lead in multiple organizations, including  project management and process documentation as well as technical leadership and training. Extensive experience with work in a heterogeneous web development environment.\r\n        </skill>\r\n        <skill name=\"22 Years Software Development Experience\" level=\"5\">\r\n        Web Development (client and server, javascript and ruby), Test Automation (unit, integration, end-to-end, javascript and ruby), Game Development (Unity, C#). Current focus: Angular2 clients, Node.js/Express.js or servers, Firebase as a backend for rapid prototyping.\r\n        </skill>\r\n    </skill-card>\r\n    <skill-key></skill-key>\r\n    </section>\r\n</section>"

/***/ },

/***/ 729:
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ }

});
//# sourceMappingURL=main.map