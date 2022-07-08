"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_custom-metrics_custom-metrics_module_ts"],{

/***/ 8031:
/*!*****************************************************************!*\
  !*** ./src/app/custom-metrics/custom-metrics-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomMetricsPageRoutingModule": () => (/* binding */ CustomMetricsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _custom_metrics_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./custom-metrics.page */ 4591);




const routes = [
    {
        path: '',
        component: _custom_metrics_page__WEBPACK_IMPORTED_MODULE_0__.CustomMetricsPage
    }
];
let CustomMetricsPageRoutingModule = class CustomMetricsPageRoutingModule {
};
CustomMetricsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CustomMetricsPageRoutingModule);



/***/ }),

/***/ 3691:
/*!*********************************************************!*\
  !*** ./src/app/custom-metrics/custom-metrics.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomMetricsPageModule": () => (/* binding */ CustomMetricsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _custom_metrics_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./custom-metrics-routing.module */ 8031);
/* harmony import */ var _custom_metrics_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./custom-metrics.page */ 4591);







let CustomMetricsPageModule = class CustomMetricsPageModule {
};
CustomMetricsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _custom_metrics_routing_module__WEBPACK_IMPORTED_MODULE_0__.CustomMetricsPageRoutingModule
        ],
        declarations: [_custom_metrics_page__WEBPACK_IMPORTED_MODULE_1__.CustomMetricsPage]
    })
], CustomMetricsPageModule);



/***/ }),

/***/ 4591:
/*!*******************************************************!*\
  !*** ./src/app/custom-metrics/custom-metrics.page.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomMetricsPage": () => (/* binding */ CustomMetricsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _custom_metrics_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./custom-metrics.page.html?ngResource */ 155);
/* harmony import */ var _custom_metrics_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./custom-metrics.page.scss?ngResource */ 845);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var appd_ionic_capacitor_plugin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! appd-ionic-capacitor-plugin */ 8970);





let CustomMetricsPage = class CustomMetricsPage {
    constructor() {
        this.metricName = undefined;
        this.metricValue = undefined;
        this.metrics = [];
    }
    ngOnInit() { }
    newMetric() {
        const metricPromise = () => (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            yield appd_ionic_capacitor_plugin__WEBPACK_IMPORTED_MODULE_2__.ADEUMMobileCapacitorPlugin.reportMetricWithName({ name: this.metricName, value: this.metricValue });
        });
        metricPromise();
        this.metrics.push({
            metricName: this.metricName,
            metricValue: this.metricValue,
        });
        this.metricName = undefined;
        this.metricValue = undefined;
    }
};
CustomMetricsPage.ctorParameters = () => [];
CustomMetricsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-custom-metrics',
        template: _custom_metrics_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_custom_metrics_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], CustomMetricsPage);



/***/ }),

/***/ 845:
/*!********************************************************************!*\
  !*** ./src/app/custom-metrics/custom-metrics.page.scss?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjdXN0b20tbWV0cmljcy5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 155:
/*!********************************************************************!*\
  !*** ./src/app/custom-metrics/custom-metrics.page.html?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/home\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>custom-metrics</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div id=\"container\">\n    <ion-card>\n      <ion-card-header>\n        <ion-card-title>Test Metric With Name Function</ion-card-title>\n      </ion-card-header>\n      <ion-card-content>\n        <ion-item>\n          <ion-label position=\"floating\">New Metric Name:</ion-label>\n\n          <ion-input\n            id=\"metricName\"\n            [(ngModel)]=\"metricName\"\n            placeholder=\"Metric Name\"\n            type=\"text\"\n            style=\"border: solid 1px #000\"\n          ></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label position=\"floating\">New Metric Value:</ion-label>\n          <ion-input\n            id=\"metricValue\"\n            [(ngModel)]=\"metricValue\"\n            placeholder=\"Metric Value\"\n            type=\"number\"\n            style=\"border: solid 1px #000\"\n          ></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-button id=\"metricCreate\" fill=\"outline\" (click)=\"newMetric()\"\n            >Create New Metric</ion-button\n          >\n        </ion-item>\n      </ion-card-content>\n    </ion-card>\n\n    <ion-list *ngFor=\"let metric of metrics\">\n      <ion-item> {{ metric.metricName }}: {{ metric.metricValue}} </ion-item>\n    </ion-list>\n  </div>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_custom-metrics_custom-metrics_module_ts.js.map