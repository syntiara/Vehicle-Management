(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _counter_counter_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./counter/counter.component */ "./src/app/counter/counter.component.ts");
/* harmony import */ var _fetch_data_fetch_data_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./fetch-data/fetch-data.component */ "./src/app/fetch-data/fetch-data.component.ts");
/* harmony import */ var _vehicle_form_vehicle_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./vehicle-form/vehicle-form.component */ "./src/app/vehicle-form/vehicle-form.component.ts");
/* harmony import */ var _vehicle_list_vehicle_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./vehicle-list/vehicle-list.component */ "./src/app/vehicle-list/vehicle-list.component.ts");
/* harmony import */ var _view_vehicle_view_vehicle_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./view-vehicle/view-vehicle.component */ "./src/app/view-vehicle/view-vehicle.component.ts");









var routes = [
    { path: '', redirectTo: 'vehicles', pathMatch: 'full' },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'counter', component: _counter_counter_component__WEBPACK_IMPORTED_MODULE_4__["CounterComponent"] },
    { path: 'fetch-data', component: _fetch_data_fetch_data_component__WEBPACK_IMPORTED_MODULE_5__["FetchDataComponent"] },
    { path: 'vehicles/new', component: _vehicle_form_vehicle_form_component__WEBPACK_IMPORTED_MODULE_6__["VehicleFormComponent"] },
    { path: 'vehicles/edit/:id', component: _vehicle_form_vehicle_form_component__WEBPACK_IMPORTED_MODULE_6__["VehicleFormComponent"] },
    { path: 'vehicles/:id', component: _view_vehicle_view_vehicle_component__WEBPACK_IMPORTED_MODULE_8__["ViewVehicleComponent"] },
    { path: 'vehicles', component: _vehicle_list_vehicle_list_component__WEBPACK_IMPORTED_MODULE_7__["VehicleListComponent"] },
    { path: '**', redirectTo: 'home' },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<app-nav-menu></app-nav-menu>\n<section class=\"main-container\">\n    <router-outlet>\n    </router-outlet>\n</section>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'ClientApp';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _vehicle_form_vehicle_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./vehicle-form/vehicle-form.component */ "./src/app/vehicle-form/vehicle-form.component.ts");
/* harmony import */ var _counter_counter_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./counter/counter.component */ "./src/app/counter/counter.component.ts");
/* harmony import */ var _fetch_data_fetch_data_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./fetch-data/fetch-data.component */ "./src/app/fetch-data/fetch-data.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _shared_component_nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/component/nav-menu/nav-menu.component */ "./src/app/shared/component/nav-menu/nav-menu.component.ts");
/* harmony import */ var _service_vehicle_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./service/vehicle.service */ "./src/app/service/vehicle.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _vehicle_list_vehicle_list_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./vehicle-list/vehicle-list.component */ "./src/app/vehicle-list/vehicle-list.component.ts");
/* harmony import */ var _shared_component_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./shared/component/pagination/pagination.component */ "./src/app/shared/component/pagination/pagination.component.ts");
/* harmony import */ var _view_vehicle_view_vehicle_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./view-vehicle/view-vehicle.component */ "./src/app/view-vehicle/view-vehicle.component.ts");
/* harmony import */ var _service_photo_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./service/photo.service */ "./src/app/service/photo.service.ts");

















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _vehicle_form_vehicle_form_component__WEBPACK_IMPORTED_MODULE_6__["VehicleFormComponent"],
                _counter_counter_component__WEBPACK_IMPORTED_MODULE_7__["CounterComponent"],
                _fetch_data_fetch_data_component__WEBPACK_IMPORTED_MODULE_8__["FetchDataComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
                _shared_component_nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_10__["NavMenuComponent"],
                _vehicle_list_vehicle_list_component__WEBPACK_IMPORTED_MODULE_13__["VehicleListComponent"],
                _shared_component_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_14__["PaginationComponent"],
                _view_vehicle_view_vehicle_component__WEBPACK_IMPORTED_MODULE_15__["ViewVehicleComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"]
            ],
            providers: [_service_vehicle_service__WEBPACK_IMPORTED_MODULE_11__["VehicleService"], _service_photo_service__WEBPACK_IMPORTED_MODULE_16__["PhotoService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/counter/counter.component.css":
/*!***********************************************!*\
  !*** ./src/app/counter/counter.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvdW50ZXIvY291bnRlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/counter/counter.component.html":
/*!************************************************!*\
  !*** ./src/app/counter/counter.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  counter works!\n</p>\n"

/***/ }),

/***/ "./src/app/counter/counter.component.ts":
/*!**********************************************!*\
  !*** ./src/app/counter/counter.component.ts ***!
  \**********************************************/
/*! exports provided: CounterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CounterComponent", function() { return CounterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CounterComponent = /** @class */ (function () {
    function CounterComponent() {
    }
    CounterComponent.prototype.ngOnInit = function () {
    };
    CounterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-counter',
            template: __webpack_require__(/*! ./counter.component.html */ "./src/app/counter/counter.component.html"),
            styles: [__webpack_require__(/*! ./counter.component.css */ "./src/app/counter/counter.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CounterComponent);
    return CounterComponent;
}());



/***/ }),

/***/ "./src/app/fetch-data/fetch-data.component.css":
/*!*****************************************************!*\
  !*** ./src/app/fetch-data/fetch-data.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZldGNoLWRhdGEvZmV0Y2gtZGF0YS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/fetch-data/fetch-data.component.html":
/*!******************************************************!*\
  !*** ./src/app/fetch-data/fetch-data.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  fetch-data works!\n</p>\n"

/***/ }),

/***/ "./src/app/fetch-data/fetch-data.component.ts":
/*!****************************************************!*\
  !*** ./src/app/fetch-data/fetch-data.component.ts ***!
  \****************************************************/
/*! exports provided: FetchDataComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FetchDataComponent", function() { return FetchDataComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FetchDataComponent = /** @class */ (function () {
    function FetchDataComponent() {
    }
    FetchDataComponent.prototype.ngOnInit = function () {
    };
    FetchDataComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-fetch-data',
            template: __webpack_require__(/*! ./fetch-data.component.html */ "./src/app/fetch-data/fetch-data.component.html"),
            styles: [__webpack_require__(/*! ./fetch-data.component.css */ "./src/app/fetch-data/fetch-data.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FetchDataComponent);
    return FetchDataComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>Hoem page works</p>\r\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/model/vehicle.ts":
/*!**********************************!*\
  !*** ./src/app/model/vehicle.ts ***!
  \**********************************/
/*! exports provided: SaveVehicle, VehicleQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaveVehicle", function() { return SaveVehicle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehicleQuery", function() { return VehicleQuery; });
var SaveVehicle = /** @class */ (function () {
    function SaveVehicle() {
    }
    return SaveVehicle;
}());

var VehicleQuery = /** @class */ (function () {
    function VehicleQuery(_pageSize) {
        this.pageSize = _pageSize;
    }
    return VehicleQuery;
}());



/***/ }),

/***/ "./src/app/service/photo.service.ts":
/*!******************************************!*\
  !*** ./src/app/service/photo.service.ts ***!
  \******************************************/
/*! exports provided: PhotoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotoService", function() { return PhotoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");





var PhotoService = /** @class */ (function () {
    function PhotoService(_http) {
        this._http = _http;
        this.endpointVP = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].detailsUrl;
    }
    PhotoService.prototype.upload = function (vehicleId, photo) {
        var formData = new FormData();
        formData.append("file", photo);
        return this._http.post(this.endpointVP + "/" + vehicleId + "/photos", formData)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res; }));
    };
    PhotoService.prototype.getPhotoList = function (vehicleId) {
        return this._http.get(this.endpointVP + "/" + vehicleId + "/photos")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res; }));
    };
    PhotoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], PhotoService);
    return PhotoService;
}());



/***/ }),

/***/ "./src/app/service/vehicle.service.ts":
/*!********************************************!*\
  !*** ./src/app/service/vehicle.service.ts ***!
  \********************************************/
/*! exports provided: VehicleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehicleService", function() { return VehicleService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");






var VehicleService = /** @class */ (function () {
    function VehicleService(_http) {
        this._http = _http;
        this.endpointM = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].makeUrl;
        this.endpointF = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].featureUrl;
        this.endpointVD = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].detailsUrl;
    }
    VehicleService.prototype.getMakes = function () {
        return this._http.get("" + this.endpointM)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res; }));
    };
    VehicleService.prototype.getFeatures = function () {
        return this._http.get("" + this.endpointF)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res; }));
    };
    VehicleService.prototype.createVehicleDetails = function (model) {
        return this._http.post("" + this.endpointVD, model)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res; }));
    };
    VehicleService.prototype.getVehicleDetails = function (id) {
        return this._http.get(this.endpointVD + "/" + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res; }));
    };
    VehicleService.prototype.updateVehicleDetails = function (id, model) {
        return this._http.put(this.endpointVD + "/" + id, model)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res; }));
    };
    VehicleService.prototype.deleteVehicleDetails = function (id) {
        return this._http.delete(this.endpointVD + "/" + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res; }));
    };
    VehicleService.prototype.getVehicleDetailsList = function (obj) {
        return this._http.get(this.endpointVD + "?" + this.toQueryString(obj))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res; }));
    };
    //to form multiple query string, joined by &
    VehicleService.prototype.toQueryString = function (obj) {
        var parts = [];
        for (var prop in obj) {
            var val = obj[prop];
            if (!Object(util__WEBPACK_IMPORTED_MODULE_4__["isNullOrUndefined"])(val)) {
                parts.push(encodeURIComponent(prop) + "=" + encodeURIComponent(val));
            }
        }
        return parts.join('&');
    };
    VehicleService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], VehicleService);
    return VehicleService;
}());



/***/ }),

/***/ "./src/app/shared/component/nav-menu/nav-menu.component.css":
/*!******************************************************************!*\
  !*** ./src/app/shared/component/nav-menu/nav-menu.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar-light .navbar-nav .nav-link {\r\n  color: white;\r\n}\r\n.navbar{\r\n  border-bottom: 4px solid #f8b51f;\r\n}\r\n.navbar .navbar-nav.navbar-right {\r\n  margin-left: auto;\r\n}\r\n.navbar .nav-divider {\r\n  position: relative;\r\n  width: 1px;\r\n  margin-left: 0.5rem;\r\n  margin-right: 0.5rem;\r\n}\r\n.navbar-text .fa, .nav-item .fa, .dropdown-item .fa {\r\n  margin-right: 0.5rem\r\n}\r\n.dropdown-item .fa, .dropdown-item {\r\n  font-size: 12px;\r\n}\r\n.dropdown-item {\r\n    font-size: 14px;\r\n  }\r\n.dropdown-item:active, a.link-active {\r\n    background-color: #592B81 !important;\r\n    color: white;\r\n  }\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudC9uYXYtbWVudS9uYXYtbWVudS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtBQUNkO0FBQ0E7RUFDRSxnQ0FBZ0M7QUFDbEM7QUFHQTtFQUNFLGlCQUFpQjtBQUNuQjtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixtQkFBbUI7RUFDbkIsb0JBQW9CO0FBQ3RCO0FBRUE7RUFDRTtBQUNGO0FBQ0E7RUFDRSxlQUFlO0FBQ2pCO0FBRUM7SUFDRyxlQUFlO0VBQ2pCO0FBQ0E7SUFDRSxvQ0FBb0M7SUFDcEMsWUFBWTtFQUNkIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudC9uYXYtbWVudS9uYXYtbWVudS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdmJhci1saWdodCAubmF2YmFyLW5hdiAubmF2LWxpbmsge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4ubmF2YmFye1xyXG4gIGJvcmRlci1ib3R0b206IDRweCBzb2xpZCAjZjhiNTFmO1xyXG59XHJcblxyXG5cclxuLm5hdmJhciAubmF2YmFyLW5hdi5uYXZiYXItcmlnaHQge1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG59XHJcblxyXG4ubmF2YmFyIC5uYXYtZGl2aWRlciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiAxcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcclxuICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcclxufVxyXG5cclxuLm5hdmJhci10ZXh0IC5mYSwgLm5hdi1pdGVtIC5mYSwgLmRyb3Bkb3duLWl0ZW0gLmZhIHtcclxuICBtYXJnaW4tcmlnaHQ6IDAuNXJlbVxyXG59XHJcbi5kcm9wZG93bi1pdGVtIC5mYSwgLmRyb3Bkb3duLWl0ZW0ge1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG5cclxuIC5kcm9wZG93bi1pdGVtIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICB9XHJcbiAgLmRyb3Bkb3duLWl0ZW06YWN0aXZlLCBhLmxpbmstYWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1OTJCODEgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/shared/component/nav-menu/nav-menu.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/shared/component/nav-menu/nav-menu.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<nav class=\"navbar navbar-expand-lg navbar-light bg-primary\">\r\n  <div class=\"container pl-0\">\r\n    <a class=\"navbar-brand fa fa-car text-white\" href=\"#\"> VEEGA VEHICLE PORTAL</a>\r\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNavDropdown\" aria-controls=\"navbarNavDropdown\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n      <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n    <div class=\"collapse navbar-collapse\" id=\"navbar\">\r\n      <div class=\"nav navbar-nav navbar-right\">\r\n        <div class=\"nav-divider\"></div>\r\n        <div class=\"navbar-text text-white\"><i class=\"fa fa-h-square\"></i>Home</div>\r\n        <div class=\"nav-divider\"></div>\r\n        <div class=\"nav-item\"><a class=\"nav-link\" [routerLink]=\"['/counter']\" [routerLinkActive]=\"['link-active']\"><i class=\"fa fa-link\"></i>Counter</a></div>\r\n        <div class=\"nav-divider\"></div>\r\n        <div class=\"nav-item disabled\"><a class=\"nav-link\" [routerLink]=\"['/fetch-data']\" [routerLinkActive]=\"['link-active']\">Fetch Data</a></div>\r\n        <div class=\"nav-divider\"></div>\r\n        <div class=\"nav-item text-white dropdown\">\r\n          <a class=\"nav-link dropdown-toggle\" [routerLink]=\"['/vehicles']\" id=\"navbarDropdownMenuLink\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n            Vehicles\r\n          </a>\r\n          <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdownMenuLink\">\r\n            <a class=\"dropdown-item\" [routerLink]=\"['/vehicles/new']\" [routerLinkActive]=\"['link-active']\"><i class=\"fa fa-plus\"></i>New Vehicle</a>\r\n            <a class=\"dropdown-item\" href=\"#\">Another action</a>\r\n            <a class=\"dropdown-item\" href=\"#\">Something else here</a>\r\n          </div>\r\n        </div>\r\n        <div class=\"nav-divider\"></div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</nav>\r\n"

/***/ }),

/***/ "./src/app/shared/component/nav-menu/nav-menu.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/shared/component/nav-menu/nav-menu.component.ts ***!
  \*****************************************************************/
/*! exports provided: NavMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavMenuComponent", function() { return NavMenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavMenuComponent = /** @class */ (function () {
    function NavMenuComponent() {
    }
    NavMenuComponent.prototype.ngOnInit = function () {
    };
    NavMenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nav-menu',
            template: __webpack_require__(/*! ./nav-menu.component.html */ "./src/app/shared/component/nav-menu/nav-menu.component.html"),
            styles: [__webpack_require__(/*! ./nav-menu.component.css */ "./src/app/shared/component/nav-menu/nav-menu.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NavMenuComponent);
    return NavMenuComponent;
}());



/***/ }),

/***/ "./src/app/shared/component/pagination/pagination.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/shared/component/pagination/pagination.component.ts ***!
  \*********************************************************************/
/*! exports provided: PaginationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationComponent", function() { return PaginationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PaginationComponent = /** @class */ (function () {
    function PaginationComponent() {
        this.pageSize = 10;
        this.pageChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.currentPage = 1;
    }
    PaginationComponent.prototype.ngOnChanges = function () {
        this.currentPage = 1;
        var pagesCount = Math.ceil(this.totalItems / this.pageSize);
        this.pages = [];
        for (var i = 1; i <= pagesCount; i++)
            this.pages.push(i);
        console.log(this);
    };
    PaginationComponent.prototype.changePage = function (page) {
        this.currentPage = page;
        this.pageChanged.emit(page);
    };
    PaginationComponent.prototype.previous = function () {
        if (this.currentPage == 1)
            return;
        this.currentPage--;
        this.pageChanged.emit(this.currentPage);
    };
    PaginationComponent.prototype.next = function () {
        if (this.currentPage == this.pages.length)
            return;
        this.currentPage++;
        console.log("next", this);
        this.pageChanged.emit(this.currentPage);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('total-items'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PaginationComponent.prototype, "totalItems", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('page-size'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PaginationComponent.prototype, "pageSize", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('page-changed'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PaginationComponent.prototype, "pageChanged", void 0);
    PaginationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'pagination',
            template: "\n    <nav *ngIf=\"totalItems > pageSize\">\n        <ul class=\"pagination\">\n            <li class=\"page-item\" [class.disabled]=\"currentPage == 1\">\n                <a (click)=\"previous()\" class=\"page-link\" aria-label=\"Previous\">\n                <span aria-hidden=\"true\">&laquo;</span>\n                </a>\n            </li>\n            <li  class=\"page-item\" [class.active]=\"currentPage == page\" *ngFor=\"let page of pages\" (click)=\"changePage(page)\">\n                <a class=\"page-link\">{{ page }}</a>\n            </li>\n            <li class=\"page-item\" [class.disabled]=\"currentPage == pages.length\">\n                <a (click)=\"next()\" aria-label=\"Next\" class=\"page-link\">\n                <span aria-hidden=\"true\">&raquo;</span>\n                </a>\n            </li>\n        </ul>\n    </nav>  \n"
        })
    ], PaginationComponent);
    return PaginationComponent;
}());



/***/ }),

/***/ "./src/app/vehicle-form/vehicle-form.component.css":
/*!*********************************************************!*\
  !*** ./src/app/vehicle-form/vehicle-form.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".alert-success{\r\n    background-color: green;\r\n}\r\n\r\n.alert-danger{\r\n    background-color: red;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmVoaWNsZS1mb3JtL3ZlaGljbGUtZm9ybS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCIiwiZmlsZSI6InNyYy9hcHAvdmVoaWNsZS1mb3JtL3ZlaGljbGUtZm9ybS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFsZXJ0LXN1Y2Nlc3N7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcclxufVxyXG5cclxuLmFsZXJ0LWRhbmdlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/vehicle-form/vehicle-form.component.html":
/*!**********************************************************!*\
  !*** ./src/app/vehicle-form/vehicle-form.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Default form register -->\r\n<div *ngIf=\"messg\"  id=\"toast\" [ngClass]=\"{'col-12': isModal}\"class=\"font-weight-bold col-6 mx-auto alert alert-danger text-white text-center\" role=\"alert\">\r\n  {{messg}}\r\n</div>\r\n<div *ngIf=\"messgSuccess\"  id=\"toast\" [ngClass]=\"{'col-12': isModal}\"class=\"font-weight-bold col-6 mx-auto alert alert-success text-white text-center\" role=\"alert\">\r\n  {{messgSuccess}}\r\n</div>\r\n<div class=\"container h-100\">\r\n  <div class=\"row h-100 justify-content-center align-items-center\">\r\n    <div class=\"card col\">\r\n      <form [formGroup]=\"vehicleForm\" (ngSubmit)=\"onSubmit()\" class=\"text-center border border-light p-5\">\r\n        <h2 class=\"mb-4\">New Vehicle</h2>\r\n        <div class=\"form-row mb-4\">\r\n          <div class=\"col\">\r\n            <select #make class=\"browser-default custom-select\" (change)=\"onMakeChange(make.value)\" formControlName=\"makeId\">\r\n              <option value = \"\" disabled>Select make</option>\r\n              <option *ngFor=\"let m of makes\" value=\"{{m.id}}\">{{m.name}}</option>\r\n            </select>\r\n          </div>\r\n          <div class=\"col mb-4\">\r\n            <select formControlName=\"modelId\" class=\"browser-default custom-select\" [ngClass]=\"{'is-invalid': modelId.touched && (modelId.errors?.required), 'is-valid': modelId.valid}\">\r\n              <option value = \"\" disabled>Select model</option>\r\n              <option *ngFor=\"let m of models\" value=\"{{m.id}}\">{{m.name}}</option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n        <p class=\"text-left\">Is this vehicle registered?</p>\r\n        <div class=\"text-left mb-4\">\r\n          <div class=\"form-check form-check-inline\">\r\n            <input class=\"form-check-input\" formControlName=\"isRegistered\" type=\"radio\" id=\"registered\" [value]=\"true\">\r\n            <label class=\"form-check-label\" for=\"registered\"> Yes</label>\r\n          </div>\r\n          <div class=\"form-check form-check-inline\">\r\n            <input class=\"form-check-input\" formControlName=\"isRegistered\" type=\"radio\" id=\"notRegistered\"\r\n              [value]=\"false\">\r\n            <label class=\"form-check-label\" for=\"notRegistered\">No</label>\r\n          </div>\r\n        </div>\r\n        <div class=\"h4 mb-4 text-left\">Features</div>\r\n        <div class=\"form-check text-left mb-4\" *ngFor=\"let f of features\">\r\n          <input formArrayName=\"features\" class=\"form-check-input\"  type=\"checkbox\" value=\"{{f.id}}\" [checked]=\"vehicle.features?.includes(f.id)\" (change)=\"onCheckChanges($event.target)\">\r\n          <label class=\"form-check-label\"> {{f.name}}</label>\r\n        </div>\r\n        <div formGroupName=\"contact\">\r\n              <div class=\"h4 mb-4 text-left\">Contact</div>\r\n        <div class=\"form-group text-left col-sm-6\">\r\n          <label for=\"\">Name</label>\r\n          <div class=\"input-group\">\r\n            <div class=\"input-group-prepend\">\r\n              <div class=\"input-group-text\">Name</div>\r\n            </div>\r\n            <input type=\"text\" class=\"form-control\" id=\"\" placeholder=\"enter name\" formControlName=\"name\" [ngClass]=\"{'is-invalid': name.touched && (name.errors?.required), 'is-valid': name.valid}\">\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group text-left col-sm-6\">\r\n          <label for=\"\">Phone Number</label>\r\n          <div class=\"input-group\">\r\n            <input type=\"tel\" class=\"form-control\" id=\"\" pattern=\"^[0-9]*$\" placeholder=\"enter phone number\" formControlName=\"phone_number\" [ngClass]=\"{'is-invalid': phone_number.touched && (phone_number.errors?.required), 'is-valid': phone_number.valid}\">\r\n            <div class=\"input-group-append\">\r\n              <div class=\"input-group-text\">#</div>\r\n            </div>\r\n          </div>\r\n          <span *ngIf=\"phone_number.errors?.pattern\"\r\n          [ngClass]=\"{'text-danger': phone_number.errors?.pattern}\">phone number must be numeric</span>\r\n        </div>\r\n        <div class=\"form-group text-left col-sm-6 mb-4\">\r\n          <label for=\"\">Email</label>\r\n          <div class=\"input-group\">\r\n            <div class=\"input-group-prepend\">\r\n              <div class=\"input-group-text\">@</div>\r\n            </div>\r\n            <input pattern=\"[a-zA-Z0-9.-]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}\" type=\"email\" class=\"form-control\" id=\"\" placeholder=\"enter email\" formControlName=\"email\" [ngClass]=\"{'is-invalid': email.touched && (email.errors?.required), 'is-valid': email.valid}\">\r\n          </div>\r\n          <span *ngIf=\"email.errors?.pattern\"\r\n          [ngClass]=\"{'text-danger': email.errors?.pattern}\">enter only valid email address</span>\r\n          </div>\r\n        </div>\r\n        <hr>\r\n        <div class=\"row mt-4 my-auto mx-auto col-6 offset-6\">\r\n          <button *ngIf=\"!vehicle.id\" class=\"btn btn-warning mr-2 col-sm-2 text-white my-4 btn-block\" type=\"submit\">Sign in</button>\r\n          <button *ngIf=\"vehicle.id\" class=\"btn btn-warning mr-2 col-sm-2 text-white my-4 btn-block\" type=\"submit\">Save</button>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n<!-- this.vehicle.id -->"

/***/ }),

/***/ "./src/app/vehicle-form/vehicle-form.component.ts":
/*!********************************************************!*\
  !*** ./src/app/vehicle-form/vehicle-form.component.ts ***!
  \********************************************************/
/*! exports provided: VehicleFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehicleFormComponent", function() { return VehicleFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_vehicle_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/vehicle.service */ "./src/app/service/vehicle.service.ts");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _model_vehicle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../model/vehicle */ "./src/app/model/vehicle.ts");








var VehicleFormComponent = /** @class */ (function () {
    function VehicleFormComponent(_vehicleService, _formBuilder, _route, _router) {
        var _this = this;
        this._vehicleService = _vehicleService;
        this._formBuilder = _formBuilder;
        this._route = _route;
        this._router = _router;
        this.vehicle = {};
        _route.params.subscribe(function (p) {
            _this.vehicle.id = +p['id']; // the plus sign converts it to a number
            console.log("vehicle id", _this.vehicle.id);
        });
    }
    VehicleFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.vehicleForm = this._formBuilder.group({
            makeId: [''],
            modelId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            features: this._formBuilder.array([]),
            isRegistered: [],
            contact: this._formBuilder.group({
                name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern("[a-zA-Z0-9.-]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}")]],
                phone_number: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern("^[0-9]*$")]]
            })
        });
        var sources = [
            this._vehicleService.getMakes(),
            this._vehicleService.getFeatures(),
        ];
        if (this.vehicle.id > 0)
            sources.push(this._vehicleService.getVehicleDetails(this.vehicle.id));
        //Sending parallel request
        Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["forkJoin"])(sources).subscribe(function (data) {
            _this.makes = data[0];
            _this.features = data[1];
            //check is there is vehicle id, as the vehicle object is used for update
            if (_this.vehicle.id > 0) {
                _this.vehicle = data[2];
                _this.setVehicle(_this.vehicle);
                _this.populateModel(_this.vehicle.makes.id);
            }
        }, function (err) {
            if (err.status == 404)
                _this._router.navigate(['/home']);
        });
    };
    Object.defineProperty(VehicleFormComponent.prototype, "modelId", {
        get: function () {
            return this.vehicleForm.get("modelId");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VehicleFormComponent.prototype, "isRegistered", {
        get: function () {
            return this.vehicleForm.get("isRegistered");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VehicleFormComponent.prototype, "name", {
        get: function () {
            return this.vehicleForm.get("contact.name");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VehicleFormComponent.prototype, "email", {
        get: function () {
            return this.vehicleForm.get("contact.email");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VehicleFormComponent.prototype, "phone_number", {
        get: function () {
            return this.vehicleForm.get("contact.phone_number");
        },
        enumerable: true,
        configurable: true
    });
    VehicleFormComponent.prototype.setVehicle = function (v) {
        var formArray = this.vehicleForm.controls.features;
        this.vehicleForm.patchValue({
            makeId: v.makes.id,
            modelId: v.models.id,
            isRegistered: v.isRegistered,
            contact: {
                name: v.contact.name,
                email: v.contact.email,
                phone_number: v.contact.phone_number
            }
        });
        this.vehicle.features.forEach(function (val) {
            formArray.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]((val.id)));
        });
        console.log("patchded", this.vehicleForm.value);
    };
    VehicleFormComponent.prototype.populateModel = function (val) {
        var selectedMake = this.makes.find(function (x) { return x.id === parseInt(val); }).models;
        this.models = !Object(util__WEBPACK_IMPORTED_MODULE_3__["isNullOrUndefined"])(selectedMake) ? selectedMake : [];
    };
    VehicleFormComponent.prototype.onCheckChanges = function (target) {
        var formArray = this.vehicleForm.controls.features;
        //selected
        if (target.checked) {
            //add a new control in the for array
            formArray.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](target.value));
        }
        //unselected
        else {
            var index = formArray.controls.findIndex(function (x) { return x.value === target.value; });
            formArray.removeAt(index);
        }
    };
    VehicleFormComponent.prototype.onMakeChange = function (val) {
        this.populateModel(val);
    };
    VehicleFormComponent.prototype.onSubmit = function () {
        var _this = this;
        this.scrollToTop();
        if (this.vehicleForm.invalid)
            return;
        var formValue = this.vehicleForm.value;
        delete formValue["makeId"]; //not part of the model;
        console.log("update", formValue);
        this.vehicleForm.reset();
        if (this.vehicle.id) {
            this._vehicleService.updateVehicleDetails(this.vehicle.id, formValue).subscribe(function (val) {
                if (val instanceof _model_vehicle__WEBPACK_IMPORTED_MODULE_7__["SaveVehicle"])
                    _this.setVehicle(_this.vehicle);
                _this.messgSuccess = "Successfully updated record";
                _this._router.navigate(['/vehicles/', _this.vehicle.id]);
            }, function (err) {
                _this.messg = "Unexpected error occured.";
            });
        }
        else {
            this._vehicleService.createVehicleDetails(formValue).subscribe(function (val) {
                _this._router.navigate(['/vehicles/', val.id]);
            }, function (err) {
                _this.messg = "Unexpected error occured.";
            });
        }
    };
    VehicleFormComponent.prototype.scrollToTop = function () {
        window.scroll(0, 0);
    };
    VehicleFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-vehicle-form',
            template: __webpack_require__(/*! ./vehicle-form.component.html */ "./src/app/vehicle-form/vehicle-form.component.html"),
            styles: [__webpack_require__(/*! ./vehicle-form.component.css */ "./src/app/vehicle-form/vehicle-form.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_vehicle_service__WEBPACK_IMPORTED_MODULE_2__["VehicleService"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], VehicleFormComponent);
    return VehicleFormComponent;
}());



/***/ }),

/***/ "./src/app/vehicle-list/vehicle-list.component.css":
/*!*********************************************************!*\
  !*** ./src/app/vehicle-list/vehicle-list.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#sort{\r\n    cursor: pointer;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmVoaWNsZS1saXN0L3ZlaGljbGUtbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL3ZlaGljbGUtbGlzdC92ZWhpY2xlLWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNzb3J0e1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/vehicle-list/vehicle-list.component.html":
/*!**********************************************************!*\
  !*** ./src/app/vehicle-list/vehicle-list.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container my-auto mx-auto\"> \n    <div class=\"row mt-2 mb-2\">\n        <button routerLink=\"/vehicles/new\" class=\"btn btn-warning mr-2 col-sm-2 text-white my-4 btn-block\" type=\"button\">New Vehicle</button>\n      </div>\n      <div class=\"form-group col-4 offset-8 well\">\n          <label for=\"make.id\"></label>\n          <select id=\"make.id\" #select class=\"form-control\" (change)=\"onFilterChange(select.value)\">\n            <option [disabled] value=\"\">--select--</option>\n            <option *ngFor=\"let m of makes\" [value]=\"m.id\">{{m.name}}</option>\n          </select>\n        </div>\n    <table class=\"table table-striped\">\n        <thead>\n          <tr>\n            <th>S/N</th>\n            <th>ID</th>\n            <th id=\"sort\" (click)=\"sortBy('make')\">Make <i *ngIf=\"queryObj.SortString === 'make'\" class=\"fa\" \n              [class.fa-sort-asc]=\"queryObj.isAscending\"\n              [class.fa-sort-desc]=\"!queryObj.isAscending\"></i></th>\n            <th id=\"sort\" (click)=\"sortBy('model')\">Model <i *ngIf=\"queryObj.SortString === 'model'\" class=\"fa\" \n              [class.fa-sort-asc]=\"queryObj.isAscending\"\n              [class.fa-sort-desc]=\"!queryObj.isAscending\"></i></th>\n            <th id=\"sort\" (click)=\"sortBy('contactName')\">Contact Name <i *ngIf=\"queryObj.SortString === 'contactName'\" class=\"fa\" \n              [class.fa-sort-asc]=\"queryObj.isAscending\"\n              [class.fa-sort-desc]=\"!queryObj.isAscending\"></i></th>\n            <th></th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let v of vehicles; let i = index\"  [class.active]=\"i == selectedRow\">\n              <td>{{i+1}}</td>\n            <td>{{v.id}}</td>\n            <td>{{v.makes.name}}</td>\n            <td>{{v.models.name}}</td>\n            <td>{{v.contact.name}}</td>\n            <td [routerLink]=\"['/vehicles/', v.id]\"><button class=\"btn btn-link\">view</button></td>\n          </tr>\n        </tbody>\n      </table>\n      <pagination [total-items]=\"totalItems\" [page-size]=\"queryObj.pageSize\" (page-changed)=\"onPageChanged($event)\"></pagination>\n</div>"

/***/ }),

/***/ "./src/app/vehicle-list/vehicle-list.component.ts":
/*!********************************************************!*\
  !*** ./src/app/vehicle-list/vehicle-list.component.ts ***!
  \********************************************************/
/*! exports provided: VehicleListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehicleListComponent", function() { return VehicleListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_vehicle_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/vehicle.service */ "./src/app/service/vehicle.service.ts");
/* harmony import */ var _model_vehicle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model/vehicle */ "./src/app/model/vehicle.ts");




var VehicleListComponent = /** @class */ (function () {
    function VehicleListComponent(_vehicleService) {
        this._vehicleService = _vehicleService;
        this._PageSize = 3;
        this.queryObj = new _model_vehicle__WEBPACK_IMPORTED_MODULE_3__["VehicleQuery"](this._PageSize);
    }
    VehicleListComponent.prototype.ngOnInit = function () {
        this.getMakes();
        this.populateVehicles(this.queryObj);
    };
    VehicleListComponent.prototype.populateVehicles = function (queryObj) {
        var _this = this;
        this._vehicleService.getVehicleDetailsList(queryObj).subscribe(function (val) {
            _this.allVehicles = _this.vehicles = val.items;
            _this.totalItems = val.totalItems;
        });
    };
    VehicleListComponent.prototype.getMakes = function () {
        var _this = this;
        this._vehicleService.getMakes().subscribe(function (val) {
            _this.makes = val;
        });
    };
    //for filtering
    VehicleListComponent.prototype.onFilterChange = function (id) {
        //server side filtering
        this.queryObj.makeId = id;
        //this ensures that filetering of data starts at 0 index in the middleware
        this.queryObj.page = 1;
        this.populateVehicles(this.queryObj);
        //commented code works for client side filtering
        //  if(id){
        //   const vehicles = this.allVehicles;
        //   this.vehicles = vehicles.filter(v => v.makes.id == id);
        //  }
        //  else{
        //    this.vehicles = this.allVehicles;
        //  }
    };
    VehicleListComponent.prototype.sortBy = function (columnName) {
        console.log(this.queryObj);
        if (this.queryObj.sortString === columnName) {
            this.queryObj.isAscending = !this.queryObj.isAscending;
        }
        else {
            this.queryObj.sortString = columnName;
            this.queryObj.isAscending = false;
        }
        this.populateVehicles(this.queryObj);
    };
    VehicleListComponent.prototype.onPageChanged = function (page) {
        this.queryObj.page = page;
        this.populateVehicles(this.queryObj);
    };
    VehicleListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-vehicle-list',
            template: __webpack_require__(/*! ./vehicle-list.component.html */ "./src/app/vehicle-list/vehicle-list.component.html"),
            styles: [__webpack_require__(/*! ./vehicle-list.component.css */ "./src/app/vehicle-list/vehicle-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_vehicle_service__WEBPACK_IMPORTED_MODULE_2__["VehicleService"]])
    ], VehicleListComponent);
    return VehicleListComponent;
}());



/***/ }),

/***/ "./src/app/view-vehicle/view-vehicle.component.css":
/*!*********************************************************!*\
  !*** ./src/app/view-vehicle/view-vehicle.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXctdmVoaWNsZS92aWV3LXZlaGljbGUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/view-vehicle/view-vehicle.component.html":
/*!**********************************************************!*\
  !*** ./src/app/view-vehicle/view-vehicle.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container my-auto mx-auto\"> \n<ul class=\"nav nav-tabs\" id=\"myTab\" role=\"tablist\" *ngIf=\"vehicleInfo\">\n    <li class=\"nav-item\">\n      <a class=\"nav-link active\" id=\"vehicle-tab\" data-toggle=\"tab\" href=\"#vehicle\" role=\"tab\" aria-controls=\"vehicle\" aria-selected=\"true\">Vehicle</a>\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" id=\"photo-tab\" data-toggle=\"tab\" href=\"#photo\" role=\"tab\" aria-controls=\"photo\" aria-selected=\"false\">Photo</a>\n    </li>\n  </ul>\n  <div class=\"tab-content\" id=\"myTabContent\">\n    <div class=\"tab-pane fade show active\" id=\"vehicle\" role=\"tabpanel\" aria-labelledby=\"vehicle-tab\">\n      <h2 class=\"mt-5\">Basic Information</h2>\n      <ul>\n        <li>Make: {{vehicleInfo?.makes.name}}</li>\n        <li>Model: {{vehicleInfo?.models.name}}</li>\n          <li>Registered: {{vehicleInfo?.isRegistered}}</li>\n      </ul>\n      <div class=\"mt-3\" *ngIf=\"vehicleInfo?.features.length > 0\">\n          <h2 class=\"mt-5\">Features</h2>\n          <ul *ngFor=\"let feature of vehicleInfo?.features\">\n            <li>{{feature?.name}}</li>\n          </ul>\n      </div>\n      <h2 class=\"mt-3\">Contact Details</h2>\n      <ul>\n        <li>Name: {{vehicleInfo?.contact.name}}</li>\n        <li>Email: {{vehicleInfo?.contact.email}}</li>\n          <li>Phone Number: {{vehicleInfo?.contact.phone_number}}</li>\n      </ul>\n    </div>\n    <div class=\"tab-pane fade\" id=\"photo\" role=\"tabpanel\" aria-labelledby=\"photo-tab\">\n      <h2 class=\"mt-5\">Photos</h2>\n      <input class=\"mb-5\" type=\"file\" (change)=\"uploadPhoto()\" #fileInput>\n      <img *ngFor=\"let photo of photos\" src=\"\\uploads\\32a2c4b8-a50a-4a38-a9e2-0ae0d85ccb9a.jpg\" alt=\"\" class=\"img-thumbnail\">\n    </div>\n  </div>\n  <div class=\"row mt-4 my-auto col-6\">\n      <button class=\"btn btn-warning mr-2 col-sm-2 text-white my-4 btn-block\" [routerLink]=\"['/vehicles/edit/', vehicleInfo?.id]\">Edit</button>\n      <button  class=\"btn btn-danger  mr-2 col-sm-2 text-white my-4 btn-block\" type=\"button\" (click)=\"delete()\">Delete</button>\n      <button class=\"btn col-sm-2 text-primary my-4 btn-link\">Back <i class=\"fa fa-arrow-circle-right\"></i></button>\n    </div>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/view-vehicle/view-vehicle.component.ts":
/*!********************************************************!*\
  !*** ./src/app/view-vehicle/view-vehicle.component.ts ***!
  \********************************************************/
/*! exports provided: ViewVehicleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewVehicleComponent", function() { return ViewVehicleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_vehicle_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/vehicle.service */ "./src/app/service/vehicle.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_photo_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/photo.service */ "./src/app/service/photo.service.ts");





var ViewVehicleComponent = /** @class */ (function () {
    function ViewVehicleComponent(_vehicleService, _photoService, _route, _router) {
        var _this = this;
        this._vehicleService = _vehicleService;
        this._photoService = _photoService;
        this._route = _route;
        this._router = _router;
        this.photos = [];
        _route.params.subscribe(function (p) {
            _this.vehicleId = +p['id']; // the plus sign converts it to a number
            if (isNaN(_this.vehicleId) || _this.vehicleId == 0) {
                _this._router.navigate(['/vehicles']);
                return;
            }
        });
    }
    ViewVehicleComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._vehicleService.getVehicleDetails(this.vehicleId).subscribe(function (val) {
            _this.vehicleInfo = val;
        });
        this.getPhotoList();
    };
    ViewVehicleComponent.prototype.delete = function () {
        var _this = this;
        //display a confirmation box
        if (confirm("Are you sure")) {
            this._vehicleService.deleteVehicleDetails(this.vehicleInfo.id).subscribe(function (val) {
                console.log(val);
                //navigate to home page
                _this._router.navigate(['/home']);
            });
        }
    };
    ViewVehicleComponent.prototype.uploadPhoto = function () {
        var nativeElement = this.fileInput.nativeElement;
        if (nativeElement.files && nativeElement.files[0]) {
            this._photoService.upload(this.vehicleId, nativeElement.files[0]).subscribe(function (val) {
                console.log(val);
            });
        }
    };
    ViewVehicleComponent.prototype.getPhotoList = function () {
        var _this = this;
        this._photoService.getPhotoList(this.vehicleId).subscribe(function (val) {
            _this.imageUrl = "./uploads";
            _this.photos = val;
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('fileInput'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], ViewVehicleComponent.prototype, "fileInput", void 0);
    ViewVehicleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-view-vehicle',
            template: __webpack_require__(/*! ./view-vehicle.component.html */ "./src/app/view-vehicle/view-vehicle.component.html"),
            styles: [__webpack_require__(/*! ./view-vehicle.component.css */ "./src/app/view-vehicle/view-vehicle.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_vehicle_service__WEBPACK_IMPORTED_MODULE_2__["VehicleService"], _service_photo_service__WEBPACK_IMPORTED_MODULE_4__["PhotoService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ViewVehicleComponent);
    return ViewVehicleComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    makeUrl: 'http://localhost:5676/api/make',
    featureUrl: 'http://localhost:5676/api/feature',
    detailsUrl: 'http://localhost:5676/api/vehicle-details'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\PPProjects\VEEGA_APP\VEEGA_APP\ClientApp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map