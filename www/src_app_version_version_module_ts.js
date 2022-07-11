"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_version_version_module_ts"],{

/***/ 6694:
/*!***************************************************!*\
  !*** ./src/app/version/version-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VersionPageRoutingModule": () => (/* binding */ VersionPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _version_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./version.page */ 1442);




const routes = [
    {
        path: '',
        component: _version_page__WEBPACK_IMPORTED_MODULE_0__.VersionPage
    }
];
let VersionPageRoutingModule = class VersionPageRoutingModule {
};
VersionPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], VersionPageRoutingModule);



/***/ }),

/***/ 683:
/*!*******************************************!*\
  !*** ./src/app/version/version.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VersionPageModule": () => (/* binding */ VersionPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _version_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./version-routing.module */ 6694);
/* harmony import */ var _version_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./version.page */ 1442);







let VersionPageModule = class VersionPageModule {
};
VersionPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _version_routing_module__WEBPACK_IMPORTED_MODULE_0__.VersionPageRoutingModule
        ],
        declarations: [_version_page__WEBPACK_IMPORTED_MODULE_1__.VersionPage]
    })
], VersionPageModule);



/***/ }),

/***/ 1442:
/*!*****************************************!*\
  !*** ./src/app/version/version.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VersionPage": () => (/* binding */ VersionPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _version_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./version.page.html?ngResource */ 9059);
/* harmony import */ var _version_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./version.page.scss?ngResource */ 5972);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var appd_ionic_capacitor_plugin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! appd-ionic-capacitor-plugin */ 9919);





let VersionPage = class VersionPage {
    constructor() {
        this.showList = false;
        this.version = '';
    }
    ngOnInit() { }
    getVersion() {
        console.log(this.version);
        const versionPromise = () => (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const { version } = yield appd_ionic_capacitor_plugin__WEBPACK_IMPORTED_MODULE_2__.ADEUMMobileCapacitorPlugin.getVersion();
            this.version = version;
            this.showList = true;
        });
        versionPromise();
    }
};
VersionPage.ctorParameters = () => [];
VersionPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-version',
        template: _version_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_version_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], VersionPage);



/***/ }),

/***/ 5972:
/*!******************************************************!*\
  !*** ./src/app/version/version.page.scss?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2ZXJzaW9uLnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 9059:
/*!******************************************************!*\
  !*** ./src/app/version/version.page.html?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/home\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>session_frames</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div id=\"container\">\n    <ion-card>\n      <ion-card-header>\n        <ion-card-title>Version Function Test</ion-card-title>\n      </ion-card-header>\n      <ion-card-content>\n        <ion-item>\n          <ion-button id=\"getVersion\" fill=\"outline\" (click)=\"getVersion()\"\n            >Get Version</ion-button\n          >\n        </ion-item>\n      </ion-card-content>\n    </ion-card>\n\n    <ion-list *ngIf=\"showList\">\n      <ion-item> {{ version }} </ion-item>\n    </ion-list>\n  </div>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_version_version_module_ts.js.map