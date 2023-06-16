"use strict";
(self["webpackChunkglivera_webpack_template"] = self["webpackChunkglivera_webpack_template"] || []).push([["src_js_pages_event-venues_js"],{

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

/***/ "./src/js/components/space-filter.js":
/*!*******************************************!*\
  !*** ./src/js/components/space-filter.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var nouislider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nouislider */ "./node_modules/nouislider/dist/nouislider.js");
/* harmony import */ var nouislider__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nouislider__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./src/js/utils/index.js");
/* harmony import */ var nouislider_dist_nouislider_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! nouislider/dist/nouislider.css */ "./node_modules/nouislider/dist/nouislider.css");
/* harmony import */ var ScssComponents_space_filter_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ScssComponents/space-filter.scss */ "./src/scss/components/space-filter.scss");




var spaceFilter = function spaceFilter(min, max, step) {
  var $valuesSlider = document.querySelector('.js-space-filter-slider');
  var $valuesTitle = document.querySelector('.js-space-filter-title');
  var $getResultsBlock = document.querySelector('.js-venue-result');
  var $getAttrCapacity = document.querySelectorAll('[data-capacity]');
  var $inputCapacity = document.querySelector('.js-space-filter-title');
  var filteredItem = $getAttrCapacity.length;
  function printResultVelue() {
    var $hiddenItem = document.querySelectorAll('.venue_spaces__item--hidden_mod');
    if (!(0,_utils__WEBPACK_IMPORTED_MODULE_1__.exist)($getResultsBlock)) return;
    $getResultsBlock.textContent = "".concat(filteredItem - $hiddenItem.length);
    if ($getResultsBlock.textContent === '0') {
      $getResultsBlock.parentElement.classList.add('venue_spaces__filter_result--show_mod');
    } else {
      $getResultsBlock.parentElement.classList.remove('venue_spaces__filter_result--show_mod');
    }
  }
  function filterItem() {
    if (!(0,_utils__WEBPACK_IMPORTED_MODULE_1__.exist)($getAttrCapacity) && !(0,_utils__WEBPACK_IMPORTED_MODULE_1__.exist)($inputCapacity)) return;
    var getValue = parseInt($inputCapacity.value.match(/\d+/g), 10);
    $getAttrCapacity.forEach(function ($item) {
      var itemCapacity = $item.dataset.capacity;
      var inputCapacity = parseInt(getValue, 10);
      if (itemCapacity <= inputCapacity) {
        $item.classList.add('venue_spaces__item--hidden_mod');
      } else {
        $item.classList.remove('venue_spaces__item--hidden_mod');
      }
    });
  }
  if ($valuesSlider && $valuesTitle) {
    nouislider__WEBPACK_IMPORTED_MODULE_0___default().create($valuesSlider, {
      start: [10],
      connect: 'lower',
      range: {
        min: min,
        max: max
      },
      step: step
    });
    $valuesSlider.noUiSlider.on('update', function (values) {
      var value = parseInt(values[0]);
      $valuesTitle.value = "".concat(value, " Guests");
      filterItem();
      printResultVelue();
    });
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (spaceFilter);

/***/ }),

/***/ "./src/js/components/venue-spaces.js":
/*!*******************************************!*\
  !*** ./src/js/components/venue-spaces.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.esm.js");
/* harmony import */ var utils_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! utils/index */ "./src/js/utils/index.js");
/* harmony import */ var utils_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! utils/constants */ "./src/js/utils/constants.js");
/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swiper/css */ "./node_modules/swiper/swiper.min.css");
/* harmony import */ var swiper_css_scrollbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swiper/css/scrollbar */ "./node_modules/swiper/modules/scrollbar/scrollbar.min.css");
/* harmony import */ var _space_filter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./space-filter */ "./src/js/components/space-filter.js");
/* harmony import */ var ScssComponents_venue_spaces_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ScssComponents/venue-spaces.scss */ "./src/scss/components/venue-spaces.scss");
/* harmony import */ var ScssComponents_event_card_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ScssComponents/event-card.scss */ "./src/scss/components/event-card.scss");








var venueSpaces = function venueSpaces() {
  var sectionSelector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '.js-venue-spaces-section';
  var sliderSelector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '.js-venue-spaces-slider';
  var scrollbar = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '.swiper-scrollbar';
  var $sections = document.querySelectorAll(sectionSelector);
  if (!$sections) return;
  $sections.forEach(function ($section) {
    if ($section.classList.contains('venue_spaces--slider_mod')) {
      var $slider = $section.querySelector(sliderSelector);
      if (!$slider) return;
      var $slides = $slider.querySelectorAll('.swiper-slide');
      if (!$slides.length) return;
      var $scrollBar = $slider.querySelector(scrollbar);
      if (!$scrollBar) return;
      var slidesCounter = $slides.length <= 3;
      if (slidesCounter) {
        $scrollBar.classList.add('swiper-scrollbar--small_mod');
      } else {
        $scrollBar.classList.remove('swiper-scrollbar--small_mod');
      }
      var isMobile;
      var teamSwiper;
      var initSlider = function initSlider() {
        teamSwiper = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"]($slider, {
          modules: [swiper__WEBPACK_IMPORTED_MODULE_0__.Scrollbar],
          speed: 800,
          observer: true,
          observeParents: true,
          scrollbar: {
            el: "".concat(scrollbar),
            draggable: true
          },
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
          teamSwiper.destroy(true, true);
        }
      };
      (0,utils_index__WEBPACK_IMPORTED_MODULE_1__.onWindowResize)(toggleSlider);
    }
  });
  (0,_space_filter__WEBPACK_IMPORTED_MODULE_5__["default"])(10, 1000, 10);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (venueSpaces);

/***/ }),

/***/ "./src/js/pages/event-venues.js":
/*!**************************************!*\
  !*** ./src/js/pages/event-venues.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_hero_event__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/hero-event */ "./src/js/components/hero-event.js");
/* harmony import */ var _components_get_social__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/get-social */ "./src/js/components/get-social.js");
/* harmony import */ var _components_join_our_newsletter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/join-our-newsletter */ "./src/js/components/join-our-newsletter.js");
/* harmony import */ var _components_venue_spaces__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/venue-spaces */ "./src/js/components/venue-spaces.js");




var eventVenues = function eventVenues() {
  (0,_components_hero_event__WEBPACK_IMPORTED_MODULE_0__["default"])();
  (0,_components_get_social__WEBPACK_IMPORTED_MODULE_1__["default"])();
  (0,_components_venue_spaces__WEBPACK_IMPORTED_MODULE_3__["default"])();
  (0,_components_join_our_newsletter__WEBPACK_IMPORTED_MODULE_2__["default"])();
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (eventVenues);

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

/***/ "./src/scss/components/event-card.scss":
/*!*********************************************!*\
  !*** ./src/scss/components/event-card.scss ***!
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

/***/ "./src/scss/components/scrollbar.scss":
/*!********************************************!*\
  !*** ./src/scss/components/scrollbar.scss ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/scss/components/space-filter.scss":
/*!***********************************************!*\
  !*** ./src/scss/components/space-filter.scss ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/scss/components/venue-spaces.scss":
/*!***********************************************!*\
  !*** ./src/scss/components/venue-spaces.scss ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

}]);
//# sourceMappingURL=src_js_pages_event-venues_js.js.map