webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__products_products_component__ = __webpack_require__("../../../../../src/app/products/products.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__not_found_not_found_component__ = __webpack_require__("../../../../../src/app/not-found/not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__products_product_edit_product_edit_component__ = __webpack_require__("../../../../../src/app/products/product-edit/product-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__products_product_detail_product_detail_component__ = __webpack_require__("../../../../../src/app/products/product-detail/product-detail.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var appRoutes = [
    { path: '', redirectTo: '/products', pathMatch: 'full' },
    { path: 'products?page=1', redirectTo: 'products' },
    { path: 'products', component: __WEBPACK_IMPORTED_MODULE_2__products_products_component__["a" /* ProductsComponent */], children: [
            { path: 'new', component: __WEBPACK_IMPORTED_MODULE_4__products_product_edit_product_edit_component__["a" /* ProductEditComponent */] },
            { path: ':id', component: __WEBPACK_IMPORTED_MODULE_5__products_product_detail_product_detail_component__["a" /* ProductDetailComponent */] },
            { path: ':id/edit', component: __WEBPACK_IMPORTED_MODULE_4__products_product_edit_product_edit_component__["a" /* ProductEditComponent */] },
        ] },
    { path: 'not-found', component: __WEBPACK_IMPORTED_MODULE_3__not_found_not_found_component__["a" /* NotFoundComponent */] },
    { path: '**', redirectTo: '/not-found' }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(appRoutes, { useHash: true })
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]
        ]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-error-window></app-error-window>\n<app-header></app-header>\n<div class=\"container-fluid\">\n    <div class=\"row\">\n        <div class=\"col-xs-12\">\n            <router-outlet></router-outlet>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__products_product_list_product_list_component__ = __webpack_require__("../../../../../src/app/products/product-list/product-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__products_product_detail_product_detail_component__ = __webpack_require__("../../../../../src/app/products/product-detail/product-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__products_product_service__ = __webpack_require__("../../../../../src/app/products/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__header_header_component__ = __webpack_require__("../../../../../src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__products_products_component__ = __webpack_require__("../../../../../src/app/products/products.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_data_storage_service__ = __webpack_require__("../../../../../src/app/shared/data-storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__not_found_not_found_component__ = __webpack_require__("../../../../../src/app/not-found/not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__products_product_list_product_item_product_item_component__ = __webpack_require__("../../../../../src/app/products/product-list/product-item/product-item.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__shared_dropdown_directive__ = __webpack_require__("../../../../../src/app/shared/dropdown.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_angular2_moment__ = __webpack_require__("../../../../angular2-moment/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_angular2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_angular2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_ngx_order_pipe__ = __webpack_require__("../../../../ngx-order-pipe/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_ngx_order_pipe___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_ngx_order_pipe__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__shared_filter_by_text_pipe__ = __webpack_require__("../../../../../src/app/shared/filter-by-text.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__shared_filter_by_range_pipe__ = __webpack_require__("../../../../../src/app/shared/filter-by-range.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__shared_filter_by_contain_pipe__ = __webpack_require__("../../../../../src/app/shared/filter-by-contain.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__products_product_filters_product_filters_component__ = __webpack_require__("../../../../../src/app/products/product-filters/product-filters.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_mydatepicker__ = __webpack_require__("../../../../mydatepicker/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__products_product_edit_product_edit_component__ = __webpack_require__("../../../../../src/app/products/product-edit/product-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__error_window_error_window_component__ = __webpack_require__("../../../../../src/app/error-window/error-window.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__shared_error_handle_service__ = __webpack_require__("../../../../../src/app/shared/error-handle.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

























var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_3__products_product_list_product_list_component__["a" /* ProductListComponent */],
            __WEBPACK_IMPORTED_MODULE_4__products_product_detail_product_detail_component__["a" /* ProductDetailComponent */],
            __WEBPACK_IMPORTED_MODULE_7__header_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_8__products_products_component__["a" /* ProductsComponent */],
            __WEBPACK_IMPORTED_MODULE_10__not_found_not_found_component__["a" /* NotFoundComponent */],
            __WEBPACK_IMPORTED_MODULE_12__products_product_list_product_item_product_item_component__["a" /* ProductItemComponent */],
            __WEBPACK_IMPORTED_MODULE_13__shared_dropdown_directive__["a" /* DropdownDirective */],
            __WEBPACK_IMPORTED_MODULE_17__shared_filter_by_text_pipe__["a" /* FilterByTextPipe */],
            __WEBPACK_IMPORTED_MODULE_18__shared_filter_by_range_pipe__["a" /* FilterByRangePipe */],
            __WEBPACK_IMPORTED_MODULE_19__shared_filter_by_contain_pipe__["a" /* FilterByContainPipe */],
            __WEBPACK_IMPORTED_MODULE_20__products_product_filters_product_filters_component__["a" /* ProductFiltersComponent */],
            __WEBPACK_IMPORTED_MODULE_22__products_product_edit_product_edit_component__["a" /* ProductEditComponent */],
            __WEBPACK_IMPORTED_MODULE_23__error_window_error_window_component__["a" /* ErrorWindowComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_11__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_16__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_16__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_14_angular2_moment__["MomentModule"],
            __WEBPACK_IMPORTED_MODULE_15_ngx_order_pipe__["OrderModule"],
            __WEBPACK_IMPORTED_MODULE_21_mydatepicker__["MyDatePickerModule"],
            __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* HttpModule */],
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_6__products_product_service__["a" /* ProductService */], __WEBPACK_IMPORTED_MODULE_9__shared_data_storage_service__["a" /* DataStorageService */], __WEBPACK_IMPORTED_MODULE_24__shared_error_handle_service__["a" /* ErrorHandleService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/error-window/error-window.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".error-window-container {\n    position: fixed;\n    top: 0px;\n    left: 0px;\n    right: 0px;\n    margin: auto;\n    z-index:2000;\n    height: 50px;\n    overflow: hidden;\n    -webkit-animation: dropdown 200ms;\n    animation: dropdown 200ms;\n}\n.press-down{\n    height: 50px;\n    margin-top: 1px;\n    border-bottom: 1px solid rgb(255, 166, 165);\n    -webkit-animation: dropdown 200ms;\n    animation: dropdown 200ms;\n}\n\n.panel {\n    -o-box-shadow: 0 10px 15px -5px rgba(0,0,0,0.3);\n    box-shadow: 0 10px 15px -5px rgba(0,0,0,0.3);\n}\n\n@-webkit-keyframes dropdown {\n    0% { height: 0 }\n    100% {height: 50px}\n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/error-window/error-window.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"errorMessage\">\n  <div class=\"error-window-container container-fluid\">\n    <div class=\"row\">\n      <div class=\"alert alert-danger\" role=\"alert\">\n        <span class=\"glyphicon glyphicon-exclamation-sign\" aria-hidden=\"true\"></span>\n        <strong>{{ errorMessage.header }}:</strong>\n        {{ errorMessage.body }}\n        <span style=\"cursor: pointer;\" class=\"pull-right\" (click)=\"onCloseWindow()\">&times;</span>\n      </div>\n    </div>\n  </div>\n  <div class=\"press-down\"></div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/error-window/error-window.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_error_handle_service__ = __webpack_require__("../../../../../src/app/shared/error-handle.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorWindowComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ErrorWindowComponent = (function () {
    function ErrorWindowComponent(errorHandleService) {
        this.errorHandleService = errorHandleService;
        this.isClose = '';
    }
    ErrorWindowComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.errorSubscription = this.errorHandleService.onErrorAdded.subscribe(function (error) {
            _this.errorMessage = error;
        });
    };
    ErrorWindowComponent.prototype.onCloseWindow = function () {
        this.errorMessage = null;
    };
    ErrorWindowComponent.prototype.ngOnDestroy = function () {
        this.errorSubscription.unsubscribe();
    };
    return ErrorWindowComponent;
}());
ErrorWindowComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-error-window',
        template: __webpack_require__("../../../../../src/app/error-window/error-window.component.html"),
        styles: [__webpack_require__("../../../../../src/app/error-window/error-window.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_error_handle_service__["a" /* ErrorHandleService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_error_handle_service__["a" /* ErrorHandleService */]) === "function" && _a || Object])
], ErrorWindowComponent);

var _a;
//# sourceMappingURL=error-window.component.js.map

/***/ }),

/***/ "../../../../../src/app/header/header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".navbar {\n    background-color: white;\n    border-bottom: 1px solid #ececec;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <a class=\"navbar-brand\" routerLink=\"/\">Products Manager</a>\n    </div>\n    <div class=\"navbar-collapse\">\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li class=\"dropdown\" appDropdown>\n          <a style=\"cursor:pointer;\">\n            <span class=\"glyphicon glyphicon-user\"></span><span class=\"caret\"></span>\n          </a>\n          <ul class=\"dropdown-menu\">\n            <li>\n              <a><i class=\"text-icon glyphicon glyphicon-user\"></i> Tom Louis</a>\n            </li>\n            <li role=\"separator\" class=\"divider\"></li>\n            <li>\n              <a><i class=\"text-icon glyphicon glyphicon-log-out\"></i> Sign out</a>\n            </li>\n          </ul>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>"

/***/ }),

/***/ "../../../../../src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_data_storage_service__ = __webpack_require__("../../../../../src/app/shared/data-storage.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderComponent = (function () {
    function HeaderComponent(dataStorageService) {
        this.dataStorageService = dataStorageService;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-header',
        template: __webpack_require__("../../../../../src/app/header/header.component.html"),
        styles: [__webpack_require__("../../../../../src/app/header/header.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_data_storage_service__["a" /* DataStorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_data_storage_service__["a" /* DataStorageService */]) === "function" && _a || Object])
], HeaderComponent);

var _a;
//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ "../../../../../src/app/not-found/not-found.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/not-found/not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-6 col-sm-8 col-xs-12 col-md-offset-3 col-sm-offset-2\" style=\"text-align: center\">\n  <h4>Ooooops... Looks like you've got lost</h4>\n  <hr>\n  <h1>404</h1>\n  <p>Page not found</p>\n</div>"

/***/ }),

/***/ "../../../../../src/app/not-found/not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotFoundComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotFoundComponent = (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    return NotFoundComponent;
}());
NotFoundComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-not-found',
        template: __webpack_require__("../../../../../src/app/not-found/not-found.component.html"),
        styles: [__webpack_require__("../../../../../src/app/not-found/not-found.component.css")]
    }),
    __metadata("design:paramtypes", [])
], NotFoundComponent);

//# sourceMappingURL=not-found.component.js.map

/***/ }),

/***/ "../../../../../src/app/products/product-detail/product-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".modal {\n    display: block;\n    background-color: rgba(0,0,0,.7);\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/products/product-detail/product-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal\">\n    <div class=\"modal-dialog modal-md\">\n\n        <div class=\"modal-content\" *ngIf=\"product\">\n            <div class=\"modal-header\">\n                <button type=\"button\" class=\"close\" (click)=\"onCloseModal()\">&times;</button>\n                <h4 class=\"modal-title\">{{ product.productName }}</h4>\n            </div>\n            <div class=\"modal-body\">\n                <div class=\"row\">\n                    <div class=\"col-xs-12\">\n                        <div class=\"row form-group\">\n                            <div class=\"col-xs-4\" style=\"text-align: right\">\n                                <div class=\"row\">\n                                    Code:\n                                </div>\n                            </div>\n                            <div class=\"col-xs-8\">\n                                <strong>\n                                    {{ product.productCode }}\n                                </strong>\n                            </div>\n                        </div>\n                        <div class=\"row form-group\">\n                            <div class=\"col-xs-4\" style=\"text-align: right\">\n                                <div class=\"row\">\n                                    Description:\n                                </div>\n                            </div>\n                            <div class=\"col-xs-8\">\n                                <strong>\n                                    {{ product.productDescription }}\n                                </strong>\n                            </div>\n                        </div>\n                        <div class=\"row form-group\">\n                            <div class=\"col-xs-4\" style=\"text-align: right\">\n                                <div class=\"row\">\n                                    Cost:\n                                </div>\n                            </div>\n                            <div class=\"col-xs-8\">\n                                <strong>\n                                    {{ product.cost }}$\n                                </strong>\n                            </div>\n                        </div>\n                        <div class=\"row form-group\">\n                            <div class=\"col-xs-4\" style=\"text-align: right\">\n                                <div class=\"row\">\n                                    Stock:\n                                </div>\n                            </div>\n                            <div class=\"col-xs-8\">\n                                <strong>\n                                    {{ product.stock }}\n                                </strong>\n                            </div>\n                        </div>\n                        <div class=\"row form-group\">\n                            <div class=\"col-xs-4\" style=\"text-align: right\">\n                                <div class=\"row\">\n                                    Discontinued:\n                                </div>\n                            </div>\n                            <div class=\"col-xs-8\">\n                                <strong>\n                                    {{ product.discontinued ? (product.discontinued | date:'short') : 'Not Discontinued' }}\n                                </strong>\n                            </div>\n                        </div>\n                        <div class=\"row form-group\">\n                            <div class=\"col-xs-4\" style=\"text-align: right\">\n                                <div class=\"row\">\n                                    Added:\n                                </div>\n                            </div>\n                            <div class=\"col-xs-8\">\n                                <strong>\n                                    {{ product.dateAdded | date:'short' }}\n                                </strong>\n                            </div>\n                        </div>\n                        <div class=\"row form-group\">\n                            <div class=\"col-xs-4\" style=\"text-align: right\">\n                                <div class=\"row\">\n                                    Last update:\n                                </div>\n                            </div>\n                            <div class=\"col-xs-8\">\n                                <strong>\n                                    {{ product.timestamp | date:'short' }}\n                                </strong>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-default pull-left\" (click)=\"onOpenEdit()\"><i class=\"glyphicon glyphicon-edit\"></i> Edit</button>\n                <button type=\"button\" class=\"btn btn-default pull-left\" (click)=\"onDelete()\"><i class=\"glyphicon glyphicon-trash\"></i> Delete</button>\n                <button type=\"button\" class=\"btn btn-primary\" (click)=\"onCloseModal()\">Done</button>\n            </div>\n        </div>\n        <div class=\"loader-spinner\" *ngIf=\"isLoading\" style=\"margin: 100px auto;\"></div>\n        <div class=\"modal-content\" *ngIf=\"!product && !isLoading\">\n            <div class=\"modal-body\" style=\"text-align: center\">\n                <h3>\n                    Sorry...\n                </h3>\n                <p>\n                    There is no such product\n                </p>\n            </div>\n            <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-default\" (click)=\"onCloseModal()\">Close</button>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/products/product-detail/product-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__product_service__ = __webpack_require__("../../../../../src/app/products/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductDetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductDetailComponent = (function () {
    function ProductDetailComponent(productService, route, router) {
        this.productService = productService;
        this.route = route;
        this.router = router;
        this.isLoading = false;
    }
    ProductDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.id = +params['id'];
            _this.loadProduct();
        });
        this.productSubscription = this.productService.productLoaded.subscribe(function (product) {
            _this.product = product;
            _this.isLoading = false;
            if (!_this.product) {
                setTimeout(function () { _this.onCloseModal(); }, 3000);
            }
        });
    };
    ProductDetailComponent.prototype.loadProduct = function () {
        this.product = this.productService.getProduct(this.id);
        if (!this.product) {
            this.isLoading = true;
            this.productService.loadProduct(this.id);
        }
    };
    ProductDetailComponent.prototype.onDelete = function () {
        this.productService.deleteProduct(this.id);
        this.onCloseModal();
    };
    ProductDetailComponent.prototype.onCloseModal = function () {
        this.router.navigate(['../'], { relativeTo: this.route, queryParamsHandling: 'merge' });
    };
    ProductDetailComponent.prototype.onOpenEdit = function () {
        this.router.navigate(['edit'], { relativeTo: this.route, queryParamsHandling: 'merge' });
    };
    ProductDetailComponent.prototype.ngOnDestroy = function () {
        this.productSubscription.unsubscribe();
    };
    return ProductDetailComponent;
}());
ProductDetailComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-product-detail',
        template: __webpack_require__("../../../../../src/app/products/product-detail/product-detail.component.html"),
        styles: [__webpack_require__("../../../../../src/app/products/product-detail/product-detail.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__product_service__["a" /* ProductService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__product_service__["a" /* ProductService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _c || Object])
], ProductDetailComponent);

var _a, _b, _c;
//# sourceMappingURL=product-detail.component.js.map

/***/ }),

/***/ "../../../../../src/app/products/product-edit/product-edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".modal {\n    display: block;\n    background-color: rgba(0,0,0,.7);\n}\ninput.ng-invalid.ng-touched, textarea.ng-invalid.ng-touched {\n    border: 1px solid red;\n}\nform{\n    margin-bottom: 5px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/products/product-edit/product-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal\" role=\"dialog\">\n  <div class=\"modal-dialog modal-md\">\n\n    <div class=\"modal-content\" *ngIf=\"!editMode || !isLoading\">\n      <form [formGroup]=\"productForm\" (ngSubmit)=\"onSubmit()\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" (click)=\"onCloseEdit()\">&times;</button>\n        <h4 class=\"modal-title\">{{ editMode ? 'Edit Product' : 'New Product' }}</h4>\n      </div>\n      <div class=\"modal-body\">\n        <div class=\"row\">\n          <div class=\"col-xs-12\">\n            <div class=\"row\">\n              <div class=\"col-xs-12\">\n                <div class=\"form-group\">\n                  <label>Code</label>\n                  <span class=\"small alert-danger pull-right\" *ngIf=\"productForm.get('productCode').hasError('ProductCodeIsTaken')\">this code is already taken</span>\n                  <input class=\"form-control\"\n                         type=\"text\"\n                         placeholder=\"Enter Code\"\n                         formControlName=\"productCode\">\n              </div>\n            </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-xs-12\">\n                <div class=\"form-group\">\n                  <label>Name</label>\n                  <input class=\"form-control\"\n                         type=\"text\"\n                         placeholder=\"Enter Name\"\n                         formControlName=\"productName\">\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-xs-12\">\n                <div class=\"form-group\">\n                  <label>Description</label>\n                  <textarea class=\"form-control\"\n                            rows=\"3\"\n                            placeholder=\"Enter Description\"\n                            formControlName=\"productDescription\"></textarea>\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-xs-6\">\n                <div class=\"form-group\">\n                  <label>Cost in GBP</label>\n                  <input class=\"form-control\"\n                         type=\"text\"\n                         id=\"costInput\"\n                         placeholder=\"Enter Cost\"\n                         formControlName=\"cost\">\n                </div>\n              </div>\n              <div class=\"col-xs-6\">\n                <div class=\"form-group\">\n                  <label>Stock count</label>\n                  <input class=\"form-control\"\n                         type=\"text\"\n                         placeholder=\"Enter Stock\"\n                         formControlName=\"stock\">\n                </div>\n              </div>\n            </div>\n            <div class=\"row\" *ngIf=\"productForm.hasError('costStockValidation') && productForm.get('cost').touched && productForm.get('stock').touched\">\n              <div class=\"col-xs-12\">\n                <div class=\"alert alert-danger\" role=\"alert\">\n                  <span class=\"glyphicon glyphicon-exclamation-sign\" aria-hidden=\"true\"></span>\n                  Either <a class=\"alert-link\">Cost</a> have to be greater than 5 or <a class=\"alert-link\">Stock</a> have to be greater than 10\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-xs-12\">\n                <div class=\"form-group\">\n                  <br>\n                  <input type=\"checkbox\"\n                         id=\"formEditDiscontinuedCheckbox\"\n                         formControlName=\"isDiscontinued\">\n                  <label for=\"formEditDiscontinuedCheckbox\">is Discontinued</label>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-default\" (click)=\"onCloseEdit()\">Close</button>\n        <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!productForm.valid\">Save</button>\n      </div>\n      </form>\n    </div>\n\n    <div class=\"loader-spinner\" *ngIf=\"isLoading\" style=\"margin: 100px auto\"></div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/products/product-edit/product-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__product_service__ = __webpack_require__("../../../../../src/app/products/product.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductEditComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProductEditComponent = (function () {
    function ProductEditComponent(route, router, productService) {
        this.route = route;
        this.router = router;
        this.productService = productService;
        this.editMode = false;
        this.isLoading = false;
    }
    ProductEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.editMode = params['id'] != null;
            _this.id = +params['id'];
            _this.initForm();
        });
    };
    ProductEditComponent.prototype.initForm = function () {
        var _this = this;
        var productCode = '';
        var productName = '';
        var productDescription = '';
        var cost = '';
        var stock = '';
        var isDiscontinued = false;
        if (this.editMode) {
            var product = this.productService.getProduct(this.id);
            if (product) {
                productCode = product.productCode;
                productName = product.productName;
                productDescription = product.productDescription;
                cost = product.cost + '';
                stock = product.stock + '';
                isDiscontinued = product.discontinued != null;
            }
            else {
                this.isLoading = true;
                this.productService.loadProduct(this.id);
                var subscription_1 = this.productService.productLoaded.subscribe(function (data) {
                    _this.isLoading = false;
                    subscription_1.unsubscribe();
                    if (data) {
                        _this.editForm(data);
                    }
                    else {
                        _this.router.navigate(['../'], { relativeTo: _this.route });
                    }
                });
            }
        }
        this.productForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormGroup */]({
            'productCode': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* FormControl */](productCode, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern(/^\w*$/)], [this.productCodeValidator.bind(this)]),
            'productName': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* FormControl */](productName, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required),
            'productDescription': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* FormControl */](productDescription, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required),
            'cost': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* FormControl */](cost, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern(/^\d+(\.\d{1,2})?$/)]),
            'stock': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* FormControl */](stock, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern(/^\d+$/)]),
            'isDiscontinued': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* FormControl */](isDiscontinued, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required),
        }, this.productValidator);
    };
    ProductEditComponent.prototype.editForm = function (product) {
        this.productForm.setValue({
            'productCode': product.productCode,
            'productName': product.productName,
            'productDescription': product.productDescription,
            'cost': product.cost + '',
            'stock': product.stock + '',
            'isDiscontinued': product.discontinued != null,
        });
    };
    ProductEditComponent.prototype.onSubmit = function () {
        if (!this.productForm.valid) {
            alert('Form is wrong!');
            return;
        }
        if (this.editMode) {
            this.productService.updateProduct(this.id, this.productForm.value);
        }
        else {
            this.productService.addProduct(this.productForm.value);
        }
        this.onCloseEdit();
    };
    ProductEditComponent.prototype.onCloseEdit = function () {
        if (this.editMode) {
            this.router.navigate(['../../'], { relativeTo: this.route, queryParamsHandling: 'merge' });
        }
        else {
            this.router.navigate(['../'], { relativeTo: this.route });
        }
    };
    ProductEditComponent.prototype.productValidator = function (group) {
        if (+group.get('cost').value < 5 && +group.get('stock').value < 10) {
            return { 'costStockValidation': true };
        }
        return null;
    };
    ProductEditComponent.prototype.productCodeValidator = function (control) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.productService.isProductCodeFree(control.value).subscribe(function (data) {
                if (data !== _this.id && data !== -1) {
                    resolve({ 'ProductCodeIsTaken': true });
                }
                else {
                    resolve(null);
                }
            });
        });
        return promise;
    };
    return ProductEditComponent;
}());
ProductEditComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-product-edit',
        template: __webpack_require__("../../../../../src/app/products/product-edit/product-edit.component.html"),
        styles: [__webpack_require__("../../../../../src/app/products/product-edit/product-edit.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__product_service__["a" /* ProductService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__product_service__["a" /* ProductService */]) === "function" && _c || Object])
], ProductEditComponent);

var _a, _b, _c;
//# sourceMappingURL=product-edit.component.js.map

/***/ }),

/***/ "../../../../../src/app/products/product-filters/product-filters.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".form-group {\n    background-color: white;\n    padding: 10px 0px;\n    box-shadow: 0px 5px 15px -5px rgba(0, 0, 0, 0.22);\n    border-radius: 5px;\n}\nform button[type=\"submit\"]{\n    margin-bottom: 30px;\n}\ninput.ng-invalid {\n    border: 1px solid red;\n}\n.form-group.ng-invalid {\n    box-shadow: 0px 1px 5px 1px rgba(194, 0, 0, 0.8);\n    transition: box-shadow 250ms;\n}\n.form-group.ng-invalid input {\n    border: 1px solid red;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/products/product-filters/product-filters.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row box\">\n  <div class=\"col-xs-12\">\n    <h5 style=\"text-align: center\" class=\"row\">\n      <span class=\"glyphicon glyphicon-remove\"\n            style=\"color:#888; cursor: pointer\"\n            (click)=\"onClose()\"></span>\n    </h5>\n    <div class=\"row\">\n      <p>\n        <b>Filters</b>\n        <a class=\"pull-right\" style=\"cursor: pointer\" (click)=\"onClear()\">clear</a>\n      </p>\n    </div>\n    <form [formGroup]=\"filterForm\" (ngSubmit)=\"onSubmit()\">\n      <div class=\"form-group row\">\n        <div class=\"col-xs-12\">\n          <label for=\"productCodeFilter\">Code</label>\n          <input id=\"productCodeFilter\"\n                 formControlName=\"productCode\"\n                 type=\"text\"\n                 class=\"form-control\"\n                 placeholder=\"Enter code\">\n        </div>\n      </div>\n      <div class=\"form-group row\">\n        <div class=\"col-xs-12\">\n          <label for=\"productNameFilter\">Name</label>\n          <input id=\"productNameFilter\"\n                 formControlName=\"productName\"\n                 type=\"text\"\n                 class=\"form-control\"\n                 placeholder=\"Enter name\">\n        </div>\n      </div>\n      <div class=\"form-group row\">\n        <div class=\"col-xs-12\">\n          <label for=\"productDescriptionFilter\">Description</label>\n          <input id=\"productDescriptionFilter\"\n                 formControlName=\"productDescription\"\n                 type=\"text\"\n                 class=\"form-control\"\n                 placeholder=\"Enter description\">\n        </div>\n      </div>\n      <div class=\"form-group row\" formGroupName=\"cost\">\n        <label class=\"col-xs-12\">Cost</label>\n        <div class=\"col-xs-6\">\n          <input id=\"productCostMinFilter\"\n                 formControlName=\"from\" type=\"text\" min=\"0\" class=\"form-control\" placeholder=\"From\">\n        </div>\n        <div class=\"col-xs-6\">\n          <input id=\"productCostMaxFilter\"\n                 formControlName=\"to\" type=\"text\" min=\"0\" class=\"form-control\" placeholder=\"To\">\n        </div>\n      </div>\n      <div class=\"form-group row\" formGroupName=\"stock\">\n        <label class=\"col-xs-12\">Stock count</label>\n        <div class=\"col-xs-6\">\n          <input id=\"productStockMinFilter\"\n                 formControlName=\"from\" type=\"text\" min=\"0\" class=\"form-control\" placeholder=\"From\">\n        </div>\n        <div class=\"col-xs-6\">\n          <input id=\"productStockMaxFilter\"\n                 formControlName=\"to\" type=\"text\" min=\"0\" class=\"form-control\" placeholder=\"To\">\n        </div>\n      </div>\n      <div class=\"form-group row\" formGroupName=\"discontinued\">\n        <div class=\"col-xs-12\">\n          <input type=\"checkbox\" formControlName=\"isOn\" id=\"filterByDiscontinuedFilter\">\n          <label for=\"productIsDiscontinuedFilter\" >Filter by Discontinued</label>\n          <br>\n          <div *ngIf=\"filterForm.get('discontinued.isOn').value\">\n            <input type=\"checkbox\" formControlName=\"isDiscontinued\" id=\"productIsDiscontinuedFilter\">\n            <label for=\"productIsDiscontinuedFilter\" style=\"font-weight: normal\">is Discontinued</label>\n            <div *ngIf=\"filterForm.get('discontinued.isDiscontinued').value\">\n              <label>From</label>\n              <my-date-picker [options]=\"{dateFormat: 'yyyy-mm-dd', alignSelectorRight: true}\"\n                              formControlName=\"from\"></my-date-picker>\n              <label>To</label>\n              <my-date-picker [options]=\"{dateFormat: 'yyyy-mm-dd', alignSelectorRight: true}\"\n                              formControlName=\"to\"></my-date-picker>\n            </div>\n          </div>\n        </div>\n      </div>\n      <button  type=\"submit\" [disabled]=\"!filterForm.valid\" class=\"btn btn-success col-xs-6 col-xs-offset-3\">Apply</button>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/products/product-filters/product-filters.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__product_service__ = __webpack_require__("../../../../../src/app/products/product.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductFiltersComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductFiltersComponent = (function () {
    function ProductFiltersComponent(productService) {
        this.productService = productService;
        this.closeFilters = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.today = new Date();
    }
    ProductFiltersComponent.prototype.ngOnInit = function () {
        this.initForm();
    };
    ProductFiltersComponent.prototype.onClose = function () {
        this.closeFilters.emit();
    };
    ProductFiltersComponent.prototype.initForm = function () {
        this.filterForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormGroup */]({
            'productCode': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].pattern(/^\w*$/)]),
            'productName': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* FormControl */](null),
            'productDescription': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* FormControl */](null),
            'cost': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormGroup */]({
                'from': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].pattern(/^\d+(\.\d{1,2})?$/), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].min(0)]),
                'to': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].pattern(/^\d+(\.\d{1,2})?$/), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].min(0)])
            }, this.rangeValidator),
            'stock': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormGroup */]({
                'from': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].pattern(/^\d+$/), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].min(0)]),
                'to': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].pattern(/^\d+$/), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].min(0)])
            }, this.rangeValidator),
            'discontinued': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormGroup */]({
                'isOn': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* FormControl */](false),
                'isDiscontinued': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* FormControl */](false),
                'from': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* FormControl */](null),
                'to': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* FormControl */](null),
            }, this.dateRangeValidator)
        });
    };
    ProductFiltersComponent.prototype.onSubmit = function () {
        this.productService.getProductsByFilters(this.filterForm.value);
    };
    ProductFiltersComponent.prototype.rangeValidator = function (group) {
        if (group.value['from'] !== null && group.value['to'] !== null
            && group.value['from'] !== '' && group.value['to'] !== ''
            && +group.value['from'] >= +group.value['to']) {
            return { 'rangeIsIncorrect': true };
        }
        return null;
    };
    ProductFiltersComponent.prototype.dateRangeValidator = function (group) {
        if (group.value['from'] !== null && group.value['to'] !== null
            && group.value['from']['epoc'] > group.value['to']['epoc']) {
            return { 'dateRangeIsIncorrect': true };
        }
        return null;
    };
    ProductFiltersComponent.prototype.onClear = function () {
        this.filterForm.reset();
    };
    return ProductFiltersComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], ProductFiltersComponent.prototype, "closeFilters", void 0);
ProductFiltersComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-product-filters',
        template: __webpack_require__("../../../../../src/app/products/product-filters/product-filters.component.html"),
        styles: [__webpack_require__("../../../../../src/app/products/product-filters/product-filters.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__product_service__["a" /* ProductService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__product_service__["a" /* ProductService */]) === "function" && _a || Object])
], ProductFiltersComponent);

var _a;
//# sourceMappingURL=product-filters.component.js.map

/***/ }),

/***/ "../../../../../src/app/products/product-list/product-item/product-item.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "td {\n    padding: 14px 5px;\n}\ntd:first-child{\n    border-bottom-left-radius: 5px;\n    border-top-left-radius: 5px;\n    padding-left: 10px;\n}\ntd:last-child{\n    border-bottom-right-radius: 5px;\n    border-top-right-radius: 5px;\n    padding-right: 10px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/products/product-list/product-item/product-item.component.html":
/***/ (function(module, exports) {

module.exports = "<td>\n  <input type=\"checkbox\" class=\"table-checkbox\">\n</td>\n<td *ngFor=\"let column of columns\">\n  <span *ngIf=\"product[column.name] != null\"\n        title=\"{{ product[column.name].constructor.name == 'Date' ? ( product[column.name] | amDateFormat:'MMMM Do YYYY, h:mm:ss a' ) : product[column.name] }}\">\n    {{ product[column.name].constructor.name !== 'Date' ? product[column.name] : (product[column.name] | amTimeAgo) }}\n  </span>\n</td>\n<!--<td>{{ index }} {{ product.productCode }}</td>-->\n<!--<td>{{ product.productName }}</td>-->\n<!--<td>{{ product.productDescription }}</td>-->\n<!--<td>-->\n  <!--{{ product.stock }}-->\n<!--</td>-->\n<!--<td>-->\n  <!--${{ product.cost }}-->\n<!--</td>-->\n<!--<td title=\"{{ product.dateAdded | date:'d MMM y, HH:mm:ss' }}\">-->\n  <!--{{ product.discontinued ? ( product.discontinued | amTimeAgo ) : '' }}-->\n<!--</td>-->\n<!--<td title=\"{{ product.dateAdded | date:'d MMM y, HH:mm:ss' }}\">-->\n  <!--{{ product.dateAdded ? ( product.dateAdded| amTimeAgo ) : '' }}-->\n<!--</td>-->\n<td>\n  <span style=\"cursor: pointer; margin-right: 10px; display: inline-block\">\n    <a [routerLink]=\"[product.id]\" queryParamsHandling=\"merge\"><i class=\"glyphicon glyphicon-eye-open\"></i></a>\n  </span>\n</td>\n<td>\n  <span style=\"cursor: pointer\" class=\"dropdown\" appDropdown=\"\">\n    <i class=\"glyphicon glyphicon-option-horizontal\"></i>\n    <ul class=\"dropdown-menu\" style=\"right: -100%; left: auto;\">\n      <li>\n        <a [routerLink]=\"[product.id,'edit']\" queryParamsHandling=\"merge\"><i class=\"text-icon glyphicon glyphicon-edit\"></i> Edit</a>\n      </li>\n      <li (click)=\"onDelete()\">\n        <a><i class=\"text-icon glyphicon glyphicon-remove\"></i> Remove</a>\n      </li>\n    </ul>\n  </span>\n</td>\n"

/***/ }),

/***/ "../../../../../src/app/products/product-list/product-item/product-item.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__product_model__ = __webpack_require__("../../../../../src/app/products/product.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__product_service__ = __webpack_require__("../../../../../src/app/products/product.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductItemComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProductItemComponent = (function () {
    function ProductItemComponent(router, route, productService) {
        this.router = router;
        this.route = route;
        this.productService = productService;
    }
    ProductItemComponent.prototype.ngOnInit = function () {
    };
    ProductItemComponent.prototype.onOpenDetail = function () {
        console.log('go');
        this.router.navigate([this.product.id], { relativeTo: this.route, queryParamsHandling: 'merge' });
    };
    ProductItemComponent.prototype.onDelete = function () {
        this.productService.deleteProduct(this.product.id);
    };
    return ProductItemComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__product_model__["a" /* Product */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__product_model__["a" /* Product */]) === "function" && _a || Object)
], ProductItemComponent.prototype, "product", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], ProductItemComponent.prototype, "index", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], ProductItemComponent.prototype, "columns", void 0);
ProductItemComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-product-item',
        template: __webpack_require__("../../../../../src/app/products/product-list/product-item/product-item.component.html"),
        styles: [__webpack_require__("../../../../../src/app/products/product-list/product-item/product-item.component.css")],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].Emulated
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__product_service__["a" /* ProductService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__product_service__["a" /* ProductService */]) === "function" && _d || Object])
], ProductItemComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=product-item.component.js.map

/***/ }),

/***/ "../../../../../src/app/products/product-list/product-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "table{\n    border-collapse: separate;\n    border-spacing: 0px 5px;\n    width: 100%;\n    color: #62767f;\n    margin:30px 0px;\n    -o-box-shadow: 0px 7px 40px -15px rgba(0,0,0,0.25);\n    box-shadow: 0px 7px 40px -15px rgba(0,0,0,0.25);\n    background-color: white;\n    border-radius:5px;\n    position: relative;\n}\ntable.disabled{\n    cursor: progress;\n}\ntable.disabled:after{\n    content: '';\n    display: block;\n    position: absolute;\n    top:0;\n    left:0;\n    right:0;\n    bottom: 0;\n    background: rgba(148, 162, 173, 0.67);\n    border-radius: 5px;\n    z-index:10;\n}\ntable .loader-spinner {\n    position: absolute;\n    z-index:11;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    margin: auto;\n}\n.table-container {\n    transition:  250ms;\n}\napp-product-filters {\n    position: absolute;\n    padding-right: 30px;\n}\nthead{\n    color: #78909C;\n    text-transform: uppercase;\n    font-size: 0.9em;\n}\nthead th {\n    padding: 14px 5px;\n    border-bottom: 1px solid #ddd;\n    cursor: pointer;\n}\nthead th:hover {\n    color: #3883a1;\n}\nthead th:first-child{\n    padding-left: 10px;\n}\nthead th.active {\n    color: #12A0F8;\n}\nthead th.active:after, thead th.active::after {\n    content: '';\n    display: inline-block;\n    width: 0;\n    height: 0;\n    margin-left: 2px;\n    vertical-align: middle;\n    border-top: 4px dashed;\n    border-top: 4px solid\\9;\n    border-right: 4px solid transparent;\n    border-left: 4px solid transparent\n}\nthead th.active.reverse:after, thead th.active.reverse::after {\n    margin-top: -4px;\n    border-top: none;\n    border-bottom: 4px dashed;\n    border-bottom: 4px solid\\9;\n    border-right: 4px solid transparent;\n    border-left: 4px solid transparent\n}\napp-product-item {\n    display: table-row;\n    background-color: transparent;\n}\napp-product-item:nth-child(2n) {\n    background-color: #f4f4f4;\n}\napp-product-item:hover {\n    background-color: #E8F4F9;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/products/product-list/product-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div [ngClass]=\"isFilterOpen ? 'col-xs-10' : 'col-xs-12'\" class=\"table-container\">\n        <div class=\"row\">\n            <div class=\"col-xs-12\">\n                <div class=\"pull-right\">\n                    <button [ngClass]=\"isFilterOpen ? 'active' : ''\" (click)=\"isFilterOpen = !isFilterOpen\" class=\"btn btn-default\">Filters <i class=\"glyphicon glyphicon-filter\"></i></button>\n                    <button class=\"btn btn-primary\" routerLink=\"new\" queryParamsHandling=\"merge\"><i class=\"glyphicon glyphicon-file\"></i> Add Product</button>\n                    <button class=\"btn btn-primary-light\" (click)=\"loadProducts()\"><i class=\"glyphicon glyphicon-refresh\"></i></button>\n                </div>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-xs-12\">\n                <table [ngClass]=\"{disabled: isBusy()}\">\n                    <thead>\n                    <th>\n                        <input type=\"checkbox\" class=\"table-checkbox\">\n                    </th>\n                    <th *ngFor=\"let columnName of productColumns\"\n                        (click)=\"onSorted(columnName)\"\n                        [ngClass]=\"isOrderedBy(columnName)\">{{ columnName.title }}</th>\n                    <th></th>\n                    <th></th>\n                    </thead>\n                    <tbody>\n                    <app-product-item *ngFor=\"let product of products; let i = index\"\n                                      [product]=\"product\"\n                                      [columns]=\"productColumns\"\n                                      [index]=\"i\"></app-product-item>\n                    </tbody>\n                    <div class=\"loader-spinner\" *ngIf=\"isBusy()\"></div>\n                </table>\n            </div>\n        </div>\n        <div class=\"row\">\n            <nav aria-label=\"Page navigation\" style=\"text-align: center\">\n                <ul class=\"pagination\">\n                    <li [ngClass]=\"{disabled: activePage === 1}\">\n                        <a style=\"cursor: pointer\" (click)=\"goToPage(activePage - 1)\" aria-label=\"Previous\">\n                            <span aria-hidden=\"true\">&laquo;</span>\n                        </a>\n                    </li>\n                    <li *ngFor=\"let page of pages\" [ngClass]=\"{active: page === activePage}\"><a style=\"cursor:pointer;\" (click)=\"goToPage(page)\">{{ page }}</a></li>\n                    <li [ngClass]=\"{disabled: activePage === lastPage}\">\n                        <a style=\"cursor: pointer\" (click)=\"goToPage(activePage + 1)\" aria-label=\"Next\">\n                            <span aria-hidden=\"true\">&raquo;</span>\n                        </a>\n                    </li>\n                </ul>\n            </nav>\n        </div>\n    </div>\n    <app-product-filters (closeFilters)=\"isFilterOpen = false\" *ngIf=\"isFilterOpen\" class=\"col-xs-2\">></app-product-filters>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/products/product-list/product-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__product_service__ = __webpack_require__("../../../../../src/app/products/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProductListComponent = (function () {
    function ProductListComponent(productService, route, router) {
        this.productService = productService;
        this.route = route;
        this.router = router;
        this.isFilterOpen = false;
        this.orderBy = '';
        this.orderInverse = false;
        this.activePage = 1;
        this.lastPage = 1;
    }
    ProductListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.products = this.productService.getProducts();
        this.productColumns = this.productService.getProductColumns();
        this.route.queryParams.subscribe(function (data) {
            if (data['order']) {
                _this.productService.order = data['order'];
            }
            _this.orderBy = _this.productColumns.find(function (x) { return x.property === _this.productService.order.sort; }).name;
            if (data['page']) {
                _this.activePage = +data['page'];
                if (_this.activePage <= 1) {
                    _this.goToPage(1);
                }
                else if (_this.activePage > _this.lastPage) {
                    _this.goToPage(_this.lastPage);
                }
            }
            else {
                _this.activePage = 1;
            }
            _this.lastPage = _this.productService.getProductPagesCount();
            _this.pages = _this.getPages();
            _this.productService.limit.offset = (_this.activePage - 1) * _this.productService.limit.limit;
            _this.loadProducts();
        });
        this.productSubscription = this.productService.productsEdited.subscribe(function (products) {
            _this.products = products;
            _this.lastPage = _this.productService.getProductPagesCount();
            if (_this.activePage > _this.lastPage) {
                _this.router.navigate(['/products'], { queryParams: { page: _this.lastPage } });
            }
            _this.pages = _this.getPages();
        });
    };
    ProductListComponent.prototype.ngOnDestroy = function () {
        this.productSubscription.unsubscribe();
    };
    ProductListComponent.prototype.isOrderedBy = function (columnName) {
        return this.orderBy === columnName.name ? 'active' + (this.orderInverse ? ' reverse' : '') : '';
    };
    ProductListComponent.prototype.onSorted = function (columnName) {
        if (this.productService.order.sort === columnName.property) {
            this.productService.order.order = !this.productService.order.order;
            this.orderInverse = !this.productService.order.order;
        }
        else {
            this.productService.order.sort = columnName.property;
            this.orderBy = columnName.name;
            this.productService.order.order = true;
            this.orderInverse = !this.productService.order.order;
        }
        this.productService.loadProducts();
    };
    ProductListComponent.prototype.loadProducts = function () {
        this.productService.loadProducts();
    };
    ProductListComponent.prototype.goToPage = function (page) {
        if (page < 1 || page > this.lastPage) {
            return;
        }
        if (page === 1) {
            this.router.navigate(['/products']);
        }
        this.router.navigate(['/products'], { queryParams: { page: page } });
    };
    ProductListComponent.prototype.getPages = function () {
        var pageLimits = 5;
        var startPage, endPage;
        if (this.lastPage <= pageLimits) {
            startPage = 1;
            endPage = this.lastPage;
        }
        else {
            if (this.activePage <= Math.ceil(pageLimits / 2)) {
                startPage = 1;
                endPage = pageLimits;
            }
            else if (this.activePage + Math.ceil(pageLimits / 2) >= this.lastPage) {
                startPage = this.lastPage - pageLimits + 1;
                endPage = this.lastPage;
            }
            else {
                startPage = this.activePage - Math.ceil(pageLimits / 2);
                endPage = this.activePage + pageLimits - 1;
            }
        }
        return __WEBPACK_IMPORTED_MODULE_2_lodash___default.a.range(startPage, endPage + 1);
    };
    ProductListComponent.prototype.isBusy = function () {
        return this.productService.isLoading();
    };
    return ProductListComponent;
}());
ProductListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-product-list',
        template: __webpack_require__("../../../../../src/app/products/product-list/product-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/products/product-list/product-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__product_service__["a" /* ProductService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__product_service__["a" /* ProductService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */]) === "function" && _c || Object])
], ProductListComponent);

var _a, _b, _c;
//# sourceMappingURL=product-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/products/product.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Product; });
var Product = (function () {
    function Product(_id, _productCode, _productName, _productDescription, _stock, _cost, _discontinued, _dateAdded, _timestamp) {
        if (_timestamp === void 0) { _timestamp = null; }
        this._id = _id;
        this._productCode = _productCode;
        this._productName = _productName;
        this._productDescription = _productDescription;
        this._stock = _stock;
        this._cost = _cost;
        this._discontinued = _discontinued;
        this._dateAdded = _dateAdded;
        this._timestamp = _timestamp;
    }
    Object.defineProperty(Product, "columns", {
        get: function () {
            return this._columns.slice();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "productCode", {
        get: function () {
            return this._productCode;
        },
        set: function (value) {
            this._productCode = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "productName", {
        get: function () {
            return this._productName;
        },
        set: function (value) {
            this._productName = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "productDescription", {
        get: function () {
            return this._productDescription;
        },
        set: function (value) {
            this._productDescription = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "stock", {
        get: function () {
            return this._stock;
        },
        set: function (value) {
            this._stock = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "cost", {
        get: function () {
            return this._cost;
        },
        set: function (value) {
            this._cost = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "discontinued", {
        get: function () {
            return this._discontinued;
        },
        set: function (value) {
            this._discontinued = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "dateAdded", {
        get: function () {
            return this._dateAdded;
        },
        set: function (value) {
            this._dateAdded = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "id", {
        get: function () {
            return this._id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "timestamp", {
        get: function () {
            return this._timestamp;
        },
        enumerable: true,
        configurable: true
    });
    return Product;
}());

Product._columns = [
    { name: 'productCode', title: 'Code', type: 'string', property: 'productCode' },
    { name: 'productName', title: 'Name', type: 'string', property: 'productName' },
    { name: 'productDescription', title: 'Description', type: 'string', property: 'productDescription' },
    { name: 'cost', title: 'Cost', type: 'number', property: 'price' },
    { name: 'stock', title: 'Stock', type: 'number', property: 'stockSize' },
    { name: 'discontinued', title: 'Discontinued', type: 'Date', property: 'dtmDiscontinued' },
    { name: 'dateAdded', title: 'Added', type: 'Date', property: 'dtmAdded' },
];
//# sourceMappingURL=product.model.js.map

/***/ }),

/***/ "../../../../../src/app/products/product.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__product_model__ = __webpack_require__("../../../../../src/app/products/product.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_data_storage_service__ = __webpack_require__("../../../../../src/app/shared/data-storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProductService = (function () {
    function ProductService(dataStorageService) {
        this.dataStorageService = dataStorageService;
        this.products = [
            new __WEBPACK_IMPORTED_MODULE_2__product_model__["a" /* Product */](1, 'P0001', 'DVD Player', 'Nice DVD Player', 10, 29.00, null, new Date()),
            new __WEBPACK_IMPORTED_MODULE_2__product_model__["a" /* Product */](2, 'P0002', 'SONY PSP', 'Portable PlayStation 2008', 15, 69.45, null, new Date(new Date().getTime() - 9000000)),
            new __WEBPACK_IMPORTED_MODULE_2__product_model__["a" /* Product */](3, 'P0003', 'MacBook Pro', 'Nice notebook from Apple', 42, 1599.99, new Date(Date.now()), new Date()),
            new __WEBPACK_IMPORTED_MODULE_2__product_model__["a" /* Product */](4, 'P0004', 'DVD Reader', 'Nice DVD Player', 0, 29.50, new Date(new Date().getTime() - 1000000), new Date(new Date().getTime() - 20000)),
            new __WEBPACK_IMPORTED_MODULE_2__product_model__["a" /* Product */](5, 'P0005', 'SONY PlayStation 4', 'PlayStation 4, 2015. Made in Japan', 15, 69.45, null, new Date()),
            new __WEBPACK_IMPORTED_MODULE_2__product_model__["a" /* Product */](6, 'P0006', 'MacBook Air', 'Nice and tiny notebook from Apple', 42, 1599.99, new Date(new Date().getTime() - 150000), new Date(new Date().getTime() - 3000000))
        ];
        this.productsEdited = new __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__["Subject"]();
        this.productLoaded = new __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__["Subject"]();
        this.order = {
            sort: 'productCode',
            order: true
        };
        this.limit = {
            offset: 0,
            limit: 20
        };
        this.filters = null;
        this.productCount = 1;
    }
    ProductService.prototype.isLoading = function () {
        return (this.subscription && !this.subscription.closed);
    };
    ProductService.prototype.loadProducts = function () {
        var _this = this;
        this.subscription = this.dataStorageService.getProducts(this.limit, this.order, this.filters).subscribe(function (data) {
            _this.products = data.products;
            _this.productCount = data.count;
            _this.productsEdited.next(_this.products.slice());
        });
    };
    ProductService.prototype.loadProduct = function (id) {
        var _this = this;
        this.subscription = this.dataStorageService.getProduct(id).subscribe(function (product) {
            _this.productLoaded.next(product);
        });
    };
    ProductService.prototype.getProductColumns = function () {
        return __WEBPACK_IMPORTED_MODULE_2__product_model__["a" /* Product */].columns;
    };
    ProductService.prototype.getProducts = function () {
        return this.products.slice();
    };
    ProductService.prototype.getProduct = function (id) {
        return this.products.find(function (product) { return product.id === id; });
    };
    ProductService.prototype.getProductsByFilters = function (filters) {
        this.filters = filters;
        this.loadProducts();
    };
    ProductService.prototype.addProduct = function (product) {
        var _this = this;
        this.subscription = this.dataStorageService.addProducts(product).subscribe(function (newProduct) {
            _this.products.unshift(newProduct);
            _this.productsEdited.next(_this.products.slice());
        });
    };
    ProductService.prototype.updateProduct = function (id, product) {
        var _this = this;
        this.subscription = this.dataStorageService.updateProduct(id, product).subscribe(function (newProduct) {
            var index = _this.products.findIndex(function (x) { return x.id === id; });
            if (index != null) {
                _this.products[index] = newProduct;
            }
            _this.productsEdited.next(_this.products.slice());
        });
    };
    ProductService.prototype.deleteProduct = function (id) {
        var _this = this;
        this.subscription = this.dataStorageService.deleteProduct(id).subscribe(function (response) {
            var index = _this.products.findIndex(function (x) { return x.id === id; });
            if (index != null) {
                _this.products.splice(index, 1);
            }
            _this.productsEdited.next(_this.products.slice());
        });
    };
    ProductService.prototype.getProductPagesCount = function () {
        return Math.ceil(this.productCount / this.limit.limit);
    };
    ProductService.prototype.isProductCodeFree = function (productCode) {
        return this.dataStorageService.isProductCodeFree(productCode);
    };
    return ProductService;
}());
ProductService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__shared_data_storage_service__["a" /* DataStorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_data_storage_service__["a" /* DataStorageService */]) === "function" && _a || Object])
], ProductService);

var _a;
//# sourceMappingURL=product.service.js.map

/***/ }),

/***/ "../../../../../src/app/products/products.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/products/products.component.html":
/***/ (function(module, exports) {

module.exports = "<app-product-list></app-product-list>\n<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/products/products.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_error_handle_service__ = __webpack_require__("../../../../../src/app/shared/error-handle.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductsComponent = (function () {
    function ProductsComponent(errorHandleService) {
        this.errorHandleService = errorHandleService;
    }
    ProductsComponent.prototype.ngOnInit = function () {
    };
    return ProductsComponent;
}());
ProductsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-products',
        template: __webpack_require__("../../../../../src/app/products/products.component.html"),
        styles: [__webpack_require__("../../../../../src/app/products/products.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_error_handle_service__["a" /* ErrorHandleService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_error_handle_service__["a" /* ErrorHandleService */]) === "function" && _a || Object])
], ProductsComponent);

var _a;
//# sourceMappingURL=products.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/data-storage.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__error_handle_service__ = __webpack_require__("../../../../../src/app/shared/error-handle.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__error_message_model__ = __webpack_require__("../../../../../src/app/shared/error-message.model.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataStorageService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DataStorageService = (function () {
    function DataStorageService(http, errorHandleService) {
        this.http = http;
        this.errorHandleService = errorHandleService;
        this.backEndUrl = 'http://127.0.0.1:8000/';
    }
    DataStorageService.prototype.getProductsCount = function (filters) {
        if (filters === void 0) { filters = null; }
        var url = this.backEndUrl + 'products/count/';
        return this.http.get(url, { search: { 'filters': filters } }).map(function (response) {
            return response.json();
        });
    };
    DataStorageService.prototype.getProducts = function (limit, order, filters) {
        var _this = this;
        if (limit === void 0) { limit = null; }
        if (order === void 0) { order = null; }
        if (filters === void 0) { filters = null; }
        var url = this.backEndUrl + 'products';
        return this.http.get(url, { search: { 'filters': filters, 'order': order, 'limit': limit } }).map(function (response) {
            var data = response.json();
            var products = data['products'];
            var count = data['count'];
            for (var _i = 0, products_1 = products; _i < products_1.length; _i++) {
                var product = products_1[_i];
                _this.prepareProduct(product);
            }
            return { products: products, count: count };
        }).catch(function (error) {
            _this.errorHandleService.addError(new __WEBPACK_IMPORTED_MODULE_4__error_message_model__["a" /* ErrorMessage */]('Connection Failed', 'Oops... Looks like "' + url + '" is unreachable...', error));
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error);
        });
    };
    DataStorageService.prototype.getProduct = function (id) {
        var _this = this;
        var url = this.backEndUrl + 'products/' + id;
        return this.http.get(url).map(function (response) {
            var product = response.json();
            if (product) {
                _this.prepareProduct(product);
            }
            return product;
        }).catch(function (error) {
            _this.errorHandleService.addError(new __WEBPACK_IMPORTED_MODULE_4__error_message_model__["a" /* ErrorMessage */]('Connection Failed', 'Oops... Looks like "' + url + '" is unreachable...', error));
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error);
        });
    };
    DataStorageService.prototype.addProducts = function (product) {
        var _this = this;
        var url = this.backEndUrl + 'products/?';
        return this.http.post(url, { 'product': product }).map(function (response) {
            var data = response.json();
            if (data) {
                _this.prepareProduct(data);
            }
            return data;
        }).catch(function (error) {
            _this.errorHandleService.addError(new __WEBPACK_IMPORTED_MODULE_4__error_message_model__["a" /* ErrorMessage */]('Connection Failed', 'Oops... Looks like "' + url + '" is unreachable...', error));
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error);
        });
    };
    DataStorageService.prototype.updateProduct = function (id, product) {
        var _this = this;
        var url = this.backEndUrl + 'products/' + id;
        return this.http.put(url, { product: product }).map(function (response) {
            var data = response.json();
            if (data) {
                _this.prepareProduct(data);
            }
            return data;
        }).catch(function (error) {
            _this.errorHandleService.addError(new __WEBPACK_IMPORTED_MODULE_4__error_message_model__["a" /* ErrorMessage */]('Connection Failed', 'Oops... Looks like "' + url + '" is unreachable...', error));
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error);
        });
    };
    DataStorageService.prototype.deleteProduct = function (id) {
        var _this = this;
        var url = this.backEndUrl + 'products/' + id;
        return this.http.delete(url).map(function (response) {
            return response.json();
        }).catch(function (error) {
            _this.errorHandleService.addError(new __WEBPACK_IMPORTED_MODULE_4__error_message_model__["a" /* ErrorMessage */]('Connection Failed', 'Oops... Looks like "' + url + '" is unreachable...', error));
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error);
        });
    };
    DataStorageService.prototype.prepareProduct = function (product) {
        product.dateAdded = new Date(product.dateAdded);
        product.discontinued = product.discontinued ? new Date(product.discontinued) : null;
        return product;
    };
    DataStorageService.prototype.isProductCodeFree = function (productCode) {
        var _this = this;
        var url = this.backEndUrl + 'products/isProductCodeFree/';
        return this.http.get(url, { search: { productCode: productCode } }).map(function (response) { return response.json(); }).catch(function (error) {
            _this.errorHandleService.addError(new __WEBPACK_IMPORTED_MODULE_4__error_message_model__["a" /* ErrorMessage */]('Connection Failed', 'Oops... Looks like "' + url + '" is unreachable...', error));
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error);
        });
    };
    return DataStorageService;
}());
DataStorageService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__error_handle_service__["a" /* ErrorHandleService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__error_handle_service__["a" /* ErrorHandleService */]) === "function" && _b || Object])
], DataStorageService);

var _a, _b;
//# sourceMappingURL=data-storage.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/dropdown.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DropdownDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DropdownDirective = (function () {
    function DropdownDirective() {
        this.isOpen = false;
    }
    DropdownDirective.prototype.toggleOpen = function () {
        this.isOpen = !this.isOpen;
    };
    return DropdownDirective;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('class.open'),
    __metadata("design:type", Object)
], DropdownDirective.prototype, "isOpen", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('click'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DropdownDirective.prototype, "toggleOpen", null);
DropdownDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[appDropdown]'
    })
], DropdownDirective);

//# sourceMappingURL=dropdown.directive.js.map

/***/ }),

/***/ "../../../../../src/app/shared/error-handle.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorHandleService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ErrorHandleService = (function () {
    function ErrorHandleService() {
        this.errors = [];
        this.onErrorAdded = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    ErrorHandleService.prototype.addError = function (error) {
        this.errors.push(error);
        console.log(this.errors);
        this.onErrorAdded.emit(error);
    };
    ErrorHandleService.prototype.getErrors = function () {
        return this.errors.slice();
    };
    return ErrorHandleService;
}());
ErrorHandleService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], ErrorHandleService);

//# sourceMappingURL=error-handle.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/error-message.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorMessage; });
var ErrorMessage = (function () {
    function ErrorMessage(_header, _body, _error) {
        this._header = _header;
        this._body = _body;
        this._error = _error;
    }
    Object.defineProperty(ErrorMessage.prototype, "header", {
        get: function () {
            return this._header;
        },
        set: function (value) {
            this._header = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ErrorMessage.prototype, "body", {
        get: function () {
            return this._body;
        },
        set: function (value) {
            this._body = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ErrorMessage.prototype, "error", {
        get: function () {
            return this._error;
        },
        set: function (value) {
            this._error = value;
        },
        enumerable: true,
        configurable: true
    });
    return ErrorMessage;
}());

//# sourceMappingURL=error-message.model.js.map

/***/ }),

/***/ "../../../../../src/app/shared/filter-by-contain.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterByContainPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterByContainPipe = (function () {
    function FilterByContainPipe() {
    }
    FilterByContainPipe.prototype.transform = function (items, field, text, reg) {
        if (reg === void 0) { reg = false; }
        if (!items || !text || text === '') {
            return items;
        }
        if (!reg) {
            return items.filter(function (item) { return item[field].toString().toLowerCase().indexOf(text.toLowerCase()) !== -1; });
        }
        return items.filter(function (item) { return item[field].toString().indexOf(text) !== -1; });
    };
    return FilterByContainPipe;
}());
FilterByContainPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'filterByContain'
    })
], FilterByContainPipe);

//# sourceMappingURL=filter-by-contain.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/shared/filter-by-range.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterByRangePipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterByRangePipe = (function () {
    function FilterByRangePipe() {
    }
    FilterByRangePipe.prototype.transform = function (items, field, min, max) {
        if (min === void 0) { min = null; }
        if (max === void 0) { max = null; }
        if (!items || (min === null && max === null) || min > max) {
            return items;
        }
        return items.filter(function (item) {
            if (min === null && max === null) {
                return +item[field] >= min && +item[field] <= max;
            }
            else if (min === null) {
                return +item[field] >= min;
            }
            return +item[field] <= max;
        });
    };
    return FilterByRangePipe;
}());
FilterByRangePipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'filterByRange'
    })
], FilterByRangePipe);

//# sourceMappingURL=filter-by-range.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/shared/filter-by-text.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterByTextPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterByTextPipe = (function () {
    function FilterByTextPipe() {
    }
    FilterByTextPipe.prototype.transform = function (items, text, field, reg) {
        if (reg === void 0) { reg = false; }
        if (!items || !text || text === '') {
            return items;
        }
        if (!reg) {
            return items.filter(function (item) { return item[field].toString().toLowerCase().indexOf(text.toLowerCase()) !== -1; });
        }
        return items.filter(function (item) { return item[field].toString().indexOf(text) !== -1; });
    };
    return FilterByTextPipe;
}());
FilterByTextPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'filterByText'
    })
], FilterByTextPipe);

//# sourceMappingURL=filter-by-text.pipe.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[1]);
//# sourceMappingURL=main.bundle.js.map