"use strict";
(self["webpackChunkglivera_webpack_template"] = self["webpackChunkglivera_webpack_template"] || []).push([["src_js_pages_venues-child_js"],{

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

/***/ "./src/js/components/init-popup.js":
/*!*****************************************!*\
  !*** ./src/js/components/init-popup.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/index */ "./src/js/utils/index.js");
/* harmony import */ var ScssComponents_universal_popup_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ScssComponents/universal/popup.scss */ "./src/scss/components/universal/popup.scss");
/* harmony import */ var ScssComponents_popup_download_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ScssComponents/popup-download.scss */ "./src/scss/components/popup-download.scss");



var initPopup = function initPopup(btnSelector, popupSelector) {
  var closeSelector = '.js-popup-close';
  var popupActiveState = 'popup--open_state';
  var bodyPopupOpenState = 'body--popup_open';
  var $btns = document.querySelectorAll(btnSelector);
  var $popup = document.querySelector(popupSelector);
  var $closeBtns = document.querySelectorAll(closeSelector);
  if (!(0,_utils_index__WEBPACK_IMPORTED_MODULE_0__.exist)([$btns, $popup])) return null;
  var closePopup = function closePopup() {
    $popup.classList.remove(popupActiveState);
    document.body.classList.remove(bodyPopupOpenState);
  };
  $btns.forEach(function ($btn) {
    $btn.addEventListener('click', function (e) {
      e.preventDefault();
      $popup.classList.add(popupActiveState);
      document.body.classList.add(bodyPopupOpenState);
    });
  });
  $popup.addEventListener('click', function (e) {
    if (e.target === $popup) {
      closePopup();
    }
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      closePopup();
    }
  });
  if (!(0,_utils_index__WEBPACK_IMPORTED_MODULE_0__.exist)($closeBtns)) return null;
  $closeBtns.forEach(function ($item) {
    $item.addEventListener('click', function () {
      return closePopup();
    });
  });
  return null;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initPopup);

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

/***/ "./src/js/components/testimonial-block.js":
/*!************************************************!*\
  !*** ./src/js/components/testimonial-block.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ScssComponents_testimonial_block_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ScssComponents/testimonial-block.scss */ "./src/scss/components/testimonial-block.scss");
/* harmony import */ var _get_social_scrollbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./get-social-scrollbar */ "./src/js/components/get-social-scrollbar.js");


var testimonialBlock = function testimonialBlock() {
  (0,_get_social_scrollbar__WEBPACK_IMPORTED_MODULE_1__["default"])('.js-testimonial-block-section', '.js-get-testimonial-block-slider', '.swiper-scrollbar');
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (testimonialBlock);

/***/ }),

/***/ "./src/js/components/text-block.js":
/*!*****************************************!*\
  !*** ./src/js/components/text-block.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ScssComponents_text_block_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ScssComponents/text-block.scss */ "./src/scss/components/text-block.scss");

var textBlock = function textBlock() {};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (textBlock);

/***/ }),

/***/ "./src/js/components/venue-direction.js":
/*!**********************************************!*\
  !*** ./src/js/components/venue-direction.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./src/js/utils/index.js");
/* harmony import */ var ScssComponents_venue_direction_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ScssComponents/venue-direction.scss */ "./src/scss/components/venue-direction.scss");


var CLASS_NAMES = {
  section: '.js-venue-direction-section',
  dropdown: '.js-venue-direction-dropdown',
  // trigger: '.js-dropdown-trigger',
  select: '.js-venue-direction-select',
  tab: '.js-venue-direction-tab'
  // dropdownSublink: '.js-dropdown-sublink',
};

var DEFAULT_CLASSES = {
  // dropdownOpen: 'venue_direction__dropdown--open_state',
  sectionWithActiveTab: 'venue_direction--active_tab_mod',
  tabContentActive: 'venue_direction__dropdown--tab_content_active'
};
var venueDirection = function venueDirection() {
  var $sections = document.querySelectorAll(CLASS_NAMES.section);
  if (!$sections.length) return;
  $sections.forEach(function ($item) {
    var $select = $item.querySelector(CLASS_NAMES.select);
    var $dropdown = $item.querySelector(CLASS_NAMES.dropdown);
    if ($item.classList.contains(DEFAULT_CLASSES.sectionWithActiveTab)) {
      $select.value = 'tab-1';
    }
    $select.addEventListener('change', function () {
      var $tabContents = $item.querySelectorAll(CLASS_NAMES.tab);
      var blockActiveState = DEFAULT_CLASSES.tabContentActive;
      $tabContents.forEach(function ($tab) {
        var $selectedOption = $select.value;
        $dropdown.classList.add(DEFAULT_CLASSES.tabContentActive);
        if ($tab.id === $selectedOption) {
          $tab.classList.add(blockActiveState);
        } else {
          $tab.classList.remove(blockActiveState);
        }
      });
    });
  });

  // $sections.forEach(($section) => {
  // const $dropdown = $section.querySelector(CLASS_NAMES.dropdown);
  // const $trigger = $section.querySelector(CLASS_NAMES.trigger);
  // const $dropdownSublink = $dropdown.querySelectorAll(CLASS_NAMES.dropdownSublink);

  //	--------------------- Dropdown

  // const setTabindex = (item, value) => {
  // 	item.forEach(($link) => {
  // 		$link.setAttribute('tabindex', `${value}`);
  // 	});
  // };

  // const closeDropdown = (e) => {
  // 	if (e.target !== $trigger) {
  // 		if ($dropdown.classList.contains(DEFAULT_CLASSES.dropdownOpen)) {
  // 			const $dropdownSublink = $dropdown.querySelectorAll(CLASS_NAMES.dropdownSublink);
  // 			$dropdown.classList.remove(DEFAULT_CLASSES.dropdownOpen);
  // 			setTabindex($dropdownSublink, -1);
  // 		}
  // 	}
  // };

  // const toggleDropdown = (e) => {
  // 	e.preventDefault();
  // 	const $dropdown = e.target.closest(CLASS_NAMES.dropdown);

  // 	if ($dropdown.classList.contains(DEFAULT_CLASSES.dropdownOpen)) {
  // 		$dropdown.classList.remove(DEFAULT_CLASSES.dropdownOpen);
  // 		setTabindex($dropdownSublink, -1);
  // 	} else {
  // 		$dropdown.classList.add(DEFAULT_CLASSES.dropdownOpen);
  // 		setTabindex($dropdownSublink, 0);
  // 	}
  // };
  // $trigger.addEventListener('click', toggleDropdown);
  // $dropdownSublink.forEach((item) => {
  // 	item.addEventListener('click', toggleDropdown);
  // });
  // document.addEventListener('click', closeDropdown);
  // const options = $section.querySelectorAll('option');
  // console.log(options);

  //	--------------------- Tabs

  // const tabs = (link, block) => {
  // 	const $linkSelector = $section.querySelectorAll('option');
  // 	const $blockSelector = $section.querySelectorAll(`.${block}`);
  // 	const linkActiveState = `${link}--active_state`;
  // 	const blockActiveState = `${block}--active_state`;

  // 	$linkSelector.forEach((item) => {
  // 		const toggleTabs = (e) => {
  // 			const currentTab = e.target.getAttribute('value');
  // 			const $curenntContent = $section.querySelector(`.${block}[id="${currentTab}"]`);
  // 			const $triggerDropdownTextHolder = $trigger.querySelector('span');
  // 			const tabText = e.target.innerText;

  // 			$blockSelector.forEach((blockEl) => {
  // 				const activeContent = blockEl;
  // 				activeContent.style.maxHeight = 0;
  // 				blockEl.classList.remove(blockActiveState);
  // 				blockEl.setAttribute('aria-hidden', 'true');
  // 			});
  // 			$linkSelector.forEach((linkEl) => {
  // 				linkEl.classList.remove(linkActiveState);
  // 				linkEl.setAttribute('aria-expanded', 'false');
  // 			});

  // 			$curenntContent.classList.add(blockActiveState);
  // 			$curenntContent.style.maxHeight = $curenntContent.scrollHeight?.toString().concat('px');
  // 			$curenntContent.setAttribute('aria-hidden', 'false');
  // 			e.target.classList.add(linkActiveState);
  // 			e.target.setAttribute('aria-expanded', 'true');
  // 			$triggerDropdownTextHolder.innerText = tabText;
  // 			$dropdown.classList.add(DEFAULT_CLASSES.tabContentActive);
  // 		};
  // 		item.addEventListener('click', toggleTabs);
  // 	});
  // 	onWindowResize(() => {
  // 		$blockSelector.forEach(($block) => {
  // 			if ($block.classList.contains(blockActiveState)) {
  // 				const $currentTab = $block;
  // 				$currentTab.style.maxHeight = $block.scrollHeight?.toString().concat('px');
  // 			}
  // 		});
  // 	});
  // };
  // tabs('venue_direction__list_link', 'venue_direction__wrap');
  // });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (venueDirection);

/***/ }),

/***/ "./src/js/pages/venues-child.js":
/*!**************************************!*\
  !*** ./src/js/pages/venues-child.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_content_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/content-module */ "./src/js/components/content-module.js");
/* harmony import */ var _components_join_our_newsletter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/join-our-newsletter */ "./src/js/components/join-our-newsletter.js");
/* harmony import */ var _components_page_nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/page-nav */ "./src/js/components/page-nav.js");
/* harmony import */ var _components_latest_news_banner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/latest-news-banner */ "./src/js/components/latest-news-banner.js");
/* harmony import */ var _components_promo_banner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/promo-banner */ "./src/js/components/promo-banner.js");
/* harmony import */ var _components_gallery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/gallery */ "./src/js/components/gallery.js");
/* harmony import */ var _components_banner_promo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/banner-promo */ "./src/js/components/banner-promo.js");
/* harmony import */ var _components_text_block__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/text-block */ "./src/js/components/text-block.js");
/* harmony import */ var _components_related_artciels__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/related-artciels */ "./src/js/components/related-artciels.js");
/* harmony import */ var _components_testimonial_block__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/testimonial-block */ "./src/js/components/testimonial-block.js");
/* harmony import */ var _components_get_social__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/get-social */ "./src/js/components/get-social.js");
/* harmony import */ var _components_full_screen__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/full-screen */ "./src/js/components/full-screen.js");
/* harmony import */ var _components_init_popup__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/init-popup */ "./src/js/components/init-popup.js");
/* harmony import */ var _components_venue_direction__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/venue-direction */ "./src/js/components/venue-direction.js");














var eventChild = function eventChild() {
  (0,_components_content_module__WEBPACK_IMPORTED_MODULE_0__["default"])();
  (0,_components_join_our_newsletter__WEBPACK_IMPORTED_MODULE_1__["default"])();
  (0,_components_page_nav__WEBPACK_IMPORTED_MODULE_2__["default"])();
  (0,_components_latest_news_banner__WEBPACK_IMPORTED_MODULE_3__["default"])();
  (0,_components_promo_banner__WEBPACK_IMPORTED_MODULE_4__["default"])();
  (0,_components_gallery__WEBPACK_IMPORTED_MODULE_5__["default"])();
  (0,_components_full_screen__WEBPACK_IMPORTED_MODULE_11__["default"])();
  (0,_components_banner_promo__WEBPACK_IMPORTED_MODULE_6__["default"])();
  (0,_components_text_block__WEBPACK_IMPORTED_MODULE_7__["default"])();
  (0,_components_related_artciels__WEBPACK_IMPORTED_MODULE_8__["default"])();
  (0,_components_testimonial_block__WEBPACK_IMPORTED_MODULE_9__["default"])();
  (0,_components_get_social__WEBPACK_IMPORTED_MODULE_10__["default"])();
  (0,_components_init_popup__WEBPACK_IMPORTED_MODULE_12__["default"])('.js-popup-download-btn', '.js-popup-download');
  (0,_components_venue_direction__WEBPACK_IMPORTED_MODULE_13__["default"])();
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (eventChild);

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

/***/ "./src/scss/components/popup-download.scss":
/*!*************************************************!*\
  !*** ./src/scss/components/popup-download.scss ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/scss/components/testimonial-block.scss":
/*!****************************************************!*\
  !*** ./src/scss/components/testimonial-block.scss ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/scss/components/text-block.scss":
/*!*********************************************!*\
  !*** ./src/scss/components/text-block.scss ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/scss/components/universal/popup.scss":
/*!**************************************************!*\
  !*** ./src/scss/components/universal/popup.scss ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/scss/components/venue-direction.scss":
/*!**************************************************!*\
  !*** ./src/scss/components/venue-direction.scss ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

}]);
//# sourceMappingURL=src_js_pages_venues-child_js.js.map