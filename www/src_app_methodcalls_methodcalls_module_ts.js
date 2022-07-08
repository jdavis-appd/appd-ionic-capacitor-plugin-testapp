"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_methodcalls_methodcalls_module_ts"],{

/***/ 8220:
/*!***********************************************************!*\
  !*** ./src/app/methodcalls/methodcalls-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MethodcallsPageRoutingModule": () => (/* binding */ MethodcallsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _methodcalls_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./methodcalls.page */ 5255);




const routes = [
    {
        path: '',
        component: _methodcalls_page__WEBPACK_IMPORTED_MODULE_0__.MethodcallsPage
    }
];
let MethodcallsPageRoutingModule = class MethodcallsPageRoutingModule {
};
MethodcallsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MethodcallsPageRoutingModule);



/***/ }),

/***/ 2955:
/*!***************************************************!*\
  !*** ./src/app/methodcalls/methodcalls.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MethodcallsPageModule": () => (/* binding */ MethodcallsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _methodcalls_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./methodcalls-routing.module */ 8220);
/* harmony import */ var _methodcalls_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./methodcalls.page */ 5255);







let MethodcallsPageModule = class MethodcallsPageModule {
};
MethodcallsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _methodcalls_routing_module__WEBPACK_IMPORTED_MODULE_0__.MethodcallsPageRoutingModule
        ],
        declarations: [_methodcalls_page__WEBPACK_IMPORTED_MODULE_1__.MethodcallsPage]
    })
], MethodcallsPageModule);



/***/ }),

/***/ 5255:
/*!*************************************************!*\
  !*** ./src/app/methodcalls/methodcalls.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MethodcallsPage": () => (/* binding */ MethodcallsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _methodcalls_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./methodcalls.page.html?ngResource */ 3002);
/* harmony import */ var _methodcalls_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./methodcalls.page.scss?ngResource */ 3309);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var appd_ionic_capacitor_plugin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! appd-ionic-capacitor-plugin */ 8970);



/* eslint-disable @typescript-eslint/naming-convention */


let MethodcallsPage = class MethodcallsPage {
    constructor() {
        this.methodName = undefined;
        this.className = undefined;
        this.argField = undefined;
        this.args = [];
        this.calls = [];
    }
    ngOnInit() { }
    beginCall() {
        const callPromise = () => (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            if (this.argField !== undefined && this.argField.length > 0) {
                this.args = this.argField.split(',');
            }
            const { call_tracker } = yield appd_ionic_capacitor_plugin__WEBPACK_IMPORTED_MODULE_2__.ADEUMMobileCapacitorPlugin.beginCall({
                className: this.className,
                methodName: this.methodName,
                withArguments: this.args,
            });
            this.calls.push({
                callTracker: call_tracker,
                className: this.className,
                methodName: this.methodName,
                args: this.args,
            });
            this.className = undefined;
            this.methodName = undefined;
            this.argField = undefined;
            this.args = [];
        });
        callPromise();
    }
    endCall(callTracker) {
        console.log(callTracker);
        const callPromise = () => (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            yield appd_ionic_capacitor_plugin__WEBPACK_IMPORTED_MODULE_2__.ADEUMMobileCapacitorPlugin.endCall({
                // eslint-disable-next-line @typescript-eslint/naming-convention
                call_tracker: callTracker,
            });
            this.calls.forEach((val, idx) => {
                if (val.callTracker === callTracker) {
                    this.calls.splice(idx, 1);
                }
            });
        });
        callPromise();
    }
};
MethodcallsPage.ctorParameters = () => [];
MethodcallsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-methodcalls',
        template: _methodcalls_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_methodcalls_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], MethodcallsPage);



/***/ }),

/***/ 3309:
/*!**************************************************************!*\
  !*** ./src/app/methodcalls/methodcalls.page.scss?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtZXRob2RjYWxscy5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 3002:
/*!**************************************************************!*\
  !*** ./src/app/methodcalls/methodcalls.page.html?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/home\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>method calls</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div id=\"container\">\n    <ion-card>\n      <ion-card-header>\n        <ion-card-title>Test method call Function</ion-card-title>\n      </ion-card-header>\n      <ion-card-content>\n        <ion-item>\n          <ion-label position=\"floating\">New method call:</ion-label>\n\n          <ion-input\n            id=\"className\"\n            [(ngModel)]=\"className\"\n            placeholder=\"Class Name\"\n            type=\"text\"\n            style=\"border: solid 1px #000\"\n          ></ion-input>\n\n          <ion-input\n            id=\"methodName\"\n            [(ngModel)]=\"methodName\"\n            placeholder=\"Method Name\"\n            type=\"text\"\n            style=\"border: solid 1px #000\"\n          ></ion-input>\n          <ion-input\n            id=\"argField\"\n            [(ngModel)]=\"argField\"\n            placeholder=\"arg1,arg2,..\"\n            type=\"text\"\n            style=\"border: solid 1px #000\"\n          ></ion-input>\n\n          <ion-button id=\"timerCreate\" fill=\"outline\" (click)=\"beginCall()\">\n            Begin Call\n          </ion-button>\n        </ion-item>\n      </ion-card-content>\n    </ion-card>\n\n    <ion-list *ngFor=\"let call of calls\">\n      <ion-item>\n        {{ call.className }}:{{ call.methodName }}:{{ call.args }}\n      </ion-item>\n      <ion-item>\n        <ion-button\n          id=\"timerStop\"\n          fill=\"outline\"\n          (click)=\"endCall(call.callTracker)\"\n        >\n          endCall\n        </ion-button>\n      </ion-item>\n    </ion-list>\n  </div>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_methodcalls_methodcalls_module_ts.js.map