"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_session-frames_session-frames_module_ts"],{

/***/ 2033:
/*!*****************************************************************!*\
  !*** ./src/app/session-frames/session-frames-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SessionFramesPageRoutingModule": () => (/* binding */ SessionFramesPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _session_frames_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./session-frames.page */ 6325);




const routes = [
    {
        path: '',
        component: _session_frames_page__WEBPACK_IMPORTED_MODULE_0__.SessionFramesPage
    }
];
let SessionFramesPageRoutingModule = class SessionFramesPageRoutingModule {
};
SessionFramesPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SessionFramesPageRoutingModule);



/***/ }),

/***/ 1676:
/*!*********************************************************!*\
  !*** ./src/app/session-frames/session-frames.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SessionFramesPageModule": () => (/* binding */ SessionFramesPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _session_frames_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./session-frames-routing.module */ 2033);
/* harmony import */ var _session_frames_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./session-frames.page */ 6325);







let SessionFramesPageModule = class SessionFramesPageModule {
};
SessionFramesPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _session_frames_routing_module__WEBPACK_IMPORTED_MODULE_0__.SessionFramesPageRoutingModule
        ],
        declarations: [_session_frames_page__WEBPACK_IMPORTED_MODULE_1__.SessionFramesPage]
    })
], SessionFramesPageModule);



/***/ }),

/***/ 6325:
/*!*******************************************************!*\
  !*** ./src/app/session-frames/session-frames.page.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SessionFramesPage": () => (/* binding */ SessionFramesPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _session_frames_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./session-frames.page.html?ngResource */ 2044);
/* harmony import */ var _session_frames_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./session-frames.page.scss?ngResource */ 961);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var appd_ionic_capacitor_plugin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! appd-ionic-capacitor-plugin */ 8970);



/* eslint-disable @typescript-eslint/naming-convention */


let SessionFramesPage = class SessionFramesPage {
    constructor() {
        this.sessionName = '';
        this.sessionNameUpdate = '';
        this.showList = false;
        this.sessionFrameGuid = '';
    }
    ngOnInit() { }
    newSession() {
        console.log(this.sessionName);
        const sessionFramePromise = () => (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const { session_frame, } = yield appd_ionic_capacitor_plugin__WEBPACK_IMPORTED_MODULE_2__.ADEUMMobileCapacitorPlugin.startSessionFrame({
                // eslint-disable-next-line @typescript-eslint/naming-convention
                session_frame_name: this.sessionName,
            });
            this.sessionFrameGuid = session_frame;
            console.log(session_frame);
            console.log(this.sessionFrameGuid);
            this.showList = true;
        });
        sessionFramePromise();
    }
    updateSession() {
        console.log(this.sessionName);
        const sessionFramePromise = () => (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const { session_frame, } = yield appd_ionic_capacitor_plugin__WEBPACK_IMPORTED_MODULE_2__.ADEUMMobileCapacitorPlugin.updateSessionFrameName({
                // eslint-disable-next-line @typescript-eslint/naming-convention
                session_frame: this.sessionFrameGuid,
                session_frame_name: this.sessionNameUpdate,
            });
            this.sessionFrameGuid = session_frame;
            this.sessionName = this.sessionNameUpdate;
            this.sessionNameUpdate = '';
            console.log(session_frame);
            console.log(this.sessionFrameGuid);
            this.showList = true;
        });
        sessionFramePromise();
    }
    endSession() {
        console.log(this.sessionName);
        const sessionFramePromise = () => (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            yield appd_ionic_capacitor_plugin__WEBPACK_IMPORTED_MODULE_2__.ADEUMMobileCapacitorPlugin.endSessionFrame({
                // eslint-disable-next-line @typescript-eslint/naming-convention
                session_frame: this.sessionFrameGuid,
            });
            this.sessionFrameGuid = '';
            this.sessionName = '';
            this.sessionNameUpdate = '';
            this.showList = false;
        });
        sessionFramePromise();
    }
};
SessionFramesPage.ctorParameters = () => [];
SessionFramesPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-session-frames',
        template: _session_frames_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_session_frames_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], SessionFramesPage);



/***/ }),

/***/ 961:
/*!********************************************************************!*\
  !*** ./src/app/session-frames/session-frames.page.scss?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZXNzaW9uLWZyYW1lcy5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 2044:
/*!********************************************************************!*\
  !*** ./src/app/session-frames/session-frames.page.html?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/home\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>session_frames</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div id=\"container\">\n    <ion-card>\n      <ion-card-header>\n        <ion-card-title>Test New Session With Name Function</ion-card-title>\n      </ion-card-header>\n      <ion-card-content>\n        <ion-item>\n          <ion-label position=\"floating\">New Session with Name:</ion-label>\n\n          <ion-input\n            id=\"sessionName\"\n            [(ngModel)]=\"sessionName\"\n            placeholder=\"Session Name\"\n            type=\"text\"\n            style=\"border: solid 1px #000\"\n          ></ion-input>\n\n          <ion-button id=\"sessionCreate\" fill=\"outline\" (click)=\"newSession()\"\n            >Create New Session</ion-button\n          >\n        </ion-item>\n      </ion-card-content>\n    </ion-card>\n\n    <ion-list *ngIf=\"showList\">\n      <ion-item> {{ sessionFrameGuid }} </ion-item>\n      <ion-item>\n        <ion-input\n          id=\"sessionNameUpdate\"\n          [(ngModel)]=\"sessionNameUpdate\"\n          placeholder=\"{{ sessionName }} \"\n          type=\"text\"\n          style=\"border: solid 1px #000\"\n        ></ion-input></ion-item\n      ><ion-item>\n        <ion-button id=\"sessionUpdate\" fill=\"outline\" (click)=\"updateSession()\"\n          >Update Session</ion-button\n        ></ion-item\n      >\n      <ion-item>\n        <ion-button id=\"sessionEnd\" fill=\"outline\" (click)=\"endSession()\"\n          >End Session</ion-button\n        >\n      </ion-item> </ion-list\n    >>\n  </div>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_session-frames_session-frames_module_ts.js.map