"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_screenshots_screenshots_module_ts"],{

/***/ 7821:
/*!***********************************************************!*\
  !*** ./src/app/screenshots/screenshots-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScreenshotsPageRoutingModule": () => (/* binding */ ScreenshotsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _screenshots_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./screenshots.page */ 2263);




const routes = [
    {
        path: '',
        component: _screenshots_page__WEBPACK_IMPORTED_MODULE_0__.ScreenshotsPage
    }
];
let ScreenshotsPageRoutingModule = class ScreenshotsPageRoutingModule {
};
ScreenshotsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ScreenshotsPageRoutingModule);



/***/ }),

/***/ 8229:
/*!***************************************************!*\
  !*** ./src/app/screenshots/screenshots.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScreenshotsPageModule": () => (/* binding */ ScreenshotsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _screenshots_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./screenshots-routing.module */ 7821);
/* harmony import */ var _screenshots_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./screenshots.page */ 2263);







let ScreenshotsPageModule = class ScreenshotsPageModule {
};
ScreenshotsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _screenshots_routing_module__WEBPACK_IMPORTED_MODULE_0__.ScreenshotsPageRoutingModule
        ],
        declarations: [_screenshots_page__WEBPACK_IMPORTED_MODULE_1__.ScreenshotsPage]
    })
], ScreenshotsPageModule);



/***/ }),

/***/ 2263:
/*!*************************************************!*\
  !*** ./src/app/screenshots/screenshots.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScreenshotsPage": () => (/* binding */ ScreenshotsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _screenshots_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./screenshots.page.html?ngResource */ 1286);
/* harmony import */ var _screenshots_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./screenshots.page.scss?ngResource */ 9121);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var appd_ionic_capacitor_plugin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! appd-ionic-capacitor-plugin */ 9919);



/* eslint-disable @typescript-eslint/naming-convention */


let ScreenshotsPage = class ScreenshotsPage {
    constructor() {
        this.isScreenBlocked = false;
        this.action = 'Block';
        this.getscreenPromise = () => (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const { screenshots_blocked, } = yield appd_ionic_capacitor_plugin__WEBPACK_IMPORTED_MODULE_2__.ADEUMMobileCapacitorPlugin.screenshotsBlocked();
            this.isScreenBlocked = screenshots_blocked;
        });
    }
    ngOnInit() { }
    takeScreenShot() {
        const screenshotPromise = () => (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            yield appd_ionic_capacitor_plugin__WEBPACK_IMPORTED_MODULE_2__.ADEUMMobileCapacitorPlugin.takeScreenshot();
        });
        screenshotPromise(); //TODO does not seem to be working with controller yet need to figure out
    }
    changeScreen(action) {
        if (action === 'Block') {
            this.action = 'Unblock';
            const screenshotPromise = () => (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
                yield appd_ionic_capacitor_plugin__WEBPACK_IMPORTED_MODULE_2__.ADEUMMobileCapacitorPlugin.blockScreenshots();
            });
            screenshotPromise();
            this.getscreenPromise();
            return;
        }
        this.action = 'Block';
        const screenshotPromise2 = () => (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            yield appd_ionic_capacitor_plugin__WEBPACK_IMPORTED_MODULE_2__.ADEUMMobileCapacitorPlugin.unblockScreenshots();
        });
        screenshotPromise2();
        this.getscreenPromise();
    }
};
ScreenshotsPage.ctorParameters = () => [];
ScreenshotsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-screenshots',
        template: _screenshots_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_screenshots_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ScreenshotsPage);



/***/ }),

/***/ 9121:
/*!**************************************************************!*\
  !*** ./src/app/screenshots/screenshots.page.scss?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzY3JlZW5zaG90cy5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 1286:
/*!**************************************************************!*\
  !*** ./src/app/screenshots/screenshots.page.html?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/home\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>screenshots</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div id=\"container\">\n    <ion-card>\n      <ion-card-header>\n        <ion-card-title>Screenshots Function Test</ion-card-title>\n      </ion-card-header>\n      <ion-card-content>\n        <ion-item>{{ isScreenBlocked }}</ion-item>\n\n        <ion-item>\n          <ion-button id=\"blockScreen\" fill=\"outline\" (click)=\"changeScreen(action)\"\n            >{{ action }}</ion-button\n          >\n        </ion-item>\n        <ion-item>\n          <ion-button id=\"takeScreenShot\" fill=\"outline\" (click)=\"takeScreenShot()\"\n            >Take Screenshot</ion-button\n          >\n        </ion-item>\n      </ion-card-content>\n    </ion-card>\n\n\n  </div>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_screenshots_screenshots_module_ts.js.map