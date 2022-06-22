(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["common/vendor"],{

/***/ 1:
/*!************************************************************!*\
  !*** ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {Object.defineProperty(exports, "__esModule", { value: true });exports.createApp = createApp;exports.createComponent = createComponent;exports.createPage = createPage;exports.createPlugin = createPlugin;exports.createSubpackageApp = createSubpackageApp;exports.default = void 0;var _uniI18n = __webpack_require__(/*! @dcloudio/uni-i18n */ 3);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 4));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _slicedToArray(arr, i) {return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();}function _nonIterableRest() {throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _iterableToArrayLimit(arr, i) {if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;var _arr = [];var _n = true;var _d = false;var _e = undefined;try {for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {_arr.push(_s.value);if (i && _arr.length === i) break;}} catch (err) {_d = true;_e = err;} finally {try {if (!_n && _i["return"] != null) _i["return"]();} finally {if (_d) throw _e;}}return _arr;}function _arrayWithHoles(arr) {if (Array.isArray(arr)) return arr;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}function _toConsumableArray(arr) {return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();}function _nonIterableSpread() {throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === "string") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === "Object" && o.constructor) n = o.constructor.name;if (n === "Map" || n === "Set") return Array.from(o);if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _iterableToArray(iter) {if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);}function _arrayWithoutHoles(arr) {if (Array.isArray(arr)) return _arrayLikeToArray(arr);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) {arr2[i] = arr[i];}return arr2;}

var realAtob;

var b64 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
var b64re = /^(?:[A-Za-z\d+/]{4})*?(?:[A-Za-z\d+/]{2}(?:==)?|[A-Za-z\d+/]{3}=?)?$/;

if (typeof atob !== 'function') {
  realAtob = function realAtob(str) {
    str = String(str).replace(/[\t\n\f\r ]+/g, '');
    if (!b64re.test(str)) {throw new Error("Failed to execute 'atob' on 'Window': The string to be decoded is not correctly encoded.");}

    // Adding the padding if missing, for semplicity
    str += '=='.slice(2 - (str.length & 3));
    var bitmap;var result = '';var r1;var r2;var i = 0;
    for (; i < str.length;) {
      bitmap = b64.indexOf(str.charAt(i++)) << 18 | b64.indexOf(str.charAt(i++)) << 12 |
      (r1 = b64.indexOf(str.charAt(i++))) << 6 | (r2 = b64.indexOf(str.charAt(i++)));

      result += r1 === 64 ? String.fromCharCode(bitmap >> 16 & 255) :
      r2 === 64 ? String.fromCharCode(bitmap >> 16 & 255, bitmap >> 8 & 255) :
      String.fromCharCode(bitmap >> 16 & 255, bitmap >> 8 & 255, bitmap & 255);
    }
    return result;
  };
} else {
  // 注意atob只能在全局对象上调用，例如：`const Base64 = {atob};Base64.atob('xxxx')`是错误的用法
  realAtob = atob;
}

function b64DecodeUnicode(str) {
  return decodeURIComponent(realAtob(str).split('').map(function (c) {
    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));
}

function getCurrentUserInfo() {
  var token = wx.getStorageSync('uni_id_token') || '';
  var tokenArr = token.split('.');
  if (!token || tokenArr.length !== 3) {
    return {
      uid: null,
      role: [],
      permission: [],
      tokenExpired: 0 };

  }
  var userInfo;
  try {
    userInfo = JSON.parse(b64DecodeUnicode(tokenArr[1]));
  } catch (error) {
    throw new Error('获取当前用户信息出错，详细错误信息为：' + error.message);
  }
  userInfo.tokenExpired = userInfo.exp * 1000;
  delete userInfo.exp;
  delete userInfo.iat;
  return userInfo;
}

function uniIdMixin(Vue) {
  Vue.prototype.uniIDHasRole = function (roleId) {var _getCurrentUserInfo =


    getCurrentUserInfo(),role = _getCurrentUserInfo.role;
    return role.indexOf(roleId) > -1;
  };
  Vue.prototype.uniIDHasPermission = function (permissionId) {var _getCurrentUserInfo2 =


    getCurrentUserInfo(),permission = _getCurrentUserInfo2.permission;
    return this.uniIDHasRole('admin') || permission.indexOf(permissionId) > -1;
  };
  Vue.prototype.uniIDTokenValid = function () {var _getCurrentUserInfo3 =


    getCurrentUserInfo(),tokenExpired = _getCurrentUserInfo3.tokenExpired;
    return tokenExpired > Date.now();
  };
}

var _toString = Object.prototype.toString;
var hasOwnProperty = Object.prototype.hasOwnProperty;

function isFn(fn) {
  return typeof fn === 'function';
}

function isStr(str) {
  return typeof str === 'string';
}

function isPlainObject(obj) {
  return _toString.call(obj) === '[object Object]';
}

function hasOwn(obj, key) {
  return hasOwnProperty.call(obj, key);
}

function noop() {}

/**
                    * Create a cached version of a pure function.
                    */
function cached(fn) {
  var cache = Object.create(null);
  return function cachedFn(str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
}

/**
   * Camelize a hyphen-delimited string.
   */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) {return c ? c.toUpperCase() : '';});
});

function sortObject(obj) {
  var sortObj = {};
  if (isPlainObject(obj)) {
    Object.keys(obj).sort().forEach(function (key) {
      sortObj[key] = obj[key];
    });
  }
  return !Object.keys(sortObj) ? obj : sortObj;
}

var HOOKS = [
'invoke',
'success',
'fail',
'complete',
'returnValue'];


var globalInterceptors = {};
var scopedInterceptors = {};

function mergeHook(parentVal, childVal) {
  var res = childVal ?
  parentVal ?
  parentVal.concat(childVal) :
  Array.isArray(childVal) ?
  childVal : [childVal] :
  parentVal;
  return res ?
  dedupeHooks(res) :
  res;
}

function dedupeHooks(hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res;
}

function removeHook(hooks, hook) {
  var index = hooks.indexOf(hook);
  if (index !== -1) {
    hooks.splice(index, 1);
  }
}

function mergeInterceptorHook(interceptor, option) {
  Object.keys(option).forEach(function (hook) {
    if (HOOKS.indexOf(hook) !== -1 && isFn(option[hook])) {
      interceptor[hook] = mergeHook(interceptor[hook], option[hook]);
    }
  });
}

function removeInterceptorHook(interceptor, option) {
  if (!interceptor || !option) {
    return;
  }
  Object.keys(option).forEach(function (hook) {
    if (HOOKS.indexOf(hook) !== -1 && isFn(option[hook])) {
      removeHook(interceptor[hook], option[hook]);
    }
  });
}

function addInterceptor(method, option) {
  if (typeof method === 'string' && isPlainObject(option)) {
    mergeInterceptorHook(scopedInterceptors[method] || (scopedInterceptors[method] = {}), option);
  } else if (isPlainObject(method)) {
    mergeInterceptorHook(globalInterceptors, method);
  }
}

function removeInterceptor(method, option) {
  if (typeof method === 'string') {
    if (isPlainObject(option)) {
      removeInterceptorHook(scopedInterceptors[method], option);
    } else {
      delete scopedInterceptors[method];
    }
  } else if (isPlainObject(method)) {
    removeInterceptorHook(globalInterceptors, method);
  }
}

function wrapperHook(hook) {
  return function (data) {
    return hook(data) || data;
  };
}

function isPromise(obj) {
  return !!obj && (typeof obj === 'object' || typeof obj === 'function') && typeof obj.then === 'function';
}

function queue(hooks, data) {
  var promise = false;
  for (var i = 0; i < hooks.length; i++) {
    var hook = hooks[i];
    if (promise) {
      promise = Promise.resolve(wrapperHook(hook));
    } else {
      var res = hook(data);
      if (isPromise(res)) {
        promise = Promise.resolve(res);
      }
      if (res === false) {
        return {
          then: function then() {} };

      }
    }
  }
  return promise || {
    then: function then(callback) {
      return callback(data);
    } };

}

function wrapperOptions(interceptor) {var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  ['success', 'fail', 'complete'].forEach(function (name) {
    if (Array.isArray(interceptor[name])) {
      var oldCallback = options[name];
      options[name] = function callbackInterceptor(res) {
        queue(interceptor[name], res).then(function (res) {
          /* eslint-disable no-mixed-operators */
          return isFn(oldCallback) && oldCallback(res) || res;
        });
      };
    }
  });
  return options;
}

function wrapperReturnValue(method, returnValue) {
  var returnValueHooks = [];
  if (Array.isArray(globalInterceptors.returnValue)) {
    returnValueHooks.push.apply(returnValueHooks, _toConsumableArray(globalInterceptors.returnValue));
  }
  var interceptor = scopedInterceptors[method];
  if (interceptor && Array.isArray(interceptor.returnValue)) {
    returnValueHooks.push.apply(returnValueHooks, _toConsumableArray(interceptor.returnValue));
  }
  returnValueHooks.forEach(function (hook) {
    returnValue = hook(returnValue) || returnValue;
  });
  return returnValue;
}

function getApiInterceptorHooks(method) {
  var interceptor = Object.create(null);
  Object.keys(globalInterceptors).forEach(function (hook) {
    if (hook !== 'returnValue') {
      interceptor[hook] = globalInterceptors[hook].slice();
    }
  });
  var scopedInterceptor = scopedInterceptors[method];
  if (scopedInterceptor) {
    Object.keys(scopedInterceptor).forEach(function (hook) {
      if (hook !== 'returnValue') {
        interceptor[hook] = (interceptor[hook] || []).concat(scopedInterceptor[hook]);
      }
    });
  }
  return interceptor;
}

function invokeApi(method, api, options) {for (var _len = arguments.length, params = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {params[_key - 3] = arguments[_key];}
  var interceptor = getApiInterceptorHooks(method);
  if (interceptor && Object.keys(interceptor).length) {
    if (Array.isArray(interceptor.invoke)) {
      var res = queue(interceptor.invoke, options);
      return res.then(function (options) {
        return api.apply(void 0, [wrapperOptions(interceptor, options)].concat(params));
      });
    } else {
      return api.apply(void 0, [wrapperOptions(interceptor, options)].concat(params));
    }
  }
  return api.apply(void 0, [options].concat(params));
}

var promiseInterceptor = {
  returnValue: function returnValue(res) {
    if (!isPromise(res)) {
      return res;
    }
    return new Promise(function (resolve, reject) {
      res.then(function (res) {
        if (res[0]) {
          reject(res[0]);
        } else {
          resolve(res[1]);
        }
      });
    });
  } };


var SYNC_API_RE =
/^\$|Window$|WindowStyle$|sendHostEvent|sendNativeEvent|restoreGlobal|requireGlobal|getCurrentSubNVue|getMenuButtonBoundingClientRect|^report|interceptors|Interceptor$|getSubNVueById|requireNativePlugin|upx2px|hideKeyboard|canIUse|^create|Sync$|Manager$|base64ToArrayBuffer|arrayBufferToBase64|getLocale|setLocale|invokePushCallback|getWindowInfo|getDeviceInfo|getAppBaseInfo/;

var CONTEXT_API_RE = /^create|Manager$/;

// Context例外情况
var CONTEXT_API_RE_EXC = ['createBLEConnection'];

// 同步例外情况
var ASYNC_API = ['createBLEConnection'];

var CALLBACK_API_RE = /^on|^off/;

function isContextApi(name) {
  return CONTEXT_API_RE.test(name) && CONTEXT_API_RE_EXC.indexOf(name) === -1;
}
function isSyncApi(name) {
  return SYNC_API_RE.test(name) && ASYNC_API.indexOf(name) === -1;
}

function isCallbackApi(name) {
  return CALLBACK_API_RE.test(name) && name !== 'onPush';
}

function handlePromise(promise) {
  return promise.then(function (data) {
    return [null, data];
  }).
  catch(function (err) {return [err];});
}

function shouldPromise(name) {
  if (
  isContextApi(name) ||
  isSyncApi(name) ||
  isCallbackApi(name))
  {
    return false;
  }
  return true;
}

/* eslint-disable no-extend-native */
if (!Promise.prototype.finally) {
  Promise.prototype.finally = function (callback) {
    var promise = this.constructor;
    return this.then(
    function (value) {return promise.resolve(callback()).then(function () {return value;});},
    function (reason) {return promise.resolve(callback()).then(function () {
        throw reason;
      });});

  };
}

function promisify(name, api) {
  if (!shouldPromise(name)) {
    return api;
  }
  return function promiseApi() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};for (var _len2 = arguments.length, params = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {params[_key2 - 1] = arguments[_key2];}
    if (isFn(options.success) || isFn(options.fail) || isFn(options.complete)) {
      return wrapperReturnValue(name, invokeApi.apply(void 0, [name, api, options].concat(params)));
    }
    return wrapperReturnValue(name, handlePromise(new Promise(function (resolve, reject) {
      invokeApi.apply(void 0, [name, api, Object.assign({}, options, {
        success: resolve,
        fail: reject })].concat(
      params));
    })));
  };
}

var EPS = 1e-4;
var BASE_DEVICE_WIDTH = 750;
var isIOS = false;
var deviceWidth = 0;
var deviceDPR = 0;

function checkDeviceWidth() {var _wx$getSystemInfoSync =




  wx.getSystemInfoSync(),platform = _wx$getSystemInfoSync.platform,pixelRatio = _wx$getSystemInfoSync.pixelRatio,windowWidth = _wx$getSystemInfoSync.windowWidth; // uni=>wx runtime 编译目标是 uni 对象，内部不允许直接使用 uni

  deviceWidth = windowWidth;
  deviceDPR = pixelRatio;
  isIOS = platform === 'ios';
}

function upx2px(number, newDeviceWidth) {
  if (deviceWidth === 0) {
    checkDeviceWidth();
  }

  number = Number(number);
  if (number === 0) {
    return 0;
  }
  var result = number / BASE_DEVICE_WIDTH * (newDeviceWidth || deviceWidth);
  if (result < 0) {
    result = -result;
  }
  result = Math.floor(result + EPS);
  if (result === 0) {
    if (deviceDPR === 1 || !isIOS) {
      result = 1;
    } else {
      result = 0.5;
    }
  }
  return number < 0 ? -result : result;
}

var LOCALE_ZH_HANS = 'zh-Hans';
var LOCALE_ZH_HANT = 'zh-Hant';
var LOCALE_EN = 'en';
var LOCALE_FR = 'fr';
var LOCALE_ES = 'es';

var messages = {};

var locale;

{
  locale = normalizeLocale(wx.getSystemInfoSync().language) || LOCALE_EN;
}

function initI18nMessages() {
  if (!isEnableLocale()) {
    return;
  }
  var localeKeys = Object.keys(__uniConfig.locales);
  if (localeKeys.length) {
    localeKeys.forEach(function (locale) {
      var curMessages = messages[locale];
      var userMessages = __uniConfig.locales[locale];
      if (curMessages) {
        Object.assign(curMessages, userMessages);
      } else {
        messages[locale] = userMessages;
      }
    });
  }
}

initI18nMessages();

var i18n = (0, _uniI18n.initVueI18n)(
locale,
{});

var t = i18n.t;
var i18nMixin = i18n.mixin = {
  beforeCreate: function beforeCreate() {var _this = this;
    var unwatch = i18n.i18n.watchLocale(function () {
      _this.$forceUpdate();
    });
    this.$once('hook:beforeDestroy', function () {
      unwatch();
    });
  },
  methods: {
    $$t: function $$t(key, values) {
      return t(key, values);
    } } };


var setLocale = i18n.setLocale;
var getLocale = i18n.getLocale;

function initAppLocale(Vue, appVm, locale) {
  var state = Vue.observable({
    locale: locale || i18n.getLocale() });

  var localeWatchers = [];
  appVm.$watchLocale = function (fn) {
    localeWatchers.push(fn);
  };
  Object.defineProperty(appVm, '$locale', {
    get: function get() {
      return state.locale;
    },
    set: function set(v) {
      state.locale = v;
      localeWatchers.forEach(function (watch) {return watch(v);});
    } });

}

function isEnableLocale() {
  return typeof __uniConfig !== 'undefined' && __uniConfig.locales && !!Object.keys(__uniConfig.locales).length;
}

function include(str, parts) {
  return !!parts.find(function (part) {return str.indexOf(part) !== -1;});
}

function startsWith(str, parts) {
  return parts.find(function (part) {return str.indexOf(part) === 0;});
}

function normalizeLocale(locale, messages) {
  if (!locale) {
    return;
  }
  locale = locale.trim().replace(/_/g, '-');
  if (messages && messages[locale]) {
    return locale;
  }
  locale = locale.toLowerCase();
  if (locale === 'chinese') {
    // 支付宝
    return LOCALE_ZH_HANS;
  }
  if (locale.indexOf('zh') === 0) {
    if (locale.indexOf('-hans') > -1) {
      return LOCALE_ZH_HANS;
    }
    if (locale.indexOf('-hant') > -1) {
      return LOCALE_ZH_HANT;
    }
    if (include(locale, ['-tw', '-hk', '-mo', '-cht'])) {
      return LOCALE_ZH_HANT;
    }
    return LOCALE_ZH_HANS;
  }
  var lang = startsWith(locale, [LOCALE_EN, LOCALE_FR, LOCALE_ES]);
  if (lang) {
    return lang;
  }
}
// export function initI18n() {
//   const localeKeys = Object.keys(__uniConfig.locales || {})
//   if (localeKeys.length) {
//     localeKeys.forEach((locale) =>
//       i18n.add(locale, __uniConfig.locales[locale])
//     )
//   }
// }

function getLocale$1() {
  // 优先使用 $locale
  var app = getApp({
    allowDefault: true });

  if (app && app.$vm) {
    return app.$vm.$locale;
  }
  return normalizeLocale(wx.getSystemInfoSync().language) || LOCALE_EN;
}

function setLocale$1(locale) {
  var app = getApp();
  if (!app) {
    return false;
  }
  var oldLocale = app.$vm.$locale;
  if (oldLocale !== locale) {
    app.$vm.$locale = locale;
    onLocaleChangeCallbacks.forEach(function (fn) {return fn({
        locale: locale });});

    return true;
  }
  return false;
}

var onLocaleChangeCallbacks = [];
function onLocaleChange(fn) {
  if (onLocaleChangeCallbacks.indexOf(fn) === -1) {
    onLocaleChangeCallbacks.push(fn);
  }
}

if (typeof global !== 'undefined') {
  global.getLocale = getLocale$1;
}

var interceptors = {
  promiseInterceptor: promiseInterceptor };


var baseApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  upx2px: upx2px,
  getLocale: getLocale$1,
  setLocale: setLocale$1,
  onLocaleChange: onLocaleChange,
  addInterceptor: addInterceptor,
  removeInterceptor: removeInterceptor,
  interceptors: interceptors });


function findExistsPageIndex(url) {
  var pages = getCurrentPages();
  var len = pages.length;
  while (len--) {
    var page = pages[len];
    if (page.$page && page.$page.fullPath === url) {
      return len;
    }
  }
  return -1;
}

var redirectTo = {
  name: function name(fromArgs) {
    if (fromArgs.exists === 'back' && fromArgs.delta) {
      return 'navigateBack';
    }
    return 'redirectTo';
  },
  args: function args(fromArgs) {
    if (fromArgs.exists === 'back' && fromArgs.url) {
      var existsPageIndex = findExistsPageIndex(fromArgs.url);
      if (existsPageIndex !== -1) {
        var delta = getCurrentPages().length - 1 - existsPageIndex;
        if (delta > 0) {
          fromArgs.delta = delta;
        }
      }
    }
  } };


var previewImage = {
  args: function args(fromArgs) {
    var currentIndex = parseInt(fromArgs.current);
    if (isNaN(currentIndex)) {
      return;
    }
    var urls = fromArgs.urls;
    if (!Array.isArray(urls)) {
      return;
    }
    var len = urls.length;
    if (!len) {
      return;
    }
    if (currentIndex < 0) {
      currentIndex = 0;
    } else if (currentIndex >= len) {
      currentIndex = len - 1;
    }
    if (currentIndex > 0) {
      fromArgs.current = urls[currentIndex];
      fromArgs.urls = urls.filter(
      function (item, index) {return index < currentIndex ? item !== urls[currentIndex] : true;});

    } else {
      fromArgs.current = urls[0];
    }
    return {
      indicator: false,
      loop: false };

  } };


var UUID_KEY = '__DC_STAT_UUID';
var deviceId;
function useDeviceId(result) {
  deviceId = deviceId || wx.getStorageSync(UUID_KEY);
  if (!deviceId) {
    deviceId = Date.now() + '' + Math.floor(Math.random() * 1e7);
    wx.setStorage({
      key: UUID_KEY,
      data: deviceId });

  }
  result.deviceId = deviceId;
}

function addSafeAreaInsets(result) {
  if (result.safeArea) {
    var safeArea = result.safeArea;
    result.safeAreaInsets = {
      top: safeArea.top,
      left: safeArea.left,
      right: result.windowWidth - safeArea.right,
      bottom: result.screenHeight - safeArea.bottom };

  }
}

function populateParameters(result) {var _result$brand =





  result.brand,brand = _result$brand === void 0 ? '' : _result$brand,_result$model = result.model,model = _result$model === void 0 ? '' : _result$model,_result$system = result.system,system = _result$system === void 0 ? '' : _result$system,_result$language = result.language,language = _result$language === void 0 ? '' : _result$language,theme = result.theme,version = result.version,platform = result.platform,fontSizeSetting = result.fontSizeSetting,SDKVersion = result.SDKVersion,pixelRatio = result.pixelRatio,deviceOrientation = result.deviceOrientation;
  // const isQuickApp = "mp-weixin".indexOf('quickapp-webview') !== -1

  // osName osVersion
  var osName = '';
  var osVersion = '';
  {
    osName = system.split(' ')[0] || '';
    osVersion = system.split(' ')[1] || '';
  }
  var hostVersion = version;

  // deviceType
  var deviceType = getGetDeviceType(result, model);

  // deviceModel
  var deviceBrand = getDeviceBrand(brand);

  // hostName
  var _hostName = getHostName(result);

  // deviceOrientation
  var _deviceOrientation = deviceOrientation; // 仅 微信 百度 支持

  // devicePixelRatio
  var _devicePixelRatio = pixelRatio;

  // SDKVersion
  var _SDKVersion = SDKVersion;

  // hostLanguage
  var hostLanguage = language.replace(/_/g, '-');

  // wx.getAccountInfoSync

  var parameters = {
    appId: "__UNI__E06E380",
    appName: "宝芸邸",
    appVersion: "1.0.0",
    appVersionCode: "1",
    appLanguage: getAppLanguage(hostLanguage),
    uniCompileVersion: "3.4.15",
    uniRuntimeVersion: "3.4.15",
    uniPlatform: undefined || "mp-weixin",
    deviceBrand: deviceBrand,
    deviceModel: model,
    deviceType: deviceType,
    devicePixelRatio: _devicePixelRatio,
    deviceOrientation: _deviceOrientation,
    osName: osName.toLocaleLowerCase(),
    osVersion: osVersion,
    hostTheme: theme,
    hostVersion: hostVersion,
    hostLanguage: hostLanguage,
    hostName: _hostName,
    hostSDKVersion: _SDKVersion,
    hostFontSizeSetting: fontSizeSetting,
    windowTop: 0,
    windowBottom: 0,
    // TODO
    osLanguage: undefined,
    osTheme: undefined,
    ua: undefined,
    hostPackageName: undefined,
    browserName: undefined,
    browserVersion: undefined };


  Object.assign(result, parameters);
}

function getGetDeviceType(result, model) {
  var deviceType = result.deviceType || 'phone';
  {
    var deviceTypeMaps = {
      ipad: 'pad',
      windows: 'pc',
      mac: 'pc' };

    var deviceTypeMapsKeys = Object.keys(deviceTypeMaps);
    var _model = model.toLocaleLowerCase();
    for (var index = 0; index < deviceTypeMapsKeys.length; index++) {
      var _m = deviceTypeMapsKeys[index];
      if (_model.indexOf(_m) !== -1) {
        deviceType = deviceTypeMaps[_m];
        break;
      }
    }
  }
  return deviceType;
}

function getDeviceBrand(brand) {
  var deviceBrand = brand;
  if (deviceBrand) {
    deviceBrand = brand.toLocaleLowerCase();
  }
  return deviceBrand;
}

function getAppLanguage(defaultLanguage) {
  return getLocale$1 ?
  getLocale$1() :
  defaultLanguage;
}

function getHostName(result) {
  var _platform = 'WeChat';
  var _hostName = result.hostName || _platform; // mp-jd
  {
    if (result.environment) {
      _hostName = result.environment;
    } else if (result.host && result.host.env) {
      _hostName = result.host.env;
    }
  }

  return _hostName;
}

var getSystemInfo = {
  returnValue: function returnValue(result) {
    useDeviceId(result);
    addSafeAreaInsets(result);
    populateParameters(result);
  } };


var showActionSheet = {
  args: function args(fromArgs) {
    if (typeof fromArgs === 'object') {
      fromArgs.alertText = fromArgs.title;
    }
  } };


var getAppBaseInfo = {
  returnValue: function returnValue(result) {var _result =
    result,version = _result.version,language = _result.language,SDKVersion = _result.SDKVersion,theme = _result.theme;

    var _hostName = getHostName(result);

    var hostLanguage = language.replace('_', '-');

    result = sortObject(Object.assign(result, {
      appId: "__UNI__E06E380",
      appName: "宝芸邸",
      appVersion: "1.0.0",
      appVersionCode: "1",
      appLanguage: getAppLanguage(hostLanguage),
      hostVersion: version,
      hostLanguage: hostLanguage,
      hostName: _hostName,
      hostSDKVersion: SDKVersion,
      hostTheme: theme }));

  } };


var getDeviceInfo = {
  returnValue: function returnValue(result) {var _result2 =
    result,brand = _result2.brand,model = _result2.model;
    var deviceType = getGetDeviceType(result, model);
    var deviceBrand = getDeviceBrand(brand);
    useDeviceId(result);

    result = sortObject(Object.assign(result, {
      deviceType: deviceType,
      deviceBrand: deviceBrand,
      deviceModel: model }));

  } };


var getWindowInfo = {
  returnValue: function returnValue(result) {
    addSafeAreaInsets(result);

    result = sortObject(Object.assign(result, {
      windowTop: 0,
      windowBottom: 0 }));

  } };


// import navigateTo from 'uni-helpers/navigate-to'

var protocols = {
  redirectTo: redirectTo,
  // navigateTo,  // 由于在微信开发者工具的页面参数，会显示__id__参数，因此暂时关闭mp-weixin对于navigateTo的AOP
  previewImage: previewImage,
  getSystemInfo: getSystemInfo,
  getSystemInfoSync: getSystemInfo,
  showActionSheet: showActionSheet,
  getAppBaseInfo: getAppBaseInfo,
  getDeviceInfo: getDeviceInfo,
  getWindowInfo: getWindowInfo };

var todos = [
'vibrate',
'preloadPage',
'unPreloadPage',
'loadSubPackage'];

var canIUses = [];

var CALLBACKS = ['success', 'fail', 'cancel', 'complete'];

function processCallback(methodName, method, returnValue) {
  return function (res) {
    return method(processReturnValue(methodName, res, returnValue));
  };
}

function processArgs(methodName, fromArgs) {var argsOption = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};var returnValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};var keepFromArgs = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  if (isPlainObject(fromArgs)) {// 一般 api 的参数解析
    var toArgs = keepFromArgs === true ? fromArgs : {}; // returnValue 为 false 时，说明是格式化返回值，直接在返回值对象上修改赋值
    if (isFn(argsOption)) {
      argsOption = argsOption(fromArgs, toArgs) || {};
    }
    for (var key in fromArgs) {
      if (hasOwn(argsOption, key)) {
        var keyOption = argsOption[key];
        if (isFn(keyOption)) {
          keyOption = keyOption(fromArgs[key], fromArgs, toArgs);
        }
        if (!keyOption) {// 不支持的参数
          console.warn("The '".concat(methodName, "' method of platform '\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F' does not support option '").concat(key, "'"));
        } else if (isStr(keyOption)) {// 重写参数 key
          toArgs[keyOption] = fromArgs[key];
        } else if (isPlainObject(keyOption)) {// {name:newName,value:value}可重新指定参数 key:value
          toArgs[keyOption.name ? keyOption.name : key] = keyOption.value;
        }
      } else if (CALLBACKS.indexOf(key) !== -1) {
        if (isFn(fromArgs[key])) {
          toArgs[key] = processCallback(methodName, fromArgs[key], returnValue);
        }
      } else {
        if (!keepFromArgs) {
          toArgs[key] = fromArgs[key];
        }
      }
    }
    return toArgs;
  } else if (isFn(fromArgs)) {
    fromArgs = processCallback(methodName, fromArgs, returnValue);
  }
  return fromArgs;
}

function processReturnValue(methodName, res, returnValue) {var keepReturnValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  if (isFn(protocols.returnValue)) {// 处理通用 returnValue
    res = protocols.returnValue(methodName, res);
  }
  return processArgs(methodName, res, returnValue, {}, keepReturnValue);
}

function wrapper(methodName, method) {
  if (hasOwn(protocols, methodName)) {
    var protocol = protocols[methodName];
    if (!protocol) {// 暂不支持的 api
      return function () {
        console.error("Platform '\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F' does not support '".concat(methodName, "'."));
      };
    }
    return function (arg1, arg2) {// 目前 api 最多两个参数
      var options = protocol;
      if (isFn(protocol)) {
        options = protocol(arg1);
      }

      arg1 = processArgs(methodName, arg1, options.args, options.returnValue);

      var args = [arg1];
      if (typeof arg2 !== 'undefined') {
        args.push(arg2);
      }
      if (isFn(options.name)) {
        methodName = options.name(arg1);
      } else if (isStr(options.name)) {
        methodName = options.name;
      }
      var returnValue = wx[methodName].apply(wx, args);
      if (isSyncApi(methodName)) {// 同步 api
        return processReturnValue(methodName, returnValue, options.returnValue, isContextApi(methodName));
      }
      return returnValue;
    };
  }
  return method;
}

var todoApis = Object.create(null);

var TODOS = [
'onTabBarMidButtonTap',
'subscribePush',
'unsubscribePush',
'onPush',
'offPush',
'share'];


function createTodoApi(name) {
  return function todoApi(_ref)


  {var fail = _ref.fail,complete = _ref.complete;
    var res = {
      errMsg: "".concat(name, ":fail method '").concat(name, "' not supported") };

    isFn(fail) && fail(res);
    isFn(complete) && complete(res);
  };
}

TODOS.forEach(function (name) {
  todoApis[name] = createTodoApi(name);
});

var providers = {
  oauth: ['weixin'],
  share: ['weixin'],
  payment: ['wxpay'],
  push: ['weixin'] };


function getProvider(_ref2)




{var service = _ref2.service,success = _ref2.success,fail = _ref2.fail,complete = _ref2.complete;
  var res = false;
  if (providers[service]) {
    res = {
      errMsg: 'getProvider:ok',
      service: service,
      provider: providers[service] };

    isFn(success) && success(res);
  } else {
    res = {
      errMsg: 'getProvider:fail service not found' };

    isFn(fail) && fail(res);
  }
  isFn(complete) && complete(res);
}

var extraApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  getProvider: getProvider });


var getEmitter = function () {
  var Emitter;
  return function getUniEmitter() {
    if (!Emitter) {
      Emitter = new _vue.default();
    }
    return Emitter;
  };
}();

function apply(ctx, method, args) {
  return ctx[method].apply(ctx, args);
}

function $on() {
  return apply(getEmitter(), '$on', Array.prototype.slice.call(arguments));
}
function $off() {
  return apply(getEmitter(), '$off', Array.prototype.slice.call(arguments));
}
function $once() {
  return apply(getEmitter(), '$once', Array.prototype.slice.call(arguments));
}
function $emit() {
  return apply(getEmitter(), '$emit', Array.prototype.slice.call(arguments));
}

var eventApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  $on: $on,
  $off: $off,
  $once: $once,
  $emit: $emit });


/**
                    * 框架内 try-catch
                    */
/**
                        * 开发者 try-catch
                        */
function tryCatch(fn) {
  return function () {
    try {
      return fn.apply(fn, arguments);
    } catch (e) {
      // TODO
      console.error(e);
    }
  };
}

function getApiCallbacks(params) {
  var apiCallbacks = {};
  for (var name in params) {
    var param = params[name];
    if (isFn(param)) {
      apiCallbacks[name] = tryCatch(param);
      delete params[name];
    }
  }
  return apiCallbacks;
}

var cid;
var cidErrMsg;

function normalizePushMessage(message) {
  try {
    return JSON.parse(message);
  } catch (e) {}
  return message;
}

function invokePushCallback(
args)
{
  if (args.type === 'clientId') {
    cid = args.cid;
    cidErrMsg = args.errMsg;
    invokeGetPushCidCallbacks(cid, args.errMsg);
  } else if (args.type === 'pushMsg') {
    onPushMessageCallbacks.forEach(function (callback) {
      callback({
        type: 'receive',
        data: normalizePushMessage(args.message) });

    });
  } else if (args.type === 'click') {
    onPushMessageCallbacks.forEach(function (callback) {
      callback({
        type: 'click',
        data: normalizePushMessage(args.message) });

    });
  }
}

var getPushCidCallbacks = [];

function invokeGetPushCidCallbacks(cid, errMsg) {
  getPushCidCallbacks.forEach(function (callback) {
    callback(cid, errMsg);
  });
  getPushCidCallbacks.length = 0;
}

function getPushClientid(args) {
  if (!isPlainObject(args)) {
    args = {};
  }var _getApiCallbacks =




  getApiCallbacks(args),success = _getApiCallbacks.success,fail = _getApiCallbacks.fail,complete = _getApiCallbacks.complete;
  var hasSuccess = isFn(success);
  var hasFail = isFn(fail);
  var hasComplete = isFn(complete);
  getPushCidCallbacks.push(function (cid, errMsg) {
    var res;
    if (cid) {
      res = {
        errMsg: 'getPushClientid:ok',
        cid: cid };

      hasSuccess && success(res);
    } else {
      res = {
        errMsg: 'getPushClientid:fail' + (errMsg ? ' ' + errMsg : '') };

      hasFail && fail(res);
    }
    hasComplete && complete(res);
  });
  if (typeof cid !== 'undefined') {
    Promise.resolve().then(function () {return invokeGetPushCidCallbacks(cid, cidErrMsg);});
  }
}

var onPushMessageCallbacks = [];
// 不使用 defineOnApi 实现，是因为 defineOnApi 依赖 UniServiceJSBridge ，该对象目前在小程序上未提供，故简单实现
var onPushMessage = function onPushMessage(fn) {
  if (onPushMessageCallbacks.indexOf(fn) === -1) {
    onPushMessageCallbacks.push(fn);
  }
};

var offPushMessage = function offPushMessage(fn) {
  if (!fn) {
    onPushMessageCallbacks.length = 0;
  } else {
    var index = onPushMessageCallbacks.indexOf(fn);
    if (index > -1) {
      onPushMessageCallbacks.splice(index, 1);
    }
  }
};

var api = /*#__PURE__*/Object.freeze({
  __proto__: null,
  getPushClientid: getPushClientid,
  onPushMessage: onPushMessage,
  offPushMessage: offPushMessage,
  invokePushCallback: invokePushCallback });


var MPPage = Page;
var MPComponent = Component;

var customizeRE = /:/g;

var customize = cached(function (str) {
  return camelize(str.replace(customizeRE, '-'));
});

function initTriggerEvent(mpInstance) {
  var oldTriggerEvent = mpInstance.triggerEvent;
  var newTriggerEvent = function newTriggerEvent(event) {for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {args[_key3 - 1] = arguments[_key3];}
    return oldTriggerEvent.apply(mpInstance, [customize(event)].concat(args));
  };
  try {
    // 京东小程序 triggerEvent 为只读
    mpInstance.triggerEvent = newTriggerEvent;
  } catch (error) {
    mpInstance._triggerEvent = newTriggerEvent;
  }
}

function initHook(name, options, isComponent) {
  var oldHook = options[name];
  if (!oldHook) {
    options[name] = function () {
      initTriggerEvent(this);
    };
  } else {
    options[name] = function () {
      initTriggerEvent(this);for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {args[_key4] = arguments[_key4];}
      return oldHook.apply(this, args);
    };
  }
}
if (!MPPage.__$wrappered) {
  MPPage.__$wrappered = true;
  Page = function Page() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    initHook('onLoad', options);
    return MPPage(options);
  };
  Page.after = MPPage.after;

  Component = function Component() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    initHook('created', options);
    return MPComponent(options);
  };
}

var PAGE_EVENT_HOOKS = [
'onPullDownRefresh',
'onReachBottom',
'onAddToFavorites',
'onShareTimeline',
'onShareAppMessage',
'onPageScroll',
'onResize',
'onTabItemTap'];


function initMocks(vm, mocks) {
  var mpInstance = vm.$mp[vm.mpType];
  mocks.forEach(function (mock) {
    if (hasOwn(mpInstance, mock)) {
      vm[mock] = mpInstance[mock];
    }
  });
}

function hasHook(hook, vueOptions) {
  if (!vueOptions) {
    return true;
  }

  if (_vue.default.options && Array.isArray(_vue.default.options[hook])) {
    return true;
  }

  vueOptions = vueOptions.default || vueOptions;

  if (isFn(vueOptions)) {
    if (isFn(vueOptions.extendOptions[hook])) {
      return true;
    }
    if (vueOptions.super &&
    vueOptions.super.options &&
    Array.isArray(vueOptions.super.options[hook])) {
      return true;
    }
    return false;
  }

  if (isFn(vueOptions[hook])) {
    return true;
  }
  var mixins = vueOptions.mixins;
  if (Array.isArray(mixins)) {
    return !!mixins.find(function (mixin) {return hasHook(hook, mixin);});
  }
}

function initHooks(mpOptions, hooks, vueOptions) {
  hooks.forEach(function (hook) {
    if (hasHook(hook, vueOptions)) {
      mpOptions[hook] = function (args) {
        return this.$vm && this.$vm.__call_hook(hook, args);
      };
    }
  });
}

function initVueComponent(Vue, vueOptions) {
  vueOptions = vueOptions.default || vueOptions;
  var VueComponent;
  if (isFn(vueOptions)) {
    VueComponent = vueOptions;
  } else {
    VueComponent = Vue.extend(vueOptions);
  }
  vueOptions = VueComponent.options;
  return [VueComponent, vueOptions];
}

function initSlots(vm, vueSlots) {
  if (Array.isArray(vueSlots) && vueSlots.length) {
    var $slots = Object.create(null);
    vueSlots.forEach(function (slotName) {
      $slots[slotName] = true;
    });
    vm.$scopedSlots = vm.$slots = $slots;
  }
}

function initVueIds(vueIds, mpInstance) {
  vueIds = (vueIds || '').split(',');
  var len = vueIds.length;

  if (len === 1) {
    mpInstance._$vueId = vueIds[0];
  } else if (len === 2) {
    mpInstance._$vueId = vueIds[0];
    mpInstance._$vuePid = vueIds[1];
  }
}

function initData(vueOptions, context) {
  var data = vueOptions.data || {};
  var methods = vueOptions.methods || {};

  if (typeof data === 'function') {
    try {
      data = data.call(context); // 支持 Vue.prototype 上挂的数据
    } catch (e) {
      if (Object({"VUE_APP_NAME":"宝芸邸","VUE_APP_PLATFORM":"mp-weixin","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG) {
        console.warn('根据 Vue 的 data 函数初始化小程序 data 失败，请尽量确保 data 函数中不访问 vm 对象，否则可能影响首次数据渲染速度。', data);
      }
    }
  } else {
    try {
      // 对 data 格式化
      data = JSON.parse(JSON.stringify(data));
    } catch (e) {}
  }

  if (!isPlainObject(data)) {
    data = {};
  }

  Object.keys(methods).forEach(function (methodName) {
    if (context.__lifecycle_hooks__.indexOf(methodName) === -1 && !hasOwn(data, methodName)) {
      data[methodName] = methods[methodName];
    }
  });

  return data;
}

var PROP_TYPES = [String, Number, Boolean, Object, Array, null];

function createObserver(name) {
  return function observer(newVal, oldVal) {
    if (this.$vm) {
      this.$vm[name] = newVal; // 为了触发其他非 render watcher
    }
  };
}

function initBehaviors(vueOptions, initBehavior) {
  var vueBehaviors = vueOptions.behaviors;
  var vueExtends = vueOptions.extends;
  var vueMixins = vueOptions.mixins;

  var vueProps = vueOptions.props;

  if (!vueProps) {
    vueOptions.props = vueProps = [];
  }

  var behaviors = [];
  if (Array.isArray(vueBehaviors)) {
    vueBehaviors.forEach(function (behavior) {
      behaviors.push(behavior.replace('uni://', "wx".concat("://")));
      if (behavior === 'uni://form-field') {
        if (Array.isArray(vueProps)) {
          vueProps.push('name');
          vueProps.push('value');
        } else {
          vueProps.name = {
            type: String,
            default: '' };

          vueProps.value = {
            type: [String, Number, Boolean, Array, Object, Date],
            default: '' };

        }
      }
    });
  }
  if (isPlainObject(vueExtends) && vueExtends.props) {
    behaviors.push(
    initBehavior({
      properties: initProperties(vueExtends.props, true) }));


  }
  if (Array.isArray(vueMixins)) {
    vueMixins.forEach(function (vueMixin) {
      if (isPlainObject(vueMixin) && vueMixin.props) {
        behaviors.push(
        initBehavior({
          properties: initProperties(vueMixin.props, true) }));


      }
    });
  }
  return behaviors;
}

function parsePropType(key, type, defaultValue, file) {
  // [String]=>String
  if (Array.isArray(type) && type.length === 1) {
    return type[0];
  }
  return type;
}

function initProperties(props) {var isBehavior = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;var file = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  var properties = {};
  if (!isBehavior) {
    properties.vueId = {
      type: String,
      value: '' };

    // 用于字节跳动小程序模拟抽象节点
    properties.generic = {
      type: Object,
      value: null };

    // scopedSlotsCompiler auto
    properties.scopedSlotsCompiler = {
      type: String,
      value: '' };

    properties.vueSlots = { // 小程序不能直接定义 $slots 的 props，所以通过 vueSlots 转换到 $slots
      type: null,
      value: [],
      observer: function observer(newVal, oldVal) {
        var $slots = Object.create(null);
        newVal.forEach(function (slotName) {
          $slots[slotName] = true;
        });
        this.setData({
          $slots: $slots });

      } };

  }
  if (Array.isArray(props)) {// ['title']
    props.forEach(function (key) {
      properties[key] = {
        type: null,
        observer: createObserver(key) };

    });
  } else if (isPlainObject(props)) {// {title:{type:String,default:''},content:String}
    Object.keys(props).forEach(function (key) {
      var opts = props[key];
      if (isPlainObject(opts)) {// title:{type:String,default:''}
        var value = opts.default;
        if (isFn(value)) {
          value = value();
        }

        opts.type = parsePropType(key, opts.type);

        properties[key] = {
          type: PROP_TYPES.indexOf(opts.type) !== -1 ? opts.type : null,
          value: value,
          observer: createObserver(key) };

      } else {// content:String
        var type = parsePropType(key, opts);
        properties[key] = {
          type: PROP_TYPES.indexOf(type) !== -1 ? type : null,
          observer: createObserver(key) };

      }
    });
  }
  return properties;
}

function wrapper$1(event) {
  // TODO 又得兼容 mpvue 的 mp 对象
  try {
    event.mp = JSON.parse(JSON.stringify(event));
  } catch (e) {}

  event.stopPropagation = noop;
  event.preventDefault = noop;

  event.target = event.target || {};

  if (!hasOwn(event, 'detail')) {
    event.detail = {};
  }

  if (hasOwn(event, 'markerId')) {
    event.detail = typeof event.detail === 'object' ? event.detail : {};
    event.detail.markerId = event.markerId;
  }

  if (isPlainObject(event.detail)) {
    event.target = Object.assign({}, event.target, event.detail);
  }

  return event;
}

function getExtraValue(vm, dataPathsArray) {
  var context = vm;
  dataPathsArray.forEach(function (dataPathArray) {
    var dataPath = dataPathArray[0];
    var value = dataPathArray[2];
    if (dataPath || typeof value !== 'undefined') {// ['','',index,'disable']
      var propPath = dataPathArray[1];
      var valuePath = dataPathArray[3];

      var vFor;
      if (Number.isInteger(dataPath)) {
        vFor = dataPath;
      } else if (!dataPath) {
        vFor = context;
      } else if (typeof dataPath === 'string' && dataPath) {
        if (dataPath.indexOf('#s#') === 0) {
          vFor = dataPath.substr(3);
        } else {
          vFor = vm.__get_value(dataPath, context);
        }
      }

      if (Number.isInteger(vFor)) {
        context = value;
      } else if (!propPath) {
        context = vFor[value];
      } else {
        if (Array.isArray(vFor)) {
          context = vFor.find(function (vForItem) {
            return vm.__get_value(propPath, vForItem) === value;
          });
        } else if (isPlainObject(vFor)) {
          context = Object.keys(vFor).find(function (vForKey) {
            return vm.__get_value(propPath, vFor[vForKey]) === value;
          });
        } else {
          console.error('v-for 暂不支持循环数据：', vFor);
        }
      }

      if (valuePath) {
        context = vm.__get_value(valuePath, context);
      }
    }
  });
  return context;
}

function processEventExtra(vm, extra, event) {
  var extraObj = {};

  if (Array.isArray(extra) && extra.length) {
    /**
                                              *[
                                              *    ['data.items', 'data.id', item.data.id],
                                              *    ['metas', 'id', meta.id]
                                              *],
                                              *[
                                              *    ['data.items', 'data.id', item.data.id],
                                              *    ['metas', 'id', meta.id]
                                              *],
                                              *'test'
                                              */
    extra.forEach(function (dataPath, index) {
      if (typeof dataPath === 'string') {
        if (!dataPath) {// model,prop.sync
          extraObj['$' + index] = vm;
        } else {
          if (dataPath === '$event') {// $event
            extraObj['$' + index] = event;
          } else if (dataPath === 'arguments') {
            if (event.detail && event.detail.__args__) {
              extraObj['$' + index] = event.detail.__args__;
            } else {
              extraObj['$' + index] = [event];
            }
          } else if (dataPath.indexOf('$event.') === 0) {// $event.target.value
            extraObj['$' + index] = vm.__get_value(dataPath.replace('$event.', ''), event);
          } else {
            extraObj['$' + index] = vm.__get_value(dataPath);
          }
        }
      } else {
        extraObj['$' + index] = getExtraValue(vm, dataPath);
      }
    });
  }

  return extraObj;
}

function getObjByArray(arr) {
  var obj = {};
  for (var i = 1; i < arr.length; i++) {
    var element = arr[i];
    obj[element[0]] = element[1];
  }
  return obj;
}

function processEventArgs(vm, event) {var args = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];var extra = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];var isCustom = arguments.length > 4 ? arguments[4] : undefined;var methodName = arguments.length > 5 ? arguments[5] : undefined;
  var isCustomMPEvent = false; // wxcomponent 组件，传递原始 event 对象
  if (isCustom) {// 自定义事件
    isCustomMPEvent = event.currentTarget &&
    event.currentTarget.dataset &&
    event.currentTarget.dataset.comType === 'wx';
    if (!args.length) {// 无参数，直接传入 event 或 detail 数组
      if (isCustomMPEvent) {
        return [event];
      }
      return event.detail.__args__ || event.detail;
    }
  }

  var extraObj = processEventExtra(vm, extra, event);

  var ret = [];
  args.forEach(function (arg) {
    if (arg === '$event') {
      if (methodName === '__set_model' && !isCustom) {// input v-model value
        ret.push(event.target.value);
      } else {
        if (isCustom && !isCustomMPEvent) {
          ret.push(event.detail.__args__[0]);
        } else {// wxcomponent 组件或内置组件
          ret.push(event);
        }
      }
    } else {
      if (Array.isArray(arg) && arg[0] === 'o') {
        ret.push(getObjByArray(arg));
      } else if (typeof arg === 'string' && hasOwn(extraObj, arg)) {
        ret.push(extraObj[arg]);
      } else {
        ret.push(arg);
      }
    }
  });

  return ret;
}

var ONCE = '~';
var CUSTOM = '^';

function isMatchEventType(eventType, optType) {
  return eventType === optType ||

  optType === 'regionchange' && (

  eventType === 'begin' ||
  eventType === 'end');


}

function getContextVm(vm) {
  var $parent = vm.$parent;
  // 父组件是 scoped slots 或者其他自定义组件时继续查找
  while ($parent && $parent.$parent && ($parent.$options.generic || $parent.$parent.$options.generic || $parent.$scope._$vuePid)) {
    $parent = $parent.$parent;
  }
  return $parent && $parent.$parent;
}

function handleEvent(event) {var _this2 = this;
  event = wrapper$1(event);

  // [['tap',[['handle',[1,2,a]],['handle1',[1,2,a]]]]]
  var dataset = (event.currentTarget || event.target).dataset;
  if (!dataset) {
    return console.warn('事件信息不存在');
  }
  var eventOpts = dataset.eventOpts || dataset['event-opts']; // 支付宝 web-view 组件 dataset 非驼峰
  if (!eventOpts) {
    return console.warn('事件信息不存在');
  }

  // [['handle',[1,2,a]],['handle1',[1,2,a]]]
  var eventType = event.type;

  var ret = [];

  eventOpts.forEach(function (eventOpt) {
    var type = eventOpt[0];
    var eventsArray = eventOpt[1];

    var isCustom = type.charAt(0) === CUSTOM;
    type = isCustom ? type.slice(1) : type;
    var isOnce = type.charAt(0) === ONCE;
    type = isOnce ? type.slice(1) : type;

    if (eventsArray && isMatchEventType(eventType, type)) {
      eventsArray.forEach(function (eventArray) {
        var methodName = eventArray[0];
        if (methodName) {
          var handlerCtx = _this2.$vm;
          if (handlerCtx.$options.generic) {// mp-weixin,mp-toutiao 抽象节点模拟 scoped slots
            handlerCtx = getContextVm(handlerCtx) || handlerCtx;
          }
          if (methodName === '$emit') {
            handlerCtx.$emit.apply(handlerCtx,
            processEventArgs(
            _this2.$vm,
            event,
            eventArray[1],
            eventArray[2],
            isCustom,
            methodName));

            return;
          }
          var handler = handlerCtx[methodName];
          if (!isFn(handler)) {
            throw new Error(" _vm.".concat(methodName, " is not a function"));
          }
          if (isOnce) {
            if (handler.once) {
              return;
            }
            handler.once = true;
          }
          var params = processEventArgs(
          _this2.$vm,
          event,
          eventArray[1],
          eventArray[2],
          isCustom,
          methodName);

          params = Array.isArray(params) ? params : [];
          // 参数尾部增加原始事件对象用于复杂表达式内获取额外数据
          if (/=\s*\S+\.eventParams\s*\|\|\s*\S+\[['"]event-params['"]\]/.test(handler.toString())) {
            // eslint-disable-next-line no-sparse-arrays
            params = params.concat([,,,,,,,,,, event]);
          }
          ret.push(handler.apply(handlerCtx, params));
        }
      });
    }
  });

  if (
  eventType === 'input' &&
  ret.length === 1 &&
  typeof ret[0] !== 'undefined')
  {
    return ret[0];
  }
}

var eventChannels = {};

var eventChannelStack = [];

function getEventChannel(id) {
  if (id) {
    var eventChannel = eventChannels[id];
    delete eventChannels[id];
    return eventChannel;
  }
  return eventChannelStack.shift();
}

var hooks = [
'onShow',
'onHide',
'onError',
'onPageNotFound',
'onThemeChange',
'onUnhandledRejection'];


function initEventChannel() {
  _vue.default.prototype.getOpenerEventChannel = function () {
    // 微信小程序使用自身getOpenerEventChannel
    {
      return this.$scope.getOpenerEventChannel();
    }
  };
  var callHook = _vue.default.prototype.__call_hook;
  _vue.default.prototype.__call_hook = function (hook, args) {
    if (hook === 'onLoad' && args && args.__id__) {
      this.__eventChannel__ = getEventChannel(args.__id__);
      delete args.__id__;
    }
    return callHook.call(this, hook, args);
  };
}

function initScopedSlotsParams() {
  var center = {};
  var parents = {};

  _vue.default.prototype.$hasScopedSlotsParams = function (vueId) {
    var has = center[vueId];
    if (!has) {
      parents[vueId] = this;
      this.$on('hook:destroyed', function () {
        delete parents[vueId];
      });
    }
    return has;
  };

  _vue.default.prototype.$getScopedSlotsParams = function (vueId, name, key) {
    var data = center[vueId];
    if (data) {
      var object = data[name] || {};
      return key ? object[key] : object;
    } else {
      parents[vueId] = this;
      this.$on('hook:destroyed', function () {
        delete parents[vueId];
      });
    }
  };

  _vue.default.prototype.$setScopedSlotsParams = function (name, value) {
    var vueIds = this.$options.propsData.vueId;
    if (vueIds) {
      var vueId = vueIds.split(',')[0];
      var object = center[vueId] = center[vueId] || {};
      object[name] = value;
      if (parents[vueId]) {
        parents[vueId].$forceUpdate();
      }
    }
  };

  _vue.default.mixin({
    destroyed: function destroyed() {
      var propsData = this.$options.propsData;
      var vueId = propsData && propsData.vueId;
      if (vueId) {
        delete center[vueId];
        delete parents[vueId];
      }
    } });

}

function parseBaseApp(vm, _ref3)


{var mocks = _ref3.mocks,initRefs = _ref3.initRefs;
  initEventChannel();
  {
    initScopedSlotsParams();
  }
  if (vm.$options.store) {
    _vue.default.prototype.$store = vm.$options.store;
  }
  uniIdMixin(_vue.default);

  _vue.default.prototype.mpHost = "mp-weixin";

  _vue.default.mixin({
    beforeCreate: function beforeCreate() {
      if (!this.$options.mpType) {
        return;
      }

      this.mpType = this.$options.mpType;

      this.$mp = _defineProperty({
        data: {} },
      this.mpType, this.$options.mpInstance);


      this.$scope = this.$options.mpInstance;

      delete this.$options.mpType;
      delete this.$options.mpInstance;
      if (this.mpType === 'page' && typeof getApp === 'function') {// hack vue-i18n
        var app = getApp();
        if (app.$vm && app.$vm.$i18n) {
          this._i18n = app.$vm.$i18n;
        }
      }
      if (this.mpType !== 'app') {
        initRefs(this);
        initMocks(this, mocks);
      }
    } });


  var appOptions = {
    onLaunch: function onLaunch(args) {
      if (this.$vm) {// 已经初始化过了，主要是为了百度，百度 onShow 在 onLaunch 之前
        return;
      }
      {
        if (wx.canIUse && !wx.canIUse('nextTick')) {// 事实 上2.2.3 即可，简单使用 2.3.0 的 nextTick 判断
          console.error('当前微信基础库版本过低，请将 微信开发者工具-详情-项目设置-调试基础库版本 更换为`2.3.0`以上');
        }
      }

      this.$vm = vm;

      this.$vm.$mp = {
        app: this };


      this.$vm.$scope = this;
      // vm 上也挂载 globalData
      this.$vm.globalData = this.globalData;

      this.$vm._isMounted = true;
      this.$vm.__call_hook('mounted', args);

      this.$vm.__call_hook('onLaunch', args);
    } };


  // 兼容旧版本 globalData
  appOptions.globalData = vm.$options.globalData || {};
  // 将 methods 中的方法挂在 getApp() 中
  var methods = vm.$options.methods;
  if (methods) {
    Object.keys(methods).forEach(function (name) {
      appOptions[name] = methods[name];
    });
  }

  initAppLocale(_vue.default, vm, normalizeLocale(wx.getSystemInfoSync().language) || LOCALE_EN);

  initHooks(appOptions, hooks);

  return appOptions;
}

var mocks = ['__route__', '__wxExparserNodeId__', '__wxWebviewId__'];

function findVmByVueId(vm, vuePid) {
  var $children = vm.$children;
  // 优先查找直属(反向查找:https://github.com/dcloudio/uni-app/issues/1200)
  for (var i = $children.length - 1; i >= 0; i--) {
    var childVm = $children[i];
    if (childVm.$scope._$vueId === vuePid) {
      return childVm;
    }
  }
  // 反向递归查找
  var parentVm;
  for (var _i = $children.length - 1; _i >= 0; _i--) {
    parentVm = findVmByVueId($children[_i], vuePid);
    if (parentVm) {
      return parentVm;
    }
  }
}

function initBehavior(options) {
  return Behavior(options);
}

function isPage() {
  return !!this.route;
}

function initRelation(detail) {
  this.triggerEvent('__l', detail);
}

function selectAllComponents(mpInstance, selector, $refs) {
  var components = mpInstance.selectAllComponents(selector);
  components.forEach(function (component) {
    var ref = component.dataset.ref;
    $refs[ref] = component.$vm || component;
    {
      if (component.dataset.vueGeneric === 'scoped') {
        component.selectAllComponents('.scoped-ref').forEach(function (scopedComponent) {
          selectAllComponents(scopedComponent, selector, $refs);
        });
      }
    }
  });
}

function initRefs(vm) {
  var mpInstance = vm.$scope;
  Object.defineProperty(vm, '$refs', {
    get: function get() {
      var $refs = {};
      selectAllComponents(mpInstance, '.vue-ref', $refs);
      // TODO 暂不考虑 for 中的 scoped
      var forComponents = mpInstance.selectAllComponents('.vue-ref-in-for');
      forComponents.forEach(function (component) {
        var ref = component.dataset.ref;
        if (!$refs[ref]) {
          $refs[ref] = [];
        }
        $refs[ref].push(component.$vm || component);
      });
      return $refs;
    } });

}

function handleLink(event) {var _ref4 =



  event.detail || event.value,vuePid = _ref4.vuePid,vueOptions = _ref4.vueOptions; // detail 是微信,value 是百度(dipatch)

  var parentVm;

  if (vuePid) {
    parentVm = findVmByVueId(this.$vm, vuePid);
  }

  if (!parentVm) {
    parentVm = this.$vm;
  }

  vueOptions.parent = parentVm;
}

function parseApp(vm) {
  return parseBaseApp(vm, {
    mocks: mocks,
    initRefs: initRefs });

}

function createApp(vm) {
  App(parseApp(vm));
  return vm;
}

var encodeReserveRE = /[!'()*]/g;
var encodeReserveReplacer = function encodeReserveReplacer(c) {return '%' + c.charCodeAt(0).toString(16);};
var commaRE = /%2C/g;

// fixed encodeURIComponent which is more conformant to RFC3986:
// - escapes [!'()*]
// - preserve commas
var encode = function encode(str) {return encodeURIComponent(str).
  replace(encodeReserveRE, encodeReserveReplacer).
  replace(commaRE, ',');};

function stringifyQuery(obj) {var encodeStr = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : encode;
  var res = obj ? Object.keys(obj).map(function (key) {
    var val = obj[key];

    if (val === undefined) {
      return '';
    }

    if (val === null) {
      return encodeStr(key);
    }

    if (Array.isArray(val)) {
      var result = [];
      val.forEach(function (val2) {
        if (val2 === undefined) {
          return;
        }
        if (val2 === null) {
          result.push(encodeStr(key));
        } else {
          result.push(encodeStr(key) + '=' + encodeStr(val2));
        }
      });
      return result.join('&');
    }

    return encodeStr(key) + '=' + encodeStr(val);
  }).filter(function (x) {return x.length > 0;}).join('&') : null;
  return res ? "?".concat(res) : '';
}

function parseBaseComponent(vueComponentOptions)


{var _ref5 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},isPage = _ref5.isPage,initRelation = _ref5.initRelation;var _initVueComponent =
  initVueComponent(_vue.default, vueComponentOptions),_initVueComponent2 = _slicedToArray(_initVueComponent, 2),VueComponent = _initVueComponent2[0],vueOptions = _initVueComponent2[1];

  var options = _objectSpread({
    multipleSlots: true,
    addGlobalClass: true },
  vueOptions.options || {});


  {
    // 微信 multipleSlots 部分情况有 bug，导致内容顺序错乱 如 u-list，提供覆盖选项
    if (vueOptions['mp-weixin'] && vueOptions['mp-weixin'].options) {
      Object.assign(options, vueOptions['mp-weixin'].options);
    }
  }

  var componentOptions = {
    options: options,
    data: initData(vueOptions, _vue.default.prototype),
    behaviors: initBehaviors(vueOptions, initBehavior),
    properties: initProperties(vueOptions.props, false, vueOptions.__file),
    lifetimes: {
      attached: function attached() {
        var properties = this.properties;

        var options = {
          mpType: isPage.call(this) ? 'page' : 'component',
          mpInstance: this,
          propsData: properties };


        initVueIds(properties.vueId, this);

        // 处理父子关系
        initRelation.call(this, {
          vuePid: this._$vuePid,
          vueOptions: options });


        // 初始化 vue 实例
        this.$vm = new VueComponent(options);

        // 处理$slots,$scopedSlots（暂不支持动态变化$slots）
        initSlots(this.$vm, properties.vueSlots);

        // 触发首次 setData
        this.$vm.$mount();
      },
      ready: function ready() {
        // 当组件 props 默认值为 true，初始化时传入 false 会导致 created,ready 触发, 但 attached 不触发
        // https://developers.weixin.qq.com/community/develop/doc/00066ae2844cc0f8eb883e2a557800
        if (this.$vm) {
          this.$vm._isMounted = true;
          this.$vm.__call_hook('mounted');
          this.$vm.__call_hook('onReady');
        }
      },
      detached: function detached() {
        this.$vm && this.$vm.$destroy();
      } },

    pageLifetimes: {
      show: function show(args) {
        this.$vm && this.$vm.__call_hook('onPageShow', args);
      },
      hide: function hide() {
        this.$vm && this.$vm.__call_hook('onPageHide');
      },
      resize: function resize(size) {
        this.$vm && this.$vm.__call_hook('onPageResize', size);
      } },

    methods: {
      __l: handleLink,
      __e: handleEvent } };


  // externalClasses
  if (vueOptions.externalClasses) {
    componentOptions.externalClasses = vueOptions.externalClasses;
  }

  if (Array.isArray(vueOptions.wxsCallMethods)) {
    vueOptions.wxsCallMethods.forEach(function (callMethod) {
      componentOptions.methods[callMethod] = function (args) {
        return this.$vm[callMethod](args);
      };
    });
  }

  if (isPage) {
    return componentOptions;
  }
  return [componentOptions, VueComponent];
}

function parseComponent(vueComponentOptions) {
  return parseBaseComponent(vueComponentOptions, {
    isPage: isPage,
    initRelation: initRelation });

}

var hooks$1 = [
'onShow',
'onHide',
'onUnload'];


hooks$1.push.apply(hooks$1, PAGE_EVENT_HOOKS);

function parseBasePage(vuePageOptions, _ref6)


{var isPage = _ref6.isPage,initRelation = _ref6.initRelation;
  var pageOptions = parseComponent(vuePageOptions);

  initHooks(pageOptions.methods, hooks$1, vuePageOptions);

  pageOptions.methods.onLoad = function (query) {
    this.options = query;
    var copyQuery = Object.assign({}, query);
    delete copyQuery.__id__;
    this.$page = {
      fullPath: '/' + (this.route || this.is) + stringifyQuery(copyQuery) };

    this.$vm.$mp.query = query; // 兼容 mpvue
    this.$vm.__call_hook('onLoad', query);
  };

  return pageOptions;
}

function parsePage(vuePageOptions) {
  return parseBasePage(vuePageOptions, {
    isPage: isPage,
    initRelation: initRelation });

}

function createPage(vuePageOptions) {
  {
    return Component(parsePage(vuePageOptions));
  }
}

function createComponent(vueOptions) {
  {
    return Component(parseComponent(vueOptions));
  }
}

function createSubpackageApp(vm) {
  var appOptions = parseApp(vm);
  var app = getApp({
    allowDefault: true });

  vm.$scope = app;
  var globalData = app.globalData;
  if (globalData) {
    Object.keys(appOptions.globalData).forEach(function (name) {
      if (!hasOwn(globalData, name)) {
        globalData[name] = appOptions.globalData[name];
      }
    });
  }
  Object.keys(appOptions).forEach(function (name) {
    if (!hasOwn(app, name)) {
      app[name] = appOptions[name];
    }
  });
  if (isFn(appOptions.onShow) && wx.onAppShow) {
    wx.onAppShow(function () {for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {args[_key5] = arguments[_key5];}
      vm.__call_hook('onShow', args);
    });
  }
  if (isFn(appOptions.onHide) && wx.onAppHide) {
    wx.onAppHide(function () {for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {args[_key6] = arguments[_key6];}
      vm.__call_hook('onHide', args);
    });
  }
  if (isFn(appOptions.onLaunch)) {
    var args = wx.getLaunchOptionsSync && wx.getLaunchOptionsSync();
    vm.__call_hook('onLaunch', args);
  }
  return vm;
}

function createPlugin(vm) {
  var appOptions = parseApp(vm);
  if (isFn(appOptions.onShow) && wx.onAppShow) {
    wx.onAppShow(function () {for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {args[_key7] = arguments[_key7];}
      vm.__call_hook('onShow', args);
    });
  }
  if (isFn(appOptions.onHide) && wx.onAppHide) {
    wx.onAppHide(function () {for (var _len8 = arguments.length, args = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {args[_key8] = arguments[_key8];}
      vm.__call_hook('onHide', args);
    });
  }
  if (isFn(appOptions.onLaunch)) {
    var args = wx.getLaunchOptionsSync && wx.getLaunchOptionsSync();
    vm.__call_hook('onLaunch', args);
  }
  return vm;
}

todos.forEach(function (todoApi) {
  protocols[todoApi] = false;
});

canIUses.forEach(function (canIUseApi) {
  var apiName = protocols[canIUseApi] && protocols[canIUseApi].name ? protocols[canIUseApi].name :
  canIUseApi;
  if (!wx.canIUse(apiName)) {
    protocols[canIUseApi] = false;
  }
});

var uni = {};

if (typeof Proxy !== 'undefined' && "mp-weixin" !== 'app-plus') {
  uni = new Proxy({}, {
    get: function get(target, name) {
      if (hasOwn(target, name)) {
        return target[name];
      }
      if (baseApi[name]) {
        return baseApi[name];
      }
      if (api[name]) {
        return promisify(name, api[name]);
      }
      {
        if (extraApi[name]) {
          return promisify(name, extraApi[name]);
        }
        if (todoApis[name]) {
          return promisify(name, todoApis[name]);
        }
      }
      if (eventApi[name]) {
        return eventApi[name];
      }
      if (!hasOwn(wx, name) && !hasOwn(protocols, name)) {
        return;
      }
      return promisify(name, wrapper(name, wx[name]));
    },
    set: function set(target, name, value) {
      target[name] = value;
      return true;
    } });

} else {
  Object.keys(baseApi).forEach(function (name) {
    uni[name] = baseApi[name];
  });

  {
    Object.keys(todoApis).forEach(function (name) {
      uni[name] = promisify(name, todoApis[name]);
    });
    Object.keys(extraApi).forEach(function (name) {
      uni[name] = promisify(name, todoApis[name]);
    });
  }

  Object.keys(eventApi).forEach(function (name) {
    uni[name] = eventApi[name];
  });

  Object.keys(api).forEach(function (name) {
    uni[name] = promisify(name, api[name]);
  });

  Object.keys(wx).forEach(function (name) {
    if (hasOwn(wx, name) || hasOwn(protocols, name)) {
      uni[name] = promisify(name, wrapper(name, wx[name]));
    }
  });
}

wx.createApp = createApp;
wx.createPage = createPage;
wx.createComponent = createComponent;
wx.createSubpackageApp = createSubpackageApp;
wx.createPlugin = createPlugin;

var uni$1 = uni;var _default =

uni$1;exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ 2)))

/***/ }),

/***/ 11:
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    if (!options.components) {
      options.components = {}
    }
    var hasOwn = Object.prototype.hasOwnProperty
    for (var name in components) {
      if (hasOwn.call(components, name) && !hasOwn.call(options.components, name)) {
        options.components[name] = components[name]
      }
    }
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ 12:
/*!***************************************************************!*\
  !*** C:/Users/luyus/Desktop/baoyun-mansion/uview-ui/index.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _mixin = _interopRequireDefault(__webpack_require__(/*! ./libs/mixin/mixin.js */ 13));
var _request = _interopRequireDefault(__webpack_require__(/*! ./libs/request */ 14));





var _queryParams = _interopRequireDefault(__webpack_require__(/*! ./libs/function/queryParams.js */ 18));
var _route = _interopRequireDefault(__webpack_require__(/*! ./libs/function/route.js */ 19));
var _timeFormat = _interopRequireDefault(__webpack_require__(/*! ./libs/function/timeFormat.js */ 23));
var _timeFrom = _interopRequireDefault(__webpack_require__(/*! ./libs/function/timeFrom.js */ 24));
var _colorGradient = _interopRequireDefault(__webpack_require__(/*! ./libs/function/colorGradient.js */ 25));
var _guid = _interopRequireDefault(__webpack_require__(/*! ./libs/function/guid.js */ 26));
var _color = _interopRequireDefault(__webpack_require__(/*! ./libs/function/color.js */ 27));
var _type2icon = _interopRequireDefault(__webpack_require__(/*! ./libs/function/type2icon.js */ 28));
var _randomArray = _interopRequireDefault(__webpack_require__(/*! ./libs/function/randomArray.js */ 29));
var _deepClone = _interopRequireDefault(__webpack_require__(/*! ./libs/function/deepClone.js */ 16));
var _deepMerge = _interopRequireDefault(__webpack_require__(/*! ./libs/function/deepMerge.js */ 15));
var _addUnit = _interopRequireDefault(__webpack_require__(/*! ./libs/function/addUnit.js */ 30));
var _test = _interopRequireDefault(__webpack_require__(/*! ./libs/function/test.js */ 17));
var _random = _interopRequireDefault(__webpack_require__(/*! ./libs/function/random.js */ 31));
var _trim = _interopRequireDefault(__webpack_require__(/*! ./libs/function/trim.js */ 32));
var _toast = _interopRequireDefault(__webpack_require__(/*! ./libs/function/toast.js */ 33));
var _getParent = _interopRequireDefault(__webpack_require__(/*! ./libs/function/getParent.js */ 34));
var _$parent = _interopRequireDefault(__webpack_require__(/*! ./libs/function/$parent.js */ 35));
var _sys = __webpack_require__(/*! ./libs/function/sys.js */ 36);
var _debounce = _interopRequireDefault(__webpack_require__(/*! ./libs/function/debounce.js */ 37));
var _throttle = _interopRequireDefault(__webpack_require__(/*! ./libs/function/throttle.js */ 38));
var _config = _interopRequireDefault(__webpack_require__(/*! ./libs/config/config.js */ 39));
var _zIndex = _interopRequireDefault(__webpack_require__(/*! ./libs/config/zIndex.js */ 40));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function wranning(str) {if (true) {console.warn(str);}}
var $u = {
  queryParams: _queryParams.default,
  route: _route.default,
  timeFormat: _timeFormat.default,
  date: _timeFormat.default,
  timeFrom: _timeFrom.default,
  colorGradient: _colorGradient.default.colorGradient,
  colorToRgba: _colorGradient.default.colorToRgba,
  guid: _guid.default,
  color: _color.default,
  sys: _sys.sys,
  os: _sys.os,
  type2icon: _type2icon.default,
  randomArray: _randomArray.default,
  wranning: wranning,
  get: _request.default.get,
  post: _request.default.post,
  put: _request.default.put,
  'delete': _request.default.delete,
  hexToRgb: _colorGradient.default.hexToRgb,
  rgbToHex: _colorGradient.default.rgbToHex,
  test: _test.default,
  random: _random.default,
  deepClone: _deepClone.default,
  deepMerge: _deepMerge.default,
  getParent: _getParent.default,
  $parent: _$parent.default,
  addUnit: _addUnit.default,
  trim: _trim.default,
  type: ['primary', 'success', 'error', 'warning', 'info'],
  http: _request.default,
  toast: _toast.default,
  config: _config.default,
  zIndex: _zIndex.default,
  debounce: _debounce.default,
  throttle: _throttle.default };

uni.$u = $u;
var install = function install(Vue) {
  Vue.mixin(_mixin.default);
  if (Vue.prototype.openShare) {
    Vue.mixin(mpShare);
  }
  Vue.filter('timeFormat', function (timestamp, format) {
    return (0, _timeFormat.default)(timestamp, format);
  });
  Vue.filter('date', function (timestamp, format) {
    return (0, _timeFormat.default)(timestamp, format);
  });
  Vue.filter('timeFrom', function (timestamp, format) {
    return (0, _timeFrom.default)(timestamp, format);
  });
  Vue.prototype.$u = $u;
};var _default =
{
  install: install };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 13:
/*!**************************************************************************!*\
  !*** C:/Users/luyus/Desktop/baoyun-mansion/uview-ui/libs/mixin/mixin.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(uni) {module.exports = {
  data: function data() {
    return {};
  },
  onLoad: function onLoad() {
    // getRect挂载到$u上，因为这方法需要使用in(this)，所以无法把它独立成一个单独的文件导出
    this.$u.getRect = this.$uGetRect;
  },
  methods: {
    // 查询节点信息
    // 目前此方法在支付宝小程序中无法获取组件跟接点的尺寸，为支付宝的bug(2020-07-21)
    // 解决办法为在组件根部再套一个没有任何作用的view元素
    $uGetRect: function $uGetRect(selector, all) {var _this = this;
      return new Promise(function (resolve) {
        uni.createSelectorQuery().
        in(_this)[all ? 'selectAll' : 'select'](selector).
        boundingClientRect(function (rect) {
          if (all && Array.isArray(rect) && rect.length) {
            resolve(rect);
          }
          if (!all && rect) {
            resolve(rect);
          }
        }).
        exec();
      });
    },
    getParentData: function getParentData() {var _this2 = this;var parentName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      // 避免在created中去定义parent变量
      if (!this.parent) this.parent = false;
      // 这里的本质原理是，通过获取父组件实例(也即u-radio-group的this)
      // 将父组件this中对应的参数，赋值给本组件(u-radio的this)的parentData对象中对应的属性
      // 之所以需要这么做，是因为所有端中，头条小程序不支持通过this.parent.xxx去监听父组件参数的变化
      this.parent = this.$u.$parent.call(this, parentName);
      if (this.parent) {
        // 历遍parentData中的属性，将parent中的同名属性赋值给parentData
        Object.keys(this.parentData).map(function (key) {
          _this2.parentData[key] = _this2.parent[key];
        });
      }
    },
    // 阻止事件冒泡
    preventEvent: function preventEvent(e) {
      e && e.stopPropagation && e.stopPropagation();
    } },

  onReachBottom: function onReachBottom() {
    uni.$emit('uOnReachBottom');
  },
  beforeDestroy: function beforeDestroy() {var _this3 = this;
    // 判断当前页面是否存在parent和chldren，一般在checkbox和checkbox-group父子联动的场景会有此情况
    // 组件销毁时，移除子组件在父组件children数组中的实例，释放资源，避免数据混乱
    if (this.parent && uni.$u.test.array(this.parent.children)) {
      // 组件销毁时，移除父组件中的children数组中对应的实例
      var childrenList = this.parent.children;
      childrenList.map(function (child, index) {
        // 如果相等，则移除
        if (child === _this3) {
          childrenList.splice(index, 1);
        }
      });
    }
  } };
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 14:
/*!****************************************************************************!*\
  !*** C:/Users/luyus/Desktop/baoyun-mansion/uview-ui/libs/request/index.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _deepMerge = _interopRequireDefault(__webpack_require__(/*! ../function/deepMerge */ 15));
var _test = _interopRequireDefault(__webpack_require__(/*! ../function/test */ 17));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;}var
Request = /*#__PURE__*/function () {_createClass(Request, [{ key: "setConfig",
    // 设置全局默认配置
    value: function setConfig(customConfig) {
      // 深度合并对象，否则会造成对象深层属性丢失
      this.config = (0, _deepMerge.default)(this.config, customConfig);
    }

    // 主要请求部分
  }, { key: "request", value: function request() {var _this = this;var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      // 检查请求拦截
      if (this.interceptor.request && typeof this.interceptor.request === 'function') {
        var tmpConfig = {};
        var interceptorRequest = this.interceptor.request(options);
        if (interceptorRequest === false) {
          // 返回一个处于pending状态中的Promise，来取消原promise，避免进入then()回调
          return new Promise(function () {});
        }
        this.options = interceptorRequest;
      }
      options.dataType = options.dataType || this.config.dataType;
      options.responseType = options.responseType || this.config.responseType;
      options.url = options.url || '';
      options.params = options.params || {};
      options.header = Object.assign({}, this.config.header, options.header);
      options.method = options.method || this.config.method;

      return new Promise(function (resolve, reject) {
        options.complete = function (response) {
          // 请求返回后，隐藏loading(如果请求返回快的话，可能会没有loading)
          uni.hideLoading();
          // 清除定时器，如果请求回来了，就无需loading
          clearTimeout(_this.config.timer);
          _this.config.timer = null;
          // 判断用户对拦截返回数据的要求，如果originalData为true，返回所有的数据(response)到拦截器，否则只返回response.data
          if (_this.config.originalData) {
            // 判断是否存在拦截器
            if (_this.interceptor.response && typeof _this.interceptor.response === 'function') {
              var resInterceptors = _this.interceptor.response(response);
              // 如果拦截器不返回false，就将拦截器返回的内容给this.$u.post的then回调
              if (resInterceptors !== false) {
                resolve(resInterceptors);
              } else {
                // 如果拦截器返回false，意味着拦截器定义者认为返回有问题，直接接入catch回调
                reject(response);
              }
            } else {
              // 如果要求返回原始数据，就算没有拦截器，也返回最原始的数据
              resolve(response);
            }
          } else {
            if (response.statusCode == 200) {
              if (_this.interceptor.response && typeof _this.interceptor.response === 'function') {
                var _resInterceptors = _this.interceptor.response(response.data);
                if (_resInterceptors !== false) {
                  resolve(_resInterceptors);
                } else {
                  reject(response.data);
                }
              } else {
                // 如果不是返回原始数据(originalData=false)，且没有拦截器的情况下，返回纯数据给then回调
                resolve(response.data);
              }
            } else {
              // 不返回原始数据的情况下，服务器状态码不为200，modal弹框提示
              // if(response.errMsg) {
              // 	uni.showModal({
              // 		title: response.errMsg
              // 	});
              // }
              reject(response);
            }
          }
        };

        // 判断用户传递的URL是否/开头,如果不是,加上/，这里使用了uView的test.js验证库的url()方法
        options.url = _test.default.url(options.url) ? options.url : _this.config.baseUrl + (options.url.indexOf('/') == 0 ?
        options.url : '/' + options.url);

        // 是否显示loading
        // 加一个是否已有timer定时器的判断，否则有两个同时请求的时候，后者会清除前者的定时器id
        // 而没有清除前者的定时器，导致前者超时，一直显示loading
        if (_this.config.showLoading && !_this.config.timer) {
          _this.config.timer = setTimeout(function () {
            uni.showLoading({
              title: _this.config.loadingText,
              mask: _this.config.loadingMask });

            _this.config.timer = null;
          }, _this.config.loadingTime);
        }
        uni.request(options);
      });
      // .catch(res => {
      // 	// 如果返回reject()，不让其进入this.$u.post().then().catch()后面的catct()
      // 	// 因为很多人都会忘了写后面的catch()，导致报错捕获不到catch
      // 	return new Promise(()=>{});
      // })
    } }]);

  function Request() {var _this2 = this;_classCallCheck(this, Request);
    this.config = {
      baseUrl: '', // 请求的根域名
      // 默认的请求头
      header: {},
      method: 'POST',
      // 设置为json，返回后uni.request会对数据进行一次JSON.parse
      dataType: 'json',
      // 此参数无需处理，因为5+和支付宝小程序不支持，默认为text即可
      responseType: 'text',
      showLoading: true, // 是否显示请求中的loading
      loadingText: '请求中...',
      loadingTime: 800, // 在此时间内，请求还没回来的话，就显示加载中动画，单位ms
      timer: null, // 定时器
      originalData: false, // 是否在拦截器中返回服务端的原始数据，见文档说明
      loadingMask: true // 展示loading的时候，是否给一个透明的蒙层，防止触摸穿透
    };

    // 拦截器
    this.interceptor = {
      // 请求前的拦截
      request: null,
      // 请求后的拦截
      response: null };


    // get请求
    this.get = function (url) {var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};var header = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return _this2.request({
        method: 'GET',
        url: url,
        header: header,
        data: data });

    };

    // post请求
    this.post = function (url) {var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};var header = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return _this2.request({
        url: url,
        method: 'POST',
        header: header,
        data: data });

    };

    // put请求，不支持支付宝小程序(HX2.6.15)
    this.put = function (url) {var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};var header = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return _this2.request({
        url: url,
        method: 'PUT',
        header: header,
        data: data });

    };

    // delete请求，不支持支付宝和头条小程序(HX2.6.15)
    this.delete = function (url) {var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};var header = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return _this2.request({
        url: url,
        method: 'DELETE',
        header: header,
        data: data });

    };
  }return Request;}();var _default =

new Request();exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 15:
/*!*********************************************************************************!*\
  !*** C:/Users/luyus/Desktop/baoyun-mansion/uview-ui/libs/function/deepMerge.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _deepClone = _interopRequireDefault(__webpack_require__(/*! ./deepClone */ 16));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

// JS对象深度合并
function deepMerge() {var target = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};var source = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  target = (0, _deepClone.default)(target);
  if (typeof target !== 'object' || typeof source !== 'object') return false;
  for (var prop in source) {
    if (!source.hasOwnProperty(prop)) continue;
    if (prop in target) {
      if (typeof target[prop] !== 'object') {
        target[prop] = source[prop];
      } else {
        if (typeof source[prop] !== 'object') {
          target[prop] = source[prop];
        } else {
          if (target[prop].concat && source[prop].concat) {
            target[prop] = target[prop].concat(source[prop]);
          } else {
            target[prop] = deepMerge(target[prop], source[prop]);
          }
        }
      }
    } else {
      target[prop] = source[prop];
    }
  }
  return target;
}var _default =

deepMerge;exports.default = _default;

/***/ }),

/***/ 16:
/*!*********************************************************************************!*\
  !*** C:/Users/luyus/Desktop/baoyun-mansion/uview-ui/libs/function/deepClone.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; // 判断arr是否为一个数组，返回一个bool值
function isArray(arr) {
  return Object.prototype.toString.call(arr) === '[object Array]';
}

// 深度克隆
function deepClone(obj) {
  // 对常见的“非”值，直接返回原来值
  if ([null, undefined, NaN, false].includes(obj)) return obj;
  if (typeof obj !== "object" && typeof obj !== 'function') {
    //原始类型直接返回
    return obj;
  }
  var o = isArray(obj) ? [] : {};
  for (var i in obj) {
    if (obj.hasOwnProperty(i)) {
      o[i] = typeof obj[i] === "object" ? deepClone(obj[i]) : obj[i];
    }
  }
  return o;
}var _default =

deepClone;exports.default = _default;

/***/ }),

/***/ 17:
/*!****************************************************************************!*\
  !*** C:/Users/luyus/Desktop/baoyun-mansion/uview-ui/libs/function/test.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /**
                                                                                                      * 验证电子邮箱格式
                                                                                                      */
function email(value) {
  return /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/.test(value);
}

/**
   * 验证手机格式
   */
function mobile(value) {
  return /^1[3-9]\d{9}$/.test(value);
}

/**
   * 验证URL格式
   */
function url(value) {
  return /http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w-.\/?%&=]*)?/.test(value);
}

/**
   * 验证日期格式
   */
function date(value) {
  return !/Invalid|NaN/.test(new Date(value).toString());
}

/**
   * 验证ISO类型的日期格式
   */
function dateISO(value) {
  return /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(value);
}

/**
   * 验证十进制数字
   */
function number(value) {
  return /^[\+-]?(\d+\.?\d*|\.\d+|\d\.\d+e\+\d+)$/.test(value);
}

/**
   * 验证整数
   */
function digits(value) {
  return /^\d+$/.test(value);
}

/**
   * 验证身份证号码
   */
function idCard(value) {
  return /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/.test(
  value);
}

/**
   * 是否车牌号
   */
function carNo(value) {
  // 新能源车牌
  var xreg = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}(([0-9]{5}[DF]$)|([DF][A-HJ-NP-Z0-9][0-9]{4}$))/;
  // 旧车牌
  var creg = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9挂学警港澳]{1}$/;
  if (value.length === 7) {
    return creg.test(value);
  } else if (value.length === 8) {
    return xreg.test(value);
  } else {
    return false;
  }
}

/**
   * 金额,只允许2位小数
   */
function amount(value) {
  //金额，只允许保留两位小数
  return /^[1-9]\d*(,\d{3})*(\.\d{1,2})?$|^0\.\d{1,2}$/.test(value);
}

/**
   * 中文
   */
function chinese(value) {
  var reg = /^[\u4e00-\u9fa5]+$/gi;
  return reg.test(value);
}

/**
   * 只能输入字母
   */
function letter(value) {
  return /^[a-zA-Z]*$/.test(value);
}

/**
   * 只能是字母或者数字
   */
function enOrNum(value) {
  //英文或者数字
  var reg = /^[0-9a-zA-Z]*$/g;
  return reg.test(value);
}

/**
   * 验证是否包含某个值
   */
function contains(value, param) {
  return value.indexOf(param) >= 0;
}

/**
   * 验证一个值范围[min, max]
   */
function range(value, param) {
  return value >= param[0] && value <= param[1];
}

/**
   * 验证一个长度范围[min, max]
   */
function rangeLength(value, param) {
  return value.length >= param[0] && value.length <= param[1];
}

/**
   * 是否固定电话
   */
function landline(value) {
  var reg = /^\d{3,4}-\d{7,8}(-\d{3,4})?$/;
  return reg.test(value);
}

/**
   * 判断是否为空
   */
function empty(value) {
  switch (typeof value) {
    case 'undefined':
      return true;
    case 'string':
      if (value.replace(/(^[ \t\n\r]*)|([ \t\n\r]*$)/g, '').length == 0) return true;
      break;
    case 'boolean':
      if (!value) return true;
      break;
    case 'number':
      if (0 === value || isNaN(value)) return true;
      break;
    case 'object':
      if (null === value || value.length === 0) return true;
      for (var i in value) {
        return false;
      }
      return true;}

  return false;
}

/**
   * 是否json字符串
   */
function jsonString(value) {
  if (typeof value == 'string') {
    try {
      var obj = JSON.parse(value);
      if (typeof obj == 'object' && obj) {
        return true;
      } else {
        return false;
      }
    } catch (e) {
      return false;
    }
  }
  return false;
}


/**
   * 是否数组
   */
function array(value) {
  if (typeof Array.isArray === "function") {
    return Array.isArray(value);
  } else {
    return Object.prototype.toString.call(value) === "[object Array]";
  }
}

/**
   * 是否对象
   */
function object(value) {
  return Object.prototype.toString.call(value) === '[object Object]';
}

/**
   * 是否短信验证码
   */
function code(value) {var len = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 6;
  return new RegExp("^\\d{".concat(len, "}$")).test(value);
}var _default =


{
  email: email,
  mobile: mobile,
  url: url,
  date: date,
  dateISO: dateISO,
  number: number,
  digits: digits,
  idCard: idCard,
  carNo: carNo,
  amount: amount,
  chinese: chinese,
  letter: letter,
  enOrNum: enOrNum,
  contains: contains,
  range: range,
  rangeLength: rangeLength,
  empty: empty,
  isEmpty: empty,
  jsonString: jsonString,
  landline: landline,
  object: object,
  array: array,
  code: code };exports.default = _default;

/***/ }),

/***/ 18:
/*!***********************************************************************************!*\
  !*** C:/Users/luyus/Desktop/baoyun-mansion/uview-ui/libs/function/queryParams.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /**
                                                                                                      * 对象转url参数
                                                                                                      * @param {*} data,对象
                                                                                                      * @param {*} isPrefix,是否自动加上"?"
                                                                                                      */
function queryParams() {var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};var isPrefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;var arrayFormat = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'brackets';
  var prefix = isPrefix ? '?' : '';
  var _result = [];
  if (['indices', 'brackets', 'repeat', 'comma'].indexOf(arrayFormat) == -1) arrayFormat = 'brackets';var _loop = function _loop(
  key) {
    var value = data[key];
    // 去掉为空的参数
    if (['', undefined, null].indexOf(value) >= 0) {
      return "continue";
    }
    // 如果值为数组，另行处理
    if (value.constructor === Array) {
      // e.g. {ids: [1, 2, 3]}
      switch (arrayFormat) {
        case 'indices':
          // 结果: ids[0]=1&ids[1]=2&ids[2]=3
          for (var i = 0; i < value.length; i++) {
            _result.push(key + '[' + i + ']=' + value[i]);
          }
          break;
        case 'brackets':
          // 结果: ids[]=1&ids[]=2&ids[]=3
          value.forEach(function (_value) {
            _result.push(key + '[]=' + _value);
          });
          break;
        case 'repeat':
          // 结果: ids=1&ids=2&ids=3
          value.forEach(function (_value) {
            _result.push(key + '=' + _value);
          });
          break;
        case 'comma':
          // 结果: ids=1,2,3
          var commaStr = "";
          value.forEach(function (_value) {
            commaStr += (commaStr ? "," : "") + _value;
          });
          _result.push(key + '=' + commaStr);
          break;
        default:
          value.forEach(function (_value) {
            _result.push(key + '[]=' + _value);
          });}

    } else {
      _result.push(key + '=' + value);
    }};for (var key in data) {var _ret = _loop(key);if (_ret === "continue") continue;
  }
  return _result.length ? prefix + _result.join('&') : '';
}var _default =

queryParams;exports.default = _default;

/***/ }),

/***/ 19:
/*!*****************************************************************************!*\
  !*** C:/Users/luyus/Desktop/baoyun-mansion/uview-ui/libs/function/route.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 20));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);}_next(undefined);});};}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;} /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              * 路由跳转方法，该方法相对于直接使用uni.xxx的好处是使用更加简单快捷
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              * 并且带有路由拦截功能
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              */var

Router = /*#__PURE__*/function () {
  function Router() {_classCallCheck(this, Router);
    // 原始属性定义
    this.config = {
      type: 'navigateTo',
      url: '',
      delta: 1, // navigateBack页面后退时,回退的层数
      params: {}, // 传递的参数
      animationType: 'pop-in', // 窗口动画,只在APP有效
      animationDuration: 300, // 窗口动画持续时间,单位毫秒,只在APP有效
      intercept: false // 是否需要拦截
    };
    // 因为route方法是需要对外赋值给另外的对象使用，同时route内部有使用this，会导致route失去上下文
    // 这里在构造函数中进行this绑定
    this.route = this.route.bind(this);
  }

  // 判断url前面是否有"/"，如果没有则加上，否则无法跳转
  _createClass(Router, [{ key: "addRootPath", value: function addRootPath(url) {
      return url[0] === '/' ? url : "/".concat(url);
    }

    // 整合路由参数
  }, { key: "mixinParam", value: function mixinParam(url, params) {
      url = url && this.addRootPath(url);

      // 使用正则匹配，主要依据是判断是否有"/","?","="等，如“/page/index/index?name=mary"
      // 如果有url中有get参数，转换后无需带上"?"
      var query = '';
      if (/.*\/.*\?.*=.*/.test(url)) {
        // object对象转为get类型的参数
        query = uni.$u.queryParams(params, false);
        // 因为已有get参数,所以后面拼接的参数需要带上"&"隔开
        return url += "&" + query;
      } else {
        // 直接拼接参数，因为此处url中没有后面的query参数，也就没有"?/&"之类的符号
        query = uni.$u.queryParams(params);
        return url += query;
      }
    }

    // 对外的方法名称
  }, { key: "route", value: function () {var _route = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {var options,params,mergeConfig,isNext,_args = arguments;return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:options = _args.length > 0 && _args[0] !== undefined ? _args[0] : {};params = _args.length > 1 && _args[1] !== undefined ? _args[1] : {};
                // 合并用户的配置和内部的默认配置
                mergeConfig = {};

                if (typeof options === 'string') {
                  // 如果options为字符串，则为route(url, params)的形式
                  mergeConfig.url = this.mixinParam(options, params);
                  mergeConfig.type = 'navigateTo';
                } else {
                  mergeConfig = uni.$u.deepClone(options, this.config);
                  // 否则正常使用mergeConfig中的url和params进行拼接
                  mergeConfig.url = this.mixinParam(options.url, options.params);
                }

                if (params.intercept) {
                  this.config.intercept = params.intercept;
                }
                // params参数也带给拦截器
                mergeConfig.params = params;
                // 合并内外部参数
                mergeConfig = uni.$u.deepMerge(this.config, mergeConfig);
                // 判断用户是否定义了拦截器
                if (!(typeof uni.$u.routeIntercept === 'function')) {_context.next = 14;break;}_context.next = 10;return (

                  new Promise(function (resolve, reject) {
                    uni.$u.routeIntercept(mergeConfig, resolve);
                  }));case 10:isNext = _context.sent;
                // 如果isNext为true，则执行路由跳转
                isNext && this.openPage(mergeConfig);_context.next = 15;break;case 14:

                this.openPage(mergeConfig);case 15:case "end":return _context.stop();}}}, _callee, this);}));function route() {return _route.apply(this, arguments);}return route;}()



    // 执行路由跳转
  }, { key: "openPage", value: function openPage(config) {
      // 解构参数
      var
      url =




      config.url,type = config.type,delta = config.delta,animationType = config.animationType,animationDuration = config.animationDuration;
      if (config.type == 'navigateTo' || config.type == 'to') {
        uni.navigateTo({
          url: url,
          animationType: animationType,
          animationDuration: animationDuration });

      }
      if (config.type == 'redirectTo' || config.type == 'redirect') {
        uni.redirectTo({
          url: url });

      }
      if (config.type == 'switchTab' || config.type == 'tab') {
        uni.switchTab({
          url: url });

      }
      if (config.type == 'reLaunch' || config.type == 'launch') {
        uni.reLaunch({
          url: url });

      }
      if (config.type == 'navigateBack' || config.type == 'back') {
        uni.navigateBack({
          delta: delta });

      }
    } }]);return Router;}();var _default =


new Router().route;exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 2:
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ 20:
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ 21);

/***/ }),

/***/ 21:
/*!************************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime-module.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = (function() {
  return this || (typeof self === "object" && self);
})() || Function("return this")();

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__(/*! ./runtime */ 22);

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}


/***/ }),

/***/ 22:
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() {
    return this || (typeof self === "object" && self);
  })() || Function("return this")()
);


/***/ }),

/***/ 23:
/*!**********************************************************************************!*\
  !*** C:/Users/luyus/Desktop/baoyun-mansion/uview-ui/libs/function/timeFormat.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; // padStart 的 polyfill，因为某些机型或情况，还无法支持es7的padStart，比如电脑版的微信小程序
// 所以这里做一个兼容polyfill的兼容处理
if (!String.prototype.padStart) {
  // 为了方便表示这里 fillString 用了ES6 的默认参数，不影响理解
  String.prototype.padStart = function (maxLength) {var fillString = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ' ';
    if (Object.prototype.toString.call(fillString) !== "[object String]") throw new TypeError(
    'fillString must be String');
    var str = this;
    // 返回 String(str) 这里是为了使返回的值是字符串字面量，在控制台中更符合直觉
    if (str.length >= maxLength) return String(str);

    var fillLength = maxLength - str.length,
    times = Math.ceil(fillLength / fillString.length);
    while (times >>= 1) {
      fillString += fillString;
      if (times === 1) {
        fillString += fillString;
      }
    }
    return fillString.slice(0, fillLength) + str;
  };
}

// 其他更多是格式化有如下:
// yyyy:mm:dd|yyyy:mm|yyyy年mm月dd日|yyyy年mm月dd日 hh时MM分等,可自定义组合
function timeFormat() {var dateTime = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;var fmt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'yyyy-mm-dd';
  // 如果为null,则格式化当前时间
  if (!dateTime) dateTime = Number(new Date());
  // 如果dateTime长度为10或者13，则为秒和毫秒的时间戳，如果超过13位，则为其他的时间格式
  if (dateTime.toString().length == 10) dateTime *= 1000;
  var date = new Date(dateTime);
  var ret;
  var opt = {
    "y+": date.getFullYear().toString(), // 年
    "m+": (date.getMonth() + 1).toString(), // 月
    "d+": date.getDate().toString(), // 日
    "h+": date.getHours().toString(), // 时
    "M+": date.getMinutes().toString(), // 分
    "s+": date.getSeconds().toString() // 秒
    // 有其他格式化字符需求可以继续添加，必须转化成字符串
  };
  for (var k in opt) {
    ret = new RegExp("(" + k + ")").exec(fmt);
    if (ret) {
      fmt = fmt.replace(ret[1], ret[1].length == 1 ? opt[k] : opt[k].padStart(ret[1].length, "0"));
    };
  };
  return fmt;
}var _default =

timeFormat;exports.default = _default;

/***/ }),

/***/ 24:
/*!********************************************************************************!*\
  !*** C:/Users/luyus/Desktop/baoyun-mansion/uview-ui/libs/function/timeFrom.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _timeFormat = _interopRequireDefault(__webpack_require__(/*! ../../libs/function/timeFormat.js */ 23));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

/**
                                                                                                                                                                                                                                                                                          * 时间戳转为多久之前
                                                                                                                                                                                                                                                                                          * @param String timestamp 时间戳
                                                                                                                                                                                                                                                                                          * @param String | Boolean format 如果为时间格式字符串，超出一定时间范围，返回固定的时间格式；
                                                                                                                                                                                                                                                                                          * 如果为布尔值false，无论什么时间，都返回多久以前的格式
                                                                                                                                                                                                                                                                                          */
function timeFrom() {var dateTime = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'yyyy-mm-dd';
  // 如果为null,则格式化当前时间
  if (!dateTime) dateTime = Number(new Date());
  // 如果dateTime长度为10或者13，则为秒和毫秒的时间戳，如果超过13位，则为其他的时间格式
  if (dateTime.toString().length == 10) dateTime *= 1000;
  var timestamp = +new Date(Number(dateTime));

  var timer = (Number(new Date()) - timestamp) / 1000;
  // 如果小于5分钟,则返回"刚刚",其他以此类推
  var tips = '';
  switch (true) {
    case timer < 300:
      tips = '刚刚';
      break;
    case timer >= 300 && timer < 3600:
      tips = parseInt(timer / 60) + '分钟前';
      break;
    case timer >= 3600 && timer < 86400:
      tips = parseInt(timer / 3600) + '小时前';
      break;
    case timer >= 86400 && timer < 2592000:
      tips = parseInt(timer / 86400) + '天前';
      break;
    default:
      // 如果format为false，则无论什么时间戳，都显示xx之前
      if (format === false) {
        if (timer >= 2592000 && timer < 365 * 86400) {
          tips = parseInt(timer / (86400 * 30)) + '个月前';
        } else {
          tips = parseInt(timer / (86400 * 365)) + '年前';
        }
      } else {
        tips = (0, _timeFormat.default)(timestamp, format);
      }}

  return tips;
}var _default =

timeFrom;exports.default = _default;

/***/ }),

/***/ 25:
/*!*************************************************************************************!*\
  !*** C:/Users/luyus/Desktop/baoyun-mansion/uview-ui/libs/function/colorGradient.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /**
                                                                                                      * 求两个颜色之间的渐变值
                                                                                                      * @param {string} startColor 开始的颜色
                                                                                                      * @param {string} endColor 结束的颜色
                                                                                                      * @param {number} step 颜色等分的份额
                                                                                                      * */
function colorGradient() {var startColor = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'rgb(0, 0, 0)';var endColor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'rgb(255, 255, 255)';var step = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 10;
  var startRGB = hexToRgb(startColor, false); //转换为rgb数组模式
  var startR = startRGB[0];
  var startG = startRGB[1];
  var startB = startRGB[2];

  var endRGB = hexToRgb(endColor, false);
  var endR = endRGB[0];
  var endG = endRGB[1];
  var endB = endRGB[2];

  var sR = (endR - startR) / step; //总差值
  var sG = (endG - startG) / step;
  var sB = (endB - startB) / step;
  var colorArr = [];
  for (var i = 0; i < step; i++) {
    //计算每一步的hex值 
    var hex = rgbToHex('rgb(' + Math.round(sR * i + startR) + ',' + Math.round(sG * i + startG) + ',' + Math.round(sB *
    i + startB) + ')');
    colorArr.push(hex);
  }
  return colorArr;
}

// 将hex表示方式转换为rgb表示方式(这里返回rgb数组模式)
function hexToRgb(sColor) {var str = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
  sColor = sColor.toLowerCase();
  if (sColor && reg.test(sColor)) {
    if (sColor.length === 4) {
      var sColorNew = "#";
      for (var i = 1; i < 4; i += 1) {
        sColorNew += sColor.slice(i, i + 1).concat(sColor.slice(i, i + 1));
      }
      sColor = sColorNew;
    }
    //处理六位的颜色值
    var sColorChange = [];
    for (var _i = 1; _i < 7; _i += 2) {
      sColorChange.push(parseInt("0x" + sColor.slice(_i, _i + 2)));
    }
    if (!str) {
      return sColorChange;
    } else {
      return "rgb(".concat(sColorChange[0], ",").concat(sColorChange[1], ",").concat(sColorChange[2], ")");
    }
  } else if (/^(rgb|RGB)/.test(sColor)) {
    var arr = sColor.replace(/(?:\(|\)|rgb|RGB)*/g, "").split(",");
    return arr.map(function (val) {return Number(val);});
  } else {
    return sColor;
  }
};

// 将rgb表示方式转换为hex表示方式
function rgbToHex(rgb) {
  var _this = rgb;
  var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
  if (/^(rgb|RGB)/.test(_this)) {
    var aColor = _this.replace(/(?:\(|\)|rgb|RGB)*/g, "").split(",");
    var strHex = "#";
    for (var i = 0; i < aColor.length; i++) {
      var hex = Number(aColor[i]).toString(16);
      hex = String(hex).length == 1 ? 0 + '' + hex : hex; // 保证每个rgb的值为2位
      if (hex === "0") {
        hex += hex;
      }
      strHex += hex;
    }
    if (strHex.length !== 7) {
      strHex = _this;
    }
    return strHex;
  } else if (reg.test(_this)) {
    var aNum = _this.replace(/#/, "").split("");
    if (aNum.length === 6) {
      return _this;
    } else if (aNum.length === 3) {
      var numHex = "#";
      for (var _i2 = 0; _i2 < aNum.length; _i2 += 1) {
        numHex += aNum[_i2] + aNum[_i2];
      }
      return numHex;
    }
  } else {
    return _this;
  }
}


/**
  * JS颜色十六进制转换为rgb或rgba,返回的格式为 rgba（255，255，255，0.5）字符串
  * sHex为传入的十六进制的色值
  * alpha为rgba的透明度
  */
function colorToRgba(color) {var alpha = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.3;
  color = rgbToHex(color);
  // 十六进制颜色值的正则表达式
  var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
  /* 16进制颜色转为RGB格式 */
  var sColor = color.toLowerCase();
  if (sColor && reg.test(sColor)) {
    if (sColor.length === 4) {
      var sColorNew = '#';
      for (var i = 1; i < 4; i += 1) {
        sColorNew += sColor.slice(i, i + 1).concat(sColor.slice(i, i + 1));
      }
      sColor = sColorNew;
    }
    // 处理六位的颜色值
    var sColorChange = [];
    for (var _i3 = 1; _i3 < 7; _i3 += 2) {
      sColorChange.push(parseInt('0x' + sColor.slice(_i3, _i3 + 2)));
    }
    // return sColorChange.join(',')
    return 'rgba(' + sColorChange.join(',') + ',' + alpha + ')';
  } else
  {
    return sColor;
  }
}var _default =

{
  colorGradient: colorGradient,
  hexToRgb: hexToRgb,
  rgbToHex: rgbToHex,
  colorToRgba: colorToRgba };exports.default = _default;

/***/ }),

/***/ 26:
/*!****************************************************************************!*\
  !*** C:/Users/luyus/Desktop/baoyun-mansion/uview-ui/libs/function/guid.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /**
                                                                                                      * 本算法来源于简书开源代码，详见：https://www.jianshu.com/p/fdbf293d0a85
                                                                                                      * 全局唯一标识符（uuid，Globally Unique Identifier）,也称作 uuid(Universally Unique IDentifier) 
                                                                                                      * 一般用于多个组件之间,给它一个唯一的标识符,或者v-for循环的时候,如果使用数组的index可能会导致更新列表出现问题
                                                                                                      * 最可能的情况是左滑删除item或者对某条信息流"不喜欢"并去掉它的时候,会导致组件内的数据可能出现错乱
                                                                                                      * v-for的时候,推荐使用后端返回的id而不是循环的index
                                                                                                      * @param {Number} len uuid的长度
                                                                                                      * @param {Boolean} firstU 将返回的首字母置为"u"
                                                                                                      * @param {Nubmer} radix 生成uuid的基数(意味着返回的字符串都是这个基数),2-二进制,8-八进制,10-十进制,16-十六进制
                                                                                                      */
function guid() {var len = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 32;var firstU = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;var radix = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
  var uuid = [];
  radix = radix || chars.length;

  if (len) {
    // 如果指定uuid长度,只是取随机的字符,0|x为位运算,能去掉x的小数位,返回整数位
    for (var i = 0; i < len; i++) {uuid[i] = chars[0 | Math.random() * radix];}
  } else {
    var r;
    // rfc4122标准要求返回的uuid中,某些位为固定的字符
    uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-';
    uuid[14] = '4';

    for (var _i = 0; _i < 36; _i++) {
      if (!uuid[_i]) {
        r = 0 | Math.random() * 16;
        uuid[_i] = chars[_i == 19 ? r & 0x3 | 0x8 : r];
      }
    }
  }
  // 移除第一个字符,并用u替代,因为第一个字符为数值时,该guuid不能用作id或者class
  if (firstU) {
    uuid.shift();
    return 'u' + uuid.join('');
  } else {
    return uuid.join('');
  }
}var _default =

guid;exports.default = _default;

/***/ }),

/***/ 27:
/*!*****************************************************************************!*\
  !*** C:/Users/luyus/Desktop/baoyun-mansion/uview-ui/libs/function/color.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; // 为了让用户能够自定义主题，会逐步弃用此文件，各颜色通过css提供
// 为了给某些特殊场景使用和向后兼容，无需删除此文件(2020-06-20)
var color = {
  primary: "#2979ff",
  primaryDark: "#2b85e4",
  primaryDisabled: "#a0cfff",
  primaryLight: "#ecf5ff",
  bgColor: "#f3f4f6",

  info: "#909399",
  infoDark: "#82848a",
  infoDisabled: "#c8c9cc",
  infoLight: "#f4f4f5",

  warning: "#ff9900",
  warningDark: "#f29100",
  warningDisabled: "#fcbd71",
  warningLight: "#fdf6ec",

  error: "#fa3534",
  errorDark: "#dd6161",
  errorDisabled: "#fab6b6",
  errorLight: "#fef0f0",

  success: "#19be6b",
  successDark: "#18b566",
  successDisabled: "#71d5a1",
  successLight: "#dbf1e1",

  mainColor: "#303133",
  contentColor: "#606266",
  tipsColor: "#909399",
  lightColor: "#c0c4cc",
  borderColor: "#e4e7ed" };var _default =


color;exports.default = _default;

/***/ }),

/***/ 28:
/*!*********************************************************************************!*\
  !*** C:/Users/luyus/Desktop/baoyun-mansion/uview-ui/libs/function/type2icon.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /**
                                                                                                      * 根据主题type值,获取对应的图标
                                                                                                      * @param String type 主题名称,primary|info|error|warning|success
                                                                                                      * @param String fill 是否使用fill填充实体的图标  
                                                                                                      */
function type2icon() {var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'success';var fill = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  // 如果非预置值,默认为success
  if (['primary', 'info', 'error', 'warning', 'success'].indexOf(type) == -1) type = 'success';
  var iconName = '';
  // 目前(2019-12-12),info和primary使用同一个图标
  switch (type) {
    case 'primary':
      iconName = 'info-circle';
      break;
    case 'info':
      iconName = 'info-circle';
      break;
    case 'error':
      iconName = 'close-circle';
      break;
    case 'warning':
      iconName = 'error-circle';
      break;
    case 'success':
      iconName = 'checkmark-circle';
      break;
    default:
      iconName = 'checkmark-circle';}

  // 是否是实体类型,加上-fill,在icon组件库中,实体的类名是后面加-fill的
  if (fill) iconName += '-fill';
  return iconName;
}var _default =

type2icon;exports.default = _default;

/***/ }),

/***/ 29:
/*!***********************************************************************************!*\
  !*** C:/Users/luyus/Desktop/baoyun-mansion/uview-ui/libs/function/randomArray.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; // 打乱数组
function randomArray() {var array = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  // 原理是sort排序,Math.random()产生0<= x < 1之间的数,会导致x-0.05大于或者小于0
  return array.sort(function () {return Math.random() - 0.5;});
}var _default =

randomArray;exports.default = _default;

/***/ }),

/***/ 3:
/*!*************************************************************!*\
  !*** ./node_modules/@dcloudio/uni-i18n/dist/uni-i18n.es.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni, global) {Object.defineProperty(exports, "__esModule", { value: true });exports.compileI18nJsonStr = compileI18nJsonStr;exports.hasI18nJson = hasI18nJson;exports.initVueI18n = initVueI18n;exports.isI18nStr = isI18nStr;exports.normalizeLocale = normalizeLocale;exports.parseI18nJson = parseI18nJson;exports.resolveLocale = resolveLocale;exports.isString = exports.LOCALE_ZH_HANT = exports.LOCALE_ZH_HANS = exports.LOCALE_FR = exports.LOCALE_ES = exports.LOCALE_EN = exports.I18n = exports.Formatter = void 0;function _slicedToArray(arr, i) {return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();}function _nonIterableRest() {throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === "string") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === "Object" && o.constructor) n = o.constructor.name;if (n === "Map" || n === "Set") return Array.from(o);if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) {arr2[i] = arr[i];}return arr2;}function _iterableToArrayLimit(arr, i) {if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;var _arr = [];var _n = true;var _d = false;var _e = undefined;try {for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {_arr.push(_s.value);if (i && _arr.length === i) break;}} catch (err) {_d = true;_e = err;} finally {try {if (!_n && _i["return"] != null) _i["return"]();} finally {if (_d) throw _e;}}return _arr;}function _arrayWithHoles(arr) {if (Array.isArray(arr)) return arr;}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;}var isArray = Array.isArray;
var isObject = function isObject(val) {return val !== null && typeof val === 'object';};
var defaultDelimiters = ['{', '}'];var
BaseFormatter = /*#__PURE__*/function () {
  function BaseFormatter() {_classCallCheck(this, BaseFormatter);
    this._caches = Object.create(null);
  }_createClass(BaseFormatter, [{ key: "interpolate", value: function interpolate(
    message, values) {var delimiters = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultDelimiters;
      if (!values) {
        return [message];
      }
      var tokens = this._caches[message];
      if (!tokens) {
        tokens = parse(message, delimiters);
        this._caches[message] = tokens;
      }
      return compile(tokens, values);
    } }]);return BaseFormatter;}();exports.Formatter = BaseFormatter;

var RE_TOKEN_LIST_VALUE = /^(?:\d)+/;
var RE_TOKEN_NAMED_VALUE = /^(?:\w)+/;
function parse(format, _ref) {var _ref2 = _slicedToArray(_ref, 2),startDelimiter = _ref2[0],endDelimiter = _ref2[1];
  var tokens = [];
  var position = 0;
  var text = '';
  while (position < format.length) {
    var char = format[position++];
    if (char === startDelimiter) {
      if (text) {
        tokens.push({ type: 'text', value: text });
      }
      text = '';
      var sub = '';
      char = format[position++];
      while (char !== undefined && char !== endDelimiter) {
        sub += char;
        char = format[position++];
      }
      var isClosed = char === endDelimiter;
      var type = RE_TOKEN_LIST_VALUE.test(sub) ?
      'list' :
      isClosed && RE_TOKEN_NAMED_VALUE.test(sub) ?
      'named' :
      'unknown';
      tokens.push({ value: sub, type: type });
    }
    //  else if (char === '%') {
    //   // when found rails i18n syntax, skip text capture
    //   if (format[position] !== '{') {
    //     text += char
    //   }
    // }
    else {
        text += char;
      }
  }
  text && tokens.push({ type: 'text', value: text });
  return tokens;
}
function compile(tokens, values) {
  var compiled = [];
  var index = 0;
  var mode = isArray(values) ?
  'list' :
  isObject(values) ?
  'named' :
  'unknown';
  if (mode === 'unknown') {
    return compiled;
  }
  while (index < tokens.length) {
    var token = tokens[index];
    switch (token.type) {
      case 'text':
        compiled.push(token.value);
        break;
      case 'list':
        compiled.push(values[parseInt(token.value, 10)]);
        break;
      case 'named':
        if (mode === 'named') {
          compiled.push(values[token.value]);
        } else
        {
          if (true) {
            console.warn("Type of token '".concat(token.type, "' and format of value '").concat(mode, "' don't match!"));
          }
        }
        break;
      case 'unknown':
        if (true) {
          console.warn("Detect 'unknown' type of token!");
        }
        break;}

    index++;
  }
  return compiled;
}

var LOCALE_ZH_HANS = 'zh-Hans';exports.LOCALE_ZH_HANS = LOCALE_ZH_HANS;
var LOCALE_ZH_HANT = 'zh-Hant';exports.LOCALE_ZH_HANT = LOCALE_ZH_HANT;
var LOCALE_EN = 'en';exports.LOCALE_EN = LOCALE_EN;
var LOCALE_FR = 'fr';exports.LOCALE_FR = LOCALE_FR;
var LOCALE_ES = 'es';exports.LOCALE_ES = LOCALE_ES;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var hasOwn = function hasOwn(val, key) {return hasOwnProperty.call(val, key);};
var defaultFormatter = new BaseFormatter();
function include(str, parts) {
  return !!parts.find(function (part) {return str.indexOf(part) !== -1;});
}
function startsWith(str, parts) {
  return parts.find(function (part) {return str.indexOf(part) === 0;});
}
function normalizeLocale(locale, messages) {
  if (!locale) {
    return;
  }
  locale = locale.trim().replace(/_/g, '-');
  if (messages && messages[locale]) {
    return locale;
  }
  locale = locale.toLowerCase();
  if (locale.indexOf('zh') === 0) {
    if (locale.indexOf('-hans') > -1) {
      return LOCALE_ZH_HANS;
    }
    if (locale.indexOf('-hant') > -1) {
      return LOCALE_ZH_HANT;
    }
    if (include(locale, ['-tw', '-hk', '-mo', '-cht'])) {
      return LOCALE_ZH_HANT;
    }
    return LOCALE_ZH_HANS;
  }
  var lang = startsWith(locale, [LOCALE_EN, LOCALE_FR, LOCALE_ES]);
  if (lang) {
    return lang;
  }
}var
I18n = /*#__PURE__*/function () {
  function I18n(_ref3) {var locale = _ref3.locale,fallbackLocale = _ref3.fallbackLocale,messages = _ref3.messages,watcher = _ref3.watcher,formater = _ref3.formater;_classCallCheck(this, I18n);
    this.locale = LOCALE_EN;
    this.fallbackLocale = LOCALE_EN;
    this.message = {};
    this.messages = {};
    this.watchers = [];
    if (fallbackLocale) {
      this.fallbackLocale = fallbackLocale;
    }
    this.formater = formater || defaultFormatter;
    this.messages = messages || {};
    this.setLocale(locale || LOCALE_EN);
    if (watcher) {
      this.watchLocale(watcher);
    }
  }_createClass(I18n, [{ key: "setLocale", value: function setLocale(
    locale) {var _this = this;
      var oldLocale = this.locale;
      this.locale = normalizeLocale(locale, this.messages) || this.fallbackLocale;
      if (!this.messages[this.locale]) {
        // 可能初始化时不存在
        this.messages[this.locale] = {};
      }
      this.message = this.messages[this.locale];
      // 仅发生变化时，通知
      if (oldLocale !== this.locale) {
        this.watchers.forEach(function (watcher) {
          watcher(_this.locale, oldLocale);
        });
      }
    } }, { key: "getLocale", value: function getLocale()
    {
      return this.locale;
    } }, { key: "watchLocale", value: function watchLocale(
    fn) {var _this2 = this;
      var index = this.watchers.push(fn) - 1;
      return function () {
        _this2.watchers.splice(index, 1);
      };
    } }, { key: "add", value: function add(
    locale, message) {var override = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      var curMessages = this.messages[locale];
      if (curMessages) {
        if (override) {
          Object.assign(curMessages, message);
        } else
        {
          Object.keys(message).forEach(function (key) {
            if (!hasOwn(curMessages, key)) {
              curMessages[key] = message[key];
            }
          });
        }
      } else
      {
        this.messages[locale] = message;
      }
    } }, { key: "f", value: function f(
    message, values, delimiters) {
      return this.formater.interpolate(message, values, delimiters).join('');
    } }, { key: "t", value: function t(
    key, locale, values) {
      var message = this.message;
      if (typeof locale === 'string') {
        locale = normalizeLocale(locale, this.messages);
        locale && (message = this.messages[locale]);
      } else
      {
        values = locale;
      }
      if (!hasOwn(message, key)) {
        console.warn("Cannot translate the value of keypath ".concat(key, ". Use the value of keypath as default."));
        return key;
      }
      return this.formater.interpolate(message[key], values).join('');
    } }]);return I18n;}();exports.I18n = I18n;


function watchAppLocale(appVm, i18n) {
  // 需要保证 watch 的触发在组件渲染之前
  if (appVm.$watchLocale) {
    // vue2
    appVm.$watchLocale(function (newLocale) {
      i18n.setLocale(newLocale);
    });
  } else
  {
    appVm.$watch(function () {return appVm.$locale;}, function (newLocale) {
      i18n.setLocale(newLocale);
    });
  }
}
function getDefaultLocale() {
  if (typeof uni !== 'undefined' && uni.getLocale) {
    return uni.getLocale();
  }
  // 小程序平台，uni 和 uni-i18n 互相引用，导致访问不到 uni，故在 global 上挂了 getLocale
  if (typeof global !== 'undefined' && global.getLocale) {
    return global.getLocale();
  }
  return LOCALE_EN;
}
function initVueI18n(locale) {var messages = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};var fallbackLocale = arguments.length > 2 ? arguments[2] : undefined;var watcher = arguments.length > 3 ? arguments[3] : undefined;
  // 兼容旧版本入参
  if (typeof locale !== 'string') {var _ref4 =
    [
    messages,
    locale];locale = _ref4[0];messages = _ref4[1];

  }
  if (typeof locale !== 'string') {
    // 因为小程序平台，uni-i18n 和 uni 互相引用，导致此时访问 uni 时，为 undefined
    locale = getDefaultLocale();
  }
  if (typeof fallbackLocale !== 'string') {
    fallbackLocale =
    typeof __uniConfig !== 'undefined' && __uniConfig.fallbackLocale ||
    LOCALE_EN;
  }
  var i18n = new I18n({
    locale: locale,
    fallbackLocale: fallbackLocale,
    messages: messages,
    watcher: watcher });

  var _t = function t(key, values) {
    if (typeof getApp !== 'function') {
      // app view
      /* eslint-disable no-func-assign */
      _t = function t(key, values) {
        return i18n.t(key, values);
      };
    } else
    {
      var isWatchedAppLocale = false;
      _t = function t(key, values) {
        var appVm = getApp().$vm;
        // 可能$vm还不存在，比如在支付宝小程序中，组件定义较早，在props的default里使用了t()函数（如uni-goods-nav），此时app还未初始化
        // options: {
        // 	type: Array,
        // 	default () {
        // 		return [{
        // 			icon: 'shop',
        // 			text: t("uni-goods-nav.options.shop"),
        // 		}, {
        // 			icon: 'cart',
        // 			text: t("uni-goods-nav.options.cart")
        // 		}]
        // 	}
        // },
        if (appVm) {
          // 触发响应式
          appVm.$locale;
          if (!isWatchedAppLocale) {
            isWatchedAppLocale = true;
            watchAppLocale(appVm, i18n);
          }
        }
        return i18n.t(key, values);
      };
    }
    return _t(key, values);
  };
  return {
    i18n: i18n,
    f: function f(message, values, delimiters) {
      return i18n.f(message, values, delimiters);
    },
    t: function t(key, values) {
      return _t(key, values);
    },
    add: function add(locale, message) {var override = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      return i18n.add(locale, message, override);
    },
    watch: function watch(fn) {
      return i18n.watchLocale(fn);
    },
    getLocale: function getLocale() {
      return i18n.getLocale();
    },
    setLocale: function setLocale(newLocale) {
      return i18n.setLocale(newLocale);
    } };

}

var isString = function isString(val) {return typeof val === 'string';};exports.isString = isString;
var formater;
function hasI18nJson(jsonObj, delimiters) {
  if (!formater) {
    formater = new BaseFormatter();
  }
  return walkJsonObj(jsonObj, function (jsonObj, key) {
    var value = jsonObj[key];
    if (isString(value)) {
      if (isI18nStr(value, delimiters)) {
        return true;
      }
    } else
    {
      return hasI18nJson(value, delimiters);
    }
  });
}
function parseI18nJson(jsonObj, values, delimiters) {
  if (!formater) {
    formater = new BaseFormatter();
  }
  walkJsonObj(jsonObj, function (jsonObj, key) {
    var value = jsonObj[key];
    if (isString(value)) {
      if (isI18nStr(value, delimiters)) {
        jsonObj[key] = compileStr(value, values, delimiters);
      }
    } else
    {
      parseI18nJson(value, values, delimiters);
    }
  });
  return jsonObj;
}
function compileI18nJsonStr(jsonStr, _ref5) {var locale = _ref5.locale,locales = _ref5.locales,delimiters = _ref5.delimiters;
  if (!isI18nStr(jsonStr, delimiters)) {
    return jsonStr;
  }
  if (!formater) {
    formater = new BaseFormatter();
  }
  var localeValues = [];
  Object.keys(locales).forEach(function (name) {
    if (name !== locale) {
      localeValues.push({
        locale: name,
        values: locales[name] });

    }
  });
  localeValues.unshift({ locale: locale, values: locales[locale] });
  try {
    return JSON.stringify(compileJsonObj(JSON.parse(jsonStr), localeValues, delimiters), null, 2);
  }
  catch (e) {}
  return jsonStr;
}
function isI18nStr(value, delimiters) {
  return value.indexOf(delimiters[0]) > -1;
}
function compileStr(value, values, delimiters) {
  return formater.interpolate(value, values, delimiters).join('');
}
function compileValue(jsonObj, key, localeValues, delimiters) {
  var value = jsonObj[key];
  if (isString(value)) {
    // 存在国际化
    if (isI18nStr(value, delimiters)) {
      jsonObj[key] = compileStr(value, localeValues[0].values, delimiters);
      if (localeValues.length > 1) {
        // 格式化国际化语言
        var valueLocales = jsonObj[key + 'Locales'] = {};
        localeValues.forEach(function (localValue) {
          valueLocales[localValue.locale] = compileStr(value, localValue.values, delimiters);
        });
      }
    }
  } else
  {
    compileJsonObj(value, localeValues, delimiters);
  }
}
function compileJsonObj(jsonObj, localeValues, delimiters) {
  walkJsonObj(jsonObj, function (jsonObj, key) {
    compileValue(jsonObj, key, localeValues, delimiters);
  });
  return jsonObj;
}
function walkJsonObj(jsonObj, walk) {
  if (isArray(jsonObj)) {
    for (var i = 0; i < jsonObj.length; i++) {
      if (walk(jsonObj, i)) {
        return true;
      }
    }
  } else
  if (isObject(jsonObj)) {
    for (var key in jsonObj) {
      if (walk(jsonObj, key)) {
        return true;
      }
    }
  }
  return false;
}

function resolveLocale(locales) {
  return function (locale) {
    if (!locale) {
      return locale;
    }
    locale = normalizeLocale(locale) || locale;
    return resolveLocaleChain(locale).find(function (locale) {return locales.indexOf(locale) > -1;});
  };
}
function resolveLocaleChain(locale) {
  var chain = [];
  var tokens = locale.split('-');
  while (tokens.length) {
    chain.push(tokens.join('-'));
    tokens.pop();
  }
  return chain;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"], __webpack_require__(/*! ./../../../webpack/buildin/global.js */ 2)))

/***/ }),

/***/ 30:
/*!*******************************************************************************!*\
  !*** C:/Users/luyus/Desktop/baoyun-mansion/uview-ui/libs/function/addUnit.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = addUnit;var _test = _interopRequireDefault(__webpack_require__(/*! ./test.js */ 17));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

// 添加单位，如果有rpx，%，px等单位结尾或者值为auto，直接返回，否则加上rpx单位结尾
function addUnit() {var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'auto';var unit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'rpx';
  value = String(value);
  // 用uView内置验证规则中的number判断是否为数值
  return _test.default.number(value) ? "".concat(value).concat(unit) : value;
}

/***/ }),

/***/ 302:
/*!********************************************************************!*\
  !*** C:/Users/luyus/Desktop/baoyun-mansion/static/renxiang_bg.png ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ 303:
/*!******************************************************************!*\
  !*** C:/Users/luyus/Desktop/baoyun-mansion/static/guohui_bg.png ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ 31:
/*!******************************************************************************!*\
  !*** C:/Users/luyus/Desktop/baoyun-mansion/uview-ui/libs/function/random.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;function random(min, max) {
  if (min >= 0 && max > 0 && max >= min) {
    var gab = max - min + 1;
    return Math.floor(Math.random() * gab + min);
  } else {
    return 0;
  }
}var _default =

random;exports.default = _default;

/***/ }),

/***/ 32:
/*!****************************************************************************!*\
  !*** C:/Users/luyus/Desktop/baoyun-mansion/uview-ui/libs/function/trim.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;function trim(str) {var pos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'both';
  if (pos == 'both') {
    return str.replace(/^\s+|\s+$/g, "");
  } else if (pos == "left") {
    return str.replace(/^\s*/, '');
  } else if (pos == 'right') {
    return str.replace(/(\s*$)/g, "");
  } else if (pos == 'all') {
    return str.replace(/\s+/g, "");
  } else {
    return str;
  }
}var _default =

trim;exports.default = _default;

/***/ }),

/***/ 33:
/*!*****************************************************************************!*\
  !*** C:/Users/luyus/Desktop/baoyun-mansion/uview-ui/libs/function/toast.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;function toast(title) {var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1500;
  uni.showToast({
    title: title,
    icon: 'none',
    duration: duration });

}var _default =

toast;exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 34:
/*!*********************************************************************************!*\
  !*** C:/Users/luyus/Desktop/baoyun-mansion/uview-ui/libs/function/getParent.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = getParent; // 获取父组件的参数，因为支付宝小程序不支持provide/inject的写法
// this.$parent在非H5中，可以准确获取到父组件，但是在H5中，需要多次this.$parent.$parent.xxx
function getParent(name, keys) {
  var parent = this.$parent;
  // 通过while历遍，这里主要是为了H5需要多层解析的问题
  while (parent) {
    // 父组件
    if (parent.$options.name !== name) {
      // 如果组件的name不相等，继续上一级寻找
      parent = parent.$parent;
    } else {var _ret = function () {
        var data = {};
        // 判断keys是否数组，如果传过来的是一个数组，那么直接使用数组元素值当做键值去父组件寻找
        if (Array.isArray(keys)) {
          keys.map(function (val) {
            data[val] = parent[val] ? parent[val] : '';
          });
        } else {
          // 历遍传过来的对象参数
          for (var i in keys) {
            // 如果子组件有此值则用，无此值则用父组件的值
            // 判断是否空数组，如果是，则用父组件的值，否则用子组件的值
            if (Array.isArray(keys[i])) {
              if (keys[i].length) {
                data[i] = keys[i];
              } else {
                data[i] = parent[i];
              }
            } else if (keys[i].constructor === Object) {
              // 判断是否对象，如果是对象，且有属性，那么使用子组件的值，否则使用父组件的值
              if (Object.keys(keys[i]).length) {
                data[i] = keys[i];
              } else {
                data[i] = parent[i];
              }
            } else {
              // 只要子组件有传值，即使是false值，也是“传值”了，也需要覆盖父组件的同名参数
              data[i] = keys[i] || keys[i] === false ? keys[i] : parent[i];
            }
          }
        }
        return { v: data };}();if (typeof _ret === "object") return _ret.v;
    }
  }

  return {};
}

/***/ }),

/***/ 35:
/*!*******************************************************************************!*\
  !*** C:/Users/luyus/Desktop/baoyun-mansion/uview-ui/libs/function/$parent.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = $parent; // 获取父组件的参数，因为支付宝小程序不支持provide/inject的写法
// this.$parent在非H5中，可以准确获取到父组件，但是在H5中，需要多次this.$parent.$parent.xxx
// 这里默认值等于undefined有它的含义，因为最顶层元素(组件)的$parent就是undefined，意味着不传name
// 值(默认为undefined)，就是查找最顶层的$parent
function $parent() {var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
  var parent = this.$parent;
  // 通过while历遍，这里主要是为了H5需要多层解析的问题
  while (parent) {
    // 父组件
    if (parent.$options && parent.$options.name !== name) {
      // 如果组件的name不相等，继续上一级寻找
      parent = parent.$parent;
    } else {
      return parent;
    }
  }
  return false;
}

/***/ }),

/***/ 36:
/*!***************************************************************************!*\
  !*** C:/Users/luyus/Desktop/baoyun-mansion/uview-ui/libs/function/sys.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.os = os;exports.sys = sys;function os() {
  return uni.getSystemInfoSync().platform;
};

function sys() {
  return uni.getSystemInfoSync();
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 37:
/*!********************************************************************************!*\
  !*** C:/Users/luyus/Desktop/baoyun-mansion/uview-ui/libs/function/debounce.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var timeout = null;

/**
                                                                                                                         * 防抖原理：一定时间内，只有最后一次操作，再过wait毫秒后才执行函数
                                                                                                                         * 
                                                                                                                         * @param {Function} func 要执行的回调函数 
                                                                                                                         * @param {Number} wait 延时的时间
                                                                                                                         * @param {Boolean} immediate 是否立即执行 
                                                                                                                         * @return null
                                                                                                                         */
function debounce(func) {var wait = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;var immediate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  // 清除定时器
  if (timeout !== null) clearTimeout(timeout);
  // 立即执行，此类情况一般用不到
  if (immediate) {
    var callNow = !timeout;
    timeout = setTimeout(function () {
      timeout = null;
    }, wait);
    if (callNow) typeof func === 'function' && func();
  } else {
    // 设置定时器，当最后一次操作后，timeout不会再被清除，所以在延时wait毫秒后执行func回调方法
    timeout = setTimeout(function () {
      typeof func === 'function' && func();
    }, wait);
  }
}var _default =

debounce;exports.default = _default;

/***/ }),

/***/ 38:
/*!********************************************************************************!*\
  !*** C:/Users/luyus/Desktop/baoyun-mansion/uview-ui/libs/function/throttle.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var timer, flag;
/**
                                                                                                                      * 节流原理：在一定时间内，只能触发一次
                                                                                                                      * 
                                                                                                                      * @param {Function} func 要执行的回调函数 
                                                                                                                      * @param {Number} wait 延时的时间
                                                                                                                      * @param {Boolean} immediate 是否立即执行
                                                                                                                      * @return null
                                                                                                                      */
function throttle(func) {var wait = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;var immediate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  if (immediate) {
    if (!flag) {
      flag = true;
      // 如果是立即执行，则在wait毫秒内开始时执行
      typeof func === 'function' && func();
      timer = setTimeout(function () {
        flag = false;
      }, wait);
    }
  } else {
    if (!flag) {
      flag = true;
      // 如果是非立即执行，则在wait毫秒内的结束处执行
      timer = setTimeout(function () {
        flag = false;
        typeof func === 'function' && func();
      }, wait);
    }

  }
};var _default =
throttle;exports.default = _default;

/***/ }),

/***/ 39:
/*!****************************************************************************!*\
  !*** C:/Users/luyus/Desktop/baoyun-mansion/uview-ui/libs/config/config.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; // 此版本发布于2020-12-17
var version = '1.8.3';var _default =

{
  v: version,
  version: version,
  // 主题名称
  type: [
  'primary',
  'success',
  'info',
  'error',
  'warning'] };exports.default = _default;

/***/ }),

/***/ 4:
/*!******************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mp-vue/dist/mp.runtime.esm.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * Vue.js v2.6.11
 * (c) 2014-2022 Evan You
 * Released under the MIT License.
 */
/*  */

var emptyObject = Object.freeze({});

// These helpers produce better VM code in JS engines due to their
// explicitness and function inlining.
function isUndef (v) {
  return v === undefined || v === null
}

function isDef (v) {
  return v !== undefined && v !== null
}

function isTrue (v) {
  return v === true
}

function isFalse (v) {
  return v === false
}

/**
 * Check if value is primitive.
 */
function isPrimitive (value) {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    // $flow-disable-line
    typeof value === 'symbol' ||
    typeof value === 'boolean'
  )
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

/**
 * Get the raw type string of a value, e.g., [object Object].
 */
var _toString = Object.prototype.toString;

function toRawType (value) {
  return _toString.call(value).slice(8, -1)
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
function isPlainObject (obj) {
  return _toString.call(obj) === '[object Object]'
}

function isRegExp (v) {
  return _toString.call(v) === '[object RegExp]'
}

/**
 * Check if val is a valid array index.
 */
function isValidArrayIndex (val) {
  var n = parseFloat(String(val));
  return n >= 0 && Math.floor(n) === n && isFinite(val)
}

function isPromise (val) {
  return (
    isDef(val) &&
    typeof val.then === 'function' &&
    typeof val.catch === 'function'
  )
}

/**
 * Convert a value to a string that is actually rendered.
 */
function toString (val) {
  return val == null
    ? ''
    : Array.isArray(val) || (isPlainObject(val) && val.toString === _toString)
      ? JSON.stringify(val, null, 2)
      : String(val)
}

/**
 * Convert an input value to a number for persistence.
 * If the conversion fails, return original string.
 */
function toNumber (val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n
}

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
function makeMap (
  str,
  expectsLowerCase
) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase
    ? function (val) { return map[val.toLowerCase()]; }
    : function (val) { return map[val]; }
}

/**
 * Check if a tag is a built-in tag.
 */
var isBuiltInTag = makeMap('slot,component', true);

/**
 * Check if an attribute is a reserved attribute.
 */
var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');

/**
 * Remove an item from an array.
 */
function remove (arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

/**
 * Check whether an object has the property.
 */
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn (obj, key) {
  return hasOwnProperty.call(obj, key)
}

/**
 * Create a cached version of a pure function.
 */
function cached (fn) {
  var cache = Object.create(null);
  return (function cachedFn (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str))
  })
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
});

/**
 * Capitalize a string.
 */
var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
});

/**
 * Hyphenate a camelCase string.
 */
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cached(function (str) {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
});

/**
 * Simple bind polyfill for environments that do not support it,
 * e.g., PhantomJS 1.x. Technically, we don't need this anymore
 * since native bind is now performant enough in most browsers.
 * But removing it would mean breaking code that was able to run in
 * PhantomJS 1.x, so this must be kept for backward compatibility.
 */

/* istanbul ignore next */
function polyfillBind (fn, ctx) {
  function boundFn (a) {
    var l = arguments.length;
    return l
      ? l > 1
        ? fn.apply(ctx, arguments)
        : fn.call(ctx, a)
      : fn.call(ctx)
  }

  boundFn._length = fn.length;
  return boundFn
}

function nativeBind (fn, ctx) {
  return fn.bind(ctx)
}

var bind = Function.prototype.bind
  ? nativeBind
  : polyfillBind;

/**
 * Convert an Array-like object to a real Array.
 */
function toArray (list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret
}

/**
 * Mix properties into target object.
 */
function extend (to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }
  return to
}

/**
 * Merge an Array of Objects into a single Object.
 */
function toObject (arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res
}

/* eslint-disable no-unused-vars */

/**
 * Perform no operation.
 * Stubbing args to make Flow happy without leaving useless transpiled code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/).
 */
function noop (a, b, c) {}

/**
 * Always return false.
 */
var no = function (a, b, c) { return false; };

/* eslint-enable no-unused-vars */

/**
 * Return the same value.
 */
var identity = function (_) { return _; };

/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */
function looseEqual (a, b) {
  if (a === b) { return true }
  var isObjectA = isObject(a);
  var isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    try {
      var isArrayA = Array.isArray(a);
      var isArrayB = Array.isArray(b);
      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every(function (e, i) {
          return looseEqual(e, b[i])
        })
      } else if (a instanceof Date && b instanceof Date) {
        return a.getTime() === b.getTime()
      } else if (!isArrayA && !isArrayB) {
        var keysA = Object.keys(a);
        var keysB = Object.keys(b);
        return keysA.length === keysB.length && keysA.every(function (key) {
          return looseEqual(a[key], b[key])
        })
      } else {
        /* istanbul ignore next */
        return false
      }
    } catch (e) {
      /* istanbul ignore next */
      return false
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}

/**
 * Return the first index at which a loosely equal value can be
 * found in the array (if value is a plain object, the array must
 * contain an object of the same shape), or -1 if it is not present.
 */
function looseIndexOf (arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) { return i }
  }
  return -1
}

/**
 * Ensure a function is called only once.
 */
function once (fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  }
}

var ASSET_TYPES = [
  'component',
  'directive',
  'filter'
];

var LIFECYCLE_HOOKS = [
  'beforeCreate',
  'created',
  'beforeMount',
  'mounted',
  'beforeUpdate',
  'updated',
  'beforeDestroy',
  'destroyed',
  'activated',
  'deactivated',
  'errorCaptured',
  'serverPrefetch'
];

/*  */



var config = ({
  /**
   * Option merge strategies (used in core/util/options)
   */
  // $flow-disable-line
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   */
  silent: false,

  /**
   * Show production mode tip message on boot?
   */
  productionTip: "development" !== 'production',

  /**
   * Whether to enable devtools
   */
  devtools: "development" !== 'production',

  /**
   * Whether to record perf
   */
  performance: false,

  /**
   * Error handler for watcher errors
   */
  errorHandler: null,

  /**
   * Warn handler for watcher warns
   */
  warnHandler: null,

  /**
   * Ignore certain custom elements
   */
  ignoredElements: [],

  /**
   * Custom user key aliases for v-on
   */
  // $flow-disable-line
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: no,

  /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
  isReservedAttr: no,

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: no,

  /**
   * Get the namespace of an element
   */
  getTagNamespace: noop,

  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: identity,

  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: no,

  /**
   * Perform updates asynchronously. Intended to be used by Vue Test Utils
   * This will significantly reduce performance if set to false.
   */
  async: true,

  /**
   * Exposed for legacy reasons
   */
  _lifecycleHooks: LIFECYCLE_HOOKS
});

/*  */

/**
 * unicode letters used for parsing html tags, component names and property paths.
 * using https://www.w3.org/TR/html53/semantics-scripting.html#potentialcustomelementname
 * skipping \u10000-\uEFFFF due to it freezing up PhantomJS
 */
var unicodeRegExp = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;

/**
 * Check if a string starts with $ or _
 */
function isReserved (str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F
}

/**
 * Define a property.
 */
function def (obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

/**
 * Parse simple path.
 */
var bailRE = new RegExp(("[^" + (unicodeRegExp.source) + ".$_\\d]"));
function parsePath (path) {
  if (bailRE.test(path)) {
    return
  }
  var segments = path.split('.');
  return function (obj) {
    for (var i = 0; i < segments.length; i++) {
      if (!obj) { return }
      obj = obj[segments[i]];
    }
    return obj
  }
}

/*  */

// can we use __proto__?
var hasProto = '__proto__' in {};

// Browser environment sniffing
var inBrowser = typeof window !== 'undefined';
var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
var isAndroid = (UA && UA.indexOf('android') > 0) || (weexPlatform === 'android');
var isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || (weexPlatform === 'ios');
var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;
var isPhantomJS = UA && /phantomjs/.test(UA);
var isFF = UA && UA.match(/firefox\/(\d+)/);

// Firefox has a "watch" function on Object.prototype...
var nativeWatch = ({}).watch;
if (inBrowser) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', ({
      get: function get () {
      }
    })); // https://github.com/facebook/flow/issues/285
    window.addEventListener('test-passive', null, opts);
  } catch (e) {}
}

// this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV
var _isServer;
var isServerRendering = function () {
  if (_isServer === undefined) {
    /* istanbul ignore if */
    if (!inBrowser && !inWeex && typeof global !== 'undefined') {
      // detect presence of vue-server-renderer and avoid
      // Webpack shimming the process
      _isServer = global['process'] && global['process'].env.VUE_ENV === 'server';
    } else {
      _isServer = false;
    }
  }
  return _isServer
};

// detect devtools
var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

/* istanbul ignore next */
function isNative (Ctor) {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
}

var hasSymbol =
  typeof Symbol !== 'undefined' && isNative(Symbol) &&
  typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

var _Set;
/* istanbul ignore if */ // $flow-disable-line
if (typeof Set !== 'undefined' && isNative(Set)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = /*@__PURE__*/(function () {
    function Set () {
      this.set = Object.create(null);
    }
    Set.prototype.has = function has (key) {
      return this.set[key] === true
    };
    Set.prototype.add = function add (key) {
      this.set[key] = true;
    };
    Set.prototype.clear = function clear () {
      this.set = Object.create(null);
    };

    return Set;
  }());
}

/*  */

var warn = noop;
var tip = noop;
var generateComponentTrace = (noop); // work around flow check
var formatComponentName = (noop);

if (true) {
  var hasConsole = typeof console !== 'undefined';
  var classifyRE = /(?:^|[-_])(\w)/g;
  var classify = function (str) { return str
    .replace(classifyRE, function (c) { return c.toUpperCase(); })
    .replace(/[-_]/g, ''); };

  warn = function (msg, vm) {
    var trace = vm ? generateComponentTrace(vm) : '';

    if (config.warnHandler) {
      config.warnHandler.call(null, msg, vm, trace);
    } else if (hasConsole && (!config.silent)) {
      console.error(("[Vue warn]: " + msg + trace));
    }
  };

  tip = function (msg, vm) {
    if (hasConsole && (!config.silent)) {
      console.warn("[Vue tip]: " + msg + (
        vm ? generateComponentTrace(vm) : ''
      ));
    }
  };

  formatComponentName = function (vm, includeFile) {
    if (vm.$root === vm) {
      if (vm.$options && vm.$options.__file) { // fixed by xxxxxx
        return ('') + vm.$options.__file
      }
      return '<Root>'
    }
    var options = typeof vm === 'function' && vm.cid != null
      ? vm.options
      : vm._isVue
        ? vm.$options || vm.constructor.options
        : vm;
    var name = options.name || options._componentTag;
    var file = options.__file;
    if (!name && file) {
      var match = file.match(/([^/\\]+)\.vue$/);
      name = match && match[1];
    }

    return (
      (name ? ("<" + (classify(name)) + ">") : "<Anonymous>") +
      (file && includeFile !== false ? (" at " + file) : '')
    )
  };

  var repeat = function (str, n) {
    var res = '';
    while (n) {
      if (n % 2 === 1) { res += str; }
      if (n > 1) { str += str; }
      n >>= 1;
    }
    return res
  };

  generateComponentTrace = function (vm) {
    if (vm._isVue && vm.$parent) {
      var tree = [];
      var currentRecursiveSequence = 0;
      while (vm && vm.$options.name !== 'PageBody') {
        if (tree.length > 0) {
          var last = tree[tree.length - 1];
          if (last.constructor === vm.constructor) {
            currentRecursiveSequence++;
            vm = vm.$parent;
            continue
          } else if (currentRecursiveSequence > 0) {
            tree[tree.length - 1] = [last, currentRecursiveSequence];
            currentRecursiveSequence = 0;
          }
        }
        !vm.$options.isReserved && tree.push(vm);
        vm = vm.$parent;
      }
      return '\n\nfound in\n\n' + tree
        .map(function (vm, i) { return ("" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm)
            ? ((formatComponentName(vm[0])) + "... (" + (vm[1]) + " recursive calls)")
            : formatComponentName(vm))); })
        .join('\n')
    } else {
      return ("\n\n(found in " + (formatComponentName(vm)) + ")")
    }
  };
}

/*  */

var uid = 0;

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
var Dep = function Dep () {
  this.id = uid++;
  this.subs = [];
};

Dep.prototype.addSub = function addSub (sub) {
  this.subs.push(sub);
};

Dep.prototype.removeSub = function removeSub (sub) {
  remove(this.subs, sub);
};

Dep.prototype.depend = function depend () {
  if (Dep.SharedObject.target) {
    Dep.SharedObject.target.addDep(this);
  }
};

Dep.prototype.notify = function notify () {
  // stabilize the subscriber list first
  var subs = this.subs.slice();
  if ( true && !config.async) {
    // subs aren't sorted in scheduler if not running async
    // we need to sort them now to make sure they fire in correct
    // order
    subs.sort(function (a, b) { return a.id - b.id; });
  }
  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
};

// The current target watcher being evaluated.
// This is globally unique because only one watcher
// can be evaluated at a time.
// fixed by xxxxxx (nvue shared vuex)
/* eslint-disable no-undef */
Dep.SharedObject = {};
Dep.SharedObject.target = null;
Dep.SharedObject.targetStack = [];

function pushTarget (target) {
  Dep.SharedObject.targetStack.push(target);
  Dep.SharedObject.target = target;
  Dep.target = target;
}

function popTarget () {
  Dep.SharedObject.targetStack.pop();
  Dep.SharedObject.target = Dep.SharedObject.targetStack[Dep.SharedObject.targetStack.length - 1];
  Dep.target = Dep.SharedObject.target;
}

/*  */

var VNode = function VNode (
  tag,
  data,
  children,
  text,
  elm,
  context,
  componentOptions,
  asyncFactory
) {
  this.tag = tag;
  this.data = data;
  this.children = children;
  this.text = text;
  this.elm = elm;
  this.ns = undefined;
  this.context = context;
  this.fnContext = undefined;
  this.fnOptions = undefined;
  this.fnScopeId = undefined;
  this.key = data && data.key;
  this.componentOptions = componentOptions;
  this.componentInstance = undefined;
  this.parent = undefined;
  this.raw = false;
  this.isStatic = false;
  this.isRootInsert = true;
  this.isComment = false;
  this.isCloned = false;
  this.isOnce = false;
  this.asyncFactory = asyncFactory;
  this.asyncMeta = undefined;
  this.isAsyncPlaceholder = false;
};

var prototypeAccessors = { child: { configurable: true } };

// DEPRECATED: alias for componentInstance for backwards compat.
/* istanbul ignore next */
prototypeAccessors.child.get = function () {
  return this.componentInstance
};

Object.defineProperties( VNode.prototype, prototypeAccessors );

var createEmptyVNode = function (text) {
  if ( text === void 0 ) text = '';

  var node = new VNode();
  node.text = text;
  node.isComment = true;
  return node
};

function createTextVNode (val) {
  return new VNode(undefined, undefined, undefined, String(val))
}

// optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.
function cloneVNode (vnode) {
  var cloned = new VNode(
    vnode.tag,
    vnode.data,
    // #7975
    // clone children array to avoid mutating original in case of cloning
    // a child.
    vnode.children && vnode.children.slice(),
    vnode.text,
    vnode.elm,
    vnode.context,
    vnode.componentOptions,
    vnode.asyncFactory
  );
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isComment = vnode.isComment;
  cloned.fnContext = vnode.fnContext;
  cloned.fnOptions = vnode.fnOptions;
  cloned.fnScopeId = vnode.fnScopeId;
  cloned.asyncMeta = vnode.asyncMeta;
  cloned.isCloned = true;
  return cloned
}

/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);

var methodsToPatch = [
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
];

/**
 * Intercept mutating methods and emit events
 */
methodsToPatch.forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args;
        break
      case 'splice':
        inserted = args.slice(2);
        break
    }
    if (inserted) { ob.observeArray(inserted); }
    // notify change
    ob.dep.notify();
    return result
  });
});

/*  */

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

/**
 * In some cases we may want to disable observation inside a component's
 * update computation.
 */
var shouldObserve = true;

function toggleObserving (value) {
  shouldObserve = value;
}

/**
 * Observer class that is attached to each observed
 * object. Once attached, the observer converts the target
 * object's property keys into getter/setters that
 * collect dependencies and dispatch updates.
 */
var Observer = function Observer (value) {
  this.value = value;
  this.dep = new Dep();
  this.vmCount = 0;
  def(value, '__ob__', this);
  if (Array.isArray(value)) {
    if (hasProto) {
      {// fixed by xxxxxx 微信小程序使用 plugins 之后，数组方法被直接挂载到了数组对象上，需要执行 copyAugment 逻辑
        if(value.push !== value.__proto__.push){
          copyAugment(value, arrayMethods, arrayKeys);
        } else {
          protoAugment(value, arrayMethods);
        }
      }
    } else {
      copyAugment(value, arrayMethods, arrayKeys);
    }
    this.observeArray(value);
  } else {
    this.walk(value);
  }
};

/**
 * Walk through all properties and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */
Observer.prototype.walk = function walk (obj) {
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    defineReactive$$1(obj, keys[i]);
  }
};

/**
 * Observe a list of Array items.
 */
Observer.prototype.observeArray = function observeArray (items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
};

// helpers

/**
 * Augment a target Object or Array by intercepting
 * the prototype chain using __proto__
 */
function protoAugment (target, src) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}

/**
 * Augment a target Object or Array by defining
 * hidden properties.
 */
/* istanbul ignore next */
function copyAugment (target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
function observe (value, asRootData) {
  if (!isObject(value) || value instanceof VNode) {
    return
  }
  var ob;
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (
    shouldObserve &&
    !isServerRendering() &&
    (Array.isArray(value) || isPlainObject(value)) &&
    Object.isExtensible(value) &&
    !value._isVue
  ) {
    ob = new Observer(value);
  }
  if (asRootData && ob) {
    ob.vmCount++;
  }
  return ob
}

/**
 * Define a reactive property on an Object.
 */
function defineReactive$$1 (
  obj,
  key,
  val,
  customSetter,
  shallow
) {
  var dep = new Dep();

  var property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return
  }

  // cater for pre-defined getter/setters
  var getter = property && property.get;
  var setter = property && property.set;
  if ((!getter || setter) && arguments.length === 2) {
    val = obj[key];
  }

  var childOb = !shallow && observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      var value = getter ? getter.call(obj) : val;
      if (Dep.SharedObject.target) { // fixed by xxxxxx
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
          if (Array.isArray(value)) {
            dependArray(value);
          }
        }
      }
      return value
    },
    set: function reactiveSetter (newVal) {
      var value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */
      if (newVal === value || (newVal !== newVal && value !== value)) {
        return
      }
      /* eslint-enable no-self-compare */
      if ( true && customSetter) {
        customSetter();
      }
      // #7981: for accessor properties without setter
      if (getter && !setter) { return }
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = !shallow && observe(newVal);
      dep.notify();
    }
  });
}

/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */
function set (target, key, val) {
  if ( true &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot set reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val
  }
  if (key in target && !(key in Object.prototype)) {
    target[key] = val;
    return val
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     true && warn(
      'Avoid adding reactive properties to a Vue instance or its root $data ' +
      'at runtime - declare it upfront in the data option.'
    );
    return val
  }
  if (!ob) {
    target[key] = val;
    return val
  }
  defineReactive$$1(ob.value, key, val);
  ob.dep.notify();
  return val
}

/**
 * Delete a property and trigger change if necessary.
 */
function del (target, key) {
  if ( true &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot delete reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.splice(key, 1);
    return
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     true && warn(
      'Avoid deleting properties on a Vue instance or its root $data ' +
      '- just set it to null.'
    );
    return
  }
  if (!hasOwn(target, key)) {
    return
  }
  delete target[key];
  if (!ob) {
    return
  }
  ob.dep.notify();
}

/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */
function dependArray (value) {
  for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();
    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}

/*  */

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */
var strats = config.optionMergeStrategies;

/**
 * Options with restrictions
 */
if (true) {
  strats.el = strats.propsData = function (parent, child, vm, key) {
    if (!vm) {
      warn(
        "option \"" + key + "\" can only be used during instance " +
        'creation with the `new` keyword.'
      );
    }
    return defaultStrat(parent, child)
  };
}

/**
 * Helper that recursively merges two data objects together.
 */
function mergeData (to, from) {
  if (!from) { return to }
  var key, toVal, fromVal;

  var keys = hasSymbol
    ? Reflect.ownKeys(from)
    : Object.keys(from);

  for (var i = 0; i < keys.length; i++) {
    key = keys[i];
    // in case the object is already observed...
    if (key === '__ob__') { continue }
    toVal = to[key];
    fromVal = from[key];
    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (
      toVal !== fromVal &&
      isPlainObject(toVal) &&
      isPlainObject(fromVal)
    ) {
      mergeData(toVal, fromVal);
    }
  }
  return to
}

/**
 * Data
 */
function mergeDataOrFn (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal
    }
    if (!parentVal) {
      return childVal
    }
    // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.
    return function mergedDataFn () {
      return mergeData(
        typeof childVal === 'function' ? childVal.call(this, this) : childVal,
        typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal
      )
    }
  } else {
    return function mergedInstanceDataFn () {
      // instance merge
      var instanceData = typeof childVal === 'function'
        ? childVal.call(vm, vm)
        : childVal;
      var defaultData = typeof parentVal === 'function'
        ? parentVal.call(vm, vm)
        : parentVal;
      if (instanceData) {
        return mergeData(instanceData, defaultData)
      } else {
        return defaultData
      }
    }
  }
}

strats.data = function (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    if (childVal && typeof childVal !== 'function') {
       true && warn(
        'The "data" option should be a function ' +
        'that returns a per-instance value in component ' +
        'definitions.',
        vm
      );

      return parentVal
    }
    return mergeDataOrFn(parentVal, childVal)
  }

  return mergeDataOrFn(parentVal, childVal, vm)
};

/**
 * Hooks and props are merged as arrays.
 */
function mergeHook (
  parentVal,
  childVal
) {
  var res = childVal
    ? parentVal
      ? parentVal.concat(childVal)
      : Array.isArray(childVal)
        ? childVal
        : [childVal]
    : parentVal;
  return res
    ? dedupeHooks(res)
    : res
}

function dedupeHooks (hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res
}

LIFECYCLE_HOOKS.forEach(function (hook) {
  strats[hook] = mergeHook;
});

/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */
function mergeAssets (
  parentVal,
  childVal,
  vm,
  key
) {
  var res = Object.create(parentVal || null);
  if (childVal) {
     true && assertObjectType(key, childVal, vm);
    return extend(res, childVal)
  } else {
    return res
  }
}

ASSET_TYPES.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});

/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */
strats.watch = function (
  parentVal,
  childVal,
  vm,
  key
) {
  // work around Firefox's Object.prototype.watch...
  if (parentVal === nativeWatch) { parentVal = undefined; }
  if (childVal === nativeWatch) { childVal = undefined; }
  /* istanbul ignore if */
  if (!childVal) { return Object.create(parentVal || null) }
  if (true) {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = {};
  extend(ret, parentVal);
  for (var key$1 in childVal) {
    var parent = ret[key$1];
    var child = childVal[key$1];
    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }
    ret[key$1] = parent
      ? parent.concat(child)
      : Array.isArray(child) ? child : [child];
  }
  return ret
};

/**
 * Other object hashes.
 */
strats.props =
strats.methods =
strats.inject =
strats.computed = function (
  parentVal,
  childVal,
  vm,
  key
) {
  if (childVal && "development" !== 'production') {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = Object.create(null);
  extend(ret, parentVal);
  if (childVal) { extend(ret, childVal); }
  return ret
};
strats.provide = mergeDataOrFn;

/**
 * Default strategy.
 */
var defaultStrat = function (parentVal, childVal) {
  return childVal === undefined
    ? parentVal
    : childVal
};

/**
 * Validate component names
 */
function checkComponents (options) {
  for (var key in options.components) {
    validateComponentName(key);
  }
}

function validateComponentName (name) {
  if (!new RegExp(("^[a-zA-Z][\\-\\.0-9_" + (unicodeRegExp.source) + "]*$")).test(name)) {
    warn(
      'Invalid component name: "' + name + '". Component names ' +
      'should conform to valid custom element name in html5 specification.'
    );
  }
  if (isBuiltInTag(name) || config.isReservedTag(name)) {
    warn(
      'Do not use built-in or reserved HTML elements as component ' +
      'id: ' + name
    );
  }
}

/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */
function normalizeProps (options, vm) {
  var props = options.props;
  if (!props) { return }
  var res = {};
  var i, val, name;
  if (Array.isArray(props)) {
    i = props.length;
    while (i--) {
      val = props[i];
      if (typeof val === 'string') {
        name = camelize(val);
        res[name] = { type: null };
      } else if (true) {
        warn('props must be strings when using array syntax.');
      }
    }
  } else if (isPlainObject(props)) {
    for (var key in props) {
      val = props[key];
      name = camelize(key);
      res[name] = isPlainObject(val)
        ? val
        : { type: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"props\": expected an Array or an Object, " +
      "but got " + (toRawType(props)) + ".",
      vm
    );
  }
  options.props = res;
}

/**
 * Normalize all injections into Object-based format
 */
function normalizeInject (options, vm) {
  var inject = options.inject;
  if (!inject) { return }
  var normalized = options.inject = {};
  if (Array.isArray(inject)) {
    for (var i = 0; i < inject.length; i++) {
      normalized[inject[i]] = { from: inject[i] };
    }
  } else if (isPlainObject(inject)) {
    for (var key in inject) {
      var val = inject[key];
      normalized[key] = isPlainObject(val)
        ? extend({ from: key }, val)
        : { from: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"inject\": expected an Array or an Object, " +
      "but got " + (toRawType(inject)) + ".",
      vm
    );
  }
}

/**
 * Normalize raw function directives into object format.
 */
function normalizeDirectives (options) {
  var dirs = options.directives;
  if (dirs) {
    for (var key in dirs) {
      var def$$1 = dirs[key];
      if (typeof def$$1 === 'function') {
        dirs[key] = { bind: def$$1, update: def$$1 };
      }
    }
  }
}

function assertObjectType (name, value, vm) {
  if (!isPlainObject(value)) {
    warn(
      "Invalid value for option \"" + name + "\": expected an Object, " +
      "but got " + (toRawType(value)) + ".",
      vm
    );
  }
}

/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */
function mergeOptions (
  parent,
  child,
  vm
) {
  if (true) {
    checkComponents(child);
  }

  if (typeof child === 'function') {
    child = child.options;
  }

  normalizeProps(child, vm);
  normalizeInject(child, vm);
  normalizeDirectives(child);

  // Apply extends and mixins on the child options,
  // but only if it is a raw options object that isn't
  // the result of another mergeOptions call.
  // Only merged options has the _base property.
  if (!child._base) {
    if (child.extends) {
      parent = mergeOptions(parent, child.extends, vm);
    }
    if (child.mixins) {
      for (var i = 0, l = child.mixins.length; i < l; i++) {
        parent = mergeOptions(parent, child.mixins[i], vm);
      }
    }
  }

  var options = {};
  var key;
  for (key in parent) {
    mergeField(key);
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }
  function mergeField (key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }
  return options
}

/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */
function resolveAsset (
  options,
  type,
  id,
  warnMissing
) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return
  }
  var assets = options[type];
  // check local registration variations first
  if (hasOwn(assets, id)) { return assets[id] }
  var camelizedId = camelize(id);
  if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
  var PascalCaseId = capitalize(camelizedId);
  if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
  // fallback to prototype chain
  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
  if ( true && warnMissing && !res) {
    warn(
      'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
      options
    );
  }
  return res
}

/*  */



function validateProp (
  key,
  propOptions,
  propsData,
  vm
) {
  var prop = propOptions[key];
  var absent = !hasOwn(propsData, key);
  var value = propsData[key];
  // boolean casting
  var booleanIndex = getTypeIndex(Boolean, prop.type);
  if (booleanIndex > -1) {
    if (absent && !hasOwn(prop, 'default')) {
      value = false;
    } else if (value === '' || value === hyphenate(key)) {
      // only cast empty string / same name to boolean if
      // boolean has higher priority
      var stringIndex = getTypeIndex(String, prop.type);
      if (stringIndex < 0 || booleanIndex < stringIndex) {
        value = true;
      }
    }
  }
  // check default value
  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key);
    // since the default value is a fresh copy,
    // make sure to observe it.
    var prevShouldObserve = shouldObserve;
    toggleObserving(true);
    observe(value);
    toggleObserving(prevShouldObserve);
  }
  if (
    true
  ) {
    assertProp(prop, key, value, vm, absent);
  }
  return value
}

/**
 * Get the default value of a prop.
 */
function getPropDefaultValue (vm, prop, key) {
  // no default, return undefined
  if (!hasOwn(prop, 'default')) {
    return undefined
  }
  var def = prop.default;
  // warn against non-factory defaults for Object & Array
  if ( true && isObject(def)) {
    warn(
      'Invalid default value for prop "' + key + '": ' +
      'Props with type Object/Array must use a factory function ' +
      'to return the default value.',
      vm
    );
  }
  // the raw prop value was also undefined from previous render,
  // return previous default value to avoid unnecessary watcher trigger
  if (vm && vm.$options.propsData &&
    vm.$options.propsData[key] === undefined &&
    vm._props[key] !== undefined
  ) {
    return vm._props[key]
  }
  // call factory function for non-Function types
  // a value is Function if its prototype is function even across different execution context
  return typeof def === 'function' && getType(prop.type) !== 'Function'
    ? def.call(vm)
    : def
}

/**
 * Assert whether a prop is valid.
 */
function assertProp (
  prop,
  name,
  value,
  vm,
  absent
) {
  if (prop.required && absent) {
    warn(
      'Missing required prop: "' + name + '"',
      vm
    );
    return
  }
  if (value == null && !prop.required) {
    return
  }
  var type = prop.type;
  var valid = !type || type === true;
  var expectedTypes = [];
  if (type) {
    if (!Array.isArray(type)) {
      type = [type];
    }
    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = assertType(value, type[i]);
      expectedTypes.push(assertedType.expectedType || '');
      valid = assertedType.valid;
    }
  }

  if (!valid) {
    warn(
      getInvalidTypeMessage(name, value, expectedTypes),
      vm
    );
    return
  }
  var validator = prop.validator;
  if (validator) {
    if (!validator(value)) {
      warn(
        'Invalid prop: custom validator check failed for prop "' + name + '".',
        vm
      );
    }
  }
}

var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

function assertType (value, type) {
  var valid;
  var expectedType = getType(type);
  if (simpleCheckRE.test(expectedType)) {
    var t = typeof value;
    valid = t === expectedType.toLowerCase();
    // for primitive wrapper objects
    if (!valid && t === 'object') {
      valid = value instanceof type;
    }
  } else if (expectedType === 'Object') {
    valid = isPlainObject(value);
  } else if (expectedType === 'Array') {
    valid = Array.isArray(value);
  } else {
    valid = value instanceof type;
  }
  return {
    valid: valid,
    expectedType: expectedType
  }
}

/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */
function getType (fn) {
  var match = fn && fn.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : ''
}

function isSameType (a, b) {
  return getType(a) === getType(b)
}

function getTypeIndex (type, expectedTypes) {
  if (!Array.isArray(expectedTypes)) {
    return isSameType(expectedTypes, type) ? 0 : -1
  }
  for (var i = 0, len = expectedTypes.length; i < len; i++) {
    if (isSameType(expectedTypes[i], type)) {
      return i
    }
  }
  return -1
}

function getInvalidTypeMessage (name, value, expectedTypes) {
  var message = "Invalid prop: type check failed for prop \"" + name + "\"." +
    " Expected " + (expectedTypes.map(capitalize).join(', '));
  var expectedType = expectedTypes[0];
  var receivedType = toRawType(value);
  var expectedValue = styleValue(value, expectedType);
  var receivedValue = styleValue(value, receivedType);
  // check if we need to specify expected value
  if (expectedTypes.length === 1 &&
      isExplicable(expectedType) &&
      !isBoolean(expectedType, receivedType)) {
    message += " with value " + expectedValue;
  }
  message += ", got " + receivedType + " ";
  // check if we need to specify received value
  if (isExplicable(receivedType)) {
    message += "with value " + receivedValue + ".";
  }
  return message
}

function styleValue (value, type) {
  if (type === 'String') {
    return ("\"" + value + "\"")
  } else if (type === 'Number') {
    return ("" + (Number(value)))
  } else {
    return ("" + value)
  }
}

function isExplicable (value) {
  var explicitTypes = ['string', 'number', 'boolean'];
  return explicitTypes.some(function (elem) { return value.toLowerCase() === elem; })
}

function isBoolean () {
  var args = [], len = arguments.length;
  while ( len-- ) args[ len ] = arguments[ len ];

  return args.some(function (elem) { return elem.toLowerCase() === 'boolean'; })
}

/*  */

function handleError (err, vm, info) {
  // Deactivate deps tracking while processing error handler to avoid possible infinite rendering.
  // See: https://github.com/vuejs/vuex/issues/1505
  pushTarget();
  try {
    if (vm) {
      var cur = vm;
      while ((cur = cur.$parent)) {
        var hooks = cur.$options.errorCaptured;
        if (hooks) {
          for (var i = 0; i < hooks.length; i++) {
            try {
              var capture = hooks[i].call(cur, err, vm, info) === false;
              if (capture) { return }
            } catch (e) {
              globalHandleError(e, cur, 'errorCaptured hook');
            }
          }
        }
      }
    }
    globalHandleError(err, vm, info);
  } finally {
    popTarget();
  }
}

function invokeWithErrorHandling (
  handler,
  context,
  args,
  vm,
  info
) {
  var res;
  try {
    res = args ? handler.apply(context, args) : handler.call(context);
    if (res && !res._isVue && isPromise(res) && !res._handled) {
      res.catch(function (e) { return handleError(e, vm, info + " (Promise/async)"); });
      // issue #9511
      // avoid catch triggering multiple times when nested calls
      res._handled = true;
    }
  } catch (e) {
    handleError(e, vm, info);
  }
  return res
}

function globalHandleError (err, vm, info) {
  if (config.errorHandler) {
    try {
      return config.errorHandler.call(null, err, vm, info)
    } catch (e) {
      // if the user intentionally throws the original error in the handler,
      // do not log it twice
      if (e !== err) {
        logError(e, null, 'config.errorHandler');
      }
    }
  }
  logError(err, vm, info);
}

function logError (err, vm, info) {
  if (true) {
    warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
  }
  /* istanbul ignore else */
  if ((inBrowser || inWeex) && typeof console !== 'undefined') {
    console.error(err);
  } else {
    throw err
  }
}

/*  */

var callbacks = [];
var pending = false;

function flushCallbacks () {
  pending = false;
  var copies = callbacks.slice(0);
  callbacks.length = 0;
  for (var i = 0; i < copies.length; i++) {
    copies[i]();
  }
}

// Here we have async deferring wrappers using microtasks.
// In 2.5 we used (macro) tasks (in combination with microtasks).
// However, it has subtle problems when state is changed right before repaint
// (e.g. #6813, out-in transitions).
// Also, using (macro) tasks in event handler would cause some weird behaviors
// that cannot be circumvented (e.g. #7109, #7153, #7546, #7834, #8109).
// So we now use microtasks everywhere, again.
// A major drawback of this tradeoff is that there are some scenarios
// where microtasks have too high a priority and fire in between supposedly
// sequential events (e.g. #4521, #6690, which have workarounds)
// or even between bubbling of the same event (#6566).
var timerFunc;

// The nextTick behavior leverages the microtask queue, which can be accessed
// via either native Promise.then or MutationObserver.
// MutationObserver has wider support, however it is seriously bugged in
// UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
// completely stops working after triggering a few times... so, if native
// Promise is available, we will use it:
/* istanbul ignore next, $flow-disable-line */
if (typeof Promise !== 'undefined' && isNative(Promise)) {
  var p = Promise.resolve();
  timerFunc = function () {
    p.then(flushCallbacks);
    // In problematic UIWebViews, Promise.then doesn't completely break, but
    // it can get stuck in a weird state where callbacks are pushed into the
    // microtask queue but the queue isn't being flushed, until the browser
    // needs to do some other work, e.g. handle a timer. Therefore we can
    // "force" the microtask queue to be flushed by adding an empty timer.
    if (isIOS) { setTimeout(noop); }
  };
} else if (!isIE && typeof MutationObserver !== 'undefined' && (
  isNative(MutationObserver) ||
  // PhantomJS and iOS 7.x
  MutationObserver.toString() === '[object MutationObserverConstructor]'
)) {
  // Use MutationObserver where native Promise is not available,
  // e.g. PhantomJS, iOS7, Android 4.4
  // (#6466 MutationObserver is unreliable in IE11)
  var counter = 1;
  var observer = new MutationObserver(flushCallbacks);
  var textNode = document.createTextNode(String(counter));
  observer.observe(textNode, {
    characterData: true
  });
  timerFunc = function () {
    counter = (counter + 1) % 2;
    textNode.data = String(counter);
  };
} else if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
  // Fallback to setImmediate.
  // Technically it leverages the (macro) task queue,
  // but it is still a better choice than setTimeout.
  timerFunc = function () {
    setImmediate(flushCallbacks);
  };
} else {
  // Fallback to setTimeout.
  timerFunc = function () {
    setTimeout(flushCallbacks, 0);
  };
}

function nextTick (cb, ctx) {
  var _resolve;
  callbacks.push(function () {
    if (cb) {
      try {
        cb.call(ctx);
      } catch (e) {
        handleError(e, ctx, 'nextTick');
      }
    } else if (_resolve) {
      _resolve(ctx);
    }
  });
  if (!pending) {
    pending = true;
    timerFunc();
  }
  // $flow-disable-line
  if (!cb && typeof Promise !== 'undefined') {
    return new Promise(function (resolve) {
      _resolve = resolve;
    })
  }
}

/*  */

/* not type checking this file because flow doesn't play well with Proxy */

var initProxy;

if (true) {
  var allowedGlobals = makeMap(
    'Infinity,undefined,NaN,isFinite,isNaN,' +
    'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
    'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
    'require' // for Webpack/Browserify
  );

  var warnNonPresent = function (target, key) {
    warn(
      "Property or method \"" + key + "\" is not defined on the instance but " +
      'referenced during render. Make sure that this property is reactive, ' +
      'either in the data option, or for class-based components, by ' +
      'initializing the property. ' +
      'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.',
      target
    );
  };

  var warnReservedPrefix = function (target, key) {
    warn(
      "Property \"" + key + "\" must be accessed with \"$data." + key + "\" because " +
      'properties starting with "$" or "_" are not proxied in the Vue instance to ' +
      'prevent conflicts with Vue internals. ' +
      'See: https://vuejs.org/v2/api/#data',
      target
    );
  };

  var hasProxy =
    typeof Proxy !== 'undefined' && isNative(Proxy);

  if (hasProxy) {
    var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');
    config.keyCodes = new Proxy(config.keyCodes, {
      set: function set (target, key, value) {
        if (isBuiltInModifier(key)) {
          warn(("Avoid overwriting built-in modifier in config.keyCodes: ." + key));
          return false
        } else {
          target[key] = value;
          return true
        }
      }
    });
  }

  var hasHandler = {
    has: function has (target, key) {
      var has = key in target;
      var isAllowed = allowedGlobals(key) ||
        (typeof key === 'string' && key.charAt(0) === '_' && !(key in target.$data));
      if (!has && !isAllowed) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return has || !isAllowed
    }
  };

  var getHandler = {
    get: function get (target, key) {
      if (typeof key === 'string' && !(key in target)) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return target[key]
    }
  };

  initProxy = function initProxy (vm) {
    if (hasProxy) {
      // determine which proxy handler to use
      var options = vm.$options;
      var handlers = options.render && options.render._withStripped
        ? getHandler
        : hasHandler;
      vm._renderProxy = new Proxy(vm, handlers);
    } else {
      vm._renderProxy = vm;
    }
  };
}

/*  */

var seenObjects = new _Set();

/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */
function traverse (val) {
  _traverse(val, seenObjects);
  seenObjects.clear();
}

function _traverse (val, seen) {
  var i, keys;
  var isA = Array.isArray(val);
  if ((!isA && !isObject(val)) || Object.isFrozen(val) || val instanceof VNode) {
    return
  }
  if (val.__ob__) {
    var depId = val.__ob__.dep.id;
    if (seen.has(depId)) {
      return
    }
    seen.add(depId);
  }
  if (isA) {
    i = val.length;
    while (i--) { _traverse(val[i], seen); }
  } else {
    keys = Object.keys(val);
    i = keys.length;
    while (i--) { _traverse(val[keys[i]], seen); }
  }
}

var mark;
var measure;

if (true) {
  var perf = inBrowser && window.performance;
  /* istanbul ignore if */
  if (
    perf &&
    perf.mark &&
    perf.measure &&
    perf.clearMarks &&
    perf.clearMeasures
  ) {
    mark = function (tag) { return perf.mark(tag); };
    measure = function (name, startTag, endTag) {
      perf.measure(name, startTag, endTag);
      perf.clearMarks(startTag);
      perf.clearMarks(endTag);
      // perf.clearMeasures(name)
    };
  }
}

/*  */

var normalizeEvent = cached(function (name) {
  var passive = name.charAt(0) === '&';
  name = passive ? name.slice(1) : name;
  var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
  name = once$$1 ? name.slice(1) : name;
  var capture = name.charAt(0) === '!';
  name = capture ? name.slice(1) : name;
  return {
    name: name,
    once: once$$1,
    capture: capture,
    passive: passive
  }
});

function createFnInvoker (fns, vm) {
  function invoker () {
    var arguments$1 = arguments;

    var fns = invoker.fns;
    if (Array.isArray(fns)) {
      var cloned = fns.slice();
      for (var i = 0; i < cloned.length; i++) {
        invokeWithErrorHandling(cloned[i], null, arguments$1, vm, "v-on handler");
      }
    } else {
      // return handler return value for single handlers
      return invokeWithErrorHandling(fns, null, arguments, vm, "v-on handler")
    }
  }
  invoker.fns = fns;
  return invoker
}

function updateListeners (
  on,
  oldOn,
  add,
  remove$$1,
  createOnceHandler,
  vm
) {
  var name, def$$1, cur, old, event;
  for (name in on) {
    def$$1 = cur = on[name];
    old = oldOn[name];
    event = normalizeEvent(name);
    if (isUndef(cur)) {
       true && warn(
        "Invalid handler for event \"" + (event.name) + "\": got " + String(cur),
        vm
      );
    } else if (isUndef(old)) {
      if (isUndef(cur.fns)) {
        cur = on[name] = createFnInvoker(cur, vm);
      }
      if (isTrue(event.once)) {
        cur = on[name] = createOnceHandler(event.name, cur, event.capture);
      }
      add(event.name, cur, event.capture, event.passive, event.params);
    } else if (cur !== old) {
      old.fns = cur;
      on[name] = old;
    }
  }
  for (name in oldOn) {
    if (isUndef(on[name])) {
      event = normalizeEvent(name);
      remove$$1(event.name, oldOn[name], event.capture);
    }
  }
}

/*  */

/*  */

// fixed by xxxxxx (mp properties)
function extractPropertiesFromVNodeData(data, Ctor, res, context) {
  var propOptions = Ctor.options.mpOptions && Ctor.options.mpOptions.properties;
  if (isUndef(propOptions)) {
    return res
  }
  var externalClasses = Ctor.options.mpOptions.externalClasses || [];
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      var result = checkProp(res, props, key, altKey, true) ||
          checkProp(res, attrs, key, altKey, false);
      // externalClass
      if (
        result &&
        res[key] &&
        externalClasses.indexOf(altKey) !== -1 &&
        context[camelize(res[key])]
      ) {
        // 赋值 externalClass 真正的值(模板里 externalClass 的值可能是字符串)
        res[key] = context[camelize(res[key])];
      }
    }
  }
  return res
}

function extractPropsFromVNodeData (
  data,
  Ctor,
  tag,
  context// fixed by xxxxxx
) {
  // we are only extracting raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions = Ctor.options.props;
  if (isUndef(propOptions)) {
    // fixed by xxxxxx
    return extractPropertiesFromVNodeData(data, Ctor, {}, context)
  }
  var res = {};
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      if (true) {
        var keyInLowerCase = key.toLowerCase();
        if (
          key !== keyInLowerCase &&
          attrs && hasOwn(attrs, keyInLowerCase)
        ) {
          tip(
            "Prop \"" + keyInLowerCase + "\" is passed to component " +
            (formatComponentName(tag || Ctor)) + ", but the declared prop name is" +
            " \"" + key + "\". " +
            "Note that HTML attributes are case-insensitive and camelCased " +
            "props need to use their kebab-case equivalents when using in-DOM " +
            "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\"."
          );
        }
      }
      checkProp(res, props, key, altKey, true) ||
      checkProp(res, attrs, key, altKey, false);
    }
  }
  // fixed by xxxxxx
  return extractPropertiesFromVNodeData(data, Ctor, res, context)
}

function checkProp (
  res,
  hash,
  key,
  altKey,
  preserve
) {
  if (isDef(hash)) {
    if (hasOwn(hash, key)) {
      res[key] = hash[key];
      if (!preserve) {
        delete hash[key];
      }
      return true
    } else if (hasOwn(hash, altKey)) {
      res[key] = hash[altKey];
      if (!preserve) {
        delete hash[altKey];
      }
      return true
    }
  }
  return false
}

/*  */

// The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:

// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.
function simpleNormalizeChildren (children) {
  for (var i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children)
    }
  }
  return children
}

// 2. When the children contains constructs that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.
function normalizeChildren (children) {
  return isPrimitive(children)
    ? [createTextVNode(children)]
    : Array.isArray(children)
      ? normalizeArrayChildren(children)
      : undefined
}

function isTextNode (node) {
  return isDef(node) && isDef(node.text) && isFalse(node.isComment)
}

function normalizeArrayChildren (children, nestedIndex) {
  var res = [];
  var i, c, lastIndex, last;
  for (i = 0; i < children.length; i++) {
    c = children[i];
    if (isUndef(c) || typeof c === 'boolean') { continue }
    lastIndex = res.length - 1;
    last = res[lastIndex];
    //  nested
    if (Array.isArray(c)) {
      if (c.length > 0) {
        c = normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i));
        // merge adjacent text nodes
        if (isTextNode(c[0]) && isTextNode(last)) {
          res[lastIndex] = createTextVNode(last.text + (c[0]).text);
          c.shift();
        }
        res.push.apply(res, c);
      }
    } else if (isPrimitive(c)) {
      if (isTextNode(last)) {
        // merge adjacent text nodes
        // this is necessary for SSR hydration because text nodes are
        // essentially merged when rendered to HTML strings
        res[lastIndex] = createTextVNode(last.text + c);
      } else if (c !== '') {
        // convert primitive to vnode
        res.push(createTextVNode(c));
      }
    } else {
      if (isTextNode(c) && isTextNode(last)) {
        // merge adjacent text nodes
        res[lastIndex] = createTextVNode(last.text + c.text);
      } else {
        // default key for nested array children (likely generated by v-for)
        if (isTrue(children._isVList) &&
          isDef(c.tag) &&
          isUndef(c.key) &&
          isDef(nestedIndex)) {
          c.key = "__vlist" + nestedIndex + "_" + i + "__";
        }
        res.push(c);
      }
    }
  }
  return res
}

/*  */

function initProvide (vm) {
  var provide = vm.$options.provide;
  if (provide) {
    vm._provided = typeof provide === 'function'
      ? provide.call(vm)
      : provide;
  }
}

function initInjections (vm) {
  var result = resolveInject(vm.$options.inject, vm);
  if (result) {
    toggleObserving(false);
    Object.keys(result).forEach(function (key) {
      /* istanbul ignore else */
      if (true) {
        defineReactive$$1(vm, key, result[key], function () {
          warn(
            "Avoid mutating an injected value directly since the changes will be " +
            "overwritten whenever the provided component re-renders. " +
            "injection being mutated: \"" + key + "\"",
            vm
          );
        });
      } else {}
    });
    toggleObserving(true);
  }
}

function resolveInject (inject, vm) {
  if (inject) {
    // inject is :any because flow is not smart enough to figure out cached
    var result = Object.create(null);
    var keys = hasSymbol
      ? Reflect.ownKeys(inject)
      : Object.keys(inject);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      // #6574 in case the inject object is observed...
      if (key === '__ob__') { continue }
      var provideKey = inject[key].from;
      var source = vm;
      while (source) {
        if (source._provided && hasOwn(source._provided, provideKey)) {
          result[key] = source._provided[provideKey];
          break
        }
        source = source.$parent;
      }
      if (!source) {
        if ('default' in inject[key]) {
          var provideDefault = inject[key].default;
          result[key] = typeof provideDefault === 'function'
            ? provideDefault.call(vm)
            : provideDefault;
        } else if (true) {
          warn(("Injection \"" + key + "\" not found"), vm);
        }
      }
    }
    return result
  }
}

/*  */



/**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */
function resolveSlots (
  children,
  context
) {
  if (!children || !children.length) {
    return {}
  }
  var slots = {};
  for (var i = 0, l = children.length; i < l; i++) {
    var child = children[i];
    var data = child.data;
    // remove slot attribute if the node is resolved as a Vue slot node
    if (data && data.attrs && data.attrs.slot) {
      delete data.attrs.slot;
    }
    // named slots should only be respected if the vnode was rendered in the
    // same context.
    if ((child.context === context || child.fnContext === context) &&
      data && data.slot != null
    ) {
      var name = data.slot;
      var slot = (slots[name] || (slots[name] = []));
      if (child.tag === 'template') {
        slot.push.apply(slot, child.children || []);
      } else {
        slot.push(child);
      }
    } else {
      // fixed by xxxxxx 临时 hack 掉 uni-app 中的异步 name slot page
      if(child.asyncMeta && child.asyncMeta.data && child.asyncMeta.data.slot === 'page'){
        (slots['page'] || (slots['page'] = [])).push(child);
      }else{
        (slots.default || (slots.default = [])).push(child);
      }
    }
  }
  // ignore slots that contains only whitespace
  for (var name$1 in slots) {
    if (slots[name$1].every(isWhitespace)) {
      delete slots[name$1];
    }
  }
  return slots
}

function isWhitespace (node) {
  return (node.isComment && !node.asyncFactory) || node.text === ' '
}

/*  */

function normalizeScopedSlots (
  slots,
  normalSlots,
  prevSlots
) {
  var res;
  var hasNormalSlots = Object.keys(normalSlots).length > 0;
  var isStable = slots ? !!slots.$stable : !hasNormalSlots;
  var key = slots && slots.$key;
  if (!slots) {
    res = {};
  } else if (slots._normalized) {
    // fast path 1: child component re-render only, parent did not change
    return slots._normalized
  } else if (
    isStable &&
    prevSlots &&
    prevSlots !== emptyObject &&
    key === prevSlots.$key &&
    !hasNormalSlots &&
    !prevSlots.$hasNormal
  ) {
    // fast path 2: stable scoped slots w/ no normal slots to proxy,
    // only need to normalize once
    return prevSlots
  } else {
    res = {};
    for (var key$1 in slots) {
      if (slots[key$1] && key$1[0] !== '$') {
        res[key$1] = normalizeScopedSlot(normalSlots, key$1, slots[key$1]);
      }
    }
  }
  // expose normal slots on scopedSlots
  for (var key$2 in normalSlots) {
    if (!(key$2 in res)) {
      res[key$2] = proxyNormalSlot(normalSlots, key$2);
    }
  }
  // avoriaz seems to mock a non-extensible $scopedSlots object
  // and when that is passed down this would cause an error
  if (slots && Object.isExtensible(slots)) {
    (slots)._normalized = res;
  }
  def(res, '$stable', isStable);
  def(res, '$key', key);
  def(res, '$hasNormal', hasNormalSlots);
  return res
}

function normalizeScopedSlot(normalSlots, key, fn) {
  var normalized = function () {
    var res = arguments.length ? fn.apply(null, arguments) : fn({});
    res = res && typeof res === 'object' && !Array.isArray(res)
      ? [res] // single vnode
      : normalizeChildren(res);
    return res && (
      res.length === 0 ||
      (res.length === 1 && res[0].isComment) // #9658
    ) ? undefined
      : res
  };
  // this is a slot using the new v-slot syntax without scope. although it is
  // compiled as a scoped slot, render fn users would expect it to be present
  // on this.$slots because the usage is semantically a normal slot.
  if (fn.proxy) {
    Object.defineProperty(normalSlots, key, {
      get: normalized,
      enumerable: true,
      configurable: true
    });
  }
  return normalized
}

function proxyNormalSlot(slots, key) {
  return function () { return slots[key]; }
}

/*  */

/**
 * Runtime helper for rendering v-for lists.
 */
function renderList (
  val,
  render
) {
  var ret, i, l, keys, key;
  if (Array.isArray(val) || typeof val === 'string') {
    ret = new Array(val.length);
    for (i = 0, l = val.length; i < l; i++) {
      ret[i] = render(val[i], i, i, i); // fixed by xxxxxx
    }
  } else if (typeof val === 'number') {
    ret = new Array(val);
    for (i = 0; i < val; i++) {
      ret[i] = render(i + 1, i, i, i); // fixed by xxxxxx
    }
  } else if (isObject(val)) {
    if (hasSymbol && val[Symbol.iterator]) {
      ret = [];
      var iterator = val[Symbol.iterator]();
      var result = iterator.next();
      while (!result.done) {
        ret.push(render(result.value, ret.length, i, i++)); // fixed by xxxxxx
        result = iterator.next();
      }
    } else {
      keys = Object.keys(val);
      ret = new Array(keys.length);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[i] = render(val[key], key, i, i); // fixed by xxxxxx
      }
    }
  }
  if (!isDef(ret)) {
    ret = [];
  }
  (ret)._isVList = true;
  return ret
}

/*  */

/**
 * Runtime helper for rendering <slot>
 */
function renderSlot (
  name,
  fallback,
  props,
  bindObject
) {
  var scopedSlotFn = this.$scopedSlots[name];
  var nodes;
  if (scopedSlotFn) { // scoped slot
    props = props || {};
    if (bindObject) {
      if ( true && !isObject(bindObject)) {
        warn(
          'slot v-bind without argument expects an Object',
          this
        );
      }
      props = extend(extend({}, bindObject), props);
    }
    // fixed by xxxxxx app-plus scopedSlot
    nodes = scopedSlotFn(props, this, props._i) || fallback;
  } else {
    nodes = this.$slots[name] || fallback;
  }

  var target = props && props.slot;
  if (target) {
    return this.$createElement('template', { slot: target }, nodes)
  } else {
    return nodes
  }
}

/*  */

/**
 * Runtime helper for resolving filters
 */
function resolveFilter (id) {
  return resolveAsset(this.$options, 'filters', id, true) || identity
}

/*  */

function isKeyNotMatch (expect, actual) {
  if (Array.isArray(expect)) {
    return expect.indexOf(actual) === -1
  } else {
    return expect !== actual
  }
}

/**
 * Runtime helper for checking keyCodes from config.
 * exposed as Vue.prototype._k
 * passing in eventKeyName as last argument separately for backwards compat
 */
function checkKeyCodes (
  eventKeyCode,
  key,
  builtInKeyCode,
  eventKeyName,
  builtInKeyName
) {
  var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;
  if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
    return isKeyNotMatch(builtInKeyName, eventKeyName)
  } else if (mappedKeyCode) {
    return isKeyNotMatch(mappedKeyCode, eventKeyCode)
  } else if (eventKeyName) {
    return hyphenate(eventKeyName) !== key
  }
}

/*  */

/**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */
function bindObjectProps (
  data,
  tag,
  value,
  asProp,
  isSync
) {
  if (value) {
    if (!isObject(value)) {
       true && warn(
        'v-bind without argument expects an Object or Array value',
        this
      );
    } else {
      if (Array.isArray(value)) {
        value = toObject(value);
      }
      var hash;
      var loop = function ( key ) {
        if (
          key === 'class' ||
          key === 'style' ||
          isReservedAttribute(key)
        ) {
          hash = data;
        } else {
          var type = data.attrs && data.attrs.type;
          hash = asProp || config.mustUseProp(tag, type, key)
            ? data.domProps || (data.domProps = {})
            : data.attrs || (data.attrs = {});
        }
        var camelizedKey = camelize(key);
        var hyphenatedKey = hyphenate(key);
        if (!(camelizedKey in hash) && !(hyphenatedKey in hash)) {
          hash[key] = value[key];

          if (isSync) {
            var on = data.on || (data.on = {});
            on[("update:" + key)] = function ($event) {
              value[key] = $event;
            };
          }
        }
      };

      for (var key in value) loop( key );
    }
  }
  return data
}

/*  */

/**
 * Runtime helper for rendering static trees.
 */
function renderStatic (
  index,
  isInFor
) {
  var cached = this._staticTrees || (this._staticTrees = []);
  var tree = cached[index];
  // if has already-rendered static tree and not inside v-for,
  // we can reuse the same tree.
  if (tree && !isInFor) {
    return tree
  }
  // otherwise, render a fresh tree.
  tree = cached[index] = this.$options.staticRenderFns[index].call(
    this._renderProxy,
    null,
    this // for render fns generated for functional component templates
  );
  markStatic(tree, ("__static__" + index), false);
  return tree
}

/**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */
function markOnce (
  tree,
  index,
  key
) {
  markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
  return tree
}

function markStatic (
  tree,
  key,
  isOnce
) {
  if (Array.isArray(tree)) {
    for (var i = 0; i < tree.length; i++) {
      if (tree[i] && typeof tree[i] !== 'string') {
        markStaticNode(tree[i], (key + "_" + i), isOnce);
      }
    }
  } else {
    markStaticNode(tree, key, isOnce);
  }
}

function markStaticNode (node, key, isOnce) {
  node.isStatic = true;
  node.key = key;
  node.isOnce = isOnce;
}

/*  */

function bindObjectListeners (data, value) {
  if (value) {
    if (!isPlainObject(value)) {
       true && warn(
        'v-on without argument expects an Object value',
        this
      );
    } else {
      var on = data.on = data.on ? extend({}, data.on) : {};
      for (var key in value) {
        var existing = on[key];
        var ours = value[key];
        on[key] = existing ? [].concat(existing, ours) : ours;
      }
    }
  }
  return data
}

/*  */

function resolveScopedSlots (
  fns, // see flow/vnode
  res,
  // the following are added in 2.6
  hasDynamicKeys,
  contentHashKey
) {
  res = res || { $stable: !hasDynamicKeys };
  for (var i = 0; i < fns.length; i++) {
    var slot = fns[i];
    if (Array.isArray(slot)) {
      resolveScopedSlots(slot, res, hasDynamicKeys);
    } else if (slot) {
      // marker for reverse proxying v-slot without scope on this.$slots
      if (slot.proxy) {
        slot.fn.proxy = true;
      }
      res[slot.key] = slot.fn;
    }
  }
  if (contentHashKey) {
    (res).$key = contentHashKey;
  }
  return res
}

/*  */

function bindDynamicKeys (baseObj, values) {
  for (var i = 0; i < values.length; i += 2) {
    var key = values[i];
    if (typeof key === 'string' && key) {
      baseObj[values[i]] = values[i + 1];
    } else if ( true && key !== '' && key !== null) {
      // null is a special value for explicitly removing a binding
      warn(
        ("Invalid value for dynamic directive argument (expected string or null): " + key),
        this
      );
    }
  }
  return baseObj
}

// helper to dynamically append modifier runtime markers to event names.
// ensure only append when value is already string, otherwise it will be cast
// to string and cause the type check to miss.
function prependModifier (value, symbol) {
  return typeof value === 'string' ? symbol + value : value
}

/*  */

function installRenderHelpers (target) {
  target._o = markOnce;
  target._n = toNumber;
  target._s = toString;
  target._l = renderList;
  target._t = renderSlot;
  target._q = looseEqual;
  target._i = looseIndexOf;
  target._m = renderStatic;
  target._f = resolveFilter;
  target._k = checkKeyCodes;
  target._b = bindObjectProps;
  target._v = createTextVNode;
  target._e = createEmptyVNode;
  target._u = resolveScopedSlots;
  target._g = bindObjectListeners;
  target._d = bindDynamicKeys;
  target._p = prependModifier;
}

/*  */

function FunctionalRenderContext (
  data,
  props,
  children,
  parent,
  Ctor
) {
  var this$1 = this;

  var options = Ctor.options;
  // ensure the createElement function in functional components
  // gets a unique context - this is necessary for correct named slot check
  var contextVm;
  if (hasOwn(parent, '_uid')) {
    contextVm = Object.create(parent);
    // $flow-disable-line
    contextVm._original = parent;
  } else {
    // the context vm passed in is a functional context as well.
    // in this case we want to make sure we are able to get a hold to the
    // real context instance.
    contextVm = parent;
    // $flow-disable-line
    parent = parent._original;
  }
  var isCompiled = isTrue(options._compiled);
  var needNormalization = !isCompiled;

  this.data = data;
  this.props = props;
  this.children = children;
  this.parent = parent;
  this.listeners = data.on || emptyObject;
  this.injections = resolveInject(options.inject, parent);
  this.slots = function () {
    if (!this$1.$slots) {
      normalizeScopedSlots(
        data.scopedSlots,
        this$1.$slots = resolveSlots(children, parent)
      );
    }
    return this$1.$slots
  };

  Object.defineProperty(this, 'scopedSlots', ({
    enumerable: true,
    get: function get () {
      return normalizeScopedSlots(data.scopedSlots, this.slots())
    }
  }));

  // support for compiled functional template
  if (isCompiled) {
    // exposing $options for renderStatic()
    this.$options = options;
    // pre-resolve slots for renderSlot()
    this.$slots = this.slots();
    this.$scopedSlots = normalizeScopedSlots(data.scopedSlots, this.$slots);
  }

  if (options._scopeId) {
    this._c = function (a, b, c, d) {
      var vnode = createElement(contextVm, a, b, c, d, needNormalization);
      if (vnode && !Array.isArray(vnode)) {
        vnode.fnScopeId = options._scopeId;
        vnode.fnContext = parent;
      }
      return vnode
    };
  } else {
    this._c = function (a, b, c, d) { return createElement(contextVm, a, b, c, d, needNormalization); };
  }
}

installRenderHelpers(FunctionalRenderContext.prototype);

function createFunctionalComponent (
  Ctor,
  propsData,
  data,
  contextVm,
  children
) {
  var options = Ctor.options;
  var props = {};
  var propOptions = options.props;
  if (isDef(propOptions)) {
    for (var key in propOptions) {
      props[key] = validateProp(key, propOptions, propsData || emptyObject);
    }
  } else {
    if (isDef(data.attrs)) { mergeProps(props, data.attrs); }
    if (isDef(data.props)) { mergeProps(props, data.props); }
  }

  var renderContext = new FunctionalRenderContext(
    data,
    props,
    children,
    contextVm,
    Ctor
  );

  var vnode = options.render.call(null, renderContext._c, renderContext);

  if (vnode instanceof VNode) {
    return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options, renderContext)
  } else if (Array.isArray(vnode)) {
    var vnodes = normalizeChildren(vnode) || [];
    var res = new Array(vnodes.length);
    for (var i = 0; i < vnodes.length; i++) {
      res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options, renderContext);
    }
    return res
  }
}

function cloneAndMarkFunctionalResult (vnode, data, contextVm, options, renderContext) {
  // #7817 clone node before setting fnContext, otherwise if the node is reused
  // (e.g. it was from a cached normal slot) the fnContext causes named slots
  // that should not be matched to match.
  var clone = cloneVNode(vnode);
  clone.fnContext = contextVm;
  clone.fnOptions = options;
  if (true) {
    (clone.devtoolsMeta = clone.devtoolsMeta || {}).renderContext = renderContext;
  }
  if (data.slot) {
    (clone.data || (clone.data = {})).slot = data.slot;
  }
  return clone
}

function mergeProps (to, from) {
  for (var key in from) {
    to[camelize(key)] = from[key];
  }
}

/*  */

/*  */

/*  */

/*  */

// inline hooks to be invoked on component VNodes during patch
var componentVNodeHooks = {
  init: function init (vnode, hydrating) {
    if (
      vnode.componentInstance &&
      !vnode.componentInstance._isDestroyed &&
      vnode.data.keepAlive
    ) {
      // kept-alive components, treat as a patch
      var mountedNode = vnode; // work around flow
      componentVNodeHooks.prepatch(mountedNode, mountedNode);
    } else {
      var child = vnode.componentInstance = createComponentInstanceForVnode(
        vnode,
        activeInstance
      );
      child.$mount(hydrating ? vnode.elm : undefined, hydrating);
    }
  },

  prepatch: function prepatch (oldVnode, vnode) {
    var options = vnode.componentOptions;
    var child = vnode.componentInstance = oldVnode.componentInstance;
    updateChildComponent(
      child,
      options.propsData, // updated props
      options.listeners, // updated listeners
      vnode, // new parent vnode
      options.children // new children
    );
  },

  insert: function insert (vnode) {
    var context = vnode.context;
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isMounted) {
      callHook(componentInstance, 'onServiceCreated');
      callHook(componentInstance, 'onServiceAttached');
      componentInstance._isMounted = true;
      callHook(componentInstance, 'mounted');
    }
    if (vnode.data.keepAlive) {
      if (context._isMounted) {
        // vue-router#1212
        // During updates, a kept-alive component's child components may
        // change, so directly walking the tree here may call activated hooks
        // on incorrect children. Instead we push them into a queue which will
        // be processed after the whole patch process ended.
        queueActivatedComponent(componentInstance);
      } else {
        activateChildComponent(componentInstance, true /* direct */);
      }
    }
  },

  destroy: function destroy (vnode) {
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isDestroyed) {
      if (!vnode.data.keepAlive) {
        componentInstance.$destroy();
      } else {
        deactivateChildComponent(componentInstance, true /* direct */);
      }
    }
  }
};

var hooksToMerge = Object.keys(componentVNodeHooks);

function createComponent (
  Ctor,
  data,
  context,
  children,
  tag
) {
  if (isUndef(Ctor)) {
    return
  }

  var baseCtor = context.$options._base;

  // plain options object: turn it into a constructor
  if (isObject(Ctor)) {
    Ctor = baseCtor.extend(Ctor);
  }

  // if at this stage it's not a constructor or an async component factory,
  // reject.
  if (typeof Ctor !== 'function') {
    if (true) {
      warn(("Invalid Component definition: " + (String(Ctor))), context);
    }
    return
  }

  // async component
  var asyncFactory;
  if (isUndef(Ctor.cid)) {
    asyncFactory = Ctor;
    Ctor = resolveAsyncComponent(asyncFactory, baseCtor);
    if (Ctor === undefined) {
      // return a placeholder node for async component, which is rendered
      // as a comment node but preserves all the raw information for the node.
      // the information will be used for async server-rendering and hydration.
      return createAsyncPlaceholder(
        asyncFactory,
        data,
        context,
        children,
        tag
      )
    }
  }

  data = data || {};

  // resolve constructor options in case global mixins are applied after
  // component constructor creation
  resolveConstructorOptions(Ctor);

  // transform component v-model data into props & events
  if (isDef(data.model)) {
    transformModel(Ctor.options, data);
  }

  // extract props
  var propsData = extractPropsFromVNodeData(data, Ctor, tag, context); // fixed by xxxxxx

  // functional component
  if (isTrue(Ctor.options.functional)) {
    return createFunctionalComponent(Ctor, propsData, data, context, children)
  }

  // extract listeners, since these needs to be treated as
  // child component listeners instead of DOM listeners
  var listeners = data.on;
  // replace with listeners with .native modifier
  // so it gets processed during parent component patch.
  data.on = data.nativeOn;

  if (isTrue(Ctor.options.abstract)) {
    // abstract components do not keep anything
    // other than props & listeners & slot

    // work around flow
    var slot = data.slot;
    data = {};
    if (slot) {
      data.slot = slot;
    }
  }

  // install component management hooks onto the placeholder node
  installComponentHooks(data);

  // return a placeholder vnode
  var name = Ctor.options.name || tag;
  var vnode = new VNode(
    ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
    data, undefined, undefined, undefined, context,
    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children },
    asyncFactory
  );

  return vnode
}

function createComponentInstanceForVnode (
  vnode, // we know it's MountedComponentVNode but flow doesn't
  parent // activeInstance in lifecycle state
) {
  var options = {
    _isComponent: true,
    _parentVnode: vnode,
    parent: parent
  };
  // check inline-template render functions
  var inlineTemplate = vnode.data.inlineTemplate;
  if (isDef(inlineTemplate)) {
    options.render = inlineTemplate.render;
    options.staticRenderFns = inlineTemplate.staticRenderFns;
  }
  return new vnode.componentOptions.Ctor(options)
}

function installComponentHooks (data) {
  var hooks = data.hook || (data.hook = {});
  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i];
    var existing = hooks[key];
    var toMerge = componentVNodeHooks[key];
    if (existing !== toMerge && !(existing && existing._merged)) {
      hooks[key] = existing ? mergeHook$1(toMerge, existing) : toMerge;
    }
  }
}

function mergeHook$1 (f1, f2) {
  var merged = function (a, b) {
    // flow complains about extra args which is why we use any
    f1(a, b);
    f2(a, b);
  };
  merged._merged = true;
  return merged
}

// transform component v-model info (value and callback) into
// prop and event handler respectively.
function transformModel (options, data) {
  var prop = (options.model && options.model.prop) || 'value';
  var event = (options.model && options.model.event) || 'input'
  ;(data.attrs || (data.attrs = {}))[prop] = data.model.value;
  var on = data.on || (data.on = {});
  var existing = on[event];
  var callback = data.model.callback;
  if (isDef(existing)) {
    if (
      Array.isArray(existing)
        ? existing.indexOf(callback) === -1
        : existing !== callback
    ) {
      on[event] = [callback].concat(existing);
    }
  } else {
    on[event] = callback;
  }
}

/*  */

var SIMPLE_NORMALIZE = 1;
var ALWAYS_NORMALIZE = 2;

// wrapper function for providing a more flexible interface
// without getting yelled at by flow
function createElement (
  context,
  tag,
  data,
  children,
  normalizationType,
  alwaysNormalize
) {
  if (Array.isArray(data) || isPrimitive(data)) {
    normalizationType = children;
    children = data;
    data = undefined;
  }
  if (isTrue(alwaysNormalize)) {
    normalizationType = ALWAYS_NORMALIZE;
  }
  return _createElement(context, tag, data, children, normalizationType)
}

function _createElement (
  context,
  tag,
  data,
  children,
  normalizationType
) {
  if (isDef(data) && isDef((data).__ob__)) {
     true && warn(
      "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
      'Always create fresh vnode data objects in each render!',
      context
    );
    return createEmptyVNode()
  }
  // object syntax in v-bind
  if (isDef(data) && isDef(data.is)) {
    tag = data.is;
  }
  if (!tag) {
    // in case of component :is set to falsy value
    return createEmptyVNode()
  }
  // warn against non-primitive key
  if ( true &&
    isDef(data) && isDef(data.key) && !isPrimitive(data.key)
  ) {
    {
      warn(
        'Avoid using non-primitive value as key, ' +
        'use string/number value instead.',
        context
      );
    }
  }
  // support single function children as default scoped slot
  if (Array.isArray(children) &&
    typeof children[0] === 'function'
  ) {
    data = data || {};
    data.scopedSlots = { default: children[0] };
    children.length = 0;
  }
  if (normalizationType === ALWAYS_NORMALIZE) {
    children = normalizeChildren(children);
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = simpleNormalizeChildren(children);
  }
  var vnode, ns;
  if (typeof tag === 'string') {
    var Ctor;
    ns = (context.$vnode && context.$vnode.ns) || config.getTagNamespace(tag);
    if (config.isReservedTag(tag)) {
      // platform built-in elements
      if ( true && isDef(data) && isDef(data.nativeOn)) {
        warn(
          ("The .native modifier for v-on is only valid on components but it was used on <" + tag + ">."),
          context
        );
      }
      vnode = new VNode(
        config.parsePlatformTagName(tag), data, children,
        undefined, undefined, context
      );
    } else if ((!data || !data.pre) && isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
      // component
      vnode = createComponent(Ctor, data, context, children, tag);
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      vnode = new VNode(
        tag, data, children,
        undefined, undefined, context
      );
    }
  } else {
    // direct component options / constructor
    vnode = createComponent(tag, data, context, children);
  }
  if (Array.isArray(vnode)) {
    return vnode
  } else if (isDef(vnode)) {
    if (isDef(ns)) { applyNS(vnode, ns); }
    if (isDef(data)) { registerDeepBindings(data); }
    return vnode
  } else {
    return createEmptyVNode()
  }
}

function applyNS (vnode, ns, force) {
  vnode.ns = ns;
  if (vnode.tag === 'foreignObject') {
    // use default namespace inside foreignObject
    ns = undefined;
    force = true;
  }
  if (isDef(vnode.children)) {
    for (var i = 0, l = vnode.children.length; i < l; i++) {
      var child = vnode.children[i];
      if (isDef(child.tag) && (
        isUndef(child.ns) || (isTrue(force) && child.tag !== 'svg'))) {
        applyNS(child, ns, force);
      }
    }
  }
}

// ref #5318
// necessary to ensure parent re-render when deep bindings like :style and
// :class are used on slot nodes
function registerDeepBindings (data) {
  if (isObject(data.style)) {
    traverse(data.style);
  }
  if (isObject(data.class)) {
    traverse(data.class);
  }
}

/*  */

function initRender (vm) {
  vm._vnode = null; // the root of the child tree
  vm._staticTrees = null; // v-once cached trees
  var options = vm.$options;
  var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree
  var renderContext = parentVnode && parentVnode.context;
  vm.$slots = resolveSlots(options._renderChildren, renderContext);
  vm.$scopedSlots = emptyObject;
  // bind the createElement fn to this instance
  // so that we get proper render context inside it.
  // args order: tag, data, children, normalizationType, alwaysNormalize
  // internal version is used by render functions compiled from templates
  vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
  // normalization is always applied for the public version, used in
  // user-written render functions.
  vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };

  // $attrs & $listeners are exposed for easier HOC creation.
  // they need to be reactive so that HOCs using them are always updated
  var parentData = parentVnode && parentVnode.data;

  /* istanbul ignore else */
  if (true) {
    defineReactive$$1(vm, '$attrs', parentData && parentData.attrs || emptyObject, function () {
      !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
    }, true);
    defineReactive$$1(vm, '$listeners', options._parentListeners || emptyObject, function () {
      !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
    }, true);
  } else {}
}

var currentRenderingInstance = null;

function renderMixin (Vue) {
  // install runtime convenience helpers
  installRenderHelpers(Vue.prototype);

  Vue.prototype.$nextTick = function (fn) {
    return nextTick(fn, this)
  };

  Vue.prototype._render = function () {
    var vm = this;
    var ref = vm.$options;
    var render = ref.render;
    var _parentVnode = ref._parentVnode;

    if (_parentVnode) {
      vm.$scopedSlots = normalizeScopedSlots(
        _parentVnode.data.scopedSlots,
        vm.$slots,
        vm.$scopedSlots
      );
    }

    // set parent vnode. this allows render functions to have access
    // to the data on the placeholder node.
    vm.$vnode = _parentVnode;
    // render self
    var vnode;
    try {
      // There's no need to maintain a stack because all render fns are called
      // separately from one another. Nested component's render fns are called
      // when parent component is patched.
      currentRenderingInstance = vm;
      vnode = render.call(vm._renderProxy, vm.$createElement);
    } catch (e) {
      handleError(e, vm, "render");
      // return error render result,
      // or previous vnode to prevent render error causing blank component
      /* istanbul ignore else */
      if ( true && vm.$options.renderError) {
        try {
          vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
        } catch (e) {
          handleError(e, vm, "renderError");
          vnode = vm._vnode;
        }
      } else {
        vnode = vm._vnode;
      }
    } finally {
      currentRenderingInstance = null;
    }
    // if the returned array contains only a single node, allow it
    if (Array.isArray(vnode) && vnode.length === 1) {
      vnode = vnode[0];
    }
    // return empty vnode in case the render function errored out
    if (!(vnode instanceof VNode)) {
      if ( true && Array.isArray(vnode)) {
        warn(
          'Multiple root nodes returned from render function. Render function ' +
          'should return a single root node.',
          vm
        );
      }
      vnode = createEmptyVNode();
    }
    // set parent
    vnode.parent = _parentVnode;
    return vnode
  };
}

/*  */

function ensureCtor (comp, base) {
  if (
    comp.__esModule ||
    (hasSymbol && comp[Symbol.toStringTag] === 'Module')
  ) {
    comp = comp.default;
  }
  return isObject(comp)
    ? base.extend(comp)
    : comp
}

function createAsyncPlaceholder (
  factory,
  data,
  context,
  children,
  tag
) {
  var node = createEmptyVNode();
  node.asyncFactory = factory;
  node.asyncMeta = { data: data, context: context, children: children, tag: tag };
  return node
}

function resolveAsyncComponent (
  factory,
  baseCtor
) {
  if (isTrue(factory.error) && isDef(factory.errorComp)) {
    return factory.errorComp
  }

  if (isDef(factory.resolved)) {
    return factory.resolved
  }

  var owner = currentRenderingInstance;
  if (owner && isDef(factory.owners) && factory.owners.indexOf(owner) === -1) {
    // already pending
    factory.owners.push(owner);
  }

  if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
    return factory.loadingComp
  }

  if (owner && !isDef(factory.owners)) {
    var owners = factory.owners = [owner];
    var sync = true;
    var timerLoading = null;
    var timerTimeout = null

    ;(owner).$on('hook:destroyed', function () { return remove(owners, owner); });

    var forceRender = function (renderCompleted) {
      for (var i = 0, l = owners.length; i < l; i++) {
        (owners[i]).$forceUpdate();
      }

      if (renderCompleted) {
        owners.length = 0;
        if (timerLoading !== null) {
          clearTimeout(timerLoading);
          timerLoading = null;
        }
        if (timerTimeout !== null) {
          clearTimeout(timerTimeout);
          timerTimeout = null;
        }
      }
    };

    var resolve = once(function (res) {
      // cache resolved
      factory.resolved = ensureCtor(res, baseCtor);
      // invoke callbacks only if this is not a synchronous resolve
      // (async resolves are shimmed as synchronous during SSR)
      if (!sync) {
        forceRender(true);
      } else {
        owners.length = 0;
      }
    });

    var reject = once(function (reason) {
       true && warn(
        "Failed to resolve async component: " + (String(factory)) +
        (reason ? ("\nReason: " + reason) : '')
      );
      if (isDef(factory.errorComp)) {
        factory.error = true;
        forceRender(true);
      }
    });

    var res = factory(resolve, reject);

    if (isObject(res)) {
      if (isPromise(res)) {
        // () => Promise
        if (isUndef(factory.resolved)) {
          res.then(resolve, reject);
        }
      } else if (isPromise(res.component)) {
        res.component.then(resolve, reject);

        if (isDef(res.error)) {
          factory.errorComp = ensureCtor(res.error, baseCtor);
        }

        if (isDef(res.loading)) {
          factory.loadingComp = ensureCtor(res.loading, baseCtor);
          if (res.delay === 0) {
            factory.loading = true;
          } else {
            timerLoading = setTimeout(function () {
              timerLoading = null;
              if (isUndef(factory.resolved) && isUndef(factory.error)) {
                factory.loading = true;
                forceRender(false);
              }
            }, res.delay || 200);
          }
        }

        if (isDef(res.timeout)) {
          timerTimeout = setTimeout(function () {
            timerTimeout = null;
            if (isUndef(factory.resolved)) {
              reject(
                 true
                  ? ("timeout (" + (res.timeout) + "ms)")
                  : undefined
              );
            }
          }, res.timeout);
        }
      }
    }

    sync = false;
    // return in case resolved synchronously
    return factory.loading
      ? factory.loadingComp
      : factory.resolved
  }
}

/*  */

function isAsyncPlaceholder (node) {
  return node.isComment && node.asyncFactory
}

/*  */

function getFirstComponentChild (children) {
  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      var c = children[i];
      if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
        return c
      }
    }
  }
}

/*  */

/*  */

function initEvents (vm) {
  vm._events = Object.create(null);
  vm._hasHookEvent = false;
  // init parent attached events
  var listeners = vm.$options._parentListeners;
  if (listeners) {
    updateComponentListeners(vm, listeners);
  }
}

var target;

function add (event, fn) {
  target.$on(event, fn);
}

function remove$1 (event, fn) {
  target.$off(event, fn);
}

function createOnceHandler (event, fn) {
  var _target = target;
  return function onceHandler () {
    var res = fn.apply(null, arguments);
    if (res !== null) {
      _target.$off(event, onceHandler);
    }
  }
}

function updateComponentListeners (
  vm,
  listeners,
  oldListeners
) {
  target = vm;
  updateListeners(listeners, oldListeners || {}, add, remove$1, createOnceHandler, vm);
  target = undefined;
}

function eventsMixin (Vue) {
  var hookRE = /^hook:/;
  Vue.prototype.$on = function (event, fn) {
    var vm = this;
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        vm.$on(event[i], fn);
      }
    } else {
      (vm._events[event] || (vm._events[event] = [])).push(fn);
      // optimize hook:event cost by using a boolean flag marked at registration
      // instead of a hash lookup
      if (hookRE.test(event)) {
        vm._hasHookEvent = true;
      }
    }
    return vm
  };

  Vue.prototype.$once = function (event, fn) {
    var vm = this;
    function on () {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }
    on.fn = fn;
    vm.$on(event, on);
    return vm
  };

  Vue.prototype.$off = function (event, fn) {
    var vm = this;
    // all
    if (!arguments.length) {
      vm._events = Object.create(null);
      return vm
    }
    // array of events
    if (Array.isArray(event)) {
      for (var i$1 = 0, l = event.length; i$1 < l; i$1++) {
        vm.$off(event[i$1], fn);
      }
      return vm
    }
    // specific event
    var cbs = vm._events[event];
    if (!cbs) {
      return vm
    }
    if (!fn) {
      vm._events[event] = null;
      return vm
    }
    // specific handler
    var cb;
    var i = cbs.length;
    while (i--) {
      cb = cbs[i];
      if (cb === fn || cb.fn === fn) {
        cbs.splice(i, 1);
        break
      }
    }
    return vm
  };

  Vue.prototype.$emit = function (event) {
    var vm = this;
    if (true) {
      var lowerCaseEvent = event.toLowerCase();
      if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
        tip(
          "Event \"" + lowerCaseEvent + "\" is emitted in component " +
          (formatComponentName(vm)) + " but the handler is registered for \"" + event + "\". " +
          "Note that HTML attributes are case-insensitive and you cannot use " +
          "v-on to listen to camelCase events when using in-DOM templates. " +
          "You should probably use \"" + (hyphenate(event)) + "\" instead of \"" + event + "\"."
        );
      }
    }
    var cbs = vm._events[event];
    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      var args = toArray(arguments, 1);
      var info = "event handler for \"" + event + "\"";
      for (var i = 0, l = cbs.length; i < l; i++) {
        invokeWithErrorHandling(cbs[i], vm, args, vm, info);
      }
    }
    return vm
  };
}

/*  */

var activeInstance = null;
var isUpdatingChildComponent = false;

function setActiveInstance(vm) {
  var prevActiveInstance = activeInstance;
  activeInstance = vm;
  return function () {
    activeInstance = prevActiveInstance;
  }
}

function initLifecycle (vm) {
  var options = vm.$options;

  // locate first non-abstract parent
  var parent = options.parent;
  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent;
    }
    parent.$children.push(vm);
  }

  vm.$parent = parent;
  vm.$root = parent ? parent.$root : vm;

  vm.$children = [];
  vm.$refs = {};

  vm._watcher = null;
  vm._inactive = null;
  vm._directInactive = false;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}

function lifecycleMixin (Vue) {
  Vue.prototype._update = function (vnode, hydrating) {
    var vm = this;
    var prevEl = vm.$el;
    var prevVnode = vm._vnode;
    var restoreActiveInstance = setActiveInstance(vm);
    vm._vnode = vnode;
    // Vue.prototype.__patch__ is injected in entry points
    // based on the rendering backend used.
    if (!prevVnode) {
      // initial render
      vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false /* removeOnly */);
    } else {
      // updates
      vm.$el = vm.__patch__(prevVnode, vnode);
    }
    restoreActiveInstance();
    // update __vue__ reference
    if (prevEl) {
      prevEl.__vue__ = null;
    }
    if (vm.$el) {
      vm.$el.__vue__ = vm;
    }
    // if parent is an HOC, update its $el as well
    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el;
    }
    // updated hook is called by the scheduler to ensure that children are
    // updated in a parent's updated hook.
  };

  Vue.prototype.$forceUpdate = function () {
    var vm = this;
    if (vm._watcher) {
      vm._watcher.update();
    }
  };

  Vue.prototype.$destroy = function () {
    var vm = this;
    if (vm._isBeingDestroyed) {
      return
    }
    callHook(vm, 'beforeDestroy');
    vm._isBeingDestroyed = true;
    // remove self from parent
    var parent = vm.$parent;
    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      remove(parent.$children, vm);
    }
    // teardown watchers
    if (vm._watcher) {
      vm._watcher.teardown();
    }
    var i = vm._watchers.length;
    while (i--) {
      vm._watchers[i].teardown();
    }
    // remove reference from data ob
    // frozen object may not have observer.
    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--;
    }
    // call the last hook...
    vm._isDestroyed = true;
    // invoke destroy hooks on current rendered tree
    vm.__patch__(vm._vnode, null);
    // fire destroyed hook
    callHook(vm, 'destroyed');
    // turn off all instance listeners.
    vm.$off();
    // remove __vue__ reference
    if (vm.$el) {
      vm.$el.__vue__ = null;
    }
    // release circular reference (#6759)
    if (vm.$vnode) {
      vm.$vnode.parent = null;
    }
  };
}

function updateChildComponent (
  vm,
  propsData,
  listeners,
  parentVnode,
  renderChildren
) {
  if (true) {
    isUpdatingChildComponent = true;
  }

  // determine whether component has slot children
  // we need to do this before overwriting $options._renderChildren.

  // check if there are dynamic scopedSlots (hand-written or compiled but with
  // dynamic slot names). Static scoped slots compiled from template has the
  // "$stable" marker.
  var newScopedSlots = parentVnode.data.scopedSlots;
  var oldScopedSlots = vm.$scopedSlots;
  var hasDynamicScopedSlot = !!(
    (newScopedSlots && !newScopedSlots.$stable) ||
    (oldScopedSlots !== emptyObject && !oldScopedSlots.$stable) ||
    (newScopedSlots && vm.$scopedSlots.$key !== newScopedSlots.$key)
  );

  // Any static slot children from the parent may have changed during parent's
  // update. Dynamic scoped slots may also have changed. In such cases, a forced
  // update is necessary to ensure correctness.
  var needsForceUpdate = !!(
    renderChildren ||               // has new static slots
    vm.$options._renderChildren ||  // has old static slots
    hasDynamicScopedSlot
  );

  vm.$options._parentVnode = parentVnode;
  vm.$vnode = parentVnode; // update vm's placeholder node without re-render

  if (vm._vnode) { // update child tree's parent
    vm._vnode.parent = parentVnode;
  }
  vm.$options._renderChildren = renderChildren;

  // update $attrs and $listeners hash
  // these are also reactive so they may trigger child update if the child
  // used them during render
  vm.$attrs = parentVnode.data.attrs || emptyObject;
  vm.$listeners = listeners || emptyObject;

  // update props
  if (propsData && vm.$options.props) {
    toggleObserving(false);
    var props = vm._props;
    var propKeys = vm.$options._propKeys || [];
    for (var i = 0; i < propKeys.length; i++) {
      var key = propKeys[i];
      var propOptions = vm.$options.props; // wtf flow?
      props[key] = validateProp(key, propOptions, propsData, vm);
    }
    toggleObserving(true);
    // keep a copy of raw propsData
    vm.$options.propsData = propsData;
  }
  
  // fixed by xxxxxx update properties(mp runtime)
  vm._$updateProperties && vm._$updateProperties(vm);
  
  // update listeners
  listeners = listeners || emptyObject;
  var oldListeners = vm.$options._parentListeners;
  vm.$options._parentListeners = listeners;
  updateComponentListeners(vm, listeners, oldListeners);

  // resolve slots + force update if has children
  if (needsForceUpdate) {
    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
    vm.$forceUpdate();
  }

  if (true) {
    isUpdatingChildComponent = false;
  }
}

function isInInactiveTree (vm) {
  while (vm && (vm = vm.$parent)) {
    if (vm._inactive) { return true }
  }
  return false
}

function activateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = false;
    if (isInInactiveTree(vm)) {
      return
    }
  } else if (vm._directInactive) {
    return
  }
  if (vm._inactive || vm._inactive === null) {
    vm._inactive = false;
    for (var i = 0; i < vm.$children.length; i++) {
      activateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'activated');
  }
}

function deactivateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = true;
    if (isInInactiveTree(vm)) {
      return
    }
  }
  if (!vm._inactive) {
    vm._inactive = true;
    for (var i = 0; i < vm.$children.length; i++) {
      deactivateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'deactivated');
  }
}

function callHook (vm, hook) {
  // #7573 disable dep collection when invoking lifecycle hooks
  pushTarget();
  var handlers = vm.$options[hook];
  var info = hook + " hook";
  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      invokeWithErrorHandling(handlers[i], vm, null, vm, info);
    }
  }
  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook);
  }
  popTarget();
}

/*  */

var MAX_UPDATE_COUNT = 100;

var queue = [];
var activatedChildren = [];
var has = {};
var circular = {};
var waiting = false;
var flushing = false;
var index = 0;

/**
 * Reset the scheduler's state.
 */
function resetSchedulerState () {
  index = queue.length = activatedChildren.length = 0;
  has = {};
  if (true) {
    circular = {};
  }
  waiting = flushing = false;
}

// Async edge case #6566 requires saving the timestamp when event listeners are
// attached. However, calling performance.now() has a perf overhead especially
// if the page has thousands of event listeners. Instead, we take a timestamp
// every time the scheduler flushes and use that for all event listeners
// attached during that flush.
var currentFlushTimestamp = 0;

// Async edge case fix requires storing an event listener's attach timestamp.
var getNow = Date.now;

// Determine what event timestamp the browser is using. Annoyingly, the
// timestamp can either be hi-res (relative to page load) or low-res
// (relative to UNIX epoch), so in order to compare time we have to use the
// same timestamp type when saving the flush timestamp.
// All IE versions use low-res event timestamps, and have problematic clock
// implementations (#9632)
if (inBrowser && !isIE) {
  var performance = window.performance;
  if (
    performance &&
    typeof performance.now === 'function' &&
    getNow() > document.createEvent('Event').timeStamp
  ) {
    // if the event timestamp, although evaluated AFTER the Date.now(), is
    // smaller than it, it means the event is using a hi-res timestamp,
    // and we need to use the hi-res version for event listener timestamps as
    // well.
    getNow = function () { return performance.now(); };
  }
}

/**
 * Flush both queues and run the watchers.
 */
function flushSchedulerQueue () {
  currentFlushTimestamp = getNow();
  flushing = true;
  var watcher, id;

  // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child)
  // 2. A component's user watchers are run before its render watcher (because
  //    user watchers are created before the render watcher)
  // 3. If a component is destroyed during a parent component's watcher run,
  //    its watchers can be skipped.
  queue.sort(function (a, b) { return a.id - b.id; });

  // do not cache length because more watchers might be pushed
  // as we run existing watchers
  for (index = 0; index < queue.length; index++) {
    watcher = queue[index];
    if (watcher.before) {
      watcher.before();
    }
    id = watcher.id;
    has[id] = null;
    watcher.run();
    // in dev build, check and stop circular updates.
    if ( true && has[id] != null) {
      circular[id] = (circular[id] || 0) + 1;
      if (circular[id] > MAX_UPDATE_COUNT) {
        warn(
          'You may have an infinite update loop ' + (
            watcher.user
              ? ("in watcher with expression \"" + (watcher.expression) + "\"")
              : "in a component render function."
          ),
          watcher.vm
        );
        break
      }
    }
  }

  // keep copies of post queues before resetting state
  var activatedQueue = activatedChildren.slice();
  var updatedQueue = queue.slice();

  resetSchedulerState();

  // call component updated and activated hooks
  callActivatedHooks(activatedQueue);
  callUpdatedHooks(updatedQueue);

  // devtool hook
  /* istanbul ignore if */
  if (devtools && config.devtools) {
    devtools.emit('flush');
  }
}

function callUpdatedHooks (queue) {
  var i = queue.length;
  while (i--) {
    var watcher = queue[i];
    var vm = watcher.vm;
    if (vm._watcher === watcher && vm._isMounted && !vm._isDestroyed) {
      callHook(vm, 'updated');
    }
  }
}

/**
 * Queue a kept-alive component that was activated during patch.
 * The queue will be processed after the entire tree has been patched.
 */
function queueActivatedComponent (vm) {
  // setting _inactive to false here so that a render function can
  // rely on checking whether it's in an inactive tree (e.g. router-view)
  vm._inactive = false;
  activatedChildren.push(vm);
}

function callActivatedHooks (queue) {
  for (var i = 0; i < queue.length; i++) {
    queue[i]._inactive = true;
    activateChildComponent(queue[i], true /* true */);
  }
}

/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */
function queueWatcher (watcher) {
  var id = watcher.id;
  if (has[id] == null) {
    has[id] = true;
    if (!flushing) {
      queue.push(watcher);
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      var i = queue.length - 1;
      while (i > index && queue[i].id > watcher.id) {
        i--;
      }
      queue.splice(i + 1, 0, watcher);
    }
    // queue the flush
    if (!waiting) {
      waiting = true;

      if ( true && !config.async) {
        flushSchedulerQueue();
        return
      }
      nextTick(flushSchedulerQueue);
    }
  }
}

/*  */



var uid$2 = 0;

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */
var Watcher = function Watcher (
  vm,
  expOrFn,
  cb,
  options,
  isRenderWatcher
) {
  this.vm = vm;
  if (isRenderWatcher) {
    vm._watcher = this;
  }
  vm._watchers.push(this);
  // options
  if (options) {
    this.deep = !!options.deep;
    this.user = !!options.user;
    this.lazy = !!options.lazy;
    this.sync = !!options.sync;
    this.before = options.before;
  } else {
    this.deep = this.user = this.lazy = this.sync = false;
  }
  this.cb = cb;
  this.id = ++uid$2; // uid for batching
  this.active = true;
  this.dirty = this.lazy; // for lazy watchers
  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  this.expression =  true
    ? expOrFn.toString()
    : undefined;
  // parse expression for getter
  if (typeof expOrFn === 'function') {
    this.getter = expOrFn;
  } else {
    this.getter = parsePath(expOrFn);
    if (!this.getter) {
      this.getter = noop;
       true && warn(
        "Failed watching path: \"" + expOrFn + "\" " +
        'Watcher only accepts simple dot-delimited paths. ' +
        'For full control, use a function instead.',
        vm
      );
    }
  }
  this.value = this.lazy
    ? undefined
    : this.get();
};

/**
 * Evaluate the getter, and re-collect dependencies.
 */
Watcher.prototype.get = function get () {
  pushTarget(this);
  var value;
  var vm = this.vm;
  try {
    value = this.getter.call(vm, vm);
  } catch (e) {
    if (this.user) {
      handleError(e, vm, ("getter for watcher \"" + (this.expression) + "\""));
    } else {
      throw e
    }
  } finally {
    // "touch" every property so they are all tracked as
    // dependencies for deep watching
    if (this.deep) {
      traverse(value);
    }
    popTarget();
    this.cleanupDeps();
  }
  return value
};

/**
 * Add a dependency to this directive.
 */
Watcher.prototype.addDep = function addDep (dep) {
  var id = dep.id;
  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);
    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};

/**
 * Clean up for dependency collection.
 */
Watcher.prototype.cleanupDeps = function cleanupDeps () {
  var i = this.deps.length;
  while (i--) {
    var dep = this.deps[i];
    if (!this.newDepIds.has(dep.id)) {
      dep.removeSub(this);
    }
  }
  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};

/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */
Watcher.prototype.update = function update () {
  /* istanbul ignore else */
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync) {
    this.run();
  } else {
    queueWatcher(this);
  }
};

/**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */
Watcher.prototype.run = function run () {
  if (this.active) {
    var value = this.get();
    if (
      value !== this.value ||
      // Deep watchers and watchers on Object/Arrays should fire even
      // when the value is the same, because the value may
      // have mutated.
      isObject(value) ||
      this.deep
    ) {
      // set new value
      var oldValue = this.value;
      this.value = value;
      if (this.user) {
        try {
          this.cb.call(this.vm, value, oldValue);
        } catch (e) {
          handleError(e, this.vm, ("callback for watcher \"" + (this.expression) + "\""));
        }
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
  }
};

/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */
Watcher.prototype.evaluate = function evaluate () {
  this.value = this.get();
  this.dirty = false;
};

/**
 * Depend on all deps collected by this watcher.
 */
Watcher.prototype.depend = function depend () {
  var i = this.deps.length;
  while (i--) {
    this.deps[i].depend();
  }
};

/**
 * Remove self from all dependencies' subscriber list.
 */
Watcher.prototype.teardown = function teardown () {
  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed.
    if (!this.vm._isBeingDestroyed) {
      remove(this.vm._watchers, this);
    }
    var i = this.deps.length;
    while (i--) {
      this.deps[i].removeSub(this);
    }
    this.active = false;
  }
};

/*  */

var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};

function proxy (target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter () {
    return this[sourceKey][key]
  };
  sharedPropertyDefinition.set = function proxySetter (val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function initState (vm) {
  vm._watchers = [];
  var opts = vm.$options;
  if (opts.props) { initProps(vm, opts.props); }
  if (opts.methods) { initMethods(vm, opts.methods); }
  if (opts.data) {
    initData(vm);
  } else {
    observe(vm._data = {}, true /* asRootData */);
  }
  if (opts.computed) { initComputed(vm, opts.computed); }
  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch);
  }
}

function initProps (vm, propsOptions) {
  var propsData = vm.$options.propsData || {};
  var props = vm._props = {};
  // cache prop keys so that future props updates can iterate using Array
  // instead of dynamic object key enumeration.
  var keys = vm.$options._propKeys = [];
  var isRoot = !vm.$parent;
  // root instance props should be converted
  if (!isRoot) {
    toggleObserving(false);
  }
  var loop = function ( key ) {
    keys.push(key);
    var value = validateProp(key, propsOptions, propsData, vm);
    /* istanbul ignore else */
    if (true) {
      var hyphenatedKey = hyphenate(key);
      if (isReservedAttribute(hyphenatedKey) ||
          config.isReservedAttr(hyphenatedKey)) {
        warn(
          ("\"" + hyphenatedKey + "\" is a reserved attribute and cannot be used as component prop."),
          vm
        );
      }
      defineReactive$$1(props, key, value, function () {
        if (!isRoot && !isUpdatingChildComponent) {
          {
            if(vm.mpHost === 'mp-baidu' || vm.mpHost === 'mp-kuaishou' || vm.mpHost === 'mp-xhs'){//百度、快手、小红书 observer 在 setData callback 之后触发，直接忽略该 warn
                return
            }
            //fixed by xxxxxx __next_tick_pending,uni://form-field 时不告警
            if(
                key === 'value' && 
                Array.isArray(vm.$options.behaviors) &&
                vm.$options.behaviors.indexOf('uni://form-field') !== -1
              ){
              return
            }
            if(vm._getFormData){
              return
            }
            var $parent = vm.$parent;
            while($parent){
              if($parent.__next_tick_pending){
                return  
              }
              $parent = $parent.$parent;
            }
          }
          warn(
            "Avoid mutating a prop directly since the value will be " +
            "overwritten whenever the parent component re-renders. " +
            "Instead, use a data or computed property based on the prop's " +
            "value. Prop being mutated: \"" + key + "\"",
            vm
          );
        }
      });
    } else {}
    // static props are already proxied on the component's prototype
    // during Vue.extend(). We only need to proxy props defined at
    // instantiation here.
    if (!(key in vm)) {
      proxy(vm, "_props", key);
    }
  };

  for (var key in propsOptions) loop( key );
  toggleObserving(true);
}

function initData (vm) {
  var data = vm.$options.data;
  data = vm._data = typeof data === 'function'
    ? getData(data, vm)
    : data || {};
  if (!isPlainObject(data)) {
    data = {};
     true && warn(
      'data functions should return an object:\n' +
      'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
      vm
    );
  }
  // proxy data on instance
  var keys = Object.keys(data);
  var props = vm.$options.props;
  var methods = vm.$options.methods;
  var i = keys.length;
  while (i--) {
    var key = keys[i];
    if (true) {
      if (methods && hasOwn(methods, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a data property."),
          vm
        );
      }
    }
    if (props && hasOwn(props, key)) {
       true && warn(
        "The data property \"" + key + "\" is already declared as a prop. " +
        "Use prop default value instead.",
        vm
      );
    } else if (!isReserved(key)) {
      proxy(vm, "_data", key);
    }
  }
  // observe data
  observe(data, true /* asRootData */);
}

function getData (data, vm) {
  // #7573 disable dep collection when invoking data getters
  pushTarget();
  try {
    return data.call(vm, vm)
  } catch (e) {
    handleError(e, vm, "data()");
    return {}
  } finally {
    popTarget();
  }
}

var computedWatcherOptions = { lazy: true };

function initComputed (vm, computed) {
  // $flow-disable-line
  var watchers = vm._computedWatchers = Object.create(null);
  // computed properties are just getters during SSR
  var isSSR = isServerRendering();

  for (var key in computed) {
    var userDef = computed[key];
    var getter = typeof userDef === 'function' ? userDef : userDef.get;
    if ( true && getter == null) {
      warn(
        ("Getter is missing for computed property \"" + key + "\"."),
        vm
      );
    }

    if (!isSSR) {
      // create internal watcher for the computed property.
      watchers[key] = new Watcher(
        vm,
        getter || noop,
        noop,
        computedWatcherOptions
      );
    }

    // component-defined computed properties are already defined on the
    // component prototype. We only need to define computed properties defined
    // at instantiation here.
    if (!(key in vm)) {
      defineComputed(vm, key, userDef);
    } else if (true) {
      if (key in vm.$data) {
        warn(("The computed property \"" + key + "\" is already defined in data."), vm);
      } else if (vm.$options.props && key in vm.$options.props) {
        warn(("The computed property \"" + key + "\" is already defined as a prop."), vm);
      }
    }
  }
}

function defineComputed (
  target,
  key,
  userDef
) {
  var shouldCache = !isServerRendering();
  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = shouldCache
      ? createComputedGetter(key)
      : createGetterInvoker(userDef);
    sharedPropertyDefinition.set = noop;
  } else {
    sharedPropertyDefinition.get = userDef.get
      ? shouldCache && userDef.cache !== false
        ? createComputedGetter(key)
        : createGetterInvoker(userDef.get)
      : noop;
    sharedPropertyDefinition.set = userDef.set || noop;
  }
  if ( true &&
      sharedPropertyDefinition.set === noop) {
    sharedPropertyDefinition.set = function () {
      warn(
        ("Computed property \"" + key + "\" was assigned to but it has no setter."),
        this
      );
    };
  }
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function createComputedGetter (key) {
  return function computedGetter () {
    var watcher = this._computedWatchers && this._computedWatchers[key];
    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate();
      }
      if (Dep.SharedObject.target) {// fixed by xxxxxx
        watcher.depend();
      }
      return watcher.value
    }
  }
}

function createGetterInvoker(fn) {
  return function computedGetter () {
    return fn.call(this, this)
  }
}

function initMethods (vm, methods) {
  var props = vm.$options.props;
  for (var key in methods) {
    if (true) {
      if (typeof methods[key] !== 'function') {
        warn(
          "Method \"" + key + "\" has type \"" + (typeof methods[key]) + "\" in the component definition. " +
          "Did you reference the function correctly?",
          vm
        );
      }
      if (props && hasOwn(props, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a prop."),
          vm
        );
      }
      if ((key in vm) && isReserved(key)) {
        warn(
          "Method \"" + key + "\" conflicts with an existing Vue instance method. " +
          "Avoid defining component methods that start with _ or $."
        );
      }
    }
    vm[key] = typeof methods[key] !== 'function' ? noop : bind(methods[key], vm);
  }
}

function initWatch (vm, watch) {
  for (var key in watch) {
    var handler = watch[key];
    if (Array.isArray(handler)) {
      for (var i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i]);
      }
    } else {
      createWatcher(vm, key, handler);
    }
  }
}

function createWatcher (
  vm,
  expOrFn,
  handler,
  options
) {
  if (isPlainObject(handler)) {
    options = handler;
    handler = handler.handler;
  }
  if (typeof handler === 'string') {
    handler = vm[handler];
  }
  return vm.$watch(expOrFn, handler, options)
}

function stateMixin (Vue) {
  // flow somehow has problems with directly declared definition object
  // when using Object.defineProperty, so we have to procedurally build up
  // the object here.
  var dataDef = {};
  dataDef.get = function () { return this._data };
  var propsDef = {};
  propsDef.get = function () { return this._props };
  if (true) {
    dataDef.set = function () {
      warn(
        'Avoid replacing instance root $data. ' +
        'Use nested data properties instead.',
        this
      );
    };
    propsDef.set = function () {
      warn("$props is readonly.", this);
    };
  }
  Object.defineProperty(Vue.prototype, '$data', dataDef);
  Object.defineProperty(Vue.prototype, '$props', propsDef);

  Vue.prototype.$set = set;
  Vue.prototype.$delete = del;

  Vue.prototype.$watch = function (
    expOrFn,
    cb,
    options
  ) {
    var vm = this;
    if (isPlainObject(cb)) {
      return createWatcher(vm, expOrFn, cb, options)
    }
    options = options || {};
    options.user = true;
    var watcher = new Watcher(vm, expOrFn, cb, options);
    if (options.immediate) {
      try {
        cb.call(vm, watcher.value);
      } catch (error) {
        handleError(error, vm, ("callback for immediate watcher \"" + (watcher.expression) + "\""));
      }
    }
    return function unwatchFn () {
      watcher.teardown();
    }
  };
}

/*  */

var uid$3 = 0;

function initMixin (Vue) {
  Vue.prototype._init = function (options) {
    var vm = this;
    // a uid
    vm._uid = uid$3++;

    var startTag, endTag;
    /* istanbul ignore if */
    if ( true && config.performance && mark) {
      startTag = "vue-perf-start:" + (vm._uid);
      endTag = "vue-perf-end:" + (vm._uid);
      mark(startTag);
    }

    // a flag to avoid this being observed
    vm._isVue = true;
    // merge options
    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options);
    } else {
      vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor),
        options || {},
        vm
      );
    }
    /* istanbul ignore else */
    if (true) {
      initProxy(vm);
    } else {}
    // expose real self
    vm._self = vm;
    initLifecycle(vm);
    initEvents(vm);
    initRender(vm);
    callHook(vm, 'beforeCreate');
    !vm._$fallback && initInjections(vm); // resolve injections before data/props  
    initState(vm);
    !vm._$fallback && initProvide(vm); // resolve provide after data/props
    !vm._$fallback && callHook(vm, 'created');      

    /* istanbul ignore if */
    if ( true && config.performance && mark) {
      vm._name = formatComponentName(vm, false);
      mark(endTag);
      measure(("vue " + (vm._name) + " init"), startTag, endTag);
    }

    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}

function initInternalComponent (vm, options) {
  var opts = vm.$options = Object.create(vm.constructor.options);
  // doing this because it's faster than dynamic enumeration.
  var parentVnode = options._parentVnode;
  opts.parent = options.parent;
  opts._parentVnode = parentVnode;

  var vnodeComponentOptions = parentVnode.componentOptions;
  opts.propsData = vnodeComponentOptions.propsData;
  opts._parentListeners = vnodeComponentOptions.listeners;
  opts._renderChildren = vnodeComponentOptions.children;
  opts._componentTag = vnodeComponentOptions.tag;

  if (options.render) {
    opts.render = options.render;
    opts.staticRenderFns = options.staticRenderFns;
  }
}

function resolveConstructorOptions (Ctor) {
  var options = Ctor.options;
  if (Ctor.super) {
    var superOptions = resolveConstructorOptions(Ctor.super);
    var cachedSuperOptions = Ctor.superOptions;
    if (superOptions !== cachedSuperOptions) {
      // super option changed,
      // need to resolve new options.
      Ctor.superOptions = superOptions;
      // check if there are any late-modified/attached options (#4976)
      var modifiedOptions = resolveModifiedOptions(Ctor);
      // update base extend options
      if (modifiedOptions) {
        extend(Ctor.extendOptions, modifiedOptions);
      }
      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
      if (options.name) {
        options.components[options.name] = Ctor;
      }
    }
  }
  return options
}

function resolveModifiedOptions (Ctor) {
  var modified;
  var latest = Ctor.options;
  var sealed = Ctor.sealedOptions;
  for (var key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified) { modified = {}; }
      modified[key] = latest[key];
    }
  }
  return modified
}

function Vue (options) {
  if ( true &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword');
  }
  this._init(options);
}

initMixin(Vue);
stateMixin(Vue);
eventsMixin(Vue);
lifecycleMixin(Vue);
renderMixin(Vue);

/*  */

function initUse (Vue) {
  Vue.use = function (plugin) {
    var installedPlugins = (this._installedPlugins || (this._installedPlugins = []));
    if (installedPlugins.indexOf(plugin) > -1) {
      return this
    }

    // additional parameters
    var args = toArray(arguments, 1);
    args.unshift(this);
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args);
    }
    installedPlugins.push(plugin);
    return this
  };
}

/*  */

function initMixin$1 (Vue) {
  Vue.mixin = function (mixin) {
    this.options = mergeOptions(this.options, mixin);
    return this
  };
}

/*  */

function initExtend (Vue) {
  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
  Vue.cid = 0;
  var cid = 1;

  /**
   * Class inheritance
   */
  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var SuperId = Super.cid;
    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId]
    }

    var name = extendOptions.name || Super.options.name;
    if ( true && name) {
      validateComponentName(name);
    }

    var Sub = function VueComponent (options) {
      this._init(options);
    };
    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(
      Super.options,
      extendOptions
    );
    Sub['super'] = Super;

    // For props and computed properties, we define the proxy getters on
    // the Vue instances at extension time, on the extended prototype. This
    // avoids Object.defineProperty calls for each instance created.
    if (Sub.options.props) {
      initProps$1(Sub);
    }
    if (Sub.options.computed) {
      initComputed$1(Sub);
    }

    // allow further extension/mixin/plugin usage
    Sub.extend = Super.extend;
    Sub.mixin = Super.mixin;
    Sub.use = Super.use;

    // create asset registers, so extended classes
    // can have their private assets too.
    ASSET_TYPES.forEach(function (type) {
      Sub[type] = Super[type];
    });
    // enable recursive self-lookup
    if (name) {
      Sub.options.components[name] = Sub;
    }

    // keep a reference to the super options at extension time.
    // later at instantiation we can check if Super's options have
    // been updated.
    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;
    Sub.sealedOptions = extend({}, Sub.options);

    // cache constructor
    cachedCtors[SuperId] = Sub;
    return Sub
  };
}

function initProps$1 (Comp) {
  var props = Comp.options.props;
  for (var key in props) {
    proxy(Comp.prototype, "_props", key);
  }
}

function initComputed$1 (Comp) {
  var computed = Comp.options.computed;
  for (var key in computed) {
    defineComputed(Comp.prototype, key, computed[key]);
  }
}

/*  */

function initAssetRegisters (Vue) {
  /**
   * Create asset registration methods.
   */
  ASSET_TYPES.forEach(function (type) {
    Vue[type] = function (
      id,
      definition
    ) {
      if (!definition) {
        return this.options[type + 's'][id]
      } else {
        /* istanbul ignore if */
        if ( true && type === 'component') {
          validateComponentName(id);
        }
        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }
        if (type === 'directive' && typeof definition === 'function') {
          definition = { bind: definition, update: definition };
        }
        this.options[type + 's'][id] = definition;
        return definition
      }
    };
  });
}

/*  */



function getComponentName (opts) {
  return opts && (opts.Ctor.options.name || opts.tag)
}

function matches (pattern, name) {
  if (Array.isArray(pattern)) {
    return pattern.indexOf(name) > -1
  } else if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1
  } else if (isRegExp(pattern)) {
    return pattern.test(name)
  }
  /* istanbul ignore next */
  return false
}

function pruneCache (keepAliveInstance, filter) {
  var cache = keepAliveInstance.cache;
  var keys = keepAliveInstance.keys;
  var _vnode = keepAliveInstance._vnode;
  for (var key in cache) {
    var cachedNode = cache[key];
    if (cachedNode) {
      var name = getComponentName(cachedNode.componentOptions);
      if (name && !filter(name)) {
        pruneCacheEntry(cache, key, keys, _vnode);
      }
    }
  }
}

function pruneCacheEntry (
  cache,
  key,
  keys,
  current
) {
  var cached$$1 = cache[key];
  if (cached$$1 && (!current || cached$$1.tag !== current.tag)) {
    cached$$1.componentInstance.$destroy();
  }
  cache[key] = null;
  remove(keys, key);
}

var patternTypes = [String, RegExp, Array];

var KeepAlive = {
  name: 'keep-alive',
  abstract: true,

  props: {
    include: patternTypes,
    exclude: patternTypes,
    max: [String, Number]
  },

  created: function created () {
    this.cache = Object.create(null);
    this.keys = [];
  },

  destroyed: function destroyed () {
    for (var key in this.cache) {
      pruneCacheEntry(this.cache, key, this.keys);
    }
  },

  mounted: function mounted () {
    var this$1 = this;

    this.$watch('include', function (val) {
      pruneCache(this$1, function (name) { return matches(val, name); });
    });
    this.$watch('exclude', function (val) {
      pruneCache(this$1, function (name) { return !matches(val, name); });
    });
  },

  render: function render () {
    var slot = this.$slots.default;
    var vnode = getFirstComponentChild(slot);
    var componentOptions = vnode && vnode.componentOptions;
    if (componentOptions) {
      // check pattern
      var name = getComponentName(componentOptions);
      var ref = this;
      var include = ref.include;
      var exclude = ref.exclude;
      if (
        // not included
        (include && (!name || !matches(include, name))) ||
        // excluded
        (exclude && name && matches(exclude, name))
      ) {
        return vnode
      }

      var ref$1 = this;
      var cache = ref$1.cache;
      var keys = ref$1.keys;
      var key = vnode.key == null
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        ? componentOptions.Ctor.cid + (componentOptions.tag ? ("::" + (componentOptions.tag)) : '')
        : vnode.key;
      if (cache[key]) {
        vnode.componentInstance = cache[key].componentInstance;
        // make current key freshest
        remove(keys, key);
        keys.push(key);
      } else {
        cache[key] = vnode;
        keys.push(key);
        // prune oldest entry
        if (this.max && keys.length > parseInt(this.max)) {
          pruneCacheEntry(cache, keys[0], keys, this._vnode);
        }
      }

      vnode.data.keepAlive = true;
    }
    return vnode || (slot && slot[0])
  }
};

var builtInComponents = {
  KeepAlive: KeepAlive
};

/*  */

function initGlobalAPI (Vue) {
  // config
  var configDef = {};
  configDef.get = function () { return config; };
  if (true) {
    configDef.set = function () {
      warn(
        'Do not replace the Vue.config object, set individual fields instead.'
      );
    };
  }
  Object.defineProperty(Vue, 'config', configDef);

  // exposed util methods.
  // NOTE: these are not considered part of the public API - avoid relying on
  // them unless you are aware of the risk.
  Vue.util = {
    warn: warn,
    extend: extend,
    mergeOptions: mergeOptions,
    defineReactive: defineReactive$$1
  };

  Vue.set = set;
  Vue.delete = del;
  Vue.nextTick = nextTick;

  // 2.6 explicit observable API
  Vue.observable = function (obj) {
    observe(obj);
    return obj
  };

  Vue.options = Object.create(null);
  ASSET_TYPES.forEach(function (type) {
    Vue.options[type + 's'] = Object.create(null);
  });

  // this is used to identify the "base" constructor to extend all plain-object
  // components with in Weex's multi-instance scenarios.
  Vue.options._base = Vue;

  extend(Vue.options.components, builtInComponents);

  initUse(Vue);
  initMixin$1(Vue);
  initExtend(Vue);
  initAssetRegisters(Vue);
}

initGlobalAPI(Vue);

Object.defineProperty(Vue.prototype, '$isServer', {
  get: isServerRendering
});

Object.defineProperty(Vue.prototype, '$ssrContext', {
  get: function get () {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext
  }
});

// expose FunctionalRenderContext for ssr runtime helper installation
Object.defineProperty(Vue, 'FunctionalRenderContext', {
  value: FunctionalRenderContext
});

Vue.version = '2.6.11';

/**
 * https://raw.githubusercontent.com/Tencent/westore/master/packages/westore/utils/diff.js
 */
var ARRAYTYPE = '[object Array]';
var OBJECTTYPE = '[object Object]';
// const FUNCTIONTYPE = '[object Function]'

function diff(current, pre) {
    var result = {};
    syncKeys(current, pre);
    _diff(current, pre, '', result);
    return result
}

function syncKeys(current, pre) {
    if (current === pre) { return }
    var rootCurrentType = type(current);
    var rootPreType = type(pre);
    if (rootCurrentType == OBJECTTYPE && rootPreType == OBJECTTYPE) {
        if(Object.keys(current).length >= Object.keys(pre).length){
            for (var key in pre) {
                var currentValue = current[key];
                if (currentValue === undefined) {
                    current[key] = null;
                } else {
                    syncKeys(currentValue, pre[key]);
                }
            }
        }
    } else if (rootCurrentType == ARRAYTYPE && rootPreType == ARRAYTYPE) {
        if (current.length >= pre.length) {
            pre.forEach(function (item, index) {
                syncKeys(current[index], item);
            });
        }
    }
}

function _diff(current, pre, path, result) {
    if (current === pre) { return }
    var rootCurrentType = type(current);
    var rootPreType = type(pre);
    if (rootCurrentType == OBJECTTYPE) {
        if (rootPreType != OBJECTTYPE || Object.keys(current).length < Object.keys(pre).length) {
            setResult(result, path, current);
        } else {
            var loop = function ( key ) {
                var currentValue = current[key];
                var preValue = pre[key];
                var currentType = type(currentValue);
                var preType = type(preValue);
                if (currentType != ARRAYTYPE && currentType != OBJECTTYPE) {
                    if (currentValue !== pre[key]) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    }
                } else if (currentType == ARRAYTYPE) {
                    if (preType != ARRAYTYPE) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    } else {
                        if (currentValue.length < preValue.length) {
                            setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                        } else {
                            currentValue.forEach(function (item, index) {
                                _diff(item, preValue[index], (path == '' ? '' : path + ".") + key + '[' + index + ']', result);
                            });
                        }
                    }
                } else if (currentType == OBJECTTYPE) {
                    if (preType != OBJECTTYPE || Object.keys(currentValue).length < Object.keys(preValue).length) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    } else {
                        for (var subKey in currentValue) {
                            _diff(currentValue[subKey], preValue[subKey], (path == '' ? '' : path + ".") + key + '.' + subKey, result);
                        }
                    }
                }
            };

            for (var key in current) loop( key );
        }
    } else if (rootCurrentType == ARRAYTYPE) {
        if (rootPreType != ARRAYTYPE) {
            setResult(result, path, current);
        } else {
            if (current.length < pre.length) {
                setResult(result, path, current);
            } else {
                current.forEach(function (item, index) {
                    _diff(item, pre[index], path + '[' + index + ']', result);
                });
            }
        }
    } else {
        setResult(result, path, current);
    }
}

function setResult(result, k, v) {
    // if (type(v) != FUNCTIONTYPE) {
        result[k] = v;
    // }
}

function type(obj) {
    return Object.prototype.toString.call(obj)
}

/*  */

function flushCallbacks$1(vm) {
    if (vm.__next_tick_callbacks && vm.__next_tick_callbacks.length) {
        if (Object({"VUE_APP_NAME":"宝芸邸","VUE_APP_PLATFORM":"mp-weixin","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG) {
            var mpInstance = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + vm._uid +
                ']:flushCallbacks[' + vm.__next_tick_callbacks.length + ']');
        }
        var copies = vm.__next_tick_callbacks.slice(0);
        vm.__next_tick_callbacks.length = 0;
        for (var i = 0; i < copies.length; i++) {
            copies[i]();
        }
    }
}

function hasRenderWatcher(vm) {
    return queue.find(function (watcher) { return vm._watcher === watcher; })
}

function nextTick$1(vm, cb) {
    //1.nextTick 之前 已 setData 且 setData 还未回调完成
    //2.nextTick 之前存在 render watcher
    if (!vm.__next_tick_pending && !hasRenderWatcher(vm)) {
        if(Object({"VUE_APP_NAME":"宝芸邸","VUE_APP_PLATFORM":"mp-weixin","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG){
            var mpInstance = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + vm._uid +
                ']:nextVueTick');
        }
        return nextTick(cb, vm)
    }else{
        if(Object({"VUE_APP_NAME":"宝芸邸","VUE_APP_PLATFORM":"mp-weixin","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG){
            var mpInstance$1 = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance$1.is || mpInstance$1.route) + '][' + vm._uid +
                ']:nextMPTick');
        }
    }
    var _resolve;
    if (!vm.__next_tick_callbacks) {
        vm.__next_tick_callbacks = [];
    }
    vm.__next_tick_callbacks.push(function () {
        if (cb) {
            try {
                cb.call(vm);
            } catch (e) {
                handleError(e, vm, 'nextTick');
            }
        } else if (_resolve) {
            _resolve(vm);
        }
    });
    // $flow-disable-line
    if (!cb && typeof Promise !== 'undefined') {
        return new Promise(function (resolve) {
            _resolve = resolve;
        })
    }
}

/*  */

function cloneWithData(vm) {
  // 确保当前 vm 所有数据被同步
  var ret = Object.create(null);
  var dataKeys = [].concat(
    Object.keys(vm._data || {}),
    Object.keys(vm._computedWatchers || {}));

  dataKeys.reduce(function(ret, key) {
    ret[key] = vm[key];
    return ret
  }, ret);

  // vue-composition-api
  var compositionApiState = vm.__composition_api_state__ || vm.__secret_vfa_state__;
  var rawBindings = compositionApiState && compositionApiState.rawBindings;
  if (rawBindings) {
    Object.keys(rawBindings).forEach(function (key) {
      ret[key] = vm[key];
    });
  }

  //TODO 需要把无用数据处理掉，比如 list=>l0 则 list 需要移除，否则多传输一份数据
  Object.assign(ret, vm.$mp.data || {});
  if (
    Array.isArray(vm.$options.behaviors) &&
    vm.$options.behaviors.indexOf('uni://form-field') !== -1
  ) { //form-field
    ret['name'] = vm.name;
    ret['value'] = vm.value;
  }

  return JSON.parse(JSON.stringify(ret))
}

var patch = function(oldVnode, vnode) {
  var this$1 = this;

  if (vnode === null) { //destroy
    return
  }
  if (this.mpType === 'page' || this.mpType === 'component') {
    var mpInstance = this.$scope;
    var data = Object.create(null);
    try {
      data = cloneWithData(this);
    } catch (err) {
      console.error(err);
    }
    data.__webviewId__ = mpInstance.data.__webviewId__;
    var mpData = Object.create(null);
    Object.keys(data).forEach(function (key) { //仅同步 data 中有的数据
      mpData[key] = mpInstance.data[key];
    });
    var diffData = this.$shouldDiffData === false ? data : diff(data, mpData);
    if (Object.keys(diffData).length) {
      if (Object({"VUE_APP_NAME":"宝芸邸","VUE_APP_PLATFORM":"mp-weixin","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG) {
        console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + this._uid +
          ']差量更新',
          JSON.stringify(diffData));
      }
      this.__next_tick_pending = true;
      mpInstance.setData(diffData, function () {
        this$1.__next_tick_pending = false;
        flushCallbacks$1(this$1);
      });
    } else {
      flushCallbacks$1(this);
    }
  }
};

/*  */

function createEmptyRender() {

}

function mountComponent$1(
  vm,
  el,
  hydrating
) {
  if (!vm.mpType) {//main.js 中的 new Vue
    return vm
  }
  if (vm.mpType === 'app') {
    vm.$options.render = createEmptyRender;
  }
  if (!vm.$options.render) {
    vm.$options.render = createEmptyRender;
    if (true) {
      /* istanbul ignore if */
      if ((vm.$options.template && vm.$options.template.charAt(0) !== '#') ||
        vm.$options.el || el) {
        warn(
          'You are using the runtime-only build of Vue where the template ' +
          'compiler is not available. Either pre-compile the templates into ' +
          'render functions, or use the compiler-included build.',
          vm
        );
      } else {
        warn(
          'Failed to mount component: template or render function not defined.',
          vm
        );
      }
    }
  }
  
  !vm._$fallback && callHook(vm, 'beforeMount');

  var updateComponent = function () {
    vm._update(vm._render(), hydrating);
  };

  // we set this to vm._watcher inside the watcher's constructor
  // since the watcher's initial patch may call $forceUpdate (e.g. inside child
  // component's mounted hook), which relies on vm._watcher being already defined
  new Watcher(vm, updateComponent, noop, {
    before: function before() {
      if (vm._isMounted && !vm._isDestroyed) {
        callHook(vm, 'beforeUpdate');
      }
    }
  }, true /* isRenderWatcher */);
  hydrating = false;
  return vm
}

/*  */

function renderClass (
  staticClass,
  dynamicClass
) {
  if (isDef(staticClass) || isDef(dynamicClass)) {
    return concat(staticClass, stringifyClass(dynamicClass))
  }
  /* istanbul ignore next */
  return ''
}

function concat (a, b) {
  return a ? b ? (a + ' ' + b) : a : (b || '')
}

function stringifyClass (value) {
  if (Array.isArray(value)) {
    return stringifyArray(value)
  }
  if (isObject(value)) {
    return stringifyObject(value)
  }
  if (typeof value === 'string') {
    return value
  }
  /* istanbul ignore next */
  return ''
}

function stringifyArray (value) {
  var res = '';
  var stringified;
  for (var i = 0, l = value.length; i < l; i++) {
    if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
      if (res) { res += ' '; }
      res += stringified;
    }
  }
  return res
}

function stringifyObject (value) {
  var res = '';
  for (var key in value) {
    if (value[key]) {
      if (res) { res += ' '; }
      res += key;
    }
  }
  return res
}

/*  */

var parseStyleText = cached(function (cssText) {
  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return res
});

// normalize possible array / string values into Object
function normalizeStyleBinding (bindingStyle) {
  if (Array.isArray(bindingStyle)) {
    return toObject(bindingStyle)
  }
  if (typeof bindingStyle === 'string') {
    return parseStyleText(bindingStyle)
  }
  return bindingStyle
}

/*  */

var MP_METHODS = ['createSelectorQuery', 'createIntersectionObserver', 'selectAllComponents', 'selectComponent'];

function getTarget(obj, path) {
  var parts = path.split('.');
  var key = parts[0];
  if (key.indexOf('__$n') === 0) { //number index
    key = parseInt(key.replace('__$n', ''));
  }
  if (parts.length === 1) {
    return obj[key]
  }
  return getTarget(obj[key], parts.slice(1).join('.'))
}

function internalMixin(Vue) {

  Vue.config.errorHandler = function(err, vm, info) {
    Vue.util.warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
    console.error(err);
    /* eslint-disable no-undef */
    var app = typeof getApp === 'function' && getApp();
    if (app && app.onError) {
      app.onError(err);
    }
  };

  var oldEmit = Vue.prototype.$emit;

  Vue.prototype.$emit = function(event) {
    if (this.$scope && event) {
      (this.$scope['_triggerEvent'] || this.$scope['triggerEvent']).call(this.$scope, event, {
        __args__: toArray(arguments, 1)
      });
    }
    return oldEmit.apply(this, arguments)
  };

  Vue.prototype.$nextTick = function(fn) {
    return nextTick$1(this, fn)
  };

  MP_METHODS.forEach(function (method) {
    Vue.prototype[method] = function(args) {
      if (this.$scope && this.$scope[method]) {
        return this.$scope[method](args)
      }
      // mp-alipay
      if (typeof my === 'undefined') {
        return
      }
      if (method === 'createSelectorQuery') {
        /* eslint-disable no-undef */
        return my.createSelectorQuery(args)
      } else if (method === 'createIntersectionObserver') {
        /* eslint-disable no-undef */
        return my.createIntersectionObserver(args)
      }
      // TODO mp-alipay 暂不支持 selectAllComponents,selectComponent
    };
  });

  Vue.prototype.__init_provide = initProvide;

  Vue.prototype.__init_injections = initInjections;

  Vue.prototype.__call_hook = function(hook, args) {
    var vm = this;
    // #7573 disable dep collection when invoking lifecycle hooks
    pushTarget();
    var handlers = vm.$options[hook];
    var info = hook + " hook";
    var ret;
    if (handlers) {
      for (var i = 0, j = handlers.length; i < j; i++) {
        ret = invokeWithErrorHandling(handlers[i], vm, args ? [args] : null, vm, info);
      }
    }
    if (vm._hasHookEvent) {
      vm.$emit('hook:' + hook, args);
    }
    popTarget();
    return ret
  };

  Vue.prototype.__set_model = function(target, key, value, modifiers) {
    if (Array.isArray(modifiers)) {
      if (modifiers.indexOf('trim') !== -1) {
        value = value.trim();
      }
      if (modifiers.indexOf('number') !== -1) {
        value = this._n(value);
      }
    }
    if (!target) {
      target = this;
    }
    // 解决动态属性添加
    Vue.set(target, key, value);
  };

  Vue.prototype.__set_sync = function(target, key, value) {
    if (!target) {
      target = this;
    }
    // 解决动态属性添加
    Vue.set(target, key, value);
  };

  Vue.prototype.__get_orig = function(item) {
    if (isPlainObject(item)) {
      return item['$orig'] || item
    }
    return item
  };

  Vue.prototype.__get_value = function(dataPath, target) {
    return getTarget(target || this, dataPath)
  };


  Vue.prototype.__get_class = function(dynamicClass, staticClass) {
    return renderClass(staticClass, dynamicClass)
  };

  Vue.prototype.__get_style = function(dynamicStyle, staticStyle) {
    if (!dynamicStyle && !staticStyle) {
      return ''
    }
    var dynamicStyleObj = normalizeStyleBinding(dynamicStyle);
    var styleObj = staticStyle ? extend(staticStyle, dynamicStyleObj) : dynamicStyleObj;
    return Object.keys(styleObj).map(function (name) { return ((hyphenate(name)) + ":" + (styleObj[name])); }).join(';')
  };

  Vue.prototype.__map = function(val, iteratee) {
    //TODO 暂不考虑 string
    var ret, i, l, keys, key;
    if (Array.isArray(val)) {
      ret = new Array(val.length);
      for (i = 0, l = val.length; i < l; i++) {
        ret[i] = iteratee(val[i], i);
      }
      return ret
    } else if (isObject(val)) {
      keys = Object.keys(val);
      ret = Object.create(null);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[key] = iteratee(val[key], key, i);
      }
      return ret
    } else if (typeof val === 'number') {
      ret = new Array(val);
      for (i = 0, l = val; i < l; i++) {
        // 第一个参数暂时仍和小程序一致
        ret[i] = iteratee(i, i);
      }
      return ret
    }
    return []
  };

}

/*  */

var LIFECYCLE_HOOKS$1 = [
    //App
    'onLaunch',
    'onShow',
    'onHide',
    'onUniNViewMessage',
    'onPageNotFound',
    'onThemeChange',
    'onError',
    'onUnhandledRejection',
    //Page
    'onInit',
    'onLoad',
    // 'onShow',
    'onReady',
    // 'onHide',
    'onUnload',
    'onPullDownRefresh',
    'onReachBottom',
    'onTabItemTap',
    'onAddToFavorites',
    'onShareTimeline',
    'onShareAppMessage',
    'onResize',
    'onPageScroll',
    'onNavigationBarButtonTap',
    'onBackPress',
    'onNavigationBarSearchInputChanged',
    'onNavigationBarSearchInputConfirmed',
    'onNavigationBarSearchInputClicked',
    //Component
    // 'onReady', // 兼容旧版本，应该移除该事件
    'onPageShow',
    'onPageHide',
    'onPageResize'
];
function lifecycleMixin$1(Vue) {

    //fixed vue-class-component
    var oldExtend = Vue.extend;
    Vue.extend = function(extendOptions) {
        extendOptions = extendOptions || {};

        var methods = extendOptions.methods;
        if (methods) {
            Object.keys(methods).forEach(function (methodName) {
                if (LIFECYCLE_HOOKS$1.indexOf(methodName)!==-1) {
                    extendOptions[methodName] = methods[methodName];
                    delete methods[methodName];
                }
            });
        }

        return oldExtend.call(this, extendOptions)
    };

    var strategies = Vue.config.optionMergeStrategies;
    var mergeHook = strategies.created;
    LIFECYCLE_HOOKS$1.forEach(function (hook) {
        strategies[hook] = mergeHook;
    });

    Vue.prototype.__lifecycle_hooks__ = LIFECYCLE_HOOKS$1;
}

/*  */

// install platform patch function
Vue.prototype.__patch__ = patch;

// public mount method
Vue.prototype.$mount = function(
    el ,
    hydrating 
) {
    return mountComponent$1(this, el, hydrating)
};

lifecycleMixin$1(Vue);
internalMixin(Vue);

/*  */

/* harmony default export */ __webpack_exports__["default"] = (Vue);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../webpack/buildin/global.js */ 2)))

/***/ }),

/***/ 40:
/*!****************************************************************************!*\
  !*** C:/Users/luyus/Desktop/baoyun-mansion/uview-ui/libs/config/zIndex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; // uniapp在H5中各API的z-index值如下：
/**
 * actionsheet: 999
 * modal: 999
 * navigate: 998
 * tabbar: 998
 * toast: 999
 */var _default =

{
  toast: 10090,
  noNetwork: 10080,
  // popup包含popup，actionsheet，keyboard，picker的值
  popup: 10075,
  mask: 10070,
  navbar: 980,
  topTips: 975,
  sticky: 970,
  indexListSticky: 965 };exports.default = _default;

/***/ }),

/***/ 41:
/*!************************************************************!*\
  !*** C:/Users/luyus/Desktop/baoyun-mansion/utils/share.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default = {
  onShareAppMessage: function onShareAppMessage(res) {//发送给朋友
    var aa = 0;
    if (uni.getStorageSync("user_info").bbs != null) {
      aa = uni.getStorageSync("user_info").bbs.id;
    }
    return {
      title: '宝芸邸家居',
      path: '/pages/Home/start?uid=' + uni.getStorageSync("user_info").id + "&level=" + aa,
      imageUrl: 'https://bao.scwushen.com/uploads/20220518/b3e5fcf6950318229cc046a5532e368d.png' };

  },
  onShareTimeline: function onShareTimeline(res) {//分享到朋友圈
    var aa = 0;
    if (uni.getStorageSync("user_info").bbs != null) {
      aa = uni.getStorageSync("user_info").bbs.id;
    }
    return {
      title: '宝芸邸家居',
      imageUrl: 'https://bao.scwushen.com/uploads/20220518/b3e5fcf6950318229cc046a5532e368d.png',
      query: {
        uid: uni.getStorageSync("user_info").id,
        level: aa } };


  } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 42:
/*!**************************************************************!*\
  !*** C:/Users/luyus/Desktop/baoyun-mansion/utils/islogin.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _api = _interopRequireDefault(__webpack_require__(/*! @/utils/api */ 43));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

function log() {
  return new Promise(function (resolve, reject) {
    var level = 0;
    var pid = 0;
    var ewm = 0;
    if (uni.getStorageSync("yaoqinglevel")) {
      level = uni.getStorageSync("yaoqinglevel");
    }
    if (uni.getStorageSync("yaoqinguid")) {
      pid = uni.getStorageSync("yaoqinguid");
    }
    if (uni.getStorageSync("yaoqingewm")) {
      ewm = uni.getStorageSync("yaoqingewm");
    }
    if (!uni.getStorageSync("user_info")) {
      uni.getUserProfile({
        desc: 'Wexin',
        success: function success(data) {
          uni.login({
            provider: 'weixin',
            success: function success(loginRes) {
              _api.default.wxlogin({
                code: loginRes.code,
                iv: data.iv,
                encryptedData: data.encryptedData,
                level: level,
                pid: pid
                // ewm
              }).then(function (data) {
                if (data.data.code == 1) {
                  uni.setStorageSync("token", data.data.data);
                  uni.setStorageSync("key", data.data.data.
                  status.key);
                  uni.setStorageSync("showssss", false);
                  uni.removeStorageSync('yaoqinglevel');
                  _api.default.myuser({
                    user_id: data.data.data.status.
                    id }).
                  then(function (data) {
                    if (data.data.code == 1) {
                      uni.setStorageSync(
                      "user_info", data.
                      data.data.myuser);
                      if (pid != 0) {
                        _api.default.ewmjoin({
                          user_id: uni.
                          getStorageSync(
                          "user_info").

                          id,
                          pid: pid }).
                        then(function (data) {
                          if (data.
                          data.
                          code ==
                          1) {
                            uni.removeStorageSync(
                            'yaoqinguid');

                          }
                        });
                      }
                      _api.default.addressshow({
                        id: data.data.
                        data.myuser.
                        id }).
                      then(function (data) {
                        if (data.data.
                        code == 1)
                        {
                          data.data.
                          data.
                          status.
                          forEach(
                          function (item) {
                            if (item.
                            auto ==
                            1)
                            {
                              uni.setStorageSync(
                              "address",
                              item);

                            }
                          });
                        }
                      });
                      resolve(true);
                    }
                  });
                } else {
                  resolve(false);
                  uni.showToast({
                    title: data.data.msg,
                    duration: 1000,
                    icon: "none" });

                }
              });
            } });

        } });

    } else {
      resolve(true);
    }
  });

}var _default =
log;exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 43:
/*!****************************************************************!*\
  !*** C:/Users/luyus/Desktop/baoyun-mansion/utils/api/index.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _request = _interopRequireDefault(__webpack_require__(/*! ./request.js */ 44));var _qsj$puser$yqpeople$l;function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}var _default = (_qsj$puser$yqpeople$l = {

  qsj: function qsj() {var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return _request.default.post("/api/byd_user/qsj", params);
  },
  puser: function puser() {var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return _request.default.post("/api/byd_user/puser", params);
  },
  yqpeople: function yqpeople() {var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return _request.default.post("/api/byd_user/yqpeople", params);
  },
  likeuser: function likeuser() {var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return _request.default.post("/api/byd_user/likeuser", params);
  },
  allpeople: function allpeople() {var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return _request.default.post("/api/byd_user/allpeople", params);
  },
  lpagreement: function lpagreement() {var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return _request.default.post("/api/bydshop/lpagreement", params);
  },
  likelp: function likelp() {var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return _request.default.post("/api/bydshop/likelp", params);
  },
  mapstation: function mapstation() {var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return _request.default.post("/api/bydshop/mapstation", params);
  },
  fou: function fou() {var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return _request.default.post("/api/bydshop/fou", params);
  },
  tjsq: function tjsq() {var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return _request.default.post("/api/bydidentity/tjsq", params);
  },
  sqb: function sqb() {var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return _request.default.post("/api/bydidentity/sqb", params);
  },
  lpmap: function lpmap() {var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return _request.default.post("/api/bydshop/lpmap", params);
  },
  paycupons: function paycupons() {var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return _request.default.post("/api/bydshop/paycupons", params);
  },
  cupons: function cupons() {var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return _request.default.post("/api/bydshop/cupons", params);
  },
  mycupon: function mycupon() {var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return _request.default.post("/api/bydshop/mycupons", params);
  },
  desljpf: function desljpf() {var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return _request.default.post("/api/bydshop/desljpf", params);
  },
  pf: function pf() {var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return _request.default.post("/api/bydshop/pf", params);
  },
  map: function map() {var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return _request.default.post("/api/bydshop/map", params);
  },
  mobile: function mobile() {var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return _request.default.post("/api/byd_user/mobile", params);
  },
  pots: function pots() {var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return _request.default.post("/api/bydshop/pots", params);
  },
  xqsh: function xqsh() {var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return _request.default.post("/api/bydshop/xqsh", params);
  },
  sqty: function sqty() {var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return _request.default.post("/api/bydshop/sqty", params);
  },
  taskstatus: function taskstatus() {var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return _request.default.post("/api/bydshop/taskstatus", params);
  },
  gettask: function gettask() {var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return _request.default.post("/api/bydshop/gettask", params);
  },
  emsphone: function emsphone() {var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return _request.default.post("/api/ems/sends", params);
  },
  emsyzphone: function emsyzphone() {var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return _request.default.post("/api/ems/sendsyz", params);
  },
  userupload: function userupload() {var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return _request.default.post("/api/bydshop/userupload", params);
  },
  userinfo: function userinfo() {var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return _request.default.post("/api/bydshop/userinfo", params);
  },
  contract: function contract() {var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return _request.default.post("/api/bydshop/contract", params);
  },
  querysuccess: function querysuccess() {var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return _request.default.post("/api/bydshop/querysuccess", params);
  },
  realname: function realname() {var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return _request.default.post("/api/bydshop/realname", params);
  },
  myreg: function myreg() {var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return _request.default.post("/api/bydshop/myreg", params);
  },
  zhxmy: function zhxmy() {var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return _request.default.post("/api/bydshop/zhxmy", params);
  },
  myag: function myag() {var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return _request.default.post("/api/bydshop/myag", params);
  },
  userag: function userag() {var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return _request.default.post("/api/bydshop/userag", params);
  },
  sqexpress: function sqexpress() {var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return _request.default.post("/api/bydshop/sqexpress", params);
  },
  dingj: function dingj() {var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return _request.default.post("/api/bydshop/dingj", params);
  },
  successloading: function successloading() {var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return _request.default.post("/api/bydshop/successloading", params);
  },
  agreement: function agreement() {var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return _request.default.post("/api/Bydidentity/agreement", params);
  },
  agreements: function agreements() {var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return _request.default.post("/api/Bydidentity/agreements", params);
  },
  sqlading: function sqlading() {var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return _request.default.post("/api/bydshop/sqlading", params);
  },
  deslabel: function deslabel() {var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return _request.default.post("/api/bydidentity/deslabel", params);
  },
  deleorder: function deleorder() {var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return _request.default.post("/api/bydshop/deleorder", params);
  },
  mypl: function mypl() {var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return _request.default.post("/api/bydshop/mypl", params);
  },
  activtz: function activtz() {var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return _request.default.post("/api/byd_user/activtz", params);
  },
  letter: function letter() {var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return _request.default.post("/api/byd_user/letter", params);
  },
  timeshop: function timeshop() {var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return _request.default.post("/api/bydshop/timeshop", params);
  },
  color: function color() {var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return _request.default.post("/api/bydindex/color", params);
  },
  shopicon: function shopicon() {var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return _request.default.post("/api/bydshop/shopicon", params);
  },
  star: function star() {var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return _request.default.post("/api/bydidentity/star", params);
  },
  recruit: function recruit() {var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return _request.default.post("/api/bydindex/recruit", params);
  },
  sqorder: function sqorder() {var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return _request.default.post("/api/bydshop/sqorder", params);
  },
  delefa: function delefa() {var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return _request.default.post("/api/bydidentity/delefa", params);
  },
  desmyuser: function desmyuser() {var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return _request.default.post("/api/bydidentity/myuser", params);
  },
  myuser: function myuser() {var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return _request.default.post("/api/byd_user/myuser", params);
  },
  desproMoenys: function desproMoenys() {var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return _request.default.post("/api/bydidentity/desproMoenys", params);
  },
  addressdel: function addressdel() {var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return _request.default.post("/api/byd_user/addressdel", params);
  },
  qxorder: function qxorder() {var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return _request.default.post("/api/bydshop/qxorder", params);
  },
  shopplhf: function shopplhf() {var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return _request.default.post("/api/bydshop/shopplhf", params);
  },
  indexPl: function indexPl() {var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return _request.default.post("/api/bydindex/pl", params);
  },
  indexplhf: function indexplhf() {var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return _request.default.post("/api/bydindex/plhf", params);
  },
  orderset: function orderset() {var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return _request.default.post("/api/bydshop/orderset", params);
  },
  wxlogin: function wxlogin() {var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return _request.default.post("/api/byd_user/wxlogin", params);
  },
  desfollow: function desfollow() {var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return _request.default.post("/api/byd_user/desfollow", params);
  },
  edituser: function edituser() {var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return _request.default.post("/api/byd_user/edituser", params);
  },
  indexcontent: function indexcontent() {var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return _request.default.post("/api/bydindex/indexcontent", params);
  },
  banner: function banner() {var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return _request.default.post("/api/bydindex/banner", params);
  },
  yydes: function yydes() {var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return _request.default.post("/api/Bydidentity/yydes", params);
  },
  addpostspic: function addpostspic() {var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return _request.default.post("/api/byd_user/addpostspic", params);
  },
  style: function style() {var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return _request.default.post("/api/bydindex/style", params);
  },
  huxin: function huxin() {var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return _request.default.post("/api/bydindex/huxin", params);
  },
  huxincategory: function huxincategory() {var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return _request.default.post("/api/bydindex/huxincategory", params);
  },
  setcategory: function setcategory() {var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return _request.default.post("/api/bydindex/setcategory", params);
  },
  setxq: function setxq() {var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return _request.default.post("/api/bydindex/setxq", params);
  },
  qjset: function qjset() {var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return _request.default.post("/api/bydindex/qjset", params);
  },
  indexbar: function indexbar() {var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return _request.default.post("/api/bydindex/indexbar", params);
  },
  bydadout: function bydadout() {var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return _request.default.post("/api/bydindex/bydadout", params);
  },
  indexlike: function indexlike() {var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return _request.default.post("/api/bydindex/indexlike", params);
  },
  loupanden: function loupanden() {var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return _request.default.post("/api/bydindex/loupanden", params);
  },
  loupanlike: function loupanlike() {var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return _request.default.post("/api/bydindex/loupanlike", params);
  },
  loupanxq: function loupanxq() {var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return _request.default.post("/api/bydindex/loupanxq", params);
  },
  setleft: function setleft() {var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return _request.default.post("/api/bydindex/setleft", params);
  },
  pl: function pl() {var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return _request.default.post("/api/bydshop/pl", params);
  },
  indexpl: function indexpl() {var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return _request.default.post("/api/bydindex/pl", params);
  },
  shopxq: function shopxq() {var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return _request.default.post("/api/bydshop/shopxq", params);
  },
  shopindex: function shopindex() {var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return _request.default.post("/api/bydshop/shopindex", params);
  },
  orderdzf: function orderdzf() {var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return _request.default.post("/api/bydshop/orderdzf", params);
  },
  ordertui: function ordertui() {var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return _request.default.post("/api/bydshop/ordertui", params);
  } }, _defineProperty(_qsj$puser$yqpeople$l, "ordertui", function ordertui()
{var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return _request.default.post("/api/bydshop/ordertui", params);
}), _defineProperty(_qsj$puser$yqpeople$l, "myorder", function myorder()
{var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return _request.default.post("/api/bydshop/myorder", params);
}), _defineProperty(_qsj$puser$yqpeople$l, "myfollow", function myfollow()
{var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return _request.default.post("/api/byd_user/myfollow", params);
}), _defineProperty(_qsj$puser$yqpeople$l, "sureorder", function sureorder()
{var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return _request.default.post("/api/bydshop/sureorder", params);
}), _defineProperty(_qsj$puser$yqpeople$l, "cartdel", function cartdel()
{var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return _request.default.post("/api/bydshop/cartdel", params);
}), _defineProperty(_qsj$puser$yqpeople$l, "shopcart", function shopcart()
{var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return _request.default.post("/api/bydshop/shopcart", params);
}), _defineProperty(_qsj$puser$yqpeople$l, "addcart", function addcart()
{var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return _request.default.post("/api/bydshop/addcart", params);
}), _defineProperty(_qsj$puser$yqpeople$l, "seemore", function seemore()
{var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return _request.default.post("/api/bydshop/seemore", params);
}), _defineProperty(_qsj$puser$yqpeople$l, "categoryshop", function categoryshop()
{var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return _request.default.post("/api/bydshop/categoryshop", params);
}), _defineProperty(_qsj$puser$yqpeople$l, "cartpay", function cartpay()
{var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return _request.default.post("/api/bydshop/cartpay", params);
}), _defineProperty(_qsj$puser$yqpeople$l, "shoplike", function shoplike()
{var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return _request.default.post("/api/bydshop/shoplike", params);
}), _defineProperty(_qsj$puser$yqpeople$l, "enjoy", function enjoy()
{var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return _request.default.post("/api/bydindex/enjoy", params);
}), _defineProperty(_qsj$puser$yqpeople$l, "zan", function zan()
{var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return _request.default.post("/api/bydindex/zan", params);
}), _defineProperty(_qsj$puser$yqpeople$l, "addfollow", function addfollow()
{var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return _request.default.post("/api/bydshop/addfollow", params);
}), _defineProperty(_qsj$puser$yqpeople$l, "dessel", function dessel()
{var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return _request.default.post("/api/bydidentity/dessel", params);
}), _defineProperty(_qsj$puser$yqpeople$l, "desxq", function desxq()
{var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return _request.default.post("/api/bydidentity/desxq", params);
}), _defineProperty(_qsj$puser$yqpeople$l, "buylevel", function buylevel()
{var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return _request.default.post("/api/bydidentity/buylevel", params);
}), _defineProperty(_qsj$puser$yqpeople$l, "ispay", function ispay()
{var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return _request.default.post("/api/bydidentity/ispay", params);
}), _defineProperty(_qsj$puser$yqpeople$l, "adddes", function adddes()
{var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return _request.default.post("/api/bydidentity/adddes", params);
}), _defineProperty(_qsj$puser$yqpeople$l, "addressshow", function addressshow()
{var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return _request.default.post("/api/byd_user/addressshow", params);
}), _defineProperty(_qsj$puser$yqpeople$l, "address", function address()
{var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return _request.default.post("/api/byd_user/address", params);
}), _defineProperty(_qsj$puser$yqpeople$l, "des", function des()
{var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return _request.default.post("/api/bydidentity/des", params);
}), _defineProperty(_qsj$puser$yqpeople$l, "shenfen", function shenfen()
{var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return _request.default.post("/api/bydidentity/shenfen", params);
}), _defineProperty(_qsj$puser$yqpeople$l, "addnews", function addnews()
{var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return _request.default.post("/api/bydidentity/addnews", params);
}), _defineProperty(_qsj$puser$yqpeople$l, "desorder", function desorder()
{var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return _request.default.post("/api/bydidentity/desorder", params);
}), _defineProperty(_qsj$puser$yqpeople$l, "desmyteam", function desmyteam()
{var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return _request.default.post("/api/bydidentity/desmyteam", params);
}), _defineProperty(_qsj$puser$yqpeople$l, "myteam", function myteam()
{var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return _request.default.post("/api/bydidentity/myteam", params);
}), _defineProperty(_qsj$puser$yqpeople$l, "mysub", function mysub()
{var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return _request.default.post("/api/bydidentity/mysub", params);
}), _defineProperty(_qsj$puser$yqpeople$l, "desorders", function desorders()
{var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return _request.default.post("/api/bydidentity/desorders", params);
}), _defineProperty(_qsj$puser$yqpeople$l, "desindex", function desindex()
{var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return _request.default.post("/api/bydidentity/desindex", params);
}), _defineProperty(_qsj$puser$yqpeople$l, "desmode", function desmode()
{var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return _request.default.post("/api/bydidentity/desmode", params);
}), _defineProperty(_qsj$puser$yqpeople$l, "addprogramme", function addprogramme()
{var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return _request.default.post("/api/bydidentity/addprogramme", params);
}), _defineProperty(_qsj$puser$yqpeople$l, "loupancategory", function loupancategory()
{var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return _request.default.post("/api/bydindex/loupancategory", params);
}), _defineProperty(_qsj$puser$yqpeople$l, "mymake", function mymake()
{var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return _request.default.post("/api/byd_user/mymake", params);
}), _defineProperty(_qsj$puser$yqpeople$l, "upewm", function upewm()
{var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return _request.default.post("/api/bydidentity/upewm", params);
}), _defineProperty(_qsj$puser$yqpeople$l, "ewm", function ewm()
{var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return _request.default.post("/api/bydindex/ewm", params);
}), _defineProperty(_qsj$puser$yqpeople$l, "business", function business()
{var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return _request.default.post("/api/byd_user/business", params);
}), _defineProperty(_qsj$puser$yqpeople$l, "orderdzf", function orderdzf()
{var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return _request.default.post("/api/bydshop/orderdzf", params);
}), _defineProperty(_qsj$puser$yqpeople$l, "orderpay", function orderpay()
{var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return _request.default.post("/api/bydshop/orderpay", params);
}), _defineProperty(_qsj$puser$yqpeople$l, "lookexpress", function lookexpress()
{var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return _request.default.post("/api/bydshop/lookexpress", params);
}), _defineProperty(_qsj$puser$yqpeople$l, "sureorder", function sureorder()
{var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return _request.default.post("/api/bydshop/sureorder", params);
}), _defineProperty(_qsj$puser$yqpeople$l, "editdes", function editdes()
{var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return _request.default.post("/api/bydidentity/editdes", params);
}), _defineProperty(_qsj$puser$yqpeople$l, "contein", function contein()
{var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return _request.default.post("/api/bydidentity/contein", params);
}), _defineProperty(_qsj$puser$yqpeople$l, "despro", function despro()
{var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return _request.default.post("/api/bydidentity/despro", params);
}), _defineProperty(_qsj$puser$yqpeople$l, "paymoney", function paymoney()
{var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return _request.default.post("/api/bydidentity/paymoney", params);
}), _defineProperty(_qsj$puser$yqpeople$l, "delfollow", function delfollow()
{var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return _request.default.post("/api/byd_user/delfollow", params);
}), _defineProperty(_qsj$puser$yqpeople$l, "mydesigner", function mydesigner()
{var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return _request.default.post("/api/byd_user/mydesigner", params);
}), _defineProperty(_qsj$puser$yqpeople$l, "myfootxr", function myfootxr()
{var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return _request.default.post("/api/bydshop/myfootxr", params);
}), _defineProperty(_qsj$puser$yqpeople$l, "delfootxr", function delfootxr()
{var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return _request.default.post("/api/bydshop/delfootxr", params);
}), _defineProperty(_qsj$puser$yqpeople$l, "bzxq", function bzxq()
{var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return _request.default.post("/api/bydshop/bzxq", params);
}), _defineProperty(_qsj$puser$yqpeople$l, "qzqy", function qzqy()
{var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return _request.default.post("/api/byd_user/qzqy", params);
}), _defineProperty(_qsj$puser$yqpeople$l, "timeout", function timeout()
{var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return _request.default.post("/api/byd_user/timeout", params);
}), _defineProperty(_qsj$puser$yqpeople$l, "blp", function blp()
{var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return _request.default.post("/api/byd_user/blp", params);
}), _defineProperty(_qsj$puser$yqpeople$l, "ewmjoin", function ewmjoin()
{var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return _request.default.post("/api/byd_user/ewmjoin", params);
}), _defineProperty(_qsj$puser$yqpeople$l, "tgfw", function tgfw()
{var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return _request.default.post("/api/byd_user/tgfw", params);
}), _defineProperty(_qsj$puser$yqpeople$l, "fwsure", function fwsure()
{var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return _request.default.post("/api/byd_user/fwsure", params);
}), _defineProperty(_qsj$puser$yqpeople$l, "pxxr", function pxxr()
{var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return _request.default.post("/api/bydshop/pxxr", params);
}), _defineProperty(_qsj$puser$yqpeople$l, "pxsq", function pxsq()
{var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return _request.default.post("/api/bydshop/pxsq", params);
}), _defineProperty(_qsj$puser$yqpeople$l, "qxment", function qxment()
{var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return _request.default.post("/api/bydshop/qxment", params);
}), _defineProperty(_qsj$puser$yqpeople$l, "vrnews", function vrnews()
{var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return _request.default.post("/api/bydshop/vrnews", params);
}), _defineProperty(_qsj$puser$yqpeople$l, "cuxx", function cuxx()
{var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return _request.default.post("/api/bydshop/cuxx", params);
}), _defineProperty(_qsj$puser$yqpeople$l, "videopl", function videopl()
{var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return _request.default.post("/api/bydindex/videopl", params);
}), _defineProperty(_qsj$puser$yqpeople$l, "sendsvr", function sendsvr()
{var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return _request.default.post("/api/ems/sendsvr", params);
}), _defineProperty(_qsj$puser$yqpeople$l, "sorcemx", function sorcemx()
{var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return _request.default.post("/api/byd_user/sorcemx", params);
}), _defineProperty(_qsj$puser$yqpeople$l, "scoregoods", function scoregoods()
{var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return _request.default.post("/api/bydshop/scoregoods", params);
}), _defineProperty(_qsj$puser$yqpeople$l, "shoppay", function shoppay()
{var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return _request.default.post("/api/bydshop/shoppay", params);
}), _defineProperty(_qsj$puser$yqpeople$l, "idlikelp", function idlikelp()
{var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return _request.default.post("/api/bydidentity/likelp", params);
}), _qsj$puser$yqpeople$l);exports.default = _default;

/***/ }),

/***/ 44:
/*!******************************************************************!*\
  !*** C:/Users/luyus/Desktop/baoyun-mansion/utils/api/request.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _js_sdk = _interopRequireDefault(__webpack_require__(/*! ./u-ajax/js_sdk/ */ 45));
var _api = _interopRequireDefault(__webpack_require__(/*! @/utils/api */ 43));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
var CSbaseURL = "";
if (false) {} else {
  CSbaseURL = "https://bao.scwushen.com/index.php";
}
var instance = _js_sdk.default.create({
  baseURL: CSbaseURL,
  timeout: 60000,
  header: {
    post: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' } } });



var token = uni.getStorageSync("token") || 0;
instance.interceptors.request.use(
function (config) {
  config.header["token"] = token.token;
  //模拟用户
  // config.data.user_id = "120"
  return config;
},
function (error) {
  uni.showToast({
    title: "网络错误",
    duration: 1000,
    icon: "none" });

  return Promise.reject(error);
});

instance.interceptors.response.use(
function (response) {
  return response;
},
function (error) {
  var bb = error.config.url.split("/");
  if (bb[bb.length - 1] != "cuxx") {
    var aa = {
      data: error.config.data,
      url: error.config.url };

    _api.default.cuxx({
      user_id: uni.getStorageSync("user_info").id || 0,
      content: JSON.stringify(aa) });

  }
  uni.showToast({
    title: "服务器繁忙,请稍后重试",
    duration: 1200,
    icon: "none" });

  return Promise.reject(error);
});var _default =

instance;exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 45:
/*!******************************************************************************!*\
  !*** C:/Users/luyus/Desktop/baoyun-mansion/utils/api/u-ajax/js_sdk/index.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _Ajax = _interopRequireDefault(__webpack_require__(/*! ./lib/core/Ajax */ 46));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

function createInstance(defaultConfig) {
  return new _Ajax.default(defaultConfig).request;
}

var ajax = createInstance();

ajax.create = function create(instanceConfig) {
  return createInstance(instanceConfig);
};var _default =

ajax;exports.default = _default;

/***/ }),

/***/ 46:
/*!**************************************************************************************!*\
  !*** C:/Users/luyus/Desktop/baoyun-mansion/utils/api/u-ajax/js_sdk/lib/core/Ajax.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 20));var _InterceptorManager = _interopRequireDefault(__webpack_require__(/*! ./InterceptorManager */ 47));
var _Request = _interopRequireDefault(__webpack_require__(/*! ../adapters/Request */ 48));
var _detachConfig2 = _interopRequireDefault(__webpack_require__(/*! ../helpers/detachConfig */ 49));
var _mergeConfig = _interopRequireDefault(__webpack_require__(/*! ../helpers/mergeConfig */ 52));
var _originURL = _interopRequireDefault(__webpack_require__(/*! ../helpers/originURL */ 53));
var _dispatchRequest = _interopRequireDefault(__webpack_require__(/*! ./dispatchRequest */ 54));
var _handleCancel = __webpack_require__(/*! ./handleCancel */ 59);
var _defaults = _interopRequireWildcard(__webpack_require__(/*! ../defaults */ 57));
var _utils = __webpack_require__(/*! ../utils */ 51);function _getRequireWildcardCache() {if (typeof WeakMap !== "function") return null;var cache = new WeakMap();_getRequireWildcardCache = function _getRequireWildcardCache() {return cache;};return cache;}function _interopRequireWildcard(obj) {if (obj && obj.__esModule) {return obj;}if (obj === null || typeof obj !== "object" && typeof obj !== "function") {return { default: obj };}var cache = _getRequireWildcardCache();if (cache && cache.has(obj)) {return cache.get(obj);}var newObj = {};var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;for (var key in obj) {if (Object.prototype.hasOwnProperty.call(obj, key)) {var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;if (desc && (desc.get || desc.set)) {Object.defineProperty(newObj, key, desc);} else {newObj[key] = obj[key];}}}newObj.default = obj;if (cache) {cache.set(obj, newObj);}return newObj;}function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _toConsumableArray(arr) {return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();}function _nonIterableSpread() {throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === "string") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === "Object" && o.constructor) n = o.constructor.name;if (n === "Map" || n === "Set") return Array.from(o);if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _iterableToArray(iter) {if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);}function _arrayWithoutHoles(arr) {if (Array.isArray(arr)) return _arrayLikeToArray(arr);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) {arr2[i] = arr[i];}return arr2;}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);}_next(undefined);});};}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}var

Ajax = /*#__PURE__*/function () {
  function Ajax(_config) {var _this = this;_classCallCheck(this, Ajax);_defineProperty(this, "request",





































    function () {
      // 分类请求参数
      var _detachConfig = _detachConfig2.default.apply(void 0, arguments),callback = _detachConfig.callback,config = _detachConfig.config;

      // 创建请求类
      var Request = (0, _Request.default)();

      // 声明 Promise 链
      var chain = [(0, _dispatchRequest.default)(Request), _handleCancel.dispatchCancel];

      // 将请求拦截遍历添加到链前面
      _this.request.interceptors.request.forEach.desc(function (_ref) {var fulfilled = _ref.fulfilled,rejected = _ref.rejected;return (
          chain.unshift(fulfilled, rejected));});


      // 将响应拦截遍历添加到链后面
      _this.request.interceptors.response.forEach.asc(function (_ref2) {var fulfilled = _ref2.fulfilled,rejected = _ref2.rejected;return (
          chain.push(fulfilled, (0, _handleCancel.interceptCancel)(rejected)));});


      // 先执行获取 config 请求配置
      chain.unshift( /*#__PURE__*/function () {var _ref3 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee(config) {return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:_context.t0 = _mergeConfig.default;_context.next = 3;return _this.config;case 3:_context.t1 = _context.sent;_context.t2 = config;return _context.abrupt("return", (0, _context.t0)(_context.t1, _context.t2));case 6:case "end":return _context.stop();}}}, _callee);}));return function (_x) {return _ref3.apply(this, arguments);};}(), undefined);

      // 处理发起请求前的错误数据
      chain.push(undefined, _handleCancel.detachCancel);

      // 调用请求方法后，且拦截器触发完成后，判断回调参数的执行
      chain.push(
      function (response) {var _callback$success, _callback$complete;
        if (!callback) return response;
        (_callback$success = callback.success) === null || _callback$success === void 0 ? void 0 : _callback$success.call(callback, response);
        (_callback$complete = callback.complete) === null || _callback$complete === void 0 ? void 0 : _callback$complete.call(callback, response);
      },
      function (error) {var _callback$fail, _callback$complete2;
        if (!callback) return Promise.reject(error);
        (_callback$fail = callback.fail) === null || _callback$fail === void 0 ? void 0 : _callback$fail.call(callback, error);
        (_callback$complete2 = callback.complete) === null || _callback$complete2 === void 0 ? void 0 : _callback$complete2.call(callback, error);
      });


      // 创建请求Promise，遍历链将链上方法传递到then回调
      var request = Request.resolve(config);
      while (chain.length) {
        request = request.then(chain.shift(), chain.shift());
      }

      return request;
    }); // 赋值到实例配置
    this.config = _config; // 挂载拦截器
    this.request.interceptors = { request: new _InterceptorManager.default(), response: new _InterceptorManager.default() }; // 挂载修改 config 方法
    this.request.config = /*#__PURE__*/function () {var _ref4 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2(fn) {return _regenerator.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:_context2.next = 2;return fn(_this._config);case 2:return _context2.abrupt("return", _this.config = _context2.sent);case 3:case "end":return _context2.stop();}}}, _callee2);}));return function (_x2) {return _ref4.apply(this, arguments);};}(); // 挂载对应的 method 方法
    (0, _utils.forEach)(_defaults.METHOD, function (method) {_this.request[method] = function (url, data, config) {return _this.request.apply(_this, _toConsumableArray(typeof url === 'string' ? [url, data, _objectSpread(_objectSpread({}, config), {}, { method: method })] : [_objectSpread(_objectSpread({}, url), {}, { method: method })]));};}); // 挂载实例接口地址
    setTimeout( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee3() {return _regenerator.default.wrap(function _callee3$(_context3) {while (1) {switch (_context3.prev = _context3.next) {case 0:_context3.next = 2;return _this.config;case 2:_context3.t0 = _context3.sent.baseURL;if (_context3.t0) {_context3.next = 5;break;}_context3.t0 = '';case 5:_this.request.baseURL = _context3.t0;_this.request.origin = (0, _originURL.default)(_this.request.baseURL);case 7:case "end":return _context3.stop();}}}, _callee3);})));}_createClass(Ajax, [{ key: "config", set: function set(config) {this._config = typeof config === 'function' ? /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee4() {return _regenerator.default.wrap(function _callee4$(_context4) {while (1) {switch (_context4.prev = _context4.next) {case 0:_context4.t0 = _mergeConfig.default;_context4.t1 = _defaults.default;_context4.next = 4;return config();case 4:_context4.t2 = _context4.sent;return _context4.abrupt("return", (0, _context4.t0)(_context4.t1, _context4.t2));case 6:case "end":return _context4.stop();}}}, _callee4);})) : (0, _mergeConfig.default)(_defaults.default, config);}, get: function get() {return typeof this._config === 'function' ? this._config() : this._config;} }]);return Ajax;}();exports.default = Ajax;

/***/ }),

/***/ 47:
/*!****************************************************************************************************!*\
  !*** C:/Users/luyus/Desktop/baoyun-mansion/utils/api/u-ajax/js_sdk/lib/core/InterceptorManager.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;} /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             * 拦截器类
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             */var
InterceptorManager = /*#__PURE__*/function () {


  function InterceptorManager() {var _this = this;_classCallCheck(this, InterceptorManager);_defineProperty(this, "handlers", []);
    this.forEach = {
      asc: function asc(fn) {
        for (var i = 0, l = _this.handlers.length; i < l; i++) {
          _this.handlers[i] !== null && fn(_this.handlers[i]);
        }
      },
      desc: function desc(fn) {
        for (var i = _this.handlers.length - 1; i >= 0; i--) {
          _this.handlers[i] !== null && fn(_this.handlers[i]);
        }
      } };

  }_createClass(InterceptorManager, [{ key: "use", value: function use(

    fulfilled, rejected) {
      this.handlers.push({
        fulfilled: fulfilled,
        rejected: rejected });

      return this.handlers.length - 1;
    } }, { key: "eject", value: function eject(
    id) {
      if (this.handlers[id]) {
        this.handlers[id] = null;
      }
    } }]);return InterceptorManager;}();exports.default = InterceptorManager;

/***/ }),

/***/ 48:
/*!*********************************************************************************************!*\
  !*** C:/Users/luyus/Desktop/baoyun-mansion/utils/api/u-ajax/js_sdk/lib/adapters/Request.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = RequestConstructor;function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function");}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });if (superClass) _setPrototypeOf(subClass, superClass);}function _createSuper(Derived) {var hasNativeReflectConstruct = _isNativeReflectConstruct();return function _createSuperInternal() {var Super = _getPrototypeOf(Derived),result;if (hasNativeReflectConstruct) {var NewTarget = _getPrototypeOf(this).constructor;result = Reflect.construct(Super, arguments, NewTarget);} else {result = Super.apply(this, arguments);}return _possibleConstructorReturn(this, result);};}function _possibleConstructorReturn(self, call) {if (call && (typeof call === "object" || typeof call === "function")) {return call;}return _assertThisInitialized(self);}function _assertThisInitialized(self) {if (self === void 0) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function _wrapNativeSuper(Class) {var _cache = typeof Map === "function" ? new Map() : undefined;_wrapNativeSuper = function _wrapNativeSuper(Class) {if (Class === null || !_isNativeFunction(Class)) return Class;if (typeof Class !== "function") {throw new TypeError("Super expression must either be null or a function");}if (typeof _cache !== "undefined") {if (_cache.has(Class)) return _cache.get(Class);_cache.set(Class, Wrapper);}function Wrapper() {return _construct(Class, arguments, _getPrototypeOf(this).constructor);}Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } });return _setPrototypeOf(Wrapper, Class);};return _wrapNativeSuper(Class);}function _construct(Parent, args, Class) {if (_isNativeReflectConstruct()) {_construct = Reflect.construct;} else {_construct = function _construct(Parent, args, Class) {var a = [null];a.push.apply(a, args);var Constructor = Function.bind.apply(Parent, a);var instance = new Constructor();if (Class) _setPrototypeOf(instance, Class.prototype);return instance;};}return _construct.apply(null, arguments);}function _isNativeReflectConstruct() {if (typeof Reflect === "undefined" || !Reflect.construct) return false;if (Reflect.construct.sham) return false;if (typeof Proxy === "function") return true;try {Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));return true;} catch (e) {return false;}}function _isNativeFunction(fn) {return Function.toString.call(fn).indexOf("[native code]") !== -1;}function _setPrototypeOf(o, p) {_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {o.__proto__ = p;return o;};return _setPrototypeOf(o, p);}function _getPrototypeOf(o) {_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {return o.__proto__ || Object.getPrototypeOf(o);};return _getPrototypeOf(o);}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}function RequestConstructor() {var _class, _temp;
  return _temp = _class = /*#__PURE__*/function (_Promise) {_inherits(Request, _Promise);var _super = _createSuper(Request);function Request() {_classCallCheck(this, Request);return _super.apply(this, arguments);}_createClass(Request, [{ key: "abort",




























      // 中断请求任务
      value: function abort() {var _Request$task;
        Request.aborted = true;
        (_Request$task = Request.task) === null || _Request$task === void 0 ? void 0 : _Request$task.abort();
        return this;
      }
      // 监听 HTTP Response Header 事件
    }, { key: "onHeadersReceived", value: function onHeadersReceived(fn) {
        Request.onHeadersReceived(fn);
        return this;
      }
      // 取消监听 HTTP Response Header 事件
    }, { key: "offHeadersReceived", value: function offHeadersReceived(fn) {
        Request.offHeadersReceived(fn);
        return this;
      } }], [{ key: "onHeadersReceived", // RequestTask 对象
      // 请求任务是否被中断
      // 监听 HTTP Response Header 事件回调函数
      // 取消监听 HTTP Response Header 事件回调函数
      // 监听 HTTP Response Header 事件执行函数
      value: function onHeadersReceived(fn) {if (typeof fn === 'function') {Request.onHeadersReceivedCallback = fn;}if (Request.onHeadersReceivedCallback && Request.task) {var _Request$task$onHeade, _Request$task2;(_Request$task$onHeade = (_Request$task2 = Request.task).onHeadersReceived) === null || _Request$task$onHeade === void 0 ? void 0 : _Request$task$onHeade.call(_Request$task2, Request.onHeadersReceivedCallback);}} // 取消监听 HTTP Response Header 事件执行函数
    }, { key: "offHeadersReceived", value: function offHeadersReceived(fn) {if (typeof fn === 'function') {Request.offHeadersReceivedCallback = fn;}if (Request.offHeadersReceivedCallback && Request.task) {var _Request$task$offHead, _Request$task3;(_Request$task$offHead = (_Request$task3 = Request.task).offHeadersReceived) === null || _Request$task$offHead === void 0 ? void 0 : _Request$task$offHead.call(_Request$task3, Request.offHeadersReceivedCallback);}} }]);return Request;}( /*#__PURE__*/_wrapNativeSuper(Promise)), _defineProperty(_class, "task", null), _defineProperty(_class, "aborted", false), _defineProperty(_class, "onHeadersReceivedCallback", null), _defineProperty(_class, "offHeadersReceivedCallback", null), _temp;}

/***/ }),

/***/ 49:
/*!*************************************************************************************************!*\
  !*** C:/Users/luyus/Desktop/baoyun-mansion/utils/api/u-ajax/js_sdk/lib/helpers/detachConfig.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = detachConfig;var _isCallback = _interopRequireDefault(__webpack_require__(/*! ./isCallback */ 50));
var _utils = __webpack_require__(/*! ../utils */ 51);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}

/**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           * 分离请求对象
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           * @param {string|object} [url] 请求地址 / 请求配置
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           * @param {string|object} [data] 请求参数
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           * @param {object} [config] 请求配置
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           * @returns {object} 回调函数对象 去除回调的请求参数
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           */
function detachConfig(url, data, config) {
  // 回调函数对象
  var callback = null;
  // 去除回调的请求参数对象
  var options = {};

  // 是否传入单个参数
  var isSingle = typeof url === 'object';

  // 请求参数对象
  var value = isSingle ? url : _objectSpread(_objectSpread({}, config), {}, { url: url, data: data });

  // 分离请求参数
  (0, _utils.forEach)(value, function (val, key) {
    if (isSingle && (0, _isCallback.default)(key)) {
      ;(callback || (callback = {}))[key] = (0, _utils.tryCatch)(val);
    } else {
      options[key] = val;
    }
  });

  return {
    callback: callback,
    config: options };

}

/***/ }),

/***/ 5:
/*!********************************************************!*\
  !*** C:/Users/luyus/Desktop/baoyun-mansion/pages.json ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 50:
/*!***********************************************************************************************!*\
  !*** C:/Users/luyus/Desktop/baoyun-mansion/utils/api/u-ajax/js_sdk/lib/helpers/isCallback.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = isCallback; /**
                                                                                                          * 判断参数是否含有回调参数 success / fail / complete 之一
                                                                                                          * @param {string} field 参数的 Key 值字符串
                                                                                                          * @returns {boolean} 返回判断值
                                                                                                          */
function isCallback(field) {
  return ['success', 'fail', 'complete'].includes(field);
}

/***/ }),

/***/ 51:
/*!**********************************************************************************!*\
  !*** C:/Users/luyus/Desktop/baoyun-mansion/utils/api/u-ajax/js_sdk/lib/utils.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.isArray = isArray;exports.isPlainObject = isPlainObject;exports.forEach = forEach;exports.merge = merge;exports.assign = assign;exports.tryCatch = tryCatch; /**
                                                                                                                                                                                                                                                 * 获取值的原始类型字符串，例如 [object Object]
                                                                                                                                                                                                                                                 */
var _toString = Object.prototype.toString;

/**
                                            * 判断是否为数组
                                            * @param {*} val 要判断的值
                                            * @returns {boolean} 返回判断结果
                                            */
function isArray(val) {
  return _toString.call(val) === '[object Array]';
}

/**
   * 判断是否为普通对象
   * @param {*} val 要判断的值
   * @returns {boolean} 返回判断结果
   */
function isPlainObject(val) {
  return _toString.call(val) === '[object Object]';
}

/**
   * 遍历
   * @param {object|array} obj 要迭代的对象
   * @param {function} fn 为每个项调用的回调
   */
function forEach(obj, fn) {
  if (obj === null || obj === undefined) return;
  if (typeof obj !== 'object') obj = [obj];
  if (isArray(obj)) {
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    for (var k in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, k)) {
        fn.call(null, obj[k], k, obj);
      }
    }
  }
}

/**
   * 对象深合并
   * @param  {...object} args 对象
   * @returns {object} 合并后的对象
   */
function merge() {
  var result = {};for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {args[_key] = arguments[_key];}
  for (var i = 0, l = args.length; i < l; i++) {
    if (isPlainObject(args[i])) {
      forEach(args[i], function (val, key) {
        result[key] = assign(result[key], val);
      });
    }
  }
  return result;
}

/**
   * 合并分配到目标对象
   * @param {*} target 目标对象
   * @param {*} source 源对象
   * @returns {*} 目标对象
   */
function assign(target, source) {
  if (isPlainObject(target) && isPlainObject(source)) {
    return merge(target, source);
  } else if (isPlainObject(source)) {
    return merge({}, source);
  } else if (isArray(source)) {
    return source.slice();
  }
  return source;
}

/**
   * trycatch 封装函数
   * @param {function} fn 函数
   * @returns {function} 封装 trycatch 后的函数
   */
function tryCatch(fn) {
  return function () {
    try {
      return fn.apply(fn, arguments);
    } catch (error) {
      console.error(error);
    }
  };
}

/***/ }),

/***/ 52:
/*!************************************************************************************************!*\
  !*** C:/Users/luyus/Desktop/baoyun-mansion/utils/api/u-ajax/js_sdk/lib/helpers/mergeConfig.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = mergeConfig;var _utils = __webpack_require__(/*! ../utils */ 51);function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}

/**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       * 合并请求配置（深度合并，且不合并 undefined 值）
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       * @param {object} config1 前请求配置
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       * @param {object} [config2] 后请求配置
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       * @returns {object} 合并后的请求配置
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       */
function mergeConfig(config1) {var config2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var config = {};

  var configKeys = Object.keys(_objectSpread(_objectSpread({}, config1), config2));

  (0, _utils.forEach)(configKeys, function (prop) {
    if (config2[prop] !== undefined) {
      config[prop] = (0, _utils.assign)(config1[prop], config2[prop]);
    } else if (config1[prop] !== undefined) {
      config[prop] = (0, _utils.assign)(undefined, config1[prop]);
    }
  });

  config.method = config.method.toUpperCase();

  return config;
}

/***/ }),

/***/ 53:
/*!**********************************************************************************************!*\
  !*** C:/Users/luyus/Desktop/baoyun-mansion/utils/api/u-ajax/js_sdk/lib/helpers/originURL.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = originURL; /**
                                                                                                         * 根据 baseURL 获取源地址
                                                                                                         * @param {string} baseURL 请求跟地址
                                                                                                         * @returns {string} 源地址
                                                                                                         */
function originURL() {var baseURL = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  // 判断是否 http:// 或 https:// 开头
  if (!/^https?:\/\//.test(baseURL)) return '';
  var u = baseURL.split('/');
  return u[0] + '//' + u[2];
}

/***/ }),

/***/ 54:
/*!*************************************************************************************************!*\
  !*** C:/Users/luyus/Desktop/baoyun-mansion/utils/api/u-ajax/js_sdk/lib/core/dispatchRequest.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = dispatchRequest;var _buildURL = _interopRequireDefault(__webpack_require__(/*! ../helpers/buildURL */ 55));
var _combineURL = _interopRequireDefault(__webpack_require__(/*! ../helpers/combineURL */ 56));
var _isCallback = _interopRequireDefault(__webpack_require__(/*! ../helpers/isCallback */ 50));
var _utils = __webpack_require__(/*! ../utils */ 51);
var _defaults = __webpack_require__(/*! ../defaults */ 57);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

/**
                                                                                                                                      * 派发请求方法
                                                                                                                                      * @param {*} Request 请求类
                                                                                                                                      * @returns {Promise} 执行请求方法Promise
                                                                                                                                      */
function dispatchRequest(Request) {
  return function (config) {
    // 拼接 url
    config.url = (0, _buildURL.default)((0, _combineURL.default)(config.baseURL, config.url), config.params);

    // 请求方法转大写
    config.method = (config.method || 'get').toUpperCase();

    // 调整 header 优先级
    config.header = (0, _utils.merge)(
    config.header.common,
    config.header[config.method.toLowerCase()],
    config.header);


    // 清除多余的请求头
    (0, _utils.forEach)(_defaults.HEADER, function (h) {return (0, _utils.isPlainObject)(config.header[h]) && delete config.header[h];});

    // 清除回调函数
    (0, _utils.forEach)(config, function (val, key) {return (0, _isCallback.default)(key) && delete config[key];});

    // 执行请求方法
    return config.adapter(config, Request);
  };
}

/***/ }),

/***/ 55:
/*!*********************************************************************************************!*\
  !*** C:/Users/luyus/Desktop/baoyun-mansion/utils/api/u-ajax/js_sdk/lib/helpers/buildURL.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = buildURL;var _utils = __webpack_require__(/*! ../utils */ 51);

/**
                                                                                                                                         * 根据params编译请求URL
                                                                                                                                         * @param {string} url 请求URL
                                                                                                                                         * @param {*} params URL参数
                                                                                                                                         */
function buildURL(url, params) {
  if (!params) return url;

  var query;

  var parts = [];
  (0, _utils.forEach)(params, function (val, key) {
    if (val === null || typeof val === 'undefined') return;

    if ((0, _utils.isArray)(val)) key = key + '[]';else
    val = [val];

    (0, _utils.forEach)(val, function (v) {
      if (v !== null && typeof v === 'object') {
        v = JSON.stringify(v);
      }
      parts.push(encode(key) + '=' + encode(v));
    });
  });
  query = parts.join('&');

  if (query) {
    var hashmarkIndex = url.indexOf('#');
    hashmarkIndex !== -1 && (url = url.slice(0, hashmarkIndex));
    url += (url.indexOf('?') === -1 ? '?' : '&') + query;
  }

  return url;
}

function encode(val) {
  return encodeURIComponent(val).
  replace(/%3A/gi, ':').
  replace(/%24/g, '$').
  replace(/%2C/gi, ',').
  replace(/%20/g, '+').
  replace(/%5B/gi, '[').
  replace(/%5D/gi, ']');
}

/***/ }),

/***/ 56:
/*!***********************************************************************************************!*\
  !*** C:/Users/luyus/Desktop/baoyun-mansion/utils/api/u-ajax/js_sdk/lib/helpers/combineURL.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = combineURL; /**
                                                                                                          * 根据 baseURL 和 url 拼接
                                                                                                          * @param {string} baseURL 请求跟地址
                                                                                                          * @param {string} relativeURL 请求参数地址
                                                                                                          * @returns {string} 拼接后的地址
                                                                                                          */
function combineURL() {var baseURL = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';var relativeURL = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  // 判断是否 http:// 或 https:// 开头
  if (/^https?:\/\//.test(relativeURL)) return relativeURL;
  // 去除 baseURL 结尾斜杠，去除 relativeURL 开头斜杠，再判断拼接
  return relativeURL ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '') : baseURL;
}

/***/ }),

/***/ 57:
/*!*************************************************************************************!*\
  !*** C:/Users/luyus/Desktop/baoyun-mansion/utils/api/u-ajax/js_sdk/lib/defaults.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = exports.HEADER = exports.METHOD = void 0;var _http = _interopRequireDefault(__webpack_require__(/*! ./adapters/http */ 58));
var _utils = __webpack_require__(/*! ./utils */ 51);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var METHOD = ['get', 'post', 'put', 'delete', 'connect', 'head', 'options', 'trace'];exports.METHOD = METHOD;
var HEADER = ['common'].concat(METHOD);exports.HEADER = HEADER;

var defaults = {
  adapter: _http.default,
  header: {},
  method: 'get',
  timeout: 30000,
  dataType: 'json',
  responseType: 'text',
  sslVerify: true,
  withCredentials: false,
  firstIpv4: false,
  validateStatus: function validateStatus(statusCode) {return statusCode >= 200 && statusCode < 300;} };


(0, _utils.forEach)(HEADER, function (h) {return defaults.header[h] = {};});var _default =

defaults;exports.default = _default;

/***/ }),

/***/ 58:
/*!******************************************************************************************!*\
  !*** C:/Users/luyus/Desktop/baoyun-mansion/utils/api/u-ajax/js_sdk/lib/adapters/http.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = adapter;function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}function adapter(config, Request) {
  return new Promise(function (resolve, reject) {var _config$xhr;
    // 判断是否被取消请求
    if (Request.aborted) {
      return reject({
        config: config,
        errMsg: 'request:fail abort' });

    }

    // 发起请求，并挂载 RequestTask
    Request.task = uni.request(_objectSpread(_objectSpread({},
    config), {}, {
      complete: function complete(result) {
        // 根据状态码判断要执行的触发的状态
        var response = _objectSpread({ config: config }, result);
        !config.validateStatus || config.validateStatus(result.statusCode) ?
        resolve(response) :
        reject(response);
      } }));


    // 请求类内部判断是否执行监听 HTTP Response Header 事件
    Request.onHeadersReceived();
    Request.offHeadersReceived();

    // 根据配置的 xhr 属性执行获取 RequestTask
    (_config$xhr = config.xhr) === null || _config$xhr === void 0 ? void 0 : _config$xhr.call(config, Request.task, config);
  });
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 589:
/*!************************************************************************!*\
  !*** C:/Users/luyus/Desktop/baoyun-mansion/uview-ui/libs/util/city.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var cityData = [
[{
  "label": "市辖区",
  "value": "1101" }],

[{
  "label": "市辖区",
  "value": "1201" }],

[{
  "label": "石家庄市",
  "value": "1301" },
{
  "label": "唐山市",
  "value": "1302" },
{
  "label": "秦皇岛市",
  "value": "1303" },
{
  "label": "邯郸市",
  "value": "1304" },
{
  "label": "邢台市",
  "value": "1305" },
{
  "label": "保定市",
  "value": "1306" },
{
  "label": "张家口市",
  "value": "1307" },
{
  "label": "承德市",
  "value": "1308" },
{
  "label": "沧州市",
  "value": "1309" },
{
  "label": "廊坊市",
  "value": "1310" },
{
  "label": "衡水市",
  "value": "1311" }],

[{
  "label": "太原市",
  "value": "1401" },
{
  "label": "大同市",
  "value": "1402" },
{
  "label": "阳泉市",
  "value": "1403" },
{
  "label": "长治市",
  "value": "1404" },
{
  "label": "晋城市",
  "value": "1405" },
{
  "label": "朔州市",
  "value": "1406" },
{
  "label": "晋中市",
  "value": "1407" },
{
  "label": "运城市",
  "value": "1408" },
{
  "label": "忻州市",
  "value": "1409" },
{
  "label": "临汾市",
  "value": "1410" },
{
  "label": "吕梁市",
  "value": "1411" }],

[{
  "label": "呼和浩特市",
  "value": "1501" },
{
  "label": "包头市",
  "value": "1502" },
{
  "label": "乌海市",
  "value": "1503" },
{
  "label": "赤峰市",
  "value": "1504" },
{
  "label": "通辽市",
  "value": "1505" },
{
  "label": "鄂尔多斯市",
  "value": "1506" },
{
  "label": "呼伦贝尔市",
  "value": "1507" },
{
  "label": "巴彦淖尔市",
  "value": "1508" },
{
  "label": "乌兰察布市",
  "value": "1509" },
{
  "label": "兴安盟",
  "value": "1522" },
{
  "label": "锡林郭勒盟",
  "value": "1525" },
{
  "label": "阿拉善盟",
  "value": "1529" }],

[{
  "label": "沈阳市",
  "value": "2101" },
{
  "label": "大连市",
  "value": "2102" },
{
  "label": "鞍山市",
  "value": "2103" },
{
  "label": "抚顺市",
  "value": "2104" },
{
  "label": "本溪市",
  "value": "2105" },
{
  "label": "丹东市",
  "value": "2106" },
{
  "label": "锦州市",
  "value": "2107" },
{
  "label": "营口市",
  "value": "2108" },
{
  "label": "阜新市",
  "value": "2109" },
{
  "label": "辽阳市",
  "value": "2110" },
{
  "label": "盘锦市",
  "value": "2111" },
{
  "label": "铁岭市",
  "value": "2112" },
{
  "label": "朝阳市",
  "value": "2113" },
{
  "label": "葫芦岛市",
  "value": "2114" }],

[{
  "label": "长春市",
  "value": "2201" },
{
  "label": "吉林市",
  "value": "2202" },
{
  "label": "四平市",
  "value": "2203" },
{
  "label": "辽源市",
  "value": "2204" },
{
  "label": "通化市",
  "value": "2205" },
{
  "label": "白山市",
  "value": "2206" },
{
  "label": "松原市",
  "value": "2207" },
{
  "label": "白城市",
  "value": "2208" },
{
  "label": "延边朝鲜族自治州",
  "value": "2224" }],

[{
  "label": "哈尔滨市",
  "value": "2301" },
{
  "label": "齐齐哈尔市",
  "value": "2302" },
{
  "label": "鸡西市",
  "value": "2303" },
{
  "label": "鹤岗市",
  "value": "2304" },
{
  "label": "双鸭山市",
  "value": "2305" },
{
  "label": "大庆市",
  "value": "2306" },
{
  "label": "伊春市",
  "value": "2307" },
{
  "label": "佳木斯市",
  "value": "2308" },
{
  "label": "七台河市",
  "value": "2309" },
{
  "label": "牡丹江市",
  "value": "2310" },
{
  "label": "黑河市",
  "value": "2311" },
{
  "label": "绥化市",
  "value": "2312" },
{
  "label": "大兴安岭地区",
  "value": "2327" }],

[{
  "label": "市辖区",
  "value": "3101" }],

[{
  "label": "南京市",
  "value": "3201" },
{
  "label": "无锡市",
  "value": "3202" },
{
  "label": "徐州市",
  "value": "3203" },
{
  "label": "常州市",
  "value": "3204" },
{
  "label": "苏州市",
  "value": "3205" },
{
  "label": "南通市",
  "value": "3206" },
{
  "label": "连云港市",
  "value": "3207" },
{
  "label": "淮安市",
  "value": "3208" },
{
  "label": "盐城市",
  "value": "3209" },
{
  "label": "扬州市",
  "value": "3210" },
{
  "label": "镇江市",
  "value": "3211" },
{
  "label": "泰州市",
  "value": "3212" },
{
  "label": "宿迁市",
  "value": "3213" }],

[{
  "label": "杭州市",
  "value": "3301" },
{
  "label": "宁波市",
  "value": "3302" },
{
  "label": "温州市",
  "value": "3303" },
{
  "label": "嘉兴市",
  "value": "3304" },
{
  "label": "湖州市",
  "value": "3305" },
{
  "label": "绍兴市",
  "value": "3306" },
{
  "label": "金华市",
  "value": "3307" },
{
  "label": "衢州市",
  "value": "3308" },
{
  "label": "舟山市",
  "value": "3309" },
{
  "label": "台州市",
  "value": "3310" },
{
  "label": "丽水市",
  "value": "3311" }],

[{
  "label": "合肥市",
  "value": "3401" },
{
  "label": "芜湖市",
  "value": "3402" },
{
  "label": "蚌埠市",
  "value": "3403" },
{
  "label": "淮南市",
  "value": "3404" },
{
  "label": "马鞍山市",
  "value": "3405" },
{
  "label": "淮北市",
  "value": "3406" },
{
  "label": "铜陵市",
  "value": "3407" },
{
  "label": "安庆市",
  "value": "3408" },
{
  "label": "黄山市",
  "value": "3410" },
{
  "label": "滁州市",
  "value": "3411" },
{
  "label": "阜阳市",
  "value": "3412" },
{
  "label": "宿州市",
  "value": "3413" },
{
  "label": "六安市",
  "value": "3415" },
{
  "label": "亳州市",
  "value": "3416" },
{
  "label": "池州市",
  "value": "3417" },
{
  "label": "宣城市",
  "value": "3418" }],

[{
  "label": "福州市",
  "value": "3501" },
{
  "label": "厦门市",
  "value": "3502" },
{
  "label": "莆田市",
  "value": "3503" },
{
  "label": "三明市",
  "value": "3504" },
{
  "label": "泉州市",
  "value": "3505" },
{
  "label": "漳州市",
  "value": "3506" },
{
  "label": "南平市",
  "value": "3507" },
{
  "label": "龙岩市",
  "value": "3508" },
{
  "label": "宁德市",
  "value": "3509" }],

[{
  "label": "南昌市",
  "value": "3601" },
{
  "label": "景德镇市",
  "value": "3602" },
{
  "label": "萍乡市",
  "value": "3603" },
{
  "label": "九江市",
  "value": "3604" },
{
  "label": "新余市",
  "value": "3605" },
{
  "label": "鹰潭市",
  "value": "3606" },
{
  "label": "赣州市",
  "value": "3607" },
{
  "label": "吉安市",
  "value": "3608" },
{
  "label": "宜春市",
  "value": "3609" },
{
  "label": "抚州市",
  "value": "3610" },
{
  "label": "上饶市",
  "value": "3611" }],

[{
  "label": "济南市",
  "value": "3701" },
{
  "label": "青岛市",
  "value": "3702" },
{
  "label": "淄博市",
  "value": "3703" },
{
  "label": "枣庄市",
  "value": "3704" },
{
  "label": "东营市",
  "value": "3705" },
{
  "label": "烟台市",
  "value": "3706" },
{
  "label": "潍坊市",
  "value": "3707" },
{
  "label": "济宁市",
  "value": "3708" },
{
  "label": "泰安市",
  "value": "3709" },
{
  "label": "威海市",
  "value": "3710" },
{
  "label": "日照市",
  "value": "3711" },
{
  "label": "莱芜市",
  "value": "3712" },
{
  "label": "临沂市",
  "value": "3713" },
{
  "label": "德州市",
  "value": "3714" },
{
  "label": "聊城市",
  "value": "3715" },
{
  "label": "滨州市",
  "value": "3716" },
{
  "label": "菏泽市",
  "value": "3717" }],

[{
  "label": "郑州市",
  "value": "4101" },
{
  "label": "开封市",
  "value": "4102" },
{
  "label": "洛阳市",
  "value": "4103" },
{
  "label": "平顶山市",
  "value": "4104" },
{
  "label": "安阳市",
  "value": "4105" },
{
  "label": "鹤壁市",
  "value": "4106" },
{
  "label": "新乡市",
  "value": "4107" },
{
  "label": "焦作市",
  "value": "4108" },
{
  "label": "濮阳市",
  "value": "4109" },
{
  "label": "许昌市",
  "value": "4110" },
{
  "label": "漯河市",
  "value": "4111" },
{
  "label": "三门峡市",
  "value": "4112" },
{
  "label": "南阳市",
  "value": "4113" },
{
  "label": "商丘市",
  "value": "4114" },
{
  "label": "信阳市",
  "value": "4115" },
{
  "label": "周口市",
  "value": "4116" },
{
  "label": "驻马店市",
  "value": "4117" },
{
  "label": "省直辖县级行政区划",
  "value": "4190" }],

[{
  "label": "武汉市",
  "value": "4201" },
{
  "label": "黄石市",
  "value": "4202" },
{
  "label": "十堰市",
  "value": "4203" },
{
  "label": "宜昌市",
  "value": "4205" },
{
  "label": "襄阳市",
  "value": "4206" },
{
  "label": "鄂州市",
  "value": "4207" },
{
  "label": "荆门市",
  "value": "4208" },
{
  "label": "孝感市",
  "value": "4209" },
{
  "label": "荆州市",
  "value": "4210" },
{
  "label": "黄冈市",
  "value": "4211" },
{
  "label": "咸宁市",
  "value": "4212" },
{
  "label": "随州市",
  "value": "4213" },
{
  "label": "恩施土家族苗族自治州",
  "value": "4228" },
{
  "label": "省直辖县级行政区划",
  "value": "4290" }],

[{
  "label": "长沙市",
  "value": "4301" },
{
  "label": "株洲市",
  "value": "4302" },
{
  "label": "湘潭市",
  "value": "4303" },
{
  "label": "衡阳市",
  "value": "4304" },
{
  "label": "邵阳市",
  "value": "4305" },
{
  "label": "岳阳市",
  "value": "4306" },
{
  "label": "常德市",
  "value": "4307" },
{
  "label": "张家界市",
  "value": "4308" },
{
  "label": "益阳市",
  "value": "4309" },
{
  "label": "郴州市",
  "value": "4310" },
{
  "label": "永州市",
  "value": "4311" },
{
  "label": "怀化市",
  "value": "4312" },
{
  "label": "娄底市",
  "value": "4313" },
{
  "label": "湘西土家族苗族自治州",
  "value": "4331" }],

[{
  "label": "广州市",
  "value": "4401" },
{
  "label": "韶关市",
  "value": "4402" },
{
  "label": "深圳市",
  "value": "4403" },
{
  "label": "珠海市",
  "value": "4404" },
{
  "label": "汕头市",
  "value": "4405" },
{
  "label": "佛山市",
  "value": "4406" },
{
  "label": "江门市",
  "value": "4407" },
{
  "label": "湛江市",
  "value": "4408" },
{
  "label": "茂名市",
  "value": "4409" },
{
  "label": "肇庆市",
  "value": "4412" },
{
  "label": "惠州市",
  "value": "4413" },
{
  "label": "梅州市",
  "value": "4414" },
{
  "label": "汕尾市",
  "value": "4415" },
{
  "label": "河源市",
  "value": "4416" },
{
  "label": "阳江市",
  "value": "4417" },
{
  "label": "清远市",
  "value": "4418" },
{
  "label": "东莞市",
  "value": "4419" },
{
  "label": "中山市",
  "value": "4420" },
{
  "label": "潮州市",
  "value": "4451" },
{
  "label": "揭阳市",
  "value": "4452" },
{
  "label": "云浮市",
  "value": "4453" }],

[{
  "label": "南宁市",
  "value": "4501" },
{
  "label": "柳州市",
  "value": "4502" },
{
  "label": "桂林市",
  "value": "4503" },
{
  "label": "梧州市",
  "value": "4504" },
{
  "label": "北海市",
  "value": "4505" },
{
  "label": "防城港市",
  "value": "4506" },
{
  "label": "钦州市",
  "value": "4507" },
{
  "label": "贵港市",
  "value": "4508" },
{
  "label": "玉林市",
  "value": "4509" },
{
  "label": "百色市",
  "value": "4510" },
{
  "label": "贺州市",
  "value": "4511" },
{
  "label": "河池市",
  "value": "4512" },
{
  "label": "来宾市",
  "value": "4513" },
{
  "label": "崇左市",
  "value": "4514" }],

[{
  "label": "海口市",
  "value": "4601" },
{
  "label": "三亚市",
  "value": "4602" },
{
  "label": "三沙市",
  "value": "4603" },
{
  "label": "儋州市",
  "value": "4604" },
{
  "label": "省直辖县级行政区划",
  "value": "4690" }],

[{
  "label": "市辖区",
  "value": "5001" },
{
  "label": "县",
  "value": "5002" }],

[{
  "label": "成都市",
  "value": "5101" },
{
  "label": "自贡市",
  "value": "5103" },
{
  "label": "攀枝花市",
  "value": "5104" },
{
  "label": "泸州市",
  "value": "5105" },
{
  "label": "德阳市",
  "value": "5106" },
{
  "label": "绵阳市",
  "value": "5107" },
{
  "label": "广元市",
  "value": "5108" },
{
  "label": "遂宁市",
  "value": "5109" },
{
  "label": "内江市",
  "value": "5110" },
{
  "label": "乐山市",
  "value": "5111" },
{
  "label": "南充市",
  "value": "5113" },
{
  "label": "眉山市",
  "value": "5114" },
{
  "label": "宜宾市",
  "value": "5115" },
{
  "label": "广安市",
  "value": "5116" },
{
  "label": "达州市",
  "value": "5117" },
{
  "label": "雅安市",
  "value": "5118" },
{
  "label": "巴中市",
  "value": "5119" },
{
  "label": "资阳市",
  "value": "5120" },
{
  "label": "阿坝藏族羌族自治州",
  "value": "5132" },
{
  "label": "甘孜藏族自治州",
  "value": "5133" },
{
  "label": "凉山彝族自治州",
  "value": "5134" }],

[{
  "label": "贵阳市",
  "value": "5201" },
{
  "label": "六盘水市",
  "value": "5202" },
{
  "label": "遵义市",
  "value": "5203" },
{
  "label": "安顺市",
  "value": "5204" },
{
  "label": "毕节市",
  "value": "5205" },
{
  "label": "铜仁市",
  "value": "5206" },
{
  "label": "黔西南布依族苗族自治州",
  "value": "5223" },
{
  "label": "黔东南苗族侗族自治州",
  "value": "5226" },
{
  "label": "黔南布依族苗族自治州",
  "value": "5227" }],

[{
  "label": "昆明市",
  "value": "5301" },
{
  "label": "曲靖市",
  "value": "5303" },
{
  "label": "玉溪市",
  "value": "5304" },
{
  "label": "保山市",
  "value": "5305" },
{
  "label": "昭通市",
  "value": "5306" },
{
  "label": "丽江市",
  "value": "5307" },
{
  "label": "普洱市",
  "value": "5308" },
{
  "label": "临沧市",
  "value": "5309" },
{
  "label": "楚雄彝族自治州",
  "value": "5323" },
{
  "label": "红河哈尼族彝族自治州",
  "value": "5325" },
{
  "label": "文山壮族苗族自治州",
  "value": "5326" },
{
  "label": "西双版纳傣族自治州",
  "value": "5328" },
{
  "label": "大理白族自治州",
  "value": "5329" },
{
  "label": "德宏傣族景颇族自治州",
  "value": "5331" },
{
  "label": "怒江傈僳族自治州",
  "value": "5333" },
{
  "label": "迪庆藏族自治州",
  "value": "5334" }],

[{
  "label": "拉萨市",
  "value": "5401" },
{
  "label": "日喀则市",
  "value": "5402" },
{
  "label": "昌都市",
  "value": "5403" },
{
  "label": "林芝市",
  "value": "5404" },
{
  "label": "山南市",
  "value": "5405" },
{
  "label": "那曲地区",
  "value": "5424" },
{
  "label": "阿里地区",
  "value": "5425" }],

[{
  "label": "西安市",
  "value": "6101" },
{
  "label": "铜川市",
  "value": "6102" },
{
  "label": "宝鸡市",
  "value": "6103" },
{
  "label": "咸阳市",
  "value": "6104" },
{
  "label": "渭南市",
  "value": "6105" },
{
  "label": "延安市",
  "value": "6106" },
{
  "label": "汉中市",
  "value": "6107" },
{
  "label": "榆林市",
  "value": "6108" },
{
  "label": "安康市",
  "value": "6109" },
{
  "label": "商洛市",
  "value": "6110" }],

[{
  "label": "兰州市",
  "value": "6201" },
{
  "label": "嘉峪关市",
  "value": "6202" },
{
  "label": "金昌市",
  "value": "6203" },
{
  "label": "白银市",
  "value": "6204" },
{
  "label": "天水市",
  "value": "6205" },
{
  "label": "武威市",
  "value": "6206" },
{
  "label": "张掖市",
  "value": "6207" },
{
  "label": "平凉市",
  "value": "6208" },
{
  "label": "酒泉市",
  "value": "6209" },
{
  "label": "庆阳市",
  "value": "6210" },
{
  "label": "定西市",
  "value": "6211" },
{
  "label": "陇南市",
  "value": "6212" },
{
  "label": "临夏回族自治州",
  "value": "6229" },
{
  "label": "甘南藏族自治州",
  "value": "6230" }],

[{
  "label": "西宁市",
  "value": "6301" },
{
  "label": "海东市",
  "value": "6302" },
{
  "label": "海北藏族自治州",
  "value": "6322" },
{
  "label": "黄南藏族自治州",
  "value": "6323" },
{
  "label": "海南藏族自治州",
  "value": "6325" },
{
  "label": "果洛藏族自治州",
  "value": "6326" },
{
  "label": "玉树藏族自治州",
  "value": "6327" },
{
  "label": "海西蒙古族藏族自治州",
  "value": "6328" }],

[{
  "label": "银川市",
  "value": "6401" },
{
  "label": "石嘴山市",
  "value": "6402" },
{
  "label": "吴忠市",
  "value": "6403" },
{
  "label": "固原市",
  "value": "6404" },
{
  "label": "中卫市",
  "value": "6405" }],

[{
  "label": "乌鲁木齐市",
  "value": "6501" },
{
  "label": "克拉玛依市",
  "value": "6502" },
{
  "label": "吐鲁番市",
  "value": "6504" },
{
  "label": "哈密市",
  "value": "6505" },
{
  "label": "昌吉回族自治州",
  "value": "6523" },
{
  "label": "博尔塔拉蒙古自治州",
  "value": "6527" },
{
  "label": "巴音郭楞蒙古自治州",
  "value": "6528" },
{
  "label": "阿克苏地区",
  "value": "6529" },
{
  "label": "克孜勒苏柯尔克孜自治州",
  "value": "6530" },
{
  "label": "喀什地区",
  "value": "6531" },
{
  "label": "和田地区",
  "value": "6532" },
{
  "label": "伊犁哈萨克自治州",
  "value": "6540" },
{
  "label": "塔城地区",
  "value": "6542" },
{
  "label": "阿勒泰地区",
  "value": "6543" },
{
  "label": "自治区直辖县级行政区划",
  "value": "6590" }],

[{
  "label": "台北",
  "value": "6601" },
{
  "label": "高雄",
  "value": "6602" },
{
  "label": "基隆",
  "value": "6603" },
{
  "label": "台中",
  "value": "6604" },
{
  "label": "台南",
  "value": "6605" },
{
  "label": "新竹",
  "value": "6606" },
{
  "label": "嘉义",
  "value": "6607" },
{
  "label": "宜兰",
  "value": "6608" },
{
  "label": "桃园",
  "value": "6609" },
{
  "label": "苗栗",
  "value": "6610" },
{
  "label": "彰化",
  "value": "6611" },
{
  "label": "南投",
  "value": "6612" },
{
  "label": "云林",
  "value": "6613" },
{
  "label": "屏东",
  "value": "6614" },
{
  "label": "台东",
  "value": "6615" },
{
  "label": "花莲",
  "value": "6616" },
{
  "label": "澎湖",
  "value": "6617" }],

[{
  "label": "香港岛",
  "value": "6701" },
{
  "label": "九龙",
  "value": "6702" },
{
  "label": "新界",
  "value": "6703" }],

[{
  "label": "澳门半岛",
  "value": "6801" },
{
  "label": "氹仔岛",
  "value": "6802" },
{
  "label": "路环岛",
  "value": "6803" },
{
  "label": "路氹城",
  "value": "6804" }]];var _default =


cityData;exports.default = _default;

/***/ }),

/***/ 59:
/*!**********************************************************************************************!*\
  !*** C:/Users/luyus/Desktop/baoyun-mansion/utils/api/u-ajax/js_sdk/lib/core/handleCancel.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.dispatchCancel = dispatchCancel;exports.interceptCancel = interceptCancel;exports.detachCancel = detachCancel;function _objectWithoutProperties(source, excluded) {if (source == null) return {};var target = _objectWithoutPropertiesLoose(source, excluded);var key, i;if (Object.getOwnPropertySymbols) {var sourceSymbolKeys = Object.getOwnPropertySymbols(source);for (i = 0; i < sourceSymbolKeys.length; i++) {key = sourceSymbolKeys[i];if (excluded.indexOf(key) >= 0) continue;if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;target[key] = source[key];}}return target;}function _objectWithoutPropertiesLoose(source, excluded) {if (source == null) return {};var target = {};var sourceKeys = Object.keys(source);var key, i;for (i = 0; i < sourceKeys.length; i++) {key = sourceKeys[i];if (excluded.indexOf(key) >= 0) continue;target[key] = source[key];}return target;} /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         * 派发请求拒绝方法，处理发起请求前错误，取消执行请求，并防止进入响应拦截器
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         * @param {*} reason 错误原因
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         * @returns {Promise} 封装了 __CANCEL__ 的失败对象
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         */
function dispatchCancel(reason) {
  return Promise.reject({
    reason: reason,
    __CANCEL__: true });

}

/**
   * 拦截失败对象
   * @param {Function} rejected 响应错误拦截器
   */
function interceptCancel(rejected) {
  // 判断发起请求前是否发生错误，如果发生错误则不执行后面的响应错误拦截器
  return (
    rejected && function (response) {return response.__CANCEL__ ? Promise.reject(response) : rejected(response);});

}

/**
   * 分离失败对象
   * @param {*} response 封装了 __CANCEL__ 的失败对象
   */
function detachCancel(_ref) {var __CANCEL__ = _ref.__CANCEL__,error = _objectWithoutProperties(_ref, ["__CANCEL__"]);
  return Promise.reject(__CANCEL__ ? error.reason : error);
}

/***/ }),

/***/ 590:
/*!************************************************************************!*\
  !*** C:/Users/luyus/Desktop/baoyun-mansion/uview-ui/libs/util/area.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var areaData = [
[
[{
  "label": "东城区",
  "value": "110101" },
{
  "label": "西城区",
  "value": "110102" },
{
  "label": "朝阳区",
  "value": "110105" },
{
  "label": "丰台区",
  "value": "110106" },
{
  "label": "石景山区",
  "value": "110107" },
{
  "label": "海淀区",
  "value": "110108" },
{
  "label": "门头沟区",
  "value": "110109" },
{
  "label": "房山区",
  "value": "110111" },
{
  "label": "通州区",
  "value": "110112" },
{
  "label": "顺义区",
  "value": "110113" },
{
  "label": "昌平区",
  "value": "110114" },
{
  "label": "大兴区",
  "value": "110115" },
{
  "label": "怀柔区",
  "value": "110116" },
{
  "label": "平谷区",
  "value": "110117" },
{
  "label": "密云区",
  "value": "110118" },
{
  "label": "延庆区",
  "value": "110119" }]],


[
[{
  "label": "和平区",
  "value": "120101" },
{
  "label": "河东区",
  "value": "120102" },
{
  "label": "河西区",
  "value": "120103" },
{
  "label": "南开区",
  "value": "120104" },
{
  "label": "河北区",
  "value": "120105" },
{
  "label": "红桥区",
  "value": "120106" },
{
  "label": "东丽区",
  "value": "120110" },
{
  "label": "西青区",
  "value": "120111" },
{
  "label": "津南区",
  "value": "120112" },
{
  "label": "北辰区",
  "value": "120113" },
{
  "label": "武清区",
  "value": "120114" },
{
  "label": "宝坻区",
  "value": "120115" },
{
  "label": "滨海新区",
  "value": "120116" },
{
  "label": "宁河区",
  "value": "120117" },
{
  "label": "静海区",
  "value": "120118" },
{
  "label": "蓟州区",
  "value": "120119" }]],


[
[{
  "label": "长安区",
  "value": "130102" },
{
  "label": "桥西区",
  "value": "130104" },
{
  "label": "新华区",
  "value": "130105" },
{
  "label": "井陉矿区",
  "value": "130107" },
{
  "label": "裕华区",
  "value": "130108" },
{
  "label": "藁城区",
  "value": "130109" },
{
  "label": "鹿泉区",
  "value": "130110" },
{
  "label": "栾城区",
  "value": "130111" },
{
  "label": "井陉县",
  "value": "130121" },
{
  "label": "正定县",
  "value": "130123" },
{
  "label": "行唐县",
  "value": "130125" },
{
  "label": "灵寿县",
  "value": "130126" },
{
  "label": "高邑县",
  "value": "130127" },
{
  "label": "深泽县",
  "value": "130128" },
{
  "label": "赞皇县",
  "value": "130129" },
{
  "label": "无极县",
  "value": "130130" },
{
  "label": "平山县",
  "value": "130131" },
{
  "label": "元氏县",
  "value": "130132" },
{
  "label": "赵县",
  "value": "130133" },
{
  "label": "石家庄高新技术产业开发区",
  "value": "130171" },
{
  "label": "石家庄循环化工园区",
  "value": "130172" },
{
  "label": "辛集市",
  "value": "130181" },
{
  "label": "晋州市",
  "value": "130183" },
{
  "label": "新乐市",
  "value": "130184" }],

[{
  "label": "路南区",
  "value": "130202" },
{
  "label": "路北区",
  "value": "130203" },
{
  "label": "古冶区",
  "value": "130204" },
{
  "label": "开平区",
  "value": "130205" },
{
  "label": "丰南区",
  "value": "130207" },
{
  "label": "丰润区",
  "value": "130208" },
{
  "label": "曹妃甸区",
  "value": "130209" },
{
  "label": "滦县",
  "value": "130223" },
{
  "label": "滦南县",
  "value": "130224" },
{
  "label": "乐亭县",
  "value": "130225" },
{
  "label": "迁西县",
  "value": "130227" },
{
  "label": "玉田县",
  "value": "130229" },
{
  "label": "唐山市芦台经济技术开发区",
  "value": "130271" },
{
  "label": "唐山市汉沽管理区",
  "value": "130272" },
{
  "label": "唐山高新技术产业开发区",
  "value": "130273" },
{
  "label": "河北唐山海港经济开发区",
  "value": "130274" },
{
  "label": "遵化市",
  "value": "130281" },
{
  "label": "迁安市",
  "value": "130283" }],

[{
  "label": "海港区",
  "value": "130302" },
{
  "label": "山海关区",
  "value": "130303" },
{
  "label": "北戴河区",
  "value": "130304" },
{
  "label": "抚宁区",
  "value": "130306" },
{
  "label": "青龙满族自治县",
  "value": "130321" },
{
  "label": "昌黎县",
  "value": "130322" },
{
  "label": "卢龙县",
  "value": "130324" },
{
  "label": "秦皇岛市经济技术开发区",
  "value": "130371" },
{
  "label": "北戴河新区",
  "value": "130372" }],

[{
  "label": "邯山区",
  "value": "130402" },
{
  "label": "丛台区",
  "value": "130403" },
{
  "label": "复兴区",
  "value": "130404" },
{
  "label": "峰峰矿区",
  "value": "130406" },
{
  "label": "肥乡区",
  "value": "130407" },
{
  "label": "永年区",
  "value": "130408" },
{
  "label": "临漳县",
  "value": "130423" },
{
  "label": "成安县",
  "value": "130424" },
{
  "label": "大名县",
  "value": "130425" },
{
  "label": "涉县",
  "value": "130426" },
{
  "label": "磁县",
  "value": "130427" },
{
  "label": "邱县",
  "value": "130430" },
{
  "label": "鸡泽县",
  "value": "130431" },
{
  "label": "广平县",
  "value": "130432" },
{
  "label": "馆陶县",
  "value": "130433" },
{
  "label": "魏县",
  "value": "130434" },
{
  "label": "曲周县",
  "value": "130435" },
{
  "label": "邯郸经济技术开发区",
  "value": "130471" },
{
  "label": "邯郸冀南新区",
  "value": "130473" },
{
  "label": "武安市",
  "value": "130481" }],

[{
  "label": "桥东区",
  "value": "130502" },
{
  "label": "桥西区",
  "value": "130503" },
{
  "label": "邢台县",
  "value": "130521" },
{
  "label": "临城县",
  "value": "130522" },
{
  "label": "内丘县",
  "value": "130523" },
{
  "label": "柏乡县",
  "value": "130524" },
{
  "label": "隆尧县",
  "value": "130525" },
{
  "label": "任县",
  "value": "130526" },
{
  "label": "南和县",
  "value": "130527" },
{
  "label": "宁晋县",
  "value": "130528" },
{
  "label": "巨鹿县",
  "value": "130529" },
{
  "label": "新河县",
  "value": "130530" },
{
  "label": "广宗县",
  "value": "130531" },
{
  "label": "平乡县",
  "value": "130532" },
{
  "label": "威县",
  "value": "130533" },
{
  "label": "清河县",
  "value": "130534" },
{
  "label": "临西县",
  "value": "130535" },
{
  "label": "河北邢台经济开发区",
  "value": "130571" },
{
  "label": "南宫市",
  "value": "130581" },
{
  "label": "沙河市",
  "value": "130582" }],

[{
  "label": "竞秀区",
  "value": "130602" },
{
  "label": "莲池区",
  "value": "130606" },
{
  "label": "满城区",
  "value": "130607" },
{
  "label": "清苑区",
  "value": "130608" },
{
  "label": "徐水区",
  "value": "130609" },
{
  "label": "涞水县",
  "value": "130623" },
{
  "label": "阜平县",
  "value": "130624" },
{
  "label": "定兴县",
  "value": "130626" },
{
  "label": "唐县",
  "value": "130627" },
{
  "label": "高阳县",
  "value": "130628" },
{
  "label": "容城县",
  "value": "130629" },
{
  "label": "涞源县",
  "value": "130630" },
{
  "label": "望都县",
  "value": "130631" },
{
  "label": "安新县",
  "value": "130632" },
{
  "label": "易县",
  "value": "130633" },
{
  "label": "曲阳县",
  "value": "130634" },
{
  "label": "蠡县",
  "value": "130635" },
{
  "label": "顺平县",
  "value": "130636" },
{
  "label": "博野县",
  "value": "130637" },
{
  "label": "雄县",
  "value": "130638" },
{
  "label": "保定高新技术产业开发区",
  "value": "130671" },
{
  "label": "保定白沟新城",
  "value": "130672" },
{
  "label": "涿州市",
  "value": "130681" },
{
  "label": "定州市",
  "value": "130682" },
{
  "label": "安国市",
  "value": "130683" },
{
  "label": "高碑店市",
  "value": "130684" }],

[{
  "label": "桥东区",
  "value": "130702" },
{
  "label": "桥西区",
  "value": "130703" },
{
  "label": "宣化区",
  "value": "130705" },
{
  "label": "下花园区",
  "value": "130706" },
{
  "label": "万全区",
  "value": "130708" },
{
  "label": "崇礼区",
  "value": "130709" },
{
  "label": "张北县",
  "value": "130722" },
{
  "label": "康保县",
  "value": "130723" },
{
  "label": "沽源县",
  "value": "130724" },
{
  "label": "尚义县",
  "value": "130725" },
{
  "label": "蔚县",
  "value": "130726" },
{
  "label": "阳原县",
  "value": "130727" },
{
  "label": "怀安县",
  "value": "130728" },
{
  "label": "怀来县",
  "value": "130730" },
{
  "label": "涿鹿县",
  "value": "130731" },
{
  "label": "赤城县",
  "value": "130732" },
{
  "label": "张家口市高新技术产业开发区",
  "value": "130771" },
{
  "label": "张家口市察北管理区",
  "value": "130772" },
{
  "label": "张家口市塞北管理区",
  "value": "130773" }],

[{
  "label": "双桥区",
  "value": "130802" },
{
  "label": "双滦区",
  "value": "130803" },
{
  "label": "鹰手营子矿区",
  "value": "130804" },
{
  "label": "承德县",
  "value": "130821" },
{
  "label": "兴隆县",
  "value": "130822" },
{
  "label": "滦平县",
  "value": "130824" },
{
  "label": "隆化县",
  "value": "130825" },
{
  "label": "丰宁满族自治县",
  "value": "130826" },
{
  "label": "宽城满族自治县",
  "value": "130827" },
{
  "label": "围场满族蒙古族自治县",
  "value": "130828" },
{
  "label": "承德高新技术产业开发区",
  "value": "130871" },
{
  "label": "平泉市",
  "value": "130881" }],

[{
  "label": "新华区",
  "value": "130902" },
{
  "label": "运河区",
  "value": "130903" },
{
  "label": "沧县",
  "value": "130921" },
{
  "label": "青县",
  "value": "130922" },
{
  "label": "东光县",
  "value": "130923" },
{
  "label": "海兴县",
  "value": "130924" },
{
  "label": "盐山县",
  "value": "130925" },
{
  "label": "肃宁县",
  "value": "130926" },
{
  "label": "南皮县",
  "value": "130927" },
{
  "label": "吴桥县",
  "value": "130928" },
{
  "label": "献县",
  "value": "130929" },
{
  "label": "孟村回族自治县",
  "value": "130930" },
{
  "label": "河北沧州经济开发区",
  "value": "130971" },
{
  "label": "沧州高新技术产业开发区",
  "value": "130972" },
{
  "label": "沧州渤海新区",
  "value": "130973" },
{
  "label": "泊头市",
  "value": "130981" },
{
  "label": "任丘市",
  "value": "130982" },
{
  "label": "黄骅市",
  "value": "130983" },
{
  "label": "河间市",
  "value": "130984" }],

[{
  "label": "安次区",
  "value": "131002" },
{
  "label": "广阳区",
  "value": "131003" },
{
  "label": "固安县",
  "value": "131022" },
{
  "label": "永清县",
  "value": "131023" },
{
  "label": "香河县",
  "value": "131024" },
{
  "label": "大城县",
  "value": "131025" },
{
  "label": "文安县",
  "value": "131026" },
{
  "label": "大厂回族自治县",
  "value": "131028" },
{
  "label": "廊坊经济技术开发区",
  "value": "131071" },
{
  "label": "霸州市",
  "value": "131081" },
{
  "label": "三河市",
  "value": "131082" }],

[{
  "label": "桃城区",
  "value": "131102" },
{
  "label": "冀州区",
  "value": "131103" },
{
  "label": "枣强县",
  "value": "131121" },
{
  "label": "武邑县",
  "value": "131122" },
{
  "label": "武强县",
  "value": "131123" },
{
  "label": "饶阳县",
  "value": "131124" },
{
  "label": "安平县",
  "value": "131125" },
{
  "label": "故城县",
  "value": "131126" },
{
  "label": "景县",
  "value": "131127" },
{
  "label": "阜城县",
  "value": "131128" },
{
  "label": "河北衡水经济开发区",
  "value": "131171" },
{
  "label": "衡水滨湖新区",
  "value": "131172" },
{
  "label": "深州市",
  "value": "131182" }]],


[
[{
  "label": "小店区",
  "value": "140105" },
{
  "label": "迎泽区",
  "value": "140106" },
{
  "label": "杏花岭区",
  "value": "140107" },
{
  "label": "尖草坪区",
  "value": "140108" },
{
  "label": "万柏林区",
  "value": "140109" },
{
  "label": "晋源区",
  "value": "140110" },
{
  "label": "清徐县",
  "value": "140121" },
{
  "label": "阳曲县",
  "value": "140122" },
{
  "label": "娄烦县",
  "value": "140123" },
{
  "label": "山西转型综合改革示范区",
  "value": "140171" },
{
  "label": "古交市",
  "value": "140181" }],

[{
  "label": "城区",
  "value": "140202" },
{
  "label": "矿区",
  "value": "140203" },
{
  "label": "南郊区",
  "value": "140211" },
{
  "label": "新荣区",
  "value": "140212" },
{
  "label": "阳高县",
  "value": "140221" },
{
  "label": "天镇县",
  "value": "140222" },
{
  "label": "广灵县",
  "value": "140223" },
{
  "label": "灵丘县",
  "value": "140224" },
{
  "label": "浑源县",
  "value": "140225" },
{
  "label": "左云县",
  "value": "140226" },
{
  "label": "大同县",
  "value": "140227" },
{
  "label": "山西大同经济开发区",
  "value": "140271" }],

[{
  "label": "城区",
  "value": "140302" },
{
  "label": "矿区",
  "value": "140303" },
{
  "label": "郊区",
  "value": "140311" },
{
  "label": "平定县",
  "value": "140321" },
{
  "label": "盂县",
  "value": "140322" },
{
  "label": "山西阳泉经济开发区",
  "value": "140371" }],

[{
  "label": "城区",
  "value": "140402" },
{
  "label": "郊区",
  "value": "140411" },
{
  "label": "长治县",
  "value": "140421" },
{
  "label": "襄垣县",
  "value": "140423" },
{
  "label": "屯留县",
  "value": "140424" },
{
  "label": "平顺县",
  "value": "140425" },
{
  "label": "黎城县",
  "value": "140426" },
{
  "label": "壶关县",
  "value": "140427" },
{
  "label": "长子县",
  "value": "140428" },
{
  "label": "武乡县",
  "value": "140429" },
{
  "label": "沁县",
  "value": "140430" },
{
  "label": "沁源县",
  "value": "140431" },
{
  "label": "山西长治高新技术产业园区",
  "value": "140471" },
{
  "label": "潞城市",
  "value": "140481" }],

[{
  "label": "城区",
  "value": "140502" },
{
  "label": "沁水县",
  "value": "140521" },
{
  "label": "阳城县",
  "value": "140522" },
{
  "label": "陵川县",
  "value": "140524" },
{
  "label": "泽州县",
  "value": "140525" },
{
  "label": "高平市",
  "value": "140581" }],

[{
  "label": "朔城区",
  "value": "140602" },
{
  "label": "平鲁区",
  "value": "140603" },
{
  "label": "山阴县",
  "value": "140621" },
{
  "label": "应县",
  "value": "140622" },
{
  "label": "右玉县",
  "value": "140623" },
{
  "label": "怀仁县",
  "value": "140624" },
{
  "label": "山西朔州经济开发区",
  "value": "140671" }],

[{
  "label": "榆次区",
  "value": "140702" },
{
  "label": "榆社县",
  "value": "140721" },
{
  "label": "左权县",
  "value": "140722" },
{
  "label": "和顺县",
  "value": "140723" },
{
  "label": "昔阳县",
  "value": "140724" },
{
  "label": "寿阳县",
  "value": "140725" },
{
  "label": "太谷县",
  "value": "140726" },
{
  "label": "祁县",
  "value": "140727" },
{
  "label": "平遥县",
  "value": "140728" },
{
  "label": "灵石县",
  "value": "140729" },
{
  "label": "介休市",
  "value": "140781" }],

[{
  "label": "盐湖区",
  "value": "140802" },
{
  "label": "临猗县",
  "value": "140821" },
{
  "label": "万荣县",
  "value": "140822" },
{
  "label": "闻喜县",
  "value": "140823" },
{
  "label": "稷山县",
  "value": "140824" },
{
  "label": "新绛县",
  "value": "140825" },
{
  "label": "绛县",
  "value": "140826" },
{
  "label": "垣曲县",
  "value": "140827" },
{
  "label": "夏县",
  "value": "140828" },
{
  "label": "平陆县",
  "value": "140829" },
{
  "label": "芮城县",
  "value": "140830" },
{
  "label": "永济市",
  "value": "140881" },
{
  "label": "河津市",
  "value": "140882" }],

[{
  "label": "忻府区",
  "value": "140902" },
{
  "label": "定襄县",
  "value": "140921" },
{
  "label": "五台县",
  "value": "140922" },
{
  "label": "代县",
  "value": "140923" },
{
  "label": "繁峙县",
  "value": "140924" },
{
  "label": "宁武县",
  "value": "140925" },
{
  "label": "静乐县",
  "value": "140926" },
{
  "label": "神池县",
  "value": "140927" },
{
  "label": "五寨县",
  "value": "140928" },
{
  "label": "岢岚县",
  "value": "140929" },
{
  "label": "河曲县",
  "value": "140930" },
{
  "label": "保德县",
  "value": "140931" },
{
  "label": "偏关县",
  "value": "140932" },
{
  "label": "五台山风景名胜区",
  "value": "140971" },
{
  "label": "原平市",
  "value": "140981" }],

[{
  "label": "尧都区",
  "value": "141002" },
{
  "label": "曲沃县",
  "value": "141021" },
{
  "label": "翼城县",
  "value": "141022" },
{
  "label": "襄汾县",
  "value": "141023" },
{
  "label": "洪洞县",
  "value": "141024" },
{
  "label": "古县",
  "value": "141025" },
{
  "label": "安泽县",
  "value": "141026" },
{
  "label": "浮山县",
  "value": "141027" },
{
  "label": "吉县",
  "value": "141028" },
{
  "label": "乡宁县",
  "value": "141029" },
{
  "label": "大宁县",
  "value": "141030" },
{
  "label": "隰县",
  "value": "141031" },
{
  "label": "永和县",
  "value": "141032" },
{
  "label": "蒲县",
  "value": "141033" },
{
  "label": "汾西县",
  "value": "141034" },
{
  "label": "侯马市",
  "value": "141081" },
{
  "label": "霍州市",
  "value": "141082" }],

[{
  "label": "离石区",
  "value": "141102" },
{
  "label": "文水县",
  "value": "141121" },
{
  "label": "交城县",
  "value": "141122" },
{
  "label": "兴县",
  "value": "141123" },
{
  "label": "临县",
  "value": "141124" },
{
  "label": "柳林县",
  "value": "141125" },
{
  "label": "石楼县",
  "value": "141126" },
{
  "label": "岚县",
  "value": "141127" },
{
  "label": "方山县",
  "value": "141128" },
{
  "label": "中阳县",
  "value": "141129" },
{
  "label": "交口县",
  "value": "141130" },
{
  "label": "孝义市",
  "value": "141181" },
{
  "label": "汾阳市",
  "value": "141182" }]],


[
[{
  "label": "新城区",
  "value": "150102" },
{
  "label": "回民区",
  "value": "150103" },
{
  "label": "玉泉区",
  "value": "150104" },
{
  "label": "赛罕区",
  "value": "150105" },
{
  "label": "土默特左旗",
  "value": "150121" },
{
  "label": "托克托县",
  "value": "150122" },
{
  "label": "和林格尔县",
  "value": "150123" },
{
  "label": "清水河县",
  "value": "150124" },
{
  "label": "武川县",
  "value": "150125" },
{
  "label": "呼和浩特金海工业园区",
  "value": "150171" },
{
  "label": "呼和浩特经济技术开发区",
  "value": "150172" }],

[{
  "label": "东河区",
  "value": "150202" },
{
  "label": "昆都仑区",
  "value": "150203" },
{
  "label": "青山区",
  "value": "150204" },
{
  "label": "石拐区",
  "value": "150205" },
{
  "label": "白云鄂博矿区",
  "value": "150206" },
{
  "label": "九原区",
  "value": "150207" },
{
  "label": "土默特右旗",
  "value": "150221" },
{
  "label": "固阳县",
  "value": "150222" },
{
  "label": "达尔罕茂明安联合旗",
  "value": "150223" },
{
  "label": "包头稀土高新技术产业开发区",
  "value": "150271" }],

[{
  "label": "海勃湾区",
  "value": "150302" },
{
  "label": "海南区",
  "value": "150303" },
{
  "label": "乌达区",
  "value": "150304" }],

[{
  "label": "红山区",
  "value": "150402" },
{
  "label": "元宝山区",
  "value": "150403" },
{
  "label": "松山区",
  "value": "150404" },
{
  "label": "阿鲁科尔沁旗",
  "value": "150421" },
{
  "label": "巴林左旗",
  "value": "150422" },
{
  "label": "巴林右旗",
  "value": "150423" },
{
  "label": "林西县",
  "value": "150424" },
{
  "label": "克什克腾旗",
  "value": "150425" },
{
  "label": "翁牛特旗",
  "value": "150426" },
{
  "label": "喀喇沁旗",
  "value": "150428" },
{
  "label": "宁城县",
  "value": "150429" },
{
  "label": "敖汉旗",
  "value": "150430" }],

[{
  "label": "科尔沁区",
  "value": "150502" },
{
  "label": "科尔沁左翼中旗",
  "value": "150521" },
{
  "label": "科尔沁左翼后旗",
  "value": "150522" },
{
  "label": "开鲁县",
  "value": "150523" },
{
  "label": "库伦旗",
  "value": "150524" },
{
  "label": "奈曼旗",
  "value": "150525" },
{
  "label": "扎鲁特旗",
  "value": "150526" },
{
  "label": "通辽经济技术开发区",
  "value": "150571" },
{
  "label": "霍林郭勒市",
  "value": "150581" }],

[{
  "label": "东胜区",
  "value": "150602" },
{
  "label": "康巴什区",
  "value": "150603" },
{
  "label": "达拉特旗",
  "value": "150621" },
{
  "label": "准格尔旗",
  "value": "150622" },
{
  "label": "鄂托克前旗",
  "value": "150623" },
{
  "label": "鄂托克旗",
  "value": "150624" },
{
  "label": "杭锦旗",
  "value": "150625" },
{
  "label": "乌审旗",
  "value": "150626" },
{
  "label": "伊金霍洛旗",
  "value": "150627" }],

[{
  "label": "海拉尔区",
  "value": "150702" },
{
  "label": "扎赉诺尔区",
  "value": "150703" },
{
  "label": "阿荣旗",
  "value": "150721" },
{
  "label": "莫力达瓦达斡尔族自治旗",
  "value": "150722" },
{
  "label": "鄂伦春自治旗",
  "value": "150723" },
{
  "label": "鄂温克族自治旗",
  "value": "150724" },
{
  "label": "陈巴尔虎旗",
  "value": "150725" },
{
  "label": "新巴尔虎左旗",
  "value": "150726" },
{
  "label": "新巴尔虎右旗",
  "value": "150727" },
{
  "label": "满洲里市",
  "value": "150781" },
{
  "label": "牙克石市",
  "value": "150782" },
{
  "label": "扎兰屯市",
  "value": "150783" },
{
  "label": "额尔古纳市",
  "value": "150784" },
{
  "label": "根河市",
  "value": "150785" }],

[{
  "label": "临河区",
  "value": "150802" },
{
  "label": "五原县",
  "value": "150821" },
{
  "label": "磴口县",
  "value": "150822" },
{
  "label": "乌拉特前旗",
  "value": "150823" },
{
  "label": "乌拉特中旗",
  "value": "150824" },
{
  "label": "乌拉特后旗",
  "value": "150825" },
{
  "label": "杭锦后旗",
  "value": "150826" }],

[{
  "label": "集宁区",
  "value": "150902" },
{
  "label": "卓资县",
  "value": "150921" },
{
  "label": "化德县",
  "value": "150922" },
{
  "label": "商都县",
  "value": "150923" },
{
  "label": "兴和县",
  "value": "150924" },
{
  "label": "凉城县",
  "value": "150925" },
{
  "label": "察哈尔右翼前旗",
  "value": "150926" },
{
  "label": "察哈尔右翼中旗",
  "value": "150927" },
{
  "label": "察哈尔右翼后旗",
  "value": "150928" },
{
  "label": "四子王旗",
  "value": "150929" },
{
  "label": "丰镇市",
  "value": "150981" }],

[{
  "label": "乌兰浩特市",
  "value": "152201" },
{
  "label": "阿尔山市",
  "value": "152202" },
{
  "label": "科尔沁右翼前旗",
  "value": "152221" },
{
  "label": "科尔沁右翼中旗",
  "value": "152222" },
{
  "label": "扎赉特旗",
  "value": "152223" },
{
  "label": "突泉县",
  "value": "152224" }],

[{
  "label": "二连浩特市",
  "value": "152501" },
{
  "label": "锡林浩特市",
  "value": "152502" },
{
  "label": "阿巴嘎旗",
  "value": "152522" },
{
  "label": "苏尼特左旗",
  "value": "152523" },
{
  "label": "苏尼特右旗",
  "value": "152524" },
{
  "label": "东乌珠穆沁旗",
  "value": "152525" },
{
  "label": "西乌珠穆沁旗",
  "value": "152526" },
{
  "label": "太仆寺旗",
  "value": "152527" },
{
  "label": "镶黄旗",
  "value": "152528" },
{
  "label": "正镶白旗",
  "value": "152529" },
{
  "label": "正蓝旗",
  "value": "152530" },
{
  "label": "多伦县",
  "value": "152531" },
{
  "label": "乌拉盖管委会",
  "value": "152571" }],

[{
  "label": "阿拉善左旗",
  "value": "152921" },
{
  "label": "阿拉善右旗",
  "value": "152922" },
{
  "label": "额济纳旗",
  "value": "152923" },
{
  "label": "内蒙古阿拉善经济开发区",
  "value": "152971" }]],


[
[{
  "label": "和平区",
  "value": "210102" },
{
  "label": "沈河区",
  "value": "210103" },
{
  "label": "大东区",
  "value": "210104" },
{
  "label": "皇姑区",
  "value": "210105" },
{
  "label": "铁西区",
  "value": "210106" },
{
  "label": "苏家屯区",
  "value": "210111" },
{
  "label": "浑南区",
  "value": "210112" },
{
  "label": "沈北新区",
  "value": "210113" },
{
  "label": "于洪区",
  "value": "210114" },
{
  "label": "辽中区",
  "value": "210115" },
{
  "label": "康平县",
  "value": "210123" },
{
  "label": "法库县",
  "value": "210124" },
{
  "label": "新民市",
  "value": "210181" }],

[{
  "label": "中山区",
  "value": "210202" },
{
  "label": "西岗区",
  "value": "210203" },
{
  "label": "沙河口区",
  "value": "210204" },
{
  "label": "甘井子区",
  "value": "210211" },
{
  "label": "旅顺口区",
  "value": "210212" },
{
  "label": "金州区",
  "value": "210213" },
{
  "label": "普兰店区",
  "value": "210214" },
{
  "label": "长海县",
  "value": "210224" },
{
  "label": "瓦房店市",
  "value": "210281" },
{
  "label": "庄河市",
  "value": "210283" }],

[{
  "label": "铁东区",
  "value": "210302" },
{
  "label": "铁西区",
  "value": "210303" },
{
  "label": "立山区",
  "value": "210304" },
{
  "label": "千山区",
  "value": "210311" },
{
  "label": "台安县",
  "value": "210321" },
{
  "label": "岫岩满族自治县",
  "value": "210323" },
{
  "label": "海城市",
  "value": "210381" }],

[{
  "label": "新抚区",
  "value": "210402" },
{
  "label": "东洲区",
  "value": "210403" },
{
  "label": "望花区",
  "value": "210404" },
{
  "label": "顺城区",
  "value": "210411" },
{
  "label": "抚顺县",
  "value": "210421" },
{
  "label": "新宾满族自治县",
  "value": "210422" },
{
  "label": "清原满族自治县",
  "value": "210423" }],

[{
  "label": "平山区",
  "value": "210502" },
{
  "label": "溪湖区",
  "value": "210503" },
{
  "label": "明山区",
  "value": "210504" },
{
  "label": "南芬区",
  "value": "210505" },
{
  "label": "本溪满族自治县",
  "value": "210521" },
{
  "label": "桓仁满族自治县",
  "value": "210522" }],

[{
  "label": "元宝区",
  "value": "210602" },
{
  "label": "振兴区",
  "value": "210603" },
{
  "label": "振安区",
  "value": "210604" },
{
  "label": "宽甸满族自治县",
  "value": "210624" },
{
  "label": "东港市",
  "value": "210681" },
{
  "label": "凤城市",
  "value": "210682" }],

[{
  "label": "古塔区",
  "value": "210702" },
{
  "label": "凌河区",
  "value": "210703" },
{
  "label": "太和区",
  "value": "210711" },
{
  "label": "黑山县",
  "value": "210726" },
{
  "label": "义县",
  "value": "210727" },
{
  "label": "凌海市",
  "value": "210781" },
{
  "label": "北镇市",
  "value": "210782" }],

[{
  "label": "站前区",
  "value": "210802" },
{
  "label": "西市区",
  "value": "210803" },
{
  "label": "鲅鱼圈区",
  "value": "210804" },
{
  "label": "老边区",
  "value": "210811" },
{
  "label": "盖州市",
  "value": "210881" },
{
  "label": "大石桥市",
  "value": "210882" }],

[{
  "label": "海州区",
  "value": "210902" },
{
  "label": "新邱区",
  "value": "210903" },
{
  "label": "太平区",
  "value": "210904" },
{
  "label": "清河门区",
  "value": "210905" },
{
  "label": "细河区",
  "value": "210911" },
{
  "label": "阜新蒙古族自治县",
  "value": "210921" },
{
  "label": "彰武县",
  "value": "210922" }],

[{
  "label": "白塔区",
  "value": "211002" },
{
  "label": "文圣区",
  "value": "211003" },
{
  "label": "宏伟区",
  "value": "211004" },
{
  "label": "弓长岭区",
  "value": "211005" },
{
  "label": "太子河区",
  "value": "211011" },
{
  "label": "辽阳县",
  "value": "211021" },
{
  "label": "灯塔市",
  "value": "211081" }],

[{
  "label": "双台子区",
  "value": "211102" },
{
  "label": "兴隆台区",
  "value": "211103" },
{
  "label": "大洼区",
  "value": "211104" },
{
  "label": "盘山县",
  "value": "211122" }],

[{
  "label": "银州区",
  "value": "211202" },
{
  "label": "清河区",
  "value": "211204" },
{
  "label": "铁岭县",
  "value": "211221" },
{
  "label": "西丰县",
  "value": "211223" },
{
  "label": "昌图县",
  "value": "211224" },
{
  "label": "调兵山市",
  "value": "211281" },
{
  "label": "开原市",
  "value": "211282" }],

[{
  "label": "双塔区",
  "value": "211302" },
{
  "label": "龙城区",
  "value": "211303" },
{
  "label": "朝阳县",
  "value": "211321" },
{
  "label": "建平县",
  "value": "211322" },
{
  "label": "喀喇沁左翼蒙古族自治县",
  "value": "211324" },
{
  "label": "北票市",
  "value": "211381" },
{
  "label": "凌源市",
  "value": "211382" }],

[{
  "label": "连山区",
  "value": "211402" },
{
  "label": "龙港区",
  "value": "211403" },
{
  "label": "南票区",
  "value": "211404" },
{
  "label": "绥中县",
  "value": "211421" },
{
  "label": "建昌县",
  "value": "211422" },
{
  "label": "兴城市",
  "value": "211481" }]],


[
[{
  "label": "南关区",
  "value": "220102" },
{
  "label": "宽城区",
  "value": "220103" },
{
  "label": "朝阳区",
  "value": "220104" },
{
  "label": "二道区",
  "value": "220105" },
{
  "label": "绿园区",
  "value": "220106" },
{
  "label": "双阳区",
  "value": "220112" },
{
  "label": "九台区",
  "value": "220113" },
{
  "label": "农安县",
  "value": "220122" },
{
  "label": "长春经济技术开发区",
  "value": "220171" },
{
  "label": "长春净月高新技术产业开发区",
  "value": "220172" },
{
  "label": "长春高新技术产业开发区",
  "value": "220173" },
{
  "label": "长春汽车经济技术开发区",
  "value": "220174" },
{
  "label": "榆树市",
  "value": "220182" },
{
  "label": "德惠市",
  "value": "220183" }],

[{
  "label": "昌邑区",
  "value": "220202" },
{
  "label": "龙潭区",
  "value": "220203" },
{
  "label": "船营区",
  "value": "220204" },
{
  "label": "丰满区",
  "value": "220211" },
{
  "label": "永吉县",
  "value": "220221" },
{
  "label": "吉林经济开发区",
  "value": "220271" },
{
  "label": "吉林高新技术产业开发区",
  "value": "220272" },
{
  "label": "吉林中国新加坡食品区",
  "value": "220273" },
{
  "label": "蛟河市",
  "value": "220281" },
{
  "label": "桦甸市",
  "value": "220282" },
{
  "label": "舒兰市",
  "value": "220283" },
{
  "label": "磐石市",
  "value": "220284" }],

[{
  "label": "铁西区",
  "value": "220302" },
{
  "label": "铁东区",
  "value": "220303" },
{
  "label": "梨树县",
  "value": "220322" },
{
  "label": "伊通满族自治县",
  "value": "220323" },
{
  "label": "公主岭市",
  "value": "220381" },
{
  "label": "双辽市",
  "value": "220382" }],

[{
  "label": "龙山区",
  "value": "220402" },
{
  "label": "西安区",
  "value": "220403" },
{
  "label": "东丰县",
  "value": "220421" },
{
  "label": "东辽县",
  "value": "220422" }],

[{
  "label": "东昌区",
  "value": "220502" },
{
  "label": "二道江区",
  "value": "220503" },
{
  "label": "通化县",
  "value": "220521" },
{
  "label": "辉南县",
  "value": "220523" },
{
  "label": "柳河县",
  "value": "220524" },
{
  "label": "梅河口市",
  "value": "220581" },
{
  "label": "集安市",
  "value": "220582" }],

[{
  "label": "浑江区",
  "value": "220602" },
{
  "label": "江源区",
  "value": "220605" },
{
  "label": "抚松县",
  "value": "220621" },
{
  "label": "靖宇县",
  "value": "220622" },
{
  "label": "长白朝鲜族自治县",
  "value": "220623" },
{
  "label": "临江市",
  "value": "220681" }],

[{
  "label": "宁江区",
  "value": "220702" },
{
  "label": "前郭尔罗斯蒙古族自治县",
  "value": "220721" },
{
  "label": "长岭县",
  "value": "220722" },
{
  "label": "乾安县",
  "value": "220723" },
{
  "label": "吉林松原经济开发区",
  "value": "220771" },
{
  "label": "扶余市",
  "value": "220781" }],

[{
  "label": "洮北区",
  "value": "220802" },
{
  "label": "镇赉县",
  "value": "220821" },
{
  "label": "通榆县",
  "value": "220822" },
{
  "label": "吉林白城经济开发区",
  "value": "220871" },
{
  "label": "洮南市",
  "value": "220881" },
{
  "label": "大安市",
  "value": "220882" }],

[{
  "label": "延吉市",
  "value": "222401" },
{
  "label": "图们市",
  "value": "222402" },
{
  "label": "敦化市",
  "value": "222403" },
{
  "label": "珲春市",
  "value": "222404" },
{
  "label": "龙井市",
  "value": "222405" },
{
  "label": "和龙市",
  "value": "222406" },
{
  "label": "汪清县",
  "value": "222424" },
{
  "label": "安图县",
  "value": "222426" }]],


[
[{
  "label": "道里区",
  "value": "230102" },
{
  "label": "南岗区",
  "value": "230103" },
{
  "label": "道外区",
  "value": "230104" },
{
  "label": "平房区",
  "value": "230108" },
{
  "label": "松北区",
  "value": "230109" },
{
  "label": "香坊区",
  "value": "230110" },
{
  "label": "呼兰区",
  "value": "230111" },
{
  "label": "阿城区",
  "value": "230112" },
{
  "label": "双城区",
  "value": "230113" },
{
  "label": "依兰县",
  "value": "230123" },
{
  "label": "方正县",
  "value": "230124" },
{
  "label": "宾县",
  "value": "230125" },
{
  "label": "巴彦县",
  "value": "230126" },
{
  "label": "木兰县",
  "value": "230127" },
{
  "label": "通河县",
  "value": "230128" },
{
  "label": "延寿县",
  "value": "230129" },
{
  "label": "尚志市",
  "value": "230183" },
{
  "label": "五常市",
  "value": "230184" }],

[{
  "label": "龙沙区",
  "value": "230202" },
{
  "label": "建华区",
  "value": "230203" },
{
  "label": "铁锋区",
  "value": "230204" },
{
  "label": "昂昂溪区",
  "value": "230205" },
{
  "label": "富拉尔基区",
  "value": "230206" },
{
  "label": "碾子山区",
  "value": "230207" },
{
  "label": "梅里斯达斡尔族区",
  "value": "230208" },
{
  "label": "龙江县",
  "value": "230221" },
{
  "label": "依安县",
  "value": "230223" },
{
  "label": "泰来县",
  "value": "230224" },
{
  "label": "甘南县",
  "value": "230225" },
{
  "label": "富裕县",
  "value": "230227" },
{
  "label": "克山县",
  "value": "230229" },
{
  "label": "克东县",
  "value": "230230" },
{
  "label": "拜泉县",
  "value": "230231" },
{
  "label": "讷河市",
  "value": "230281" }],

[{
  "label": "鸡冠区",
  "value": "230302" },
{
  "label": "恒山区",
  "value": "230303" },
{
  "label": "滴道区",
  "value": "230304" },
{
  "label": "梨树区",
  "value": "230305" },
{
  "label": "城子河区",
  "value": "230306" },
{
  "label": "麻山区",
  "value": "230307" },
{
  "label": "鸡东县",
  "value": "230321" },
{
  "label": "虎林市",
  "value": "230381" },
{
  "label": "密山市",
  "value": "230382" }],

[{
  "label": "向阳区",
  "value": "230402" },
{
  "label": "工农区",
  "value": "230403" },
{
  "label": "南山区",
  "value": "230404" },
{
  "label": "兴安区",
  "value": "230405" },
{
  "label": "东山区",
  "value": "230406" },
{
  "label": "兴山区",
  "value": "230407" },
{
  "label": "萝北县",
  "value": "230421" },
{
  "label": "绥滨县",
  "value": "230422" }],

[{
  "label": "尖山区",
  "value": "230502" },
{
  "label": "岭东区",
  "value": "230503" },
{
  "label": "四方台区",
  "value": "230505" },
{
  "label": "宝山区",
  "value": "230506" },
{
  "label": "集贤县",
  "value": "230521" },
{
  "label": "友谊县",
  "value": "230522" },
{
  "label": "宝清县",
  "value": "230523" },
{
  "label": "饶河县",
  "value": "230524" }],

[{
  "label": "萨尔图区",
  "value": "230602" },
{
  "label": "龙凤区",
  "value": "230603" },
{
  "label": "让胡路区",
  "value": "230604" },
{
  "label": "红岗区",
  "value": "230605" },
{
  "label": "大同区",
  "value": "230606" },
{
  "label": "肇州县",
  "value": "230621" },
{
  "label": "肇源县",
  "value": "230622" },
{
  "label": "林甸县",
  "value": "230623" },
{
  "label": "杜尔伯特蒙古族自治县",
  "value": "230624" },
{
  "label": "大庆高新技术产业开发区",
  "value": "230671" }],

[{
  "label": "伊春区",
  "value": "230702" },
{
  "label": "南岔区",
  "value": "230703" },
{
  "label": "友好区",
  "value": "230704" },
{
  "label": "西林区",
  "value": "230705" },
{
  "label": "翠峦区",
  "value": "230706" },
{
  "label": "新青区",
  "value": "230707" },
{
  "label": "美溪区",
  "value": "230708" },
{
  "label": "金山屯区",
  "value": "230709" },
{
  "label": "五营区",
  "value": "230710" },
{
  "label": "乌马河区",
  "value": "230711" },
{
  "label": "汤旺河区",
  "value": "230712" },
{
  "label": "带岭区",
  "value": "230713" },
{
  "label": "乌伊岭区",
  "value": "230714" },
{
  "label": "红星区",
  "value": "230715" },
{
  "label": "上甘岭区",
  "value": "230716" },
{
  "label": "嘉荫县",
  "value": "230722" },
{
  "label": "铁力市",
  "value": "230781" }],

[{
  "label": "向阳区",
  "value": "230803" },
{
  "label": "前进区",
  "value": "230804" },
{
  "label": "东风区",
  "value": "230805" },
{
  "label": "郊区",
  "value": "230811" },
{
  "label": "桦南县",
  "value": "230822" },
{
  "label": "桦川县",
  "value": "230826" },
{
  "label": "汤原县",
  "value": "230828" },
{
  "label": "同江市",
  "value": "230881" },
{
  "label": "富锦市",
  "value": "230882" },
{
  "label": "抚远市",
  "value": "230883" }],

[{
  "label": "新兴区",
  "value": "230902" },
{
  "label": "桃山区",
  "value": "230903" },
{
  "label": "茄子河区",
  "value": "230904" },
{
  "label": "勃利县",
  "value": "230921" }],

[{
  "label": "东安区",
  "value": "231002" },
{
  "label": "阳明区",
  "value": "231003" },
{
  "label": "爱民区",
  "value": "231004" },
{
  "label": "西安区",
  "value": "231005" },
{
  "label": "林口县",
  "value": "231025" },
{
  "label": "牡丹江经济技术开发区",
  "value": "231071" },
{
  "label": "绥芬河市",
  "value": "231081" },
{
  "label": "海林市",
  "value": "231083" },
{
  "label": "宁安市",
  "value": "231084" },
{
  "label": "穆棱市",
  "value": "231085" },
{
  "label": "东宁市",
  "value": "231086" }],

[{
  "label": "爱辉区",
  "value": "231102" },
{
  "label": "嫩江县",
  "value": "231121" },
{
  "label": "逊克县",
  "value": "231123" },
{
  "label": "孙吴县",
  "value": "231124" },
{
  "label": "北安市",
  "value": "231181" },
{
  "label": "五大连池市",
  "value": "231182" }],

[{
  "label": "北林区",
  "value": "231202" },
{
  "label": "望奎县",
  "value": "231221" },
{
  "label": "兰西县",
  "value": "231222" },
{
  "label": "青冈县",
  "value": "231223" },
{
  "label": "庆安县",
  "value": "231224" },
{
  "label": "明水县",
  "value": "231225" },
{
  "label": "绥棱县",
  "value": "231226" },
{
  "label": "安达市",
  "value": "231281" },
{
  "label": "肇东市",
  "value": "231282" },
{
  "label": "海伦市",
  "value": "231283" }],

[{
  "label": "加格达奇区",
  "value": "232701" },
{
  "label": "松岭区",
  "value": "232702" },
{
  "label": "新林区",
  "value": "232703" },
{
  "label": "呼中区",
  "value": "232704" },
{
  "label": "呼玛县",
  "value": "232721" },
{
  "label": "塔河县",
  "value": "232722" },
{
  "label": "漠河县",
  "value": "232723" }]],


[
[{
  "label": "黄浦区",
  "value": "310101" },
{
  "label": "徐汇区",
  "value": "310104" },
{
  "label": "长宁区",
  "value": "310105" },
{
  "label": "静安区",
  "value": "310106" },
{
  "label": "普陀区",
  "value": "310107" },
{
  "label": "虹口区",
  "value": "310109" },
{
  "label": "杨浦区",
  "value": "310110" },
{
  "label": "闵行区",
  "value": "310112" },
{
  "label": "宝山区",
  "value": "310113" },
{
  "label": "嘉定区",
  "value": "310114" },
{
  "label": "浦东新区",
  "value": "310115" },
{
  "label": "金山区",
  "value": "310116" },
{
  "label": "松江区",
  "value": "310117" },
{
  "label": "青浦区",
  "value": "310118" },
{
  "label": "奉贤区",
  "value": "310120" },
{
  "label": "崇明区",
  "value": "310151" }]],


[
[{
  "label": "玄武区",
  "value": "320102" },
{
  "label": "秦淮区",
  "value": "320104" },
{
  "label": "建邺区",
  "value": "320105" },
{
  "label": "鼓楼区",
  "value": "320106" },
{
  "label": "浦口区",
  "value": "320111" },
{
  "label": "栖霞区",
  "value": "320113" },
{
  "label": "雨花台区",
  "value": "320114" },
{
  "label": "江宁区",
  "value": "320115" },
{
  "label": "六合区",
  "value": "320116" },
{
  "label": "溧水区",
  "value": "320117" },
{
  "label": "高淳区",
  "value": "320118" }],

[{
  "label": "锡山区",
  "value": "320205" },
{
  "label": "惠山区",
  "value": "320206" },
{
  "label": "滨湖区",
  "value": "320211" },
{
  "label": "梁溪区",
  "value": "320213" },
{
  "label": "新吴区",
  "value": "320214" },
{
  "label": "江阴市",
  "value": "320281" },
{
  "label": "宜兴市",
  "value": "320282" }],

[{
  "label": "鼓楼区",
  "value": "320302" },
{
  "label": "云龙区",
  "value": "320303" },
{
  "label": "贾汪区",
  "value": "320305" },
{
  "label": "泉山区",
  "value": "320311" },
{
  "label": "铜山区",
  "value": "320312" },
{
  "label": "丰县",
  "value": "320321" },
{
  "label": "沛县",
  "value": "320322" },
{
  "label": "睢宁县",
  "value": "320324" },
{
  "label": "徐州经济技术开发区",
  "value": "320371" },
{
  "label": "新沂市",
  "value": "320381" },
{
  "label": "邳州市",
  "value": "320382" }],

[{
  "label": "天宁区",
  "value": "320402" },
{
  "label": "钟楼区",
  "value": "320404" },
{
  "label": "新北区",
  "value": "320411" },
{
  "label": "武进区",
  "value": "320412" },
{
  "label": "金坛区",
  "value": "320413" },
{
  "label": "溧阳市",
  "value": "320481" }],

[{
  "label": "虎丘区",
  "value": "320505" },
{
  "label": "吴中区",
  "value": "320506" },
{
  "label": "相城区",
  "value": "320507" },
{
  "label": "姑苏区",
  "value": "320508" },
{
  "label": "吴江区",
  "value": "320509" },
{
  "label": "苏州工业园区",
  "value": "320571" },
{
  "label": "常熟市",
  "value": "320581" },
{
  "label": "张家港市",
  "value": "320582" },
{
  "label": "昆山市",
  "value": "320583" },
{
  "label": "太仓市",
  "value": "320585" }],

[{
  "label": "崇川区",
  "value": "320602" },
{
  "label": "港闸区",
  "value": "320611" },
{
  "label": "通州区",
  "value": "320612" },
{
  "label": "海安县",
  "value": "320621" },
{
  "label": "如东县",
  "value": "320623" },
{
  "label": "南通经济技术开发区",
  "value": "320671" },
{
  "label": "启东市",
  "value": "320681" },
{
  "label": "如皋市",
  "value": "320682" },
{
  "label": "海门市",
  "value": "320684" }],

[{
  "label": "连云区",
  "value": "320703" },
{
  "label": "海州区",
  "value": "320706" },
{
  "label": "赣榆区",
  "value": "320707" },
{
  "label": "东海县",
  "value": "320722" },
{
  "label": "灌云县",
  "value": "320723" },
{
  "label": "灌南县",
  "value": "320724" },
{
  "label": "连云港经济技术开发区",
  "value": "320771" },
{
  "label": "连云港高新技术产业开发区",
  "value": "320772" }],

[{
  "label": "淮安区",
  "value": "320803" },
{
  "label": "淮阴区",
  "value": "320804" },
{
  "label": "清江浦区",
  "value": "320812" },
{
  "label": "洪泽区",
  "value": "320813" },
{
  "label": "涟水县",
  "value": "320826" },
{
  "label": "盱眙县",
  "value": "320830" },
{
  "label": "金湖县",
  "value": "320831" },
{
  "label": "淮安经济技术开发区",
  "value": "320871" }],

[{
  "label": "亭湖区",
  "value": "320902" },
{
  "label": "盐都区",
  "value": "320903" },
{
  "label": "大丰区",
  "value": "320904" },
{
  "label": "响水县",
  "value": "320921" },
{
  "label": "滨海县",
  "value": "320922" },
{
  "label": "阜宁县",
  "value": "320923" },
{
  "label": "射阳县",
  "value": "320924" },
{
  "label": "建湖县",
  "value": "320925" },
{
  "label": "盐城经济技术开发区",
  "value": "320971" },
{
  "label": "东台市",
  "value": "320981" }],

[{
  "label": "广陵区",
  "value": "321002" },
{
  "label": "邗江区",
  "value": "321003" },
{
  "label": "江都区",
  "value": "321012" },
{
  "label": "宝应县",
  "value": "321023" },
{
  "label": "扬州经济技术开发区",
  "value": "321071" },
{
  "label": "仪征市",
  "value": "321081" },
{
  "label": "高邮市",
  "value": "321084" }],

[{
  "label": "京口区",
  "value": "321102" },
{
  "label": "润州区",
  "value": "321111" },
{
  "label": "丹徒区",
  "value": "321112" },
{
  "label": "镇江新区",
  "value": "321171" },
{
  "label": "丹阳市",
  "value": "321181" },
{
  "label": "扬中市",
  "value": "321182" },
{
  "label": "句容市",
  "value": "321183" }],

[{
  "label": "海陵区",
  "value": "321202" },
{
  "label": "高港区",
  "value": "321203" },
{
  "label": "姜堰区",
  "value": "321204" },
{
  "label": "泰州医药高新技术产业开发区",
  "value": "321271" },
{
  "label": "兴化市",
  "value": "321281" },
{
  "label": "靖江市",
  "value": "321282" },
{
  "label": "泰兴市",
  "value": "321283" }],

[{
  "label": "宿城区",
  "value": "321302" },
{
  "label": "宿豫区",
  "value": "321311" },
{
  "label": "沭阳县",
  "value": "321322" },
{
  "label": "泗阳县",
  "value": "321323" },
{
  "label": "泗洪县",
  "value": "321324" },
{
  "label": "宿迁经济技术开发区",
  "value": "321371" }]],


[
[{
  "label": "上城区",
  "value": "330102" },
{
  "label": "下城区",
  "value": "330103" },
{
  "label": "江干区",
  "value": "330104" },
{
  "label": "拱墅区",
  "value": "330105" },
{
  "label": "西湖区",
  "value": "330106" },
{
  "label": "滨江区",
  "value": "330108" },
{
  "label": "萧山区",
  "value": "330109" },
{
  "label": "余杭区",
  "value": "330110" },
{
  "label": "富阳区",
  "value": "330111" },
{
  "label": "临安区",
  "value": "330112" },
{
  "label": "桐庐县",
  "value": "330122" },
{
  "label": "淳安县",
  "value": "330127" },
{
  "label": "建德市",
  "value": "330182" }],

[{
  "label": "海曙区",
  "value": "330203" },
{
  "label": "江北区",
  "value": "330205" },
{
  "label": "北仑区",
  "value": "330206" },
{
  "label": "镇海区",
  "value": "330211" },
{
  "label": "鄞州区",
  "value": "330212" },
{
  "label": "奉化区",
  "value": "330213" },
{
  "label": "象山县",
  "value": "330225" },
{
  "label": "宁海县",
  "value": "330226" },
{
  "label": "余姚市",
  "value": "330281" },
{
  "label": "慈溪市",
  "value": "330282" }],

[{
  "label": "鹿城区",
  "value": "330302" },
{
  "label": "龙湾区",
  "value": "330303" },
{
  "label": "瓯海区",
  "value": "330304" },
{
  "label": "洞头区",
  "value": "330305" },
{
  "label": "永嘉县",
  "value": "330324" },
{
  "label": "平阳县",
  "value": "330326" },
{
  "label": "苍南县",
  "value": "330327" },
{
  "label": "文成县",
  "value": "330328" },
{
  "label": "泰顺县",
  "value": "330329" },
{
  "label": "温州经济技术开发区",
  "value": "330371" },
{
  "label": "瑞安市",
  "value": "330381" },
{
  "label": "乐清市",
  "value": "330382" }],

[{
  "label": "南湖区",
  "value": "330402" },
{
  "label": "秀洲区",
  "value": "330411" },
{
  "label": "嘉善县",
  "value": "330421" },
{
  "label": "海盐县",
  "value": "330424" },
{
  "label": "海宁市",
  "value": "330481" },
{
  "label": "平湖市",
  "value": "330482" },
{
  "label": "桐乡市",
  "value": "330483" }],

[{
  "label": "吴兴区",
  "value": "330502" },
{
  "label": "南浔区",
  "value": "330503" },
{
  "label": "德清县",
  "value": "330521" },
{
  "label": "长兴县",
  "value": "330522" },
{
  "label": "安吉县",
  "value": "330523" }],

[{
  "label": "越城区",
  "value": "330602" },
{
  "label": "柯桥区",
  "value": "330603" },
{
  "label": "上虞区",
  "value": "330604" },
{
  "label": "新昌县",
  "value": "330624" },
{
  "label": "诸暨市",
  "value": "330681" },
{
  "label": "嵊州市",
  "value": "330683" }],

[{
  "label": "婺城区",
  "value": "330702" },
{
  "label": "金东区",
  "value": "330703" },
{
  "label": "武义县",
  "value": "330723" },
{
  "label": "浦江县",
  "value": "330726" },
{
  "label": "磐安县",
  "value": "330727" },
{
  "label": "兰溪市",
  "value": "330781" },
{
  "label": "义乌市",
  "value": "330782" },
{
  "label": "东阳市",
  "value": "330783" },
{
  "label": "永康市",
  "value": "330784" }],

[{
  "label": "柯城区",
  "value": "330802" },
{
  "label": "衢江区",
  "value": "330803" },
{
  "label": "常山县",
  "value": "330822" },
{
  "label": "开化县",
  "value": "330824" },
{
  "label": "龙游县",
  "value": "330825" },
{
  "label": "江山市",
  "value": "330881" }],

[{
  "label": "定海区",
  "value": "330902" },
{
  "label": "普陀区",
  "value": "330903" },
{
  "label": "岱山县",
  "value": "330921" },
{
  "label": "嵊泗县",
  "value": "330922" }],

[{
  "label": "椒江区",
  "value": "331002" },
{
  "label": "黄岩区",
  "value": "331003" },
{
  "label": "路桥区",
  "value": "331004" },
{
  "label": "三门县",
  "value": "331022" },
{
  "label": "天台县",
  "value": "331023" },
{
  "label": "仙居县",
  "value": "331024" },
{
  "label": "温岭市",
  "value": "331081" },
{
  "label": "临海市",
  "value": "331082" },
{
  "label": "玉环市",
  "value": "331083" }],

[{
  "label": "莲都区",
  "value": "331102" },
{
  "label": "青田县",
  "value": "331121" },
{
  "label": "缙云县",
  "value": "331122" },
{
  "label": "遂昌县",
  "value": "331123" },
{
  "label": "松阳县",
  "value": "331124" },
{
  "label": "云和县",
  "value": "331125" },
{
  "label": "庆元县",
  "value": "331126" },
{
  "label": "景宁畲族自治县",
  "value": "331127" },
{
  "label": "龙泉市",
  "value": "331181" }]],


[
[{
  "label": "瑶海区",
  "value": "340102" },
{
  "label": "庐阳区",
  "value": "340103" },
{
  "label": "蜀山区",
  "value": "340104" },
{
  "label": "包河区",
  "value": "340111" },
{
  "label": "长丰县",
  "value": "340121" },
{
  "label": "肥东县",
  "value": "340122" },
{
  "label": "肥西县",
  "value": "340123" },
{
  "label": "庐江县",
  "value": "340124" },
{
  "label": "合肥高新技术产业开发区",
  "value": "340171" },
{
  "label": "合肥经济技术开发区",
  "value": "340172" },
{
  "label": "合肥新站高新技术产业开发区",
  "value": "340173" },
{
  "label": "巢湖市",
  "value": "340181" }],

[{
  "label": "镜湖区",
  "value": "340202" },
{
  "label": "弋江区",
  "value": "340203" },
{
  "label": "鸠江区",
  "value": "340207" },
{
  "label": "三山区",
  "value": "340208" },
{
  "label": "芜湖县",
  "value": "340221" },
{
  "label": "繁昌县",
  "value": "340222" },
{
  "label": "南陵县",
  "value": "340223" },
{
  "label": "无为县",
  "value": "340225" },
{
  "label": "芜湖经济技术开发区",
  "value": "340271" },
{
  "label": "安徽芜湖长江大桥经济开发区",
  "value": "340272" }],

[{
  "label": "龙子湖区",
  "value": "340302" },
{
  "label": "蚌山区",
  "value": "340303" },
{
  "label": "禹会区",
  "value": "340304" },
{
  "label": "淮上区",
  "value": "340311" },
{
  "label": "怀远县",
  "value": "340321" },
{
  "label": "五河县",
  "value": "340322" },
{
  "label": "固镇县",
  "value": "340323" },
{
  "label": "蚌埠市高新技术开发区",
  "value": "340371" },
{
  "label": "蚌埠市经济开发区",
  "value": "340372" }],

[{
  "label": "大通区",
  "value": "340402" },
{
  "label": "田家庵区",
  "value": "340403" },
{
  "label": "谢家集区",
  "value": "340404" },
{
  "label": "八公山区",
  "value": "340405" },
{
  "label": "潘集区",
  "value": "340406" },
{
  "label": "凤台县",
  "value": "340421" },
{
  "label": "寿县",
  "value": "340422" }],

[{
  "label": "花山区",
  "value": "340503" },
{
  "label": "雨山区",
  "value": "340504" },
{
  "label": "博望区",
  "value": "340506" },
{
  "label": "当涂县",
  "value": "340521" },
{
  "label": "含山县",
  "value": "340522" },
{
  "label": "和县",
  "value": "340523" }],

[{
  "label": "杜集区",
  "value": "340602" },
{
  "label": "相山区",
  "value": "340603" },
{
  "label": "烈山区",
  "value": "340604" },
{
  "label": "濉溪县",
  "value": "340621" }],

[{
  "label": "铜官区",
  "value": "340705" },
{
  "label": "义安区",
  "value": "340706" },
{
  "label": "郊区",
  "value": "340711" },
{
  "label": "枞阳县",
  "value": "340722" }],

[{
  "label": "迎江区",
  "value": "340802" },
{
  "label": "大观区",
  "value": "340803" },
{
  "label": "宜秀区",
  "value": "340811" },
{
  "label": "怀宁县",
  "value": "340822" },
{
  "label": "潜山县",
  "value": "340824" },
{
  "label": "太湖县",
  "value": "340825" },
{
  "label": "宿松县",
  "value": "340826" },
{
  "label": "望江县",
  "value": "340827" },
{
  "label": "岳西县",
  "value": "340828" },
{
  "label": "安徽安庆经济开发区",
  "value": "340871" },
{
  "label": "桐城市",
  "value": "340881" }],

[{
  "label": "屯溪区",
  "value": "341002" },
{
  "label": "黄山区",
  "value": "341003" },
{
  "label": "徽州区",
  "value": "341004" },
{
  "label": "歙县",
  "value": "341021" },
{
  "label": "休宁县",
  "value": "341022" },
{
  "label": "黟县",
  "value": "341023" },
{
  "label": "祁门县",
  "value": "341024" }],

[{
  "label": "琅琊区",
  "value": "341102" },
{
  "label": "南谯区",
  "value": "341103" },
{
  "label": "来安县",
  "value": "341122" },
{
  "label": "全椒县",
  "value": "341124" },
{
  "label": "定远县",
  "value": "341125" },
{
  "label": "凤阳县",
  "value": "341126" },
{
  "label": "苏滁现代产业园",
  "value": "341171" },
{
  "label": "滁州经济技术开发区",
  "value": "341172" },
{
  "label": "天长市",
  "value": "341181" },
{
  "label": "明光市",
  "value": "341182" }],

[{
  "label": "颍州区",
  "value": "341202" },
{
  "label": "颍东区",
  "value": "341203" },
{
  "label": "颍泉区",
  "value": "341204" },
{
  "label": "临泉县",
  "value": "341221" },
{
  "label": "太和县",
  "value": "341222" },
{
  "label": "阜南县",
  "value": "341225" },
{
  "label": "颍上县",
  "value": "341226" },
{
  "label": "阜阳合肥现代产业园区",
  "value": "341271" },
{
  "label": "阜阳经济技术开发区",
  "value": "341272" },
{
  "label": "界首市",
  "value": "341282" }],

[{
  "label": "埇桥区",
  "value": "341302" },
{
  "label": "砀山县",
  "value": "341321" },
{
  "label": "萧县",
  "value": "341322" },
{
  "label": "灵璧县",
  "value": "341323" },
{
  "label": "泗县",
  "value": "341324" },
{
  "label": "宿州马鞍山现代产业园区",
  "value": "341371" },
{
  "label": "宿州经济技术开发区",
  "value": "341372" }],

[{
  "label": "金安区",
  "value": "341502" },
{
  "label": "裕安区",
  "value": "341503" },
{
  "label": "叶集区",
  "value": "341504" },
{
  "label": "霍邱县",
  "value": "341522" },
{
  "label": "舒城县",
  "value": "341523" },
{
  "label": "金寨县",
  "value": "341524" },
{
  "label": "霍山县",
  "value": "341525" }],

[{
  "label": "谯城区",
  "value": "341602" },
{
  "label": "涡阳县",
  "value": "341621" },
{
  "label": "蒙城县",
  "value": "341622" },
{
  "label": "利辛县",
  "value": "341623" }],

[{
  "label": "贵池区",
  "value": "341702" },
{
  "label": "东至县",
  "value": "341721" },
{
  "label": "石台县",
  "value": "341722" },
{
  "label": "青阳县",
  "value": "341723" }],

[{
  "label": "宣州区",
  "value": "341802" },
{
  "label": "郎溪县",
  "value": "341821" },
{
  "label": "广德县",
  "value": "341822" },
{
  "label": "泾县",
  "value": "341823" },
{
  "label": "绩溪县",
  "value": "341824" },
{
  "label": "旌德县",
  "value": "341825" },
{
  "label": "宣城市经济开发区",
  "value": "341871" },
{
  "label": "宁国市",
  "value": "341881" }]],


[
[{
  "label": "鼓楼区",
  "value": "350102" },
{
  "label": "台江区",
  "value": "350103" },
{
  "label": "仓山区",
  "value": "350104" },
{
  "label": "马尾区",
  "value": "350105" },
{
  "label": "晋安区",
  "value": "350111" },
{
  "label": "闽侯县",
  "value": "350121" },
{
  "label": "连江县",
  "value": "350122" },
{
  "label": "罗源县",
  "value": "350123" },
{
  "label": "闽清县",
  "value": "350124" },
{
  "label": "永泰县",
  "value": "350125" },
{
  "label": "平潭县",
  "value": "350128" },
{
  "label": "福清市",
  "value": "350181" },
{
  "label": "长乐市",
  "value": "350182" }],

[{
  "label": "思明区",
  "value": "350203" },
{
  "label": "海沧区",
  "value": "350205" },
{
  "label": "湖里区",
  "value": "350206" },
{
  "label": "集美区",
  "value": "350211" },
{
  "label": "同安区",
  "value": "350212" },
{
  "label": "翔安区",
  "value": "350213" }],

[{
  "label": "城厢区",
  "value": "350302" },
{
  "label": "涵江区",
  "value": "350303" },
{
  "label": "荔城区",
  "value": "350304" },
{
  "label": "秀屿区",
  "value": "350305" },
{
  "label": "仙游县",
  "value": "350322" }],

[{
  "label": "梅列区",
  "value": "350402" },
{
  "label": "三元区",
  "value": "350403" },
{
  "label": "明溪县",
  "value": "350421" },
{
  "label": "清流县",
  "value": "350423" },
{
  "label": "宁化县",
  "value": "350424" },
{
  "label": "大田县",
  "value": "350425" },
{
  "label": "尤溪县",
  "value": "350426" },
{
  "label": "沙县",
  "value": "350427" },
{
  "label": "将乐县",
  "value": "350428" },
{
  "label": "泰宁县",
  "value": "350429" },
{
  "label": "建宁县",
  "value": "350430" },
{
  "label": "永安市",
  "value": "350481" }],

[{
  "label": "鲤城区",
  "value": "350502" },
{
  "label": "丰泽区",
  "value": "350503" },
{
  "label": "洛江区",
  "value": "350504" },
{
  "label": "泉港区",
  "value": "350505" },
{
  "label": "惠安县",
  "value": "350521" },
{
  "label": "安溪县",
  "value": "350524" },
{
  "label": "永春县",
  "value": "350525" },
{
  "label": "德化县",
  "value": "350526" },
{
  "label": "金门县",
  "value": "350527" },
{
  "label": "石狮市",
  "value": "350581" },
{
  "label": "晋江市",
  "value": "350582" },
{
  "label": "南安市",
  "value": "350583" }],

[{
  "label": "芗城区",
  "value": "350602" },
{
  "label": "龙文区",
  "value": "350603" },
{
  "label": "云霄县",
  "value": "350622" },
{
  "label": "漳浦县",
  "value": "350623" },
{
  "label": "诏安县",
  "value": "350624" },
{
  "label": "长泰县",
  "value": "350625" },
{
  "label": "东山县",
  "value": "350626" },
{
  "label": "南靖县",
  "value": "350627" },
{
  "label": "平和县",
  "value": "350628" },
{
  "label": "华安县",
  "value": "350629" },
{
  "label": "龙海市",
  "value": "350681" }],

[{
  "label": "延平区",
  "value": "350702" },
{
  "label": "建阳区",
  "value": "350703" },
{
  "label": "顺昌县",
  "value": "350721" },
{
  "label": "浦城县",
  "value": "350722" },
{
  "label": "光泽县",
  "value": "350723" },
{
  "label": "松溪县",
  "value": "350724" },
{
  "label": "政和县",
  "value": "350725" },
{
  "label": "邵武市",
  "value": "350781" },
{
  "label": "武夷山市",
  "value": "350782" },
{
  "label": "建瓯市",
  "value": "350783" }],

[{
  "label": "新罗区",
  "value": "350802" },
{
  "label": "永定区",
  "value": "350803" },
{
  "label": "长汀县",
  "value": "350821" },
{
  "label": "上杭县",
  "value": "350823" },
{
  "label": "武平县",
  "value": "350824" },
{
  "label": "连城县",
  "value": "350825" },
{
  "label": "漳平市",
  "value": "350881" }],

[{
  "label": "蕉城区",
  "value": "350902" },
{
  "label": "霞浦县",
  "value": "350921" },
{
  "label": "古田县",
  "value": "350922" },
{
  "label": "屏南县",
  "value": "350923" },
{
  "label": "寿宁县",
  "value": "350924" },
{
  "label": "周宁县",
  "value": "350925" },
{
  "label": "柘荣县",
  "value": "350926" },
{
  "label": "福安市",
  "value": "350981" },
{
  "label": "福鼎市",
  "value": "350982" }]],


[
[{
  "label": "东湖区",
  "value": "360102" },
{
  "label": "西湖区",
  "value": "360103" },
{
  "label": "青云谱区",
  "value": "360104" },
{
  "label": "湾里区",
  "value": "360105" },
{
  "label": "青山湖区",
  "value": "360111" },
{
  "label": "新建区",
  "value": "360112" },
{
  "label": "南昌县",
  "value": "360121" },
{
  "label": "安义县",
  "value": "360123" },
{
  "label": "进贤县",
  "value": "360124" }],

[{
  "label": "昌江区",
  "value": "360202" },
{
  "label": "珠山区",
  "value": "360203" },
{
  "label": "浮梁县",
  "value": "360222" },
{
  "label": "乐平市",
  "value": "360281" }],

[{
  "label": "安源区",
  "value": "360302" },
{
  "label": "湘东区",
  "value": "360313" },
{
  "label": "莲花县",
  "value": "360321" },
{
  "label": "上栗县",
  "value": "360322" },
{
  "label": "芦溪县",
  "value": "360323" }],

[{
  "label": "濂溪区",
  "value": "360402" },
{
  "label": "浔阳区",
  "value": "360403" },
{
  "label": "柴桑区",
  "value": "360404" },
{
  "label": "武宁县",
  "value": "360423" },
{
  "label": "修水县",
  "value": "360424" },
{
  "label": "永修县",
  "value": "360425" },
{
  "label": "德安县",
  "value": "360426" },
{
  "label": "都昌县",
  "value": "360428" },
{
  "label": "湖口县",
  "value": "360429" },
{
  "label": "彭泽县",
  "value": "360430" },
{
  "label": "瑞昌市",
  "value": "360481" },
{
  "label": "共青城市",
  "value": "360482" },
{
  "label": "庐山市",
  "value": "360483" }],

[{
  "label": "渝水区",
  "value": "360502" },
{
  "label": "分宜县",
  "value": "360521" }],

[{
  "label": "月湖区",
  "value": "360602" },
{
  "label": "余江县",
  "value": "360622" },
{
  "label": "贵溪市",
  "value": "360681" }],

[{
  "label": "章贡区",
  "value": "360702" },
{
  "label": "南康区",
  "value": "360703" },
{
  "label": "赣县区",
  "value": "360704" },
{
  "label": "信丰县",
  "value": "360722" },
{
  "label": "大余县",
  "value": "360723" },
{
  "label": "上犹县",
  "value": "360724" },
{
  "label": "崇义县",
  "value": "360725" },
{
  "label": "安远县",
  "value": "360726" },
{
  "label": "龙南县",
  "value": "360727" },
{
  "label": "定南县",
  "value": "360728" },
{
  "label": "全南县",
  "value": "360729" },
{
  "label": "宁都县",
  "value": "360730" },
{
  "label": "于都县",
  "value": "360731" },
{
  "label": "兴国县",
  "value": "360732" },
{
  "label": "会昌县",
  "value": "360733" },
{
  "label": "寻乌县",
  "value": "360734" },
{
  "label": "石城县",
  "value": "360735" },
{
  "label": "瑞金市",
  "value": "360781" }],

[{
  "label": "吉州区",
  "value": "360802" },
{
  "label": "青原区",
  "value": "360803" },
{
  "label": "吉安县",
  "value": "360821" },
{
  "label": "吉水县",
  "value": "360822" },
{
  "label": "峡江县",
  "value": "360823" },
{
  "label": "新干县",
  "value": "360824" },
{
  "label": "永丰县",
  "value": "360825" },
{
  "label": "泰和县",
  "value": "360826" },
{
  "label": "遂川县",
  "value": "360827" },
{
  "label": "万安县",
  "value": "360828" },
{
  "label": "安福县",
  "value": "360829" },
{
  "label": "永新县",
  "value": "360830" },
{
  "label": "井冈山市",
  "value": "360881" }],

[{
  "label": "袁州区",
  "value": "360902" },
{
  "label": "奉新县",
  "value": "360921" },
{
  "label": "万载县",
  "value": "360922" },
{
  "label": "上高县",
  "value": "360923" },
{
  "label": "宜丰县",
  "value": "360924" },
{
  "label": "靖安县",
  "value": "360925" },
{
  "label": "铜鼓县",
  "value": "360926" },
{
  "label": "丰城市",
  "value": "360981" },
{
  "label": "樟树市",
  "value": "360982" },
{
  "label": "高安市",
  "value": "360983" }],

[{
  "label": "临川区",
  "value": "361002" },
{
  "label": "东乡区",
  "value": "361003" },
{
  "label": "南城县",
  "value": "361021" },
{
  "label": "黎川县",
  "value": "361022" },
{
  "label": "南丰县",
  "value": "361023" },
{
  "label": "崇仁县",
  "value": "361024" },
{
  "label": "乐安县",
  "value": "361025" },
{
  "label": "宜黄县",
  "value": "361026" },
{
  "label": "金溪县",
  "value": "361027" },
{
  "label": "资溪县",
  "value": "361028" },
{
  "label": "广昌县",
  "value": "361030" }],

[{
  "label": "信州区",
  "value": "361102" },
{
  "label": "广丰区",
  "value": "361103" },
{
  "label": "上饶县",
  "value": "361121" },
{
  "label": "玉山县",
  "value": "361123" },
{
  "label": "铅山县",
  "value": "361124" },
{
  "label": "横峰县",
  "value": "361125" },
{
  "label": "弋阳县",
  "value": "361126" },
{
  "label": "余干县",
  "value": "361127" },
{
  "label": "鄱阳县",
  "value": "361128" },
{
  "label": "万年县",
  "value": "361129" },
{
  "label": "婺源县",
  "value": "361130" },
{
  "label": "德兴市",
  "value": "361181" }]],


[
[{
  "label": "历下区",
  "value": "370102" },
{
  "label": "市中区",
  "value": "370103" },
{
  "label": "槐荫区",
  "value": "370104" },
{
  "label": "天桥区",
  "value": "370105" },
{
  "label": "历城区",
  "value": "370112" },
{
  "label": "长清区",
  "value": "370113" },
{
  "label": "章丘区",
  "value": "370114" },
{
  "label": "平阴县",
  "value": "370124" },
{
  "label": "济阳县",
  "value": "370125" },
{
  "label": "商河县",
  "value": "370126" },
{
  "label": "济南高新技术产业开发区",
  "value": "370171" }],

[{
  "label": "市南区",
  "value": "370202" },
{
  "label": "市北区",
  "value": "370203" },
{
  "label": "黄岛区",
  "value": "370211" },
{
  "label": "崂山区",
  "value": "370212" },
{
  "label": "李沧区",
  "value": "370213" },
{
  "label": "城阳区",
  "value": "370214" },
{
  "label": "即墨区",
  "value": "370215" },
{
  "label": "青岛高新技术产业开发区",
  "value": "370271" },
{
  "label": "胶州市",
  "value": "370281" },
{
  "label": "平度市",
  "value": "370283" },
{
  "label": "莱西市",
  "value": "370285" }],

[{
  "label": "淄川区",
  "value": "370302" },
{
  "label": "张店区",
  "value": "370303" },
{
  "label": "博山区",
  "value": "370304" },
{
  "label": "临淄区",
  "value": "370305" },
{
  "label": "周村区",
  "value": "370306" },
{
  "label": "桓台县",
  "value": "370321" },
{
  "label": "高青县",
  "value": "370322" },
{
  "label": "沂源县",
  "value": "370323" }],

[{
  "label": "市中区",
  "value": "370402" },
{
  "label": "薛城区",
  "value": "370403" },
{
  "label": "峄城区",
  "value": "370404" },
{
  "label": "台儿庄区",
  "value": "370405" },
{
  "label": "山亭区",
  "value": "370406" },
{
  "label": "滕州市",
  "value": "370481" }],

[{
  "label": "东营区",
  "value": "370502" },
{
  "label": "河口区",
  "value": "370503" },
{
  "label": "垦利区",
  "value": "370505" },
{
  "label": "利津县",
  "value": "370522" },
{
  "label": "广饶县",
  "value": "370523" },
{
  "label": "东营经济技术开发区",
  "value": "370571" },
{
  "label": "东营港经济开发区",
  "value": "370572" }],

[{
  "label": "芝罘区",
  "value": "370602" },
{
  "label": "福山区",
  "value": "370611" },
{
  "label": "牟平区",
  "value": "370612" },
{
  "label": "莱山区",
  "value": "370613" },
{
  "label": "长岛县",
  "value": "370634" },
{
  "label": "烟台高新技术产业开发区",
  "value": "370671" },
{
  "label": "烟台经济技术开发区",
  "value": "370672" },
{
  "label": "龙口市",
  "value": "370681" },
{
  "label": "莱阳市",
  "value": "370682" },
{
  "label": "莱州市",
  "value": "370683" },
{
  "label": "蓬莱市",
  "value": "370684" },
{
  "label": "招远市",
  "value": "370685" },
{
  "label": "栖霞市",
  "value": "370686" },
{
  "label": "海阳市",
  "value": "370687" }],

[{
  "label": "潍城区",
  "value": "370702" },
{
  "label": "寒亭区",
  "value": "370703" },
{
  "label": "坊子区",
  "value": "370704" },
{
  "label": "奎文区",
  "value": "370705" },
{
  "label": "临朐县",
  "value": "370724" },
{
  "label": "昌乐县",
  "value": "370725" },
{
  "label": "潍坊滨海经济技术开发区",
  "value": "370772" },
{
  "label": "青州市",
  "value": "370781" },
{
  "label": "诸城市",
  "value": "370782" },
{
  "label": "寿光市",
  "value": "370783" },
{
  "label": "安丘市",
  "value": "370784" },
{
  "label": "高密市",
  "value": "370785" },
{
  "label": "昌邑市",
  "value": "370786" }],

[{
  "label": "任城区",
  "value": "370811" },
{
  "label": "兖州区",
  "value": "370812" },
{
  "label": "微山县",
  "value": "370826" },
{
  "label": "鱼台县",
  "value": "370827" },
{
  "label": "金乡县",
  "value": "370828" },
{
  "label": "嘉祥县",
  "value": "370829" },
{
  "label": "汶上县",
  "value": "370830" },
{
  "label": "泗水县",
  "value": "370831" },
{
  "label": "梁山县",
  "value": "370832" },
{
  "label": "济宁高新技术产业开发区",
  "value": "370871" },
{
  "label": "曲阜市",
  "value": "370881" },
{
  "label": "邹城市",
  "value": "370883" }],

[{
  "label": "泰山区",
  "value": "370902" },
{
  "label": "岱岳区",
  "value": "370911" },
{
  "label": "宁阳县",
  "value": "370921" },
{
  "label": "东平县",
  "value": "370923" },
{
  "label": "新泰市",
  "value": "370982" },
{
  "label": "肥城市",
  "value": "370983" }],

[{
  "label": "环翠区",
  "value": "371002" },
{
  "label": "文登区",
  "value": "371003" },
{
  "label": "威海火炬高技术产业开发区",
  "value": "371071" },
{
  "label": "威海经济技术开发区",
  "value": "371072" },
{
  "label": "威海临港经济技术开发区",
  "value": "371073" },
{
  "label": "荣成市",
  "value": "371082" },
{
  "label": "乳山市",
  "value": "371083" }],

[{
  "label": "东港区",
  "value": "371102" },
{
  "label": "岚山区",
  "value": "371103" },
{
  "label": "五莲县",
  "value": "371121" },
{
  "label": "莒县",
  "value": "371122" },
{
  "label": "日照经济技术开发区",
  "value": "371171" },
{
  "label": "日照国际海洋城",
  "value": "371172" }],

[{
  "label": "莱城区",
  "value": "371202" },
{
  "label": "钢城区",
  "value": "371203" }],

[{
  "label": "兰山区",
  "value": "371302" },
{
  "label": "罗庄区",
  "value": "371311" },
{
  "label": "河东区",
  "value": "371312" },
{
  "label": "沂南县",
  "value": "371321" },
{
  "label": "郯城县",
  "value": "371322" },
{
  "label": "沂水县",
  "value": "371323" },
{
  "label": "兰陵县",
  "value": "371324" },
{
  "label": "费县",
  "value": "371325" },
{
  "label": "平邑县",
  "value": "371326" },
{
  "label": "莒南县",
  "value": "371327" },
{
  "label": "蒙阴县",
  "value": "371328" },
{
  "label": "临沭县",
  "value": "371329" },
{
  "label": "临沂高新技术产业开发区",
  "value": "371371" },
{
  "label": "临沂经济技术开发区",
  "value": "371372" },
{
  "label": "临沂临港经济开发区",
  "value": "371373" }],

[{
  "label": "德城区",
  "value": "371402" },
{
  "label": "陵城区",
  "value": "371403" },
{
  "label": "宁津县",
  "value": "371422" },
{
  "label": "庆云县",
  "value": "371423" },
{
  "label": "临邑县",
  "value": "371424" },
{
  "label": "齐河县",
  "value": "371425" },
{
  "label": "平原县",
  "value": "371426" },
{
  "label": "夏津县",
  "value": "371427" },
{
  "label": "武城县",
  "value": "371428" },
{
  "label": "德州经济技术开发区",
  "value": "371471" },
{
  "label": "德州运河经济开发区",
  "value": "371472" },
{
  "label": "乐陵市",
  "value": "371481" },
{
  "label": "禹城市",
  "value": "371482" }],

[{
  "label": "东昌府区",
  "value": "371502" },
{
  "label": "阳谷县",
  "value": "371521" },
{
  "label": "莘县",
  "value": "371522" },
{
  "label": "茌平县",
  "value": "371523" },
{
  "label": "东阿县",
  "value": "371524" },
{
  "label": "冠县",
  "value": "371525" },
{
  "label": "高唐县",
  "value": "371526" },
{
  "label": "临清市",
  "value": "371581" }],

[{
  "label": "滨城区",
  "value": "371602" },
{
  "label": "沾化区",
  "value": "371603" },
{
  "label": "惠民县",
  "value": "371621" },
{
  "label": "阳信县",
  "value": "371622" },
{
  "label": "无棣县",
  "value": "371623" },
{
  "label": "博兴县",
  "value": "371625" },
{
  "label": "邹平县",
  "value": "371626" }],

[{
  "label": "牡丹区",
  "value": "371702" },
{
  "label": "定陶区",
  "value": "371703" },
{
  "label": "曹县",
  "value": "371721" },
{
  "label": "单县",
  "value": "371722" },
{
  "label": "成武县",
  "value": "371723" },
{
  "label": "巨野县",
  "value": "371724" },
{
  "label": "郓城县",
  "value": "371725" },
{
  "label": "鄄城县",
  "value": "371726" },
{
  "label": "东明县",
  "value": "371728" },
{
  "label": "菏泽经济技术开发区",
  "value": "371771" },
{
  "label": "菏泽高新技术开发区",
  "value": "371772" }]],


[
[{
  "label": "中原区",
  "value": "410102" },
{
  "label": "二七区",
  "value": "410103" },
{
  "label": "管城回族区",
  "value": "410104" },
{
  "label": "金水区",
  "value": "410105" },
{
  "label": "上街区",
  "value": "410106" },
{
  "label": "惠济区",
  "value": "410108" },
{
  "label": "中牟县",
  "value": "410122" },
{
  "label": "郑州经济技术开发区",
  "value": "410171" },
{
  "label": "郑州高新技术产业开发区",
  "value": "410172" },
{
  "label": "郑州航空港经济综合实验区",
  "value": "410173" },
{
  "label": "巩义市",
  "value": "410181" },
{
  "label": "荥阳市",
  "value": "410182" },
{
  "label": "新密市",
  "value": "410183" },
{
  "label": "新郑市",
  "value": "410184" },
{
  "label": "登封市",
  "value": "410185" }],

[{
  "label": "龙亭区",
  "value": "410202" },
{
  "label": "顺河回族区",
  "value": "410203" },
{
  "label": "鼓楼区",
  "value": "410204" },
{
  "label": "禹王台区",
  "value": "410205" },
{
  "label": "祥符区",
  "value": "410212" },
{
  "label": "杞县",
  "value": "410221" },
{
  "label": "通许县",
  "value": "410222" },
{
  "label": "尉氏县",
  "value": "410223" },
{
  "label": "兰考县",
  "value": "410225" }],

[{
  "label": "老城区",
  "value": "410302" },
{
  "label": "西工区",
  "value": "410303" },
{
  "label": "瀍河回族区",
  "value": "410304" },
{
  "label": "涧西区",
  "value": "410305" },
{
  "label": "吉利区",
  "value": "410306" },
{
  "label": "洛龙区",
  "value": "410311" },
{
  "label": "孟津县",
  "value": "410322" },
{
  "label": "新安县",
  "value": "410323" },
{
  "label": "栾川县",
  "value": "410324" },
{
  "label": "嵩县",
  "value": "410325" },
{
  "label": "汝阳县",
  "value": "410326" },
{
  "label": "宜阳县",
  "value": "410327" },
{
  "label": "洛宁县",
  "value": "410328" },
{
  "label": "伊川县",
  "value": "410329" },
{
  "label": "洛阳高新技术产业开发区",
  "value": "410371" },
{
  "label": "偃师市",
  "value": "410381" }],

[{
  "label": "新华区",
  "value": "410402" },
{
  "label": "卫东区",
  "value": "410403" },
{
  "label": "石龙区",
  "value": "410404" },
{
  "label": "湛河区",
  "value": "410411" },
{
  "label": "宝丰县",
  "value": "410421" },
{
  "label": "叶县",
  "value": "410422" },
{
  "label": "鲁山县",
  "value": "410423" },
{
  "label": "郏县",
  "value": "410425" },
{
  "label": "平顶山高新技术产业开发区",
  "value": "410471" },
{
  "label": "平顶山市新城区",
  "value": "410472" },
{
  "label": "舞钢市",
  "value": "410481" },
{
  "label": "汝州市",
  "value": "410482" }],

[{
  "label": "文峰区",
  "value": "410502" },
{
  "label": "北关区",
  "value": "410503" },
{
  "label": "殷都区",
  "value": "410505" },
{
  "label": "龙安区",
  "value": "410506" },
{
  "label": "安阳县",
  "value": "410522" },
{
  "label": "汤阴县",
  "value": "410523" },
{
  "label": "滑县",
  "value": "410526" },
{
  "label": "内黄县",
  "value": "410527" },
{
  "label": "安阳高新技术产业开发区",
  "value": "410571" },
{
  "label": "林州市",
  "value": "410581" }],

[{
  "label": "鹤山区",
  "value": "410602" },
{
  "label": "山城区",
  "value": "410603" },
{
  "label": "淇滨区",
  "value": "410611" },
{
  "label": "浚县",
  "value": "410621" },
{
  "label": "淇县",
  "value": "410622" },
{
  "label": "鹤壁经济技术开发区",
  "value": "410671" }],

[{
  "label": "红旗区",
  "value": "410702" },
{
  "label": "卫滨区",
  "value": "410703" },
{
  "label": "凤泉区",
  "value": "410704" },
{
  "label": "牧野区",
  "value": "410711" },
{
  "label": "新乡县",
  "value": "410721" },
{
  "label": "获嘉县",
  "value": "410724" },
{
  "label": "原阳县",
  "value": "410725" },
{
  "label": "延津县",
  "value": "410726" },
{
  "label": "封丘县",
  "value": "410727" },
{
  "label": "长垣县",
  "value": "410728" },
{
  "label": "新乡高新技术产业开发区",
  "value": "410771" },
{
  "label": "新乡经济技术开发区",
  "value": "410772" },
{
  "label": "新乡市平原城乡一体化示范区",
  "value": "410773" },
{
  "label": "卫辉市",
  "value": "410781" },
{
  "label": "辉县市",
  "value": "410782" }],

[{
  "label": "解放区",
  "value": "410802" },
{
  "label": "中站区",
  "value": "410803" },
{
  "label": "马村区",
  "value": "410804" },
{
  "label": "山阳区",
  "value": "410811" },
{
  "label": "修武县",
  "value": "410821" },
{
  "label": "博爱县",
  "value": "410822" },
{
  "label": "武陟县",
  "value": "410823" },
{
  "label": "温县",
  "value": "410825" },
{
  "label": "焦作城乡一体化示范区",
  "value": "410871" },
{
  "label": "沁阳市",
  "value": "410882" },
{
  "label": "孟州市",
  "value": "410883" }],

[{
  "label": "华龙区",
  "value": "410902" },
{
  "label": "清丰县",
  "value": "410922" },
{
  "label": "南乐县",
  "value": "410923" },
{
  "label": "范县",
  "value": "410926" },
{
  "label": "台前县",
  "value": "410927" },
{
  "label": "濮阳县",
  "value": "410928" },
{
  "label": "河南濮阳工业园区",
  "value": "410971" },
{
  "label": "濮阳经济技术开发区",
  "value": "410972" }],

[{
  "label": "魏都区",
  "value": "411002" },
{
  "label": "建安区",
  "value": "411003" },
{
  "label": "鄢陵县",
  "value": "411024" },
{
  "label": "襄城县",
  "value": "411025" },
{
  "label": "许昌经济技术开发区",
  "value": "411071" },
{
  "label": "禹州市",
  "value": "411081" },
{
  "label": "长葛市",
  "value": "411082" }],

[{
  "label": "源汇区",
  "value": "411102" },
{
  "label": "郾城区",
  "value": "411103" },
{
  "label": "召陵区",
  "value": "411104" },
{
  "label": "舞阳县",
  "value": "411121" },
{
  "label": "临颍县",
  "value": "411122" },
{
  "label": "漯河经济技术开发区",
  "value": "411171" }],

[{
  "label": "湖滨区",
  "value": "411202" },
{
  "label": "陕州区",
  "value": "411203" },
{
  "label": "渑池县",
  "value": "411221" },
{
  "label": "卢氏县",
  "value": "411224" },
{
  "label": "河南三门峡经济开发区",
  "value": "411271" },
{
  "label": "义马市",
  "value": "411281" },
{
  "label": "灵宝市",
  "value": "411282" }],

[{
  "label": "宛城区",
  "value": "411302" },
{
  "label": "卧龙区",
  "value": "411303" },
{
  "label": "南召县",
  "value": "411321" },
{
  "label": "方城县",
  "value": "411322" },
{
  "label": "西峡县",
  "value": "411323" },
{
  "label": "镇平县",
  "value": "411324" },
{
  "label": "内乡县",
  "value": "411325" },
{
  "label": "淅川县",
  "value": "411326" },
{
  "label": "社旗县",
  "value": "411327" },
{
  "label": "唐河县",
  "value": "411328" },
{
  "label": "新野县",
  "value": "411329" },
{
  "label": "桐柏县",
  "value": "411330" },
{
  "label": "南阳高新技术产业开发区",
  "value": "411371" },
{
  "label": "南阳市城乡一体化示范区",
  "value": "411372" },
{
  "label": "邓州市",
  "value": "411381" }],

[{
  "label": "梁园区",
  "value": "411402" },
{
  "label": "睢阳区",
  "value": "411403" },
{
  "label": "民权县",
  "value": "411421" },
{
  "label": "睢县",
  "value": "411422" },
{
  "label": "宁陵县",
  "value": "411423" },
{
  "label": "柘城县",
  "value": "411424" },
{
  "label": "虞城县",
  "value": "411425" },
{
  "label": "夏邑县",
  "value": "411426" },
{
  "label": "豫东综合物流产业聚集区",
  "value": "411471" },
{
  "label": "河南商丘经济开发区",
  "value": "411472" },
{
  "label": "永城市",
  "value": "411481" }],

[{
  "label": "浉河区",
  "value": "411502" },
{
  "label": "平桥区",
  "value": "411503" },
{
  "label": "罗山县",
  "value": "411521" },
{
  "label": "光山县",
  "value": "411522" },
{
  "label": "新县",
  "value": "411523" },
{
  "label": "商城县",
  "value": "411524" },
{
  "label": "固始县",
  "value": "411525" },
{
  "label": "潢川县",
  "value": "411526" },
{
  "label": "淮滨县",
  "value": "411527" },
{
  "label": "息县",
  "value": "411528" },
{
  "label": "信阳高新技术产业开发区",
  "value": "411571" }],

[{
  "label": "川汇区",
  "value": "411602" },
{
  "label": "扶沟县",
  "value": "411621" },
{
  "label": "西华县",
  "value": "411622" },
{
  "label": "商水县",
  "value": "411623" },
{
  "label": "沈丘县",
  "value": "411624" },
{
  "label": "郸城县",
  "value": "411625" },
{
  "label": "淮阳县",
  "value": "411626" },
{
  "label": "太康县",
  "value": "411627" },
{
  "label": "鹿邑县",
  "value": "411628" },
{
  "label": "河南周口经济开发区",
  "value": "411671" },
{
  "label": "项城市",
  "value": "411681" }],

[{
  "label": "驿城区",
  "value": "411702" },
{
  "label": "西平县",
  "value": "411721" },
{
  "label": "上蔡县",
  "value": "411722" },
{
  "label": "平舆县",
  "value": "411723" },
{
  "label": "正阳县",
  "value": "411724" },
{
  "label": "确山县",
  "value": "411725" },
{
  "label": "泌阳县",
  "value": "411726" },
{
  "label": "汝南县",
  "value": "411727" },
{
  "label": "遂平县",
  "value": "411728" },
{
  "label": "新蔡县",
  "value": "411729" },
{
  "label": "河南驻马店经济开发区",
  "value": "411771" }],

[{
  "label": "济源市",
  "value": "419001" }]],


[
[{
  "label": "江岸区",
  "value": "420102" },
{
  "label": "江汉区",
  "value": "420103" },
{
  "label": "硚口区",
  "value": "420104" },
{
  "label": "汉阳区",
  "value": "420105" },
{
  "label": "武昌区",
  "value": "420106" },
{
  "label": "青山区",
  "value": "420107" },
{
  "label": "洪山区",
  "value": "420111" },
{
  "label": "东西湖区",
  "value": "420112" },
{
  "label": "汉南区",
  "value": "420113" },
{
  "label": "蔡甸区",
  "value": "420114" },
{
  "label": "江夏区",
  "value": "420115" },
{
  "label": "黄陂区",
  "value": "420116" },
{
  "label": "新洲区",
  "value": "420117" }],

[{
  "label": "黄石港区",
  "value": "420202" },
{
  "label": "西塞山区",
  "value": "420203" },
{
  "label": "下陆区",
  "value": "420204" },
{
  "label": "铁山区",
  "value": "420205" },
{
  "label": "阳新县",
  "value": "420222" },
{
  "label": "大冶市",
  "value": "420281" }],

[{
  "label": "茅箭区",
  "value": "420302" },
{
  "label": "张湾区",
  "value": "420303" },
{
  "label": "郧阳区",
  "value": "420304" },
{
  "label": "郧西县",
  "value": "420322" },
{
  "label": "竹山县",
  "value": "420323" },
{
  "label": "竹溪县",
  "value": "420324" },
{
  "label": "房县",
  "value": "420325" },
{
  "label": "丹江口市",
  "value": "420381" }],

[{
  "label": "西陵区",
  "value": "420502" },
{
  "label": "伍家岗区",
  "value": "420503" },
{
  "label": "点军区",
  "value": "420504" },
{
  "label": "猇亭区",
  "value": "420505" },
{
  "label": "夷陵区",
  "value": "420506" },
{
  "label": "远安县",
  "value": "420525" },
{
  "label": "兴山县",
  "value": "420526" },
{
  "label": "秭归县",
  "value": "420527" },
{
  "label": "长阳土家族自治县",
  "value": "420528" },
{
  "label": "五峰土家族自治县",
  "value": "420529" },
{
  "label": "宜都市",
  "value": "420581" },
{
  "label": "当阳市",
  "value": "420582" },
{
  "label": "枝江市",
  "value": "420583" }],

[{
  "label": "襄城区",
  "value": "420602" },
{
  "label": "樊城区",
  "value": "420606" },
{
  "label": "襄州区",
  "value": "420607" },
{
  "label": "南漳县",
  "value": "420624" },
{
  "label": "谷城县",
  "value": "420625" },
{
  "label": "保康县",
  "value": "420626" },
{
  "label": "老河口市",
  "value": "420682" },
{
  "label": "枣阳市",
  "value": "420683" },
{
  "label": "宜城市",
  "value": "420684" }],

[{
  "label": "梁子湖区",
  "value": "420702" },
{
  "label": "华容区",
  "value": "420703" },
{
  "label": "鄂城区",
  "value": "420704" }],

[{
  "label": "东宝区",
  "value": "420802" },
{
  "label": "掇刀区",
  "value": "420804" },
{
  "label": "京山县",
  "value": "420821" },
{
  "label": "沙洋县",
  "value": "420822" },
{
  "label": "钟祥市",
  "value": "420881" }],

[{
  "label": "孝南区",
  "value": "420902" },
{
  "label": "孝昌县",
  "value": "420921" },
{
  "label": "大悟县",
  "value": "420922" },
{
  "label": "云梦县",
  "value": "420923" },
{
  "label": "应城市",
  "value": "420981" },
{
  "label": "安陆市",
  "value": "420982" },
{
  "label": "汉川市",
  "value": "420984" }],

[{
  "label": "沙市区",
  "value": "421002" },
{
  "label": "荆州区",
  "value": "421003" },
{
  "label": "公安县",
  "value": "421022" },
{
  "label": "监利县",
  "value": "421023" },
{
  "label": "江陵县",
  "value": "421024" },
{
  "label": "荆州经济技术开发区",
  "value": "421071" },
{
  "label": "石首市",
  "value": "421081" },
{
  "label": "洪湖市",
  "value": "421083" },
{
  "label": "松滋市",
  "value": "421087" }],

[{
  "label": "黄州区",
  "value": "421102" },
{
  "label": "团风县",
  "value": "421121" },
{
  "label": "红安县",
  "value": "421122" },
{
  "label": "罗田县",
  "value": "421123" },
{
  "label": "英山县",
  "value": "421124" },
{
  "label": "浠水县",
  "value": "421125" },
{
  "label": "蕲春县",
  "value": "421126" },
{
  "label": "黄梅县",
  "value": "421127" },
{
  "label": "龙感湖管理区",
  "value": "421171" },
{
  "label": "麻城市",
  "value": "421181" },
{
  "label": "武穴市",
  "value": "421182" }],

[{
  "label": "咸安区",
  "value": "421202" },
{
  "label": "嘉鱼县",
  "value": "421221" },
{
  "label": "通城县",
  "value": "421222" },
{
  "label": "崇阳县",
  "value": "421223" },
{
  "label": "通山县",
  "value": "421224" },
{
  "label": "赤壁市",
  "value": "421281" }],

[{
  "label": "曾都区",
  "value": "421303" },
{
  "label": "随县",
  "value": "421321" },
{
  "label": "广水市",
  "value": "421381" }],

[{
  "label": "恩施市",
  "value": "422801" },
{
  "label": "利川市",
  "value": "422802" },
{
  "label": "建始县",
  "value": "422822" },
{
  "label": "巴东县",
  "value": "422823" },
{
  "label": "宣恩县",
  "value": "422825" },
{
  "label": "咸丰县",
  "value": "422826" },
{
  "label": "来凤县",
  "value": "422827" },
{
  "label": "鹤峰县",
  "value": "422828" }],

[{
  "label": "仙桃市",
  "value": "429004" },
{
  "label": "潜江市",
  "value": "429005" },
{
  "label": "天门市",
  "value": "429006" },
{
  "label": "神农架林区",
  "value": "429021" }]],


[
[{
  "label": "芙蓉区",
  "value": "430102" },
{
  "label": "天心区",
  "value": "430103" },
{
  "label": "岳麓区",
  "value": "430104" },
{
  "label": "开福区",
  "value": "430105" },
{
  "label": "雨花区",
  "value": "430111" },
{
  "label": "望城区",
  "value": "430112" },
{
  "label": "长沙县",
  "value": "430121" },
{
  "label": "浏阳市",
  "value": "430181" },
{
  "label": "宁乡市",
  "value": "430182" }],

[{
  "label": "荷塘区",
  "value": "430202" },
{
  "label": "芦淞区",
  "value": "430203" },
{
  "label": "石峰区",
  "value": "430204" },
{
  "label": "天元区",
  "value": "430211" },
{
  "label": "株洲县",
  "value": "430221" },
{
  "label": "攸县",
  "value": "430223" },
{
  "label": "茶陵县",
  "value": "430224" },
{
  "label": "炎陵县",
  "value": "430225" },
{
  "label": "云龙示范区",
  "value": "430271" },
{
  "label": "醴陵市",
  "value": "430281" }],

[{
  "label": "雨湖区",
  "value": "430302" },
{
  "label": "岳塘区",
  "value": "430304" },
{
  "label": "湘潭县",
  "value": "430321" },
{
  "label": "湖南湘潭高新技术产业园区",
  "value": "430371" },
{
  "label": "湘潭昭山示范区",
  "value": "430372" },
{
  "label": "湘潭九华示范区",
  "value": "430373" },
{
  "label": "湘乡市",
  "value": "430381" },
{
  "label": "韶山市",
  "value": "430382" }],

[{
  "label": "珠晖区",
  "value": "430405" },
{
  "label": "雁峰区",
  "value": "430406" },
{
  "label": "石鼓区",
  "value": "430407" },
{
  "label": "蒸湘区",
  "value": "430408" },
{
  "label": "南岳区",
  "value": "430412" },
{
  "label": "衡阳县",
  "value": "430421" },
{
  "label": "衡南县",
  "value": "430422" },
{
  "label": "衡山县",
  "value": "430423" },
{
  "label": "衡东县",
  "value": "430424" },
{
  "label": "祁东县",
  "value": "430426" },
{
  "label": "衡阳综合保税区",
  "value": "430471" },
{
  "label": "湖南衡阳高新技术产业园区",
  "value": "430472" },
{
  "label": "湖南衡阳松木经济开发区",
  "value": "430473" },
{
  "label": "耒阳市",
  "value": "430481" },
{
  "label": "常宁市",
  "value": "430482" }],

[{
  "label": "双清区",
  "value": "430502" },
{
  "label": "大祥区",
  "value": "430503" },
{
  "label": "北塔区",
  "value": "430511" },
{
  "label": "邵东县",
  "value": "430521" },
{
  "label": "新邵县",
  "value": "430522" },
{
  "label": "邵阳县",
  "value": "430523" },
{
  "label": "隆回县",
  "value": "430524" },
{
  "label": "洞口县",
  "value": "430525" },
{
  "label": "绥宁县",
  "value": "430527" },
{
  "label": "新宁县",
  "value": "430528" },
{
  "label": "城步苗族自治县",
  "value": "430529" },
{
  "label": "武冈市",
  "value": "430581" }],

[{
  "label": "岳阳楼区",
  "value": "430602" },
{
  "label": "云溪区",
  "value": "430603" },
{
  "label": "君山区",
  "value": "430611" },
{
  "label": "岳阳县",
  "value": "430621" },
{
  "label": "华容县",
  "value": "430623" },
{
  "label": "湘阴县",
  "value": "430624" },
{
  "label": "平江县",
  "value": "430626" },
{
  "label": "岳阳市屈原管理区",
  "value": "430671" },
{
  "label": "汨罗市",
  "value": "430681" },
{
  "label": "临湘市",
  "value": "430682" }],

[{
  "label": "武陵区",
  "value": "430702" },
{
  "label": "鼎城区",
  "value": "430703" },
{
  "label": "安乡县",
  "value": "430721" },
{
  "label": "汉寿县",
  "value": "430722" },
{
  "label": "澧县",
  "value": "430723" },
{
  "label": "临澧县",
  "value": "430724" },
{
  "label": "桃源县",
  "value": "430725" },
{
  "label": "石门县",
  "value": "430726" },
{
  "label": "常德市西洞庭管理区",
  "value": "430771" },
{
  "label": "津市市",
  "value": "430781" }],

[{
  "label": "永定区",
  "value": "430802" },
{
  "label": "武陵源区",
  "value": "430811" },
{
  "label": "慈利县",
  "value": "430821" },
{
  "label": "桑植县",
  "value": "430822" }],

[{
  "label": "资阳区",
  "value": "430902" },
{
  "label": "赫山区",
  "value": "430903" },
{
  "label": "南县",
  "value": "430921" },
{
  "label": "桃江县",
  "value": "430922" },
{
  "label": "安化县",
  "value": "430923" },
{
  "label": "益阳市大通湖管理区",
  "value": "430971" },
{
  "label": "湖南益阳高新技术产业园区",
  "value": "430972" },
{
  "label": "沅江市",
  "value": "430981" }],

[{
  "label": "北湖区",
  "value": "431002" },
{
  "label": "苏仙区",
  "value": "431003" },
{
  "label": "桂阳县",
  "value": "431021" },
{
  "label": "宜章县",
  "value": "431022" },
{
  "label": "永兴县",
  "value": "431023" },
{
  "label": "嘉禾县",
  "value": "431024" },
{
  "label": "临武县",
  "value": "431025" },
{
  "label": "汝城县",
  "value": "431026" },
{
  "label": "桂东县",
  "value": "431027" },
{
  "label": "安仁县",
  "value": "431028" },
{
  "label": "资兴市",
  "value": "431081" }],

[{
  "label": "零陵区",
  "value": "431102" },
{
  "label": "冷水滩区",
  "value": "431103" },
{
  "label": "祁阳县",
  "value": "431121" },
{
  "label": "东安县",
  "value": "431122" },
{
  "label": "双牌县",
  "value": "431123" },
{
  "label": "道县",
  "value": "431124" },
{
  "label": "江永县",
  "value": "431125" },
{
  "label": "宁远县",
  "value": "431126" },
{
  "label": "蓝山县",
  "value": "431127" },
{
  "label": "新田县",
  "value": "431128" },
{
  "label": "江华瑶族自治县",
  "value": "431129" },
{
  "label": "永州经济技术开发区",
  "value": "431171" },
{
  "label": "永州市金洞管理区",
  "value": "431172" },
{
  "label": "永州市回龙圩管理区",
  "value": "431173" }],

[{
  "label": "鹤城区",
  "value": "431202" },
{
  "label": "中方县",
  "value": "431221" },
{
  "label": "沅陵县",
  "value": "431222" },
{
  "label": "辰溪县",
  "value": "431223" },
{
  "label": "溆浦县",
  "value": "431224" },
{
  "label": "会同县",
  "value": "431225" },
{
  "label": "麻阳苗族自治县",
  "value": "431226" },
{
  "label": "新晃侗族自治县",
  "value": "431227" },
{
  "label": "芷江侗族自治县",
  "value": "431228" },
{
  "label": "靖州苗族侗族自治县",
  "value": "431229" },
{
  "label": "通道侗族自治县",
  "value": "431230" },
{
  "label": "怀化市洪江管理区",
  "value": "431271" },
{
  "label": "洪江市",
  "value": "431281" }],

[{
  "label": "娄星区",
  "value": "431302" },
{
  "label": "双峰县",
  "value": "431321" },
{
  "label": "新化县",
  "value": "431322" },
{
  "label": "冷水江市",
  "value": "431381" },
{
  "label": "涟源市",
  "value": "431382" }],

[{
  "label": "吉首市",
  "value": "433101" },
{
  "label": "泸溪县",
  "value": "433122" },
{
  "label": "凤凰县",
  "value": "433123" },
{
  "label": "花垣县",
  "value": "433124" },
{
  "label": "保靖县",
  "value": "433125" },
{
  "label": "古丈县",
  "value": "433126" },
{
  "label": "永顺县",
  "value": "433127" },
{
  "label": "龙山县",
  "value": "433130" },
{
  "label": "湖南吉首经济开发区",
  "value": "433172" },
{
  "label": "湖南永顺经济开发区",
  "value": "433173" }]],


[
[{
  "label": "荔湾区",
  "value": "440103" },
{
  "label": "越秀区",
  "value": "440104" },
{
  "label": "海珠区",
  "value": "440105" },
{
  "label": "天河区",
  "value": "440106" },
{
  "label": "白云区",
  "value": "440111" },
{
  "label": "黄埔区",
  "value": "440112" },
{
  "label": "番禺区",
  "value": "440113" },
{
  "label": "花都区",
  "value": "440114" },
{
  "label": "南沙区",
  "value": "440115" },
{
  "label": "从化区",
  "value": "440117" },
{
  "label": "增城区",
  "value": "440118" }],

[{
  "label": "武江区",
  "value": "440203" },
{
  "label": "浈江区",
  "value": "440204" },
{
  "label": "曲江区",
  "value": "440205" },
{
  "label": "始兴县",
  "value": "440222" },
{
  "label": "仁化县",
  "value": "440224" },
{
  "label": "翁源县",
  "value": "440229" },
{
  "label": "乳源瑶族自治县",
  "value": "440232" },
{
  "label": "新丰县",
  "value": "440233" },
{
  "label": "乐昌市",
  "value": "440281" },
{
  "label": "南雄市",
  "value": "440282" }],

[{
  "label": "罗湖区",
  "value": "440303" },
{
  "label": "福田区",
  "value": "440304" },
{
  "label": "南山区",
  "value": "440305" },
{
  "label": "宝安区",
  "value": "440306" },
{
  "label": "龙岗区",
  "value": "440307" },
{
  "label": "盐田区",
  "value": "440308" },
{
  "label": "龙华区",
  "value": "440309" },
{
  "label": "坪山区",
  "value": "440310" }],

[{
  "label": "香洲区",
  "value": "440402" },
{
  "label": "斗门区",
  "value": "440403" },
{
  "label": "金湾区",
  "value": "440404" }],

[{
  "label": "龙湖区",
  "value": "440507" },
{
  "label": "金平区",
  "value": "440511" },
{
  "label": "濠江区",
  "value": "440512" },
{
  "label": "潮阳区",
  "value": "440513" },
{
  "label": "潮南区",
  "value": "440514" },
{
  "label": "澄海区",
  "value": "440515" },
{
  "label": "南澳县",
  "value": "440523" }],

[{
  "label": "禅城区",
  "value": "440604" },
{
  "label": "南海区",
  "value": "440605" },
{
  "label": "顺德区",
  "value": "440606" },
{
  "label": "三水区",
  "value": "440607" },
{
  "label": "高明区",
  "value": "440608" }],

[{
  "label": "蓬江区",
  "value": "440703" },
{
  "label": "江海区",
  "value": "440704" },
{
  "label": "新会区",
  "value": "440705" },
{
  "label": "台山市",
  "value": "440781" },
{
  "label": "开平市",
  "value": "440783" },
{
  "label": "鹤山市",
  "value": "440784" },
{
  "label": "恩平市",
  "value": "440785" }],

[{
  "label": "赤坎区",
  "value": "440802" },
{
  "label": "霞山区",
  "value": "440803" },
{
  "label": "坡头区",
  "value": "440804" },
{
  "label": "麻章区",
  "value": "440811" },
{
  "label": "遂溪县",
  "value": "440823" },
{
  "label": "徐闻县",
  "value": "440825" },
{
  "label": "廉江市",
  "value": "440881" },
{
  "label": "雷州市",
  "value": "440882" },
{
  "label": "吴川市",
  "value": "440883" }],

[{
  "label": "茂南区",
  "value": "440902" },
{
  "label": "电白区",
  "value": "440904" },
{
  "label": "高州市",
  "value": "440981" },
{
  "label": "化州市",
  "value": "440982" },
{
  "label": "信宜市",
  "value": "440983" }],

[{
  "label": "端州区",
  "value": "441202" },
{
  "label": "鼎湖区",
  "value": "441203" },
{
  "label": "高要区",
  "value": "441204" },
{
  "label": "广宁县",
  "value": "441223" },
{
  "label": "怀集县",
  "value": "441224" },
{
  "label": "封开县",
  "value": "441225" },
{
  "label": "德庆县",
  "value": "441226" },
{
  "label": "四会市",
  "value": "441284" }],

[{
  "label": "惠城区",
  "value": "441302" },
{
  "label": "惠阳区",
  "value": "441303" },
{
  "label": "博罗县",
  "value": "441322" },
{
  "label": "惠东县",
  "value": "441323" },
{
  "label": "龙门县",
  "value": "441324" }],

[{
  "label": "梅江区",
  "value": "441402" },
{
  "label": "梅县区",
  "value": "441403" },
{
  "label": "大埔县",
  "value": "441422" },
{
  "label": "丰顺县",
  "value": "441423" },
{
  "label": "五华县",
  "value": "441424" },
{
  "label": "平远县",
  "value": "441426" },
{
  "label": "蕉岭县",
  "value": "441427" },
{
  "label": "兴宁市",
  "value": "441481" }],

[{
  "label": "城区",
  "value": "441502" },
{
  "label": "海丰县",
  "value": "441521" },
{
  "label": "陆河县",
  "value": "441523" },
{
  "label": "陆丰市",
  "value": "441581" }],

[{
  "label": "源城区",
  "value": "441602" },
{
  "label": "紫金县",
  "value": "441621" },
{
  "label": "龙川县",
  "value": "441622" },
{
  "label": "连平县",
  "value": "441623" },
{
  "label": "和平县",
  "value": "441624" },
{
  "label": "东源县",
  "value": "441625" }],

[{
  "label": "江城区",
  "value": "441702" },
{
  "label": "阳东区",
  "value": "441704" },
{
  "label": "阳西县",
  "value": "441721" },
{
  "label": "阳春市",
  "value": "441781" }],

[{
  "label": "清城区",
  "value": "441802" },
{
  "label": "清新区",
  "value": "441803" },
{
  "label": "佛冈县",
  "value": "441821" },
{
  "label": "阳山县",
  "value": "441823" },
{
  "label": "连山壮族瑶族自治县",
  "value": "441825" },
{
  "label": "连南瑶族自治县",
  "value": "441826" },
{
  "label": "英德市",
  "value": "441881" },
{
  "label": "连州市",
  "value": "441882" }],

[{
  "label": "东莞市",
  "value": "441900" }],

[{
  "label": "中山市",
  "value": "442000" }],

[{
  "label": "湘桥区",
  "value": "445102" },
{
  "label": "潮安区",
  "value": "445103" },
{
  "label": "饶平县",
  "value": "445122" }],

[{
  "label": "榕城区",
  "value": "445202" },
{
  "label": "揭东区",
  "value": "445203" },
{
  "label": "揭西县",
  "value": "445222" },
{
  "label": "惠来县",
  "value": "445224" },
{
  "label": "普宁市",
  "value": "445281" }],

[{
  "label": "云城区",
  "value": "445302" },
{
  "label": "云安区",
  "value": "445303" },
{
  "label": "新兴县",
  "value": "445321" },
{
  "label": "郁南县",
  "value": "445322" },
{
  "label": "罗定市",
  "value": "445381" }]],


[
[{
  "label": "兴宁区",
  "value": "450102" },
{
  "label": "青秀区",
  "value": "450103" },
{
  "label": "江南区",
  "value": "450105" },
{
  "label": "西乡塘区",
  "value": "450107" },
{
  "label": "良庆区",
  "value": "450108" },
{
  "label": "邕宁区",
  "value": "450109" },
{
  "label": "武鸣区",
  "value": "450110" },
{
  "label": "隆安县",
  "value": "450123" },
{
  "label": "马山县",
  "value": "450124" },
{
  "label": "上林县",
  "value": "450125" },
{
  "label": "宾阳县",
  "value": "450126" },
{
  "label": "横县",
  "value": "450127" }],

[{
  "label": "城中区",
  "value": "450202" },
{
  "label": "鱼峰区",
  "value": "450203" },
{
  "label": "柳南区",
  "value": "450204" },
{
  "label": "柳北区",
  "value": "450205" },
{
  "label": "柳江区",
  "value": "450206" },
{
  "label": "柳城县",
  "value": "450222" },
{
  "label": "鹿寨县",
  "value": "450223" },
{
  "label": "融安县",
  "value": "450224" },
{
  "label": "融水苗族自治县",
  "value": "450225" },
{
  "label": "三江侗族自治县",
  "value": "450226" }],

[{
  "label": "秀峰区",
  "value": "450302" },
{
  "label": "叠彩区",
  "value": "450303" },
{
  "label": "象山区",
  "value": "450304" },
{
  "label": "七星区",
  "value": "450305" },
{
  "label": "雁山区",
  "value": "450311" },
{
  "label": "临桂区",
  "value": "450312" },
{
  "label": "阳朔县",
  "value": "450321" },
{
  "label": "灵川县",
  "value": "450323" },
{
  "label": "全州县",
  "value": "450324" },
{
  "label": "兴安县",
  "value": "450325" },
{
  "label": "永福县",
  "value": "450326" },
{
  "label": "灌阳县",
  "value": "450327" },
{
  "label": "龙胜各族自治县",
  "value": "450328" },
{
  "label": "资源县",
  "value": "450329" },
{
  "label": "平乐县",
  "value": "450330" },
{
  "label": "荔浦县",
  "value": "450331" },
{
  "label": "恭城瑶族自治县",
  "value": "450332" }],

[{
  "label": "万秀区",
  "value": "450403" },
{
  "label": "长洲区",
  "value": "450405" },
{
  "label": "龙圩区",
  "value": "450406" },
{
  "label": "苍梧县",
  "value": "450421" },
{
  "label": "藤县",
  "value": "450422" },
{
  "label": "蒙山县",
  "value": "450423" },
{
  "label": "岑溪市",
  "value": "450481" }],

[{
  "label": "海城区",
  "value": "450502" },
{
  "label": "银海区",
  "value": "450503" },
{
  "label": "铁山港区",
  "value": "450512" },
{
  "label": "合浦县",
  "value": "450521" }],

[{
  "label": "港口区",
  "value": "450602" },
{
  "label": "防城区",
  "value": "450603" },
{
  "label": "上思县",
  "value": "450621" },
{
  "label": "东兴市",
  "value": "450681" }],

[{
  "label": "钦南区",
  "value": "450702" },
{
  "label": "钦北区",
  "value": "450703" },
{
  "label": "灵山县",
  "value": "450721" },
{
  "label": "浦北县",
  "value": "450722" }],

[{
  "label": "港北区",
  "value": "450802" },
{
  "label": "港南区",
  "value": "450803" },
{
  "label": "覃塘区",
  "value": "450804" },
{
  "label": "平南县",
  "value": "450821" },
{
  "label": "桂平市",
  "value": "450881" }],

[{
  "label": "玉州区",
  "value": "450902" },
{
  "label": "福绵区",
  "value": "450903" },
{
  "label": "容县",
  "value": "450921" },
{
  "label": "陆川县",
  "value": "450922" },
{
  "label": "博白县",
  "value": "450923" },
{
  "label": "兴业县",
  "value": "450924" },
{
  "label": "北流市",
  "value": "450981" }],

[{
  "label": "右江区",
  "value": "451002" },
{
  "label": "田阳县",
  "value": "451021" },
{
  "label": "田东县",
  "value": "451022" },
{
  "label": "平果县",
  "value": "451023" },
{
  "label": "德保县",
  "value": "451024" },
{
  "label": "那坡县",
  "value": "451026" },
{
  "label": "凌云县",
  "value": "451027" },
{
  "label": "乐业县",
  "value": "451028" },
{
  "label": "田林县",
  "value": "451029" },
{
  "label": "西林县",
  "value": "451030" },
{
  "label": "隆林各族自治县",
  "value": "451031" },
{
  "label": "靖西市",
  "value": "451081" }],

[{
  "label": "八步区",
  "value": "451102" },
{
  "label": "平桂区",
  "value": "451103" },
{
  "label": "昭平县",
  "value": "451121" },
{
  "label": "钟山县",
  "value": "451122" },
{
  "label": "富川瑶族自治县",
  "value": "451123" }],

[{
  "label": "金城江区",
  "value": "451202" },
{
  "label": "宜州区",
  "value": "451203" },
{
  "label": "南丹县",
  "value": "451221" },
{
  "label": "天峨县",
  "value": "451222" },
{
  "label": "凤山县",
  "value": "451223" },
{
  "label": "东兰县",
  "value": "451224" },
{
  "label": "罗城仫佬族自治县",
  "value": "451225" },
{
  "label": "环江毛南族自治县",
  "value": "451226" },
{
  "label": "巴马瑶族自治县",
  "value": "451227" },
{
  "label": "都安瑶族自治县",
  "value": "451228" },
{
  "label": "大化瑶族自治县",
  "value": "451229" }],

[{
  "label": "兴宾区",
  "value": "451302" },
{
  "label": "忻城县",
  "value": "451321" },
{
  "label": "象州县",
  "value": "451322" },
{
  "label": "武宣县",
  "value": "451323" },
{
  "label": "金秀瑶族自治县",
  "value": "451324" },
{
  "label": "合山市",
  "value": "451381" }],

[{
  "label": "江州区",
  "value": "451402" },
{
  "label": "扶绥县",
  "value": "451421" },
{
  "label": "宁明县",
  "value": "451422" },
{
  "label": "龙州县",
  "value": "451423" },
{
  "label": "大新县",
  "value": "451424" },
{
  "label": "天等县",
  "value": "451425" },
{
  "label": "凭祥市",
  "value": "451481" }]],


[
[{
  "label": "秀英区",
  "value": "460105" },
{
  "label": "龙华区",
  "value": "460106" },
{
  "label": "琼山区",
  "value": "460107" },
{
  "label": "美兰区",
  "value": "460108" }],

[{
  "label": "海棠区",
  "value": "460202" },
{
  "label": "吉阳区",
  "value": "460203" },
{
  "label": "天涯区",
  "value": "460204" },
{
  "label": "崖州区",
  "value": "460205" }],

[{
  "label": "西沙群岛",
  "value": "460321" },
{
  "label": "南沙群岛",
  "value": "460322" },
{
  "label": "中沙群岛的岛礁及其海域",
  "value": "460323" }],

[{
  "label": "儋州市",
  "value": "460400" }],

[{
  "label": "五指山市",
  "value": "469001" },
{
  "label": "琼海市",
  "value": "469002" },
{
  "label": "文昌市",
  "value": "469005" },
{
  "label": "万宁市",
  "value": "469006" },
{
  "label": "东方市",
  "value": "469007" },
{
  "label": "定安县",
  "value": "469021" },
{
  "label": "屯昌县",
  "value": "469022" },
{
  "label": "澄迈县",
  "value": "469023" },
{
  "label": "临高县",
  "value": "469024" },
{
  "label": "白沙黎族自治县",
  "value": "469025" },
{
  "label": "昌江黎族自治县",
  "value": "469026" },
{
  "label": "乐东黎族自治县",
  "value": "469027" },
{
  "label": "陵水黎族自治县",
  "value": "469028" },
{
  "label": "保亭黎族苗族自治县",
  "value": "469029" },
{
  "label": "琼中黎族苗族自治县",
  "value": "469030" }]],


[
[{
  "label": "万州区",
  "value": "500101" },
{
  "label": "涪陵区",
  "value": "500102" },
{
  "label": "渝中区",
  "value": "500103" },
{
  "label": "大渡口区",
  "value": "500104" },
{
  "label": "江北区",
  "value": "500105" },
{
  "label": "沙坪坝区",
  "value": "500106" },
{
  "label": "九龙坡区",
  "value": "500107" },
{
  "label": "南岸区",
  "value": "500108" },
{
  "label": "北碚区",
  "value": "500109" },
{
  "label": "綦江区",
  "value": "500110" },
{
  "label": "大足区",
  "value": "500111" },
{
  "label": "渝北区",
  "value": "500112" },
{
  "label": "巴南区",
  "value": "500113" },
{
  "label": "黔江区",
  "value": "500114" },
{
  "label": "长寿区",
  "value": "500115" },
{
  "label": "江津区",
  "value": "500116" },
{
  "label": "合川区",
  "value": "500117" },
{
  "label": "永川区",
  "value": "500118" },
{
  "label": "南川区",
  "value": "500119" },
{
  "label": "璧山区",
  "value": "500120" },
{
  "label": "铜梁区",
  "value": "500151" },
{
  "label": "潼南区",
  "value": "500152" },
{
  "label": "荣昌区",
  "value": "500153" },
{
  "label": "开州区",
  "value": "500154" },
{
  "label": "梁平区",
  "value": "500155" },
{
  "label": "武隆区",
  "value": "500156" }],

[{
  "label": "城口县",
  "value": "500229" },
{
  "label": "丰都县",
  "value": "500230" },
{
  "label": "垫江县",
  "value": "500231" },
{
  "label": "忠县",
  "value": "500233" },
{
  "label": "云阳县",
  "value": "500235" },
{
  "label": "奉节县",
  "value": "500236" },
{
  "label": "巫山县",
  "value": "500237" },
{
  "label": "巫溪县",
  "value": "500238" },
{
  "label": "石柱土家族自治县",
  "value": "500240" },
{
  "label": "秀山土家族苗族自治县",
  "value": "500241" },
{
  "label": "酉阳土家族苗族自治县",
  "value": "500242" },
{
  "label": "彭水苗族土家族自治县",
  "value": "500243" }]],


[
[{
  "label": "锦江区",
  "value": "510104" },
{
  "label": "青羊区",
  "value": "510105" },
{
  "label": "金牛区",
  "value": "510106" },
{
  "label": "武侯区",
  "value": "510107" },
{
  "label": "成华区",
  "value": "510108" },
{
  "label": "龙泉驿区",
  "value": "510112" },
{
  "label": "青白江区",
  "value": "510113" },
{
  "label": "新都区",
  "value": "510114" },
{
  "label": "温江区",
  "value": "510115" },
{
  "label": "双流区",
  "value": "510116" },
{
  "label": "郫都区",
  "value": "510117" },
{
  "label": "金堂县",
  "value": "510121" },
{
  "label": "大邑县",
  "value": "510129" },
{
  "label": "蒲江县",
  "value": "510131" },
{
  "label": "新津县",
  "value": "510132" },
{
  "label": "都江堰市",
  "value": "510181" },
{
  "label": "彭州市",
  "value": "510182" },
{
  "label": "邛崃市",
  "value": "510183" },
{
  "label": "崇州市",
  "value": "510184" },
{
  "label": "简阳市",
  "value": "510185" }],

[{
  "label": "自流井区",
  "value": "510302" },
{
  "label": "贡井区",
  "value": "510303" },
{
  "label": "大安区",
  "value": "510304" },
{
  "label": "沿滩区",
  "value": "510311" },
{
  "label": "荣县",
  "value": "510321" },
{
  "label": "富顺县",
  "value": "510322" }],

[{
  "label": "东区",
  "value": "510402" },
{
  "label": "西区",
  "value": "510403" },
{
  "label": "仁和区",
  "value": "510411" },
{
  "label": "米易县",
  "value": "510421" },
{
  "label": "盐边县",
  "value": "510422" }],

[{
  "label": "江阳区",
  "value": "510502" },
{
  "label": "纳溪区",
  "value": "510503" },
{
  "label": "龙马潭区",
  "value": "510504" },
{
  "label": "泸县",
  "value": "510521" },
{
  "label": "合江县",
  "value": "510522" },
{
  "label": "叙永县",
  "value": "510524" },
{
  "label": "古蔺县",
  "value": "510525" }],

[{
  "label": "旌阳区",
  "value": "510603" },
{
  "label": "罗江区",
  "value": "510604" },
{
  "label": "中江县",
  "value": "510623" },
{
  "label": "广汉市",
  "value": "510681" },
{
  "label": "什邡市",
  "value": "510682" },
{
  "label": "绵竹市",
  "value": "510683" }],

[{
  "label": "涪城区",
  "value": "510703" },
{
  "label": "游仙区",
  "value": "510704" },
{
  "label": "安州区",
  "value": "510705" },
{
  "label": "三台县",
  "value": "510722" },
{
  "label": "盐亭县",
  "value": "510723" },
{
  "label": "梓潼县",
  "value": "510725" },
{
  "label": "北川羌族自治县",
  "value": "510726" },
{
  "label": "平武县",
  "value": "510727" },
{
  "label": "江油市",
  "value": "510781" }],

[{
  "label": "利州区",
  "value": "510802" },
{
  "label": "昭化区",
  "value": "510811" },
{
  "label": "朝天区",
  "value": "510812" },
{
  "label": "旺苍县",
  "value": "510821" },
{
  "label": "青川县",
  "value": "510822" },
{
  "label": "剑阁县",
  "value": "510823" },
{
  "label": "苍溪县",
  "value": "510824" }],

[{
  "label": "船山区",
  "value": "510903" },
{
  "label": "安居区",
  "value": "510904" },
{
  "label": "蓬溪县",
  "value": "510921" },
{
  "label": "射洪县",
  "value": "510922" },
{
  "label": "大英县",
  "value": "510923" }],

[{
  "label": "市中区",
  "value": "511002" },
{
  "label": "东兴区",
  "value": "511011" },
{
  "label": "威远县",
  "value": "511024" },
{
  "label": "资中县",
  "value": "511025" },
{
  "label": "内江经济开发区",
  "value": "511071" },
{
  "label": "隆昌市",
  "value": "511083" }],

[{
  "label": "市中区",
  "value": "511102" },
{
  "label": "沙湾区",
  "value": "511111" },
{
  "label": "五通桥区",
  "value": "511112" },
{
  "label": "金口河区",
  "value": "511113" },
{
  "label": "犍为县",
  "value": "511123" },
{
  "label": "井研县",
  "value": "511124" },
{
  "label": "夹江县",
  "value": "511126" },
{
  "label": "沐川县",
  "value": "511129" },
{
  "label": "峨边彝族自治县",
  "value": "511132" },
{
  "label": "马边彝族自治县",
  "value": "511133" },
{
  "label": "峨眉山市",
  "value": "511181" }],

[{
  "label": "顺庆区",
  "value": "511302" },
{
  "label": "高坪区",
  "value": "511303" },
{
  "label": "嘉陵区",
  "value": "511304" },
{
  "label": "南部县",
  "value": "511321" },
{
  "label": "营山县",
  "value": "511322" },
{
  "label": "蓬安县",
  "value": "511323" },
{
  "label": "仪陇县",
  "value": "511324" },
{
  "label": "西充县",
  "value": "511325" },
{
  "label": "阆中市",
  "value": "511381" }],

[{
  "label": "东坡区",
  "value": "511402" },
{
  "label": "彭山区",
  "value": "511403" },
{
  "label": "仁寿县",
  "value": "511421" },
{
  "label": "洪雅县",
  "value": "511423" },
{
  "label": "丹棱县",
  "value": "511424" },
{
  "label": "青神县",
  "value": "511425" }],

[{
  "label": "翠屏区",
  "value": "511502" },
{
  "label": "南溪区",
  "value": "511503" },
{
  "label": "宜宾县",
  "value": "511521" },
{
  "label": "江安县",
  "value": "511523" },
{
  "label": "长宁县",
  "value": "511524" },
{
  "label": "高县",
  "value": "511525" },
{
  "label": "珙县",
  "value": "511526" },
{
  "label": "筠连县",
  "value": "511527" },
{
  "label": "兴文县",
  "value": "511528" },
{
  "label": "屏山县",
  "value": "511529" }],

[{
  "label": "广安区",
  "value": "511602" },
{
  "label": "前锋区",
  "value": "511603" },
{
  "label": "岳池县",
  "value": "511621" },
{
  "label": "武胜县",
  "value": "511622" },
{
  "label": "邻水县",
  "value": "511623" },
{
  "label": "华蓥市",
  "value": "511681" }],

[{
  "label": "通川区",
  "value": "511702" },
{
  "label": "达川区",
  "value": "511703" },
{
  "label": "宣汉县",
  "value": "511722" },
{
  "label": "开江县",
  "value": "511723" },
{
  "label": "大竹县",
  "value": "511724" },
{
  "label": "渠县",
  "value": "511725" },
{
  "label": "达州经济开发区",
  "value": "511771" },
{
  "label": "万源市",
  "value": "511781" }],

[{
  "label": "雨城区",
  "value": "511802" },
{
  "label": "名山区",
  "value": "511803" },
{
  "label": "荥经县",
  "value": "511822" },
{
  "label": "汉源县",
  "value": "511823" },
{
  "label": "石棉县",
  "value": "511824" },
{
  "label": "天全县",
  "value": "511825" },
{
  "label": "芦山县",
  "value": "511826" },
{
  "label": "宝兴县",
  "value": "511827" }],

[{
  "label": "巴州区",
  "value": "511902" },
{
  "label": "恩阳区",
  "value": "511903" },
{
  "label": "通江县",
  "value": "511921" },
{
  "label": "南江县",
  "value": "511922" },
{
  "label": "平昌县",
  "value": "511923" },
{
  "label": "巴中经济开发区",
  "value": "511971" }],

[{
  "label": "雁江区",
  "value": "512002" },
{
  "label": "安岳县",
  "value": "512021" },
{
  "label": "乐至县",
  "value": "512022" }],

[{
  "label": "马尔康市",
  "value": "513201" },
{
  "label": "汶川县",
  "value": "513221" },
{
  "label": "理县",
  "value": "513222" },
{
  "label": "茂县",
  "value": "513223" },
{
  "label": "松潘县",
  "value": "513224" },
{
  "label": "九寨沟县",
  "value": "513225" },
{
  "label": "金川县",
  "value": "513226" },
{
  "label": "小金县",
  "value": "513227" },
{
  "label": "黑水县",
  "value": "513228" },
{
  "label": "壤塘县",
  "value": "513230" },
{
  "label": "阿坝县",
  "value": "513231" },
{
  "label": "若尔盖县",
  "value": "513232" },
{
  "label": "红原县",
  "value": "513233" }],

[{
  "label": "康定市",
  "value": "513301" },
{
  "label": "泸定县",
  "value": "513322" },
{
  "label": "丹巴县",
  "value": "513323" },
{
  "label": "九龙县",
  "value": "513324" },
{
  "label": "雅江县",
  "value": "513325" },
{
  "label": "道孚县",
  "value": "513326" },
{
  "label": "炉霍县",
  "value": "513327" },
{
  "label": "甘孜县",
  "value": "513328" },
{
  "label": "新龙县",
  "value": "513329" },
{
  "label": "德格县",
  "value": "513330" },
{
  "label": "白玉县",
  "value": "513331" },
{
  "label": "石渠县",
  "value": "513332" },
{
  "label": "色达县",
  "value": "513333" },
{
  "label": "理塘县",
  "value": "513334" },
{
  "label": "巴塘县",
  "value": "513335" },
{
  "label": "乡城县",
  "value": "513336" },
{
  "label": "稻城县",
  "value": "513337" },
{
  "label": "得荣县",
  "value": "513338" }],

[{
  "label": "西昌市",
  "value": "513401" },
{
  "label": "木里藏族自治县",
  "value": "513422" },
{
  "label": "盐源县",
  "value": "513423" },
{
  "label": "德昌县",
  "value": "513424" },
{
  "label": "会理县",
  "value": "513425" },
{
  "label": "会东县",
  "value": "513426" },
{
  "label": "宁南县",
  "value": "513427" },
{
  "label": "普格县",
  "value": "513428" },
{
  "label": "布拖县",
  "value": "513429" },
{
  "label": "金阳县",
  "value": "513430" },
{
  "label": "昭觉县",
  "value": "513431" },
{
  "label": "喜德县",
  "value": "513432" },
{
  "label": "冕宁县",
  "value": "513433" },
{
  "label": "越西县",
  "value": "513434" },
{
  "label": "甘洛县",
  "value": "513435" },
{
  "label": "美姑县",
  "value": "513436" },
{
  "label": "雷波县",
  "value": "513437" }]],


[
[{
  "label": "南明区",
  "value": "520102" },
{
  "label": "云岩区",
  "value": "520103" },
{
  "label": "花溪区",
  "value": "520111" },
{
  "label": "乌当区",
  "value": "520112" },
{
  "label": "白云区",
  "value": "520113" },
{
  "label": "观山湖区",
  "value": "520115" },
{
  "label": "开阳县",
  "value": "520121" },
{
  "label": "息烽县",
  "value": "520122" },
{
  "label": "修文县",
  "value": "520123" },
{
  "label": "清镇市",
  "value": "520181" }],

[{
  "label": "钟山区",
  "value": "520201" },
{
  "label": "六枝特区",
  "value": "520203" },
{
  "label": "水城县",
  "value": "520221" },
{
  "label": "盘州市",
  "value": "520281" }],

[{
  "label": "红花岗区",
  "value": "520302" },
{
  "label": "汇川区",
  "value": "520303" },
{
  "label": "播州区",
  "value": "520304" },
{
  "label": "桐梓县",
  "value": "520322" },
{
  "label": "绥阳县",
  "value": "520323" },
{
  "label": "正安县",
  "value": "520324" },
{
  "label": "道真仡佬族苗族自治县",
  "value": "520325" },
{
  "label": "务川仡佬族苗族自治县",
  "value": "520326" },
{
  "label": "凤冈县",
  "value": "520327" },
{
  "label": "湄潭县",
  "value": "520328" },
{
  "label": "余庆县",
  "value": "520329" },
{
  "label": "习水县",
  "value": "520330" },
{
  "label": "赤水市",
  "value": "520381" },
{
  "label": "仁怀市",
  "value": "520382" }],

[{
  "label": "西秀区",
  "value": "520402" },
{
  "label": "平坝区",
  "value": "520403" },
{
  "label": "普定县",
  "value": "520422" },
{
  "label": "镇宁布依族苗族自治县",
  "value": "520423" },
{
  "label": "关岭布依族苗族自治县",
  "value": "520424" },
{
  "label": "紫云苗族布依族自治县",
  "value": "520425" }],

[{
  "label": "七星关区",
  "value": "520502" },
{
  "label": "大方县",
  "value": "520521" },
{
  "label": "黔西县",
  "value": "520522" },
{
  "label": "金沙县",
  "value": "520523" },
{
  "label": "织金县",
  "value": "520524" },
{
  "label": "纳雍县",
  "value": "520525" },
{
  "label": "威宁彝族回族苗族自治县",
  "value": "520526" },
{
  "label": "赫章县",
  "value": "520527" }],

[{
  "label": "碧江区",
  "value": "520602" },
{
  "label": "万山区",
  "value": "520603" },
{
  "label": "江口县",
  "value": "520621" },
{
  "label": "玉屏侗族自治县",
  "value": "520622" },
{
  "label": "石阡县",
  "value": "520623" },
{
  "label": "思南县",
  "value": "520624" },
{
  "label": "印江土家族苗族自治县",
  "value": "520625" },
{
  "label": "德江县",
  "value": "520626" },
{
  "label": "沿河土家族自治县",
  "value": "520627" },
{
  "label": "松桃苗族自治县",
  "value": "520628" }],

[{
  "label": "兴义市",
  "value": "522301" },
{
  "label": "兴仁县",
  "value": "522322" },
{
  "label": "普安县",
  "value": "522323" },
{
  "label": "晴隆县",
  "value": "522324" },
{
  "label": "贞丰县",
  "value": "522325" },
{
  "label": "望谟县",
  "value": "522326" },
{
  "label": "册亨县",
  "value": "522327" },
{
  "label": "安龙县",
  "value": "522328" }],

[{
  "label": "凯里市",
  "value": "522601" },
{
  "label": "黄平县",
  "value": "522622" },
{
  "label": "施秉县",
  "value": "522623" },
{
  "label": "三穗县",
  "value": "522624" },
{
  "label": "镇远县",
  "value": "522625" },
{
  "label": "岑巩县",
  "value": "522626" },
{
  "label": "天柱县",
  "value": "522627" },
{
  "label": "锦屏县",
  "value": "522628" },
{
  "label": "剑河县",
  "value": "522629" },
{
  "label": "台江县",
  "value": "522630" },
{
  "label": "黎平县",
  "value": "522631" },
{
  "label": "榕江县",
  "value": "522632" },
{
  "label": "从江县",
  "value": "522633" },
{
  "label": "雷山县",
  "value": "522634" },
{
  "label": "麻江县",
  "value": "522635" },
{
  "label": "丹寨县",
  "value": "522636" }],

[{
  "label": "都匀市",
  "value": "522701" },
{
  "label": "福泉市",
  "value": "522702" },
{
  "label": "荔波县",
  "value": "522722" },
{
  "label": "贵定县",
  "value": "522723" },
{
  "label": "瓮安县",
  "value": "522725" },
{
  "label": "独山县",
  "value": "522726" },
{
  "label": "平塘县",
  "value": "522727" },
{
  "label": "罗甸县",
  "value": "522728" },
{
  "label": "长顺县",
  "value": "522729" },
{
  "label": "龙里县",
  "value": "522730" },
{
  "label": "惠水县",
  "value": "522731" },
{
  "label": "三都水族自治县",
  "value": "522732" }]],


[
[{
  "label": "五华区",
  "value": "530102" },
{
  "label": "盘龙区",
  "value": "530103" },
{
  "label": "官渡区",
  "value": "530111" },
{
  "label": "西山区",
  "value": "530112" },
{
  "label": "东川区",
  "value": "530113" },
{
  "label": "呈贡区",
  "value": "530114" },
{
  "label": "晋宁区",
  "value": "530115" },
{
  "label": "富民县",
  "value": "530124" },
{
  "label": "宜良县",
  "value": "530125" },
{
  "label": "石林彝族自治县",
  "value": "530126" },
{
  "label": "嵩明县",
  "value": "530127" },
{
  "label": "禄劝彝族苗族自治县",
  "value": "530128" },
{
  "label": "寻甸回族彝族自治县",
  "value": "530129" },
{
  "label": "安宁市",
  "value": "530181" }],

[{
  "label": "麒麟区",
  "value": "530302" },
{
  "label": "沾益区",
  "value": "530303" },
{
  "label": "马龙县",
  "value": "530321" },
{
  "label": "陆良县",
  "value": "530322" },
{
  "label": "师宗县",
  "value": "530323" },
{
  "label": "罗平县",
  "value": "530324" },
{
  "label": "富源县",
  "value": "530325" },
{
  "label": "会泽县",
  "value": "530326" },
{
  "label": "宣威市",
  "value": "530381" }],

[{
  "label": "红塔区",
  "value": "530402" },
{
  "label": "江川区",
  "value": "530403" },
{
  "label": "澄江县",
  "value": "530422" },
{
  "label": "通海县",
  "value": "530423" },
{
  "label": "华宁县",
  "value": "530424" },
{
  "label": "易门县",
  "value": "530425" },
{
  "label": "峨山彝族自治县",
  "value": "530426" },
{
  "label": "新平彝族傣族自治县",
  "value": "530427" },
{
  "label": "元江哈尼族彝族傣族自治县",
  "value": "530428" }],

[{
  "label": "隆阳区",
  "value": "530502" },
{
  "label": "施甸县",
  "value": "530521" },
{
  "label": "龙陵县",
  "value": "530523" },
{
  "label": "昌宁县",
  "value": "530524" },
{
  "label": "腾冲市",
  "value": "530581" }],

[{
  "label": "昭阳区",
  "value": "530602" },
{
  "label": "鲁甸县",
  "value": "530621" },
{
  "label": "巧家县",
  "value": "530622" },
{
  "label": "盐津县",
  "value": "530623" },
{
  "label": "大关县",
  "value": "530624" },
{
  "label": "永善县",
  "value": "530625" },
{
  "label": "绥江县",
  "value": "530626" },
{
  "label": "镇雄县",
  "value": "530627" },
{
  "label": "彝良县",
  "value": "530628" },
{
  "label": "威信县",
  "value": "530629" },
{
  "label": "水富县",
  "value": "530630" }],

[{
  "label": "古城区",
  "value": "530702" },
{
  "label": "玉龙纳西族自治县",
  "value": "530721" },
{
  "label": "永胜县",
  "value": "530722" },
{
  "label": "华坪县",
  "value": "530723" },
{
  "label": "宁蒗彝族自治县",
  "value": "530724" }],

[{
  "label": "思茅区",
  "value": "530802" },
{
  "label": "宁洱哈尼族彝族自治县",
  "value": "530821" },
{
  "label": "墨江哈尼族自治县",
  "value": "530822" },
{
  "label": "景东彝族自治县",
  "value": "530823" },
{
  "label": "景谷傣族彝族自治县",
  "value": "530824" },
{
  "label": "镇沅彝族哈尼族拉祜族自治县",
  "value": "530825" },
{
  "label": "江城哈尼族彝族自治县",
  "value": "530826" },
{
  "label": "孟连傣族拉祜族佤族自治县",
  "value": "530827" },
{
  "label": "澜沧拉祜族自治县",
  "value": "530828" },
{
  "label": "西盟佤族自治县",
  "value": "530829" }],

[{
  "label": "临翔区",
  "value": "530902" },
{
  "label": "凤庆县",
  "value": "530921" },
{
  "label": "云县",
  "value": "530922" },
{
  "label": "永德县",
  "value": "530923" },
{
  "label": "镇康县",
  "value": "530924" },
{
  "label": "双江拉祜族佤族布朗族傣族自治县",
  "value": "530925" },
{
  "label": "耿马傣族佤族自治县",
  "value": "530926" },
{
  "label": "沧源佤族自治县",
  "value": "530927" }],

[{
  "label": "楚雄市",
  "value": "532301" },
{
  "label": "双柏县",
  "value": "532322" },
{
  "label": "牟定县",
  "value": "532323" },
{
  "label": "南华县",
  "value": "532324" },
{
  "label": "姚安县",
  "value": "532325" },
{
  "label": "大姚县",
  "value": "532326" },
{
  "label": "永仁县",
  "value": "532327" },
{
  "label": "元谋县",
  "value": "532328" },
{
  "label": "武定县",
  "value": "532329" },
{
  "label": "禄丰县",
  "value": "532331" }],

[{
  "label": "个旧市",
  "value": "532501" },
{
  "label": "开远市",
  "value": "532502" },
{
  "label": "蒙自市",
  "value": "532503" },
{
  "label": "弥勒市",
  "value": "532504" },
{
  "label": "屏边苗族自治县",
  "value": "532523" },
{
  "label": "建水县",
  "value": "532524" },
{
  "label": "石屏县",
  "value": "532525" },
{
  "label": "泸西县",
  "value": "532527" },
{
  "label": "元阳县",
  "value": "532528" },
{
  "label": "红河县",
  "value": "532529" },
{
  "label": "金平苗族瑶族傣族自治县",
  "value": "532530" },
{
  "label": "绿春县",
  "value": "532531" },
{
  "label": "河口瑶族自治县",
  "value": "532532" }],

[{
  "label": "文山市",
  "value": "532601" },
{
  "label": "砚山县",
  "value": "532622" },
{
  "label": "西畴县",
  "value": "532623" },
{
  "label": "麻栗坡县",
  "value": "532624" },
{
  "label": "马关县",
  "value": "532625" },
{
  "label": "丘北县",
  "value": "532626" },
{
  "label": "广南县",
  "value": "532627" },
{
  "label": "富宁县",
  "value": "532628" }],

[{
  "label": "景洪市",
  "value": "532801" },
{
  "label": "勐海县",
  "value": "532822" },
{
  "label": "勐腊县",
  "value": "532823" }],

[{
  "label": "大理市",
  "value": "532901" },
{
  "label": "漾濞彝族自治县",
  "value": "532922" },
{
  "label": "祥云县",
  "value": "532923" },
{
  "label": "宾川县",
  "value": "532924" },
{
  "label": "弥渡县",
  "value": "532925" },
{
  "label": "南涧彝族自治县",
  "value": "532926" },
{
  "label": "巍山彝族回族自治县",
  "value": "532927" },
{
  "label": "永平县",
  "value": "532928" },
{
  "label": "云龙县",
  "value": "532929" },
{
  "label": "洱源县",
  "value": "532930" },
{
  "label": "剑川县",
  "value": "532931" },
{
  "label": "鹤庆县",
  "value": "532932" }],

[{
  "label": "瑞丽市",
  "value": "533102" },
{
  "label": "芒市",
  "value": "533103" },
{
  "label": "梁河县",
  "value": "533122" },
{
  "label": "盈江县",
  "value": "533123" },
{
  "label": "陇川县",
  "value": "533124" }],

[{
  "label": "泸水市",
  "value": "533301" },
{
  "label": "福贡县",
  "value": "533323" },
{
  "label": "贡山独龙族怒族自治县",
  "value": "533324" },
{
  "label": "兰坪白族普米族自治县",
  "value": "533325" }],

[{
  "label": "香格里拉市",
  "value": "533401" },
{
  "label": "德钦县",
  "value": "533422" },
{
  "label": "维西傈僳族自治县",
  "value": "533423" }]],


[
[{
  "label": "城关区",
  "value": "540102" },
{
  "label": "堆龙德庆区",
  "value": "540103" },
{
  "label": "林周县",
  "value": "540121" },
{
  "label": "当雄县",
  "value": "540122" },
{
  "label": "尼木县",
  "value": "540123" },
{
  "label": "曲水县",
  "value": "540124" },
{
  "label": "达孜县",
  "value": "540126" },
{
  "label": "墨竹工卡县",
  "value": "540127" },
{
  "label": "格尔木藏青工业园区",
  "value": "540171" },
{
  "label": "拉萨经济技术开发区",
  "value": "540172" },
{
  "label": "西藏文化旅游创意园区",
  "value": "540173" },
{
  "label": "达孜工业园区",
  "value": "540174" }],

[{
  "label": "桑珠孜区",
  "value": "540202" },
{
  "label": "南木林县",
  "value": "540221" },
{
  "label": "江孜县",
  "value": "540222" },
{
  "label": "定日县",
  "value": "540223" },
{
  "label": "萨迦县",
  "value": "540224" },
{
  "label": "拉孜县",
  "value": "540225" },
{
  "label": "昂仁县",
  "value": "540226" },
{
  "label": "谢通门县",
  "value": "540227" },
{
  "label": "白朗县",
  "value": "540228" },
{
  "label": "仁布县",
  "value": "540229" },
{
  "label": "康马县",
  "value": "540230" },
{
  "label": "定结县",
  "value": "540231" },
{
  "label": "仲巴县",
  "value": "540232" },
{
  "label": "亚东县",
  "value": "540233" },
{
  "label": "吉隆县",
  "value": "540234" },
{
  "label": "聂拉木县",
  "value": "540235" },
{
  "label": "萨嘎县",
  "value": "540236" },
{
  "label": "岗巴县",
  "value": "540237" }],

[{
  "label": "卡若区",
  "value": "540302" },
{
  "label": "江达县",
  "value": "540321" },
{
  "label": "贡觉县",
  "value": "540322" },
{
  "label": "类乌齐县",
  "value": "540323" },
{
  "label": "丁青县",
  "value": "540324" },
{
  "label": "察雅县",
  "value": "540325" },
{
  "label": "八宿县",
  "value": "540326" },
{
  "label": "左贡县",
  "value": "540327" },
{
  "label": "芒康县",
  "value": "540328" },
{
  "label": "洛隆县",
  "value": "540329" },
{
  "label": "边坝县",
  "value": "540330" }],

[{
  "label": "巴宜区",
  "value": "540402" },
{
  "label": "工布江达县",
  "value": "540421" },
{
  "label": "米林县",
  "value": "540422" },
{
  "label": "墨脱县",
  "value": "540423" },
{
  "label": "波密县",
  "value": "540424" },
{
  "label": "察隅县",
  "value": "540425" },
{
  "label": "朗县",
  "value": "540426" }],

[{
  "label": "乃东区",
  "value": "540502" },
{
  "label": "扎囊县",
  "value": "540521" },
{
  "label": "贡嘎县",
  "value": "540522" },
{
  "label": "桑日县",
  "value": "540523" },
{
  "label": "琼结县",
  "value": "540524" },
{
  "label": "曲松县",
  "value": "540525" },
{
  "label": "措美县",
  "value": "540526" },
{
  "label": "洛扎县",
  "value": "540527" },
{
  "label": "加查县",
  "value": "540528" },
{
  "label": "隆子县",
  "value": "540529" },
{
  "label": "错那县",
  "value": "540530" },
{
  "label": "浪卡子县",
  "value": "540531" }],

[{
  "label": "那曲县",
  "value": "542421" },
{
  "label": "嘉黎县",
  "value": "542422" },
{
  "label": "比如县",
  "value": "542423" },
{
  "label": "聂荣县",
  "value": "542424" },
{
  "label": "安多县",
  "value": "542425" },
{
  "label": "申扎县",
  "value": "542426" },
{
  "label": "索县",
  "value": "542427" },
{
  "label": "班戈县",
  "value": "542428" },
{
  "label": "巴青县",
  "value": "542429" },
{
  "label": "尼玛县",
  "value": "542430" },
{
  "label": "双湖县",
  "value": "542431" }],

[{
  "label": "普兰县",
  "value": "542521" },
{
  "label": "札达县",
  "value": "542522" },
{
  "label": "噶尔县",
  "value": "542523" },
{
  "label": "日土县",
  "value": "542524" },
{
  "label": "革吉县",
  "value": "542525" },
{
  "label": "改则县",
  "value": "542526" },
{
  "label": "措勤县",
  "value": "542527" }]],


[
[{
  "label": "新城区",
  "value": "610102" },
{
  "label": "碑林区",
  "value": "610103" },
{
  "label": "莲湖区",
  "value": "610104" },
{
  "label": "灞桥区",
  "value": "610111" },
{
  "label": "未央区",
  "value": "610112" },
{
  "label": "雁塔区",
  "value": "610113" },
{
  "label": "阎良区",
  "value": "610114" },
{
  "label": "临潼区",
  "value": "610115" },
{
  "label": "长安区",
  "value": "610116" },
{
  "label": "高陵区",
  "value": "610117" },
{
  "label": "鄠邑区",
  "value": "610118" },
{
  "label": "蓝田县",
  "value": "610122" },
{
  "label": "周至县",
  "value": "610124" }],

[{
  "label": "王益区",
  "value": "610202" },
{
  "label": "印台区",
  "value": "610203" },
{
  "label": "耀州区",
  "value": "610204" },
{
  "label": "宜君县",
  "value": "610222" }],

[{
  "label": "渭滨区",
  "value": "610302" },
{
  "label": "金台区",
  "value": "610303" },
{
  "label": "陈仓区",
  "value": "610304" },
{
  "label": "凤翔县",
  "value": "610322" },
{
  "label": "岐山县",
  "value": "610323" },
{
  "label": "扶风县",
  "value": "610324" },
{
  "label": "眉县",
  "value": "610326" },
{
  "label": "陇县",
  "value": "610327" },
{
  "label": "千阳县",
  "value": "610328" },
{
  "label": "麟游县",
  "value": "610329" },
{
  "label": "凤县",
  "value": "610330" },
{
  "label": "太白县",
  "value": "610331" }],

[{
  "label": "秦都区",
  "value": "610402" },
{
  "label": "杨陵区",
  "value": "610403" },
{
  "label": "渭城区",
  "value": "610404" },
{
  "label": "三原县",
  "value": "610422" },
{
  "label": "泾阳县",
  "value": "610423" },
{
  "label": "乾县",
  "value": "610424" },
{
  "label": "礼泉县",
  "value": "610425" },
{
  "label": "永寿县",
  "value": "610426" },
{
  "label": "彬县",
  "value": "610427" },
{
  "label": "长武县",
  "value": "610428" },
{
  "label": "旬邑县",
  "value": "610429" },
{
  "label": "淳化县",
  "value": "610430" },
{
  "label": "武功县",
  "value": "610431" },
{
  "label": "兴平市",
  "value": "610481" }],

[{
  "label": "临渭区",
  "value": "610502" },
{
  "label": "华州区",
  "value": "610503" },
{
  "label": "潼关县",
  "value": "610522" },
{
  "label": "大荔县",
  "value": "610523" },
{
  "label": "合阳县",
  "value": "610524" },
{
  "label": "澄城县",
  "value": "610525" },
{
  "label": "蒲城县",
  "value": "610526" },
{
  "label": "白水县",
  "value": "610527" },
{
  "label": "富平县",
  "value": "610528" },
{
  "label": "韩城市",
  "value": "610581" },
{
  "label": "华阴市",
  "value": "610582" }],

[{
  "label": "宝塔区",
  "value": "610602" },
{
  "label": "安塞区",
  "value": "610603" },
{
  "label": "延长县",
  "value": "610621" },
{
  "label": "延川县",
  "value": "610622" },
{
  "label": "子长县",
  "value": "610623" },
{
  "label": "志丹县",
  "value": "610625" },
{
  "label": "吴起县",
  "value": "610626" },
{
  "label": "甘泉县",
  "value": "610627" },
{
  "label": "富县",
  "value": "610628" },
{
  "label": "洛川县",
  "value": "610629" },
{
  "label": "宜川县",
  "value": "610630" },
{
  "label": "黄龙县",
  "value": "610631" },
{
  "label": "黄陵县",
  "value": "610632" }],

[{
  "label": "汉台区",
  "value": "610702" },
{
  "label": "南郑区",
  "value": "610703" },
{
  "label": "城固县",
  "value": "610722" },
{
  "label": "洋县",
  "value": "610723" },
{
  "label": "西乡县",
  "value": "610724" },
{
  "label": "勉县",
  "value": "610725" },
{
  "label": "宁强县",
  "value": "610726" },
{
  "label": "略阳县",
  "value": "610727" },
{
  "label": "镇巴县",
  "value": "610728" },
{
  "label": "留坝县",
  "value": "610729" },
{
  "label": "佛坪县",
  "value": "610730" }],

[{
  "label": "榆阳区",
  "value": "610802" },
{
  "label": "横山区",
  "value": "610803" },
{
  "label": "府谷县",
  "value": "610822" },
{
  "label": "靖边县",
  "value": "610824" },
{
  "label": "定边县",
  "value": "610825" },
{
  "label": "绥德县",
  "value": "610826" },
{
  "label": "米脂县",
  "value": "610827" },
{
  "label": "佳县",
  "value": "610828" },
{
  "label": "吴堡县",
  "value": "610829" },
{
  "label": "清涧县",
  "value": "610830" },
{
  "label": "子洲县",
  "value": "610831" },
{
  "label": "神木市",
  "value": "610881" }],

[{
  "label": "汉滨区",
  "value": "610902" },
{
  "label": "汉阴县",
  "value": "610921" },
{
  "label": "石泉县",
  "value": "610922" },
{
  "label": "宁陕县",
  "value": "610923" },
{
  "label": "紫阳县",
  "value": "610924" },
{
  "label": "岚皋县",
  "value": "610925" },
{
  "label": "平利县",
  "value": "610926" },
{
  "label": "镇坪县",
  "value": "610927" },
{
  "label": "旬阳县",
  "value": "610928" },
{
  "label": "白河县",
  "value": "610929" }],

[{
  "label": "商州区",
  "value": "611002" },
{
  "label": "洛南县",
  "value": "611021" },
{
  "label": "丹凤县",
  "value": "611022" },
{
  "label": "商南县",
  "value": "611023" },
{
  "label": "山阳县",
  "value": "611024" },
{
  "label": "镇安县",
  "value": "611025" },
{
  "label": "柞水县",
  "value": "611026" }]],


[
[{
  "label": "城关区",
  "value": "620102" },
{
  "label": "七里河区",
  "value": "620103" },
{
  "label": "西固区",
  "value": "620104" },
{
  "label": "安宁区",
  "value": "620105" },
{
  "label": "红古区",
  "value": "620111" },
{
  "label": "永登县",
  "value": "620121" },
{
  "label": "皋兰县",
  "value": "620122" },
{
  "label": "榆中县",
  "value": "620123" },
{
  "label": "兰州新区",
  "value": "620171" }],

[{
  "label": "嘉峪关市",
  "value": "620201" }],

[{
  "label": "金川区",
  "value": "620302" },
{
  "label": "永昌县",
  "value": "620321" }],

[{
  "label": "白银区",
  "value": "620402" },
{
  "label": "平川区",
  "value": "620403" },
{
  "label": "靖远县",
  "value": "620421" },
{
  "label": "会宁县",
  "value": "620422" },
{
  "label": "景泰县",
  "value": "620423" }],

[{
  "label": "秦州区",
  "value": "620502" },
{
  "label": "麦积区",
  "value": "620503" },
{
  "label": "清水县",
  "value": "620521" },
{
  "label": "秦安县",
  "value": "620522" },
{
  "label": "甘谷县",
  "value": "620523" },
{
  "label": "武山县",
  "value": "620524" },
{
  "label": "张家川回族自治县",
  "value": "620525" }],

[{
  "label": "凉州区",
  "value": "620602" },
{
  "label": "民勤县",
  "value": "620621" },
{
  "label": "古浪县",
  "value": "620622" },
{
  "label": "天祝藏族自治县",
  "value": "620623" }],

[{
  "label": "甘州区",
  "value": "620702" },
{
  "label": "肃南裕固族自治县",
  "value": "620721" },
{
  "label": "民乐县",
  "value": "620722" },
{
  "label": "临泽县",
  "value": "620723" },
{
  "label": "高台县",
  "value": "620724" },
{
  "label": "山丹县",
  "value": "620725" }],

[{
  "label": "崆峒区",
  "value": "620802" },
{
  "label": "泾川县",
  "value": "620821" },
{
  "label": "灵台县",
  "value": "620822" },
{
  "label": "崇信县",
  "value": "620823" },
{
  "label": "华亭县",
  "value": "620824" },
{
  "label": "庄浪县",
  "value": "620825" },
{
  "label": "静宁县",
  "value": "620826" },
{
  "label": "平凉工业园区",
  "value": "620871" }],

[{
  "label": "肃州区",
  "value": "620902" },
{
  "label": "金塔县",
  "value": "620921" },
{
  "label": "瓜州县",
  "value": "620922" },
{
  "label": "肃北蒙古族自治县",
  "value": "620923" },
{
  "label": "阿克塞哈萨克族自治县",
  "value": "620924" },
{
  "label": "玉门市",
  "value": "620981" },
{
  "label": "敦煌市",
  "value": "620982" }],

[{
  "label": "西峰区",
  "value": "621002" },
{
  "label": "庆城县",
  "value": "621021" },
{
  "label": "环县",
  "value": "621022" },
{
  "label": "华池县",
  "value": "621023" },
{
  "label": "合水县",
  "value": "621024" },
{
  "label": "正宁县",
  "value": "621025" },
{
  "label": "宁县",
  "value": "621026" },
{
  "label": "镇原县",
  "value": "621027" }],

[{
  "label": "安定区",
  "value": "621102" },
{
  "label": "通渭县",
  "value": "621121" },
{
  "label": "陇西县",
  "value": "621122" },
{
  "label": "渭源县",
  "value": "621123" },
{
  "label": "临洮县",
  "value": "621124" },
{
  "label": "漳县",
  "value": "621125" },
{
  "label": "岷县",
  "value": "621126" }],

[{
  "label": "武都区",
  "value": "621202" },
{
  "label": "成县",
  "value": "621221" },
{
  "label": "文县",
  "value": "621222" },
{
  "label": "宕昌县",
  "value": "621223" },
{
  "label": "康县",
  "value": "621224" },
{
  "label": "西和县",
  "value": "621225" },
{
  "label": "礼县",
  "value": "621226" },
{
  "label": "徽县",
  "value": "621227" },
{
  "label": "两当县",
  "value": "621228" }],

[{
  "label": "临夏市",
  "value": "622901" },
{
  "label": "临夏县",
  "value": "622921" },
{
  "label": "康乐县",
  "value": "622922" },
{
  "label": "永靖县",
  "value": "622923" },
{
  "label": "广河县",
  "value": "622924" },
{
  "label": "和政县",
  "value": "622925" },
{
  "label": "东乡族自治县",
  "value": "622926" },
{
  "label": "积石山保安族东乡族撒拉族自治县",
  "value": "622927" }],

[{
  "label": "合作市",
  "value": "623001" },
{
  "label": "临潭县",
  "value": "623021" },
{
  "label": "卓尼县",
  "value": "623022" },
{
  "label": "舟曲县",
  "value": "623023" },
{
  "label": "迭部县",
  "value": "623024" },
{
  "label": "玛曲县",
  "value": "623025" },
{
  "label": "碌曲县",
  "value": "623026" },
{
  "label": "夏河县",
  "value": "623027" }]],


[
[{
  "label": "城东区",
  "value": "630102" },
{
  "label": "城中区",
  "value": "630103" },
{
  "label": "城西区",
  "value": "630104" },
{
  "label": "城北区",
  "value": "630105" },
{
  "label": "大通回族土族自治县",
  "value": "630121" },
{
  "label": "湟中县",
  "value": "630122" },
{
  "label": "湟源县",
  "value": "630123" }],

[{
  "label": "乐都区",
  "value": "630202" },
{
  "label": "平安区",
  "value": "630203" },
{
  "label": "民和回族土族自治县",
  "value": "630222" },
{
  "label": "互助土族自治县",
  "value": "630223" },
{
  "label": "化隆回族自治县",
  "value": "630224" },
{
  "label": "循化撒拉族自治县",
  "value": "630225" }],

[{
  "label": "门源回族自治县",
  "value": "632221" },
{
  "label": "祁连县",
  "value": "632222" },
{
  "label": "海晏县",
  "value": "632223" },
{
  "label": "刚察县",
  "value": "632224" }],

[{
  "label": "同仁县",
  "value": "632321" },
{
  "label": "尖扎县",
  "value": "632322" },
{
  "label": "泽库县",
  "value": "632323" },
{
  "label": "河南蒙古族自治县",
  "value": "632324" }],

[{
  "label": "共和县",
  "value": "632521" },
{
  "label": "同德县",
  "value": "632522" },
{
  "label": "贵德县",
  "value": "632523" },
{
  "label": "兴海县",
  "value": "632524" },
{
  "label": "贵南县",
  "value": "632525" }],

[{
  "label": "玛沁县",
  "value": "632621" },
{
  "label": "班玛县",
  "value": "632622" },
{
  "label": "甘德县",
  "value": "632623" },
{
  "label": "达日县",
  "value": "632624" },
{
  "label": "久治县",
  "value": "632625" },
{
  "label": "玛多县",
  "value": "632626" }],

[{
  "label": "玉树市",
  "value": "632701" },
{
  "label": "杂多县",
  "value": "632722" },
{
  "label": "称多县",
  "value": "632723" },
{
  "label": "治多县",
  "value": "632724" },
{
  "label": "囊谦县",
  "value": "632725" },
{
  "label": "曲麻莱县",
  "value": "632726" }],

[{
  "label": "格尔木市",
  "value": "632801" },
{
  "label": "德令哈市",
  "value": "632802" },
{
  "label": "乌兰县",
  "value": "632821" },
{
  "label": "都兰县",
  "value": "632822" },
{
  "label": "天峻县",
  "value": "632823" },
{
  "label": "大柴旦行政委员会",
  "value": "632857" },
{
  "label": "冷湖行政委员会",
  "value": "632858" },
{
  "label": "茫崖行政委员会",
  "value": "632859" }]],


[
[{
  "label": "兴庆区",
  "value": "640104" },
{
  "label": "西夏区",
  "value": "640105" },
{
  "label": "金凤区",
  "value": "640106" },
{
  "label": "永宁县",
  "value": "640121" },
{
  "label": "贺兰县",
  "value": "640122" },
{
  "label": "灵武市",
  "value": "640181" }],

[{
  "label": "大武口区",
  "value": "640202" },
{
  "label": "惠农区",
  "value": "640205" },
{
  "label": "平罗县",
  "value": "640221" }],

[{
  "label": "利通区",
  "value": "640302" },
{
  "label": "红寺堡区",
  "value": "640303" },
{
  "label": "盐池县",
  "value": "640323" },
{
  "label": "同心县",
  "value": "640324" },
{
  "label": "青铜峡市",
  "value": "640381" }],

[{
  "label": "原州区",
  "value": "640402" },
{
  "label": "西吉县",
  "value": "640422" },
{
  "label": "隆德县",
  "value": "640423" },
{
  "label": "泾源县",
  "value": "640424" },
{
  "label": "彭阳县",
  "value": "640425" }],

[{
  "label": "沙坡头区",
  "value": "640502" },
{
  "label": "中宁县",
  "value": "640521" },
{
  "label": "海原县",
  "value": "640522" }]],


[
[{
  "label": "天山区",
  "value": "650102" },
{
  "label": "沙依巴克区",
  "value": "650103" },
{
  "label": "新市区",
  "value": "650104" },
{
  "label": "水磨沟区",
  "value": "650105" },
{
  "label": "头屯河区",
  "value": "650106" },
{
  "label": "达坂城区",
  "value": "650107" },
{
  "label": "米东区",
  "value": "650109" },
{
  "label": "乌鲁木齐县",
  "value": "650121" },
{
  "label": "乌鲁木齐经济技术开发区",
  "value": "650171" },
{
  "label": "乌鲁木齐高新技术产业开发区",
  "value": "650172" }],

[{
  "label": "独山子区",
  "value": "650202" },
{
  "label": "克拉玛依区",
  "value": "650203" },
{
  "label": "白碱滩区",
  "value": "650204" },
{
  "label": "乌尔禾区",
  "value": "650205" }],

[{
  "label": "高昌区",
  "value": "650402" },
{
  "label": "鄯善县",
  "value": "650421" },
{
  "label": "托克逊县",
  "value": "650422" }],

[{
  "label": "伊州区",
  "value": "650502" },
{
  "label": "巴里坤哈萨克自治县",
  "value": "650521" },
{
  "label": "伊吾县",
  "value": "650522" }],

[{
  "label": "昌吉市",
  "value": "652301" },
{
  "label": "阜康市",
  "value": "652302" },
{
  "label": "呼图壁县",
  "value": "652323" },
{
  "label": "玛纳斯县",
  "value": "652324" },
{
  "label": "奇台县",
  "value": "652325" },
{
  "label": "吉木萨尔县",
  "value": "652327" },
{
  "label": "木垒哈萨克自治县",
  "value": "652328" }],

[{
  "label": "博乐市",
  "value": "652701" },
{
  "label": "阿拉山口市",
  "value": "652702" },
{
  "label": "精河县",
  "value": "652722" },
{
  "label": "温泉县",
  "value": "652723" }],

[{
  "label": "库尔勒市",
  "value": "652801" },
{
  "label": "轮台县",
  "value": "652822" },
{
  "label": "尉犁县",
  "value": "652823" },
{
  "label": "若羌县",
  "value": "652824" },
{
  "label": "且末县",
  "value": "652825" },
{
  "label": "焉耆回族自治县",
  "value": "652826" },
{
  "label": "和静县",
  "value": "652827" },
{
  "label": "和硕县",
  "value": "652828" },
{
  "label": "博湖县",
  "value": "652829" },
{
  "label": "库尔勒经济技术开发区",
  "value": "652871" }],

[{
  "label": "阿克苏市",
  "value": "652901" },
{
  "label": "温宿县",
  "value": "652922" },
{
  "label": "库车县",
  "value": "652923" },
{
  "label": "沙雅县",
  "value": "652924" },
{
  "label": "新和县",
  "value": "652925" },
{
  "label": "拜城县",
  "value": "652926" },
{
  "label": "乌什县",
  "value": "652927" },
{
  "label": "阿瓦提县",
  "value": "652928" },
{
  "label": "柯坪县",
  "value": "652929" }],

[{
  "label": "阿图什市",
  "value": "653001" },
{
  "label": "阿克陶县",
  "value": "653022" },
{
  "label": "阿合奇县",
  "value": "653023" },
{
  "label": "乌恰县",
  "value": "653024" }],

[{
  "label": "喀什市",
  "value": "653101" },
{
  "label": "疏附县",
  "value": "653121" },
{
  "label": "疏勒县",
  "value": "653122" },
{
  "label": "英吉沙县",
  "value": "653123" },
{
  "label": "泽普县",
  "value": "653124" },
{
  "label": "莎车县",
  "value": "653125" },
{
  "label": "叶城县",
  "value": "653126" },
{
  "label": "麦盖提县",
  "value": "653127" },
{
  "label": "岳普湖县",
  "value": "653128" },
{
  "label": "伽师县",
  "value": "653129" },
{
  "label": "巴楚县",
  "value": "653130" },
{
  "label": "塔什库尔干塔吉克自治县",
  "value": "653131" }],

[{
  "label": "和田市",
  "value": "653201" },
{
  "label": "和田县",
  "value": "653221" },
{
  "label": "墨玉县",
  "value": "653222" },
{
  "label": "皮山县",
  "value": "653223" },
{
  "label": "洛浦县",
  "value": "653224" },
{
  "label": "策勒县",
  "value": "653225" },
{
  "label": "于田县",
  "value": "653226" },
{
  "label": "民丰县",
  "value": "653227" }],

[{
  "label": "伊宁市",
  "value": "654002" },
{
  "label": "奎屯市",
  "value": "654003" },
{
  "label": "霍尔果斯市",
  "value": "654004" },
{
  "label": "伊宁县",
  "value": "654021" },
{
  "label": "察布查尔锡伯自治县",
  "value": "654022" },
{
  "label": "霍城县",
  "value": "654023" },
{
  "label": "巩留县",
  "value": "654024" },
{
  "label": "新源县",
  "value": "654025" },
{
  "label": "昭苏县",
  "value": "654026" },
{
  "label": "特克斯县",
  "value": "654027" },
{
  "label": "尼勒克县",
  "value": "654028" }],

[{
  "label": "塔城市",
  "value": "654201" },
{
  "label": "乌苏市",
  "value": "654202" },
{
  "label": "额敏县",
  "value": "654221" },
{
  "label": "沙湾县",
  "value": "654223" },
{
  "label": "托里县",
  "value": "654224" },
{
  "label": "裕民县",
  "value": "654225" },
{
  "label": "和布克赛尔蒙古自治县",
  "value": "654226" }],

[{
  "label": "阿勒泰市",
  "value": "654301" },
{
  "label": "布尔津县",
  "value": "654321" },
{
  "label": "富蕴县",
  "value": "654322" },
{
  "label": "福海县",
  "value": "654323" },
{
  "label": "哈巴河县",
  "value": "654324" },
{
  "label": "青河县",
  "value": "654325" },
{
  "label": "吉木乃县",
  "value": "654326" }],

[{
  "label": "石河子市",
  "value": "659001" },
{
  "label": "阿拉尔市",
  "value": "659002" },
{
  "label": "图木舒克市",
  "value": "659003" },
{
  "label": "五家渠市",
  "value": "659004" },
{
  "label": "铁门关市",
  "value": "659006" }]],


[
[{
  "label": "台北",
  "value": "660101" }],

[{
  "label": "高雄",
  "value": "660201" }],

[{
  "label": "基隆",
  "value": "660301" }],

[{
  "label": "台中",
  "value": "660401" }],

[{
  "label": "台南",
  "value": "660501" }],

[{
  "label": "新竹",
  "value": "660601" }],

[{
  "label": "嘉义",
  "value": "660701" }],

[{
  "label": "宜兰",
  "value": "660801" }],

[{
  "label": "桃园",
  "value": "660901" }],

[{
  "label": "苗栗",
  "value": "661001" }],

[{
  "label": "彰化",
  "value": "661101" }],

[{
  "label": "南投",
  "value": "661201" }],

[{
  "label": "云林",
  "value": "661301" }],

[{
  "label": "屏东",
  "value": "661401" }],

[{
  "label": "台东",
  "value": "661501" }],

[{
  "label": "花莲",
  "value": "661601" }],

[{
  "label": "澎湖",
  "value": "661701" }]],


[
[{
  "label": "香港岛",
  "value": "670101" }],

[{
  "label": "九龙",
  "value": "670201" }],

[{
  "label": "新界",
  "value": "670301" }]],


[
[{
  "label": "澳门半岛",
  "value": "680101" }],

[{
  "label": "氹仔岛",
  "value": "680201" }],

[{
  "label": "路环岛",
  "value": "680301" }],

[{
  "label": "路氹城",
  "value": "680401" }]]];var _default =



areaData;exports.default = _default;

/***/ }),

/***/ 591:
/*!****************************************************************************!*\
  !*** C:/Users/luyus/Desktop/baoyun-mansion/uview-ui/libs/util/province.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var provinceData = [{
  "label": "北京市",
  "value": "11" },
{
  "label": "天津市",
  "value": "12" },
{
  "label": "河北省",
  "value": "13" },
{
  "label": "山西省",
  "value": "14" },
{
  "label": "内蒙古自治区",
  "value": "15" },
{
  "label": "辽宁省",
  "value": "21" },
{
  "label": "吉林省",
  "value": "22" },
{
  "label": "黑龙江省",
  "value": "23" },
{
  "label": "上海市",
  "value": "31" },
{
  "label": "江苏省",
  "value": "32" },
{
  "label": "浙江省",
  "value": "33" },
{
  "label": "安徽省",
  "value": "34" },
{
  "label": "福建省",
  "value": "35" },
{
  "label": "江西省",
  "value": "36" },
{
  "label": "山东省",
  "value": "37" },
{
  "label": "河南省",
  "value": "41" },
{
  "label": "湖北省",
  "value": "42" },
{
  "label": "湖南省",
  "value": "43" },
{
  "label": "广东省",
  "value": "44" },
{
  "label": "广西壮族自治区",
  "value": "45" },
{
  "label": "海南省",
  "value": "46" },
{
  "label": "重庆市",
  "value": "50" },
{
  "label": "四川省",
  "value": "51" },
{
  "label": "贵州省",
  "value": "52" },
{
  "label": "云南省",
  "value": "53" },
{
  "label": "西藏自治区",
  "value": "54" },
{
  "label": "陕西省",
  "value": "61" },
{
  "label": "甘肃省",
  "value": "62" },
{
  "label": "青海省",
  "value": "63" },
{
  "label": "宁夏回族自治区",
  "value": "64" },
{
  "label": "新疆维吾尔自治区",
  "value": "65" },
{
  "label": "台湾",
  "value": "66" },
{
  "label": "香港",
  "value": "67" },
{
  "label": "澳门",
  "value": "68" }];var _default =

provinceData;exports.default = _default;

/***/ }),

/***/ 685:
/*!***************************************************************************!*\
  !*** C:/Users/luyus/Desktop/baoyun-mansion/static/icon_home_kefu_ico.png ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8BAMAAADI0sRBAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAeUExURUdwTP///////////////////////////////////8kBMKEAAAAJdFJOUwDsicxNLKQTa/PGWuEAAAGwSURBVDjLpZXLT8JAEMZXaGmP4APSm5IY8IZBVG41xoM3fFy8kWhieiscNN5QE02PS6Hy/bd2dwt9ON2Lc2lnf+3MNzPbLmOpmR/9RqPfHTHSbh1I44cUvcTGzmnKT9vtRxHjpEhfxEsyq/kZ3z7nqemAd9bONHbcHL4GOqk3BVZZagODrH8H7GfcAJGfxZaXfd3IPxxbBUiz32BerOQIy839EOMiriFMI4V/2zTc5HvIBMokXC96RWGq1ijpGLhPjMjBKEm9oiYYJDEnaFF4C/Wk32MK17BIlLkUNhJtDihlQrG65KeVmbEvc6wrLLZNavIAKnocVAzKEFvTpZTJ9aq4zKimxtYTCkhcEevLeO4ANRKJ50JgOQ6Zo8Oc4V/Y0ef29MoDXd0L9qbrWl0MrLznM/Fll04sVGMPGbmRcSaiONgjqMWxLYMaXWqvGctXprHaj46ySU+Lg5kWD30dtSN96pYWe9rUdqjXrY1d4eSRYN1fqX8m+c0a8aZv+sx6j8ii5b7bNQ84+buw1Uni8G9SUFXhplsyQ4XHJeWY6hgblZV7IfCgvB1fxztPuYVfT7/LszYP9yEAAAAASUVORK5CYII="

/***/ }),

/***/ 686:
/*!**************************************************************************!*\
  !*** C:/Users/luyus/Desktop/baoyun-mansion/static/xianshiqiaonggoua.png ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAO0AAADIBAMAAAD2Ans5AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAYUExURUdwTP///////////////////////////x1LVb4AAAAHdFJOUwAwfFW83ZyQhHziAAAI9ElEQVR42sVcTVvbOBD2V8LVEEKugZbHV0EXfA1dtr6GQuurS6G5ltiO/v5uKSS2NRq9ks12bgTb4/l6ZzQa2fP0dJ59PfYcyX/IPwq3W0+llPXckW/y382VE+O/5C/auLGdPt9cxfZ3Hsrf5Cbw6vfNG2vGRy9sZenCdvx692fLG4PXG2Xtwncm3RiH2fZG6WAjL93d/s3WG19JuJv3WV/C3qecHauhLouICJps+8or5S0KNa27+toX19hF6ybp9eaLwUdby26AFbWfUVrbRsqlU1ZoPwPRdOdVnczbDkRIaX7evqNwTIOdxyzsPEKumUfv78cAQmNo23Uq+sn++cOX3xd8ubs/49Lolp5s7EImbv/8sf3I6l4A4Rjj4lLQ6l92LPdMZElzigtswhn/MpM0EZxx3GuLe8Wmxy7V39XLc1DghHdlUsU7+hzzTi0gcRVQ9U+lgapj1rdKSNy5hY61xUXbxAIQ98aFrZRdI4eAwCmj5SCXGP3NaLqOjZBaOLJVGHNPVRPRhgsIA3XCb2RCe30N2QEAE831NR7hWaE+xE+t2HZRfcxjx0xbUh1KS+pksYYiK5Vvw4Q/udSI0K32AQUHaa3X9TN7vh0TJ4xnpTojXJAPvjt59+HD5MP5yQPp6u3wD/Qh3Ayz2KTl6nvzkm4ZQGg60Sp6rBGX0LKK/uF7lXGhefm1Vs2C1XL9jor9ySOv6ZVO0Tn9QmH3cV91SfSye+WNBgsLjZoLpvxWUL9BB12LCFquklZzxRTB/Nq9mylLGpVais5pr1pZsFUZz2mDFaS/Cf1Sydip6DBe0xYru10u5drMjq3CeE6arKJeZqG1LtQtCLQWbgCTIFarsc6ZweX3obZUJ2Qbk2oOjSsl46roiXSWUnXyhW7NAjeT2sAaUy2AWg0XoWkVoK2grokXpKLnXYVuPMrHLfu5TU1XpKKXXfPe0PWHZctuRaelsOtFKaXmsW0biNb0mnqfuvN3NVBnVHPvrK0/n5IrZJZKVgIvqZ8XxJ9Kle/Q+J6ReLODrLLNQpC+4dCw82mfTFovkxKvFrCltpn2SKcctfAkI1BtNlx/sqakmTc9qKAyoNO2RuvF5wQmLJuBGlNqvnHjG5LJIW2E9Yww5LRvO7YZwxVh4KpxQUl5c+nItol3c+LHeMdjaSjCnLdUbgh3E7v/zwl/7wZR8HiH7sxOKehoMCMsudKtz38hDr0ze5R9ElrPEqpjFVvf3lDBJwg42GgQudKmw4WqyWL775Kw/oa02UKTcn/q+kOlGqBi688LIuaXZJ7ZaFpQa52iK1WV8db+ggg9QUtQaHxX6BQtur9V29eqCDTrCjbSNCkiuhyaEgae7vx11emyBVqM3DN0xgpd+n/qdv7Ea++RAjOlnIvoZkGk2yTKCMVNd8voo7y1HEi1mXdMw1ime8+UQvnTxt77PvmYUp9VN2S8CG2ntflGmt0un9lbS9hcXeuTIVA8BEz5GhECR0zuyizSWsRVGpkqcMbkrhTYZlTQas32xjfKL5WlDDobLj1EYE7choHNS46cXYx1BY74Hn4G1w+hobLK2u6e8WvGFHbowFCvt+15aNignsIOPTJdmTU2TnyDuDuE28DufOMZBY5N4u6sZlztpEZPaAicGzsCOVqHr4yevxO4No8fJGgg5eZIXxm3qgizFeBCroKWAkYYHIGBFCKIqggszGj/BC5rnuDuJxucARjAI3rPjNsYZ33GBwN4DxqoCfApJzCAZ1iLLoEH4TIsE6ZYnAdwNy/BxtbAy5oCC0wQAcEVPrdUgoYTEFwZcRwFwD0MsOC8FYGJdQQFiA/n6QjE+zEElCEIa1u+xgI1gIAohK6y4Rv+Ib4+pEGjViYvtP8ytrd+/WESD8KX9oJwZTVvNhhffqSicI8Q3utH/NDGmkWEHnwTw7SIcOYbsehimlJhb1o78w1NfH/+Ib5PznxZ+wa9+Lr7le+iZyyO+Ph18ash+K4c4mgIfN7j2dbuOMnnIz+3D98h+PLjm7dD5N/SkAcnL0v99f7ZC8V96g0fbrBFdteZFqK29aSRL1ZPbjNsNRTfPWzBtUJP4aB8wfVCgvZfUL7gQg9cRuF8QQWC61+cL7j+5df7/ns9bGgmHMH1fsSGOVtgkQf2QhAQxhxgRXxeKHv0c9j3Sw15MLbVH2gP03R94dofai4JHOqcJaMiU3ww/QOXenKF4kGqV4xLPZmjuLunf4hD3Y732yO9QzvYN4LzObefYprsn+th19in8ZmqdGZdTyb4hiizxRVYu1WGT0ImzGPYEyMbbiUXG/my+6GTk1d6yUzr7Q/HMVNcAcNy4N4plH9t9n9DbDoV4pvD7b+mQy/78g0lmhVakLruy3dkNdibQgZG+Cb8QTptVVGYCxMOh3bLR8CtmlYpzVc9ITUT4lZNkKnM7rdAkACcDkwgd0iM6TyzHMIcQfqJTIYLbc8+BNgs8IVh3n5qPfyZY3F3+TGG3ARCjbaBncdUW0kzBm+JpFXAG+AHi95OIbVwZdvoOS3hmxL7d9WDhsUxhJHrUQ2qp2jxAY9Q9hV47DYxvnI/rKE8wEZjU2mJ6fogsjqHEGoPIdsGkeVgftJL4ND5UE0k+4z0p85+2Ww1lz2saw086TDnj6yBNpDOujqSPXTVWnReWTmV+8m0DlZafcOq1Vxz+MiRL900fSRlv3TW6pJdOWm57ol1uKHan5Bwwtj29hh4MPUCHQjDchnqIof4QBgYStDZ1APpYhtTH8XI+CAfRFyl8Xtrxdb5iJjaGby1YXvjudMM/UyC+qGEKu7BV9l5rTTHvPxHaFcWJrVTRn3qivg81drrR8QWirIcI74TVYuefMlP9nx9t2M9eU9dceX1JU1P8vrTj/uTHw/XucWIUG9Nm6i3lp81nVnzvfKGIOsP99x6w5Dlh4o28UB87T7MVImh2Np9iGruDUchzvibNyShEtfHnvcHGNdzb2jyAeeqhmdLZFgVtmPvTciAXN+9tyJunqE6896QDjLdVG7svS0dUZnv41tz9Z4/atpmfXcvvP+JJic/rv/J5ZfrT/dnbqL+C9+55vKP4XAgAAAAAElFTkSuQmCC"

/***/ }),

/***/ 694:
/*!********************************************************************************!*\
  !*** C:/Users/luyus/Desktop/baoyun-mansion/utils/cryptojs/RdWXBizDataCrypt.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 引入CryptoJS
var Crypto = __webpack_require__(/*! ./cryptojs.js */ 695).Crypto;
function RdWXBizDataCrypt(sessionKey) {
  this.sessionKey = sessionKey;
}

RdWXBizDataCrypt.prototype.decryptData = function (encryptedData, iv) {
  // base64 decode ：使用 CryptoJS 中 Crypto.util.base64ToBytes()进行 base64解码
  var encryptedData = Crypto.util.base64ToBytes(encryptedData);
  var key = Crypto.util.base64ToBytes(this.sessionKey);
  var iv = Crypto.util.base64ToBytes(iv);
  // 对称解密使用的算法为 AES-128-CBC，数据采用PKCS#7填充
  var mode = new Crypto.mode.CBC(Crypto.pad.pkcs7);
  try {
    // 解密
    var bytes = Crypto.AES.decrypt(encryptedData, key, {
      //asBpytes: true,
      iv: iv,
      mode: mode });


    // var decryptResult = JSON.parse(bytes);
  } catch (err) {
    console.log(err);
  }
  //不需要水印验证
  //if (decryptResult.watermark.appid !== this.appId) {
  //  console.log(err)
  // }
  return bytes;
};

RdWXBizDataCrypt.prototype.encryptData = function (contentData, iv) {
  var key = Crypto.util.base64ToBytes(this.sessionKey);
  var iv = Crypto.util.base64ToBytes(iv);
  // 对称解密使用的算法为 AES-128-CBC，数据采用PKCS#7填充
  var mode = new Crypto.mode.CBC(Crypto.pad.pkcs7);
  try {
    // 解密
    var bytes = Crypto.AES.encrypt(contentData, key, {
      //asBpytes: true,
      iv: iv,
      mode: mode });

    return bytes;
  } catch (err) {
    console.log(err);
  }
  return null;
};

module.exports = RdWXBizDataCrypt;

/***/ }),

/***/ 695:
/*!************************************************************************!*\
  !*** C:/Users/luyus/Desktop/baoyun-mansion/utils/cryptojs/cryptojs.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Crypto = exports.Crypto = __webpack_require__(/*! ./lib/Crypto */ 696).Crypto;

['CryptoMath',
'BlockModes',
'DES',
'AES',
'HMAC',
'MARC4',
'MD5',
'PBKDF2',
'PBKDF2Async',
'Rabbit',
'SHA1',
'SHA256'].
forEach(function (path) {
  __webpack_require__(697)("./" + path);
});

/***/ }),

/***/ 696:
/*!**************************************************************************!*\
  !*** C:/Users/luyus/Desktop/baoyun-mansion/utils/cryptojs/lib/Crypto.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

if (typeof Crypto == "undefined" || !Crypto.util)
{
  (function () {

    var base64map = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";

    // Global Crypto object
    // with browser window or with node module
    var Crypto = typeof window === 'undefined' ? exports.Crypto = {} : window.Crypto = {};

    // Crypto utilities
    var util = Crypto.util = {

      // Bit-wise rotate left
      rotl: function rotl(n, b) {
        return n << b | n >>> 32 - b;
      },

      // Bit-wise rotate right
      rotr: function rotr(n, b) {
        return n << 32 - b | n >>> b;
      },

      // Swap big-endian to little-endian and vice versa
      endian: function endian(n) {

        // If number given, swap endian
        if (n.constructor == Number) {
          return util.rotl(n, 8) & 0x00FF00FF |
          util.rotl(n, 24) & 0xFF00FF00;
        }

        // Else, assume array and swap all items
        for (var i = 0; i < n.length; i++) {
          n[i] = util.endian(n[i]);}
        return n;

      },

      // Generate an array of any length of random bytes
      randomBytes: function randomBytes(n) {
        for (var bytes = []; n > 0; n--) {
          bytes.push(Math.floor(Math.random() * 256));}
        return bytes;
      },

      // Convert a byte array to big-endian 32-bit words
      bytesToWords: function bytesToWords(bytes) {
        for (var words = [], i = 0, b = 0; i < bytes.length; i++, b += 8) {
          words[b >>> 5] |= (bytes[i] & 0xFF) << 24 - b % 32;}
        return words;
      },

      // Convert big-endian 32-bit words to a byte array
      wordsToBytes: function wordsToBytes(words) {
        for (var bytes = [], b = 0; b < words.length * 32; b += 8) {
          bytes.push(words[b >>> 5] >>> 24 - b % 32 & 0xFF);}
        return bytes;
      },

      // Convert a byte array to a hex string
      bytesToHex: function bytesToHex(bytes) {
        for (var hex = [], i = 0; i < bytes.length; i++) {
          hex.push((bytes[i] >>> 4).toString(16));
          hex.push((bytes[i] & 0xF).toString(16));
        }
        return hex.join("");
      },

      // Convert a hex string to a byte array
      hexToBytes: function hexToBytes(hex) {
        for (var bytes = [], c = 0; c < hex.length; c += 2) {
          bytes.push(parseInt(hex.substr(c, 2), 16));}
        return bytes;
      },

      // Convert a byte array to a base-64 string
      bytesToBase64: function bytesToBase64(bytes) {

        // Use browser-native function if it exists
        if (typeof btoa == "function") return btoa(Binary.bytesToString(bytes));

        for (var base64 = [], i = 0; i < bytes.length; i += 3) {
          var triplet = bytes[i] << 16 | bytes[i + 1] << 8 | bytes[i + 2];
          for (var j = 0; j < 4; j++) {
            if (i * 8 + j * 6 <= bytes.length * 8)
            base64.push(base64map.charAt(triplet >>> 6 * (3 - j) & 0x3F));else
            base64.push("=");
          }
        }

        return base64.join("");

      },

      // Convert a base-64 string to a byte array
      base64ToBytes: function base64ToBytes(base64) {

        // Use browser-native function if it exists
        if (typeof atob == "function") return Binary.stringToBytes(atob(base64));

        // Remove non-base-64 characters
        base64 = base64.replace(/[^A-Z0-9+\/]/ig, "");

        for (var bytes = [], i = 0, imod4 = 0; i < base64.length; imod4 = ++i % 4) {
          if (imod4 == 0) continue;
          bytes.push((base64map.indexOf(base64.charAt(i - 1)) & Math.pow(2, -2 * imod4 + 8) - 1) << imod4 * 2 |
          base64map.indexOf(base64.charAt(i)) >>> 6 - imod4 * 2);
        }

        return bytes;

      } };



    // Crypto character encodings
    var charenc = Crypto.charenc = {};

    // UTF-8 encoding
    var UTF8 = charenc.UTF8 = {

      // Convert a string to a byte array
      stringToBytes: function stringToBytes(str) {
        return Binary.stringToBytes(unescape(encodeURIComponent(str)));
      },

      // Convert a byte array to a string
      bytesToString: function bytesToString(bytes) {
        return decodeURIComponent(escape(Binary.bytesToString(bytes)));
      } };



    // Binary encoding
    var Binary = charenc.Binary = {

      // Convert a string to a byte array
      stringToBytes: function stringToBytes(str) {
        for (var bytes = [], i = 0; i < str.length; i++) {
          bytes.push(str.charCodeAt(i) & 0xFF);}
        return bytes;
      },

      // Convert a byte array to a string
      bytesToString: function bytesToString(bytes) {
        for (var str = [], i = 0; i < bytes.length; i++) {
          str.push(String.fromCharCode(bytes[i]));}
        return str.join("");
      } };



  })();
}

/***/ }),

/***/ 697:
/*!******************************************************************************!*\
  !*** C:/Users/luyus/Desktop/baoyun-mansion/utils/cryptojs/lib sync ^\.\/.*$ ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./AES": 698,
	"./AES.js": 698,
	"./BlockModes": 699,
	"./BlockModes.js": 699,
	"./Crypto": 696,
	"./Crypto.js": 696,
	"./CryptoMath": 700,
	"./CryptoMath.js": 700,
	"./DES": 701,
	"./DES.js": 701,
	"./HMAC": 702,
	"./HMAC.js": 702,
	"./MARC4": 703,
	"./MARC4.js": 703,
	"./MD5": 704,
	"./MD5.js": 704,
	"./PBKDF2": 705,
	"./PBKDF2.js": 705,
	"./PBKDF2Async": 706,
	"./PBKDF2Async.js": 706,
	"./Rabbit": 709,
	"./Rabbit.js": 709,
	"./SHA1": 710,
	"./SHA1.js": 710,
	"./SHA256": 711,
	"./SHA256.js": 711
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 697;

/***/ }),

/***/ 698:
/*!***********************************************************************!*\
  !*** C:/Users/luyus/Desktop/baoyun-mansion/utils/cryptojs/lib/AES.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function () {

  var C = typeof window === 'undefined' ? __webpack_require__(/*! ./Crypto */ 696).Crypto : window.Crypto;

  // Shortcuts
  var util = C.util,
  charenc = C.charenc,
  UTF8 = charenc.UTF8;

  // Precomputed SBOX
  var SBOX = [0x63, 0x7c, 0x77, 0x7b, 0xf2, 0x6b, 0x6f, 0xc5,
  0x30, 0x01, 0x67, 0x2b, 0xfe, 0xd7, 0xab, 0x76,
  0xca, 0x82, 0xc9, 0x7d, 0xfa, 0x59, 0x47, 0xf0,
  0xad, 0xd4, 0xa2, 0xaf, 0x9c, 0xa4, 0x72, 0xc0,
  0xb7, 0xfd, 0x93, 0x26, 0x36, 0x3f, 0xf7, 0xcc,
  0x34, 0xa5, 0xe5, 0xf1, 0x71, 0xd8, 0x31, 0x15,
  0x04, 0xc7, 0x23, 0xc3, 0x18, 0x96, 0x05, 0x9a,
  0x07, 0x12, 0x80, 0xe2, 0xeb, 0x27, 0xb2, 0x75,
  0x09, 0x83, 0x2c, 0x1a, 0x1b, 0x6e, 0x5a, 0xa0,
  0x52, 0x3b, 0xd6, 0xb3, 0x29, 0xe3, 0x2f, 0x84,
  0x53, 0xd1, 0x00, 0xed, 0x20, 0xfc, 0xb1, 0x5b,
  0x6a, 0xcb, 0xbe, 0x39, 0x4a, 0x4c, 0x58, 0xcf,
  0xd0, 0xef, 0xaa, 0xfb, 0x43, 0x4d, 0x33, 0x85,
  0x45, 0xf9, 0x02, 0x7f, 0x50, 0x3c, 0x9f, 0xa8,
  0x51, 0xa3, 0x40, 0x8f, 0x92, 0x9d, 0x38, 0xf5,
  0xbc, 0xb6, 0xda, 0x21, 0x10, 0xff, 0xf3, 0xd2,
  0xcd, 0x0c, 0x13, 0xec, 0x5f, 0x97, 0x44, 0x17,
  0xc4, 0xa7, 0x7e, 0x3d, 0x64, 0x5d, 0x19, 0x73,
  0x60, 0x81, 0x4f, 0xdc, 0x22, 0x2a, 0x90, 0x88,
  0x46, 0xee, 0xb8, 0x14, 0xde, 0x5e, 0x0b, 0xdb,
  0xe0, 0x32, 0x3a, 0x0a, 0x49, 0x06, 0x24, 0x5c,
  0xc2, 0xd3, 0xac, 0x62, 0x91, 0x95, 0xe4, 0x79,
  0xe7, 0xc8, 0x37, 0x6d, 0x8d, 0xd5, 0x4e, 0xa9,
  0x6c, 0x56, 0xf4, 0xea, 0x65, 0x7a, 0xae, 0x08,
  0xba, 0x78, 0x25, 0x2e, 0x1c, 0xa6, 0xb4, 0xc6,
  0xe8, 0xdd, 0x74, 0x1f, 0x4b, 0xbd, 0x8b, 0x8a,
  0x70, 0x3e, 0xb5, 0x66, 0x48, 0x03, 0xf6, 0x0e,
  0x61, 0x35, 0x57, 0xb9, 0x86, 0xc1, 0x1d, 0x9e,
  0xe1, 0xf8, 0x98, 0x11, 0x69, 0xd9, 0x8e, 0x94,
  0x9b, 0x1e, 0x87, 0xe9, 0xce, 0x55, 0x28, 0xdf,
  0x8c, 0xa1, 0x89, 0x0d, 0xbf, 0xe6, 0x42, 0x68,
  0x41, 0x99, 0x2d, 0x0f, 0xb0, 0x54, 0xbb, 0x16];

  // Compute inverse SBOX lookup table
  for (var INVSBOX = [], i = 0; i < 256; i++) {INVSBOX[SBOX[i]] = i;}

  // Compute mulitplication in GF(2^8) lookup tables
  var MULT2 = [],
  MULT3 = [],
  MULT9 = [],
  MULTB = [],
  MULTD = [],
  MULTE = [];

  function xtime(a, b) {
    for (var result = 0, i = 0; i < 8; i++) {
      if (b & 1) result ^= a;
      var hiBitSet = a & 0x80;
      a = a << 1 & 0xFF;
      if (hiBitSet) a ^= 0x1b;
      b >>>= 1;
    }
    return result;
  }

  for (var i = 0; i < 256; i++) {
    MULT2[i] = xtime(i, 2);
    MULT3[i] = xtime(i, 3);
    MULT9[i] = xtime(i, 9);
    MULTB[i] = xtime(i, 0xB);
    MULTD[i] = xtime(i, 0xD);
    MULTE[i] = xtime(i, 0xE);
  }

  // Precomputed RCon lookup
  var RCON = [0x00, 0x01, 0x02, 0x04, 0x08, 0x10, 0x20, 0x40, 0x80, 0x1b, 0x36];

  // Inner state
  var state = [[], [], [], []],
  keylength,
  nrounds,
  keyschedule;

  var AES = C.AES = {

    /**
                       * Public API
                       */

    encrypt: function encrypt(message, password, options) {

      options = options || {};

      // Determine mode
      var mode = options.mode || new C.mode.OFB();

      // Allow mode to override options
      if (mode.fixOptions) mode.fixOptions(options);

      var

      // Convert to bytes if message is a string
      m =
      message.constructor == String ?
      UTF8.stringToBytes(message) :
      message,


      // Generate random IV
      iv = options.iv || util.randomBytes(AES._blocksize * 4),

      // Generate key
      k =
      password.constructor == String ?
      // Derive key from passphrase
      C.PBKDF2(password, iv, 32, { asBytes: true }) :
      // else, assume byte array representing cryptographic key
      password;


      // Encrypt
      AES._init(k);
      mode.encrypt(AES, m, iv);

      // Return ciphertext
      m = options.iv ? m : iv.concat(m);
      return options && options.asBytes ? m : util.bytesToBase64(m);

    },

    decrypt: function decrypt(ciphertext, password, options) {

      options = options || {};

      // Determine mode
      var mode = options.mode || new C.mode.OFB();

      // Allow mode to override options
      if (mode.fixOptions) mode.fixOptions(options);

      var

      // Convert to bytes if ciphertext is a string
      c =
      ciphertext.constructor == String ?
      util.base64ToBytes(ciphertext) :
      ciphertext,


      // Separate IV and message
      iv = options.iv || c.splice(0, AES._blocksize * 4),

      // Generate key
      k =
      password.constructor == String ?
      // Derive key from passphrase
      C.PBKDF2(password, iv, 32, { asBytes: true }) :
      // else, assume byte array representing cryptographic key
      password;


      // Decrypt
      AES._init(k);
      mode.decrypt(AES, c, iv);

      // Return plaintext
      return options && options.asBytes ? c : UTF8.bytesToString(c);

    },


    /**
        * Package private methods and properties
        */

    _blocksize: 4,

    _encryptblock: function _encryptblock(m, offset) {

      // Set input
      for (var row = 0; row < AES._blocksize; row++) {
        for (var col = 0; col < 4; col++) {
          state[row][col] = m[offset + col * 4 + row];}
      }

      // Add round key
      for (var row = 0; row < 4; row++) {
        for (var col = 0; col < 4; col++) {
          state[row][col] ^= keyschedule[col][row];}
      }

      for (var round = 1; round < nrounds; round++) {

        // Sub bytes
        for (var row = 0; row < 4; row++) {
          for (var col = 0; col < 4; col++) {
            state[row][col] = SBOX[state[row][col]];}
        }

        // Shift rows
        state[1].push(state[1].shift());
        state[2].push(state[2].shift());
        state[2].push(state[2].shift());
        state[3].unshift(state[3].pop());

        // Mix columns
        for (var col = 0; col < 4; col++) {

          var s0 = state[0][col],
          s1 = state[1][col],
          s2 = state[2][col],
          s3 = state[3][col];

          state[0][col] = MULT2[s0] ^ MULT3[s1] ^ s2 ^ s3;
          state[1][col] = s0 ^ MULT2[s1] ^ MULT3[s2] ^ s3;
          state[2][col] = s0 ^ s1 ^ MULT2[s2] ^ MULT3[s3];
          state[3][col] = MULT3[s0] ^ s1 ^ s2 ^ MULT2[s3];

        }

        // Add round key
        for (var row = 0; row < 4; row++) {
          for (var col = 0; col < 4; col++) {
            state[row][col] ^= keyschedule[round * 4 + col][row];}
        }

      }

      // Sub bytes
      for (var row = 0; row < 4; row++) {
        for (var col = 0; col < 4; col++) {
          state[row][col] = SBOX[state[row][col]];}
      }

      // Shift rows
      state[1].push(state[1].shift());
      state[2].push(state[2].shift());
      state[2].push(state[2].shift());
      state[3].unshift(state[3].pop());

      // Add round key
      for (var row = 0; row < 4; row++) {
        for (var col = 0; col < 4; col++) {
          state[row][col] ^= keyschedule[nrounds * 4 + col][row];}
      }

      // Set output
      for (var row = 0; row < AES._blocksize; row++) {
        for (var col = 0; col < 4; col++) {
          m[offset + col * 4 + row] = state[row][col];}
      }

    },

    _decryptblock: function _decryptblock(c, offset) {

      // Set input
      for (var row = 0; row < AES._blocksize; row++) {
        for (var col = 0; col < 4; col++) {
          state[row][col] = c[offset + col * 4 + row];}
      }

      // Add round key
      for (var row = 0; row < 4; row++) {
        for (var col = 0; col < 4; col++) {
          state[row][col] ^= keyschedule[nrounds * 4 + col][row];}
      }

      for (var round = 1; round < nrounds; round++) {

        // Inv shift rows
        state[1].unshift(state[1].pop());
        state[2].push(state[2].shift());
        state[2].push(state[2].shift());
        state[3].push(state[3].shift());

        // Inv sub bytes
        for (var row = 0; row < 4; row++) {
          for (var col = 0; col < 4; col++) {
            state[row][col] = INVSBOX[state[row][col]];}
        }

        // Add round key
        for (var row = 0; row < 4; row++) {
          for (var col = 0; col < 4; col++) {
            state[row][col] ^= keyschedule[(nrounds - round) * 4 + col][row];}
        }

        // Inv mix columns
        for (var col = 0; col < 4; col++) {

          var s0 = state[0][col],
          s1 = state[1][col],
          s2 = state[2][col],
          s3 = state[3][col];

          state[0][col] = MULTE[s0] ^ MULTB[s1] ^ MULTD[s2] ^ MULT9[s3];
          state[1][col] = MULT9[s0] ^ MULTE[s1] ^ MULTB[s2] ^ MULTD[s3];
          state[2][col] = MULTD[s0] ^ MULT9[s1] ^ MULTE[s2] ^ MULTB[s3];
          state[3][col] = MULTB[s0] ^ MULTD[s1] ^ MULT9[s2] ^ MULTE[s3];

        }

      }

      // Inv shift rows
      state[1].unshift(state[1].pop());
      state[2].push(state[2].shift());
      state[2].push(state[2].shift());
      state[3].push(state[3].shift());

      // Inv sub bytes
      for (var row = 0; row < 4; row++) {
        for (var col = 0; col < 4; col++) {
          state[row][col] = INVSBOX[state[row][col]];}
      }

      // Add round key
      for (var row = 0; row < 4; row++) {
        for (var col = 0; col < 4; col++) {
          state[row][col] ^= keyschedule[col][row];}
      }

      // Set output
      for (var row = 0; row < AES._blocksize; row++) {
        for (var col = 0; col < 4; col++) {
          c[offset + col * 4 + row] = state[row][col];}
      }

    },


    /**
        * Private methods
        */

    _init: function _init(k) {
      keylength = k.length / 4;
      nrounds = keylength + 6;
      AES._keyexpansion(k);
    },

    // Generate a key schedule
    _keyexpansion: function _keyexpansion(k) {

      keyschedule = [];

      for (var row = 0; row < keylength; row++) {
        keyschedule[row] = [
        k[row * 4],
        k[row * 4 + 1],
        k[row * 4 + 2],
        k[row * 4 + 3]];

      }

      for (var row = keylength; row < AES._blocksize * (nrounds + 1); row++) {

        var temp = [
        keyschedule[row - 1][0],
        keyschedule[row - 1][1],
        keyschedule[row - 1][2],
        keyschedule[row - 1][3]];


        if (row % keylength == 0) {

          // Rot word
          temp.push(temp.shift());

          // Sub word
          temp[0] = SBOX[temp[0]];
          temp[1] = SBOX[temp[1]];
          temp[2] = SBOX[temp[2]];
          temp[3] = SBOX[temp[3]];

          temp[0] ^= RCON[row / keylength];

        } else if (keylength > 6 && row % keylength == 4) {

          // Sub word
          temp[0] = SBOX[temp[0]];
          temp[1] = SBOX[temp[1]];
          temp[2] = SBOX[temp[2]];
          temp[3] = SBOX[temp[3]];

        }

        keyschedule[row] = [
        keyschedule[row - keylength][0] ^ temp[0],
        keyschedule[row - keylength][1] ^ temp[1],
        keyschedule[row - keylength][2] ^ temp[2],
        keyschedule[row - keylength][3] ^ temp[3]];


      }

    } };



})();

/***/ }),

/***/ 699:
/*!******************************************************************************!*\
  !*** C:/Users/luyus/Desktop/baoyun-mansion/utils/cryptojs/lib/BlockModes.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * Crypto-JS contribution from Simon Greatrix
 */

(function () {

  var C = typeof window === 'undefined' ? __webpack_require__(/*! ./Crypto */ 696).Crypto : window.Crypto;

  // Create pad namespace
  var C_pad = C.pad = {};

  // Calculate the number of padding bytes required.
  function _requiredPadding(cipher, message) {
    var blockSizeInBytes = cipher._blocksize * 4;
    var reqd = blockSizeInBytes - message.length % blockSizeInBytes;
    return reqd;
  };

  // Remove padding when the final byte gives the number of padding bytes.
  var _unpadLength = function _unpadLength(message) {
    var pad = message.pop();
    for (var i = 1; i < pad; i++) {
      message.pop();
    }
  };

  // No-operation padding, used for stream ciphers
  C_pad.NoPadding = {
    pad: function pad(cipher, message) {},
    unpad: function unpad(message) {} };


  // Zero Padding.
  //
  // If the message is not an exact number of blocks, the final block is
  // completed with 0x00 bytes. There is no unpadding.
  C_pad.ZeroPadding = {
    pad: function pad(cipher, message) {
      var blockSizeInBytes = cipher._blocksize * 4;
      var reqd = message.length % blockSizeInBytes;
      if (reqd != 0) {
        for (reqd = blockSizeInBytes - reqd; reqd > 0; reqd--) {
          message.push(0x00);
        }
      }
    },

    unpad: function unpad(message) {} };


  // ISO/IEC 7816-4 padding.
  //
  // Pads the plain text with an 0x80 byte followed by as many 0x00
  // bytes are required to complete the block.
  C_pad.iso7816 = {
    pad: function pad(cipher, message) {
      var reqd = _requiredPadding(cipher, message);
      message.push(0x80);
      for (; reqd > 1; reqd--) {
        message.push(0x00);
      }
    },

    unpad: function unpad(message) {
      while (message.pop() != 0x80) {}
    } };


  // ANSI X.923 padding
  //
  // The final block is padded with zeros except for the last byte of the
  // last block which contains the number of padding bytes.
  C_pad.ansix923 = {
    pad: function pad(cipher, message) {
      var reqd = _requiredPadding(cipher, message);
      for (var i = 1; i < reqd; i++) {
        message.push(0x00);
      }
      message.push(reqd);
    },

    unpad: _unpadLength };


  // ISO 10126
  //
  // The final block is padded with random bytes except for the last
  // byte of the last block which contains the number of padding bytes.
  C_pad.iso10126 = {
    pad: function pad(cipher, message) {
      var reqd = _requiredPadding(cipher, message);
      for (var i = 1; i < reqd; i++) {
        message.push(Math.floor(Math.random() * 256));
      }
      message.push(reqd);
    },

    unpad: _unpadLength };


  // PKCS7 padding
  //
  // PKCS7 is described in RFC 5652. Padding is in whole bytes. The
  // value of each added byte is the number of bytes that are added,
  // i.e. N bytes, each of value N are added.
  C_pad.pkcs7 = {
    pad: function pad(cipher, message) {
      var reqd = _requiredPadding(cipher, message);
      for (var i = 0; i < reqd; i++) {
        message.push(reqd);
      }
    },

    unpad: _unpadLength };


  // Create mode namespace
  var C_mode = C.mode = {};

  /**
                             * Mode base "class".
                             */
  var Mode = C_mode.Mode = function (padding) {
    if (padding) {
      this._padding = padding;
    }
  };

  Mode.prototype = {
    encrypt: function encrypt(cipher, m, iv) {
      this._padding.pad(cipher, m);
      this._doEncrypt(cipher, m, iv);
    },

    decrypt: function decrypt(cipher, m, iv) {
      this._doDecrypt(cipher, m, iv);
      this._padding.unpad(m);
    },

    // Default padding
    _padding: C_pad.iso7816 };



  /**
                                * Electronic Code Book mode.
                                * 
                                * ECB applies the cipher directly against each block of the input.
                                * 
                                * ECB does not require an initialization vector.
                                */
  var ECB = C_mode.ECB = function () {
    // Call parent constructor
    Mode.apply(this, arguments);
  };

  // Inherit from Mode
  var ECB_prototype = ECB.prototype = new Mode();

  // Concrete steps for Mode template
  ECB_prototype._doEncrypt = function (cipher, m, iv) {
    var blockSizeInBytes = cipher._blocksize * 4;
    // Encrypt each block
    for (var offset = 0; offset < m.length; offset += blockSizeInBytes) {
      cipher._encryptblock(m, offset);
    }
  };
  ECB_prototype._doDecrypt = function (cipher, c, iv) {
    var blockSizeInBytes = cipher._blocksize * 4;
    // Decrypt each block
    for (var offset = 0; offset < c.length; offset += blockSizeInBytes) {
      cipher._decryptblock(c, offset);
    }
  };

  // ECB never uses an IV
  ECB_prototype.fixOptions = function (options) {
    options.iv = [];
  };


  /**
      * Cipher block chaining
      * 
      * The first block is XORed with the IV. Subsequent blocks are XOR with the
      * previous cipher output.
      */
  var CBC = C_mode.CBC = function () {
    // Call parent constructor
    Mode.apply(this, arguments);
  };

  // Inherit from Mode
  var CBC_prototype = CBC.prototype = new Mode();

  // Concrete steps for Mode template
  CBC_prototype._doEncrypt = function (cipher, m, iv) {
    var blockSizeInBytes = cipher._blocksize * 4;

    // Encrypt each block
    for (var offset = 0; offset < m.length; offset += blockSizeInBytes) {
      if (offset == 0) {
        // XOR first block using IV
        for (var i = 0; i < blockSizeInBytes; i++) {
          m[i] ^= iv[i];}
      } else {
        // XOR this block using previous crypted block
        for (var i = 0; i < blockSizeInBytes; i++) {
          m[offset + i] ^= m[offset + i - blockSizeInBytes];}
      }
      // Encrypt block
      cipher._encryptblock(m, offset);
    }
  };
  CBC_prototype._doDecrypt = function (cipher, c, iv) {
    var blockSizeInBytes = cipher._blocksize * 4;

    // At the start, the previously crypted block is the IV
    var prevCryptedBlock = iv;

    // Decrypt each block
    for (var offset = 0; offset < c.length; offset += blockSizeInBytes) {
      // Save this crypted block
      var thisCryptedBlock = c.slice(offset, offset + blockSizeInBytes);
      // Decrypt block
      cipher._decryptblock(c, offset);
      // XOR decrypted block using previous crypted block
      for (var i = 0; i < blockSizeInBytes; i++) {
        c[offset + i] ^= prevCryptedBlock[i];
      }
      prevCryptedBlock = thisCryptedBlock;
    }
  };


  /**
      * Cipher feed back
      * 
      * The cipher output is XORed with the plain text to produce the cipher output,
      * which is then fed back into the cipher to produce a bit pattern to XOR the
      * next block with.
      * 
      * This is a stream cipher mode and does not require padding.
      */
  var CFB = C_mode.CFB = function () {
    // Call parent constructor
    Mode.apply(this, arguments);
  };

  // Inherit from Mode
  var CFB_prototype = CFB.prototype = new Mode();

  // Override padding
  CFB_prototype._padding = C_pad.NoPadding;

  // Concrete steps for Mode template
  CFB_prototype._doEncrypt = function (cipher, m, iv) {
    var blockSizeInBytes = cipher._blocksize * 4,
    keystream = iv.slice(0);

    // Encrypt each byte
    for (var i = 0; i < m.length; i++) {

      var j = i % blockSizeInBytes;
      if (j == 0) cipher._encryptblock(keystream, 0);

      m[i] ^= keystream[j];
      keystream[j] = m[i];
    }
  };
  CFB_prototype._doDecrypt = function (cipher, c, iv) {
    var blockSizeInBytes = cipher._blocksize * 4,
    keystream = iv.slice(0);

    // Encrypt each byte
    for (var i = 0; i < c.length; i++) {

      var j = i % blockSizeInBytes;
      if (j == 0) cipher._encryptblock(keystream, 0);

      var b = c[i];
      c[i] ^= keystream[j];
      keystream[j] = b;
    }
  };


  /**
      * Output feed back
      * 
      * The cipher repeatedly encrypts its own output. The output is XORed with the
      * plain text to produce the cipher text.
      * 
      * This is a stream cipher mode and does not require padding.
      */
  var OFB = C_mode.OFB = function () {
    // Call parent constructor
    Mode.apply(this, arguments);
  };

  // Inherit from Mode
  var OFB_prototype = OFB.prototype = new Mode();

  // Override padding
  OFB_prototype._padding = C_pad.NoPadding;

  // Concrete steps for Mode template
  OFB_prototype._doEncrypt = function (cipher, m, iv) {

    var blockSizeInBytes = cipher._blocksize * 4,
    keystream = iv.slice(0);

    // Encrypt each byte
    for (var i = 0; i < m.length; i++) {

      // Generate keystream
      if (i % blockSizeInBytes == 0)
      cipher._encryptblock(keystream, 0);

      // Encrypt byte
      m[i] ^= keystream[i % blockSizeInBytes];

    }
  };
  OFB_prototype._doDecrypt = OFB_prototype._doEncrypt;

  /**
                                                        * Counter
                                                        * @author Gergely Risko
                                                        *
                                                        * After every block the last 4 bytes of the IV is increased by one
                                                        * with carry and that IV is used for the next block.
                                                        *
                                                        * This is a stream cipher mode and does not require padding.
                                                        */
  var CTR = C_mode.CTR = function () {
    // Call parent constructor
    Mode.apply(this, arguments);
  };

  // Inherit from Mode
  var CTR_prototype = CTR.prototype = new Mode();

  // Override padding
  CTR_prototype._padding = C_pad.NoPadding;

  CTR_prototype._doEncrypt = function (cipher, m, iv) {
    var blockSizeInBytes = cipher._blocksize * 4;
    var counter = iv.slice(0);

    for (var i = 0; i < m.length;) {
      // do not lose iv
      var keystream = counter.slice(0);

      // Generate keystream for next block
      cipher._encryptblock(keystream, 0);

      // XOR keystream with block
      for (var j = 0; i < m.length && j < blockSizeInBytes; j++, i++) {
        m[i] ^= keystream[j];
      }

      // Increase counter
      if (++counter[blockSizeInBytes - 1] == 256) {
        counter[blockSizeInBytes - 1] = 0;
        if (++counter[blockSizeInBytes - 2] == 256) {
          counter[blockSizeInBytes - 2] = 0;
          if (++counter[blockSizeInBytes - 3] == 256) {
            counter[blockSizeInBytes - 3] = 0;
            ++counter[blockSizeInBytes - 4];
          }
        }
      }
    }
  };
  CTR_prototype._doDecrypt = CTR_prototype._doEncrypt;

})();

/***/ }),

/***/ 700:
/*!******************************************************************************!*\
  !*** C:/Users/luyus/Desktop/baoyun-mansion/utils/cryptojs/lib/CryptoMath.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function () {

  var C = typeof window === 'undefined' ? __webpack_require__(/*! ./Crypto */ 696).Crypto : window.Crypto;

  // Shortcut
  var util = C.util;

  // Convert n to unsigned 32-bit integer
  util.u32 = function (n) {
    return n >>> 0;
  };

  // Unsigned 32-bit addition
  util.add = function () {
    var result = this.u32(arguments[0]);
    for (var i = 1; i < arguments.length; i++) {
      result = this.u32(result + this.u32(arguments[i]));}
    return result;
  };

  // Unsigned 32-bit multiplication
  util.mult = function (m, n) {
    return this.add((n & 0xFFFF0000) * m,
    (n & 0x0000FFFF) * m);
  };

  // Unsigned 32-bit greater than (>) comparison
  util.gt = function (m, n) {
    return this.u32(m) > this.u32(n);
  };

  // Unsigned 32-bit less than (<) comparison
  util.lt = function (m, n) {
    return this.u32(m) < this.u32(n);
  };

})();

/***/ }),

/***/ 701:
/*!***********************************************************************!*\
  !*** C:/Users/luyus/Desktop/baoyun-mansion/utils/cryptojs/lib/DES.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Definition of Data Encryption Standard (DES) taken from:
 * http://www.itl.nist.gov/fipspubs/fip46-2.htm
 */

(function () {

  var C = typeof window === 'undefined' ? __webpack_require__(/*! ./Crypto */ 696).Crypto : window.Crypto;

  // Shortcuts
  var util = C.util,charenc = C.charenc,UTF8 = charenc.UTF8;

  /***************************************************************************
                                                              * 
                                                              * DES Key Schedule.
                                                              * 
                                                              * The Key consists of 16 sub-keys of 48 bits each. As each sub-key is
                                                              * applied to an expanded 32-bit value where each 4 bits of input is
                                                              * expanded into 6 bits of output the sub-key can be broken down into 8
                                                              * 32-bit values which allows the key to be used without expansion.
                                                              * 
                                                              * To create the 16 sub-keys, 56 bits are selected from the input 64 bit key
                                                              * according to <i>PC1</i>. Each sub-key is generated by left rotating the
                                                              * bits a different amount and then selecting 48 bits according to <i>PC2</i>.
                                                              * 
                                                              **************************************************************************/

  var KeySchedule;

  /**
                    * Representation of a DES key schedule.
                    * 
                    * @param {Array
                    *            of 8 bytes} key The cipher key
                    * 
                    * @constructor
                    */
  KeySchedule = function KeySchedule(key) {
    /**
                                            * The schedule of 16 keys
                                            */
    this.keys = new Array(16);
    this._initialiseKeys(key);
  };

  /**
      * Permuted Choice 1 (PC1) byte offsets into the key. Each of the 56 entries
      * selects one bit of DES's 56 bit key.
      * <p>
      * 
      * <pre>
      * The PC1 is defined as:
      * 
      * 57,   49,    41,   33,    25,    17,    9,
      *  1,   58,    50,   42,    34,    26,   18,
      * 10,    2,    59,   51,    43,    35,   27,
      * 19,   11,     3,   60,    52,    44,   36,
      * 63,   55,    47,   39,    31,    23,   15,
      *  7,   62,    54,   46,    38,    30,   22,
      * 14,    6,    61,   53,    45,    37,   29,
      * 21,   13,     5,   28,    20,    12,    4
      * </pre>
      * 
      * We represent this as an offset into an 8-byte array and a bit mask upon
      * that byte. For example 57=(7*8)+1 so is the first (MSB) of the 7th byte.
      * 
      * @constant
      */
  KeySchedule.PC1_offsets = [7, 6, 5, 4, 3, 2, 1, 0, 7, 6, 5, 4, 3, 2, 1, 0,
  7, 6, 5, 4, 3, 2, 1, 0, 7, 6, 5, 4, 7, 6, 5, 4, 3, 2, 1, 0, 7, 6,
  5, 4, 3, 2, 1, 0, 7, 6, 5, 4, 3, 2, 1, 0, 3, 2, 1, 0];

  /**
                                                          * Permuted Choice 1 (PC1) bit masks. Each of the 56 entries selects one bit
                                                          * of DES's 56 bit key.
                                                          * 
                                                          * @constant
                                                          */
  KeySchedule.PC1_masks = [128, 128, 128, 128, 128, 128, 128, 128, 64, 64,
  64, 64, 64, 64, 64, 64, 32, 32, 32, 32, 32, 32, 32, 32, 16, 16, 16,
  16, 2, 2, 2, 2, 2, 2, 2, 2, 4, 4, 4, 4, 4, 4, 4, 4, 8, 8, 8, 8, 8,
  8, 8, 8, 16, 16, 16, 16];

  /**
                             * Permuted Choice 2 (PC2) selects the active 48 bits from the 56 bits of
                             * the key.
                             * <p>
                             * 
                             * <pre>
                             * The PC2 is defined as:
                             * 
                             * 14,   17,   11,   24,    1,    5,
                             *  3,   28,   15,    6,   21,   10,
                             * 23,   19,   12,    4,   26,    8,
                             * 16,    7,   27,   20,   13,    2,
                             * 41,   52,   31,   37,   47,   55,
                             * 30,   40,   51,   45,   33,   48,
                             * 44,   49,   39,   56,   34,   53,
                             * 46,   42,   50,   36,   29,   32
                             * </pre>
                             * 
                             * We invert the choice to specify what each bit adds to each 6-bit value of
                             * the key. For example, bit 1 is the 5th bit selected so this add 2 to the
                             * first 6-bit value.
                             * 
                             * @constant
                             */
  KeySchedule.PC2_offsets1 = [0, 3, 1, 2, 0, 1, 3, 2, 0, 1, 0, 2, 3, 0, 1,
  3, 0, 0, 2, 3, 1, 0, 2, 0, 0, 2, 3, 1];

  /**
                                           * PC2 offsets for 2nd block.
                                           * 
                                           * @constant
                                           */
  KeySchedule.PC2_offsets2 = [7, 5, 4, 7, 5, 6, 0, 7, 4, 0, 6, 5, 4, 7, 0,
  6, 5, 7, 4, 5, 6, 7, 5, 4, 6, 0, 4, 6];

  /**
                                           * Permuted Choice 2 (PC2) masks for 1st block.
                                           * 
                                           * @constant
                                           */
  KeySchedule.PC2_masks1 = [2, 1, 32, 4, 1, 4, 16, 1, 0, 1, 8, 8, 2, 32, 8,
  32, 16, 0, 16, 4, 2, 0, 32, 4, 0, 2, 8, 16];

  /**
                                                * PC2 masks for 2nd block.
                                                * 
                                                * @constant
                                                */
  KeySchedule.PC2_masks2 = [2, 32, 8, 1, 2, 2, 0, 4, 4, 0, 8, 16, 32, 16, 0,
  32, 4, 32, 2, 1, 16, 8, 8, 16, 1, 0, 1, 4];

  /**
                                               * Cumulative key shifts.
                                               * 
                                               * @constant
                                               */
  KeySchedule.keyShifts = [1, 2, 4, 6, 8, 10, 12, 14, 15, 17, 19, 21, 23,
  25, 27, 28];

  KeySchedule.prototype._initialiseKeys = function (key) {
    var i;

    // extract 56 key bits in order determined by PC1
    var bits = new Array(56);
    for (i = 0; i < 56; i++) {
      bits[i] = (key[KeySchedule.PC1_offsets[i]] & KeySchedule.PC1_masks[i]) != 0;
    }

    // split 56 bits into two 28-bit chunks
    var bits1 = bits.slice(0, 28);
    var bits2 = bits.slice(28, 56);

    // duplicate each half to allow for easy bit shifts
    bits1 = bits1.concat(bits1);
    bits2 = bits2.concat(bits2);

    // assemble the 16 keys
    for (i = 0; i < 16; i++) {
      var k = [0, 0, 0, 0, 0, 0, 0, 0];

      // select the bits of the key according to PC2
      var s = KeySchedule.keyShifts[i];
      for (var j = 0; j < 28; j++) {
        if (bits1[j + s]) {
          k[KeySchedule.PC2_offsets1[j]] += KeySchedule.PC2_masks1[j];
        }
        if (bits2[j + s]) {
          k[KeySchedule.PC2_offsets2[j]] += KeySchedule.PC2_masks2[j];
        }
      }

      // Scale each of the 8 blocks to a 32-bit mask.
      k[0] = ((k[0] & 0x1f) << 27) + ((k[0] & 0x20) >> 5);
      for (var j = 1; j <= 6; j++) {
        k[j] = k[j] << 27 - 4 * j;
      }
      k[7] = ((k[7] & 0x3e) >> 1) + ((k[7] & 0x1) << 31);
      this.keys[i] = k;
    }
  };

  /**
      * Retrieve the key for a specified round
      * 
      * @param i
      *            the round
      * @returns the key
      */
  KeySchedule.prototype.getKey = function (i) {
    return this.keys[i];
  };

  /***************************************************************************
      * 
      * DES Engine State
      * 
      **************************************************************************/

  var State;

  /**
              * The algorithm's state. DES operates on two sets of 32-bits, with each
              * block of 32-bits treated as a single number.
              * 
              * @class
              */
  State = function State() {
    /** The LHS of the Feistel scheme */
    this.lhs = 0;
    /** The RHS of the Feistel scheme */
    this.rhs = 0;
  };

  /**
      * The masks that select the SBOX input. Each SBOX accepts 6 bits from the
      * input.
      * 
      * @constant
      */
  State.SBOX_MASK = [0xf8000001, 0x1f800000, 0x01f80000, 0x001f8000,
  0x0001f800, 0x00001f80, 0x000001f8, 0x8000001f];

  /**
                                                    * The SBOXes. The 8 SBOXes each map 6 bit masked bit of the input to 4 bits
                                                    * of output. These SBOXes include the post SBOX permutation and benefit
                                                    * from JavaScript's sparse arrays to make specifying the input match
                                                    * simple.
                                                    * 
                                                    * @constant
                                                    */
  State.SBOX = new Array(8);

  var SBOX = State.SBOX;

  SBOX[0] = new Array();
  SBOX[0][0] = 0x808200; // 0 (0, 0) = 14
  SBOX[0][268435456] = 0x8000; // 10000000 (0, 1) = 4
  SBOX[0][536870912] = 0x808002; // 20000000 (0, 2) = 13
  SBOX[0][805306368] = 0x2; // 30000000 (0, 3) = 1
  SBOX[0][1073741824] = 0x200; // 40000000 (0, 4) = 2
  SBOX[0][1342177280] = 0x808202; // 50000000 (0, 5) = 15
  SBOX[0][1610612736] = 0x800202; // 60000000 (0, 6) = 11
  SBOX[0][1879048192] = 0x800000; // 70000000 (0, 7) = 8
  SBOX[0][-2147483648] = 0x202; // 80000000 (0, 8) = 3
  SBOX[0][-1879048192] = 0x800200; // 90000000 (0, 9) = 10
  SBOX[0][-1610612736] = 0x8200; // a0000000 (0, 10) = 6
  SBOX[0][-1342177280] = 0x808000; // b0000000 (0, 11) = 12
  SBOX[0][-1073741824] = 0x8002; // c0000000 (0, 12) = 5
  SBOX[0][-805306368] = 0x800002; // d0000000 (0, 13) = 9
  SBOX[0][-536870912] = 0x0; // e0000000 (0, 14) = 0
  SBOX[0][-268435456] = 0x8202; // f0000000 (0, 15) = 7
  SBOX[0][134217728] = 0x0; // 8000000 (1, 0) = 0
  SBOX[0][402653184] = 0x808202; // 18000000 (1, 1) = 15
  SBOX[0][671088640] = 0x8202; // 28000000 (1, 2) = 7
  SBOX[0][939524096] = 0x8000; // 38000000 (1, 3) = 4
  SBOX[0][1207959552] = 0x808200; // 48000000 (1, 4) = 14
  SBOX[0][1476395008] = 0x200; // 58000000 (1, 5) = 2
  SBOX[0][1744830464] = 0x808002; // 68000000 (1, 6) = 13
  SBOX[0][2013265920] = 0x2; // 78000000 (1, 7) = 1
  SBOX[0][-2013265920] = 0x800200; // 88000000 (1, 8) = 10
  SBOX[0][-1744830464] = 0x8200; // 98000000 (1, 9) = 6
  SBOX[0][-1476395008] = 0x808000; // a8000000 (1, 10) = 12
  SBOX[0][-1207959552] = 0x800202; // b8000000 (1, 11) = 11
  SBOX[0][-939524096] = 0x800002; // c8000000 (1, 12) = 9
  SBOX[0][-671088640] = 0x8002; // d8000000 (1, 13) = 5
  SBOX[0][-402653184] = 0x202; // e8000000 (1, 14) = 3
  SBOX[0][-134217728] = 0x800000; // f8000000 (1, 15) = 8
  SBOX[0][1] = 0x8000; // 1 (2, 0) = 4
  SBOX[0][268435457] = 0x2; // 10000001 (2, 1) = 1
  SBOX[0][536870913] = 0x808200; // 20000001 (2, 2) = 14
  SBOX[0][805306369] = 0x800000; // 30000001 (2, 3) = 8
  SBOX[0][1073741825] = 0x808002; // 40000001 (2, 4) = 13
  SBOX[0][1342177281] = 0x8200; // 50000001 (2, 5) = 6
  SBOX[0][1610612737] = 0x200; // 60000001 (2, 6) = 2
  SBOX[0][1879048193] = 0x800202; // 70000001 (2, 7) = 11
  SBOX[0][-2147483647] = 0x808202; // 80000001 (2, 8) = 15
  SBOX[0][-1879048191] = 0x808000; // 90000001 (2, 9) = 12
  SBOX[0][-1610612735] = 0x800002; // a0000001 (2, 10) = 9
  SBOX[0][-1342177279] = 0x8202; // b0000001 (2, 11) = 7
  SBOX[0][-1073741823] = 0x202; // c0000001 (2, 12) = 3
  SBOX[0][-805306367] = 0x800200; // d0000001 (2, 13) = 10
  SBOX[0][-536870911] = 0x8002; // e0000001 (2, 14) = 5
  SBOX[0][-268435455] = 0x0; // f0000001 (2, 15) = 0
  SBOX[0][134217729] = 0x808202; // 8000001 (3, 0) = 15
  SBOX[0][402653185] = 0x808000; // 18000001 (3, 1) = 12
  SBOX[0][671088641] = 0x800000; // 28000001 (3, 2) = 8
  SBOX[0][939524097] = 0x200; // 38000001 (3, 3) = 2
  SBOX[0][1207959553] = 0x8000; // 48000001 (3, 4) = 4
  SBOX[0][1476395009] = 0x800002; // 58000001 (3, 5) = 9
  SBOX[0][1744830465] = 0x2; // 68000001 (3, 6) = 1
  SBOX[0][2013265921] = 0x8202; // 78000001 (3, 7) = 7
  SBOX[0][-2013265919] = 0x8002; // 88000001 (3, 8) = 5
  SBOX[0][-1744830463] = 0x800202; // 98000001 (3, 9) = 11
  SBOX[0][-1476395007] = 0x202; // a8000001 (3, 10) = 3
  SBOX[0][-1207959551] = 0x808200; // b8000001 (3, 11) = 14
  SBOX[0][-939524095] = 0x800200; // c8000001 (3, 12) = 10
  SBOX[0][-671088639] = 0x0; // d8000001 (3, 13) = 0
  SBOX[0][-402653183] = 0x8200; // e8000001 (3, 14) = 6
  SBOX[0][-134217727] = 0x808002; // f8000001 (3, 15) = 13

  SBOX[1] = new Array();
  SBOX[1][0] = 0x40084010; // 0 (0, 0) = 15
  SBOX[1][16777216] = 0x4000; // 1000000 (0, 1) = 1
  SBOX[1][33554432] = 0x80000; // 2000000 (0, 2) = 8
  SBOX[1][50331648] = 0x40080010; // 3000000 (0, 3) = 14
  SBOX[1][67108864] = 0x40000010; // 4000000 (0, 4) = 6
  SBOX[1][83886080] = 0x40084000; // 5000000 (0, 5) = 11
  SBOX[1][100663296] = 0x40004000; // 6000000 (0, 6) = 3
  SBOX[1][117440512] = 0x10; // 7000000 (0, 7) = 4
  SBOX[1][134217728] = 0x84000; // 8000000 (0, 8) = 9
  SBOX[1][150994944] = 0x40004010; // 9000000 (0, 9) = 7
  SBOX[1][167772160] = 0x40000000; // a000000 (0, 10) = 2
  SBOX[1][184549376] = 0x84010; // b000000 (0, 11) = 13
  SBOX[1][201326592] = 0x80010; // c000000 (0, 12) = 12
  SBOX[1][218103808] = 0x0; // d000000 (0, 13) = 0
  SBOX[1][234881024] = 0x4010; // e000000 (0, 14) = 5
  SBOX[1][251658240] = 0x40080000; // f000000 (0, 15) = 10
  SBOX[1][8388608] = 0x40004000; // 800000 (1, 0) = 3
  SBOX[1][25165824] = 0x84010; // 1800000 (1, 1) = 13
  SBOX[1][41943040] = 0x10; // 2800000 (1, 2) = 4
  SBOX[1][58720256] = 0x40004010; // 3800000 (1, 3) = 7
  SBOX[1][75497472] = 0x40084010; // 4800000 (1, 4) = 15
  SBOX[1][92274688] = 0x40000000; // 5800000 (1, 5) = 2
  SBOX[1][109051904] = 0x80000; // 6800000 (1, 6) = 8
  SBOX[1][125829120] = 0x40080010; // 7800000 (1, 7) = 14
  SBOX[1][142606336] = 0x80010; // 8800000 (1, 8) = 12
  SBOX[1][159383552] = 0x0; // 9800000 (1, 9) = 0
  SBOX[1][176160768] = 0x4000; // a800000 (1, 10) = 1
  SBOX[1][192937984] = 0x40080000; // b800000 (1, 11) = 10
  SBOX[1][209715200] = 0x40000010; // c800000 (1, 12) = 6
  SBOX[1][226492416] = 0x84000; // d800000 (1, 13) = 9
  SBOX[1][243269632] = 0x40084000; // e800000 (1, 14) = 11
  SBOX[1][260046848] = 0x4010; // f800000 (1, 15) = 5
  SBOX[1][268435456] = 0x0; // 10000000 (2, 0) = 0
  SBOX[1][285212672] = 0x40080010; // 11000000 (2, 1) = 14
  SBOX[1][301989888] = 0x40004010; // 12000000 (2, 2) = 7
  SBOX[1][318767104] = 0x40084000; // 13000000 (2, 3) = 11
  SBOX[1][335544320] = 0x40080000; // 14000000 (2, 4) = 10
  SBOX[1][352321536] = 0x10; // 15000000 (2, 5) = 4
  SBOX[1][369098752] = 0x84010; // 16000000 (2, 6) = 13
  SBOX[1][385875968] = 0x4000; // 17000000 (2, 7) = 1
  SBOX[1][402653184] = 0x4010; // 18000000 (2, 8) = 5
  SBOX[1][419430400] = 0x80000; // 19000000 (2, 9) = 8
  SBOX[1][436207616] = 0x80010; // 1a000000 (2, 10) = 12
  SBOX[1][452984832] = 0x40000010; // 1b000000 (2, 11) = 6
  SBOX[1][469762048] = 0x84000; // 1c000000 (2, 12) = 9
  SBOX[1][486539264] = 0x40004000; // 1d000000 (2, 13) = 3
  SBOX[1][503316480] = 0x40000000; // 1e000000 (2, 14) = 2
  SBOX[1][520093696] = 0x40084010; // 1f000000 (2, 15) = 15
  SBOX[1][276824064] = 0x84010; // 10800000 (3, 0) = 13
  SBOX[1][293601280] = 0x80000; // 11800000 (3, 1) = 8
  SBOX[1][310378496] = 0x40080000; // 12800000 (3, 2) = 10
  SBOX[1][327155712] = 0x4000; // 13800000 (3, 3) = 1
  SBOX[1][343932928] = 0x40004000; // 14800000 (3, 4) = 3
  SBOX[1][360710144] = 0x40084010; // 15800000 (3, 5) = 15
  SBOX[1][377487360] = 0x10; // 16800000 (3, 6) = 4
  SBOX[1][394264576] = 0x40000000; // 17800000 (3, 7) = 2
  SBOX[1][411041792] = 0x40084000; // 18800000 (3, 8) = 11
  SBOX[1][427819008] = 0x40000010; // 19800000 (3, 9) = 6
  SBOX[1][444596224] = 0x40004010; // 1a800000 (3, 10) = 7
  SBOX[1][461373440] = 0x80010; // 1b800000 (3, 11) = 12
  SBOX[1][478150656] = 0x0; // 1c800000 (3, 12) = 0
  SBOX[1][494927872] = 0x4010; // 1d800000 (3, 13) = 5
  SBOX[1][511705088] = 0x40080010; // 1e800000 (3, 14) = 14
  SBOX[1][528482304] = 0x84000; // 1f800000 (3, 15) = 9

  SBOX[2] = new Array();
  SBOX[2][0] = 0x104; // 0 (0, 0) = 10
  SBOX[2][1048576] = 0x0; // 100000 (0, 1) = 0
  SBOX[2][2097152] = 0x4000100; // 200000 (0, 2) = 9
  SBOX[2][3145728] = 0x10104; // 300000 (0, 3) = 14
  SBOX[2][4194304] = 0x10004; // 400000 (0, 4) = 6
  SBOX[2][5242880] = 0x4000004; // 500000 (0, 5) = 3
  SBOX[2][6291456] = 0x4010104; // 600000 (0, 6) = 15
  SBOX[2][7340032] = 0x4010000; // 700000 (0, 7) = 5
  SBOX[2][8388608] = 0x4000000; // 800000 (0, 8) = 1
  SBOX[2][9437184] = 0x4010100; // 900000 (0, 9) = 13
  SBOX[2][10485760] = 0x10100; // a00000 (0, 10) = 12
  SBOX[2][11534336] = 0x4010004; // b00000 (0, 11) = 7
  SBOX[2][12582912] = 0x4000104; // c00000 (0, 12) = 11
  SBOX[2][13631488] = 0x10000; // d00000 (0, 13) = 4
  SBOX[2][14680064] = 0x4; // e00000 (0, 14) = 2
  SBOX[2][15728640] = 0x100; // f00000 (0, 15) = 8
  SBOX[2][524288] = 0x4010100; // 80000 (1, 0) = 13
  SBOX[2][1572864] = 0x4010004; // 180000 (1, 1) = 7
  SBOX[2][2621440] = 0x0; // 280000 (1, 2) = 0
  SBOX[2][3670016] = 0x4000100; // 380000 (1, 3) = 9
  SBOX[2][4718592] = 0x4000004; // 480000 (1, 4) = 3
  SBOX[2][5767168] = 0x10000; // 580000 (1, 5) = 4
  SBOX[2][6815744] = 0x10004; // 680000 (1, 6) = 6
  SBOX[2][7864320] = 0x104; // 780000 (1, 7) = 10
  SBOX[2][8912896] = 0x4; // 880000 (1, 8) = 2
  SBOX[2][9961472] = 0x100; // 980000 (1, 9) = 8
  SBOX[2][11010048] = 0x4010000; // a80000 (1, 10) = 5
  SBOX[2][12058624] = 0x10104; // b80000 (1, 11) = 14
  SBOX[2][13107200] = 0x10100; // c80000 (1, 12) = 12
  SBOX[2][14155776] = 0x4000104; // d80000 (1, 13) = 11
  SBOX[2][15204352] = 0x4010104; // e80000 (1, 14) = 15
  SBOX[2][16252928] = 0x4000000; // f80000 (1, 15) = 1
  SBOX[2][16777216] = 0x4010100; // 1000000 (2, 0) = 13
  SBOX[2][17825792] = 0x10004; // 1100000 (2, 1) = 6
  SBOX[2][18874368] = 0x10000; // 1200000 (2, 2) = 4
  SBOX[2][19922944] = 0x4000100; // 1300000 (2, 3) = 9
  SBOX[2][20971520] = 0x100; // 1400000 (2, 4) = 8
  SBOX[2][22020096] = 0x4010104; // 1500000 (2, 5) = 15
  SBOX[2][23068672] = 0x4000004; // 1600000 (2, 6) = 3
  SBOX[2][24117248] = 0x0; // 1700000 (2, 7) = 0
  SBOX[2][25165824] = 0x4000104; // 1800000 (2, 8) = 11
  SBOX[2][26214400] = 0x4000000; // 1900000 (2, 9) = 1
  SBOX[2][27262976] = 0x4; // 1a00000 (2, 10) = 2
  SBOX[2][28311552] = 0x10100; // 1b00000 (2, 11) = 12
  SBOX[2][29360128] = 0x4010000; // 1c00000 (2, 12) = 5
  SBOX[2][30408704] = 0x104; // 1d00000 (2, 13) = 10
  SBOX[2][31457280] = 0x10104; // 1e00000 (2, 14) = 14
  SBOX[2][32505856] = 0x4010004; // 1f00000 (2, 15) = 7
  SBOX[2][17301504] = 0x4000000; // 1080000 (3, 0) = 1
  SBOX[2][18350080] = 0x104; // 1180000 (3, 1) = 10
  SBOX[2][19398656] = 0x4010100; // 1280000 (3, 2) = 13
  SBOX[2][20447232] = 0x0; // 1380000 (3, 3) = 0
  SBOX[2][21495808] = 0x10004; // 1480000 (3, 4) = 6
  SBOX[2][22544384] = 0x4000100; // 1580000 (3, 5) = 9
  SBOX[2][23592960] = 0x100; // 1680000 (3, 6) = 8
  SBOX[2][24641536] = 0x4010004; // 1780000 (3, 7) = 7
  SBOX[2][25690112] = 0x10000; // 1880000 (3, 8) = 4
  SBOX[2][26738688] = 0x4010104; // 1980000 (3, 9) = 15
  SBOX[2][27787264] = 0x10104; // 1a80000 (3, 10) = 14
  SBOX[2][28835840] = 0x4000004; // 1b80000 (3, 11) = 3
  SBOX[2][29884416] = 0x4000104; // 1c80000 (3, 12) = 11
  SBOX[2][30932992] = 0x4010000; // 1d80000 (3, 13) = 5
  SBOX[2][31981568] = 0x4; // 1e80000 (3, 14) = 2
  SBOX[2][33030144] = 0x10100; // 1f80000 (3, 15) = 12

  SBOX[3] = new Array();
  SBOX[3][0] = 0x80401000; // 0 (0, 0) = 7
  SBOX[3][65536] = 0x80001040; // 10000 (0, 1) = 13
  SBOX[3][131072] = 0x401040; // 20000 (0, 2) = 14
  SBOX[3][196608] = 0x80400000; // 30000 (0, 3) = 3
  SBOX[3][262144] = 0x0; // 40000 (0, 4) = 0
  SBOX[3][327680] = 0x401000; // 50000 (0, 5) = 6
  SBOX[3][393216] = 0x80000040; // 60000 (0, 6) = 9
  SBOX[3][458752] = 0x400040; // 70000 (0, 7) = 10
  SBOX[3][524288] = 0x80000000; // 80000 (0, 8) = 1
  SBOX[3][589824] = 0x400000; // 90000 (0, 9) = 2
  SBOX[3][655360] = 0x40; // a0000 (0, 10) = 8
  SBOX[3][720896] = 0x80001000; // b0000 (0, 11) = 5
  SBOX[3][786432] = 0x80400040; // c0000 (0, 12) = 11
  SBOX[3][851968] = 0x1040; // d0000 (0, 13) = 12
  SBOX[3][917504] = 0x1000; // e0000 (0, 14) = 4
  SBOX[3][983040] = 0x80401040; // f0000 (0, 15) = 15
  SBOX[3][32768] = 0x80001040; // 8000 (1, 0) = 13
  SBOX[3][98304] = 0x40; // 18000 (1, 1) = 8
  SBOX[3][163840] = 0x80400040; // 28000 (1, 2) = 11
  SBOX[3][229376] = 0x80001000; // 38000 (1, 3) = 5
  SBOX[3][294912] = 0x401000; // 48000 (1, 4) = 6
  SBOX[3][360448] = 0x80401040; // 58000 (1, 5) = 15
  SBOX[3][425984] = 0x0; // 68000 (1, 6) = 0
  SBOX[3][491520] = 0x80400000; // 78000 (1, 7) = 3
  SBOX[3][557056] = 0x1000; // 88000 (1, 8) = 4
  SBOX[3][622592] = 0x80401000; // 98000 (1, 9) = 7
  SBOX[3][688128] = 0x400000; // a8000 (1, 10) = 2
  SBOX[3][753664] = 0x1040; // b8000 (1, 11) = 12
  SBOX[3][819200] = 0x80000000; // c8000 (1, 12) = 1
  SBOX[3][884736] = 0x400040; // d8000 (1, 13) = 10
  SBOX[3][950272] = 0x401040; // e8000 (1, 14) = 14
  SBOX[3][1015808] = 0x80000040; // f8000 (1, 15) = 9
  SBOX[3][1048576] = 0x400040; // 100000 (2, 0) = 10
  SBOX[3][1114112] = 0x401000; // 110000 (2, 1) = 6
  SBOX[3][1179648] = 0x80000040; // 120000 (2, 2) = 9
  SBOX[3][1245184] = 0x0; // 130000 (2, 3) = 0
  SBOX[3][1310720] = 0x1040; // 140000 (2, 4) = 12
  SBOX[3][1376256] = 0x80400040; // 150000 (2, 5) = 11
  SBOX[3][1441792] = 0x80401000; // 160000 (2, 6) = 7
  SBOX[3][1507328] = 0x80001040; // 170000 (2, 7) = 13
  SBOX[3][1572864] = 0x80401040; // 180000 (2, 8) = 15
  SBOX[3][1638400] = 0x80000000; // 190000 (2, 9) = 1
  SBOX[3][1703936] = 0x80400000; // 1a0000 (2, 10) = 3
  SBOX[3][1769472] = 0x401040; // 1b0000 (2, 11) = 14
  SBOX[3][1835008] = 0x80001000; // 1c0000 (2, 12) = 5
  SBOX[3][1900544] = 0x400000; // 1d0000 (2, 13) = 2
  SBOX[3][1966080] = 0x40; // 1e0000 (2, 14) = 8
  SBOX[3][2031616] = 0x1000; // 1f0000 (2, 15) = 4
  SBOX[3][1081344] = 0x80400000; // 108000 (3, 0) = 3
  SBOX[3][1146880] = 0x80401040; // 118000 (3, 1) = 15
  SBOX[3][1212416] = 0x0; // 128000 (3, 2) = 0
  SBOX[3][1277952] = 0x401000; // 138000 (3, 3) = 6
  SBOX[3][1343488] = 0x400040; // 148000 (3, 4) = 10
  SBOX[3][1409024] = 0x80000000; // 158000 (3, 5) = 1
  SBOX[3][1474560] = 0x80001040; // 168000 (3, 6) = 13
  SBOX[3][1540096] = 0x40; // 178000 (3, 7) = 8
  SBOX[3][1605632] = 0x80000040; // 188000 (3, 8) = 9
  SBOX[3][1671168] = 0x1000; // 198000 (3, 9) = 4
  SBOX[3][1736704] = 0x80001000; // 1a8000 (3, 10) = 5
  SBOX[3][1802240] = 0x80400040; // 1b8000 (3, 11) = 11
  SBOX[3][1867776] = 0x1040; // 1c8000 (3, 12) = 12
  SBOX[3][1933312] = 0x80401000; // 1d8000 (3, 13) = 7
  SBOX[3][1998848] = 0x400000; // 1e8000 (3, 14) = 2
  SBOX[3][2064384] = 0x401040; // 1f8000 (3, 15) = 14

  SBOX[4] = new Array();
  SBOX[4][0] = 0x80; // 0 (0, 0) = 2
  SBOX[4][4096] = 0x1040000; // 1000 (0, 1) = 12
  SBOX[4][8192] = 0x40000; // 2000 (0, 2) = 4
  SBOX[4][12288] = 0x20000000; // 3000 (0, 3) = 1
  SBOX[4][16384] = 0x20040080; // 4000 (0, 4) = 7
  SBOX[4][20480] = 0x1000080; // 5000 (0, 5) = 10
  SBOX[4][24576] = 0x21000080; // 6000 (0, 6) = 11
  SBOX[4][28672] = 0x40080; // 7000 (0, 7) = 6
  SBOX[4][32768] = 0x1000000; // 8000 (0, 8) = 8
  SBOX[4][36864] = 0x20040000; // 9000 (0, 9) = 5
  SBOX[4][40960] = 0x20000080; // a000 (0, 10) = 3
  SBOX[4][45056] = 0x21040080; // b000 (0, 11) = 15
  SBOX[4][49152] = 0x21040000; // c000 (0, 12) = 13
  SBOX[4][53248] = 0x0; // d000 (0, 13) = 0
  SBOX[4][57344] = 0x1040080; // e000 (0, 14) = 14
  SBOX[4][61440] = 0x21000000; // f000 (0, 15) = 9
  SBOX[4][2048] = 0x1040080; // 800 (1, 0) = 14
  SBOX[4][6144] = 0x21000080; // 1800 (1, 1) = 11
  SBOX[4][10240] = 0x80; // 2800 (1, 2) = 2
  SBOX[4][14336] = 0x1040000; // 3800 (1, 3) = 12
  SBOX[4][18432] = 0x40000; // 4800 (1, 4) = 4
  SBOX[4][22528] = 0x20040080; // 5800 (1, 5) = 7
  SBOX[4][26624] = 0x21040000; // 6800 (1, 6) = 13
  SBOX[4][30720] = 0x20000000; // 7800 (1, 7) = 1
  SBOX[4][34816] = 0x20040000; // 8800 (1, 8) = 5
  SBOX[4][38912] = 0x0; // 9800 (1, 9) = 0
  SBOX[4][43008] = 0x21040080; // a800 (1, 10) = 15
  SBOX[4][47104] = 0x1000080; // b800 (1, 11) = 10
  SBOX[4][51200] = 0x20000080; // c800 (1, 12) = 3
  SBOX[4][55296] = 0x21000000; // d800 (1, 13) = 9
  SBOX[4][59392] = 0x1000000; // e800 (1, 14) = 8
  SBOX[4][63488] = 0x40080; // f800 (1, 15) = 6
  SBOX[4][65536] = 0x40000; // 10000 (2, 0) = 4
  SBOX[4][69632] = 0x80; // 11000 (2, 1) = 2
  SBOX[4][73728] = 0x20000000; // 12000 (2, 2) = 1
  SBOX[4][77824] = 0x21000080; // 13000 (2, 3) = 11
  SBOX[4][81920] = 0x1000080; // 14000 (2, 4) = 10
  SBOX[4][86016] = 0x21040000; // 15000 (2, 5) = 13
  SBOX[4][90112] = 0x20040080; // 16000 (2, 6) = 7
  SBOX[4][94208] = 0x1000000; // 17000 (2, 7) = 8
  SBOX[4][98304] = 0x21040080; // 18000 (2, 8) = 15
  SBOX[4][102400] = 0x21000000; // 19000 (2, 9) = 9
  SBOX[4][106496] = 0x1040000; // 1a000 (2, 10) = 12
  SBOX[4][110592] = 0x20040000; // 1b000 (2, 11) = 5
  SBOX[4][114688] = 0x40080; // 1c000 (2, 12) = 6
  SBOX[4][118784] = 0x20000080; // 1d000 (2, 13) = 3
  SBOX[4][122880] = 0x0; // 1e000 (2, 14) = 0
  SBOX[4][126976] = 0x1040080; // 1f000 (2, 15) = 14
  SBOX[4][67584] = 0x21000080; // 10800 (3, 0) = 11
  SBOX[4][71680] = 0x1000000; // 11800 (3, 1) = 8
  SBOX[4][75776] = 0x1040000; // 12800 (3, 2) = 12
  SBOX[4][79872] = 0x20040080; // 13800 (3, 3) = 7
  SBOX[4][83968] = 0x20000000; // 14800 (3, 4) = 1
  SBOX[4][88064] = 0x1040080; // 15800 (3, 5) = 14
  SBOX[4][92160] = 0x80; // 16800 (3, 6) = 2
  SBOX[4][96256] = 0x21040000; // 17800 (3, 7) = 13
  SBOX[4][100352] = 0x40080; // 18800 (3, 8) = 6
  SBOX[4][104448] = 0x21040080; // 19800 (3, 9) = 15
  SBOX[4][108544] = 0x0; // 1a800 (3, 10) = 0
  SBOX[4][112640] = 0x21000000; // 1b800 (3, 11) = 9
  SBOX[4][116736] = 0x1000080; // 1c800 (3, 12) = 10
  SBOX[4][120832] = 0x40000; // 1d800 (3, 13) = 4
  SBOX[4][124928] = 0x20040000; // 1e800 (3, 14) = 5
  SBOX[4][129024] = 0x20000080; // 1f800 (3, 15) = 3

  SBOX[5] = new Array();
  SBOX[5][0] = 0x10000008; // 0 (0, 0) = 12
  SBOX[5][256] = 0x2000; // 100 (0, 1) = 1
  SBOX[5][512] = 0x10200000; // 200 (0, 2) = 10
  SBOX[5][768] = 0x10202008; // 300 (0, 3) = 15
  SBOX[5][1024] = 0x10002000; // 400 (0, 4) = 9
  SBOX[5][1280] = 0x200000; // 500 (0, 5) = 2
  SBOX[5][1536] = 0x200008; // 600 (0, 6) = 6
  SBOX[5][1792] = 0x10000000; // 700 (0, 7) = 8
  SBOX[5][2048] = 0x0; // 800 (0, 8) = 0
  SBOX[5][2304] = 0x10002008; // 900 (0, 9) = 13
  SBOX[5][2560] = 0x202000; // a00 (0, 10) = 3
  SBOX[5][2816] = 0x8; // b00 (0, 11) = 4
  SBOX[5][3072] = 0x10200008; // c00 (0, 12) = 14
  SBOX[5][3328] = 0x202008; // d00 (0, 13) = 7
  SBOX[5][3584] = 0x2008; // e00 (0, 14) = 5
  SBOX[5][3840] = 0x10202000; // f00 (0, 15) = 11
  SBOX[5][128] = 0x10200000; // 80 (1, 0) = 10
  SBOX[5][384] = 0x10202008; // 180 (1, 1) = 15
  SBOX[5][640] = 0x8; // 280 (1, 2) = 4
  SBOX[5][896] = 0x200000; // 380 (1, 3) = 2
  SBOX[5][1152] = 0x202008; // 480 (1, 4) = 7
  SBOX[5][1408] = 0x10000008; // 580 (1, 5) = 12
  SBOX[5][1664] = 0x10002000; // 680 (1, 6) = 9
  SBOX[5][1920] = 0x2008; // 780 (1, 7) = 5
  SBOX[5][2176] = 0x200008; // 880 (1, 8) = 6
  SBOX[5][2432] = 0x2000; // 980 (1, 9) = 1
  SBOX[5][2688] = 0x10002008; // a80 (1, 10) = 13
  SBOX[5][2944] = 0x10200008; // b80 (1, 11) = 14
  SBOX[5][3200] = 0x0; // c80 (1, 12) = 0
  SBOX[5][3456] = 0x10202000; // d80 (1, 13) = 11
  SBOX[5][3712] = 0x202000; // e80 (1, 14) = 3
  SBOX[5][3968] = 0x10000000; // f80 (1, 15) = 8
  SBOX[5][4096] = 0x10002000; // 1000 (2, 0) = 9
  SBOX[5][4352] = 0x10200008; // 1100 (2, 1) = 14
  SBOX[5][4608] = 0x10202008; // 1200 (2, 2) = 15
  SBOX[5][4864] = 0x2008; // 1300 (2, 3) = 5
  SBOX[5][5120] = 0x200000; // 1400 (2, 4) = 2
  SBOX[5][5376] = 0x10000000; // 1500 (2, 5) = 8
  SBOX[5][5632] = 0x10000008; // 1600 (2, 6) = 12
  SBOX[5][5888] = 0x202000; // 1700 (2, 7) = 3
  SBOX[5][6144] = 0x202008; // 1800 (2, 8) = 7
  SBOX[5][6400] = 0x0; // 1900 (2, 9) = 0
  SBOX[5][6656] = 0x8; // 1a00 (2, 10) = 4
  SBOX[5][6912] = 0x10200000; // 1b00 (2, 11) = 10
  SBOX[5][7168] = 0x2000; // 1c00 (2, 12) = 1
  SBOX[5][7424] = 0x10002008; // 1d00 (2, 13) = 13
  SBOX[5][7680] = 0x10202000; // 1e00 (2, 14) = 11
  SBOX[5][7936] = 0x200008; // 1f00 (2, 15) = 6
  SBOX[5][4224] = 0x8; // 1080 (3, 0) = 4
  SBOX[5][4480] = 0x202000; // 1180 (3, 1) = 3
  SBOX[5][4736] = 0x200000; // 1280 (3, 2) = 2
  SBOX[5][4992] = 0x10000008; // 1380 (3, 3) = 12
  SBOX[5][5248] = 0x10002000; // 1480 (3, 4) = 9
  SBOX[5][5504] = 0x2008; // 1580 (3, 5) = 5
  SBOX[5][5760] = 0x10202008; // 1680 (3, 6) = 15
  SBOX[5][6016] = 0x10200000; // 1780 (3, 7) = 10
  SBOX[5][6272] = 0x10202000; // 1880 (3, 8) = 11
  SBOX[5][6528] = 0x10200008; // 1980 (3, 9) = 14
  SBOX[5][6784] = 0x2000; // 1a80 (3, 10) = 1
  SBOX[5][7040] = 0x202008; // 1b80 (3, 11) = 7
  SBOX[5][7296] = 0x200008; // 1c80 (3, 12) = 6
  SBOX[5][7552] = 0x0; // 1d80 (3, 13) = 0
  SBOX[5][7808] = 0x10000000; // 1e80 (3, 14) = 8
  SBOX[5][8064] = 0x10002008; // 1f80 (3, 15) = 13

  SBOX[6] = new Array();
  SBOX[6][0] = 0x100000; // 0 (0, 0) = 4
  SBOX[6][16] = 0x2000401; // 10 (0, 1) = 11
  SBOX[6][32] = 0x400; // 20 (0, 2) = 2
  SBOX[6][48] = 0x100401; // 30 (0, 3) = 14
  SBOX[6][64] = 0x2100401; // 40 (0, 4) = 15
  SBOX[6][80] = 0x0; // 50 (0, 5) = 0
  SBOX[6][96] = 0x1; // 60 (0, 6) = 8
  SBOX[6][112] = 0x2100001; // 70 (0, 7) = 13
  SBOX[6][128] = 0x2000400; // 80 (0, 8) = 3
  SBOX[6][144] = 0x100001; // 90 (0, 9) = 12
  SBOX[6][160] = 0x2000001; // a0 (0, 10) = 9
  SBOX[6][176] = 0x2100400; // b0 (0, 11) = 7
  SBOX[6][192] = 0x2100000; // c0 (0, 12) = 5
  SBOX[6][208] = 0x401; // d0 (0, 13) = 10
  SBOX[6][224] = 0x100400; // e0 (0, 14) = 6
  SBOX[6][240] = 0x2000000; // f0 (0, 15) = 1
  SBOX[6][8] = 0x2100001; // 8 (1, 0) = 13
  SBOX[6][24] = 0x0; // 18 (1, 1) = 0
  SBOX[6][40] = 0x2000401; // 28 (1, 2) = 11
  SBOX[6][56] = 0x2100400; // 38 (1, 3) = 7
  SBOX[6][72] = 0x100000; // 48 (1, 4) = 4
  SBOX[6][88] = 0x2000001; // 58 (1, 5) = 9
  SBOX[6][104] = 0x2000000; // 68 (1, 6) = 1
  SBOX[6][120] = 0x401; // 78 (1, 7) = 10
  SBOX[6][136] = 0x100401; // 88 (1, 8) = 14
  SBOX[6][152] = 0x2000400; // 98 (1, 9) = 3
  SBOX[6][168] = 0x2100000; // a8 (1, 10) = 5
  SBOX[6][184] = 0x100001; // b8 (1, 11) = 12
  SBOX[6][200] = 0x400; // c8 (1, 12) = 2
  SBOX[6][216] = 0x2100401; // d8 (1, 13) = 15
  SBOX[6][232] = 0x1; // e8 (1, 14) = 8
  SBOX[6][248] = 0x100400; // f8 (1, 15) = 6
  SBOX[6][256] = 0x2000000; // 100 (2, 0) = 1
  SBOX[6][272] = 0x100000; // 110 (2, 1) = 4
  SBOX[6][288] = 0x2000401; // 120 (2, 2) = 11
  SBOX[6][304] = 0x2100001; // 130 (2, 3) = 13
  SBOX[6][320] = 0x100001; // 140 (2, 4) = 12
  SBOX[6][336] = 0x2000400; // 150 (2, 5) = 3
  SBOX[6][352] = 0x2100400; // 160 (2, 6) = 7
  SBOX[6][368] = 0x100401; // 170 (2, 7) = 14
  SBOX[6][384] = 0x401; // 180 (2, 8) = 10
  SBOX[6][400] = 0x2100401; // 190 (2, 9) = 15
  SBOX[6][416] = 0x100400; // 1a0 (2, 10) = 6
  SBOX[6][432] = 0x1; // 1b0 (2, 11) = 8
  SBOX[6][448] = 0x0; // 1c0 (2, 12) = 0
  SBOX[6][464] = 0x2100000; // 1d0 (2, 13) = 5
  SBOX[6][480] = 0x2000001; // 1e0 (2, 14) = 9
  SBOX[6][496] = 0x400; // 1f0 (2, 15) = 2
  SBOX[6][264] = 0x100400; // 108 (3, 0) = 6
  SBOX[6][280] = 0x2000401; // 118 (3, 1) = 11
  SBOX[6][296] = 0x2100001; // 128 (3, 2) = 13
  SBOX[6][312] = 0x1; // 138 (3, 3) = 8
  SBOX[6][328] = 0x2000000; // 148 (3, 4) = 1
  SBOX[6][344] = 0x100000; // 158 (3, 5) = 4
  SBOX[6][360] = 0x401; // 168 (3, 6) = 10
  SBOX[6][376] = 0x2100400; // 178 (3, 7) = 7
  SBOX[6][392] = 0x2000001; // 188 (3, 8) = 9
  SBOX[6][408] = 0x2100000; // 198 (3, 9) = 5
  SBOX[6][424] = 0x0; // 1a8 (3, 10) = 0
  SBOX[6][440] = 0x2100401; // 1b8 (3, 11) = 15
  SBOX[6][456] = 0x100401; // 1c8 (3, 12) = 14
  SBOX[6][472] = 0x400; // 1d8 (3, 13) = 2
  SBOX[6][488] = 0x2000400; // 1e8 (3, 14) = 3
  SBOX[6][504] = 0x100001; // 1f8 (3, 15) = 12

  SBOX[7] = new Array();
  SBOX[7][0] = 0x8000820; // 0 (0, 0) = 13
  SBOX[7][1] = 0x20000; // 1 (0, 1) = 2
  SBOX[7][2] = 0x8000000; // 2 (0, 2) = 8
  SBOX[7][3] = 0x20; // 3 (0, 3) = 4
  SBOX[7][4] = 0x20020; // 4 (0, 4) = 6
  SBOX[7][5] = 0x8020820; // 5 (0, 5) = 15
  SBOX[7][6] = 0x8020800; // 6 (0, 6) = 11
  SBOX[7][7] = 0x800; // 7 (0, 7) = 1
  SBOX[7][8] = 0x8020000; // 8 (0, 8) = 10
  SBOX[7][9] = 0x8000800; // 9 (0, 9) = 9
  SBOX[7][10] = 0x20800; // a (0, 10) = 3
  SBOX[7][11] = 0x8020020; // b (0, 11) = 14
  SBOX[7][12] = 0x820; // c (0, 12) = 5
  SBOX[7][13] = 0x0; // d (0, 13) = 0
  SBOX[7][14] = 0x8000020; // e (0, 14) = 12
  SBOX[7][15] = 0x20820; // f (0, 15) = 7
  SBOX[7][-2147483648] = 0x800; // 80000000 (1, 0) = 1
  SBOX[7][-2147483647] = 0x8020820; // 80000001 (1, 1) = 15
  SBOX[7][-2147483646] = 0x8000820; // 80000002 (1, 2) = 13
  SBOX[7][-2147483645] = 0x8000000; // 80000003 (1, 3) = 8
  SBOX[7][-2147483644] = 0x8020000; // 80000004 (1, 4) = 10
  SBOX[7][-2147483643] = 0x20800; // 80000005 (1, 5) = 3
  SBOX[7][-2147483642] = 0x20820; // 80000006 (1, 6) = 7
  SBOX[7][-2147483641] = 0x20; // 80000007 (1, 7) = 4
  SBOX[7][-2147483640] = 0x8000020; // 80000008 (1, 8) = 12
  SBOX[7][-2147483639] = 0x820; // 80000009 (1, 9) = 5
  SBOX[7][-2147483638] = 0x20020; // 8000000a (1, 10) = 6
  SBOX[7][-2147483637] = 0x8020800; // 8000000b (1, 11) = 11
  SBOX[7][-2147483636] = 0x0; // 8000000c (1, 12) = 0
  SBOX[7][-2147483635] = 0x8020020; // 8000000d (1, 13) = 14
  SBOX[7][-2147483634] = 0x8000800; // 8000000e (1, 14) = 9
  SBOX[7][-2147483633] = 0x20000; // 8000000f (1, 15) = 2
  SBOX[7][16] = 0x20820; // 10 (2, 0) = 7
  SBOX[7][17] = 0x8020800; // 11 (2, 1) = 11
  SBOX[7][18] = 0x20; // 12 (2, 2) = 4
  SBOX[7][19] = 0x800; // 13 (2, 3) = 1
  SBOX[7][20] = 0x8000800; // 14 (2, 4) = 9
  SBOX[7][21] = 0x8000020; // 15 (2, 5) = 12
  SBOX[7][22] = 0x8020020; // 16 (2, 6) = 14
  SBOX[7][23] = 0x20000; // 17 (2, 7) = 2
  SBOX[7][24] = 0x0; // 18 (2, 8) = 0
  SBOX[7][25] = 0x20020; // 19 (2, 9) = 6
  SBOX[7][26] = 0x8020000; // 1a (2, 10) = 10
  SBOX[7][27] = 0x8000820; // 1b (2, 11) = 13
  SBOX[7][28] = 0x8020820; // 1c (2, 12) = 15
  SBOX[7][29] = 0x20800; // 1d (2, 13) = 3
  SBOX[7][30] = 0x820; // 1e (2, 14) = 5
  SBOX[7][31] = 0x8000000; // 1f (2, 15) = 8
  SBOX[7][-2147483632] = 0x20000; // 80000010 (3, 0) = 2
  SBOX[7][-2147483631] = 0x800; // 80000011 (3, 1) = 1
  SBOX[7][-2147483630] = 0x8020020; // 80000012 (3, 2) = 14
  SBOX[7][-2147483629] = 0x20820; // 80000013 (3, 3) = 7
  SBOX[7][-2147483628] = 0x20; // 80000014 (3, 4) = 4
  SBOX[7][-2147483627] = 0x8020000; // 80000015 (3, 5) = 10
  SBOX[7][-2147483626] = 0x8000000; // 80000016 (3, 6) = 8
  SBOX[7][-2147483625] = 0x8000820; // 80000017 (3, 7) = 13
  SBOX[7][-2147483624] = 0x8020820; // 80000018 (3, 8) = 15
  SBOX[7][-2147483623] = 0x8000020; // 80000019 (3, 9) = 12
  SBOX[7][-2147483622] = 0x8000800; // 8000001a (3, 10) = 9
  SBOX[7][-2147483621] = 0x0; // 8000001b (3, 11) = 0
  SBOX[7][-2147483620] = 0x20800; // 8000001c (3, 12) = 3
  SBOX[7][-2147483619] = 0x820; // 8000001d (3, 13) = 5
  SBOX[7][-2147483618] = 0x20020; // 8000001e (3, 14) = 6
  SBOX[7][-2147483617] = 0x8020800; // 8000001f (3, 15) = 11

  State.prototype._exchangeLR = function (v, m) {
    var t = (this.lhs >> v ^ this.rhs) & m;
    this.rhs ^= t;
    this.lhs ^= t << v;
  };

  State.prototype._exchangeRL = function (v, m) {
    var t = (this.rhs >> v ^ this.lhs) & m;
    this.lhs ^= t;
    this.rhs ^= t << v;
  };

  /**
      * Perform the initial permutation of the input to create the starting state
      * of the algorithm. The initial permutation maps each consecutive bit of
      * the input into a different byte of the state.
      * 
      * <pre>
      * The initial permutation is defined to be:
      * 
      *      58    50   42    34    26   18    10    2  
      *      60    52   44    36    28   20    12    4
      *      62    54   46    38    30   22    14    6
      *      64    56   48    40    32   24    16    8
      *      57    49   41    33    25   17     9    1
      *      59    51   43    35    27   19    11    3
      *      61    53   45    37    29   21    13    5
      *      63    55   47    39    31   23    15    7
      * </pre>
      * 
      * 
      * @param message
      *            The message as an array of unsigned bytes.
      * @param offset
      *            The offset into the message that the current 64-bit block
      *            begins.
      * @returns the initial engine state
      */
  State.prototype.initialPerm = function (message, offset) {
    var input = message.slice(offset, offset + 8);

    this.lhs = (input[0] << 24) + (input[1] << 16) + (input[2] << 8) +
    input[3];
    this.rhs = (input[4] << 24) + (input[5] << 16) + (input[6] << 8) +
    input[7];

    this._exchangeLR(4, 0x0f0f0f0f);
    this._exchangeLR(16, 0x0000ffff);
    this._exchangeRL(2, 0x33333333);
    this._exchangeRL(8, 0x00ff00ff);
    this._exchangeLR(1, 0x55555555);
  };

  /**
      * Perform one round of the DES algorithm using the given key. A round is
      * defined as:
      * 
      * <pre>
      * L&amp;rsquo = R
      * R&amp;rsquo = L &circ; f(R, k)
      * </pre>
      * 
      * where f consists of expanding, XORing with the key and contracting back
      * with the SBOXes.
      * 
      * Note that the final round is defined slightly differently as:
      * 
      * <pre>
      * L&amp;rsquo = L &circ; f(R, k)
      * R&amp;rsquo = R
      * </pre>
      * 
      * Therefore in the final round this function produces LHS and RHS the wrong
      * way around.
      * 
      * @param k
      *            the key
      */
  State.prototype.round = function (k) {
    var r = this.rhs,l = this.lhs;
    var f = 0;
    for (var i = 0; i < 8; i++) {
      var v = (r ^ k[i]) & State.SBOX_MASK[i];
      f += State.SBOX[i][v];
    }

    this.lhs = r;
    this.rhs = l ^ f;
  };

  /**
      * Apply the inverse of the initial permutation.
      * 
      * <pre>
      * The inverse is defined to be:
      * 
      *      40     8   48    16    56   24    64   32
      *      39     7   47    15    55   23    63   31
      *      38     6   46    14    54   22    62   30
      *      37     5   45    13    53   21    61   29
      *      36     4   44    12    52   20    60   28
      *      35     3   43    11    51   19    59   27
      *      34     2   42    10    50   18    58   26
      *      33     1   41     9    49   17    57   25
      * </pre>
      * 
      * @param cipherText
      * @param offset
      */
  State.prototype.finalPerm = function (cipherText, offset) {
    var t = this.lhs;
    this.lhs = this.rhs;
    this.rhs = t;

    this._exchangeLR(1, 0x55555555);
    this._exchangeRL(8, 0x00ff00ff);
    this._exchangeRL(2, 0x33333333);
    this._exchangeLR(16, 0x0000ffff);
    this._exchangeLR(4, 0x0f0f0f0f);

    cipherText[offset] = this.lhs >> 24 & 0xff;
    cipherText[offset + 1] = this.lhs >> 16 & 0xff;
    cipherText[offset + 2] = this.lhs >> 8 & 0xff;
    cipherText[offset + 3] = this.lhs & 0xff;
    cipherText[offset + 4] = this.rhs >> 24 & 0xff;
    cipherText[offset + 5] = this.rhs >> 16 & 0xff;
    cipherText[offset + 6] = this.rhs >> 8 & 0xff;
    cipherText[offset + 7] = this.rhs & 0xff;
  };

  /**
      * DES cipher
      */
  var DES = C.DES = {
    _blocksize: 2,

    _keyschedule: null,

    _state: new State(),

    _init: function _init(k) {
      this._keyschedule = new KeySchedule(k);
    },

    encrypt: function encrypt(message, password, options) {

      options = options || {};

      // Determine mode
      var mode = options.mode || new C.mode.OFB();

      // Allow mode to override options
      if (mode.fixOptions)
      mode.fixOptions(options);

      var
      // Convert to bytes if message is a string
      m = message.constructor == String ? UTF8.stringToBytes(message) :
      message,

      // Generate random IV
      iv = options.iv || util.randomBytes(8),

      // Generate key
      k = password.constructor == String ?
      // Derive key from passphrase
      C.PBKDF2(password, iv, 8, {
        asBytes: true }) :

      // else, assume byte array representing cryptographic key
      password;

      // Create key schedule
      this._keyschedule = new KeySchedule(k);

      // Encrypt
      mode.encrypt(DES, m, iv);

      // Return ciphertext
      m = options.iv ? m : iv.concat(m);
      return options && options.asBytes ? m : util.bytesToBase64(m);
    },

    _encryptblock: function _encryptblock(message, offset) {
      this._state.initialPerm(message, offset);
      for (var i = 0; i <= 15; i++) {
        this._state.round(this._keyschedule.getKey(i));
      }
      this._state.finalPerm(message, offset);
    },

    decrypt: function decrypt(ciphertext, password, options) {
      options = options || {};

      // Determine mode
      var mode = options.mode || new C.mode.OFB();

      // Allow mode to override options
      if (mode.fixOptions)
      mode.fixOptions(options);

      var

      // Convert to bytes if ciphertext is a string
      c = ciphertext.constructor == String ? util.
      base64ToBytes(ciphertext) : ciphertext,

      // Separate IV and message
      iv = options.iv || c.splice(0, 8),

      // Generate key
      k = password.constructor == String ?
      // Derive key from passphrase
      C.PBKDF2(password, iv, 32, {
        asBytes: true }) :

      // else, assume byte array representing cryptographic key
      password;

      // Create key schedule
      this._keyschedule = new KeySchedule(k);

      mode.decrypt(DES, c, iv);

      // Return plaintext
      return options && options.asBytes ? c : UTF8.bytesToString(c);
    },

    _decryptblock: function _decryptblock(message, offset) {
      this._state.initialPerm(message, offset);
      for (var i = 15; i >= 0; i--) {
        this._state.round(this._keyschedule.getKey(i));
      }
      this._state.finalPerm(message, offset);
    } };


})();

/***/ }),

/***/ 702:
/*!************************************************************************!*\
  !*** C:/Users/luyus/Desktop/baoyun-mansion/utils/cryptojs/lib/HMAC.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function () {

  var C = typeof window === 'undefined' ? __webpack_require__(/*! ./Crypto */ 696).Crypto : window.Crypto;

  // Shortcuts
  var util = C.util,
  charenc = C.charenc,
  UTF8 = charenc.UTF8,
  Binary = charenc.Binary;

  C.HMAC = function (hasher, message, key, options) {

    // Convert to byte arrays
    if (message.constructor == String) message = UTF8.stringToBytes(message);
    if (key.constructor == String) key = UTF8.stringToBytes(key);
    /* else, assume byte arrays already */

    // Allow arbitrary length keys
    if (key.length > hasher._blocksize * 4)
    key = hasher(key, { asBytes: true });

    // XOR keys with pad constants
    var okey = key.slice(0),
    ikey = key.slice(0);
    for (var i = 0; i < hasher._blocksize * 4; i++) {
      okey[i] ^= 0x5C;
      ikey[i] ^= 0x36;
    }

    var hmacbytes = hasher(okey.concat(hasher(ikey.concat(message), { asBytes: true })), { asBytes: true });

    return options && options.asBytes ? hmacbytes :
    options && options.asString ? Binary.bytesToString(hmacbytes) :
    util.bytesToHex(hmacbytes);

  };

})();

/***/ }),

/***/ 703:
/*!*************************************************************************!*\
  !*** C:/Users/luyus/Desktop/baoyun-mansion/utils/cryptojs/lib/MARC4.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function () {

  var C = typeof window === 'undefined' ? __webpack_require__(/*! ./Crypto */ 696).Crypto : window.Crypto;

  // Shortcuts
  var util = C.util,
  charenc = C.charenc,
  UTF8 = charenc.UTF8,
  Binary = charenc.Binary;

  var MARC4 = C.MARC4 = {

    /**
                           * Public API
                           */

    encrypt: function encrypt(message, password) {

      var

      // Convert to bytes
      m = UTF8.stringToBytes(message),

      // Generate random IV
      iv = util.randomBytes(16),

      // Generate key
      k = password.constructor == String ?
      // Derive key from passphrase
      C.PBKDF2(password, iv, 32, { asBytes: true }) :
      // else, assume byte array representing cryptographic key
      password;

      // Encrypt
      MARC4._marc4(m, k, 1536);

      // Return ciphertext
      return util.bytesToBase64(iv.concat(m));

    },

    decrypt: function decrypt(ciphertext, password) {

      var

      // Convert to bytes
      c = util.base64ToBytes(ciphertext),

      // Separate IV and message
      iv = c.splice(0, 16),

      // Generate key
      k = password.constructor == String ?
      // Derive key from passphrase
      C.PBKDF2(password, iv, 32, { asBytes: true }) :
      // else, assume byte array representing cryptographic key
      password;

      // Decrypt
      MARC4._marc4(c, k, 1536);

      // Return plaintext
      return UTF8.bytesToString(c);

    },


    /**
        * Internal methods
        */

    // The core
    _marc4: function _marc4(m, k, drop) {

      // State variables
      var i, j, s, temp;

      // Key setup
      for (i = 0, s = []; i < 256; i++) {s[i] = i;}
      for (i = 0, j = 0; i < 256; i++) {

        j = (j + s[i] + k[i % k.length]) % 256;

        // Swap
        temp = s[i];
        s[i] = s[j];
        s[j] = temp;

      }

      // Clear counters
      i = j = 0;

      // Encryption
      for (var k = -drop; k < m.length; k++) {

        i = (i + 1) % 256;
        j = (j + s[i]) % 256;

        // Swap
        temp = s[i];
        s[i] = s[j];
        s[j] = temp;

        // Stop here if we're still dropping keystream
        if (k < 0) continue;

        // Encrypt
        m[k] ^= s[(s[i] + s[j]) % 256];

      }

    } };



})();

/***/ }),

/***/ 704:
/*!***********************************************************************!*\
  !*** C:/Users/luyus/Desktop/baoyun-mansion/utils/cryptojs/lib/MD5.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function () {

  var C = typeof window === 'undefined' ? __webpack_require__(/*! ./Crypto */ 696).Crypto : window.Crypto;

  // Shortcuts
  var util = C.util,
  charenc = C.charenc,
  UTF8 = charenc.UTF8,
  Binary = charenc.Binary;

  // Public API
  var MD5 = C.MD5 = function (message, options) {
    var digestbytes = util.wordsToBytes(MD5._md5(message));
    return options && options.asBytes ? digestbytes :
    options && options.asString ? Binary.bytesToString(digestbytes) :
    util.bytesToHex(digestbytes);
  };

  // The core
  MD5._md5 = function (message) {

    // Convert to byte array
    if (message.constructor == String) message = UTF8.stringToBytes(message);
    /* else, assume byte array already */

    var m = util.bytesToWords(message),
    l = message.length * 8,
    a = 1732584193,
    b = -271733879,
    c = -1732584194,
    d = 271733878;

    // Swap endian
    for (var i = 0; i < m.length; i++) {
      m[i] = (m[i] << 8 | m[i] >>> 24) & 0x00FF00FF |
      (m[i] << 24 | m[i] >>> 8) & 0xFF00FF00;
    }

    // Padding
    m[l >>> 5] |= 0x80 << l % 32;
    m[(l + 64 >>> 9 << 4) + 14] = l;

    // Method shortcuts
    var FF = MD5._ff,
    GG = MD5._gg,
    HH = MD5._hh,
    II = MD5._ii;

    for (var i = 0; i < m.length; i += 16) {

      var aa = a,
      bb = b,
      cc = c,
      dd = d;

      a = FF(a, b, c, d, m[i + 0], 7, -680876936);
      d = FF(d, a, b, c, m[i + 1], 12, -389564586);
      c = FF(c, d, a, b, m[i + 2], 17, 606105819);
      b = FF(b, c, d, a, m[i + 3], 22, -1044525330);
      a = FF(a, b, c, d, m[i + 4], 7, -176418897);
      d = FF(d, a, b, c, m[i + 5], 12, 1200080426);
      c = FF(c, d, a, b, m[i + 6], 17, -1473231341);
      b = FF(b, c, d, a, m[i + 7], 22, -45705983);
      a = FF(a, b, c, d, m[i + 8], 7, 1770035416);
      d = FF(d, a, b, c, m[i + 9], 12, -1958414417);
      c = FF(c, d, a, b, m[i + 10], 17, -42063);
      b = FF(b, c, d, a, m[i + 11], 22, -1990404162);
      a = FF(a, b, c, d, m[i + 12], 7, 1804603682);
      d = FF(d, a, b, c, m[i + 13], 12, -40341101);
      c = FF(c, d, a, b, m[i + 14], 17, -1502002290);
      b = FF(b, c, d, a, m[i + 15], 22, 1236535329);

      a = GG(a, b, c, d, m[i + 1], 5, -165796510);
      d = GG(d, a, b, c, m[i + 6], 9, -1069501632);
      c = GG(c, d, a, b, m[i + 11], 14, 643717713);
      b = GG(b, c, d, a, m[i + 0], 20, -373897302);
      a = GG(a, b, c, d, m[i + 5], 5, -701558691);
      d = GG(d, a, b, c, m[i + 10], 9, 38016083);
      c = GG(c, d, a, b, m[i + 15], 14, -660478335);
      b = GG(b, c, d, a, m[i + 4], 20, -405537848);
      a = GG(a, b, c, d, m[i + 9], 5, 568446438);
      d = GG(d, a, b, c, m[i + 14], 9, -1019803690);
      c = GG(c, d, a, b, m[i + 3], 14, -187363961);
      b = GG(b, c, d, a, m[i + 8], 20, 1163531501);
      a = GG(a, b, c, d, m[i + 13], 5, -1444681467);
      d = GG(d, a, b, c, m[i + 2], 9, -51403784);
      c = GG(c, d, a, b, m[i + 7], 14, 1735328473);
      b = GG(b, c, d, a, m[i + 12], 20, -1926607734);

      a = HH(a, b, c, d, m[i + 5], 4, -378558);
      d = HH(d, a, b, c, m[i + 8], 11, -2022574463);
      c = HH(c, d, a, b, m[i + 11], 16, 1839030562);
      b = HH(b, c, d, a, m[i + 14], 23, -35309556);
      a = HH(a, b, c, d, m[i + 1], 4, -1530992060);
      d = HH(d, a, b, c, m[i + 4], 11, 1272893353);
      c = HH(c, d, a, b, m[i + 7], 16, -155497632);
      b = HH(b, c, d, a, m[i + 10], 23, -1094730640);
      a = HH(a, b, c, d, m[i + 13], 4, 681279174);
      d = HH(d, a, b, c, m[i + 0], 11, -358537222);
      c = HH(c, d, a, b, m[i + 3], 16, -722521979);
      b = HH(b, c, d, a, m[i + 6], 23, 76029189);
      a = HH(a, b, c, d, m[i + 9], 4, -640364487);
      d = HH(d, a, b, c, m[i + 12], 11, -421815835);
      c = HH(c, d, a, b, m[i + 15], 16, 530742520);
      b = HH(b, c, d, a, m[i + 2], 23, -995338651);

      a = II(a, b, c, d, m[i + 0], 6, -198630844);
      d = II(d, a, b, c, m[i + 7], 10, 1126891415);
      c = II(c, d, a, b, m[i + 14], 15, -1416354905);
      b = II(b, c, d, a, m[i + 5], 21, -57434055);
      a = II(a, b, c, d, m[i + 12], 6, 1700485571);
      d = II(d, a, b, c, m[i + 3], 10, -1894986606);
      c = II(c, d, a, b, m[i + 10], 15, -1051523);
      b = II(b, c, d, a, m[i + 1], 21, -2054922799);
      a = II(a, b, c, d, m[i + 8], 6, 1873313359);
      d = II(d, a, b, c, m[i + 15], 10, -30611744);
      c = II(c, d, a, b, m[i + 6], 15, -1560198380);
      b = II(b, c, d, a, m[i + 13], 21, 1309151649);
      a = II(a, b, c, d, m[i + 4], 6, -145523070);
      d = II(d, a, b, c, m[i + 11], 10, -1120210379);
      c = II(c, d, a, b, m[i + 2], 15, 718787259);
      b = II(b, c, d, a, m[i + 9], 21, -343485551);

      a = a + aa >>> 0;
      b = b + bb >>> 0;
      c = c + cc >>> 0;
      d = d + dd >>> 0;

    }

    return util.endian([a, b, c, d]);

  };

  // Auxiliary functions
  MD5._ff = function (a, b, c, d, x, s, t) {
    var n = a + (b & c | ~b & d) + (x >>> 0) + t;
    return (n << s | n >>> 32 - s) + b;
  };
  MD5._gg = function (a, b, c, d, x, s, t) {
    var n = a + (b & d | c & ~d) + (x >>> 0) + t;
    return (n << s | n >>> 32 - s) + b;
  };
  MD5._hh = function (a, b, c, d, x, s, t) {
    var n = a + (b ^ c ^ d) + (x >>> 0) + t;
    return (n << s | n >>> 32 - s) + b;
  };
  MD5._ii = function (a, b, c, d, x, s, t) {
    var n = a + (c ^ (b | ~d)) + (x >>> 0) + t;
    return (n << s | n >>> 32 - s) + b;
  };

  // Package private blocksize
  MD5._blocksize = 16;

  MD5._digestsize = 16;

})();

/***/ }),

/***/ 705:
/*!**************************************************************************!*\
  !*** C:/Users/luyus/Desktop/baoyun-mansion/utils/cryptojs/lib/PBKDF2.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function () {

  var C = typeof window === 'undefined' ? __webpack_require__(/*! ./Crypto */ 696).Crypto : window.Crypto;

  // Shortcuts
  var util = C.util,
  charenc = C.charenc,
  UTF8 = charenc.UTF8,
  Binary = charenc.Binary;

  C.PBKDF2 = function (password, salt, keylen, options) {

    // Convert to byte arrays
    if (password.constructor == String) password = UTF8.stringToBytes(password);
    if (salt.constructor == String) salt = UTF8.stringToBytes(salt);
    /* else, assume byte arrays already */

    // Defaults
    var hasher = options && options.hasher || C.SHA1,
    iterations = options && options.iterations || 1;

    // Pseudo-random function
    function PRF(password, salt) {
      return C.HMAC(hasher, salt, password, { asBytes: true });
    }

    // Generate key
    var derivedKeyBytes = [],
    blockindex = 1;
    while (derivedKeyBytes.length < keylen) {
      var block = PRF(password, salt.concat(util.wordsToBytes([blockindex])));
      for (var u = block, i = 1; i < iterations; i++) {
        u = PRF(password, u);
        for (var j = 0; j < block.length; j++) {block[j] ^= u[j];}
      }
      derivedKeyBytes = derivedKeyBytes.concat(block);
      blockindex++;
    }

    // Truncate excess bytes
    derivedKeyBytes.length = keylen;

    return options && options.asBytes ? derivedKeyBytes :
    options && options.asString ? Binary.bytesToString(derivedKeyBytes) :
    util.bytesToHex(derivedKeyBytes);

  };

})();

/***/ }),

/***/ 706:
/*!*******************************************************************************!*\
  !*** C:/Users/luyus/Desktop/baoyun-mansion/utils/cryptojs/lib/PBKDF2Async.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {(function () {

  var C = typeof window === 'undefined' ? __webpack_require__(/*! ./Crypto */ 696).Crypto : window.Crypto;

  // Shortcuts
  var util = C.util,
  charenc = C.charenc,
  UTF8 = charenc.UTF8,
  Binary = charenc.Binary;

  if (!C.nextTick) {
    // node.js has setTime out but prefer process.nextTick
    if (typeof process != 'undefined' && typeof process.nextTick !== 'undefined') {
      C.nextTick = process.nextTick;
    } else if (typeof setTimeout !== 'undefined') {
      C.nextTick = function (callback) {
        setTimeout(callback, 0);
      };
    }
  }

  C.PBKDF2Async = function (password, salt, keylen, callback, options) {

    // Convert to byte arrays
    if (password.constructor == String) password = UTF8.stringToBytes(password);
    if (salt.constructor == String) salt = UTF8.stringToBytes(salt);
    /* else, assume byte arrays already */

    // Defaults
    var hasher = options && options.hasher || C.SHA1,
    iterations = options && options.iterations || 1;

    // Progress callback option
    var progressChangeHandler = options && options.onProgressChange;
    var totalIterations = Math.ceil(keylen / hasher._digestsize) * iterations;
    function fireProgressChange(currentIteration) {
      if (progressChangeHandler) {
        var iterationsSoFar = derivedKeyBytes.length / hasher._digestsize * iterations + currentIteration;
        setTimeout(function () {
          progressChangeHandler(Math.round(iterationsSoFar / totalIterations * 100));
        }, 0);
      }
    }

    // Pseudo-random function
    function PRF(password, salt) {
      return C.HMAC(hasher, salt, password, { asBytes: true });
    }

    var nextTick = C.nextTick;

    // Generate key
    var derivedKeyBytes = [],
    blockindex = 1;

    var _outer, _inner;
    nextTick(_outer = function outer() {
      if (derivedKeyBytes.length < keylen) {
        var block = PRF(password, salt.concat(util.wordsToBytes([blockindex])));
        fireProgressChange(1);

        var u = block,i = 1;
        nextTick(_inner = function inner() {
          if (i < iterations) {
            u = PRF(password, u);
            for (var j = 0; j < block.length; j++) {block[j] ^= u[j];}
            i++;
            fireProgressChange(i);

            nextTick(_inner);
          } else {
            derivedKeyBytes = derivedKeyBytes.concat(block);
            blockindex++;
            nextTick(_outer);
          }
        });
      } else {
        // Truncate excess bytes
        derivedKeyBytes.length = keylen;
        callback(
        options && options.asBytes ? derivedKeyBytes :
        options && options.asString ? Binary.bytesToString(derivedKeyBytes) :
        util.bytesToHex(derivedKeyBytes));
      }
    });
  };

})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/node-libs-browser/mock/process.js */ 707)))

/***/ }),

/***/ 707:
/*!********************************************************!*\
  !*** ./node_modules/node-libs-browser/mock/process.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports.nextTick = function nextTick(fn) {
    var args = Array.prototype.slice.call(arguments);
    args.shift();
    setTimeout(function () {
        fn.apply(null, args);
    }, 0);
};

exports.platform = exports.arch = 
exports.execPath = exports.title = 'browser';
exports.pid = 1;
exports.browser = true;
exports.env = {};
exports.argv = [];

exports.binding = function (name) {
	throw new Error('No such module. (Possibly not yet loaded)')
};

(function () {
    var cwd = '/';
    var path;
    exports.cwd = function () { return cwd };
    exports.chdir = function (dir) {
        if (!path) path = __webpack_require__(/*! path */ 708);
        cwd = path.resolve(dir, cwd);
    };
})();

exports.exit = exports.kill = 
exports.umask = exports.dlopen = 
exports.uptime = exports.memoryUsage = 
exports.uvCounters = function() {};
exports.features = {};


/***/ }),

/***/ 708:
/*!***********************************************!*\
  !*** ./node_modules/path-browserify/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// .dirname, .basename, and .extname methods are extracted from Node.js v8.11.1,
// backported and transplited with Babel, with backwards-compat fixes

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// resolves . and .. elements in a path array with directory names there
// must be no slashes, empty elements, or device names (c:\) in the array
// (so also no leading and trailing slashes - it does not distinguish
// relative and absolute paths)
function normalizeArray(parts, allowAboveRoot) {
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = parts.length - 1; i >= 0; i--) {
    var last = parts[i];
    if (last === '.') {
      parts.splice(i, 1);
    } else if (last === '..') {
      parts.splice(i, 1);
      up++;
    } else if (up) {
      parts.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (allowAboveRoot) {
    for (; up--; up) {
      parts.unshift('..');
    }
  }

  return parts;
}

// path.resolve([from ...], to)
// posix version
exports.resolve = function() {
  var resolvedPath = '',
      resolvedAbsolute = false;

  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    var path = (i >= 0) ? arguments[i] : process.cwd();

    // Skip empty and invalid entries
    if (typeof path !== 'string') {
      throw new TypeError('Arguments to path.resolve must be strings');
    } else if (!path) {
      continue;
    }

    resolvedPath = path + '/' + resolvedPath;
    resolvedAbsolute = path.charAt(0) === '/';
  }

  // At this point the path should be resolved to a full absolute path, but
  // handle relative paths to be safe (might happen when process.cwd() fails)

  // Normalize the path
  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
    return !!p;
  }), !resolvedAbsolute).join('/');

  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
};

// path.normalize(path)
// posix version
exports.normalize = function(path) {
  var isAbsolute = exports.isAbsolute(path),
      trailingSlash = substr(path, -1) === '/';

  // Normalize the path
  path = normalizeArray(filter(path.split('/'), function(p) {
    return !!p;
  }), !isAbsolute).join('/');

  if (!path && !isAbsolute) {
    path = '.';
  }
  if (path && trailingSlash) {
    path += '/';
  }

  return (isAbsolute ? '/' : '') + path;
};

// posix version
exports.isAbsolute = function(path) {
  return path.charAt(0) === '/';
};

// posix version
exports.join = function() {
  var paths = Array.prototype.slice.call(arguments, 0);
  return exports.normalize(filter(paths, function(p, index) {
    if (typeof p !== 'string') {
      throw new TypeError('Arguments to path.join must be strings');
    }
    return p;
  }).join('/'));
};


// path.relative(from, to)
// posix version
exports.relative = function(from, to) {
  from = exports.resolve(from).substr(1);
  to = exports.resolve(to).substr(1);

  function trim(arr) {
    var start = 0;
    for (; start < arr.length; start++) {
      if (arr[start] !== '') break;
    }

    var end = arr.length - 1;
    for (; end >= 0; end--) {
      if (arr[end] !== '') break;
    }

    if (start > end) return [];
    return arr.slice(start, end - start + 1);
  }

  var fromParts = trim(from.split('/'));
  var toParts = trim(to.split('/'));

  var length = Math.min(fromParts.length, toParts.length);
  var samePartsLength = length;
  for (var i = 0; i < length; i++) {
    if (fromParts[i] !== toParts[i]) {
      samePartsLength = i;
      break;
    }
  }

  var outputParts = [];
  for (var i = samePartsLength; i < fromParts.length; i++) {
    outputParts.push('..');
  }

  outputParts = outputParts.concat(toParts.slice(samePartsLength));

  return outputParts.join('/');
};

exports.sep = '/';
exports.delimiter = ':';

exports.dirname = function (path) {
  if (typeof path !== 'string') path = path + '';
  if (path.length === 0) return '.';
  var code = path.charCodeAt(0);
  var hasRoot = code === 47 /*/*/;
  var end = -1;
  var matchedSlash = true;
  for (var i = path.length - 1; i >= 1; --i) {
    code = path.charCodeAt(i);
    if (code === 47 /*/*/) {
        if (!matchedSlash) {
          end = i;
          break;
        }
      } else {
      // We saw the first non-path separator
      matchedSlash = false;
    }
  }

  if (end === -1) return hasRoot ? '/' : '.';
  if (hasRoot && end === 1) {
    // return '//';
    // Backwards-compat fix:
    return '/';
  }
  return path.slice(0, end);
};

function basename(path) {
  if (typeof path !== 'string') path = path + '';

  var start = 0;
  var end = -1;
  var matchedSlash = true;
  var i;

  for (i = path.length - 1; i >= 0; --i) {
    if (path.charCodeAt(i) === 47 /*/*/) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          start = i + 1;
          break;
        }
      } else if (end === -1) {
      // We saw the first non-path separator, mark this as the end of our
      // path component
      matchedSlash = false;
      end = i + 1;
    }
  }

  if (end === -1) return '';
  return path.slice(start, end);
}

// Uses a mixed approach for backwards-compatibility, as ext behavior changed
// in new Node.js versions, so only basename() above is backported here
exports.basename = function (path, ext) {
  var f = basename(path);
  if (ext && f.substr(-1 * ext.length) === ext) {
    f = f.substr(0, f.length - ext.length);
  }
  return f;
};

exports.extname = function (path) {
  if (typeof path !== 'string') path = path + '';
  var startDot = -1;
  var startPart = 0;
  var end = -1;
  var matchedSlash = true;
  // Track the state of characters (if any) we see before our first dot and
  // after any path separator we find
  var preDotState = 0;
  for (var i = path.length - 1; i >= 0; --i) {
    var code = path.charCodeAt(i);
    if (code === 47 /*/*/) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          startPart = i + 1;
          break;
        }
        continue;
      }
    if (end === -1) {
      // We saw the first non-path separator, mark this as the end of our
      // extension
      matchedSlash = false;
      end = i + 1;
    }
    if (code === 46 /*.*/) {
        // If this is our first dot, mark it as the start of our extension
        if (startDot === -1)
          startDot = i;
        else if (preDotState !== 1)
          preDotState = 1;
    } else if (startDot !== -1) {
      // We saw a non-dot and non-path separator before our dot, so we should
      // have a good chance at having a non-empty extension
      preDotState = -1;
    }
  }

  if (startDot === -1 || end === -1 ||
      // We saw a non-dot character immediately before the dot
      preDotState === 0 ||
      // The (right-most) trimmed path component is exactly '..'
      preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
    return '';
  }
  return path.slice(startDot, end);
};

function filter (xs, f) {
    if (xs.filter) return xs.filter(f);
    var res = [];
    for (var i = 0; i < xs.length; i++) {
        if (f(xs[i], i, xs)) res.push(xs[i]);
    }
    return res;
}

// String.prototype.substr - negative index don't work in IE8
var substr = 'ab'.substr(-1) === 'b'
    ? function (str, start, len) { return str.substr(start, len) }
    : function (str, start, len) {
        if (start < 0) start = str.length + start;
        return str.substr(start, len);
    }
;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node-libs-browser/mock/process.js */ 707)))

/***/ }),

/***/ 709:
/*!**************************************************************************!*\
  !*** C:/Users/luyus/Desktop/baoyun-mansion/utils/cryptojs/lib/Rabbit.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function () {

  var C = typeof window === 'undefined' ? __webpack_require__(/*! ./Crypto */ 696).Crypto : window.Crypto;

  // Shortcuts
  var util = C.util,
  charenc = C.charenc,
  UTF8 = charenc.UTF8,
  Binary = charenc.Binary;

  // Inner state
  var x = [],
  c = [],
  b;

  var Rabbit = C.Rabbit = {

    /**
                             * Public API
                             */

    encrypt: function encrypt(message, password) {

      var

      // Convert to bytes
      m = UTF8.stringToBytes(message),

      // Generate random IV
      iv = util.randomBytes(8),

      // Generate key
      k = password.constructor == String ?
      // Derive key from passphrase
      C.PBKDF2(password, iv, 32, { asBytes: true }) :
      // else, assume byte array representing cryptographic key
      password;

      // Encrypt
      Rabbit._rabbit(m, k, util.bytesToWords(iv));

      // Return ciphertext
      return util.bytesToBase64(iv.concat(m));

    },

    decrypt: function decrypt(ciphertext, password) {

      var

      // Convert to bytes
      c = util.base64ToBytes(ciphertext),

      // Separate IV and message
      iv = c.splice(0, 8),

      // Generate key
      k = password.constructor == String ?
      // Derive key from passphrase
      C.PBKDF2(password, iv, 32, { asBytes: true }) :
      // else, assume byte array representing cryptographic key
      password;

      // Decrypt
      Rabbit._rabbit(c, k, util.bytesToWords(iv));

      // Return plaintext
      return UTF8.bytesToString(c);

    },


    /**
        * Internal methods
        */

    // Encryption/decryption scheme
    _rabbit: function _rabbit(m, k, iv) {

      Rabbit._keysetup(k);
      if (iv) Rabbit._ivsetup(iv);

      for (var s = [], i = 0; i < m.length; i++) {

        if (i % 16 == 0) {

          // Iterate the system
          Rabbit._nextstate();

          // Generate 16 bytes of pseudo-random data
          s[0] = x[0] ^ x[5] >>> 16 ^ x[3] << 16;
          s[1] = x[2] ^ x[7] >>> 16 ^ x[5] << 16;
          s[2] = x[4] ^ x[1] >>> 16 ^ x[7] << 16;
          s[3] = x[6] ^ x[3] >>> 16 ^ x[1] << 16;

          // Swap endian
          for (var j = 0; j < 4; j++) {
            s[j] = (s[j] << 8 | s[j] >>> 24) & 0x00FF00FF |
            (s[j] << 24 | s[j] >>> 8) & 0xFF00FF00;
          }

          // Convert words to bytes
          for (var b = 120; b >= 0; b -= 8) {
            s[b / 8] = s[b >>> 5] >>> 24 - b % 32 & 0xFF;}

        }

        m[i] ^= s[i % 16];

      }

    },

    // Key setup scheme
    _keysetup: function _keysetup(k) {

      // Generate initial state values
      x[0] = k[0];
      x[2] = k[1];
      x[4] = k[2];
      x[6] = k[3];
      x[1] = k[3] << 16 | k[2] >>> 16;
      x[3] = k[0] << 16 | k[3] >>> 16;
      x[5] = k[1] << 16 | k[0] >>> 16;
      x[7] = k[2] << 16 | k[1] >>> 16;

      // Generate initial counter values
      c[0] = util.rotl(k[2], 16);
      c[2] = util.rotl(k[3], 16);
      c[4] = util.rotl(k[0], 16);
      c[6] = util.rotl(k[1], 16);
      c[1] = k[0] & 0xFFFF0000 | k[1] & 0xFFFF;
      c[3] = k[1] & 0xFFFF0000 | k[2] & 0xFFFF;
      c[5] = k[2] & 0xFFFF0000 | k[3] & 0xFFFF;
      c[7] = k[3] & 0xFFFF0000 | k[0] & 0xFFFF;

      // Clear carry bit
      b = 0;

      // Iterate the system four times
      for (var i = 0; i < 4; i++) {Rabbit._nextstate();}

      // Modify the counters
      for (var i = 0; i < 8; i++) {c[i] ^= x[i + 4 & 7];}

    },

    // IV setup scheme
    _ivsetup: function _ivsetup(iv) {

      // Generate four subvectors
      var i0 = util.endian(iv[0]),
      i2 = util.endian(iv[1]),
      i1 = i0 >>> 16 | i2 & 0xFFFF0000,
      i3 = i2 << 16 | i0 & 0x0000FFFF;

      // Modify counter values
      c[0] ^= i0;
      c[1] ^= i1;
      c[2] ^= i2;
      c[3] ^= i3;
      c[4] ^= i0;
      c[5] ^= i1;
      c[6] ^= i2;
      c[7] ^= i3;

      // Iterate the system four times
      for (var i = 0; i < 4; i++) {Rabbit._nextstate();}

    },

    // Next-state function
    _nextstate: function _nextstate() {

      // Save old counter values
      for (var c_old = [], i = 0; i < 8; i++) {c_old[i] = c[i];}

      // Calculate new counter values
      c[0] = c[0] + 0x4D34D34D + b >>> 0;
      c[1] = c[1] + 0xD34D34D3 + (c[0] >>> 0 < c_old[0] >>> 0 ? 1 : 0) >>> 0;
      c[2] = c[2] + 0x34D34D34 + (c[1] >>> 0 < c_old[1] >>> 0 ? 1 : 0) >>> 0;
      c[3] = c[3] + 0x4D34D34D + (c[2] >>> 0 < c_old[2] >>> 0 ? 1 : 0) >>> 0;
      c[4] = c[4] + 0xD34D34D3 + (c[3] >>> 0 < c_old[3] >>> 0 ? 1 : 0) >>> 0;
      c[5] = c[5] + 0x34D34D34 + (c[4] >>> 0 < c_old[4] >>> 0 ? 1 : 0) >>> 0;
      c[6] = c[6] + 0x4D34D34D + (c[5] >>> 0 < c_old[5] >>> 0 ? 1 : 0) >>> 0;
      c[7] = c[7] + 0xD34D34D3 + (c[6] >>> 0 < c_old[6] >>> 0 ? 1 : 0) >>> 0;
      b = c[7] >>> 0 < c_old[7] >>> 0 ? 1 : 0;

      // Calculate the g-values
      for (var g = [], i = 0; i < 8; i++) {

        var gx = x[i] + c[i] >>> 0;

        // Construct high and low argument for squaring
        var ga = gx & 0xFFFF,
        gb = gx >>> 16;

        // Calculate high and low result of squaring
        var gh = ((ga * ga >>> 17) + ga * gb >>> 15) + gb * gb,
        gl = ((gx & 0xFFFF0000) * gx >>> 0) + ((gx & 0x0000FFFF) * gx >>> 0) >>> 0;

        // High XOR low
        g[i] = gh ^ gl;

      }

      // Calculate new state values
      x[0] = g[0] + (g[7] << 16 | g[7] >>> 16) + (g[6] << 16 | g[6] >>> 16);
      x[1] = g[1] + (g[0] << 8 | g[0] >>> 24) + g[7];
      x[2] = g[2] + (g[1] << 16 | g[1] >>> 16) + (g[0] << 16 | g[0] >>> 16);
      x[3] = g[3] + (g[2] << 8 | g[2] >>> 24) + g[1];
      x[4] = g[4] + (g[3] << 16 | g[3] >>> 16) + (g[2] << 16 | g[2] >>> 16);
      x[5] = g[5] + (g[4] << 8 | g[4] >>> 24) + g[3];
      x[6] = g[6] + (g[5] << 16 | g[5] >>> 16) + (g[4] << 16 | g[4] >>> 16);
      x[7] = g[7] + (g[6] << 8 | g[6] >>> 24) + g[5];

    } };



})();

/***/ }),

/***/ 710:
/*!************************************************************************!*\
  !*** C:/Users/luyus/Desktop/baoyun-mansion/utils/cryptojs/lib/SHA1.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function () {

  var C = typeof window === 'undefined' ? __webpack_require__(/*! ./Crypto */ 696).Crypto : window.Crypto;

  // Shortcuts
  var util = C.util,
  charenc = C.charenc,
  UTF8 = charenc.UTF8,
  Binary = charenc.Binary;

  // Public API
  var SHA1 = C.SHA1 = function (message, options) {
    var digestbytes = util.wordsToBytes(SHA1._sha1(message));
    return options && options.asBytes ? digestbytes :
    options && options.asString ? Binary.bytesToString(digestbytes) :
    util.bytesToHex(digestbytes);
  };

  // The core
  SHA1._sha1 = function (message) {

    // Convert to byte array
    if (message.constructor == String) message = UTF8.stringToBytes(message);
    /* else, assume byte array already */

    var m = util.bytesToWords(message),
    l = message.length * 8,
    w = [],
    H0 = 1732584193,
    H1 = -271733879,
    H2 = -1732584194,
    H3 = 271733878,
    H4 = -1009589776;

    // Padding
    m[l >> 5] |= 0x80 << 24 - l % 32;
    m[(l + 64 >>> 9 << 4) + 15] = l;

    for (var i = 0; i < m.length; i += 16) {

      var a = H0,
      b = H1,
      c = H2,
      d = H3,
      e = H4;

      for (var j = 0; j < 80; j++) {

        if (j < 16) w[j] = m[i + j];else
        {
          var n = w[j - 3] ^ w[j - 8] ^ w[j - 14] ^ w[j - 16];
          w[j] = n << 1 | n >>> 31;
        }

        var t = (H0 << 5 | H0 >>> 27) + H4 + (w[j] >>> 0) + (
        j < 20 ? (H1 & H2 | ~H1 & H3) + 1518500249 :
        j < 40 ? (H1 ^ H2 ^ H3) + 1859775393 :
        j < 60 ? (H1 & H2 | H1 & H3 | H2 & H3) - 1894007588 :
        (H1 ^ H2 ^ H3) - 899497514);

        H4 = H3;
        H3 = H2;
        H2 = H1 << 30 | H1 >>> 2;
        H1 = H0;
        H0 = t;

      }

      H0 += a;
      H1 += b;
      H2 += c;
      H3 += d;
      H4 += e;

    }

    return [H0, H1, H2, H3, H4];

  };

  // Package private blocksize
  SHA1._blocksize = 16;

  SHA1._digestsize = 20;

})();

/***/ }),

/***/ 711:
/*!**************************************************************************!*\
  !*** C:/Users/luyus/Desktop/baoyun-mansion/utils/cryptojs/lib/SHA256.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function () {

  var C = typeof window === 'undefined' ? __webpack_require__(/*! ./Crypto */ 696).Crypto : window.Crypto;

  // Shortcuts
  var util = C.util,
  charenc = C.charenc,
  UTF8 = charenc.UTF8,
  Binary = charenc.Binary;

  // Constants
  var K = [0x428A2F98, 0x71374491, 0xB5C0FBCF, 0xE9B5DBA5,
  0x3956C25B, 0x59F111F1, 0x923F82A4, 0xAB1C5ED5,
  0xD807AA98, 0x12835B01, 0x243185BE, 0x550C7DC3,
  0x72BE5D74, 0x80DEB1FE, 0x9BDC06A7, 0xC19BF174,
  0xE49B69C1, 0xEFBE4786, 0x0FC19DC6, 0x240CA1CC,
  0x2DE92C6F, 0x4A7484AA, 0x5CB0A9DC, 0x76F988DA,
  0x983E5152, 0xA831C66D, 0xB00327C8, 0xBF597FC7,
  0xC6E00BF3, 0xD5A79147, 0x06CA6351, 0x14292967,
  0x27B70A85, 0x2E1B2138, 0x4D2C6DFC, 0x53380D13,
  0x650A7354, 0x766A0ABB, 0x81C2C92E, 0x92722C85,
  0xA2BFE8A1, 0xA81A664B, 0xC24B8B70, 0xC76C51A3,
  0xD192E819, 0xD6990624, 0xF40E3585, 0x106AA070,
  0x19A4C116, 0x1E376C08, 0x2748774C, 0x34B0BCB5,
  0x391C0CB3, 0x4ED8AA4A, 0x5B9CCA4F, 0x682E6FF3,
  0x748F82EE, 0x78A5636F, 0x84C87814, 0x8CC70208,
  0x90BEFFFA, 0xA4506CEB, 0xBEF9A3F7, 0xC67178F2];

  // Public API
  var SHA256 = C.SHA256 = function (message, options) {
    var digestbytes = util.wordsToBytes(SHA256._sha256(message));
    return options && options.asBytes ? digestbytes :
    options && options.asString ? Binary.bytesToString(digestbytes) :
    util.bytesToHex(digestbytes);
  };

  // The core
  SHA256._sha256 = function (message) {

    // Convert to byte array
    if (message.constructor == String) message = UTF8.stringToBytes(message);
    /* else, assume byte array already */

    var m = util.bytesToWords(message),
    l = message.length * 8,
    H = [0x6A09E667, 0xBB67AE85, 0x3C6EF372, 0xA54FF53A,
    0x510E527F, 0x9B05688C, 0x1F83D9AB, 0x5BE0CD19],
    w = [],
    a,b,c,d,e,f,g,h,i,j,
    t1,t2;

    // Padding
    m[l >> 5] |= 0x80 << 24 - l % 32;
    m[(l + 64 >> 9 << 4) + 15] = l;

    for (var i = 0; i < m.length; i += 16) {

      a = H[0];
      b = H[1];
      c = H[2];
      d = H[3];
      e = H[4];
      f = H[5];
      g = H[6];
      h = H[7];

      for (var j = 0; j < 64; j++) {

        if (j < 16) w[j] = m[j + i];else
        {

          var gamma0x = w[j - 15],
          gamma1x = w[j - 2],
          gamma0 = (gamma0x << 25 | gamma0x >>> 7) ^ (
          gamma0x << 14 | gamma0x >>> 18) ^
          gamma0x >>> 3,
          gamma1 = (gamma1x << 15 | gamma1x >>> 17) ^ (
          gamma1x << 13 | gamma1x >>> 19) ^
          gamma1x >>> 10;

          w[j] = gamma0 + (w[j - 7] >>> 0) +
          gamma1 + (w[j - 16] >>> 0);

        }

        var ch = e & f ^ ~e & g,
        maj = a & b ^ a & c ^ b & c,
        sigma0 = (a << 30 | a >>> 2) ^ (
        a << 19 | a >>> 13) ^ (
        a << 10 | a >>> 22),
        sigma1 = (e << 26 | e >>> 6) ^ (
        e << 21 | e >>> 11) ^ (
        e << 7 | e >>> 25);


        t1 = (h >>> 0) + sigma1 + ch + K[j] + (w[j] >>> 0);
        t2 = sigma0 + maj;

        h = g;
        g = f;
        f = e;
        e = d + t1 >>> 0;
        d = c;
        c = b;
        b = a;
        a = t1 + t2 >>> 0;

      }

      H[0] += a;
      H[1] += b;
      H[2] += c;
      H[3] += d;
      H[4] += e;
      H[5] += f;
      H[6] += g;
      H[7] += h;

    }

    return H;

  };

  // Package private blocksize
  SHA256._blocksize = 16;

  SHA256._digestsize = 32;

})();

/***/ }),

/***/ 740:
/*!**********************************************************************************************!*\
  !*** C:/Users/luyus/Desktop/baoyun-mansion/uview-ui/components/u-parse/libs/MpHtmlParser.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(uni) {/**
 * html 解析器
 * @tutorial https://github.com/jin-yufeng/Parser
 * @version 20201029
 * @author JinYufeng
 * @listens MIT
 */
var cfg = __webpack_require__(/*! ./config.js */ 741),
blankChar = cfg.blankChar,
CssHandler = __webpack_require__(/*! ./CssHandler.js */ 742),
windowWidth = uni.getSystemInfoSync().windowWidth;
var emoji;

function MpHtmlParser(data) {var _this = this;var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  this.attrs = {};
  this.CssHandler = new CssHandler(options.tagStyle, windowWidth);
  this.data = data;
  this.domain = options.domain;
  this.DOM = [];
  this.i = this.start = this.audioNum = this.imgNum = this.videoNum = 0;
  options.prot = (this.domain || '').includes('://') ? this.domain.split('://')[0] : 'http';
  this.options = options;
  this.state = this.Text;
  this.STACK = [];
  // 工具函数
  this.bubble = function () {
    for (var i = _this.STACK.length, item; item = _this.STACK[--i];) {
      if (cfg.richOnlyTags[item.name]) return false;
      item.c = 1;
    }
    return true;
  };
  this.decode = function (val, amp) {
    var i = -1,
    j,en;
    while (1) {
      if ((i = val.indexOf('&', i + 1)) == -1) break;
      if ((j = val.indexOf(';', i + 2)) == -1) break;
      if (val[i + 1] == '#') {
        en = parseInt((val[i + 2] == 'x' ? '0' : '') + val.substring(i + 2, j));
        if (!isNaN(en)) val = val.substr(0, i) + String.fromCharCode(en) + val.substr(j + 1);
      } else {
        en = val.substring(i + 1, j);
        if (cfg.entities[en] || en == amp)
        val = val.substr(0, i) + (cfg.entities[en] || '&') + val.substr(j + 1);
      }
    }
    return val;
  };
  this.getUrl = function (url) {
    if (url[0] == '/') {
      if (url[1] == '/') url = _this.options.prot + ':' + url;else
      if (_this.domain) url = _this.domain + url;
    } else if (_this.domain && url.indexOf('data:') != 0 && !url.includes('://'))
    url = _this.domain + '/' + url;
    return url;
  };
  this.isClose = function () {return _this.data[_this.i] == '>' || _this.data[_this.i] == '/' && _this.data[_this.i + 1] == '>';};
  this.section = function () {return _this.data.substring(_this.start, _this.i);};
  this.parent = function () {return _this.STACK[_this.STACK.length - 1];};
  this.siblings = function () {return _this.STACK.length ? _this.parent().children : _this.DOM;};
}
MpHtmlParser.prototype.parse = function () {
  if (emoji) this.data = emoji.parseEmoji(this.data);
  for (var c; c = this.data[this.i]; this.i++) {
    this.state(c);}
  if (this.state == this.Text) this.setText();
  while (this.STACK.length) {this.popNode(this.STACK.pop());}
  return this.DOM;
};
// 设置属性
MpHtmlParser.prototype.setAttr = function () {
  var name = this.attrName.toLowerCase(),
  val = this.attrVal;
  if (cfg.boolAttrs[name]) this.attrs[name] = 'T';else
  if (val) {
    if (name == 'src' || name == 'data-src' && !this.attrs.src) this.attrs.src = this.getUrl(this.decode(val, 'amp'));else
    if (name == 'href' || name == 'style') this.attrs[name] = this.decode(val, 'amp');else
    if (name.substr(0, 5) != 'data-') this.attrs[name] = val;
  }
  this.attrVal = '';
  while (blankChar[this.data[this.i]]) {this.i++;}
  if (this.isClose()) this.setNode();else
  {
    this.start = this.i;
    this.state = this.AttrName;
  }
};
// 设置文本节点
MpHtmlParser.prototype.setText = function () {
  var back,text = this.section();
  if (!text) return;
  text = cfg.onText && cfg.onText(text, function () {return back = true;}) || text;
  if (back) {
    this.data = this.data.substr(0, this.start) + text + this.data.substr(this.i);
    var j = this.start + text.length;
    for (this.i = this.start; this.i < j; this.i++) {this.state(this.data[this.i]);}
    return;
  }
  if (!this.pre) {
    // 合并空白符
    var flag,tmp = [];
    for (var i = text.length, c; c = text[--i];) {
      if (!blankChar[c]) {
        tmp.unshift(c);
        if (!flag) flag = 1;
      } else {
        if (tmp[0] != ' ') tmp.unshift(' ');
        if (c == '\n' && flag == void 0) flag = 0;
      }}
    if (flag == 0) return;
    text = tmp.join('');
  }
  this.siblings().push({
    type: 'text',
    text: this.decode(text) });

};
// 设置元素节点
MpHtmlParser.prototype.setNode = function () {
  var node = {
    name: this.tagName.toLowerCase(),
    attrs: this.attrs },

  close = cfg.selfClosingTags[node.name];
  if (this.options.nodes.length) node.type = 'node';
  this.attrs = {};
  if (!cfg.ignoreTags[node.name]) {
    // 处理属性
    var attrs = node.attrs,
    style = this.CssHandler.match(node.name, attrs, node) + (attrs.style || ''),
    styleObj = {};
    if (attrs.id) {
      if (this.options.compress & 1) attrs.id = void 0;else
      if (this.options.useAnchor) this.bubble();
    }
    if (this.options.compress & 2 && attrs.class) attrs.class = void 0;
    switch (node.name) {
      case 'a':
      case 'ad':


        this.bubble();
        break;
      case 'font':
        if (attrs.color) {
          styleObj['color'] = attrs.color;
          attrs.color = void 0;
        }
        if (attrs.face) {
          styleObj['font-family'] = attrs.face;
          attrs.face = void 0;
        }
        if (attrs.size) {
          var size = parseInt(attrs.size);
          if (size < 1) size = 1;else
          if (size > 7) size = 7;
          var map = ['xx-small', 'x-small', 'small', 'medium', 'large', 'x-large', 'xx-large'];
          styleObj['font-size'] = map[size - 1];
          attrs.size = void 0;
        }
        break;
      case 'embed':

        var src = node.attrs.src || '',
        type = node.attrs.type || '';
        if (type.includes('video') || src.includes('.mp4') || src.includes('.3gp') || src.includes('.m3u8'))
        node.name = 'video';else
        if (type.includes('audio') || src.includes('.m4a') || src.includes('.wav') || src.includes('.mp3') || src.includes(
        '.aac'))
        node.name = 'audio';else
        break;
        if (node.attrs.autostart)
        node.attrs.autoplay = 'T';
        node.attrs.controls = 'T';





      case 'video':
      case 'audio':
        if (!attrs.id) attrs.id = node.name + ++this["".concat(node.name, "Num")];else
        this["".concat(node.name, "Num")]++;
        if (node.name == 'video') {
          if (this.videoNum > 3)
          node.lazyLoad = 1;
          if (attrs.width) {
            styleObj.width = parseFloat(attrs.width) + (attrs.width.includes('%') ? '%' : 'px');
            attrs.width = void 0;
          }
          if (attrs.height) {
            styleObj.height = parseFloat(attrs.height) + (attrs.height.includes('%') ? '%' : 'px');
            attrs.height = void 0;
          }
        }
        if (!attrs.controls && !attrs.autoplay) attrs.controls = 'T';
        attrs.source = [];
        if (attrs.src) {
          attrs.source.push(attrs.src);
          attrs.src = void 0;
        }
        this.bubble();
        break;
      case 'td':
      case 'th':
        if (attrs.colspan || attrs.rowspan)
        for (var k = this.STACK.length, item; item = this.STACK[--k];) {
          if (item.name == 'table') {
            item.flag = 1;
            break;
          }}}

    if (attrs.align) {
      if (node.name == 'table') {
        if (attrs.align == 'center') styleObj['margin-inline-start'] = styleObj['margin-inline-end'] = 'auto';else
        styleObj['float'] = attrs.align;
      } else styleObj['text-align'] = attrs.align;
      attrs.align = void 0;
    }
    // 压缩 style
    var styles = style.split(';');
    style = '';
    for (var i = 0, len = styles.length; i < len; i++) {
      var info = styles[i].split(':');
      if (info.length < 2) continue;
      var _key = info[0].trim().toLowerCase(),
      _value = info.slice(1).join(':').trim();
      if (_value[0] == '-' || _value.includes('safe'))
      style += ";".concat(_key, ":").concat(_value);else
      if (!styleObj[_key] || _value.includes('import') || !styleObj[_key].includes('import'))
      styleObj[_key] = _value;
    }
    if (node.name == 'img') {
      if (attrs.src && !attrs.ignore) {
        if (this.bubble())
        attrs.i = (this.imgNum++).toString();else
        attrs.ignore = 'T';
      }
      if (attrs.ignore) {
        style += ';-webkit-touch-callout:none';
        styleObj['max-width'] = '100%';
      }
      var width;
      if (styleObj.width) width = styleObj.width;else
      if (attrs.width) width = attrs.width.includes('%') ? attrs.width : parseFloat(attrs.width) + 'px';
      if (width) {
        styleObj.width = width;
        attrs.width = '100%';
        if (parseInt(width) > windowWidth) {
          styleObj.height = '';
          if (attrs.height) attrs.height = void 0;
        }
      }
      if (styleObj.height) {
        attrs.height = styleObj.height;
        styleObj.height = '';
      } else if (attrs.height && !attrs.height.includes('%'))
      attrs.height = parseFloat(attrs.height) + 'px';
    }
    for (var key in styleObj) {
      var value = styleObj[key];
      if (!value) continue;
      if (key.includes('flex') || key == 'order' || key == 'self-align') node.c = 1;
      // 填充链接
      if (value.includes('url')) {
        var j = value.indexOf('(');
        if (j++ != -1) {
          while (value[j] == '"' || value[j] == "'" || blankChar[value[j]]) {j++;}
          value = value.substr(0, j) + this.getUrl(value.substr(j));
        }
      }
      // 转换 rpx
      else if (value.includes('rpx'))
        value = value.replace(/[0-9.]+\s*rpx/g, function ($) {return parseFloat($) * windowWidth / 750 + 'px';});else
        if (key == 'white-space' && value.includes('pre') && !close)
        this.pre = node.pre = true;
      style += ";".concat(key, ":").concat(value);
    }
    style = style.substr(1);
    if (style) attrs.style = style;
    if (!close) {
      node.children = [];
      if (node.name == 'pre' && cfg.highlight) {
        this.remove(node);
        this.pre = node.pre = true;
      }
      this.siblings().push(node);
      this.STACK.push(node);
    } else if (!cfg.filter || cfg.filter(node, this) != false)
    this.siblings().push(node);
  } else {
    if (!close) this.remove(node);else
    if (node.name == 'source') {
      var parent = this.parent();
      if (parent && (parent.name == 'video' || parent.name == 'audio') && node.attrs.src)
      parent.attrs.source.push(node.attrs.src);
    } else if (node.name == 'base' && !this.domain) this.domain = node.attrs.href;
  }
  if (this.data[this.i] == '/') this.i++;
  this.start = this.i + 1;
  this.state = this.Text;
};
// 移除标签
MpHtmlParser.prototype.remove = function (node) {var _this2 = this;
  var name = node.name,
  j = this.i;
  // 处理 svg
  var handleSvg = function handleSvg() {
    var src = _this2.data.substring(j, _this2.i + 1);
    node.attrs.xmlns = 'http://www.w3.org/2000/svg';
    for (var key in node.attrs) {
      if (key == 'viewbox') src = " viewBox=\"".concat(node.attrs.viewbox, "\"") + src;else
      if (key != 'style') src = " ".concat(key, "=\"").concat(node.attrs[key], "\"") + src;
    }
    src = '<svg' + src;
    var parent = _this2.parent();
    if (node.attrs.width == '100%' && parent && (parent.attrs.style || '').includes('inline'))
    parent.attrs.style = 'width:300px;max-width:100%;' + parent.attrs.style;
    _this2.siblings().push({
      name: 'img',
      attrs: {
        src: 'data:image/svg+xml;utf8,' + src.replace(/#/g, '%23'),
        style: node.attrs.style,
        ignore: 'T' } });


  };
  if (node.name == 'svg' && this.data[j] == '/') return handleSvg(this.i++);
  while (1) {
    if ((this.i = this.data.indexOf('</', this.i + 1)) == -1) {
      if (name == 'pre' || name == 'svg') this.i = j;else
      this.i = this.data.length;
      return;
    }
    this.start = this.i += 2;
    while (!blankChar[this.data[this.i]] && !this.isClose()) {this.i++;}
    if (this.section().toLowerCase() == name) {
      // 代码块高亮
      if (name == 'pre') {
        this.data = this.data.substr(0, j + 1) + cfg.highlight(this.data.substring(j + 1, this.i - 5), node.attrs) + this.data.
        substr(this.i - 5);
        return this.i = j;
      } else if (name == 'style')
      this.CssHandler.getStyle(this.data.substring(j + 1, this.i - 7));else
      if (name == 'title')
      this.DOM.title = this.data.substring(j + 1, this.i - 7);
      if ((this.i = this.data.indexOf('>', this.i)) == -1) this.i = this.data.length;
      if (name == 'svg') handleSvg();
      return;
    }
  }
};
// 节点出栈处理
MpHtmlParser.prototype.popNode = function (node) {
  // 空白符处理
  if (node.pre) {
    node.pre = this.pre = void 0;
    for (var i = this.STACK.length; i--;) {
      if (this.STACK[i].pre)
      this.pre = true;}
  }
  var siblings = this.siblings(),
  len = siblings.length,
  childs = node.children;
  if (node.name == 'head' || cfg.filter && cfg.filter(node, this) == false)
  return siblings.pop();
  var attrs = node.attrs;
  // 替换一些标签名
  if (cfg.blockTags[node.name]) node.name = 'div';else
  if (!cfg.trustTags[node.name]) node.name = 'span';
  // 处理列表
  if (node.c && (node.name == 'ul' || node.name == 'ol')) {
    if ((node.attrs.style || '').includes('list-style:none')) {
      for (var _i = 0, child; child = childs[_i++];) {
        if (child.name == 'li')
        child.name = 'div';}
    } else if (node.name == 'ul') {
      var floor = 1;
      for (var _i2 = this.STACK.length; _i2--;) {
        if (this.STACK[_i2].name == 'ul') floor++;}
      if (floor != 1)
      for (var _i3 = childs.length; _i3--;) {
        childs[_i3].floor = floor;}
    } else {
      for (var _i4 = 0, num = 1, _child; _child = childs[_i4++];) {
        if (_child.name == 'li') {
          _child.type = 'ol';
          _child.num = function (num, type) {
            if (type == 'a') return String.fromCharCode(97 + (num - 1) % 26);
            if (type == 'A') return String.fromCharCode(65 + (num - 1) % 26);
            if (type == 'i' || type == 'I') {
              num = (num - 1) % 99 + 1;
              var one = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'],
              ten = ['X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'],
              res = (ten[Math.floor(num / 10) - 1] || '') + (one[num % 10 - 1] || '');
              if (type == 'i') return res.toLowerCase();
              return res;
            }
            return num;
          }(num++, attrs.type) + '.';
        }}
    }
  }
  // 处理表格
  if (node.name == 'table') {
    var padding = parseFloat(attrs.cellpadding),
    spacing = parseFloat(attrs.cellspacing),
    border = parseFloat(attrs.border);
    if (node.c) {
      if (isNaN(padding)) padding = 2;
      if (isNaN(spacing)) spacing = 2;
    }
    if (border) attrs.style = "border:".concat(border, "px solid gray;").concat(attrs.style || '');
    if (node.flag && node.c) {
      // 有 colspan 或 rowspan 且含有链接的表格转为 grid 布局实现
      attrs.style = "".concat(attrs.style || '', ";").concat(spacing ? ";grid-gap:".concat(spacing, "px") : ';border-left:0;border-top:0');
      var row = 1,
      col = 1,
      colNum,
      trs = [],
      children = [],
      map = {};
      (function f(ns) {
        for (var i = 0; i < ns.length; i++) {
          if (ns[i].name == 'tr') trs.push(ns[i]);else
          f(ns[i].children || []);
        }
      })(node.children);
      for (var _i5 = 0; _i5 < trs.length; _i5++) {
        for (var j = 0, td; td = trs[_i5].children[j]; j++) {
          if (td.name == 'td' || td.name == 'th') {
            while (map[row + '.' + col]) {col++;}
            var cell = {
              name: 'div',
              c: 1,
              attrs: {
                style: (td.attrs.style || '') + (border ? ";border:".concat(border, "px solid gray") + (spacing ? '' :
                ';border-right:0;border-bottom:0') : '') + (padding ? ";padding:".concat(padding, "px") : '') },

              children: td.children };

            if (td.attrs.colspan) {
              cell.attrs.style += ';grid-column-start:' + col + ';grid-column-end:' + (col + parseInt(td.attrs.colspan));
              if (!td.attrs.rowspan) cell.attrs.style += ';grid-row-start:' + row + ';grid-row-end:' + (row + 1);
              col += parseInt(td.attrs.colspan) - 1;
            }
            if (td.attrs.rowspan) {
              cell.attrs.style += ';grid-row-start:' + row + ';grid-row-end:' + (row + parseInt(td.attrs.rowspan));
              if (!td.attrs.colspan) cell.attrs.style += ';grid-column-start:' + col + ';grid-column-end:' + (col + 1);
              for (var k = 1; k < td.attrs.rowspan; k++) {map[row + k + '.' + col] = 1;}
            }
            children.push(cell);
            col++;
          }
        }
        if (!colNum) {
          colNum = col - 1;
          attrs.style += ";grid-template-columns:repeat(".concat(colNum, ",auto)");
        }
        col = 1;
        row++;
      }
      node.children = children;
    } else {
      attrs.style = "border-spacing:".concat(spacing, "px;").concat(attrs.style || '');
      if (border || padding)
      (function f(ns) {
        for (var i = 0, n; n = ns[i]; i++) {
          if (n.name == 'th' || n.name == 'td') {
            if (border) n.attrs.style = "border:".concat(border, "px solid gray;").concat(n.attrs.style || '');
            if (padding) n.attrs.style = "padding:".concat(padding, "px;").concat(n.attrs.style || '');
          } else f(n.children || []);
        }
      })(childs);
    }
    if (this.options.autoscroll) {
      var table = Object.assign({}, node);
      node.name = 'div';
      node.attrs = {
        style: 'overflow:scroll' };

      node.children = [table];
    }
  }
  this.CssHandler.pop && this.CssHandler.pop(node);
  // 自动压缩
  if (node.name == 'div' && !Object.keys(attrs).length && childs.length == 1 && childs[0].name == 'div')
  siblings[len - 1] = childs[0];
};
// 状态机
MpHtmlParser.prototype.Text = function (c) {
  if (c == '<') {
    var next = this.data[this.i + 1],
    isLetter = function isLetter(c) {return c >= 'a' && c <= 'z' || c >= 'A' && c <= 'Z';};
    if (isLetter(next)) {
      this.setText();
      this.start = this.i + 1;
      this.state = this.TagName;
    } else if (next == '/') {
      this.setText();
      if (isLetter(this.data[++this.i + 1])) {
        this.start = this.i + 1;
        this.state = this.EndTag;
      } else this.Comment();
    } else if (next == '!' || next == '?') {
      this.setText();
      this.Comment();
    }
  }
};
MpHtmlParser.prototype.Comment = function () {
  var key;
  if (this.data.substring(this.i + 2, this.i + 4) == '--') key = '-->';else
  if (this.data.substring(this.i + 2, this.i + 9) == '[CDATA[') key = ']]>';else
  key = '>';
  if ((this.i = this.data.indexOf(key, this.i + 2)) == -1) this.i = this.data.length;else
  this.i += key.length - 1;
  this.start = this.i + 1;
  this.state = this.Text;
};
MpHtmlParser.prototype.TagName = function (c) {
  if (blankChar[c]) {
    this.tagName = this.section();
    while (blankChar[this.data[this.i]]) {this.i++;}
    if (this.isClose()) this.setNode();else
    {
      this.start = this.i;
      this.state = this.AttrName;
    }
  } else if (this.isClose()) {
    this.tagName = this.section();
    this.setNode();
  }
};
MpHtmlParser.prototype.AttrName = function (c) {
  if (c == '=' || blankChar[c] || this.isClose()) {
    this.attrName = this.section();
    if (blankChar[c])
    while (blankChar[this.data[++this.i]]) {;}
    if (this.data[this.i] == '=') {
      while (blankChar[this.data[++this.i]]) {;}
      this.start = this.i--;
      this.state = this.AttrValue;
    } else this.setAttr();
  }
};
MpHtmlParser.prototype.AttrValue = function (c) {
  if (c == '"' || c == "'") {
    this.start++;
    if ((this.i = this.data.indexOf(c, this.i + 1)) == -1) return this.i = this.data.length;
    this.attrVal = this.section();
    this.i++;
  } else {
    for (; !blankChar[this.data[this.i]] && !this.isClose(); this.i++) {;}
    this.attrVal = this.section();
  }
  this.setAttr();
};
MpHtmlParser.prototype.EndTag = function (c) {
  if (blankChar[c] || c == '>' || c == '/') {
    var name = this.section().toLowerCase();
    for (var i = this.STACK.length; i--;) {
      if (this.STACK[i].name == name) break;}
    if (i != -1) {
      var node;
      while ((node = this.STACK.pop()).name != name) {this.popNode(node);}
      this.popNode(node);
    } else if (name == 'p' || name == 'br')
    this.siblings().push({
      name: name,
      attrs: {} });

    this.i = this.data.indexOf('>', this.i);
    this.start = this.i + 1;
    if (this.i == -1) this.i = this.data.length;else
    this.state = this.Text;
  }
};
module.exports = MpHtmlParser;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 741:
/*!****************************************************************************************!*\
  !*** C:/Users/luyus/Desktop/baoyun-mansion/uview-ui/components/u-parse/libs/config.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* 配置文件 */
var cfg = {
  // 出错占位图
  errorImg: null,
  // 过滤器函数
  filter: null,
  // 代码高亮函数
  highlight: null,
  // 文本处理函数
  onText: null,
  // 实体编码列表
  entities: {
    quot: '"',
    apos: "'",
    semi: ';',
    nbsp: '\xA0',
    ensp: "\u2002",
    emsp: "\u2003",
    ndash: '–',
    mdash: '—',
    middot: '·',
    lsquo: '‘',
    rsquo: '’',
    ldquo: '“',
    rdquo: '”',
    bull: '•',
    hellip: '…' },

  blankChar: makeMap(' ,\xA0,\t,\r,\n,\f'),
  boolAttrs: makeMap('allowfullscreen,autoplay,autostart,controls,ignore,loop,muted'),
  // 块级标签，将被转为 div
  blockTags: makeMap('address,article,aside,body,caption,center,cite,footer,header,html,nav,pre,section'),
  // 将被移除的标签
  ignoreTags: makeMap('area,base,canvas,frame,iframe,input,link,map,meta,param,script,source,style,svg,textarea,title,track,wbr'),
  // 只能被 rich-text 显示的标签
  richOnlyTags: makeMap('a,colgroup,fieldset,legend'),
  // 自闭合的标签
  selfClosingTags: makeMap('area,base,br,col,circle,ellipse,embed,frame,hr,img,input,line,link,meta,param,path,polygon,rect,source,track,use,wbr'),
  // 信任的标签
  trustTags: makeMap('a,abbr,ad,audio,b,blockquote,br,code,col,colgroup,dd,del,dl,dt,div,em,fieldset,h1,h2,h3,h4,h5,h6,hr,i,img,ins,label,legend,li,ol,p,q,source,span,strong,sub,sup,table,tbody,td,tfoot,th,thead,tr,title,ul,video'),
  // 默认的标签样式
  userAgentStyles: {
    address: 'font-style:italic',
    big: 'display:inline;font-size:1.2em',
    blockquote: 'background-color:#f6f6f6;border-left:3px solid #dbdbdb;color:#6c6c6c;padding:5px 0 5px 10px',
    caption: 'display:table-caption;text-align:center',
    center: 'text-align:center',
    cite: 'font-style:italic',
    dd: 'margin-left:40px',
    mark: 'background-color:yellow',
    pre: 'font-family:monospace;white-space:pre;overflow:scroll',
    s: 'text-decoration:line-through',
    small: 'display:inline;font-size:0.8em',
    u: 'text-decoration:underline' } };



function makeMap(str) {
  var map = Object.create(null),
  list = str.split(',');
  for (var i = list.length; i--;) {
    map[list[i]] = true;}
  return map;
}


if (wx.canIUse('editor')) {
  cfg.blockTags.pre = void 0;
  cfg.ignoreTags.rp = true;
  Object.assign(cfg.richOnlyTags, makeMap('bdi,bdo,caption,rt,ruby'));
  Object.assign(cfg.trustTags, makeMap('bdi,bdo,caption,pre,rt,ruby'));
}







module.exports = cfg;

/***/ }),

/***/ 742:
/*!********************************************************************************************!*\
  !*** C:/Users/luyus/Desktop/baoyun-mansion/uview-ui/components/u-parse/libs/CssHandler.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var cfg = __webpack_require__(/*! ./config.js */ 741),
isLetter = function isLetter(c) {return c >= 'a' && c <= 'z' || c >= 'A' && c <= 'Z';};

function CssHandler(tagStyle) {
  var styles = Object.assign(Object.create(null), cfg.userAgentStyles);
  for (var item in tagStyle) {
    styles[item] = (styles[item] ? styles[item] + ';' : '') + tagStyle[item];}
  this.styles = styles;
}
CssHandler.prototype.getStyle = function (data) {
  this.styles = new parser(data, this.styles).parse();
};
CssHandler.prototype.match = function (name, attrs) {
  var tmp,matched = (tmp = this.styles[name]) ? tmp + ';' : '';
  if (attrs.class) {
    var items = attrs.class.split(' ');
    for (var i = 0, item; item = items[i]; i++) {
      if (tmp = this.styles['.' + item])
      matched += tmp + ';';}
  }
  if (tmp = this.styles['#' + attrs.id])
  matched += tmp + ';';
  return matched;
};
module.exports = CssHandler;

function parser(data, init) {
  this.data = data;
  this.floor = 0;
  this.i = 0;
  this.list = [];
  this.res = init;
  this.state = this.Space;
}
parser.prototype.parse = function () {
  for (var c; c = this.data[this.i]; this.i++) {
    this.state(c);}
  return this.res;
};
parser.prototype.section = function () {
  return this.data.substring(this.start, this.i);
};
// 状态机
parser.prototype.Space = function (c) {
  if (c == '.' || c == '#' || isLetter(c)) {
    this.start = this.i;
    this.state = this.Name;
  } else if (c == '/' && this.data[this.i + 1] == '*')
  this.Comment();else
  if (!cfg.blankChar[c] && c != ';')
  this.state = this.Ignore;
};
parser.prototype.Comment = function () {
  this.i = this.data.indexOf('*/', this.i) + 1;
  if (!this.i) this.i = this.data.length;
  this.state = this.Space;
};
parser.prototype.Ignore = function (c) {
  if (c == '{') this.floor++;else
  if (c == '}' && ! --this.floor) {
    this.list = [];
    this.state = this.Space;
  }
};
parser.prototype.Name = function (c) {
  if (cfg.blankChar[c]) {
    this.list.push(this.section());
    this.state = this.NameSpace;
  } else if (c == '{') {
    this.list.push(this.section());
    this.Content();
  } else if (c == ',') {
    this.list.push(this.section());
    this.Comma();
  } else if (!isLetter(c) && (c < '0' || c > '9') && c != '-' && c != '_')
  this.state = this.Ignore;
};
parser.prototype.NameSpace = function (c) {
  if (c == '{') this.Content();else
  if (c == ',') this.Comma();else
  if (!cfg.blankChar[c]) this.state = this.Ignore;
};
parser.prototype.Comma = function () {
  while (cfg.blankChar[this.data[++this.i]]) {;}
  if (this.data[this.i] == '{') this.Content();else
  {
    this.start = this.i--;
    this.state = this.Name;
  }
};
parser.prototype.Content = function () {
  this.start = ++this.i;
  if ((this.i = this.data.indexOf('}', this.i)) == -1) this.i = this.data.length;
  var content = this.section();
  for (var i = 0, item; item = this.list[i++];) {
    if (this.res[item]) this.res[item] += ';' + content;else
    this.res[item] = content;}
  this.list = [];
  this.state = this.Space;
};

/***/ }),

/***/ 792:
/*!*******************************************************************!*\
  !*** C:/Users/luyus/Desktop/baoyun-mansion/static/default_bg.png ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZoAAACiBAMAAACKdhYkAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAPUExURZaWlkdwTJeXl5WVlZeXlyf/I+UAAAAFdFJOUy8Aqxht5c+JWQAADOJJREFUeNrdXQFioywTJZEDmB8PkM96AKwegBDuf6afGUABxWjExC6x3W6T3fryZoY3M0DJ7eSDEaUUKda9mJwcDGARQuP5B9AwCmAQD/nzaBCMxaOKv44GwZD2duNUj/Zvo6kazUnr/IcWfxpNqVQjRp6EaP8yGtp4YG43RS9/GE0plfLZ6IX4w2iolAEZbNnU2LfRlHLh9piUERd0ydRKcvkuGlrXC7fXN030bL805ZT0q2iYrOv6kX7+GlNzK5ccpxTFF9FwAFP/pMHWTQyVqSU0lHSkJV+zMhj3hZmzmeqcBTnAiKDkQb5mZXWt6iZ5e7/1lIgFNIxQSsTlG2h6xNIUfCEMXGd8iqrkywkFOF9Aw4yVia7rZDIMMNlM77xPhuiSCCF0jP44mtJYWcERzTMdBKZWxZPcME0N5KfkS1ZWaDDdbzIMlHUzEwfTEw4pSvH4NBp2HawMRj93zxbNfU5UL06fn+bGWZkF0+kwkIhS1Rwarp5L0oZ8Fg21VtYNIxnUqpkAvczN7bPc2ElGDMQsBbVq3tKeL0T0x9DwCTF6XFPaJoHm1d2Sj1rZ3YAo8IFh4L4hpi1z8zk0ZWRlztT6lLZJoCnOgKafs7LFoMbmnuCn4IbOEGNHKgzokHHZMnsegUan7jPDWFmj5oasFY0GSarO/rNoyjrDaGxGcJ9Bc/kkmiofmmomPtDPosnIDZspGtBPczPvHVuGC83Xqal9nBst9RODw4zJJ1c8qEPTTzQcC2ufn+CG7B0OjbbaeHZRy8VOTvJzQ/jkgkdiwFPBSwdutKlFcaBMVaA0Duz0iPzcFG3Hogs/EiN66cgNBMifV2gcDqk/muaRnZu13eNk7WUUaLIOKx2Vj0bjUBZHo4eUUjUH+E23D83IDZBzD9EYR7J8KIcDEalGPm8n44b53GjPCeYcqh5WkBscDeAwSJCbywHcFNm4wQTvMjPd9A4IPrSJ4RcQM7Jz02XzGySn8aebi/tKAh32w4aA5nk7NzeQF8j7zORZajq0o+CHVE8qAdDldm6/McJPDBDUaHTSGZkULTV+lFsL6LcyZ0wz+mao7lZeh5opNDZN0VMjA1gmQmRE0+u0LOKmbXf5DbqOg9P7eXRpfF+bV68QlpmasqExpf8IzWa7i7mBOVTKpx+gna1pMAIwSvQfkVV12qpMaGlsKxo24QbNF30nbLhDXLuAM0nDzTOJ5g3T712qlZ0beJ/029/G+UAJgrpURgxI+xyZfZef71hZLfoIDduOhk4LaUzCxE+mjVB9q1YMqHsiv2F4Y5c3rKyAYl8Y03Jw4+A0YlotVDZON48EGph/62RfJV0ug9qfxw3BLzL4jfkROO3H96pQOUOcdkZIpoWKC7zZjw2TzFD7G9FwnYldcnGD0R/nfhLVCRqrOu+Dofo1OfDmB0qUO2k3WJktyo6WhnllJr/xXUSJ4X/sCmaszMhn88+Dug8oidZE+bq5rLYyVQydP3P/DNNkANWtHu0SN7fSWBQmzAL+c0XvOuNBwTZGO4emdrm4GCJus8nKYjT6Am7WlzfaRW765s5AkA1DKG1F1CSdP6Oh2nKDDR5ODTf0te8wGZX+B0uzaG5xEWPpWubmCoKgpCMYAStBGBAzGloYBcoBAGvnWyix6hiI4bYdYz3FWBrbUnpqF2Ia/KiLDXoWi9Bh4aFtTYfucVolYX7i0/Fbty/RNIJ7ph+iga5qkclvSm+1GjOvpqjNwPqeQXWQpUrCr0ztf3UT3NAY08p3I3SCm2r6bUydQa95+o0sFcNfoanQabhtMAezJ39r9kxyc5103Jn1lkrdb2lupPmQa/RNaVcyFBbPbp2W8hs2DUmVsy/6zFWH1vp03tKy6jRM0eN3lg3PtbnQyPqnm40COTU0TtLrhOM+NFe7AgDa/3yKJhs3cmWOsg8NBrUin6Ul/KZcm6LsQ1MNC5o4KY7j5ndthrIPDXNouJ6fj/MbWYtPoAGDxuBMFVWH5Z5VvTbd2o3GhAGtnqg4ar65rk6Fd6L5tdpGUap8NISbQdwXr0dSp5Xrqy470VQGDUddG2QEZvAM+c3v+qLLTjRO24BCF3FGgLka34Zmyo1WNUGLjReHoWFW21ChbBSwuafrRvON2dqUmz6MAYwuVCz2Vm5tGABTOyamQeU2rETS49BYbcMpLY7R0AE15QU2c7Tw5yFoAm1zgBYIqdFWBmiS1rYXjZ7Z0hlBBi0Q9KU1kgIQlUQcg6b0lp4nuYGC8fMtbsqgEKY5EVCAoUdxY7TNMhqzCK9p3/AbGQY0braucfG8HYXmbnJpnsoIXNkB4Lzauh1x00c1ytJsluapxVC70ThtUyRzz6srOdyjEtdLvykntQmbP7cHRWinbdKW5i32LF7WTwNuoJZ63xZE9qMZwgCnMzHN1qo9a1vtN9fIzrwQyefDwP4uLmgbbvXADDe9B+V1nuJzQ+OKHhfE2h0T87F/PxpXtyHKQ9Pi6EjhVR4bJu+sTY/Ib+BtCEMXHXZKl5Q+j0FjtA2n2ITwu1E4pG9kUqzX0P10cysnwqER4iBuMKiB6qQk6kbpTO3qg6nqe7E2v6EzTlaKwVvIUZaG2obDoSZBfgMi32PmjvFW2H4OL6affG6wZb/Y3DtICxhto9EU/uxpigUjMU8zeTxfdDxsTCvl5i5/LjSmGE1m5hs300D30SyQeHmDyI1ZsXOZjeD43ZIch8bVbaazp+kkatenymsVjwXxeS0gk2Bg370J1cVhaH4HNRDrtLgxZGKUtqPU3QCapVnWrgQAKX0UmipAE+g0OtfdqszmIjL31tuwkVqUTsjzxvUlaHscmrpI6TQ53YsyCjeNqHB3Bau13YuTwQxqAuzIbG2s2/C53LO7zjQeZWSA0d8Xas68MHUBfpzfjAnbnIaWMTW+RaV3EyXeOFuzYcfFNNQ2PNlbG3znErqImkGiBHlVc2ZEHFeBCoLafO7JUyEXNjaMlOCCIPK6J0jJobPnWLdJVTmIWji8hTGjA26pqvpntcBQt8FsbWc9jX4djW20EzVmBGZXmlbGndmzBjvU3F61YM9aZza06cuoTv59NKhtethZG/UICpJrRdcH0WDCRhWlXn5jNquZBMB0cgpiL/gGJ+4Z1xYxGvr7fmOK0VwRbyVkYe/TZG3FHBj3FHxP/3EablDbcD9bw/mNuSJLCxe72cv81eZbrXntkFOewG9cT6r/J2Ka0zYZ1nKQU6C55+GmOAM3VttkWMtxBm6stsnQ9zwDN1bbZOh7niCmuaD2j8Q0W4w+bCXkh9GYYvS/wo0Jahli2hn8xtZtPEtr4YFoWrbuOhE3JgyoqEdAtu8jOIXfMNQ2NMxvOOFW8q+52vNwY7QNHdencSv9g1xg8WrP4zcmDIxRAJNku3QQ8+TX15m4QW2zO0KfxG/gnIa31qepE2poG9S2zzdl1KA6CTeobbZb2m/URD+J36C22bw+rYy66F/U0GwS1LZyA6tWmpibl7vlDkETvfGgbTaiwSU4Tew36zc150RThs1HWFG+MaaZJk4bc/MVNNCy83tcFs36mFaZvlobaeiNi7hy+Q2hxKdHa5ttewrlHBpa7wkDO9BwEawW1WFgtDRTWF7kBncyNiEa0AJ2y/bHowAlwvvnvUEzni9QLO9hR0P7kcNaPafT3lqSshsNHszeBm5AJzvyF1oeuAxP1HXY8eD1njDwNppSUBKsQWD4CwbCPezuML65By5zqvBsP3yM3Pz3BTTazsQl9OrG4+aGe9hNQ6Mg088FcPNzHc5dHFZ07QlqO7gpePCrnNg1QGPPfmBt2+nH9DP4TQPx2B5A2A06TTbfiGl6/nyG2qZefy4HY7B5Izq9zug0+b622YOGURLPhqvPTIEVK88ylgLIzfX9oLZLQ5NLpG3Wn2ejzbIAnfYzrXX27we1jCeOseBUK7as07hZ9x2vQwNu+MKvxfkcmtvk/LQX+Q2fHvUKfrMjxcmJ5lpnqUN38hRo+gznp2m/6d4PAznRVJm4ub4dBrKeopgBDceE/L8zoJFZ+p4df1vbZD2v87q/7wl+w98OA1nR/EZroLZs+jYaGmqd8DsX2hOg8fewc7dwiK/85DR0070f1A4659be5Xow3hoo6Jw8ToCmHDMCsxFlfm/K3Cdvxwr8spKfk3Cz/0RlQNOciZv3Kyccm9uyOZXf7OPm7TBwtrO7CRYK5JthYCOaFpY9m1kEzsUcjgFsGrOhMwM3/nYJOR4zaLYj6h/PsqFpAU1hsBAhlMEDx7bqn5wFDfex4EmpuFtRCIpgiq5bOnN6KzcDHOBGuN8wBIBqfOyPaeM+FniXEIzhBjYkZuUG1vwjGHy3AA6Q01gw+7kxdeiBGzwnFeDAYa8Cl4t3bUZuAA63jiMMFjQ1/ZPz+43jBqlBS+MvuPk/do0QiV+3m/AAAAAASUVORK5CYII="

/***/ }),

/***/ 828:
/*!***************************************************************************!*\
  !*** C:/Users/luyus/Desktop/baoyun-mansion/uview-ui/libs/util/emitter.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /**
                                                                                                      * 递归使用 call 方式this指向
                                                                                                      * @param componentName // 需要找的组件的名称
                                                                                                      * @param eventName // 事件名称
                                                                                                      * @param params // 需要传递的参数
                                                                                                      */
function _broadcast(componentName, eventName, params) {
  // 循环子节点找到名称一样的子节点 否则 递归 当前子节点
  this.$children.map(function (child) {
    if (componentName === child.$options.name) {
      child.$emit.apply(child, [eventName].concat(params));
    } else {
      _broadcast.apply(child, [componentName, eventName].concat(params));
    }
  });
}var _default =
{
  methods: {
    /**
              * 派发 (向上查找) (一个)
              * @param componentName // 需要找的组件的名称
              * @param eventName // 事件名称
              * @param params // 需要传递的参数
              */
    dispatch: function dispatch(componentName, eventName, params) {
      var parent = this.$parent || this.$root; //$parent 找到最近的父节点 $root 根节点
      var name = parent.$options.name; // 获取当前组件实例的name
      // 如果当前有节点 && 当前没名称 且 当前名称等于需要传进来的名称的时候就去查找当前的节点
      // 循环出当前名称的一样的组件实例
      while (parent && (!name || name !== componentName)) {
        parent = parent.$parent;
        if (parent) {
          name = parent.$options.name;
        }
      }
      // 有节点表示当前找到了name一样的实例
      if (parent) {
        parent.$emit.apply(parent, [eventName].concat(params));
      }
    },
    /**
        * 广播 (向下查找) (广播多个)
        * @param componentName // 需要找的组件的名称
        * @param eventName // 事件名称
        * @param params // 需要传递的参数
        */
    broadcast: function broadcast(componentName, eventName, params) {
      _broadcast.call(this, componentName, eventName, params);
    } } };exports.default = _default;

/***/ })

}]);
//# sourceMappingURL=../../.sourcemap/mp-weixin/common/vendor.js.map