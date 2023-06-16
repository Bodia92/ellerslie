"use strict";
(self["webpackChunkglivera_webpack_template"] = self["webpackChunkglivera_webpack_template"] || []).push([["src_js_pages_events-contact-exp_js"],{

/***/ "./src/js/components/contact.js":
/*!**************************************!*\
  !*** ./src/js/components/contact.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ScssComponents_contact_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ScssComponents/contact.scss */ "./src/scss/components/contact.scss");

var contact = function contact() {};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contact);

/***/ }),

/***/ "./src/js/components/event-list.js":
/*!*****************************************!*\
  !*** ./src/js/components/event-list.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ScssComponents_event_list_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ScssComponents/event-list.scss */ "./src/scss/components/event-list.scss");
/* harmony import */ var ScssComponents_event_card_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ScssComponents/event-card.scss */ "./src/scss/components/event-card.scss");


var eventList = function eventList() {};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (eventList);

/***/ }),

/***/ "./src/js/components/get-social-scrollbar.js":
/*!***************************************************!*\
  !*** ./src/js/components/get-social-scrollbar.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.esm.js");
/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper/css */ "./node_modules/swiper/swiper.min.css");
/* harmony import */ var swiper_css_scrollbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper/css/scrollbar */ "./node_modules/swiper/modules/scrollbar/scrollbar.min.css");
/* harmony import */ var ScssComponents_scrollbar_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ScssComponents/scrollbar.scss */ "./src/scss/components/scrollbar.scss");




var getSocialScrollbar = function getSocialScrollbar() {
  var sectionSelector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '.js-get-social-section';
  var sliderSelector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '.js-get-social-slider';
  var scrollbar = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '.swiper-scrollbar';
  var $sections = document.querySelectorAll(sectionSelector);
  if (!$sections) return;
  $sections.forEach(function ($section) {
    var $slider = $section.querySelector(sliderSelector);
    if (!$slider) return;
    var $slides = $slider.querySelectorAll('.swiper-slide');
    var $scrollBar = $slider.querySelector(scrollbar);
    var slidesCounter = $slides.length <= 3;
    if (slidesCounter) {
      $scrollBar.classList.add('swiper-scrollbar--small_mod');
    } else {
      $scrollBar.classList.remove('swiper-scrollbar--small_mod');
    }
    var getSocialSwiper = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"]($slider, {
      modules: [swiper__WEBPACK_IMPORTED_MODULE_0__.Scrollbar, swiper__WEBPACK_IMPORTED_MODULE_0__.Mousewheel],
      spaceBetween: 15,
      slidesPerView: 'auto',
      scrollbar: {
        el: "".concat(scrollbar),
        draggable: true,
        dragSize: 'auto'
      },
      // mousewheel: {
      // 	enabled: true,
      // },
      forceToAxis: true,
      breakpoints: {
        640: {
          initialSlide: slidesCounter ? 1 : 0,
          spaceBetween: 20,
          centeredSlides: slidesCounter
        }
      }
    });
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getSocialScrollbar);

/***/ }),

/***/ "./src/js/components/get-social.js":
/*!*****************************************!*\
  !*** ./src/js/components/get-social.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _get_social_scrollbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-social-scrollbar */ "./src/js/components/get-social-scrollbar.js");
/* harmony import */ var ScssComponents_get_social_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ScssComponents/get-social.scss */ "./src/scss/components/get-social.scss");


var getSocial = function getSocial() {
  (0,_get_social_scrollbar__WEBPACK_IMPORTED_MODULE_0__["default"])();
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getSocial);

/***/ }),

/***/ "./src/js/components/hero-event.js":
/*!*****************************************!*\
  !*** ./src/js/components/hero-event.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.esm.js");
/* harmony import */ var swiper_css_effect_fade__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper/css/effect-fade */ "./node_modules/swiper/modules/effect-fade/effect-fade.min.css");
/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper/css */ "./node_modules/swiper/swiper.min.css");
/* harmony import */ var swiper_css_pagination__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swiper/css/pagination */ "./node_modules/swiper/modules/pagination/pagination.min.css");




var heroEvent = function heroEvent() {
  var sectionSelector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '.js-hero-event-section';
  var sliderSelector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '.js-hero-event-slider';
  var pagination = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '.swiper-pagination';
  var scrollBtn = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '.js-scroll-btn';
  var $sections = document.querySelectorAll(sectionSelector);
  if (!$sections) return;
  var $scrollBtn = document.querySelector(scrollBtn);
  if (!$scrollBtn) return;
  $sections.forEach(function (section) {
    var slider = section.querySelector(sliderSelector);
    if (!slider) return;
    var promoBannerSwiper = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"](slider, {
      modules: [swiper__WEBPACK_IMPORTED_MODULE_0__.EffectFade, swiper__WEBPACK_IMPORTED_MODULE_0__.Autoplay, swiper__WEBPACK_IMPORTED_MODULE_0__.Pagination],
      effect: 'fade',
      loop: true,
      autoplay: {
        delay: 4000
      },
      fadeEffect: {
        crossFade: true
      },
      slidesPerView: 1,
      pagination: {
        el: pagination,
        clickable: true
      }
    });
  });
  var scrollSections = function scrollSections() {
    var sections = document.querySelectorAll('.section');
    var currentPosition = window.pageYOffset;
    for (var i = 0; i < sections.length; i += 1) {
      var section = sections[i];
      var sectionTop = section.offsetTop;
      var sectionHeight = section.offsetHeight;
      if (currentPosition >= sectionTop && currentPosition < sectionTop + sectionHeight) {
        var nextSection = sections[i + 1];
        if (nextSection) {
          var nextSectionTop = nextSection.offsetTop;
          window.scrollTo({
            top: nextSectionTop,
            behavior: 'smooth'
          });
        }
        break;
      }
    }
  };
  $scrollBtn.addEventListener('click', function () {
    scrollSections();
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (heroEvent);

/***/ }),

/***/ "./src/js/components/join-our-newsletter.js":
/*!**************************************************!*\
  !*** ./src/js/components/join-our-newsletter.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ScssComponents_join_our_newsletter_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ScssComponents/join-our-newsletter.scss */ "./src/scss/components/join-our-newsletter.scss");

var joinOurNewsletter = function joinOurNewsletter() {};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (joinOurNewsletter);

/***/ }),

/***/ "./src/js/components/latest-news-banner.js":
/*!*************************************************!*\
  !*** ./src/js/components/latest-news-banner.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ScssComponents_latest_news_banner_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ScssComponents/latest-news-banner.scss */ "./src/scss/components/latest-news-banner.scss");
/* harmony import */ var ScssComponents_news_banner_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ScssComponents/news-banner.scss */ "./src/scss/components/news-banner.scss");


var latestNewsBanner = function latestNewsBanner() {};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (latestNewsBanner);

/***/ }),

/***/ "./src/js/pages/events-contact-exp.js":
/*!********************************************!*\
  !*** ./src/js/pages/events-contact-exp.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_contact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/contact */ "./src/js/components/contact.js");
/* harmony import */ var _components_event_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/event-list */ "./src/js/components/event-list.js");
/* harmony import */ var _components_hero_event__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/hero-event */ "./src/js/components/hero-event.js");
/* harmony import */ var _components_get_social__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/get-social */ "./src/js/components/get-social.js");
/* harmony import */ var _components_latest_news_banner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/latest-news-banner */ "./src/js/components/latest-news-banner.js");
/* harmony import */ var _components_join_our_newsletter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/join-our-newsletter */ "./src/js/components/join-our-newsletter.js");






var eventsContactExp = function eventsContactExp() {
  (0,_components_hero_event__WEBPACK_IMPORTED_MODULE_2__["default"])();
  (0,_components_contact__WEBPACK_IMPORTED_MODULE_0__["default"])();
  (0,_components_event_list__WEBPACK_IMPORTED_MODULE_1__["default"])();
  (0,_components_latest_news_banner__WEBPACK_IMPORTED_MODULE_4__["default"])();
  (0,_components_get_social__WEBPACK_IMPORTED_MODULE_3__["default"])();
  (0,_components_join_our_newsletter__WEBPACK_IMPORTED_MODULE_5__["default"])();
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (eventsContactExp);

/***/ }),

/***/ "./node_modules/swiper/modules/effect-fade/effect-fade.min.css":
/*!*********************************************************************!*\
  !*** ./node_modules/swiper/modules/effect-fade/effect-fade.min.css ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/swiper/modules/pagination/pagination.min.css":
/*!*******************************************************************!*\
  !*** ./node_modules/swiper/modules/pagination/pagination.min.css ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/scss/components/contact.scss":
/*!******************************************!*\
  !*** ./src/scss/components/contact.scss ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/scss/components/event-card.scss":
/*!*********************************************!*\
  !*** ./src/scss/components/event-card.scss ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/scss/components/event-list.scss":
/*!*********************************************!*\
  !*** ./src/scss/components/event-list.scss ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/scss/components/get-social.scss":
/*!*********************************************!*\
  !*** ./src/scss/components/get-social.scss ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/scss/components/join-our-newsletter.scss":
/*!******************************************************!*\
  !*** ./src/scss/components/join-our-newsletter.scss ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/scss/components/latest-news-banner.scss":
/*!*****************************************************!*\
  !*** ./src/scss/components/latest-news-banner.scss ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/scss/components/news-banner.scss":
/*!**********************************************!*\
  !*** ./src/scss/components/news-banner.scss ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/scss/components/scrollbar.scss":
/*!********************************************!*\
  !*** ./src/scss/components/scrollbar.scss ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

}]);
//# sourceMappingURL=src_js_pages_events-contact-exp_js.js.map