(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["my-portfolios-my-portfolios-module"],{

/***/ "095v":
/*!***************************************************************!*\
  !*** ./src/app/my-portfolios/my-portfolios-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: MyPortfoliosRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyPortfoliosRoutingModule", function() { return MyPortfoliosRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _my_portfolios_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./my-portfolios.component */ "ZXX8");





const routes = [{ path: '', component: _my_portfolios_component__WEBPACK_IMPORTED_MODULE_2__["MyPortfoliosComponent"] }];
class MyPortfoliosRoutingModule {
}
MyPortfoliosRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MyPortfoliosRoutingModule });
MyPortfoliosRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MyPortfoliosRoutingModule_Factory(t) { return new (t || MyPortfoliosRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MyPortfoliosRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MyPortfoliosRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "Xgr5":
/*!*******************************************************!*\
  !*** ./src/app/my-portfolios/my-portfolios.module.ts ***!
  \*******************************************************/
/*! exports provided: MyPortfoliosModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyPortfoliosModule", function() { return MyPortfoliosModule; });
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../shared/shared.module */ "PCNd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _my_portfolios_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./my-portfolios-routing.module */ "095v");
/* harmony import */ var _my_portfolios_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./my-portfolios.component */ "ZXX8");






class MyPortfoliosModule {
}
MyPortfoliosModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: MyPortfoliosModule });
MyPortfoliosModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function MyPortfoliosModule_Factory(t) { return new (t || MyPortfoliosModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _my_portfolios_routing_module__WEBPACK_IMPORTED_MODULE_3__["MyPortfoliosRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__["SharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](MyPortfoliosModule, { declarations: [_my_portfolios_component__WEBPACK_IMPORTED_MODULE_4__["MyPortfoliosComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
        _my_portfolios_routing_module__WEBPACK_IMPORTED_MODULE_3__["MyPortfoliosRoutingModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__["SharedModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MyPortfoliosModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [_my_portfolios_component__WEBPACK_IMPORTED_MODULE_4__["MyPortfoliosComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                    _my_portfolios_routing_module__WEBPACK_IMPORTED_MODULE_3__["MyPortfoliosRoutingModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__["SharedModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "ZXX8":
/*!**********************************************************!*\
  !*** ./src/app/my-portfolios/my-portfolios.component.ts ***!
  \**********************************************************/
/*! exports provided: MyPortfoliosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyPortfoliosComponent", function() { return MyPortfoliosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class MyPortfoliosComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
}
MyPortfoliosComponent.ɵfac = function MyPortfoliosComponent_Factory(t) { return new (t || MyPortfoliosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
MyPortfoliosComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MyPortfoliosComponent, selectors: [["app-my-portfolios"]], decls: 0, vars: 0, template: function MyPortfoliosComponent_Template(rf, ctx) { }, styles: ["@media only screen and (max-width: 600px) {\n  #myportfolio[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n\n  .addPortfolio[_ngcontent-%COMP%] {\n    margin-top: 5.4em !important;\n  }\n\n  .pure[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n\n  .center-small[_ngcontent-%COMP%] {\n    margin-bottom: -2em !important;\n    margin-left: -3em !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15LXBvcnRmb2xpb3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFO0lBQ0Usd0JBQXdCO0VBQzFCOztFQUVBO0lBQ0UsNEJBQTRCO0VBQzlCOztFQUVBO0lBQ0Usd0JBQXdCO0VBQzFCOztFQUVBO0lBQ0UsOEJBQThCO0lBQzlCLDRCQUE0QjtFQUM5QjtBQUNGIiwiZmlsZSI6Im15LXBvcnRmb2xpb3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgI215cG9ydGZvbGlvIHtcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuYWRkUG9ydGZvbGlvIHtcbiAgICBtYXJnaW4tdG9wOiA1LjRlbSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLnB1cmUge1xuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5jZW50ZXItc21hbGwge1xuICAgIG1hcmdpbi1ib3R0b206IC0yZW0gIWltcG9ydGFudDtcbiAgICBtYXJnaW4tbGVmdDogLTNlbSAhaW1wb3J0YW50O1xuICB9XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MyPortfoliosComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-my-portfolios',
                templateUrl: './my-portfolios.component.html',
                styleUrls: ['./my-portfolios.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=my-portfolios-my-portfolios-module.js.map