"use strict";
(self["webpackChunkglivera_webpack_template"] = self["webpackChunkglivera_webpack_template"] || []).push([["src_js_components_banner-promo_js-src_js_components_content-module_js-src_js_components_full--1cc3f3"],{

/***/ "./src/js/components/banner-promo.js":
/*!*******************************************!*\
  !*** ./src/js/components/banner-promo.js ***!
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
/* harmony import */ var ScssComponents_banner_promo_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ScssComponents/banner-promo.scss */ "./src/scss/components/banner-promo.scss");





var bannerPromo = function bannerPromo() {
  var sectionSelector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '.js-banner-promo-section';
  var sliderSelector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '.js-banner-promo-slider';
  var pagination = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '.swiper-pagination';
  var $sections = document.querySelectorAll(sectionSelector);
  if (!$sections) return;
  $sections.forEach(function (section) {
    var $slider = section.querySelector(sliderSelector);
    if (!$slider) return;
    var bannerPromoSwiper = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"]($slider, {
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (bannerPromo);

/***/ }),

/***/ "./src/js/components/buildSwiper.js":
/*!******************************************!*\
  !*** ./src/js/components/buildSwiper.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "buildSwiper": () => (/* binding */ buildSwiper),
/* harmony export */   "removeSwiper": () => (/* binding */ removeSwiper)
/* harmony export */ });
var buildSwiper = function buildSwiper(sliderNode) {
  if (!sliderNode) return;
  var $slider = sliderNode;
  var $slides = $slider.children;
  if (!($slides !== null && $slides !== void 0 && $slides.length)) return;
  $slider.classList.add('swiper');
  Array.from($slides).forEach(function ($slide) {
    return $slide.classList.add('swiper-slide');
  });
  var htmlStructure = "<div class=\"swiper-wrapper\">".concat($slider.innerHTML, "</div>");
  $slider.innerHTML = htmlStructure;
};
var removeSwiper = function removeSwiper(sliderNode) {
  if (!sliderNode) return;
  var $slider = sliderNode;
  var $wrapper = $slider.querySelector('.swiper-wrapper');
  var $slides = $wrapper.children;
  if (!($slides !== null && $slides !== void 0 && $slides.length)) return;
  $slider.classList.remove('swiper');
  Array.from($slides).forEach(function ($slide) {
    $slide.classList.remove('swiper-slide');
  });
  $slider.innerHTML = $wrapper.innerHTML;
};

/***/ }),

/***/ "./src/js/components/content-module.js":
/*!*********************************************!*\
  !*** ./src/js/components/content-module.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ScssComponents_content_module_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ScssComponents/content-module.scss */ "./src/scss/components/content-module.scss");

var contentModule = function contentModule() {};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contentModule);

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

/***/ "./src/js/components/gallery.js":
/*!**************************************!*\
  !*** ./src/js/components/gallery.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var gsap_Draggable__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! gsap/Draggable */ "./node_modules/gsap/Draggable.js");
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.esm.js");
/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper/css */ "./node_modules/swiper/swiper.min.css");
/* harmony import */ var swiper_css_scrollbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper/css/scrollbar */ "./node_modules/swiper/modules/scrollbar/scrollbar.min.css");
/* harmony import */ var ScssComponents_scrollbar_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ScssComponents/scrollbar.scss */ "./src/scss/components/scrollbar.scss");
/* harmony import */ var _fancyapps_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fancyapps/ui */ "./node_modules/@fancyapps/ui/dist/index.esm.js");
/* harmony import */ var _fancyapps_ui_dist_fancybox_fancybox_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fancyapps/ui/dist/fancybox/fancybox.css */ "./node_modules/@fancyapps/ui/dist/fancybox/fancybox.css");
/* harmony import */ var ScssComponents_gallery_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ScssComponents/gallery.scss */ "./src/scss/components/gallery.scss");
/* harmony import */ var utils_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! utils/constants */ "./src/js/utils/constants.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils */ "./src/js/utils/index.js");
/* harmony import */ var _buildSwiper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./buildSwiper */ "./src/js/components/buildSwiper.js");


// import InertiaPlugin from 'gsap/InertiaPlugin';











var gallery = function gallery() {
  _fancyapps_ui__WEBPACK_IMPORTED_MODULE_4__.Fancybox.bind('[data-fancybox]', {});
  gsap__WEBPACK_IMPORTED_MODULE_10__["default"].registerPlugin(gsap_Draggable__WEBPACK_IMPORTED_MODULE_11__["default"]);
  var classNames = {
    slider: '.js-slider-gallery-wrapper',
    wrapper: '.js-slider-gallery',
    scrollbar: '.js-slider-gallery-scrollbar',
    scrollbarDesk: '.js-slider-gallery-scrollbar-desk'
  };
  var $sliderWrappers = document.querySelectorAll(classNames.wrapper);
  var $scrollBarDesk = document.querySelector(classNames.scrollbarDesk);
  var draggable;
  var widthWrapper;
  var widthScrolledBlock;
  var percent;
  if (!(0,_utils__WEBPACK_IMPORTED_MODULE_8__.exist)($sliderWrappers)) return;
  $sliderWrappers.forEach(function ($wrapper) {
    var $slider = $wrapper.querySelector(classNames.slider);
    if (!$slider) return;
    var isMobile;
    var latestSwiper;
    var $scrollbar = $wrapper.querySelector(classNames.scrollbar);
    var initSlider = function initSlider() {
      (0,_buildSwiper__WEBPACK_IMPORTED_MODULE_9__.buildSwiper)($slider);
      latestSwiper = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"]($slider, {
        modules: [swiper__WEBPACK_IMPORTED_MODULE_0__.Scrollbar],
        speed: 800,
        scrollbar: {
          el: $scrollbar,
          draggable: true
        },
        breakpoints: {
          320: {
            slidesPerView: 1.55
          },
          768: {
            slidesPerView: 3
          }
        }
      });
    };
    var updateInfo = function updateInfo() {
      widthWrapper = Math.floor(gsap__WEBPACK_IMPORTED_MODULE_10__["default"].getProperty('.gallery__list_drag', 'width') || 0);
      widthScrolledBlock = Math.floor(gsap__WEBPACK_IMPORTED_MODULE_10__["default"].getProperty('.gallery__list', 'width') || 0) - widthWrapper;
      percent = 0;
    };
    var checkOverflow = function checkOverflow() {
      if (widthScrolledBlock > 0) {
        // eslint-disable-next-line
        if ($scrollBarDesk) $scrollBarDesk.parentElement.style.display = 'block';
        return true;
      } else {
        if ($scrollBarDesk) $scrollBarDesk.parentElement.style.display = 'none';
        return false;
      }
    };
    var initDragSlider = function initDragSlider() {
      checkOverflow();
      updateInfo();
      draggable = gsap_Draggable__WEBPACK_IMPORTED_MODULE_11__["default"].create($slider, {
        zIndexBoost: false,
        type: 'x',
        edgeResistance: 1,
        bounds: {
          minX: 0,
          maxX: -widthScrolledBlock
        },
        onDrag: function onDrag() {
          percent = Math.abs(Math.round(gsap__WEBPACK_IMPORTED_MODULE_10__["default"].getProperty($slider, 'x'))) / widthScrolledBlock * 100;
          // eslint-disable-next-line
          $scrollBarDesk.style.transform = "translateX(".concat(percent, "%)");
        }
      });
      if (!checkOverflow()) draggable.disable();
    };
    var toggleSlider = function toggleSlider() {
      isMobile = window.innerWidth < utils_constants__WEBPACK_IMPORTED_MODULE_7__.BREAKPOINTS.mediaPoint1;
      if (isMobile && !$slider.classList.contains('swiper-initialized')) {
        initSlider();
      } else if (!isMobile && $slider.classList.contains('swiper-initialized')) {
        latestSwiper.destroy(true, true);
        (0,_buildSwiper__WEBPACK_IMPORTED_MODULE_9__.removeSwiper)($slider);
      }
      if (draggable) draggable[0].kill();
      initDragSlider();
    };
    (0,_utils__WEBPACK_IMPORTED_MODULE_8__.onWindowResize)(toggleSlider);
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (gallery);

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

/***/ "./src/js/components/page-nav.js":
/*!***************************************!*\
  !*** ./src/js/components/page-nav.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ScssComponents_page_nav_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ScssComponents/page-nav.scss */ "./src/scss/components/page-nav.scss");

var pageNav = function pageNav() {
  var pageNavLinks = document.querySelectorAll('.js-nav-link');
  if (!pageNavLinks.length) return;
  pageNavLinks.forEach(function (link) {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      var hrefTo = e.target.getAttribute('href');
      window.scroll({
        behavior: 'smooth',
        left: 0,
        top: document.querySelector(hrefTo).offsetTop
      });
    });
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pageNav);

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

/***/ "./src/js/components/related-artciels-slider.js":
/*!******************************************************!*\
  !*** ./src/js/components/related-artciels-slider.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.esm.js");
/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper/css */ "./node_modules/swiper/swiper.min.css");
/* harmony import */ var _buildSwiper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./buildSwiper */ "./src/js/components/buildSwiper.js");





var relatedArtcielsSlider = function relatedArtcielsSlider(_ref) {
  var rootSelector = _ref.rootSelector,
    breakpoint = _ref.breakpoint;
  var sliderWrapper = document.querySelectorAll(rootSelector);
  var slider = document.querySelectorAll('.js-mobile-slider');
  var sliderArr = [];
  var isInit = false;
  var init = function init() {
    if (!isInit) {
      slider.forEach(function (item) {
        (0,_buildSwiper__WEBPACK_IMPORTED_MODULE_2__.buildSwiper)(item);
        var sliderEl = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"](item, {
          modules: [swiper__WEBPACK_IMPORTED_MODULE_0__.Pagination],
          slidesPerView: 'auto',
          on: {
            init: function init() {
              isInit = true;
            }
          }
        });
        sliderArr.push(sliderEl);
      });
    }
  };
  var destroy = function destroy() {
    if (isInit) {
      slider.forEach(function (item) {
        (0,_buildSwiper__WEBPACK_IMPORTED_MODULE_2__.removeSwiper)(item);
        sliderArr.forEach(function (item) {
          item.destroy();
        });
        isInit = false;
      });
    }
  };
  var matchMedia = gsap__WEBPACK_IMPORTED_MODULE_3__["default"].matchMedia();
  matchMedia.add(["(min-width: ".concat(breakpoint, "px)")], function () {
    destroy();
  });
  matchMedia.add(["(max-width: ".concat(breakpoint - 1, "px)")], function () {
    init();
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (relatedArtcielsSlider);

/***/ }),

/***/ "./src/js/components/related-artciels.js":
/*!***********************************************!*\
  !*** ./src/js/components/related-artciels.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ScssComponents_related_artciels_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ScssComponents/related-artciels.scss */ "./src/scss/components/related-artciels.scss");
/* harmony import */ var _related_artciels_slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./related-artciels-slider */ "./src/js/components/related-artciels-slider.js");


var relatedArtciels = function relatedArtciels() {
  (0,_related_artciels_slider__WEBPACK_IMPORTED_MODULE_1__["default"])({
    rootSelector: '.slider',
    breakpoint: 1024
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (relatedArtciels);

/***/ }),

/***/ "./src/scss/components/banner-promo.scss":
/*!***********************************************!*\
  !*** ./src/scss/components/banner-promo.scss ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/scss/components/content-module.scss":
/*!*************************************************!*\
  !*** ./src/scss/components/content-module.scss ***!
  \*************************************************/
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

/***/ "./src/scss/components/gallery.scss":
/*!******************************************!*\
  !*** ./src/scss/components/gallery.scss ***!
  \******************************************/
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

/***/ "./src/scss/components/page-nav.scss":
/*!*******************************************!*\
  !*** ./src/scss/components/page-nav.scss ***!
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

/***/ "./src/scss/components/related-artciels.scss":
/*!***************************************************!*\
  !*** ./src/scss/components/related-artciels.scss ***!
  \***************************************************/
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
//# sourceMappingURL=src_js_components_banner-promo_js-src_js_components_content-module_js-src_js_components_full--1cc3f3.js.map