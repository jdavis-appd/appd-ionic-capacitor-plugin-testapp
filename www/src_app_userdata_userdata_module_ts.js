"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_userdata_userdata_module_ts"],{

/***/ 5359:
/*!*****************************************************!*\
  !*** ./src/app/userdata/userdata-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserdataPageRoutingModule": () => (/* binding */ UserdataPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _userdata_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userdata.page */ 1340);




const routes = [
    {
        path: '',
        component: _userdata_page__WEBPACK_IMPORTED_MODULE_0__.UserdataPage
    }
];
let UserdataPageRoutingModule = class UserdataPageRoutingModule {
};
UserdataPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], UserdataPageRoutingModule);



/***/ }),

/***/ 4331:
/*!*********************************************!*\
  !*** ./src/app/userdata/userdata.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserdataPageModule": () => (/* binding */ UserdataPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _userdata_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userdata-routing.module */ 5359);
/* harmony import */ var _userdata_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./userdata.page */ 1340);







let UserdataPageModule = class UserdataPageModule {
};
UserdataPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _userdata_routing_module__WEBPACK_IMPORTED_MODULE_0__.UserdataPageRoutingModule
        ],
        declarations: [_userdata_page__WEBPACK_IMPORTED_MODULE_1__.UserdataPage]
    })
], UserdataPageModule);



/***/ }),

/***/ 1340:
/*!*******************************************!*\
  !*** ./src/app/userdata/userdata.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserdataPage": () => (/* binding */ UserdataPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _userdata_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userdata.page.html?ngResource */ 8818);
/* harmony import */ var _userdata_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./userdata.page.scss?ngResource */ 7567);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var appd_ionic_capacitor_plugin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! appd-ionic-capacitor-plugin */ 8970);





let UserdataPage = class UserdataPage {
    constructor() {
        this.userDataKey = undefined;
        this.userDataValue = undefined;
        this.userData = [];
    }
    ngOnInit() { }
    newUserData() {
        const userDataPromise = () => (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            yield appd_ionic_capacitor_plugin__WEBPACK_IMPORTED_MODULE_2__.ADEUMMobileCapacitorPlugin.setUserData({
                key: this.userDataKey,
                value: this.userDataValue,
            });
        });
        userDataPromise();
        this.userData.push({
            key: this.userDataKey,
            value: this.userDataValue,
        });
        this.userDataKey = undefined;
        this.userDataValue = undefined;
    }
    removeUserData(key) {
        this.userData.forEach((val, idx) => {
            if (val.key === key) {
                const userDataPromise = () => (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
                    yield appd_ionic_capacitor_plugin__WEBPACK_IMPORTED_MODULE_2__.ADEUMMobileCapacitorPlugin.removeUserData({
                        key
                    });
                });
                userDataPromise();
                this.userData.splice(idx, 1);
            }
        });
    }
};
UserdataPage.ctorParameters = () => [];
UserdataPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-userdata',
        template: _userdata_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_userdata_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], UserdataPage);



/***/ }),

/***/ 7567:
/*!********************************************************!*\
  !*** ./src/app/userdata/userdata.page.scss?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2VyZGF0YS5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 8818:
/*!********************************************************!*\
  !*** ./src/app/userdata/userdata.page.html?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/home\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>user data</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div id=\"container\">\n    <ion-card>\n      <ion-card-header>\n        <ion-card-title>Test User Data Function</ion-card-title>\n      </ion-card-header>\n      <ion-card-content>\n        <ion-item>\n          <ion-label position=\"floating\">New User Data Key:</ion-label>\n\n          <ion-input\n            id=\"userDataKey\"\n            [(ngModel)]=\"userDataKey\"\n            placeholder=\"Key\"\n            type=\"text\"\n            style=\"border: solid 1px #000\"\n          ></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label position=\"floating\">New User Data Value:</ion-label>\n          <ion-input\n            id=\"userDataValue\"\n            [(ngModel)]=\"userDataValue\"\n            placeholder=\"Value\"\n            type=\"text\"\n            style=\"border: solid 1px #000\"\n          ></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-button id=\"userDataCreate\" fill=\"outline\" (click)=\"newUserData()\"\n            >Create New UserData</ion-button\n          >\n        </ion-item>\n      </ion-card-content>\n    </ion-card>\n\n    <ion-list *ngFor=\"let data of userData\">\n      <ion-item> {{ data.key }}: {{ data.value}} </ion-item>\n      <ion-item>\n        <ion-button id=\"removeUserData\" fill=\"outline\" (click)=\"removeUserData(data.key)\">remove</ion-button>\n      </ion-item>\n    </ion-list>\n  </div>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_userdata_userdata_module_ts.js.map