"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_breadcrumbs_breadcrumbs_module_ts"],{

/***/ 479:
/*!***********************************************************!*\
  !*** ./src/app/breadcrumbs/breadcrumbs-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BreadcrumbsPageRoutingModule": () => (/* binding */ BreadcrumbsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _breadcrumbs_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./breadcrumbs.page */ 8493);




const routes = [
    {
        path: '',
        component: _breadcrumbs_page__WEBPACK_IMPORTED_MODULE_0__.BreadcrumbsPage
    }
];
let BreadcrumbsPageRoutingModule = class BreadcrumbsPageRoutingModule {
};
BreadcrumbsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], BreadcrumbsPageRoutingModule);



/***/ }),

/***/ 2681:
/*!***************************************************!*\
  !*** ./src/app/breadcrumbs/breadcrumbs.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BreadcrumbsPageModule": () => (/* binding */ BreadcrumbsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _breadcrumbs_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./breadcrumbs-routing.module */ 479);
/* harmony import */ var _breadcrumbs_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./breadcrumbs.page */ 8493);







let BreadcrumbsPageModule = class BreadcrumbsPageModule {
};
BreadcrumbsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _breadcrumbs_routing_module__WEBPACK_IMPORTED_MODULE_0__.BreadcrumbsPageRoutingModule
        ],
        declarations: [_breadcrumbs_page__WEBPACK_IMPORTED_MODULE_1__.BreadcrumbsPage]
    })
], BreadcrumbsPageModule);



/***/ }),

/***/ 8493:
/*!*************************************************!*\
  !*** ./src/app/breadcrumbs/breadcrumbs.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BreadcrumbsPage": () => (/* binding */ BreadcrumbsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _breadcrumbs_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./breadcrumbs.page.html?ngResource */ 4351);
/* harmony import */ var _breadcrumbs_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./breadcrumbs.page.scss?ngResource */ 970);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var appd_ionic_capacitor_plugin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! appd-ionic-capacitor-plugin */ 8970);





let BreadcrumbsPage = class BreadcrumbsPage {
    constructor() {
        this.breadcrumbName = '';
        this.crumbs = [];
    }
    ngOnInit() { }
    newBreadCrumb() {
        this.crumbs.push(this.breadcrumbName);
        const crumbPromise = () => (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            yield appd_ionic_capacitor_plugin__WEBPACK_IMPORTED_MODULE_2__.ADEUMMobileCapacitorPlugin.leaveBreadcrumb({
                name: this.breadcrumbName,
            });
            //TODO does not seem to be working with controller yet need to figure out
        });
        crumbPromise();
        this.breadcrumbName = '';
    }
};
BreadcrumbsPage.ctorParameters = () => [];
BreadcrumbsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-breadcrumbs',
        template: _breadcrumbs_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_breadcrumbs_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], BreadcrumbsPage);



/***/ }),

/***/ 970:
/*!**************************************************************!*\
  !*** ./src/app/breadcrumbs/breadcrumbs.page.scss?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJicmVhZGNydW1icy5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 4351:
/*!**************************************************************!*\
  !*** ./src/app/breadcrumbs/breadcrumbs.page.html?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/home\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>breadcrumbs</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div id=\"container\">\n    <ion-card>\n      <ion-card-header>\n        <ion-card-title>Test breadcrumbs Function</ion-card-title>\n      </ion-card-header>\n      <ion-card-content>\n        <ion-item>\n          <ion-label position=\"floating\">New breadcrumbs Name:</ion-label>\n\n          <ion-input\n            id=\"breadcrumbName\"\n            [(ngModel)]=\"breadcrumbName\"\n            placeholder=\"breadcrumb Name\"\n            type=\"text\"\n            style=\"border: solid 1px #000\"\n          ></ion-input>\n\n          <ion-button id=\"breadcrumbCreate\" fill=\"outline\" (click)=\"newBreadCrumb()\"\n            >Create New BreadCrumb</ion-button\n          >\n        </ion-item>\n      </ion-card-content>\n    </ion-card>\n\n    <ion-list *ngFor=\"let crumb of crumbs\">\n      <ion-item> {{ crumb }} </ion-item>\n      > </ion-list\n    >>\n  </div>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_breadcrumbs_breadcrumbs_module_ts.js.map