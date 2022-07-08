"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_httpcalls_httpcalls_module_ts"],{

/***/ 1542:
/*!*******************************************************!*\
  !*** ./src/app/httpcalls/httpcalls-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HttpcallsPageRoutingModule": () => (/* binding */ HttpcallsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _httpcalls_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./httpcalls.page */ 3351);




const routes = [
    {
        path: '',
        component: _httpcalls_page__WEBPACK_IMPORTED_MODULE_0__.HttpcallsPage
    }
];
let HttpcallsPageRoutingModule = class HttpcallsPageRoutingModule {
};
HttpcallsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], HttpcallsPageRoutingModule);



/***/ }),

/***/ 6941:
/*!***********************************************!*\
  !*** ./src/app/httpcalls/httpcalls.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HttpcallsPageModule": () => (/* binding */ HttpcallsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _httpcalls_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./httpcalls-routing.module */ 1542);
/* harmony import */ var _httpcalls_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./httpcalls.page */ 3351);







let HttpcallsPageModule = class HttpcallsPageModule {
};
HttpcallsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _httpcalls_routing_module__WEBPACK_IMPORTED_MODULE_0__.HttpcallsPageRoutingModule
        ],
        declarations: [_httpcalls_page__WEBPACK_IMPORTED_MODULE_1__.HttpcallsPage]
    })
], HttpcallsPageModule);



/***/ }),

/***/ 3351:
/*!*********************************************!*\
  !*** ./src/app/httpcalls/httpcalls.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HttpcallsPage": () => (/* binding */ HttpcallsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _httpcalls_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./httpcalls.page.html?ngResource */ 5505);
/* harmony import */ var _httpcalls_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./httpcalls.page.scss?ngResource */ 272);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var appd_ionic_capacitor_plugin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! appd-ionic-capacitor-plugin */ 8970);



/* eslint-disable @typescript-eslint/naming-convention */


let HttpcallsPage = class HttpcallsPage {
    constructor() {
        this.httpUrl = undefined;
        this.httpCalls = [];
        this.statusCode = undefined;
        this.errorMsg = undefined;
    }
    ngOnInit() { }
    newHttp() {
        console.log(this.httpUrl);
        const httpPromise = () => (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const { http_tracker, } = yield appd_ionic_capacitor_plugin__WEBPACK_IMPORTED_MODULE_2__.ADEUMMobileCapacitorPlugin.beginHttpRequest({
                // eslint-disable-next-line @typescript-eslint/naming-convention
                url: this.httpUrl,
            });
            this.httpCalls.push({
                http_tracker,
                url: this.httpUrl,
            });
            this.httpUrl = undefined;
        });
        httpPromise();
    }
    statusCodeHttp(httpTracker) {
        console.log(httpTracker);
        const httpPromise = () => (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            yield appd_ionic_capacitor_plugin__WEBPACK_IMPORTED_MODULE_2__.ADEUMMobileCapacitorPlugin.withResponseCode({
                // eslint-disable-next-line @typescript-eslint/naming-convention
                http_tracker: httpTracker,
                status_code: this.statusCode
            });
            this.httpCalls.forEach((val, idx) => {
                if (val.http_tracker === httpTracker) {
                    val.statusCode = this.statusCode;
                }
            });
            this.statusCode = undefined;
        });
        httpPromise();
    }
    errorMsgHttp(httpTracker) {
        console.log(httpTracker);
        const httpPromise = () => (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            yield appd_ionic_capacitor_plugin__WEBPACK_IMPORTED_MODULE_2__.ADEUMMobileCapacitorPlugin.withErrorMessage({
                // eslint-disable-next-line @typescript-eslint/naming-convention
                http_tracker: httpTracker,
                error_message: this.errorMsg
            });
            this.httpCalls.forEach((val, idx) => {
                if (val.http_tracker === httpTracker) {
                    val.error_message = this.errorMsg;
                }
            });
            this.errorMsg = undefined;
        });
        httpPromise();
    }
    endHttp(httpTracker) {
        console.log(httpTracker);
        const httpPromise = () => (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            yield appd_ionic_capacitor_plugin__WEBPACK_IMPORTED_MODULE_2__.ADEUMMobileCapacitorPlugin.reportDone({
                // eslint-disable-next-line @typescript-eslint/naming-convention
                http_tracker: httpTracker,
            });
            this.httpCalls.forEach((val, idx) => {
                if (val.http_tracker === httpTracker) {
                    this.httpCalls.splice(idx, 1);
                }
            });
        });
        httpPromise();
    }
};
HttpcallsPage.ctorParameters = () => [];
HttpcallsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-httpcalls',
        template: _httpcalls_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_httpcalls_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], HttpcallsPage);



/***/ }),

/***/ 272:
/*!**********************************************************!*\
  !*** ./src/app/httpcalls/httpcalls.page.scss?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJodHRwY2FsbHMucGFnZS5zY3NzIn0= */";

/***/ }),

/***/ 5505:
/*!**********************************************************!*\
  !*** ./src/app/httpcalls/httpcalls.page.html?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/home\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>httpcalls</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div id=\"container\">\n    <ion-card>\n      <ion-card-header>\n        <ion-card-title>Test httpcall Function</ion-card-title>\n      </ion-card-header>\n      <ion-card-content>\n        <ion-item>\n          <ion-label position=\"floating\">New Http Call:</ion-label>\n\n          <ion-input\n            id=\"httpUrl\"\n            [(ngModel)]=\"httpUrl\"\n            placeholder=\"url\"\n            type=\"text\"\n            style=\"border: solid 1px #000\"\n          ></ion-input>\n\n          <ion-button id=\"httpCreate\" fill=\"outline\" (click)=\"newHttp()\"\n            >Create New Http Call</ion-button\n          >\n        </ion-item>\n      </ion-card-content>\n    </ion-card>\n\n    <ion-list *ngFor=\"let httpCall of httpCalls\">\n      <ion-item>Tracking ID: {{ httpCall.http_tracker }}: {{ httpCall.url}} </ion-item>\n      <ion-item>Url: {{ httpCall.url}} </ion-item>\n      <ion-item>\n        <ion-label position=\"floating\">{{httpCall.statusCode}}</ion-label>\n        <ion-input\n            id=\"{{ httpCall.http_tracker }}_statusCode\"\n            [(ngModel)]=\"statusCode\"\n            placeholder=\"404\"\n            type=\"number\"\n            style=\"border: solid 1px #000\"\n          ></ion-input>\n          <ion-button id=\"{{ httpCall.http_tracker }}_statusCodeBtn\" fill=\"outline\" (click)=\"statusCodeHttp(httpCall.http_tracker)\">Set Status</ion-button>\n      </ion-item>\n      <ion-item>\n        <ion-button id=\"endHttp\" fill=\"outline\" (click)=\"endHttp(httpCall.http_tracker)\">End</ion-button>\n      </ion-item>\n    </ion-list>\n  </div>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_httpcalls_httpcalls_module_ts.js.map