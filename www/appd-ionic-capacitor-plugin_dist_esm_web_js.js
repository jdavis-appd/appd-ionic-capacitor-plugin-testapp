"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["appd-ionic-capacitor-plugin_dist_esm_web_js"],{

/***/ 6299:
/*!******************************************************!*\
  !*** ../appd-ionic-capacitor-plugin/dist/esm/web.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ADEUMMobileCapacitorPluginWeb": () => (/* binding */ ADEUMMobileCapacitorPluginWeb)
/* harmony export */ });
/* harmony import */ var _Users_jeremyda_ionic_plugin_appd_ionic_capacitor_plugin_testapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @capacitor/core */ 3256);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! uuid */ 2110);



class ADEUMMobileCapacitorPluginWeb extends _capacitor_core__WEBPACK_IMPORTED_MODULE_1__.WebPlugin {
  constructor() {
    super();
  }

  echo(options) {
    return (0,_Users_jeremyda_ionic_plugin_appd_ionic_capacitor_plugin_testapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log('ECHO', options);
      return options;
    })();
  }

  startTimer(options) {
    return (0,_Users_jeremyda_ionic_plugin_appd_ionic_capacitor_plugin_testapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log('startTimer', options);
      return;
    })();
  }

  stopTimer(options) {
    return (0,_Users_jeremyda_ionic_plugin_appd_ionic_capacitor_plugin_testapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log('stopTimer', options);
      return;
    })();
  }

  reportMetricWithName(options) {
    return (0,_Users_jeremyda_ionic_plugin_appd_ionic_capacitor_plugin_testapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log('reportMetricWithName', options);
      return;
    })();
  }

  leaveBreadcrumb(options) {
    return (0,_Users_jeremyda_ionic_plugin_appd_ionic_capacitor_plugin_testapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log('leaveBreadcrumb', options);
      return;
    })();
  }

  setUserData(options) {
    return (0,_Users_jeremyda_ionic_plugin_appd_ionic_capacitor_plugin_testapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log('setUserData', options);
      return;
    })();
  }

  removeUserData(options) {
    return (0,_Users_jeremyda_ionic_plugin_appd_ionic_capacitor_plugin_testapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log('removeUserData', options);
      return;
    })();
  }

  beginCall(options) {
    return (0,_Users_jeremyda_ionic_plugin_appd_ionic_capacitor_plugin_testapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log('beginCall', options);
      return {
        call_tracker: (0,uuid__WEBPACK_IMPORTED_MODULE_2__["default"])()
      };
    })();
  }

  endCall(options) {
    return (0,_Users_jeremyda_ionic_plugin_appd_ionic_capacitor_plugin_testapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log('endCall', options);
      return;
    })();
  }

  beginHttpRequest(options) {
    return (0,_Users_jeremyda_ionic_plugin_appd_ionic_capacitor_plugin_testapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log('beginHttpRequest', options);
      return {
        http_tracker: (0,uuid__WEBPACK_IMPORTED_MODULE_2__["default"])()
      };
    })();
  }

  reportDone(options) {
    return (0,_Users_jeremyda_ionic_plugin_appd_ionic_capacitor_plugin_testapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log('reportDone', options);
      return;
    })();
  }

  withResponseCode(options) {
    return (0,_Users_jeremyda_ionic_plugin_appd_ionic_capacitor_plugin_testapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log('withResponseCode', options);
      return;
    })();
  }

  withResponseContentLength(options) {
    return (0,_Users_jeremyda_ionic_plugin_appd_ionic_capacitor_plugin_testapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log('withResponseContentLength', options);
      return;
    })();
  }

  withRequestContentLength(options) {
    return (0,_Users_jeremyda_ionic_plugin_appd_ionic_capacitor_plugin_testapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log('withRequestContentLength', options);
      return;
    })();
  }

  withResponseHeaderFields(options) {
    return (0,_Users_jeremyda_ionic_plugin_appd_ionic_capacitor_plugin_testapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log('withResponseHeaderFields', options);
      return;
    })();
  }

  withRequestHeaderFields(options) {
    return (0,_Users_jeremyda_ionic_plugin_appd_ionic_capacitor_plugin_testapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log('withRequestHeaderFields', options);
      return;
    })();
  }

  withInstrumentationSource(options) {
    return (0,_Users_jeremyda_ionic_plugin_appd_ionic_capacitor_plugin_testapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log('withInstrumentationSource', options);
      return;
    })();
  }

  withErrorMessage(options) {
    return (0,_Users_jeremyda_ionic_plugin_appd_ionic_capacitor_plugin_testapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log('withErrorMessage', options);
      return;
    })();
  }

  getCorrelationHeaders() {
    return (0,_Users_jeremyda_ionic_plugin_appd_ionic_capacitor_plugin_testapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log('getCorrelationHeaders');
      return {
        headers: new Map()
      };
    })();
  }

  startNextSession() {
    return (0,_Users_jeremyda_ionic_plugin_appd_ionic_capacitor_plugin_testapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log('startNextSession');
      return;
    })();
  }

  unblockScreenshots() {
    return (0,_Users_jeremyda_ionic_plugin_appd_ionic_capacitor_plugin_testapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log('unblockScreenshots');
      return;
    })();
  }

  blockScreenshots() {
    return (0,_Users_jeremyda_ionic_plugin_appd_ionic_capacitor_plugin_testapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log('blockScreenshots');
      return;
    })();
  }

  screenshotsBlocked() {
    return (0,_Users_jeremyda_ionic_plugin_appd_ionic_capacitor_plugin_testapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log('screenshotsBlocked');
      return {
        screenshots_blocked: false
      };
    })();
  }

  takeScreenshot() {
    return (0,_Users_jeremyda_ionic_plugin_appd_ionic_capacitor_plugin_testapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log('takeScreenshot');
      return;
    })();
  }

  startSessionFrame(options) {
    return (0,_Users_jeremyda_ionic_plugin_appd_ionic_capacitor_plugin_testapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log('should be running');
      console.log('startSessionFrame', options);
      return {
        session_frame: (0,uuid__WEBPACK_IMPORTED_MODULE_2__["default"])()
      };
    })();
  }

  endSessionFrame(options) {
    return (0,_Users_jeremyda_ionic_plugin_appd_ionic_capacitor_plugin_testapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log('endSessionFrame', options);
      return;
    })();
  }

  updateSessionFrameName(options) {
    return (0,_Users_jeremyda_ionic_plugin_appd_ionic_capacitor_plugin_testapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log('updateSessionFrameName', options);
      return {
        session_frame: options.session_frame
      };
    })();
  }

  getVersion() {
    return (0,_Users_jeremyda_ionic_plugin_appd_ionic_capacitor_plugin_testapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log('getVersion: 1.1.1');
      return {
        version: '1.1.1'
      };
    })();
  }

  clear() {
    return (0,_Users_jeremyda_ionic_plugin_appd_ionic_capacitor_plugin_testapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log('clear');
      return;
    })();
  }

}

/***/ }),

/***/ 9527:
/*!**********************************************************************************!*\
  !*** ../appd-ionic-capacitor-plugin/node_modules/uuid/dist/esm-browser/regex.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i);

/***/ }),

/***/ 3040:
/*!********************************************************************************!*\
  !*** ../appd-ionic-capacitor-plugin/node_modules/uuid/dist/esm-browser/rng.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ rng)
/* harmony export */ });
// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
var getRandomValues;
var rnds8 = new Uint8Array(16);
function rng() {
  // lazy load so that environments that need to polyfill have a chance to do so
  if (!getRandomValues) {
    // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation. Also,
    // find the complete implementation of crypto (msCrypto) on IE11.
    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto !== 'undefined' && typeof msCrypto.getRandomValues === 'function' && msCrypto.getRandomValues.bind(msCrypto);

    if (!getRandomValues) {
      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
    }
  }

  return getRandomValues(rnds8);
}

/***/ }),

/***/ 2789:
/*!**************************************************************************************!*\
  !*** ../appd-ionic-capacitor-plugin/node_modules/uuid/dist/esm-browser/stringify.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.js */ 5034);

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */

var byteToHex = [];

for (var i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).substr(1));
}

function stringify(arr) {
  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
  var uuid = (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase(); // Consistency check for valid UUID.  If this throws, it's likely due to one
  // of the following:
  // - One or more input array values don't map to a hex octet (leading to
  // "undefined" in the uuid)
  // - Invalid input values for the RFC `version` or `variant` fields

  if (!(0,_validate_js__WEBPACK_IMPORTED_MODULE_0__["default"])(uuid)) {
    throw TypeError('Stringified UUID is invalid');
  }

  return uuid;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stringify);

/***/ }),

/***/ 2110:
/*!*******************************************************************************!*\
  !*** ../appd-ionic-capacitor-plugin/node_modules/uuid/dist/esm-browser/v4.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rng.js */ 3040);
/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stringify.js */ 2789);



function v4(options, buf, offset) {
  options = options || {};
  var rnds = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_0__["default"])(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    offset = offset || 0;

    for (var i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }

    return buf;
  }

  return (0,_stringify_js__WEBPACK_IMPORTED_MODULE_1__["default"])(rnds);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (v4);

/***/ }),

/***/ 5034:
/*!*************************************************************************************!*\
  !*** ../appd-ionic-capacitor-plugin/node_modules/uuid/dist/esm-browser/validate.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _regex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./regex.js */ 9527);


function validate(uuid) {
  return typeof uuid === 'string' && _regex_js__WEBPACK_IMPORTED_MODULE_0__["default"].test(uuid);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validate);

/***/ })

}]);
//# sourceMappingURL=appd-ionic-capacitor-plugin_dist_esm_web_js.js.map