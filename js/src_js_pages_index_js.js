"use strict";
(self["webpackChunkglivera_webpack_template"] = self["webpackChunkglivera_webpack_template"] || []).push([["src_js_pages_index_js"],{

/***/ "./src/js/components/event-type.js":
/*!*****************************************!*\
  !*** ./src/js/components/event-type.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ScssComponents_event_type_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ScssComponents/event-type.scss */ "./src/scss/components/event-type.scss");

var eventType = function eventType() {};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (eventType);

/***/ }),

/***/ "./src/js/components/full-screen.js":
/*!******************************************!*\
  !*** ./src/js/components/full-screen.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _fancyapps_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fancyapps/ui */ "./node_modules/@fancyapps/ui/dist/index.esm.js");
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! gsap/ScrollTrigger */ "./node_modules/gsap/ScrollTrigger.js");
/* harmony import */ var _fancyapps_ui_dist_fancybox_fancybox_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fancyapps/ui/dist/fancybox/fancybox.css */ "./node_modules/@fancyapps/ui/dist/fancybox/fancybox.css");
/* harmony import */ var ScssComponents_full_screen_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ScssComponents/full-screen.scss */ "./src/scss/components/full-screen.scss");





var viewVideosOnScroll = function viewVideosOnScroll() {
  _fancyapps_ui__WEBPACK_IMPORTED_MODULE_0__.Fancybox.bind('[data-fancybox]', {
    hideScrollbar: true
  });
  gsap__WEBPACK_IMPORTED_MODULE_3__["default"].registerPlugin(gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_4__["default"]);
  var $videos = document.querySelectorAll('.js-view-on-scroll');
  if ($videos.length) {
    $videos.forEach(function (video) {
      gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_4__["default"].create({
        // markers: true,
        trigger: video,
        onEnter: function onEnter() {
          return video.play();
        },
        onEnterBack: function onEnterBack() {
          return video.play();
        },
        onLeave: function onLeave() {
          return video.pause();
        },
        onLeaveBack: function onLeaveBack() {
          return video.pause();
        }
      });
    });
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (viewVideosOnScroll);

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

/***/ "./src/js/components/latest-news.js":
/*!******************************************!*\
  !*** ./src/js/components/latest-news.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.esm.js");
/* harmony import */ var utils_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! utils/index */ "./src/js/utils/index.js");
/* harmony import */ var utils_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! utils/constants */ "./src/js/utils/constants.js");
/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swiper/css */ "./node_modules/swiper/swiper.min.css");
/* harmony import */ var ScssComponents_latest_news_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ScssComponents/latest-news.scss */ "./src/scss/components/latest-news.scss");
/* harmony import */ var ScssComponents_card_item_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ScssComponents/card-item.scss */ "./src/scss/components/card-item.scss");
/* harmony import */ var ScssComponents_news_banner_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ScssComponents/news-banner.scss */ "./src/scss/components/news-banner.scss");







var latestNews = function latestNews() {
  var sectionSelector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '.js-latest-news-section';
  var sliderSelector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '.js-latest-news-slider';
  var $sections = document.querySelectorAll(sectionSelector);
  if (!$sections.length) return;
  $sections.forEach(function ($section) {
    var $slider = $section.querySelector(sliderSelector);
    if (!$slider) return;
    var isMobile;
    var latestSwiper;
    var initSlider = function initSlider() {
      latestSwiper = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"]($slider, {
        speed: 800,
        observer: true,
        observeParents: true,
        breakpoints: {
          320: {
            slidesPerView: 1.15
          },
          480: {
            slidesPerView: 1.6
          },
          768: {
            slidesPerView: 2.2
          },
          1024: {
            slidesPerView: 3
          }
        }
      });
    };
    var toggleSlider = function toggleSlider() {
      isMobile = window.innerWidth < utils_constants__WEBPACK_IMPORTED_MODULE_2__.BREAKPOINTS.mediaPoint1;
      if (isMobile && !$slider.classList.contains('swiper-initialized')) {
        initSlider();
      } else if (!isMobile && $slider.classList.contains('swiper-initialized')) {
        latestSwiper.destroy(true, true);
      }
    };
    (0,utils_index__WEBPACK_IMPORTED_MODULE_1__.onWindowResize)(toggleSlider);
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (latestNews);

/***/ }),

/***/ "./src/js/components/planning.js":
/*!***************************************!*\
  !*** ./src/js/components/planning.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ScssComponents_planning_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ScssComponents/planning.scss */ "./src/scss/components/planning.scss");

var planning = function planning() {};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (planning);

/***/ }),

/***/ "./src/js/components/promo-banner.js":
/*!*******************************************!*\
  !*** ./src/js/components/promo-banner.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.esm.js");
/* harmony import */ var swiper_css_effect_fade__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper/css/effect-fade */ "./node_modules/swiper/modules/effect-fade/effect-fade.min.css");
/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper/css */ "./node_modules/swiper/swiper.min.css");
/* harmony import */ var swiper_css_pagination__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swiper/css/pagination */ "./node_modules/swiper/modules/pagination/pagination.min.css");
/* harmony import */ var ScssComponents_promo_banner_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ScssComponents/promo-banner.scss */ "./src/scss/components/promo-banner.scss");





var promoBanner = function promoBanner() {
  var sectionSelector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '.js-banner-section';
  var sliderSelector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '.js-banner-slider';
  var pagination = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '.swiper-pagination';
  var sections = document.querySelectorAll(sectionSelector);
  if (!sections) return;
  sections.forEach(function (section) {
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
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (promoBanner);

/***/ }),

/***/ "./src/js/pages/index.js":
/*!*******************************!*\
  !*** ./src/js/pages/index.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_latest_news__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/latest-news */ "./src/js/components/latest-news.js");
/* harmony import */ var _components_get_social__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/get-social */ "./src/js/components/get-social.js");
/* harmony import */ var _components_promo_banner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/promo-banner */ "./src/js/components/promo-banner.js");
/* harmony import */ var _components_join_our_newsletter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/join-our-newsletter */ "./src/js/components/join-our-newsletter.js");
/* harmony import */ var _components_planning__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/planning */ "./src/js/components/planning.js");
/* harmony import */ var _components_event_type__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/event-type */ "./src/js/components/event-type.js");
/* harmony import */ var _components_full_screen__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/full-screen */ "./src/js/components/full-screen.js");







var index = function index() {
  (0,_components_latest_news__WEBPACK_IMPORTED_MODULE_0__["default"])();
  (0,_components_planning__WEBPACK_IMPORTED_MODULE_4__["default"])();
  (0,_components_get_social__WEBPACK_IMPORTED_MODULE_1__["default"])();
  (0,_components_promo_banner__WEBPACK_IMPORTED_MODULE_2__["default"])();
  (0,_components_join_our_newsletter__WEBPACK_IMPORTED_MODULE_3__["default"])();
  (0,_components_event_type__WEBPACK_IMPORTED_MODULE_5__["default"])();
  (0,_components_full_screen__WEBPACK_IMPORTED_MODULE_6__["default"])();
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (index);

/***/ }),

/***/ "./src/scss/components/card-item.scss":
/*!********************************************!*\
  !*** ./src/scss/components/card-item.scss ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/scss/components/event-type.scss":
/*!*********************************************!*\
  !*** ./src/scss/components/event-type.scss ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/scss/components/full-screen.scss":
/*!**********************************************!*\
  !*** ./src/scss/components/full-screen.scss ***!
  \**********************************************/
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

/***/ "./src/scss/components/latest-news.scss":
/*!**********************************************!*\
  !*** ./src/scss/components/latest-news.scss ***!
  \**********************************************/
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

/***/ "./src/scss/components/planning.scss":
/*!*******************************************!*\
  !*** ./src/scss/components/planning.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/scss/components/promo-banner.scss":
/*!***********************************************!*\
  !*** ./src/scss/components/promo-banner.scss ***!
  \***********************************************/
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
//# sourceMappingURL=src_js_pages_index_js.js.map