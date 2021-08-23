(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/bsi/Documents/Project/Portfolio/scullyblog/src/main.ts */"zUnb");


/***/ }),

/***/ "0iSh":
/*!*****************************************************!*\
  !*** ./src/app/shared/http404/http404.component.ts ***!
  \*****************************************************/
/*! exports provided: HTTP404Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTTP404Component", function() { return HTTP404Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class HTTP404Component {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
}
HTTP404Component.ɵfac = function HTTP404Component_Factory(t) { return new (t || HTTP404Component)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
HTTP404Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HTTP404Component, selectors: [["app-http404"]], decls: 2, vars: 0, template: function HTTP404Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Not Found");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJodHRwNDA0LmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HTTP404Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-http404',
                templateUrl: './http404.component.html',
                styleUrls: ['./http404.component.css'],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "1zCf":
/*!*******************************************!*\
  !*** ./src/app/shared/word-count.pipe.ts ***!
  \*******************************************/
/*! exports provided: WordCountPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WordCountPipe", function() { return WordCountPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class WordCountPipe {
    transform(value) {
        const wordsPerMinute = 200;
        const noOfWords = value;
        const minutes = noOfWords / wordsPerMinute;
        const readTime = Math.ceil(minutes);
        return `${readTime} minute read`;
    }
}
WordCountPipe.ɵfac = function WordCountPipe_Factory(t) { return new (t || WordCountPipe)(); };
WordCountPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "readTime", type: WordCountPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WordCountPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'readTime'
            }]
    }], null, null); })();


/***/ }),

/***/ "67dR":
/*!****************************************!*\
  !*** ./src/app/shared/caption.pipe.ts ***!
  \****************************************/
/*! exports provided: CaptionPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CaptionPipe", function() { return CaptionPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class CaptionPipe {
    transform(value) {
        return value.slice(0, 130) + ' ...';
    }
}
CaptionPipe.ɵfac = function CaptionPipe_Factory(t) { return new (t || CaptionPipe)(); };
CaptionPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "caption", type: CaptionPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CaptionPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'caption'
            }]
    }], null, null); })();


/***/ }),

/***/ "AytR":
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
const environment = {
    production: false
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

/***/ "FRWW":
/*!*******************************************!*\
  !*** ./src/app/shared/article.service.ts ***!
  \*******************************************/
/*! exports provided: ArticleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleService", function() { return ArticleService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");



class ArticleService {
    constructor() {
        this.blogs = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    setData($data) {
        this.blogs.next($data);
    }
    getData() {
        return this.blogs.asObservable();
    }
    resetData() {
        this.blogs = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
}
ArticleService.ɵfac = function ArticleService_Factory(t) { return new (t || ArticleService)(); };
ArticleService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ArticleService, factory: ArticleService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ArticleService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Fr17":
/*!***********************************************!*\
  !*** ./src/app/shared/hero/hero.component.ts ***!
  \***********************************************/
/*! exports provided: HeroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroComponent", function() { return HeroComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class HeroComponent {
    constructor() { }
    ngOnInit() {
    }
}
HeroComponent.ɵfac = function HeroComponent_Factory(t) { return new (t || HeroComponent)(); };
HeroComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeroComponent, selectors: [["app-hero"]], decls: 18, vars: 0, consts: [[1, "container-fluid"], [1, "container"], [1, "row"], [1, "col-lg-6"], [1, "hero"], [1, "job-title"], [1, "my-name"], [1, "my-info"], [1, "btn", "btn-primary"], ["src", "./assets/pattern/pattern-1.png", "alt", "", 1, "img-pattern-1"], ["src", "./assets/afif.png", "alt", "", 1, "img-me"], ["src", "./assets/pattern/pattern-2.png", "alt", "", 1, "img-pattern-2"]], template: function HeroComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Frontend Developer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h1", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Afif Alfiano");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Hello friend, let's connect with the following social media and make sure to subscribe this blog to get the latest info");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Contact Me");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".hero[_ngcontent-%COMP%] {\n  position: relative;\n  top: 0;\n  left: 0;\n  width: 100%;\n  overflow-x: hidden;\n  height: 888px;\n}\n\n.job-title[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  top: 190px;\n  font-weight: bold;\n  font-size: 48px;\n  color: #fff;\n}\n\n.btn-primary[_ngcontent-%COMP%] {\n  position: relative;\n  width: 190px;\n  min-height: 44px;\n  top: 250px;\n  background:\n    linear-gradient(\n      90deg,\n      #ff3186 0.12%,\n      #ff7d5a 100%\n    );\n  border: none;\n  border-radius: 20px;\n}\n\n.my-name[_ngcontent-%COMP%] {\n  position: relative;\n  top: 210px;\n  font-weight: 900;\n  font-size: 100px;\n  color: #fff;\n}\n\n.my-info[_ngcontent-%COMP%] {\n  position: relative;\n  top: 221px;\n  font-size: 24px;\n  line-height: 39px;\n  color: #fff;\n}\n\n.col-lg-6[_ngcontent-%COMP%] {\n  padding: 0;\n  margin: 0;\n}\n\n.img-me[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 200px;\n  right: 0;\n  z-index: 200;\n  width: 500px;\n}\n\n.img-pattern-1[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 710px;\n  left: 0;\n}\n\n.img-pattern-2[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 500px;\n  right: 0;\n}\n\n.container-fluid[_ngcontent-%COMP%] {\n  background: linear-gradient(124.65deg, #3b42e7 11.8%, #ff3186 69.04%, #ff7d5a 87.07%);\n  animation: gradient 15s ease infinite;\n  background-size: 400% 400%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlcm8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztFQUNQLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsYUFBYTtBQUNmOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxVQUFVO0VBQ1YsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixVQUFVO0VBQ1Y7Ozs7O0tBS0c7RUFDSCxZQUFZO0VBQ1osbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsU0FBUztBQUNYOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixRQUFRO0VBQ1IsWUFBWTtFQUNaLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsT0FBTztBQUNUOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxxRkFBcUY7RUFDckYscUNBQXFDO0VBQ3JDLDBCQUEwQjtBQUM1QiIsImZpbGUiOiJoZXJvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVybyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICBoZWlnaHQ6IDg4OHB4O1xufVxuXG4uam9iLXRpdGxlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgdG9wOiAxOTBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogNDhweDtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5idG4tcHJpbWFyeSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDE5MHB4O1xuICBtaW4taGVpZ2h0OiA0NHB4O1xuICB0b3A6IDI1MHB4O1xuICBiYWNrZ3JvdW5kOlxuICAgIGxpbmVhci1ncmFkaWVudChcbiAgICAgIDkwZGVnLFxuICAgICAgI2ZmMzE4NiAwLjEyJSxcbiAgICAgICNmZjdkNWEgMTAwJVxuICAgICk7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbn1cblxuLm15LW5hbWUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMjEwcHg7XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG4gIGZvbnQtc2l6ZTogMTAwcHg7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4ubXktaW5mbyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAyMjFweDtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBsaW5lLWhlaWdodDogMzlweDtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5jb2wtbGctNiB7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbn1cblxuLmltZy1tZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAyMDBweDtcbiAgcmlnaHQ6IDA7XG4gIHotaW5kZXg6IDIwMDtcbiAgd2lkdGg6IDUwMHB4O1xufVxuXG4uaW1nLXBhdHRlcm4tMSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA3MTBweDtcbiAgbGVmdDogMDtcbn1cblxuLmltZy1wYXR0ZXJuLTIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAwcHg7XG4gIHJpZ2h0OiAwO1xufVxuXG4uY29udGFpbmVyLWZsdWlkIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEyNC42NWRlZywgIzNiNDJlNyAxMS44JSwgI2ZmMzE4NiA2OS4wNCUsICNmZjdkNWEgODcuMDclKTtcbiAgYW5pbWF0aW9uOiBncmFkaWVudCAxNXMgZWFzZSBpbmZpbml0ZTtcbiAgYmFja2dyb3VuZC1zaXplOiA0MDAlIDQwMCU7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeroComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-hero',
                templateUrl: './hero.component.html',
                styleUrls: ['./hero.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "LVr7":
/*!**********************************************!*\
  !*** ./src/app/shared/string-filter.pipe.ts ***!
  \**********************************************/
/*! exports provided: StringFilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StringFilterPipe", function() { return StringFilterPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class StringFilterPipe {
    // tslint:disable-next-line:typedef
    transform(value, q) {
        if (!q || q === '') {
            return value;
        }
        return value.filter(item => -1 < item.toLowerCase().indexOf(q.toLowerCase()));
    }
}
StringFilterPipe.ɵfac = function StringFilterPipe_Factory(t) { return new (t || StringFilterPipe)(); };
StringFilterPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "stringFilter", type: StringFilterPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StringFilterPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'stringFilter'
            }]
    }], null, null); })();


/***/ }),

/***/ "PCNd":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _string_filter_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./string-filter.pipe */ "LVr7");
/* harmony import */ var _caption_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./caption.pipe */ "67dR");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer/footer.component */ "jQpT");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _word_count_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./word-count.pipe */ "1zCf");
/* harmony import */ var _about_me_about_me_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./about-me/about-me.component */ "efTe");
/* harmony import */ var _experience_experience_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./experience/experience.component */ "cYTz");
/* harmony import */ var _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./portfolio/portfolio.component */ "Z252");
/* harmony import */ var _featured_post_featured_post_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./featured-post/featured-post.component */ "WgW3");
/* harmony import */ var _hero_hero_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./hero/hero.component */ "Fr17");
/* harmony import */ var _nav_a_nav_a_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./nav-a/nav-a.component */ "t0QF");
/* harmony import */ var _subsribe_blog_subsribe_blog_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./subsribe-blog/subsribe-blog.component */ "agtO");
/* harmony import */ var _article_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./article.service */ "FRWW");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ "tyNb");
















class SharedModule {
}
SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ factory: function SharedModule_Factory(t) { return new (t || SharedModule)(); }, providers: [_article_service__WEBPACK_IMPORTED_MODULE_13__["ArticleService"]], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_14__["RouterModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"], _caption_pipe__WEBPACK_IMPORTED_MODULE_1__["CaptionPipe"], _string_filter_pipe__WEBPACK_IMPORTED_MODULE_0__["StringFilterPipe"], _word_count_pipe__WEBPACK_IMPORTED_MODULE_5__["WordCountPipe"], _about_me_about_me_component__WEBPACK_IMPORTED_MODULE_6__["AboutMeComponent"], _experience_experience_component__WEBPACK_IMPORTED_MODULE_7__["ExperienceComponent"], _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_8__["PortfolioComponent"], _featured_post_featured_post_component__WEBPACK_IMPORTED_MODULE_9__["FeaturedPostComponent"], _hero_hero_component__WEBPACK_IMPORTED_MODULE_10__["HeroComponent"], _nav_a_nav_a_component__WEBPACK_IMPORTED_MODULE_11__["NavAComponent"], _subsribe_blog_subsribe_blog_component__WEBPACK_IMPORTED_MODULE_12__["SubsribeBlogComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_14__["RouterModule"]], exports: [_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"],
        _caption_pipe__WEBPACK_IMPORTED_MODULE_1__["CaptionPipe"],
        _string_filter_pipe__WEBPACK_IMPORTED_MODULE_0__["StringFilterPipe"],
        _word_count_pipe__WEBPACK_IMPORTED_MODULE_5__["WordCountPipe"],
        _hero_hero_component__WEBPACK_IMPORTED_MODULE_10__["HeroComponent"],
        _about_me_about_me_component__WEBPACK_IMPORTED_MODULE_6__["AboutMeComponent"],
        _experience_experience_component__WEBPACK_IMPORTED_MODULE_7__["ExperienceComponent"],
        _featured_post_featured_post_component__WEBPACK_IMPORTED_MODULE_9__["FeaturedPostComponent"],
        _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_8__["PortfolioComponent"],
        _nav_a_nav_a_component__WEBPACK_IMPORTED_MODULE_11__["NavAComponent"],
        _subsribe_blog_subsribe_blog_component__WEBPACK_IMPORTED_MODULE_12__["SubsribeBlogComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
        args: [{
                // tslint:disable-next-line:max-line-length
                declarations: [_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"], _caption_pipe__WEBPACK_IMPORTED_MODULE_1__["CaptionPipe"], _string_filter_pipe__WEBPACK_IMPORTED_MODULE_0__["StringFilterPipe"], _word_count_pipe__WEBPACK_IMPORTED_MODULE_5__["WordCountPipe"], _about_me_about_me_component__WEBPACK_IMPORTED_MODULE_6__["AboutMeComponent"], _experience_experience_component__WEBPACK_IMPORTED_MODULE_7__["ExperienceComponent"], _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_8__["PortfolioComponent"], _featured_post_featured_post_component__WEBPACK_IMPORTED_MODULE_9__["FeaturedPostComponent"], _hero_hero_component__WEBPACK_IMPORTED_MODULE_10__["HeroComponent"], _nav_a_nav_a_component__WEBPACK_IMPORTED_MODULE_11__["NavAComponent"], _subsribe_blog_subsribe_blog_component__WEBPACK_IMPORTED_MODULE_12__["SubsribeBlogComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_14__["RouterModule"]
                ],
                exports: [
                    _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"],
                    _caption_pipe__WEBPACK_IMPORTED_MODULE_1__["CaptionPipe"],
                    _string_filter_pipe__WEBPACK_IMPORTED_MODULE_0__["StringFilterPipe"],
                    _word_count_pipe__WEBPACK_IMPORTED_MODULE_5__["WordCountPipe"],
                    _hero_hero_component__WEBPACK_IMPORTED_MODULE_10__["HeroComponent"],
                    _about_me_about_me_component__WEBPACK_IMPORTED_MODULE_6__["AboutMeComponent"],
                    _experience_experience_component__WEBPACK_IMPORTED_MODULE_7__["ExperienceComponent"],
                    _featured_post_featured_post_component__WEBPACK_IMPORTED_MODULE_9__["FeaturedPostComponent"],
                    _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_8__["PortfolioComponent"],
                    _nav_a_nav_a_component__WEBPACK_IMPORTED_MODULE_11__["NavAComponent"],
                    _subsribe_blog_subsribe_blog_component__WEBPACK_IMPORTED_MODULE_12__["SubsribeBlogComponent"]
                ],
                providers: [_article_service__WEBPACK_IMPORTED_MODULE_13__["ArticleService"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



// tslint:disable-next-line:ban-types
class AppComponent {
    constructor(router) {
        this.router = router;
        this.title = 'afifalfiano';
        // this.router.events.subscribe(event => {
        //   if (event instanceof NavigationEnd) {
        //     (window as any).ga('set', 'page', event.urlAfterRedirects);
        //     (window as any).ga('send', 'pageview');
        //   }
        // });
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "WgW3":
/*!*****************************************************************!*\
  !*** ./src/app/shared/featured-post/featured-post.component.ts ***!
  \*****************************************************************/
/*! exports provided: FeaturedPostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeaturedPostComponent", function() { return FeaturedPostComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _article_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../article.service */ "FRWW");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _caption_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../caption.pipe */ "67dR");
/* harmony import */ var _word_count_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../word-count.pipe */ "1zCf");







function FeaturedPostComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h5", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Post on ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " by ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "999 Likes ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](20, "caption");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](24, "readTime");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", item_r1.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", item_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.categories);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 9, item_r1.publishedAt));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.authors);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](20, 11, item_r1.thumbnailText));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", item_r1.route, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](24, 13, item_r1.wordCount));
} }
class FeaturedPostComponent {
    constructor(router, articleSvc) {
        this.router = router;
        this.articleSvc = articleSvc;
        this.recentBlog = [];
    }
    ngOnInit() {
        this.onlyGetBlog();
    }
    goToBlogs() {
        this.router.navigateByUrl('/myblogs');
    }
    onlyGetBlog() {
        let dataTemp = [];
        if (localStorage.getItem('articles')) {
            const dataLocal = localStorage.getItem('articles');
            if (dataLocal) {
                const data = JSON.parse(dataLocal);
                dataTemp = data;
            }
        }
        else {
            this.articleSvc.getData().subscribe((response) => {
                const data = response;
                dataTemp = data;
            });
        }
        const dataBlog = dataTemp.map((item, index) => {
            if (index < 3) {
                return item;
            }
        });
        const dataFix = dataBlog.filter((item) => item !== undefined);
        this.recentBlog = dataFix;
    }
}
FeaturedPostComponent.ɵfac = function FeaturedPostComponent_Factory(t) { return new (t || FeaturedPostComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_article_service__WEBPACK_IMPORTED_MODULE_2__["ArticleService"])); };
FeaturedPostComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FeaturedPostComponent, selectors: [["app-featured-post"]], decls: 11, vars: 1, consts: [[1, "container-fluid", "featured-post"], [1, "text-center", "post-title"], [1, "container", "row", "mt-5", "mx-auto"], ["class", "col-lg-4", 4, "ngFor", "ngForOf"], [1, "mx-auto"], [1, "btn", "btn-orange", 3, "click"], [1, "col-lg-4"], [1, "card"], [1, "card-img-top", 3, "src", "alt"], [1, "category-post"], [1, "card-body"], [1, "card-title"], [1, "card-published"], [1, "text-primary"], [1, "card-likes", "text-success"], [1, "card-text"], [1, "action"], [1, "btn", "btn-primary", 3, "href"], ["href", "#", 1, "btn", "btn-success"], ["aria-hidden", "true", 1, "fa", "fa-thumbs-up", "fa-lg"]], template: function FeaturedPostComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Featured Post");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "This is my blog or tutorial that make other people can read and implements some tutorial");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, FeaturedPostComponent_div_7_Template, 27, 15, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FeaturedPostComponent_Template_button_click_9_listener() { return ctx.goToBlogs(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Want to read more articles? Just in here");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.recentBlog);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"], _caption_pipe__WEBPACK_IMPORTED_MODULE_4__["CaptionPipe"], _word_count_pipe__WEBPACK_IMPORTED_MODULE_5__["WordCountPipe"]], styles: [".featured-post[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  height: 1155px;\n  overflow-x: hidden;\n  background: linear-gradient(131.91deg, #aae2d8 0.01%, #389a9a 37.19%, #3b42e7 98.56%);\n  animation: gradient 15s ease infinite;\n  background-size: 400% 400%;\n}\n\n.btn[_ngcontent-%COMP%] {\n  border-radius: 10px;\n}\n\n.btn-primary[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      290.91deg,\n      #d80bbc,\n      #3b42e7\n    );\n  border: none;\n  min-width: 220px;\n}\n\n.btn-success[_ngcontent-%COMP%] {\n  background: linear-gradient(131.91deg, #aae2d8 0.01%, #389a9a 37.19%, #3b42e7 98.56%);\n  min-width: 60px;\n  border: none;\n}\n\n.post-title[_ngcontent-%COMP%] {\n  padding-top: 200px;\n}\n\n.btn-orange[_ngcontent-%COMP%] {\n  background: linear-gradient(90deg, #ff3186 0.12%, #ff7d5a 100%);\n  border-radius: 15px;\n  color: #fff;\n  padding: 10px;\n  margin-top: 50px;\n  min-width: 300px;\n}\n\n.card-img-top[_ngcontent-%COMP%] {\n  min-height: 250px;\n}\n\n.card-published[_ngcontent-%COMP%], .card-likes[_ngcontent-%COMP%] {\n  margin: 0;\n  padding-bottom: 10px;\n}\n\n.category-post[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  background:\n    linear-gradient(\n      180deg,\n      #ff3186 0.12%,\n      #ff7d5a 100%\n    );\n  border-radius: 20px 0 20px 0;\n  color: #fff;\n  min-width: 100px;\n  padding: 10px;\n  text-align: center;\n}\n\n.action[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n\n.img-empty[_ngcontent-%COMP%] {\n  width: 347px;\n  height: 270px;\n  background: #c4c4c4;\n  border-radius: 20px 20px 0 0;\n}\n\n.card[_ngcontent-%COMP%] {\n  width: 347px;\n  height: 554px;\n  border: none;\n  border-radius: 20px;\n}\n\n.post-title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-family: Ruda;\n  font-style: normal;\n  font-weight: 900;\n  font-size: 72px;\n  line-height: 95px;\n  color: #fff;\n}\n\n.post-title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 24px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZlYXR1cmVkLXBvc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixxRkFBcUY7RUFDckYscUNBQXFDO0VBQ3JDLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFOzs7OztLQUtHO0VBQ0gsWUFBWTtFQUNaLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHFGQUFxRjtFQUNyRixlQUFlO0VBQ2YsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsK0RBQStEO0VBQy9ELG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7O0VBRUUsU0FBUztFQUNULG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztFQUNQOzs7OztLQUtHO0VBQ0gsNEJBQTRCO0VBQzVCLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLFlBQVk7RUFDWixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxlQUFlO0FBQ2pCIiwiZmlsZSI6ImZlYXR1cmVkLXBvc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mZWF0dXJlZC1wb3N0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMTU1cHg7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzMS45MWRlZywgI2FhZTJkOCAwLjAxJSwgIzM4OWE5YSAzNy4xOSUsICMzYjQyZTcgOTguNTYlKTtcbiAgYW5pbWF0aW9uOiBncmFkaWVudCAxNXMgZWFzZSBpbmZpbml0ZTtcbiAgYmFja2dyb3VuZC1zaXplOiA0MDAlIDQwMCU7XG59XG5cbi5idG4ge1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4uYnRuLXByaW1hcnkge1xuICBiYWNrZ3JvdW5kOlxuICAgIGxpbmVhci1ncmFkaWVudChcbiAgICAgIDI5MC45MWRlZyxcbiAgICAgICNkODBiYmMsXG4gICAgICAjM2I0MmU3XG4gICAgKTtcbiAgYm9yZGVyOiBub25lO1xuICBtaW4td2lkdGg6IDIyMHB4O1xufVxuXG4uYnRuLXN1Y2Nlc3Mge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTMxLjkxZGVnLCAjYWFlMmQ4IDAuMDElLCAjMzg5YTlhIDM3LjE5JSwgIzNiNDJlNyA5OC41NiUpO1xuICBtaW4td2lkdGg6IDYwcHg7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuLnBvc3QtdGl0bGUge1xuICBwYWRkaW5nLXRvcDogMjAwcHg7XG59XG5cbi5idG4tb3JhbmdlIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjZmYzMTg2IDAuMTIlLCAjZmY3ZDVhIDEwMCUpO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBjb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogMTBweDtcbiAgbWFyZ2luLXRvcDogNTBweDtcbiAgbWluLXdpZHRoOiAzMDBweDtcbn1cblxuLmNhcmQtaW1nLXRvcCB7XG4gIG1pbi1oZWlnaHQ6IDI1MHB4O1xufVxuXG4uY2FyZC1wdWJsaXNoZWQsXG4uY2FyZC1saWtlcyB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG59XG5cbi5jYXRlZ29yeS1wb3N0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGJhY2tncm91bmQ6XG4gICAgbGluZWFyLWdyYWRpZW50KFxuICAgICAgMTgwZGVnLFxuICAgICAgI2ZmMzE4NiAwLjEyJSxcbiAgICAgICNmZjdkNWEgMTAwJVxuICAgICk7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHggMCAyMHB4IDA7XG4gIGNvbG9yOiAjZmZmO1xuICBtaW4td2lkdGg6IDEwMHB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5hY3Rpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5pbWctZW1wdHkge1xuICB3aWR0aDogMzQ3cHg7XG4gIGhlaWdodDogMjcwcHg7XG4gIGJhY2tncm91bmQ6ICNjNGM0YzQ7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHggMjBweCAwIDA7XG59XG5cbi5jYXJkIHtcbiAgd2lkdGg6IDM0N3B4O1xuICBoZWlnaHQ6IDU1NHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG59XG5cbi5wb3N0LXRpdGxlIGgxIHtcbiAgZm9udC1mYW1pbHk6IFJ1ZGE7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgZm9udC1zaXplOiA3MnB4O1xuICBsaW5lLWhlaWdodDogOTVweDtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5wb3N0LXRpdGxlIHAge1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAyNHB4O1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FeaturedPostComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-featured-post',
                templateUrl: './featured-post.component.html',
                styleUrls: ['./featured-post.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _article_service__WEBPACK_IMPORTED_MODULE_2__["ArticleService"] }]; }, null); })();


/***/ }),

/***/ "Z252":
/*!*********************************************************!*\
  !*** ./src/app/shared/portfolio/portfolio.component.ts ***!
  \*********************************************************/
/*! exports provided: PortfolioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioComponent", function() { return PortfolioComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class PortfolioComponent {
    constructor() { }
    ngOnInit() {
    }
}
PortfolioComponent.ɵfac = function PortfolioComponent_Factory(t) { return new (t || PortfolioComponent)(); };
PortfolioComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PortfolioComponent, selectors: [["app-portfolio"]], decls: 82, vars: 0, consts: [[1, "container"], [1, "row", "portfolio-title"], [1, "row"], [1, "real-project"], [1, "wrapper-project"], [1, "col-lg-4"], [1, "card"], [1, "cover"], ["src", "./assets/portfolio/static-ecommerce.jpg", "alt", "Static Ecommerce", 1, "img", "img-responsive", "thumbnail"], [1, "card-body"], [1, "card-title"], [1, "card-text"], ["href", "#", 1, "btn", "btn-primary"], ["src", "./assets/portfolio/pwa-pokemon.jpg", "alt", "PWA Pokemon", 1, "img", "img-responsive", "thumbnail"], ["src", "./assets/portfolio/kabar-bola.jpg", "alt", "Kabar Bola", 1, "img", "img-responsive", "thumbnail"], ["alt", "...", 1, "card-img-top", "img-empty"]], template: function PortfolioComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Portfolio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "So far this is my current portfolio either on real apps or just project. In this section I will highlight maybe 4 real project that used by client or stakeholder.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Real Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h5", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Pokemon Card Apps");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Build an application using the angular framework with pokemon api. Also uses lazy loading images and PWAs to improve website performance");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Detail");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h5", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Static E Commerce Apps");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Create a simple e commerce static website using html, css, js and bootstrap. Not too many features because it's just a static website");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Detail");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h5", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Football Information Apps");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Create a simple football schedule website with native javascript, pwa, and webpack. Don't forget to use push notifications with the help of firebase to push messages.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Detail");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Side Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "h5", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Card title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo odit atque ipsam delectus sunt voluptate ullam rem saepe facere odio placeat, vel labore dignissimos doloribus obcaecati aut ipsa nemo pariatur!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Go somewhere");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "h5", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Card title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo odit atque ipsam delectus sunt voluptate ullam rem saepe facere odio placeat, vel labore dignissimos doloribus obcaecati aut ipsa nemo pariatur!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Go somewhere");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "h5", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Card title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo odit atque ipsam delectus sunt voluptate ullam rem saepe facere odio placeat, vel labore dignissimos doloribus obcaecati aut ipsa nemo pariatur!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Go somewhere");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".portfolio-title[_ngcontent-%COMP%] {\n  padding-top: 200px;\n}\n\n.container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]:nth-child(3) {\n  padding-bottom: 200px;\n}\n\n.btn[_ngcontent-%COMP%] {\n  border-radius: 10px;\n}\n\n.btn-primary[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      132.93deg,\n      #d80bbc 0%,\n      #ff3186 45.89%,\n      #ff7d5a 98.55%\n    );\n  color: #fff;\n  border: none;\n  min-width: 100px;\n}\n\n.portfolio-title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  background:\n    -webkit-linear-gradient(\n      130deg,\n      #f3654f,\n      #ffbf4b\n    );\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  font-family: Ruda;\n  font-style: normal;\n  font-weight: 900;\n  font-size: 72px;\n  line-height: 95px;\n}\n\n.img-empty[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 200px;\n  background: #c4c4c4;\n  border-radius: 20px 20px 0 0;\n}\n\n.cover[_ngcontent-%COMP%] {\n  min-height: 207px;\n}\n\n.thumbnail[_ngcontent-%COMP%] {\n  height: auto;\n  width: 100%;\n  transform: scale(1.3);\n}\n\n.card[_ngcontent-%COMP%] {\n  width: 347px;\n  min-height: 500px;\n  border-radius: 20px;\n}\n\n.card-title[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n\n.card-body[_ngcontent-%COMP%] {\n  min-height: 270px;\n  height: 270px;\n}\n\n.portfolio-title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-family: Ruda;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 24px;\n  line-height: 30px;\n  color: #1d2070;\n}\n\n.real-project[_ngcontent-%COMP%] {\n  padding: 50px 0 30px 0;\n  display: block;\n}\n\n.real-project[_ngcontent-%COMP%]    > h2[_ngcontent-%COMP%] {\n  border-top: 4px solid orange;\n  font-family: Ruda;\n  background:\n    -webkit-linear-gradient(\n      130deg,\n      #f3654f,\n      #ffbf4b\n    );\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  font-style: normal;\n  font-weight: 900;\n  font-size: 48px;\n  line-height: 64px;\n}\n\n.wrapper-project[_ngcontent-%COMP%] {\n  background-color: rgba(59, 66, 231, 0.06);\n  border-radius: 20px;\n  display: flex;\n\n  \n\n  \n  padding: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvcnRmb2xpby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFOzs7Ozs7S0FNRztFQUNILFdBQVc7RUFDWCxZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0U7Ozs7O0tBS0c7RUFDSCw2QkFBNkI7RUFDN0Isb0NBQW9DO0VBQ3BDLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsNEJBQTRCO0VBQzVCLGlCQUFpQjtFQUNqQjs7Ozs7S0FLRztFQUNILDZCQUE2QjtFQUM3QixvQ0FBb0M7RUFDcEMsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UseUNBQXlDO0VBQ3pDLG1CQUFtQjtFQUNuQixhQUFhOztFQUViLGlCQUFpQjs7RUFFakI7Ozs7d0JBSXNCO0VBQ3RCLGFBQWE7QUFDZiIsImZpbGUiOiJwb3J0Zm9saW8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLnBvcnRmb2xpby10aXRsZSB7XG4gIHBhZGRpbmctdG9wOiAyMDBweDtcbn1cblxuLmNvbnRhaW5lciAucm93Om50aC1jaGlsZCgzKSB7XG4gIHBhZGRpbmctYm90dG9tOiAyMDBweDtcbn1cblxuLmJ0biB7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi5idG4tcHJpbWFyeSB7XG4gIGJhY2tncm91bmQ6XG4gICAgbGluZWFyLWdyYWRpZW50KFxuICAgICAgMTMyLjkzZGVnLFxuICAgICAgI2Q4MGJiYyAwJSxcbiAgICAgICNmZjMxODYgNDUuODklLFxuICAgICAgI2ZmN2Q1YSA5OC41NSVcbiAgICApO1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyOiBub25lO1xuICBtaW4td2lkdGg6IDEwMHB4O1xufVxuXG4ucG9ydGZvbGlvLXRpdGxlIGgxIHtcbiAgYmFja2dyb3VuZDpcbiAgICAtd2Via2l0LWxpbmVhci1ncmFkaWVudChcbiAgICAgIDEzMGRlZyxcbiAgICAgICNmMzY1NGYsXG4gICAgICAjZmZiZjRiXG4gICAgKTtcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgZm9udC1mYW1pbHk6IFJ1ZGE7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgZm9udC1zaXplOiA3MnB4O1xuICBsaW5lLWhlaWdodDogOTVweDtcbn1cblxuLmltZy1lbXB0eSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDIwMHB4O1xuICBiYWNrZ3JvdW5kOiAjYzRjNGM0O1xuICBib3JkZXItcmFkaXVzOiAyMHB4IDIwcHggMCAwO1xufVxuXG4uY292ZXIge1xuICBtaW4taGVpZ2h0OiAyMDdweDtcbn1cblxuLnRodW1ibmFpbCB7XG4gIGhlaWdodDogYXV0bztcbiAgd2lkdGg6IDEwMCU7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4zKTtcbn1cblxuLmNhcmQge1xuICB3aWR0aDogMzQ3cHg7XG4gIG1pbi1oZWlnaHQ6IDUwMHB4O1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xufVxuXG4uY2FyZC10aXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uY2FyZC1ib2R5IHtcbiAgbWluLWhlaWdodDogMjcwcHg7XG4gIGhlaWdodDogMjcwcHg7XG59XG5cbi5wb3J0Zm9saW8tdGl0bGUgcCB7XG4gIGZvbnQtZmFtaWx5OiBSdWRhO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDI0cHg7XG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICBjb2xvcjogIzFkMjA3MDtcbn1cblxuLnJlYWwtcHJvamVjdCB7XG4gIHBhZGRpbmc6IDUwcHggMCAzMHB4IDA7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4ucmVhbC1wcm9qZWN0ID4gaDIge1xuICBib3JkZXItdG9wOiA0cHggc29saWQgb3JhbmdlO1xuICBmb250LWZhbWlseTogUnVkYTtcbiAgYmFja2dyb3VuZDpcbiAgICAtd2Via2l0LWxpbmVhci1ncmFkaWVudChcbiAgICAgIDEzMGRlZyxcbiAgICAgICNmMzY1NGYsXG4gICAgICAjZmZiZjRiXG4gICAgKTtcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogOTAwO1xuICBmb250LXNpemU6IDQ4cHg7XG4gIGxpbmUtaGVpZ2h0OiA2NHB4O1xufVxuXG4ud3JhcHBlci1wcm9qZWN0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg1OSwgNjYsIDIzMSwgMC4wNik7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG5cbiAgLyogd2lkdGg6IDEwMCU7ICovXG5cbiAgLyoganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDsgKi9cbiAgcGFkZGluZzogMzBweDtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PortfolioComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-portfolio',
                templateUrl: './portfolio.component.html',
                styleUrls: ['./portfolio.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared/shared.module */ "PCNd");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @scullyio/ng-lib */ "sbAP");
/* harmony import */ var _shared_http404_http404_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/http404/http404.component */ "0iSh");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/service-worker */ "Jho9");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../environments/environment */ "AytR");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "3Pt+");













class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__["SharedModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_6__["ScullyLibModule"],
            _angular_service_worker__WEBPACK_IMPORTED_MODULE_8__["ServiceWorkerModule"].register('ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].production, registrationStrategy: 'registerImmediately' }),
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _shared_http404_http404_component__WEBPACK_IMPORTED_MODULE_7__["HTTP404Component"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__["SharedModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_6__["ScullyLibModule"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_8__["ServiceWorkerModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _shared_http404_http404_component__WEBPACK_IMPORTED_MODULE_7__["HTTP404Component"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__["SharedModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_6__["ScullyLibModule"],
                    _angular_service_worker__WEBPACK_IMPORTED_MODULE_8__["ServiceWorkerModule"].register('ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].production, registrationStrategy: 'registerImmediately' }),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "agtO":
/*!*****************************************************************!*\
  !*** ./src/app/shared/subsribe-blog/subsribe-blog.component.ts ***!
  \*****************************************************************/
/*! exports provided: SubsribeBlogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubsribeBlogComponent", function() { return SubsribeBlogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class SubsribeBlogComponent {
    constructor() { }
    ngOnInit() {
    }
}
SubsribeBlogComponent.ɵfac = function SubsribeBlogComponent_Factory(t) { return new (t || SubsribeBlogComponent)(); };
SubsribeBlogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SubsribeBlogComponent, selectors: [["app-subsribe-blog"]], decls: 13, vars: 0, consts: [[1, "container-fluid"], [1, "container", "mx-auto", "subscribe"], [1, "row"], [1, "col-12"], [1, "h1"], [1, "row", "mt-3", "form-sub"], [1, "col-lg-10"], ["type", "text", "placeholder", "qwerty@mail.xyz", 1, "form-control"], [1, "col-lg-2"], [1, "btn", "btn-primary"]], template: function SubsribeBlogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Don't missed the latest blog about tech. Just subscribe this blog.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".container-fluid[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      -45deg,\n      #ff3186,\n      #ff7d5a\n    );\n  color: #fff;\n  animation: gradient 15s ease infinite;\n  min-height: 350px;\n  background-size: 400% 400%;\n}\n\n.subscribe[_ngcontent-%COMP%] {\n  padding-top: 100px;\n  text-align: center;\n}\n\n.btn-primary[_ngcontent-%COMP%] {\n  border-radius: 15px;\n  width: 100%;\n  background:\n    linear-gradient(\n      100.91deg,\n      #d80bbc,\n      #3b42e7\n    );\n}\n\n.subscribe[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  display: inline;\n  border-radius: 15px;\n}\n\n.form-sub[_ngcontent-%COMP%] {\n  padding: 0 250px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN1YnNyaWJlLWJsb2cuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFOzs7OztLQUtHO0VBQ0gsV0FBVztFQUNYLHFDQUFxQztFQUNyQyxpQkFBaUI7RUFDakIsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1g7Ozs7O0tBS0c7QUFDTDs7QUFFQTtFQUNFLGVBQWU7RUFDZixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEIiLCJmaWxlIjoic3Vic3JpYmUtYmxvZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lci1mbHVpZCB7XG4gIGJhY2tncm91bmQ6XG4gICAgbGluZWFyLWdyYWRpZW50KFxuICAgICAgLTQ1ZGVnLFxuICAgICAgI2ZmMzE4NixcbiAgICAgICNmZjdkNWFcbiAgICApO1xuICBjb2xvcjogI2ZmZjtcbiAgYW5pbWF0aW9uOiBncmFkaWVudCAxNXMgZWFzZSBpbmZpbml0ZTtcbiAgbWluLWhlaWdodDogMzUwcHg7XG4gIGJhY2tncm91bmQtc2l6ZTogNDAwJSA0MDAlO1xufVxuXG4uc3Vic2NyaWJlIHtcbiAgcGFkZGluZy10b3A6IDEwMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5idG4tcHJpbWFyeSB7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOlxuICAgIGxpbmVhci1ncmFkaWVudChcbiAgICAgIDEwMC45MWRlZyxcbiAgICAgICNkODBiYmMsXG4gICAgICAjM2I0MmU3XG4gICAgKTtcbn1cblxuLnN1YnNjcmliZSBpbnB1dCB7XG4gIGRpc3BsYXk6IGlubGluZTtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbn1cblxuLmZvcm0tc3ViIHtcbiAgcGFkZGluZzogMCAyNTBweDtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SubsribeBlogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-subsribe-blog',
                templateUrl: './subsribe-blog.component.html',
                styleUrls: ['./subsribe-blog.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "cYTz":
/*!***********************************************************!*\
  !*** ./src/app/shared/experience/experience.component.ts ***!
  \***********************************************************/
/*! exports provided: ExperienceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExperienceComponent", function() { return ExperienceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



function ExperienceComponent_li_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.position);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.time);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.description);
} }
class ExperienceComponent {
    constructor() {
        this.myExperience = [
            {
                position: 'Frontend Developer',
                time: '20 August, 2020',
                description: 'Implementation of a design product to the web application. (On the frontend developer, we use an Angular framework.'
            },
            {
                position: 'UI/UX Designer',
                time: '20 February, 2020',
                description: 'Create a product design for a system BPM with the scrum method'
            },
            {
                position: 'IT Support',
                time: '1 January, 2019',
                description: 'Work at BSI UII on IT Support position. BSI uses a lot of technology to build systems at UII and makes clear networks and extraordinary.'
            },
            {
                position: 'Technician PT.Telkom Access',
                time: '1 October, 2017',
                description: 'Following the PKL (Field Work / Apprenticeship) program from SMK N 2 Yogyakarta for 3 months at PT. Telkom Access. Many things can be taken from these street vendors, such as how to splicing optical fiber, installing a new indihome internet connection, becoming a help desk, getting to know the internet network, knowing what ODP, ODC, Splicer, FO, and others. Perform network maintenance when an error occurs or natural factors. That\'s great an experience.'
            },
        ];
    }
    ngOnInit() {
    }
}
ExperienceComponent.ɵfac = function ExperienceComponent_Factory(t) { return new (t || ExperienceComponent)(); };
ExperienceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExperienceComponent, selectors: [["app-experience"]], decls: 9, vars: 1, consts: [[1, "experience"], [1, "mb-5"], [1, "col"], [1, "text-center", "exp-title"], [1, "mx-auto"], [1, "col-lg-8", "offset-md-2", "col-lg-8", "col-sm-8", "mr-3"], [1, "timeline"], [4, "ngFor", "ngForOf"], ["target", "_blank", "href", "#"], ["href", "#", 1, "float-right"]], template: function ExperienceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Experience");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ExperienceComponent_li_8_Template, 7, 3, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.myExperience);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: [".experience[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  min-height: 1224px;\n  background: linear-gradient(132.93deg, #d80bbc 0%, #ff3186 45.89%, #ff7d5a 98.55%);\n  animation: gradient 15s ease infinite;\n  background-size: 400% 400%;\n  color: #fff;\n}\n\n.exp-title[_ngcontent-%COMP%] {\n  padding-top: 200px;\n  font-family: Ruda;\n  font-style: normal;\n  font-weight: 900;\n  font-size: 72px;\n  line-height: 95px;\n  color: #fff;\n}\n\nul.timeline[_ngcontent-%COMP%] {\n  list-style-type: none;\n  position: relative;\n}\n\nul.timeline[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 28px;\n}\n\nul.timeline[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 20px;\n  margin: 15px 0;\n  font-weight: 300;\n}\n\nul.timeline[_ngcontent-%COMP%]::before {\n  content: ' ';\n  background: #d4d9df;\n  display: inline-block;\n  position: absolute;\n  left: 29px;\n  width: 2px;\n  height: 100%;\n  z-index: 400;\n}\n\nul.timeline[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\n  margin: 20px 0;\n  padding-left: 20px;\n  font-family: Ruda;\n  font-style: normal;\n  font-weight: bold;\n  line-height: 30px;\n  color: #fff;\n}\n\nul.timeline[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]::before {\n  content: ' ';\n  background: white;\n  display: inline-block;\n  position: absolute;\n  border-radius: 50%;\n  border: 3px solid red;\n  left: 20px;\n  width: 20px;\n  height: 20px;\n  z-index: 400;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4cGVyaWVuY2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGtGQUFrRjtFQUNsRixxQ0FBcUM7RUFDckMsMEJBQTBCO0VBQzFCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixjQUFjO0VBQ2QsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixVQUFVO0VBQ1YsWUFBWTtFQUNaLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFlBQVk7RUFDWixpQkFBaUI7RUFDakIscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLFVBQVU7RUFDVixXQUFXO0VBQ1gsWUFBWTtFQUNaLFlBQVk7QUFDZCIsImZpbGUiOiJleHBlcmllbmNlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhwZXJpZW5jZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDEyMjRweDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzMi45M2RlZywgI2Q4MGJiYyAwJSwgI2ZmMzE4NiA0NS44OSUsICNmZjdkNWEgOTguNTUlKTtcbiAgYW5pbWF0aW9uOiBncmFkaWVudCAxNXMgZWFzZSBpbmZpbml0ZTtcbiAgYmFja2dyb3VuZC1zaXplOiA0MDAlIDQwMCU7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4uZXhwLXRpdGxlIHtcbiAgcGFkZGluZy10b3A6IDIwMHB4O1xuICBmb250LWZhbWlseTogUnVkYTtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogOTAwO1xuICBmb250LXNpemU6IDcycHg7XG4gIGxpbmUtaGVpZ2h0OiA5NXB4O1xuICBjb2xvcjogI2ZmZjtcbn1cblxudWwudGltZWxpbmUge1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxudWwudGltZWxpbmUgbGkgYSB7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDI4cHg7XG59XG5cbnVsLnRpbWVsaW5lIGxpIHAge1xuICBmb250LXNpemU6IDIwcHg7XG4gIG1hcmdpbjogMTVweCAwO1xuICBmb250LXdlaWdodDogMzAwO1xufVxuXG51bC50aW1lbGluZTo6YmVmb3JlIHtcbiAgY29udGVudDogJyAnO1xuICBiYWNrZ3JvdW5kOiAjZDRkOWRmO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMjlweDtcbiAgd2lkdGg6IDJweDtcbiAgaGVpZ2h0OiAxMDAlO1xuICB6LWluZGV4OiA0MDA7XG59XG5cbnVsLnRpbWVsaW5lID4gbGkge1xuICBtYXJnaW46IDIwcHggMDtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICBmb250LWZhbWlseTogUnVkYTtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG51bC50aW1lbGluZSA+IGxpOjpiZWZvcmUge1xuICBjb250ZW50OiAnICc7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXI6IDNweCBzb2xpZCByZWQ7XG4gIGxlZnQ6IDIwcHg7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIHotaW5kZXg6IDQwMDtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExperienceComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-experience',
                templateUrl: './experience.component.html',
                styleUrls: ['./experience.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "efTe":
/*!*******************************************************!*\
  !*** ./src/app/shared/about-me/about-me.component.ts ***!
  \*******************************************************/
/*! exports provided: AboutMeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutMeComponent", function() { return AboutMeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



function AboutMeComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("btn ", data_r1.style, " mr-3 mt-3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r1.tech);
} }
class AboutMeComponent {
    constructor() {
        this.myStack = [
            {
                tech: 'php',
                style: 'btn-outline-primary'
            },
            {
                tech: 'html',
                style: 'btn-outline-success'
            },
            {
                tech: 'css',
                style: 'btn-outline-danger'
            },
            {
                tech: 'javascript',
                style: 'btn-outline-warning'
            },
            {
                tech: 'typescript',
                style: 'btn-outline-primary'
            },
            {
                tech: 'wordpress',
                style: 'btn-outline-info'
            },
            {
                tech: 'laravel',
                style: 'btn-outline-danger'
            },
            {
                tech: 'figma',
                style: 'btn-outline-primary'
            },
            {
                tech: 'adobe xd',
                style: 'btn-outline-dark'
            },
            {
                tech: 'inkscape',
                style: 'btn-outline-secondary'
            },
            {
                tech: 'gimp',
                style: 'btn-outline-success'
            }
        ];
    }
    ngOnInit() {
    }
}
AboutMeComponent.ɵfac = function AboutMeComponent_Factory(t) { return new (t || AboutMeComponent)(); };
AboutMeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutMeComponent, selectors: [["app-about-me"]], decls: 13, vars: 1, consts: [[1, "container-fluid"], [1, "container"], [1, "row"], [1, "col-lg-6"], ["src", "./assets/images/about/about-me.png", "alt", "", 1, "img", "img-responsive", "about"], [1, "about-info"], [1, "about-title"], [1, "about-text"], [1, "list-stack"], ["class", "stack", 4, "ngFor", "ngForOf"], [1, "stack"]], template: function AboutMeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h1", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "About Me");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Hello, I'm Afif Alfiano, a web developer based in Indonesia. I have experience in web design using figma, adobe xd and build from scratch.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, AboutMeComponent_div_12_Template, 3, 4, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.myStack);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: [".about-me[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  overflow-x: hidden;\n  height: 1024px;\n  background: url('about.png');\n}\n\n.about-info[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  transform: translateY(200px);\n}\n\n.btn[_ngcontent-%COMP%] {\n  border-radius: 15px;\n}\n\n.about-title[_ngcontent-%COMP%] {\n  background:\n    -webkit-linear-gradient(\n      130deg,\n      #d80bbc,\n      #3b42e7\n    );\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  font-weight: 900;\n  font-size: 72px;\n}\n\n.about-text[_ngcontent-%COMP%] {\n  width: 588px;\n  height: auto;\n  font-size: 24px;\n  line-height: 39px;\n  color: #1d2070;\n}\n\n.stack[_ngcontent-%COMP%] {\n  display: inline;\n}\n\n.container-fluid[_ngcontent-%COMP%] {\n  min-height: 1024px;\n  background: url('about.png');\n}\n\n.container[_ngcontent-%COMP%], .col-lg-6[_ngcontent-%COMP%], .row[_ngcontent-%COMP%] {\n  min-height: 1024px;\n}\n\n.about[_ngcontent-%COMP%] {\n  transform: translateY(200px);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFib3V0LW1lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsNEJBQStDO0FBQ2pEOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRTs7Ozs7S0FLRztFQUNILDZCQUE2QjtFQUM3QixvQ0FBb0M7RUFDcEMsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsNEJBQStDO0FBQ2pEOztBQUVBOzs7RUFHRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSw0QkFBNEI7QUFDOUIiLCJmaWxlIjoiYWJvdXQtbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hYm91dC1tZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgaGVpZ2h0OiAxMDI0cHg7XG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9iZy9hYm91dC5wbmdcIik7XG59XG5cbi5hYm91dC1pbmZvIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwMHB4KTtcbn1cblxuLmJ0biB7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG59XG5cbi5hYm91dC10aXRsZSB7XG4gIGJhY2tncm91bmQ6XG4gICAgLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoXG4gICAgICAxMzBkZWcsXG4gICAgICAjZDgwYmJjLFxuICAgICAgIzNiNDJlN1xuICAgICk7XG4gIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG4gIGZvbnQtc2l6ZTogNzJweDtcbn1cblxuLmFib3V0LXRleHQge1xuICB3aWR0aDogNTg4cHg7XG4gIGhlaWdodDogYXV0bztcbiAgZm9udC1zaXplOiAyNHB4O1xuICBsaW5lLWhlaWdodDogMzlweDtcbiAgY29sb3I6ICMxZDIwNzA7XG59XG5cbi5zdGFjayB7XG4gIGRpc3BsYXk6IGlubGluZTtcbn1cblxuLmNvbnRhaW5lci1mbHVpZCB7XG4gIG1pbi1oZWlnaHQ6IDEwMjRweDtcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2JnL2Fib3V0LnBuZ1wiKTtcbn1cblxuLmNvbnRhaW5lcixcbi5jb2wtbGctNixcbi5yb3cge1xuICBtaW4taGVpZ2h0OiAxMDI0cHg7XG59XG5cbi5hYm91dCB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMDBweCk7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutMeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-about-me',
                templateUrl: './about-me.component.html',
                styleUrls: ['./about-me.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "jQpT":
/*!***************************************************!*\
  !*** ./src/app/shared/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 5, vars: 0, consts: [[1, "container-fluid", "font-small", "blue", "m-0", "p-0"], [1, "container-fluid", "footer-copyright", "bg-dark", "text-white", "text-center", "pt-3", "pb-3"], ["href", "https://github.com/afifalfiano"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u00A9 2020 Copyright ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Afif Alfiano");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["a[_ngcontent-%COMP%] {\n  background:\n    -webkit-linear-gradient(\n      130deg,\n      #ff3186 0.12%,\n      #ff7d5a 100%\n    );\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0U7Ozs7O0tBS0c7RUFDSCw2QkFBNkI7RUFDN0Isb0NBQW9DO0FBQ3RDIiwiZmlsZSI6ImZvb3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYSB7XG4gIGJhY2tncm91bmQ6XG4gICAgLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoXG4gICAgICAxMzBkZWcsXG4gICAgICAjZmYzMTg2IDAuMTIlLFxuICAgICAgI2ZmN2Q1YSAxMDAlXG4gICAgKTtcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "t0QF":
/*!*************************************************!*\
  !*** ./src/app/shared/nav-a/nav-a.component.ts ***!
  \*************************************************/
/*! exports provided: NavAComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavAComponent", function() { return NavAComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



const _c0 = function () { return ["/"]; };
const _c1 = function () { return { exact: true }; };
const _c2 = function () { return ["/myblogs"]; };
class NavAComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
}
NavAComponent.ɵfac = function NavAComponent_Factory(t) { return new (t || NavAComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
NavAComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavAComponent, selectors: [["app-nav-a"]], decls: 24, vars: 9, consts: [[1, "wrap-nav"], [1, "container", "nav-a", "mx-auto"], [1, "navbar", "navbar-expand-lg", "navbar-dark", "bg-dark"], ["routerLinkActive", "router-link-active", 1, "navbar-brand", 3, "routerLink"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "ml-auto"], [1, "nav-item"], ["routerLinkActive", "active", 1, "nav-link", 3, "routerLink", "routerLinkActiveOptions"], [1, "nav-link", 3, "routerLink", "routerLinkActive"], ["href", "#", 1, "nav-link"]], template: function NavAComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nav", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "AA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Blog");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Experience");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Portfolio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c0))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c2))("routerLinkActive", "active");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"]], styles: [".nav-a[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  top: 50px;\n  z-index: 110;\n  min-height: 75px;\n  border-radius: 20px;\n  background-color: #272952;\n}\n\n.wrap-nav[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  align-content: center;\n  justify-content: center;\n}\n\n.active[_ngcontent-%COMP%] {\n  border-bottom: 3px solid #ff3186;\n  color: #fff;\n}\n\n.bg-dark[_ngcontent-%COMP%] {\n  background-color: #272952 !important;\n}\n\n.nav-item[_ngcontent-%COMP%] {\n  margin-right: 20px;\n  font-size: 24px;\n}\n\n.nav-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  border-bottom: 3px solid #ff3186;\n}\n\n.navbar-brand[_ngcontent-%COMP%] {\n  font-style: normal;\n  font-weight: 900;\n  font-size: 28px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdi1hLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFNBQVM7RUFDVCxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsV0FBVztFQUNYLHFCQUFxQjtFQUNyQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxnQ0FBZ0M7RUFDaEMsV0FBVztBQUNiOztBQUVBO0VBQ0Usb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakIiLCJmaWxlIjoibmF2LWEuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXYtYSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIHRvcDogNTBweDtcbiAgei1pbmRleDogMTEwO1xuICBtaW4taGVpZ2h0OiA3NXB4O1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjcyOTUyO1xufVxuXG4ud3JhcC1uYXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmFjdGl2ZSB7XG4gIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjZmYzMTg2O1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLmJnLWRhcmsge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjcyOTUyICFpbXBvcnRhbnQ7XG59XG5cbi5uYXYtaXRlbSB7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbiAgZm9udC1zaXplOiAyNHB4O1xufVxuXG4ubmF2LWl0ZW0gYTpob3ZlciB7XG4gIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjZmYzMTg2O1xufVxuXG4ubmF2YmFyLWJyYW5kIHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogOTAwO1xuICBmb250LXNpemU6IDI4cHg7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavAComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-nav-a',
                templateUrl: './nav-a.component.html',
                styleUrls: ['./nav-a.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _shared_http404_http404_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared/http404/http404.component */ "0iSh");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");





// tslint:disable-next-line:max-line-length
const routes = [
    { path: '', loadChildren: () => __webpack_require__.e(/*! import() | home-home-module */ "home-home-module").then(__webpack_require__.bind(null, /*! ./home/home.module */ "ct+p")).then(m => m.HomeModule) },
    { path: 'home', loadChildren: () => __webpack_require__.e(/*! import() | home-home-module */ "home-home-module").then(__webpack_require__.bind(null, /*! ./home/home.module */ "ct+p")).then(m => m.HomeModule) },
    { path: 'blog', loadChildren: () => Promise.all(/*! import() | blog-blog-module */[__webpack_require__.e("default~blog-blog-module~myblogs-myblogs-module"), __webpack_require__.e("blog-blog-module")]).then(__webpack_require__.bind(null, /*! ./blog/blog.module */ "U4+L")).then(m => m.BlogModule) },
    { path: 'myblogs', loadChildren: () => Promise.all(/*! import() | myblogs-myblogs-module */[__webpack_require__.e("default~blog-blog-module~myblogs-myblogs-module"), __webpack_require__.e("myblogs-myblogs-module")]).then(__webpack_require__.bind(null, /*! ./myblogs/myblogs.module */ "HdG9")).then(m => m.MyblogsModule) },
    { path: 'myportfolios', loadChildren: () => __webpack_require__.e(/*! import() | my-portfolios-my-portfolios-module */ "my-portfolios-my-portfolios-module").then(__webpack_require__.bind(null, /*! ./my-portfolios/my-portfolios.module */ "Xgr5")).then(m => m.MyPortfoliosModule) },
    { path: 'blog', loadChildren: () => Promise.all(/*! import() | blog-blog-module */[__webpack_require__.e("default~blog-blog-module~myblogs-myblogs-module"), __webpack_require__.e("blog-blog-module")]).then(__webpack_require__.bind(null, /*! ./blog/blog.module */ "U4+L")).then(m => m.BlogModule) },
    { path: '**', component: _shared_http404_http404_component__WEBPACK_IMPORTED_MODULE_0__["HTTP404Component"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
                enableTracing: false
            })], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
                        enableTracing: false
                    })],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map