"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_timer_timer_module_ts"],{

/***/ 5683:
/*!***********************************************!*\
  !*** ./src/app/timer/timer-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TimerPageRoutingModule": () => (/* binding */ TimerPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _timer_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./timer.page */ 5484);




const routes = [
    {
        path: '',
        component: _timer_page__WEBPACK_IMPORTED_MODULE_0__.TimerPage
    }
];
let TimerPageRoutingModule = class TimerPageRoutingModule {
};
TimerPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], TimerPageRoutingModule);



/***/ }),

/***/ 9178:
/*!***************************************!*\
  !*** ./src/app/timer/timer.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TimerPageModule": () => (/* binding */ TimerPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _timer_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./timer-routing.module */ 5683);
/* harmony import */ var _timer_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./timer.page */ 5484);







let TimerPageModule = class TimerPageModule {
};
TimerPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _timer_routing_module__WEBPACK_IMPORTED_MODULE_0__.TimerPageRoutingModule
        ],
        declarations: [_timer_page__WEBPACK_IMPORTED_MODULE_1__.TimerPage]
    })
], TimerPageModule);



/***/ }),

/***/ 5484:
/*!*************************************!*\
  !*** ./src/app/timer/timer.page.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TimerPage": () => (/* binding */ TimerPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _timer_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./timer.page.html?ngResource */ 7591);
/* harmony import */ var _timer_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./timer.page.scss?ngResource */ 241);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var appd_ionic_capacitor_plugin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! appd-ionic-capacitor-plugin */ 8970);





let TimerPage = class TimerPage {
    constructor() {
        this.timers = [];
        this.showList = false;
        this.timer = '';
    }
    ngOnInit() { }
    newTimer() {
        this.timers.push(this.timer);
        const timerPromise = () => (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            yield appd_ionic_capacitor_plugin__WEBPACK_IMPORTED_MODULE_2__.ADEUMMobileCapacitorPlugin.startTimer({ name: this.timer });
        });
        timerPromise();
        this.timer = '';
    }
    stopTimer(timer) {
        this.timers.forEach((val, idx) => {
            if (val === timer) {
                const timerPromise = () => (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
                    yield appd_ionic_capacitor_plugin__WEBPACK_IMPORTED_MODULE_2__.ADEUMMobileCapacitorPlugin.stopTimer({ name: timer });
                });
                timerPromise();
                this.timers.splice(idx, 1);
            }
        });
    }
};
TimerPage.ctorParameters = () => [];
TimerPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-timer',
        template: _timer_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_timer_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], TimerPage);



/***/ }),

/***/ 241:
/*!**************************************************!*\
  !*** ./src/app/timer/timer.page.scss?ngResource ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0aW1lci5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 7591:
/*!**************************************************!*\
  !*** ./src/app/timer/timer.page.html?ngResource ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/home\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>timers</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div id=\"container\">\n    <ion-card>\n      <ion-card-header>\n        <ion-card-title>Test Timer Function</ion-card-title>\n      </ion-card-header>\n      <ion-card-content>\n        <ion-item>\n          <ion-label position=\"floating\">New Timer with Name:</ion-label>\n\n          <ion-input\n            id=\"timerName\"\n            [(ngModel)]=\"timer\"\n            placeholder=\"Timer Name\"\n            type=\"text\"\n            style=\"border: solid 1px #000\"\n          ></ion-input>\n\n          <ion-button id=\"timerCreate\" fill=\"outline\" (click)=\"newTimer()\"\n            >Create New Timer</ion-button\n          >\n        </ion-item>\n      </ion-card-content>\n    </ion-card>\n\n    <ion-list *ngFor=\"let timer of timers\">\n      <ion-item> {{ timer }} </ion-item>\n      <ion-item>\n        <ion-button id=\"timerStop\" fill=\"outline\" (click)=\"stopTimer(timer)\"\n          >stopTimer</ion-button\n        ></ion-item\n      > </ion-list\n    >>\n  </div>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_timer_timer_module_ts.js.map