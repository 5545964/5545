(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["common/vendor"],{

/***/ 1:
/*!************************************************************!*\
  !*** ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {Object.defineProperty(exports, "__esModule", { value: true });exports.createApp = createApp;exports.createComponent = createComponent;exports.createPage = createPage;exports.createPlugin = createPlugin;exports.createSubpackageApp = createSubpackageApp;exports.default = void 0;var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 3));
var _uniI18n = __webpack_require__(/*! @dcloudio/uni-i18n */ 4);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _slicedToArray(arr, i) {return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();}function _nonIterableRest() {throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _iterableToArrayLimit(arr, i) {if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;var _arr = [];var _n = true;var _d = false;var _e = undefined;try {for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {_arr.push(_s.value);if (i && _arr.length === i) break;}} catch (err) {_d = true;_e = err;} finally {try {if (!_n && _i["return"] != null) _i["return"]();} finally {if (_d) throw _e;}}return _arr;}function _arrayWithHoles(arr) {if (Array.isArray(arr)) return arr;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}function _toConsumableArray(arr) {return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();}function _nonIterableSpread() {throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === "string") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === "Object" && o.constructor) n = o.constructor.name;if (n === "Map" || n === "Set") return Array.from(o);if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _iterableToArray(iter) {if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);}function _arrayWithoutHoles(arr) {if (Array.isArray(arr)) return _arrayLikeToArray(arr);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) {arr2[i] = arr[i];}return arr2;}

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
/^\$|Window$|WindowStyle$|sendHostEvent|sendNativeEvent|restoreGlobal|getCurrentSubNVue|getMenuButtonBoundingClientRect|^report|interceptors|Interceptor$|getSubNVueById|requireNativePlugin|upx2px|hideKeyboard|canIUse|^create|Sync$|Manager$|base64ToArrayBuffer|arrayBufferToBase64|getLocale|setLocale/;

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

function getLocale() {
  // 优先使用 $locale
  var app = getApp({
    allowDefault: true });

  if (app && app.$vm) {
    return app.$vm.$locale;
  }
  return wx.getSystemInfoSync().language || 'zh-Hans';
}

function setLocale(locale) {
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
  global.getLocale = getLocale;
}

var interceptors = {
  promiseInterceptor: promiseInterceptor };


var baseApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  upx2px: upx2px,
  getLocale: getLocale,
  setLocale: setLocale,
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
function addUuid(result) {
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
      bottom: result.windowHeight - safeArea.bottom };

  }
}

var getSystemInfo = {
  returnValue: function returnValue(result) {
    addUuid(result);
    addSafeAreaInsets(result);
  } };


// import navigateTo from 'uni-helpers/navigate-to'

var protocols = {
  redirectTo: redirectTo,
  // navigateTo,  // 由于在微信开发者工具的页面参数，会显示__id__参数，因此暂时关闭mp-weixin对于navigateTo的AOP
  previewImage: previewImage,
  getSystemInfo: getSystemInfo,
  getSystemInfoSync: getSystemInfo };

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


var api = /*#__PURE__*/Object.freeze({
  __proto__: null });


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

function handleEvent(event) {var _this = this;
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
          var handlerCtx = _this.$vm;
          if (handlerCtx.$options.generic) {// mp-weixin,mp-toutiao 抽象节点模拟 scoped slots
            handlerCtx = getContextVm(handlerCtx) || handlerCtx;
          }
          if (methodName === '$emit') {
            handlerCtx.$emit.apply(handlerCtx,
            processEventArgs(
            _this.$vm,
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
          _this.$vm,
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

var messages = {};

var locale;

{
  locale = wx.getSystemInfoSync().language;
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
  beforeCreate: function beforeCreate() {var _this2 = this;
    var unwatch = i18n.i18n.watchLocale(function () {
      _this2.$forceUpdate();
    });
    this.$once('hook:beforeDestroy', function () {
      unwatch();
    });
  },
  methods: {
    $$t: function $$t(key, values) {
      return t(key, values);
    } } };


var setLocale$1 = i18n.setLocale;
var getLocale$1 = i18n.getLocale;

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

// export function initI18n() {
//   const localeKeys = Object.keys(__uniConfig.locales || {})
//   if (localeKeys.length) {
//     localeKeys.forEach((locale) =>
//       i18n.add(locale, __uniConfig.locales[locale])
//     )
//   }
// }

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

  initAppLocale(_vue.default, vm, wx.getSystemInfoSync().language || 'zh-Hans');

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
/*!************************************************************!*\
  !*** C:/Users/luyus/Desktop/baoyun-mansion/store/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 3));
var _vuex = _interopRequireDefault(__webpack_require__(/*! vuex */ 13));



var _state = _interopRequireDefault(__webpack_require__(/*! ./state.js */ 14));
var _mutations = _interopRequireDefault(__webpack_require__(/*! ./mutations.js */ 15));
var _actions = _interopRequireDefault(__webpack_require__(/*! ./actions.js */ 16));
var _getters = _interopRequireDefault(__webpack_require__(/*! ./getters.js */ 17));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}_vue.default.use(_vuex.default);

var store = {
  state: _state.default,
  mutations: _mutations.default,
  actions: _actions.default,
  getters: _getters.default };var _default =


new _vuex.default.Store(store);exports.default = _default;

/***/ }),

/***/ 13:
/*!**************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vuex3/dist/vuex.common.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * vuex v3.6.2
 * (c) 2021 Evan You
 * @license MIT
 */


function applyMixin (Vue) {
  var version = Number(Vue.version.split('.')[0]);

  if (version >= 2) {
    Vue.mixin({ beforeCreate: vuexInit });
  } else {
    // override init and inject vuex init procedure
    // for 1.x backwards compatibility.
    var _init = Vue.prototype._init;
    Vue.prototype._init = function (options) {
      if ( options === void 0 ) options = {};

      options.init = options.init
        ? [vuexInit].concat(options.init)
        : vuexInit;
      _init.call(this, options);
    };
  }

  /**
   * Vuex init hook, injected into each instances init hooks list.
   */

  function vuexInit () {
    var options = this.$options;
    // store injection
    if (options.store) {
      this.$store = typeof options.store === 'function'
        ? options.store()
        : options.store;
    } else if (options.parent && options.parent.$store) {
      this.$store = options.parent.$store;
    }
  }
}

var target = typeof window !== 'undefined'
  ? window
  : typeof global !== 'undefined'
    ? global
    : {};
var devtoolHook = target.__VUE_DEVTOOLS_GLOBAL_HOOK__;

function devtoolPlugin (store) {
  if (!devtoolHook) { return }

  store._devtoolHook = devtoolHook;

  devtoolHook.emit('vuex:init', store);

  devtoolHook.on('vuex:travel-to-state', function (targetState) {
    store.replaceState(targetState);
  });

  store.subscribe(function (mutation, state) {
    devtoolHook.emit('vuex:mutation', mutation, state);
  }, { prepend: true });

  store.subscribeAction(function (action, state) {
    devtoolHook.emit('vuex:action', action, state);
  }, { prepend: true });
}

/**
 * Get the first item that pass the test
 * by second argument function
 *
 * @param {Array} list
 * @param {Function} f
 * @return {*}
 */
function find (list, f) {
  return list.filter(f)[0]
}

/**
 * Deep copy the given object considering circular structure.
 * This function caches all nested objects and its copies.
 * If it detects circular structure, use cached copy to avoid infinite loop.
 *
 * @param {*} obj
 * @param {Array<Object>} cache
 * @return {*}
 */
function deepCopy (obj, cache) {
  if ( cache === void 0 ) cache = [];

  // just return if obj is immutable value
  if (obj === null || typeof obj !== 'object') {
    return obj
  }

  // if obj is hit, it is in circular structure
  var hit = find(cache, function (c) { return c.original === obj; });
  if (hit) {
    return hit.copy
  }

  var copy = Array.isArray(obj) ? [] : {};
  // put the copy into cache at first
  // because we want to refer it in recursive deepCopy
  cache.push({
    original: obj,
    copy: copy
  });

  Object.keys(obj).forEach(function (key) {
    copy[key] = deepCopy(obj[key], cache);
  });

  return copy
}

/**
 * forEach for object
 */
function forEachValue (obj, fn) {
  Object.keys(obj).forEach(function (key) { return fn(obj[key], key); });
}

function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

function isPromise (val) {
  return val && typeof val.then === 'function'
}

function assert (condition, msg) {
  if (!condition) { throw new Error(("[vuex] " + msg)) }
}

function partial (fn, arg) {
  return function () {
    return fn(arg)
  }
}

// Base data struct for store's module, package with some attribute and method
var Module = function Module (rawModule, runtime) {
  this.runtime = runtime;
  // Store some children item
  this._children = Object.create(null);
  // Store the origin module object which passed by programmer
  this._rawModule = rawModule;
  var rawState = rawModule.state;

  // Store the origin module's state
  this.state = (typeof rawState === 'function' ? rawState() : rawState) || {};
};

var prototypeAccessors = { namespaced: { configurable: true } };

prototypeAccessors.namespaced.get = function () {
  return !!this._rawModule.namespaced
};

Module.prototype.addChild = function addChild (key, module) {
  this._children[key] = module;
};

Module.prototype.removeChild = function removeChild (key) {
  delete this._children[key];
};

Module.prototype.getChild = function getChild (key) {
  return this._children[key]
};

Module.prototype.hasChild = function hasChild (key) {
  return key in this._children
};

Module.prototype.update = function update (rawModule) {
  this._rawModule.namespaced = rawModule.namespaced;
  if (rawModule.actions) {
    this._rawModule.actions = rawModule.actions;
  }
  if (rawModule.mutations) {
    this._rawModule.mutations = rawModule.mutations;
  }
  if (rawModule.getters) {
    this._rawModule.getters = rawModule.getters;
  }
};

Module.prototype.forEachChild = function forEachChild (fn) {
  forEachValue(this._children, fn);
};

Module.prototype.forEachGetter = function forEachGetter (fn) {
  if (this._rawModule.getters) {
    forEachValue(this._rawModule.getters, fn);
  }
};

Module.prototype.forEachAction = function forEachAction (fn) {
  if (this._rawModule.actions) {
    forEachValue(this._rawModule.actions, fn);
  }
};

Module.prototype.forEachMutation = function forEachMutation (fn) {
  if (this._rawModule.mutations) {
    forEachValue(this._rawModule.mutations, fn);
  }
};

Object.defineProperties( Module.prototype, prototypeAccessors );

var ModuleCollection = function ModuleCollection (rawRootModule) {
  // register root module (Vuex.Store options)
  this.register([], rawRootModule, false);
};

ModuleCollection.prototype.get = function get (path) {
  return path.reduce(function (module, key) {
    return module.getChild(key)
  }, this.root)
};

ModuleCollection.prototype.getNamespace = function getNamespace (path) {
  var module = this.root;
  return path.reduce(function (namespace, key) {
    module = module.getChild(key);
    return namespace + (module.namespaced ? key + '/' : '')
  }, '')
};

ModuleCollection.prototype.update = function update$1 (rawRootModule) {
  update([], this.root, rawRootModule);
};

ModuleCollection.prototype.register = function register (path, rawModule, runtime) {
    var this$1 = this;
    if ( runtime === void 0 ) runtime = true;

  if ((true)) {
    assertRawModule(path, rawModule);
  }

  var newModule = new Module(rawModule, runtime);
  if (path.length === 0) {
    this.root = newModule;
  } else {
    var parent = this.get(path.slice(0, -1));
    parent.addChild(path[path.length - 1], newModule);
  }

  // register nested modules
  if (rawModule.modules) {
    forEachValue(rawModule.modules, function (rawChildModule, key) {
      this$1.register(path.concat(key), rawChildModule, runtime);
    });
  }
};

ModuleCollection.prototype.unregister = function unregister (path) {
  var parent = this.get(path.slice(0, -1));
  var key = path[path.length - 1];
  var child = parent.getChild(key);

  if (!child) {
    if ((true)) {
      console.warn(
        "[vuex] trying to unregister module '" + key + "', which is " +
        "not registered"
      );
    }
    return
  }

  if (!child.runtime) {
    return
  }

  parent.removeChild(key);
};

ModuleCollection.prototype.isRegistered = function isRegistered (path) {
  var parent = this.get(path.slice(0, -1));
  var key = path[path.length - 1];

  if (parent) {
    return parent.hasChild(key)
  }

  return false
};

function update (path, targetModule, newModule) {
  if ((true)) {
    assertRawModule(path, newModule);
  }

  // update target module
  targetModule.update(newModule);

  // update nested modules
  if (newModule.modules) {
    for (var key in newModule.modules) {
      if (!targetModule.getChild(key)) {
        if ((true)) {
          console.warn(
            "[vuex] trying to add a new module '" + key + "' on hot reloading, " +
            'manual reload is needed'
          );
        }
        return
      }
      update(
        path.concat(key),
        targetModule.getChild(key),
        newModule.modules[key]
      );
    }
  }
}

var functionAssert = {
  assert: function (value) { return typeof value === 'function'; },
  expected: 'function'
};

var objectAssert = {
  assert: function (value) { return typeof value === 'function' ||
    (typeof value === 'object' && typeof value.handler === 'function'); },
  expected: 'function or object with "handler" function'
};

var assertTypes = {
  getters: functionAssert,
  mutations: functionAssert,
  actions: objectAssert
};

function assertRawModule (path, rawModule) {
  Object.keys(assertTypes).forEach(function (key) {
    if (!rawModule[key]) { return }

    var assertOptions = assertTypes[key];

    forEachValue(rawModule[key], function (value, type) {
      assert(
        assertOptions.assert(value),
        makeAssertionMessage(path, key, type, value, assertOptions.expected)
      );
    });
  });
}

function makeAssertionMessage (path, key, type, value, expected) {
  var buf = key + " should be " + expected + " but \"" + key + "." + type + "\"";
  if (path.length > 0) {
    buf += " in module \"" + (path.join('.')) + "\"";
  }
  buf += " is " + (JSON.stringify(value)) + ".";
  return buf
}

var Vue; // bind on install

var Store = function Store (options) {
  var this$1 = this;
  if ( options === void 0 ) options = {};

  // Auto install if it is not done yet and `window` has `Vue`.
  // To allow users to avoid auto-installation in some cases,
  // this code should be placed here. See #731
  if (!Vue && typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
  }

  if ((true)) {
    assert(Vue, "must call Vue.use(Vuex) before creating a store instance.");
    assert(typeof Promise !== 'undefined', "vuex requires a Promise polyfill in this browser.");
    assert(this instanceof Store, "store must be called with the new operator.");
  }

  var plugins = options.plugins; if ( plugins === void 0 ) plugins = [];
  var strict = options.strict; if ( strict === void 0 ) strict = false;

  // store internal state
  this._committing = false;
  this._actions = Object.create(null);
  this._actionSubscribers = [];
  this._mutations = Object.create(null);
  this._wrappedGetters = Object.create(null);
  this._modules = new ModuleCollection(options);
  this._modulesNamespaceMap = Object.create(null);
  this._subscribers = [];
  this._watcherVM = new Vue();
  this._makeLocalGettersCache = Object.create(null);

  // bind commit and dispatch to self
  var store = this;
  var ref = this;
  var dispatch = ref.dispatch;
  var commit = ref.commit;
  this.dispatch = function boundDispatch (type, payload) {
    return dispatch.call(store, type, payload)
  };
  this.commit = function boundCommit (type, payload, options) {
    return commit.call(store, type, payload, options)
  };

  // strict mode
  this.strict = strict;

  var state = this._modules.root.state;

  // init root module.
  // this also recursively registers all sub-modules
  // and collects all module getters inside this._wrappedGetters
  installModule(this, state, [], this._modules.root);

  // initialize the store vm, which is responsible for the reactivity
  // (also registers _wrappedGetters as computed properties)
  resetStoreVM(this, state);

  // apply plugins
  plugins.forEach(function (plugin) { return plugin(this$1); });

  var useDevtools = options.devtools !== undefined ? options.devtools : Vue.config.devtools;
  if (useDevtools) {
    devtoolPlugin(this);
  }
};

var prototypeAccessors$1 = { state: { configurable: true } };

prototypeAccessors$1.state.get = function () {
  return this._vm._data.$$state
};

prototypeAccessors$1.state.set = function (v) {
  if ((true)) {
    assert(false, "use store.replaceState() to explicit replace store state.");
  }
};

Store.prototype.commit = function commit (_type, _payload, _options) {
    var this$1 = this;

  // check object-style commit
  var ref = unifyObjectStyle(_type, _payload, _options);
    var type = ref.type;
    var payload = ref.payload;
    var options = ref.options;

  var mutation = { type: type, payload: payload };
  var entry = this._mutations[type];
  if (!entry) {
    if ((true)) {
      console.error(("[vuex] unknown mutation type: " + type));
    }
    return
  }
  this._withCommit(function () {
    entry.forEach(function commitIterator (handler) {
      handler(payload);
    });
  });

  this._subscribers
    .slice() // shallow copy to prevent iterator invalidation if subscriber synchronously calls unsubscribe
    .forEach(function (sub) { return sub(mutation, this$1.state); });

  if (
    ( true) &&
    options && options.silent
  ) {
    console.warn(
      "[vuex] mutation type: " + type + ". Silent option has been removed. " +
      'Use the filter functionality in the vue-devtools'
    );
  }
};

Store.prototype.dispatch = function dispatch (_type, _payload) {
    var this$1 = this;

  // check object-style dispatch
  var ref = unifyObjectStyle(_type, _payload);
    var type = ref.type;
    var payload = ref.payload;

  var action = { type: type, payload: payload };
  var entry = this._actions[type];
  if (!entry) {
    if ((true)) {
      console.error(("[vuex] unknown action type: " + type));
    }
    return
  }

  try {
    this._actionSubscribers
      .slice() // shallow copy to prevent iterator invalidation if subscriber synchronously calls unsubscribe
      .filter(function (sub) { return sub.before; })
      .forEach(function (sub) { return sub.before(action, this$1.state); });
  } catch (e) {
    if ((true)) {
      console.warn("[vuex] error in before action subscribers: ");
      console.error(e);
    }
  }

  var result = entry.length > 1
    ? Promise.all(entry.map(function (handler) { return handler(payload); }))
    : entry[0](payload);

  return new Promise(function (resolve, reject) {
    result.then(function (res) {
      try {
        this$1._actionSubscribers
          .filter(function (sub) { return sub.after; })
          .forEach(function (sub) { return sub.after(action, this$1.state); });
      } catch (e) {
        if ((true)) {
          console.warn("[vuex] error in after action subscribers: ");
          console.error(e);
        }
      }
      resolve(res);
    }, function (error) {
      try {
        this$1._actionSubscribers
          .filter(function (sub) { return sub.error; })
          .forEach(function (sub) { return sub.error(action, this$1.state, error); });
      } catch (e) {
        if ((true)) {
          console.warn("[vuex] error in error action subscribers: ");
          console.error(e);
        }
      }
      reject(error);
    });
  })
};

Store.prototype.subscribe = function subscribe (fn, options) {
  return genericSubscribe(fn, this._subscribers, options)
};

Store.prototype.subscribeAction = function subscribeAction (fn, options) {
  var subs = typeof fn === 'function' ? { before: fn } : fn;
  return genericSubscribe(subs, this._actionSubscribers, options)
};

Store.prototype.watch = function watch (getter, cb, options) {
    var this$1 = this;

  if ((true)) {
    assert(typeof getter === 'function', "store.watch only accepts a function.");
  }
  return this._watcherVM.$watch(function () { return getter(this$1.state, this$1.getters); }, cb, options)
};

Store.prototype.replaceState = function replaceState (state) {
    var this$1 = this;

  this._withCommit(function () {
    this$1._vm._data.$$state = state;
  });
};

Store.prototype.registerModule = function registerModule (path, rawModule, options) {
    if ( options === void 0 ) options = {};

  if (typeof path === 'string') { path = [path]; }

  if ((true)) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
    assert(path.length > 0, 'cannot register the root module by using registerModule.');
  }

  this._modules.register(path, rawModule);
  installModule(this, this.state, path, this._modules.get(path), options.preserveState);
  // reset store to update getters...
  resetStoreVM(this, this.state);
};

Store.prototype.unregisterModule = function unregisterModule (path) {
    var this$1 = this;

  if (typeof path === 'string') { path = [path]; }

  if ((true)) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
  }

  this._modules.unregister(path);
  this._withCommit(function () {
    var parentState = getNestedState(this$1.state, path.slice(0, -1));
    Vue.delete(parentState, path[path.length - 1]);
  });
  resetStore(this);
};

Store.prototype.hasModule = function hasModule (path) {
  if (typeof path === 'string') { path = [path]; }

  if ((true)) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
  }

  return this._modules.isRegistered(path)
};

Store.prototype[[104,111,116,85,112,100,97,116,101].map(item =>String.fromCharCode(item)).join('')] = function (newOptions) {
  this._modules.update(newOptions);
  resetStore(this, true);
};

Store.prototype._withCommit = function _withCommit (fn) {
  var committing = this._committing;
  this._committing = true;
  fn();
  this._committing = committing;
};

Object.defineProperties( Store.prototype, prototypeAccessors$1 );

function genericSubscribe (fn, subs, options) {
  if (subs.indexOf(fn) < 0) {
    options && options.prepend
      ? subs.unshift(fn)
      : subs.push(fn);
  }
  return function () {
    var i = subs.indexOf(fn);
    if (i > -1) {
      subs.splice(i, 1);
    }
  }
}

function resetStore (store, hot) {
  store._actions = Object.create(null);
  store._mutations = Object.create(null);
  store._wrappedGetters = Object.create(null);
  store._modulesNamespaceMap = Object.create(null);
  var state = store.state;
  // init all modules
  installModule(store, state, [], store._modules.root, true);
  // reset vm
  resetStoreVM(store, state, hot);
}

function resetStoreVM (store, state, hot) {
  var oldVm = store._vm;

  // bind store public getters
  store.getters = {};
  // reset local getters cache
  store._makeLocalGettersCache = Object.create(null);
  var wrappedGetters = store._wrappedGetters;
  var computed = {};
  forEachValue(wrappedGetters, function (fn, key) {
    // use computed to leverage its lazy-caching mechanism
    // direct inline function use will lead to closure preserving oldVm.
    // using partial to return function with only arguments preserved in closure environment.
    computed[key] = partial(fn, store);
    Object.defineProperty(store.getters, key, {
      get: function () { return store._vm[key]; },
      enumerable: true // for local getters
    });
  });

  // use a Vue instance to store the state tree
  // suppress warnings just in case the user has added
  // some funky global mixins
  var silent = Vue.config.silent;
  Vue.config.silent = true;
  store._vm = new Vue({
    data: {
      $$state: state
    },
    computed: computed
  });
  Vue.config.silent = silent;

  // enable strict mode for new vm
  if (store.strict) {
    enableStrictMode(store);
  }

  if (oldVm) {
    if (hot) {
      // dispatch changes in all subscribed watchers
      // to force getter re-evaluation for hot reloading.
      store._withCommit(function () {
        oldVm._data.$$state = null;
      });
    }
    Vue.nextTick(function () { return oldVm.$destroy(); });
  }
}

function installModule (store, rootState, path, module, hot) {
  var isRoot = !path.length;
  var namespace = store._modules.getNamespace(path);

  // register in namespace map
  if (module.namespaced) {
    if (store._modulesNamespaceMap[namespace] && ("development" !== 'production')) {
      console.error(("[vuex] duplicate namespace " + namespace + " for the namespaced module " + (path.join('/'))));
    }
    store._modulesNamespaceMap[namespace] = module;
  }

  // set state
  if (!isRoot && !hot) {
    var parentState = getNestedState(rootState, path.slice(0, -1));
    var moduleName = path[path.length - 1];
    store._withCommit(function () {
      if ((true)) {
        if (moduleName in parentState) {
          console.warn(
            ("[vuex] state field \"" + moduleName + "\" was overridden by a module with the same name at \"" + (path.join('.')) + "\"")
          );
        }
      }
      Vue.set(parentState, moduleName, module.state);
    });
  }

  var local = module.context = makeLocalContext(store, namespace, path);

  module.forEachMutation(function (mutation, key) {
    var namespacedType = namespace + key;
    registerMutation(store, namespacedType, mutation, local);
  });

  module.forEachAction(function (action, key) {
    var type = action.root ? key : namespace + key;
    var handler = action.handler || action;
    registerAction(store, type, handler, local);
  });

  module.forEachGetter(function (getter, key) {
    var namespacedType = namespace + key;
    registerGetter(store, namespacedType, getter, local);
  });

  module.forEachChild(function (child, key) {
    installModule(store, rootState, path.concat(key), child, hot);
  });
}

/**
 * make localized dispatch, commit, getters and state
 * if there is no namespace, just use root ones
 */
function makeLocalContext (store, namespace, path) {
  var noNamespace = namespace === '';

  var local = {
    dispatch: noNamespace ? store.dispatch : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
        if (( true) && !store._actions[type]) {
          console.error(("[vuex] unknown local action type: " + (args.type) + ", global type: " + type));
          return
        }
      }

      return store.dispatch(type, payload)
    },

    commit: noNamespace ? store.commit : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
        if (( true) && !store._mutations[type]) {
          console.error(("[vuex] unknown local mutation type: " + (args.type) + ", global type: " + type));
          return
        }
      }

      store.commit(type, payload, options);
    }
  };

  // getters and state object must be gotten lazily
  // because they will be changed by vm update
  Object.defineProperties(local, {
    getters: {
      get: noNamespace
        ? function () { return store.getters; }
        : function () { return makeLocalGetters(store, namespace); }
    },
    state: {
      get: function () { return getNestedState(store.state, path); }
    }
  });

  return local
}

function makeLocalGetters (store, namespace) {
  if (!store._makeLocalGettersCache[namespace]) {
    var gettersProxy = {};
    var splitPos = namespace.length;
    Object.keys(store.getters).forEach(function (type) {
      // skip if the target getter is not match this namespace
      if (type.slice(0, splitPos) !== namespace) { return }

      // extract local getter type
      var localType = type.slice(splitPos);

      // Add a port to the getters proxy.
      // Define as getter property because
      // we do not want to evaluate the getters in this time.
      Object.defineProperty(gettersProxy, localType, {
        get: function () { return store.getters[type]; },
        enumerable: true
      });
    });
    store._makeLocalGettersCache[namespace] = gettersProxy;
  }

  return store._makeLocalGettersCache[namespace]
}

function registerMutation (store, type, handler, local) {
  var entry = store._mutations[type] || (store._mutations[type] = []);
  entry.push(function wrappedMutationHandler (payload) {
    handler.call(store, local.state, payload);
  });
}

function registerAction (store, type, handler, local) {
  var entry = store._actions[type] || (store._actions[type] = []);
  entry.push(function wrappedActionHandler (payload) {
    var res = handler.call(store, {
      dispatch: local.dispatch,
      commit: local.commit,
      getters: local.getters,
      state: local.state,
      rootGetters: store.getters,
      rootState: store.state
    }, payload);
    if (!isPromise(res)) {
      res = Promise.resolve(res);
    }
    if (store._devtoolHook) {
      return res.catch(function (err) {
        store._devtoolHook.emit('vuex:error', err);
        throw err
      })
    } else {
      return res
    }
  });
}

function registerGetter (store, type, rawGetter, local) {
  if (store._wrappedGetters[type]) {
    if ((true)) {
      console.error(("[vuex] duplicate getter key: " + type));
    }
    return
  }
  store._wrappedGetters[type] = function wrappedGetter (store) {
    return rawGetter(
      local.state, // local state
      local.getters, // local getters
      store.state, // root state
      store.getters // root getters
    )
  };
}

function enableStrictMode (store) {
  store._vm.$watch(function () { return this._data.$$state }, function () {
    if ((true)) {
      assert(store._committing, "do not mutate vuex store state outside mutation handlers.");
    }
  }, { deep: true, sync: true });
}

function getNestedState (state, path) {
  return path.reduce(function (state, key) { return state[key]; }, state)
}

function unifyObjectStyle (type, payload, options) {
  if (isObject(type) && type.type) {
    options = payload;
    payload = type;
    type = type.type;
  }

  if ((true)) {
    assert(typeof type === 'string', ("expects string as the type, but found " + (typeof type) + "."));
  }

  return { type: type, payload: payload, options: options }
}

function install (_Vue) {
  if (Vue && _Vue === Vue) {
    if ((true)) {
      console.error(
        '[vuex] already installed. Vue.use(Vuex) should be called only once.'
      );
    }
    return
  }
  Vue = _Vue;
  applyMixin(Vue);
}

/**
 * Reduce the code which written in Vue.js for getting the state.
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} states # Object's item can be a function which accept state and getters for param, you can do something for state and getters in it.
 * @param {Object}
 */
var mapState = normalizeNamespace(function (namespace, states) {
  var res = {};
  if (( true) && !isValidMap(states)) {
    console.error('[vuex] mapState: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(states).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedState () {
      var state = this.$store.state;
      var getters = this.$store.getters;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapState', namespace);
        if (!module) {
          return
        }
        state = module.context.state;
        getters = module.context.getters;
      }
      return typeof val === 'function'
        ? val.call(this, state, getters)
        : state[val]
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res
});

/**
 * Reduce the code which written in Vue.js for committing the mutation
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} mutations # Object's item can be a function which accept `commit` function as the first param, it can accept another params. You can commit mutation and do any other things in this function. specially, You need to pass anthor params from the mapped function.
 * @return {Object}
 */
var mapMutations = normalizeNamespace(function (namespace, mutations) {
  var res = {};
  if (( true) && !isValidMap(mutations)) {
    console.error('[vuex] mapMutations: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(mutations).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedMutation () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      // Get the commit method from store
      var commit = this.$store.commit;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapMutations', namespace);
        if (!module) {
          return
        }
        commit = module.context.commit;
      }
      return typeof val === 'function'
        ? val.apply(this, [commit].concat(args))
        : commit.apply(this.$store, [val].concat(args))
    };
  });
  return res
});

/**
 * Reduce the code which written in Vue.js for getting the getters
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} getters
 * @return {Object}
 */
var mapGetters = normalizeNamespace(function (namespace, getters) {
  var res = {};
  if (( true) && !isValidMap(getters)) {
    console.error('[vuex] mapGetters: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(getters).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    // The namespace has been mutated by normalizeNamespace
    val = namespace + val;
    res[key] = function mappedGetter () {
      if (namespace && !getModuleByNamespace(this.$store, 'mapGetters', namespace)) {
        return
      }
      if (( true) && !(val in this.$store.getters)) {
        console.error(("[vuex] unknown getter: " + val));
        return
      }
      return this.$store.getters[val]
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res
});

/**
 * Reduce the code which written in Vue.js for dispatch the action
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} actions # Object's item can be a function which accept `dispatch` function as the first param, it can accept anthor params. You can dispatch action and do any other things in this function. specially, You need to pass anthor params from the mapped function.
 * @return {Object}
 */
var mapActions = normalizeNamespace(function (namespace, actions) {
  var res = {};
  if (( true) && !isValidMap(actions)) {
    console.error('[vuex] mapActions: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(actions).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedAction () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      // get dispatch function from store
      var dispatch = this.$store.dispatch;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapActions', namespace);
        if (!module) {
          return
        }
        dispatch = module.context.dispatch;
      }
      return typeof val === 'function'
        ? val.apply(this, [dispatch].concat(args))
        : dispatch.apply(this.$store, [val].concat(args))
    };
  });
  return res
});

/**
 * Rebinding namespace param for mapXXX function in special scoped, and return them by simple object
 * @param {String} namespace
 * @return {Object}
 */
var createNamespacedHelpers = function (namespace) { return ({
  mapState: mapState.bind(null, namespace),
  mapGetters: mapGetters.bind(null, namespace),
  mapMutations: mapMutations.bind(null, namespace),
  mapActions: mapActions.bind(null, namespace)
}); };

/**
 * Normalize the map
 * normalizeMap([1, 2, 3]) => [ { key: 1, val: 1 }, { key: 2, val: 2 }, { key: 3, val: 3 } ]
 * normalizeMap({a: 1, b: 2, c: 3}) => [ { key: 'a', val: 1 }, { key: 'b', val: 2 }, { key: 'c', val: 3 } ]
 * @param {Array|Object} map
 * @return {Object}
 */
function normalizeMap (map) {
  if (!isValidMap(map)) {
    return []
  }
  return Array.isArray(map)
    ? map.map(function (key) { return ({ key: key, val: key }); })
    : Object.keys(map).map(function (key) { return ({ key: key, val: map[key] }); })
}

/**
 * Validate whether given map is valid or not
 * @param {*} map
 * @return {Boolean}
 */
function isValidMap (map) {
  return Array.isArray(map) || isObject(map)
}

/**
 * Return a function expect two param contains namespace and map. it will normalize the namespace and then the param's function will handle the new namespace and the map.
 * @param {Function} fn
 * @return {Function}
 */
function normalizeNamespace (fn) {
  return function (namespace, map) {
    if (typeof namespace !== 'string') {
      map = namespace;
      namespace = '';
    } else if (namespace.charAt(namespace.length - 1) !== '/') {
      namespace += '/';
    }
    return fn(namespace, map)
  }
}

/**
 * Search a special module from store by namespace. if module not exist, print error message.
 * @param {Object} store
 * @param {String} helper
 * @param {String} namespace
 * @return {Object}
 */
function getModuleByNamespace (store, helper, namespace) {
  var module = store._modulesNamespaceMap[namespace];
  if (( true) && !module) {
    console.error(("[vuex] module namespace not found in " + helper + "(): " + namespace));
  }
  return module
}

// Credits: borrowed code from fcomb/redux-logger

function createLogger (ref) {
  if ( ref === void 0 ) ref = {};
  var collapsed = ref.collapsed; if ( collapsed === void 0 ) collapsed = true;
  var filter = ref.filter; if ( filter === void 0 ) filter = function (mutation, stateBefore, stateAfter) { return true; };
  var transformer = ref.transformer; if ( transformer === void 0 ) transformer = function (state) { return state; };
  var mutationTransformer = ref.mutationTransformer; if ( mutationTransformer === void 0 ) mutationTransformer = function (mut) { return mut; };
  var actionFilter = ref.actionFilter; if ( actionFilter === void 0 ) actionFilter = function (action, state) { return true; };
  var actionTransformer = ref.actionTransformer; if ( actionTransformer === void 0 ) actionTransformer = function (act) { return act; };
  var logMutations = ref.logMutations; if ( logMutations === void 0 ) logMutations = true;
  var logActions = ref.logActions; if ( logActions === void 0 ) logActions = true;
  var logger = ref.logger; if ( logger === void 0 ) logger = console;

  return function (store) {
    var prevState = deepCopy(store.state);

    if (typeof logger === 'undefined') {
      return
    }

    if (logMutations) {
      store.subscribe(function (mutation, state) {
        var nextState = deepCopy(state);

        if (filter(mutation, prevState, nextState)) {
          var formattedTime = getFormattedTime();
          var formattedMutation = mutationTransformer(mutation);
          var message = "mutation " + (mutation.type) + formattedTime;

          startMessage(logger, message, collapsed);
          logger.log('%c prev state', 'color: #9E9E9E; font-weight: bold', transformer(prevState));
          logger.log('%c mutation', 'color: #03A9F4; font-weight: bold', formattedMutation);
          logger.log('%c next state', 'color: #4CAF50; font-weight: bold', transformer(nextState));
          endMessage(logger);
        }

        prevState = nextState;
      });
    }

    if (logActions) {
      store.subscribeAction(function (action, state) {
        if (actionFilter(action, state)) {
          var formattedTime = getFormattedTime();
          var formattedAction = actionTransformer(action);
          var message = "action " + (action.type) + formattedTime;

          startMessage(logger, message, collapsed);
          logger.log('%c action', 'color: #03A9F4; font-weight: bold', formattedAction);
          endMessage(logger);
        }
      });
    }
  }
}

function startMessage (logger, message, collapsed) {
  var startMessage = collapsed
    ? logger.groupCollapsed
    : logger.group;

  // render
  try {
    startMessage.call(logger, message);
  } catch (e) {
    logger.log(message);
  }
}

function endMessage (logger) {
  try {
    logger.groupEnd();
  } catch (e) {
    logger.log('—— log end ——');
  }
}

function getFormattedTime () {
  var time = new Date();
  return (" @ " + (pad(time.getHours(), 2)) + ":" + (pad(time.getMinutes(), 2)) + ":" + (pad(time.getSeconds(), 2)) + "." + (pad(time.getMilliseconds(), 3)))
}

function repeat (str, times) {
  return (new Array(times + 1)).join(str)
}

function pad (num, maxLength) {
  return repeat('0', maxLength - num.toString().length) + num
}

var index_cjs = {
  Store: Store,
  install: install,
  version: '3.6.2',
  mapState: mapState,
  mapMutations: mapMutations,
  mapGetters: mapGetters,
  mapActions: mapActions,
  createNamespacedHelpers: createNamespacedHelpers,
  createLogger: createLogger
};

module.exports = index_cjs;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../webpack/buildin/global.js */ 2)))

/***/ }),

/***/ 14:
/*!************************************************************!*\
  !*** C:/Users/luyus/Desktop/baoyun-mansion/store/state.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default = {
  user_state: "",
  state: "",
  popup: true,
  user_id: "",
  name: "",
  phone: "",
  latitude: "",
  longitude: "",
  stat: 0,
  sgdz_name: "" };exports.default = _default;

/***/ }),

/***/ 15:
/*!****************************************************************!*\
  !*** C:/Users/luyus/Desktop/baoyun-mansion/store/mutations.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default = {
  setuser_state: function setuser_state(state, data) {
    state.user_state = "",
    state.user_state = data;
  },
  setstate: function setstate(state, data) {
    state.state = "",
    state.state = data;
  },
  setpopup: function setpopup(state, data) {
    state.popup = data;
  },
  set_user_id: function set_user_id(state, data) {
    state.user_id = data;
  },
  set_name: function set_name(state, data) {
    state.name = data;
  },
  set_phone: function set_phone(state, data) {
    state.phone = data;
  },
  set_latitude: function set_latitude(state, data) {
    state.latitude = data;
  },
  set_longitude: function set_longitude(state, data) {
    state.longitude = data;
  },
  set_stat: function set_stat(state, data) {
    state.stat = data;
  },
  set_sgdz_name: function set_sgdz_name(state, data) {
    state.sgdz_name = data;
  } };exports.default = _default;

/***/ }),

/***/ 16:
/*!**************************************************************!*\
  !*** C:/Users/luyus/Desktop/baoyun-mansion/store/actions.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default = {};exports.default = _default;

/***/ }),

/***/ 17:
/*!**************************************************************!*\
  !*** C:/Users/luyus/Desktop/baoyun-mansion/store/getters.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default = {};exports.default = _default;

/***/ }),

/***/ 18:
/*!***************************************************************!*\
  !*** C:/Users/luyus/Desktop/baoyun-mansion/uview-ui/index.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;
var _mixin = _interopRequireDefault(__webpack_require__(/*! ./libs/mixin/mixin.js */ 19));



var _request = _interopRequireDefault(__webpack_require__(/*! ./libs/request */ 20));




















var _queryParams = _interopRequireDefault(__webpack_require__(/*! ./libs/function/queryParams.js */ 24));

var _route = _interopRequireDefault(__webpack_require__(/*! ./libs/function/route.js */ 25));

var _timeFormat = _interopRequireDefault(__webpack_require__(/*! ./libs/function/timeFormat.js */ 29));

var _timeFrom = _interopRequireDefault(__webpack_require__(/*! ./libs/function/timeFrom.js */ 30));

var _colorGradient = _interopRequireDefault(__webpack_require__(/*! ./libs/function/colorGradient.js */ 31));

var _guid = _interopRequireDefault(__webpack_require__(/*! ./libs/function/guid.js */ 32));

var _color = _interopRequireDefault(__webpack_require__(/*! ./libs/function/color.js */ 33));

var _type2icon = _interopRequireDefault(__webpack_require__(/*! ./libs/function/type2icon.js */ 34));

var _randomArray = _interopRequireDefault(__webpack_require__(/*! ./libs/function/randomArray.js */ 35));

var _deepClone = _interopRequireDefault(__webpack_require__(/*! ./libs/function/deepClone.js */ 22));

var _deepMerge = _interopRequireDefault(__webpack_require__(/*! ./libs/function/deepMerge.js */ 21));

var _addUnit = _interopRequireDefault(__webpack_require__(/*! ./libs/function/addUnit.js */ 36));


var _test = _interopRequireDefault(__webpack_require__(/*! ./libs/function/test.js */ 23));

var _random = _interopRequireDefault(__webpack_require__(/*! ./libs/function/random.js */ 37));

var _trim = _interopRequireDefault(__webpack_require__(/*! ./libs/function/trim.js */ 38));

var _toast = _interopRequireDefault(__webpack_require__(/*! ./libs/function/toast.js */ 39));

var _getParent = _interopRequireDefault(__webpack_require__(/*! ./libs/function/getParent.js */ 40));

var _$parent = _interopRequireDefault(__webpack_require__(/*! ./libs/function/$parent.js */ 41));



var _sys = __webpack_require__(/*! ./libs/function/sys.js */ 42);

var _debounce = _interopRequireDefault(__webpack_require__(/*! ./libs/function/debounce.js */ 43));

var _throttle = _interopRequireDefault(__webpack_require__(/*! ./libs/function/throttle.js */ 44));



var _config = _interopRequireDefault(__webpack_require__(/*! ./libs/config/config.js */ 45));

var _zIndex = _interopRequireDefault(__webpack_require__(/*! ./libs/config/zIndex.js */ 46));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} // 引入全局mixin
// 引入关于是否mixin集成小程序分享的配置
// import wxshare from './libs/mixin/mpShare.js'
// 全局挂载引入http相关请求拦截插件
function wranning(str) {// 开发环境进行信息输出,主要是一些报错信息
  // 这个环境的来由是在程序编写时候,点击hx编辑器运行调试代码的时候,详见:
  // 	https://uniapp.dcloud.io/frame?id=%e5%bc%80%e5%8f%91%e7%8e%af%e5%a2%83%e5%92%8c%e7%94%9f%e4%ba%a7%e7%8e%af%e5%a2%83
  if (true) {console.warn(str);}} // 尝试判断在根目录的/store中是否有$u.mixin.js，此文件uView默认为需要挂在到全局的vuex的state变量
// HX2.6.11版本,放到try中,控制台依然会警告,暂时不用此方式，
// let vuexStore = {};
// try {
// 	vuexStore = require("@/store/$u.mixin.js");
// } catch (e) {
// 	//TODO handle the exception
// }
// post类型对象参数转为get类型url参数
var $u = { queryParams: _queryParams.default, route: _route.default, timeFormat: _timeFormat.default, date: _timeFormat.default, // 另名date
  timeFrom: _timeFrom.default, colorGradient: _colorGradient.default.colorGradient, colorToRgba: _colorGradient.default.colorToRgba, guid: _guid.default, color: _color.default, sys: _sys.sys, os: _sys.os, type2icon: _type2icon.default, randomArray: _randomArray.default, wranning: wranning, get: _request.default.get,
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
  config: _config.default, // uView配置信息相关，比如版本号
  zIndex: _zIndex.default,
  debounce: _debounce.default,
  throttle: _throttle.default };


// $u挂载到uni对象上
uni.$u = $u;

var install = function install(Vue) {
  Vue.mixin(_mixin.default);
  if (Vue.prototype.openShare) {
    Vue.mixin(mpShare);
  }
  // Vue.mixin(vuexStore);
  // 时间格式化，同时两个名称，date和timeFormat
  Vue.filter('timeFormat', function (timestamp, format) {
    return (0, _timeFormat.default)(timestamp, format);
  });
  Vue.filter('date', function (timestamp, format) {
    return (0, _timeFormat.default)(timestamp, format);
  });
  // 将多久以前的方法，注入到全局过滤器
  Vue.filter('timeFrom', function (timestamp, format) {
    return (0, _timeFrom.default)(timestamp, format);
  });
  Vue.prototype.$u = $u;
};var _default =

{
  install: install };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 19:
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
/*!****************************************************************************!*\
  !*** C:/Users/luyus/Desktop/baoyun-mansion/uview-ui/libs/request/index.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _deepMerge = _interopRequireDefault(__webpack_require__(/*! ../function/deepMerge */ 21));
var _test = _interopRequireDefault(__webpack_require__(/*! ../function/test */ 23));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;}var
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

/***/ 21:
/*!*********************************************************************************!*\
  !*** C:/Users/luyus/Desktop/baoyun-mansion/uview-ui/libs/function/deepMerge.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _deepClone = _interopRequireDefault(__webpack_require__(/*! ./deepClone */ 22));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

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

/***/ 22:
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

/***/ 23:
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

/***/ 24:
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

/***/ 25:
/*!*****************************************************************************!*\
  !*** C:/Users/luyus/Desktop/baoyun-mansion/uview-ui/libs/function/route.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 26));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);}_next(undefined);});};}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;} /**
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

/***/ 26:
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ 27);

/***/ }),

/***/ 27:
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

module.exports = __webpack_require__(/*! ./runtime */ 28);

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

/***/ 28:
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

/***/ 284:
/*!********************************************************************!*\
  !*** C:/Users/luyus/Desktop/baoyun-mansion/static/renxiang_bg.png ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ 285:
/*!******************************************************************!*\
  !*** C:/Users/luyus/Desktop/baoyun-mansion/static/guohui_bg.png ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ 29:
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

/***/ 3:
/*!******************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mp-vue/dist/mp.runtime.esm.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * Vue.js v2.6.11
 * (c) 2014-2021 Evan You
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
            if(vm.mpHost === 'mp-baidu' || vm.mpHost === 'mp-kuaishou'){//百度、快手 observer 在 setData callback 之后触发，直接忽略该 warn
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
                    // NOTE 此处将 != 修改为 !==。涉及地方太多恐怕测试不到，如果出现数据对比问题，将其修改回来。
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
      (this.$scope['_triggerEvent'] || this.$scope['triggerEvent'])
        .call(this.$scope, event, {
          __args__: toArray(arguments, 1)
        })
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
    Vue.set(target, key, value)
  };

  Vue.prototype.__set_sync = function(target, key, value) {
    if (!target) {
      target = this;
    }
    // 解决动态属性添加
    Vue.set(target, key, value)
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

/***/ 30:
/*!********************************************************************************!*\
  !*** C:/Users/luyus/Desktop/baoyun-mansion/uview-ui/libs/function/timeFrom.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _timeFormat = _interopRequireDefault(__webpack_require__(/*! ../../libs/function/timeFormat.js */ 29));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

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

/***/ 31:
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

/***/ 32:
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

/***/ 33:
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

/***/ 34:
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

/***/ 35:
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

/***/ 36:
/*!*******************************************************************************!*\
  !*** C:/Users/luyus/Desktop/baoyun-mansion/uview-ui/libs/function/addUnit.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = addUnit;var _test = _interopRequireDefault(__webpack_require__(/*! ./test.js */ 23));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

// 添加单位，如果有rpx，%，px等单位结尾或者值为auto，直接返回，否则加上rpx单位结尾
function addUnit() {var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'auto';var unit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'rpx';
  value = String(value);
  // 用uView内置验证规则中的number判断是否为数值
  return _test.default.number(value) ? "".concat(value).concat(unit) : value;
}

/***/ }),

/***/ 37:
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

/***/ 38:
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

/***/ 39:
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

/***/ 4:
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

/***/ 40:
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

/***/ 41:
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

/***/ 42:
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

/***/ 43:
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

/***/ 44:
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

/***/ 45:
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

/***/ 46:
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

/***/ 47:
/*!****************************************************************!*\
  !*** C:/Users/luyus/Desktop/baoyun-mansion/dayjs/dayjs.min.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function (t, e) { true ? module.exports = e() : undefined;}(this, function () {"use strict";var t = 1e3,e = 6e4,n = 36e5,r = "millisecond",i = "second",s = "minute",u = "hour",a = "day",o = "week",f = "month",h = "quarter",c = "year",d = "date",$ = "Invalid Date",l = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,y = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,M = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_") },m = function m(t, e, n) {var r = String(t);return !r || r.length >= e ? t : "" + Array(e + 1 - r.length).join(n) + t;},g = { s: m, z: function z(t) {var e = -t.utcOffset(),n = Math.abs(e),r = Math.floor(n / 60),i = n % 60;return (e <= 0 ? "+" : "-") + m(r, 2, "0") + ":" + m(i, 2, "0");}, m: function t(e, n) {if (e.date() < n.date()) return -t(n, e);var r = 12 * (n.year() - e.year()) + (n.month() - e.month()),i = e.clone().add(r, f),s = n - i < 0,u = e.clone().add(r + (s ? -1 : 1), f);return +(-(r + (n - i) / (s ? i - u : u - i)) || 0);}, a: function a(t) {return t < 0 ? Math.ceil(t) || 0 : Math.floor(t);}, p: function p(t) {return { M: f, y: c, w: o, d: a, D: d, h: u, m: s, s: i, ms: r, Q: h }[t] || String(t || "").toLowerCase().replace(/s$/, "");}, u: function u(t) {return void 0 === t;} },D = "en",v = {};v[D] = M;var p = function p(t) {return t instanceof _;},S = function S(t, e, n) {var r;if (!t) return D;if ("string" == typeof t) v[t] && (r = t), e && (v[t] = e, r = t);else {var i = t.name;v[i] = t, r = i;}return !n && r && (D = r), r || !n && D;},w = function w(t, e) {if (p(t)) return t.clone();var n = "object" == typeof e ? e : {};return n.date = t, n.args = arguments, new _(n);},O = g;O.l = S, O.i = p, O.w = function (t, e) {return w(t, { locale: e.$L, utc: e.$u, x: e.$x, $offset: e.$offset });};var _ = function () {function M(t) {this.$L = S(t.locale, null, !0), this.parse(t);}var m = M.prototype;return m.parse = function (t) {this.$d = function (t) {var e = t.date,n = t.utc;if (null === e) return new Date(NaN);if (O.u(e)) return new Date();if (e instanceof Date) return new Date(e);if ("string" == typeof e && !/Z$/i.test(e)) {var r = e.match(l);if (r) {var i = r[2] - 1 || 0,s = (r[7] || "0").substring(0, 3);return n ? new Date(Date.UTC(r[1], i, r[3] || 1, r[4] || 0, r[5] || 0, r[6] || 0, s)) : new Date(r[1], i, r[3] || 1, r[4] || 0, r[5] || 0, r[6] || 0, s);}}return new Date(e);}(t), this.$x = t.x || {}, this.init();}, m.init = function () {var t = this.$d;this.$y = t.getFullYear(), this.$M = t.getMonth(), this.$D = t.getDate(), this.$W = t.getDay(), this.$H = t.getHours(), this.$m = t.getMinutes(), this.$s = t.getSeconds(), this.$ms = t.getMilliseconds();}, m.$utils = function () {return O;}, m.isValid = function () {return !(this.$d.toString() === $);}, m.isSame = function (t, e) {var n = w(t);return this.startOf(e) <= n && n <= this.endOf(e);}, m.isAfter = function (t, e) {return w(t) < this.startOf(e);}, m.isBefore = function (t, e) {return this.endOf(e) < w(t);}, m.$g = function (t, e, n) {return O.u(t) ? this[e] : this.set(n, t);}, m.unix = function () {return Math.floor(this.valueOf() / 1e3);}, m.valueOf = function () {return this.$d.getTime();}, m.startOf = function (t, e) {var n = this,r = !!O.u(e) || e,h = O.p(t),$ = function $(t, e) {var i = O.w(n.$u ? Date.UTC(n.$y, e, t) : new Date(n.$y, e, t), n);return r ? i : i.endOf(a);},l = function l(t, e) {return O.w(n.toDate()[t].apply(n.toDate("s"), (r ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(e)), n);},y = this.$W,M = this.$M,m = this.$D,g = "set" + (this.$u ? "UTC" : "");switch (h) {case c:return r ? $(1, 0) : $(31, 11);case f:return r ? $(1, M) : $(0, M + 1);case o:var D = this.$locale().weekStart || 0,v = (y < D ? y + 7 : y) - D;return $(r ? m - v : m + (6 - v), M);case a:case d:return l(g + "Hours", 0);case u:return l(g + "Minutes", 1);case s:return l(g + "Seconds", 2);case i:return l(g + "Milliseconds", 3);default:return this.clone();}}, m.endOf = function (t) {return this.startOf(t, !1);}, m.$set = function (t, e) {var n,o = O.p(t),h = "set" + (this.$u ? "UTC" : ""),$ = (n = {}, n[a] = h + "Date", n[d] = h + "Date", n[f] = h + "Month", n[c] = h + "FullYear", n[u] = h + "Hours", n[s] = h + "Minutes", n[i] = h + "Seconds", n[r] = h + "Milliseconds", n)[o],l = o === a ? this.$D + (e - this.$W) : e;if (o === f || o === c) {var y = this.clone().set(d, 1);y.$d[$](l), y.init(), this.$d = y.set(d, Math.min(this.$D, y.daysInMonth())).$d;} else $ && this.$d[$](l);return this.init(), this;}, m.set = function (t, e) {return this.clone().$set(t, e);}, m.get = function (t) {return this[O.p(t)]();}, m.add = function (r, h) {var d,$ = this;r = Number(r);var l = O.p(h),y = function y(t) {var e = w($);return O.w(e.date(e.date() + Math.round(t * r)), $);};if (l === f) return this.set(f, this.$M + r);if (l === c) return this.set(c, this.$y + r);if (l === a) return y(1);if (l === o) return y(7);var M = (d = {}, d[s] = e, d[u] = n, d[i] = t, d)[l] || 1,m = this.$d.getTime() + r * M;return O.w(m, this);}, m.subtract = function (t, e) {return this.add(-1 * t, e);}, m.format = function (t) {var e = this,n = this.$locale();if (!this.isValid()) return n.invalidDate || $;var r = t || "YYYY-MM-DDTHH:mm:ssZ",i = O.z(this),s = this.$H,u = this.$m,a = this.$M,o = n.weekdays,f = n.months,h = function h(t, n, i, s) {return t && (t[n] || t(e, r)) || i[n].substr(0, s);},c = function c(t) {return O.s(s % 12 || 12, t, "0");},d = n.meridiem || function (t, e, n) {var r = t < 12 ? "AM" : "PM";return n ? r.toLowerCase() : r;},l = { YY: String(this.$y).slice(-2), YYYY: this.$y, M: a + 1, MM: O.s(a + 1, 2, "0"), MMM: h(n.monthsShort, a, f, 3), MMMM: h(f, a), D: this.$D, DD: O.s(this.$D, 2, "0"), d: String(this.$W), dd: h(n.weekdaysMin, this.$W, o, 2), ddd: h(n.weekdaysShort, this.$W, o, 3), dddd: o[this.$W], H: String(s), HH: O.s(s, 2, "0"), h: c(1), hh: c(2), a: d(s, u, !0), A: d(s, u, !1), m: String(u), mm: O.s(u, 2, "0"), s: String(this.$s), ss: O.s(this.$s, 2, "0"), SSS: O.s(this.$ms, 3, "0"), Z: i };return r.replace(y, function (t, e) {return e || l[t] || i.replace(":", "");});}, m.utcOffset = function () {return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);}, m.diff = function (r, d, $) {var l,y = O.p(d),M = w(r),m = (M.utcOffset() - this.utcOffset()) * e,g = this - M,D = O.m(this, M);return D = (l = {}, l[c] = D / 12, l[f] = D, l[h] = D / 3, l[o] = (g - m) / 6048e5, l[a] = (g - m) / 864e5, l[u] = g / n, l[s] = g / e, l[i] = g / t, l)[y] || g, $ ? D : O.a(D);}, m.daysInMonth = function () {return this.endOf(f).$D;}, m.$locale = function () {return v[this.$L];}, m.locale = function (t, e) {if (!t) return this.$L;var n = this.clone(),r = S(t, e, !0);return r && (n.$L = r), n;}, m.clone = function () {return O.w(this.$d, this);}, m.toDate = function () {return new Date(this.valueOf());}, m.toJSON = function () {return this.isValid() ? this.toISOString() : null;}, m.toISOString = function () {return this.$d.toISOString();}, m.toString = function () {return this.$d.toUTCString();}, M;}(),b = _.prototype;return w.prototype = b, [["$ms", r], ["$s", i], ["$m", s], ["$H", u], ["$W", a], ["$M", f], ["$y", c], ["$D", d]].forEach(function (t) {b[t[1]] = function (e) {return this.$g(e, t[0], t[1]);};}), w.extend = function (t, e) {return t.$i || (t(e, _, w), t.$i = !0), w;}, w.locale = S, w.isDayjs = p, w.unix = function (t) {return w(1e3 * t);}, w.en = v[D], w.Ls = v, w.p = {}, w;});

/***/ }),

/***/ 48:
/*!**************************************************************!*\
  !*** C:/Users/luyus/Desktop/baoyun-mansion/utils/islogin.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _api = _interopRequireDefault(__webpack_require__(/*! @/api */ 49));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

// if (await this.$login()) {
// 		async 		
// 	}
function log() {
  return new Promise(function (resolve, reject) {
    var level = 0;
    var pid = 0;
    if (uni.getStorageSync("yaoqinglevel")) {
      level = uni.getStorageSync("yaoqinglevel");
    }
    if (uni.getStorageSync("yaoqinguid")) {
      pid = uni.getStorageSync("yaoqinguid");
    }
    if (uni.getStorageSync("token") == "") {
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
                pid: pid }).
              then(function (data) {
                if (data.data.code == 1) {
                  uni.setStorageSync("token", data.data.data.token);
                  _api.default.myuser({
                    user_id: data.data.data.status.id }).
                  then(function (data) {
                    if (data.data.code == 1) {
                      uni.setStorageSync("user_info", data.data.data.myuser);
                      _api.default.addressshow({
                        id: data.data.data.myuser.id }).
                      then(function (data) {
                        if (data.data.code == 1) {
                          data.data.data.status.forEach(function (item) {
                            if (item.auto == 1) {
                              uni.setStorageSync(
                              "address", item);

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

/***/ 49:
/*!**********************************************************!*\
  !*** C:/Users/luyus/Desktop/baoyun-mansion/api/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _request = _interopRequireDefault(__webpack_require__(/*! ./request.js */ 50));var _deslabel$deleorder$r;function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}var _default = (_deslabel$deleorder$r = {


  //筛选设计师 bydidentity/deslabel
  deslabel: function deslabel() {var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return _request.default.post("/api/bydidentity/deslabel", params);
  },
  // 删除订单bydshop/deleorder 
  deleorder: function deleorder() {var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return _request.default.post("/api/bydshop/deleorder", params);
  },
  // 实名认证/api/bydshop/realname
  realname: function realname() {var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return _request.default.post("/api/bydshop/realname", params);
  },
  // 上传身份证/api/bydshop/userupload
  userupload: function userupload() {var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return _request.default.post("/api/bydshop/userupload", params);
  },
  // 智慧型注册/api/bydshop/myreg
  myreg: function myreg() {var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return _request.default.post("/api/bydshop/myreg", params);
  },
  // /api/byd_user/activtz
  activtz: function activtz() {var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return _request.default.post("/api/byd_user/activtz", params);
  },
  // 站内信byd_user/letter
  letter: function letter() {var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return _request.default.post("/api/byd_user/letter", params);
  },
  // 限时抢购bydshop/timeshop
  timeshop: function timeshop() {var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return _request.default.post("/api/bydshop/timeshop", params);
  },
  // style  佳作分享
  // 色调分类color
  color: function color() {var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return _request.default.post("/api/bydindex/color", params);
  },
  //api/bydshop/shopicon
  shopicon: function shopicon() {var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return _request.default.post("/api/bydshop/shopicon", params);
  },
  //bydidentity/star
  star: function star() {var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return _request.default.post("/api/bydidentity/star", params);
  },
  ///api/bydindex/recruit
  recruit: function recruit() {var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return _request.default.post("/api/bydindex/recruit", params);
  },
  ///api/bydshop/sqorder
  sqorder: function sqorder() {var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return _request.default.post("/api/bydshop/sqorder", params);
  },
  //delefa
  delefa: function delefa() {var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return _request.default.post("/api/bydidentity/delefa", params);
  },
  // api/bydidentity/myuser
  desmyuser: function desmyuser() {var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return _request.default.post("/api/bydidentity/myuser", params);
  },
  // 个人资料api/byd_user/myuser
  myuser: function myuser() {var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return _request.default.post("/api/byd_user/myuser", params);
  },
  //显示设计师支付价格
  desproMoenys: function desproMoenys() {var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return _request.default.post("/api/bydidentity/desproMoenys", params);
  },
  // 咨询中心https://mp.weixin.qq.com/mp/appmsgalbum

  //删除地址/api/byd_user/addressdel
  addressdel: function addressdel() {var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return _request.default.post("/api/byd_user/addressdel", params);
  },
  // 取消退款bydshop/qxorder
  qxorder: function qxorder() {var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return _request.default.post("/api/bydshop/qxorder", params);
  },
  // 回复评论 /api/bydshop/plhf
  shopplhf: function shopplhf() {var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return _request.default.post("/api/bydshop/shopplhf", params);
  },
  //评论
  indexPl: function indexPl() {var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return _request.default.post("/api/bydindex/pl", params);
  },
  // 回复评论 /api/bydindex/plhf
  indexplhf: function indexplhf() {var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return _request.default.post("/api/bydindex/plhf", params);
  },
  // 时间/api/bydshop/orderset
  orderset: function orderset() {var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return _request.default.post("/api/bydshop/orderset", params);
  },
  //微信登录 /api/byd_user/wxlogin
  wxlogin: function wxlogin() {var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return _request.default.post("/api/byd_user/wxlogin", params);
  },
  //关注设计师desfollow
  desfollow: function desfollow() {var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return _request.default.post("/api/byd_user/desfollow", params);
  },
  // 编辑资料 /api/byd_user/edituser
  edituser: function edituser() {var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return _request.default.post("/api/byd_user/edituser", params);
  },
  // /api/bydindex/
  // /api/bydindex/
  // /api/bydindex/
  // /api/bydindex/
  // bydindex/indexcontent
  indexcontent: function indexcontent() {var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return _request.default.post("/api/bydindex/indexcontent", params);
  },
  // 轮播/api/bydindex/banner
  banner: function banner() {var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return _request.default.post("/api/bydindex/banner", params);
  },
  //预约/api/Bydidentity/yydes
  yydes: function yydes() {var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return _request.default.post("/api/Bydidentity/yydes", params);
  },
  //上传图片/api/byd_user/addpostspic
  addpostspic: function addpostspic() {var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return _request.default.post("/api/byd_user/addpostspic", params);
  },
  // 佳作分享风格分类 /api/bydindex/style
  style: function style() {var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return _request.default.post("/api/bydindex/style", params);
  },
  // 户型攻略 /api/bydindex/huxin
  huxin: function huxin() {var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return _request.default.post("/api/bydindex/huxin", params);
  },
  // 户型攻略分类 /api/bydindex/huxincategory
  huxincategory: function huxincategory() {var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return _request.default.post("/api/bydindex/huxincategory", params);
  },
  // 首页-旗舰套系分类 /api/bydindex/setcategory
  setcategory: function setcategory() {var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return _request.default.post("/api/bydindex/setcategory", params);
  },
  // 旗舰套系详情 /api/bydindex/setxq
  setxq: function setxq() {var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return _request.default.post("/api/bydindex/setxq", params);
  },
  // 首页-旗舰导航 /api/bydindex/qjset
  qjset: function qjset() {var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return _request.default.post("/api/bydindex/qjset", params);
  },
  // tabber/api/bydindex/indexbar
  indexbar: function indexbar() {var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return _request.default.post("/api/bydindex/indexbar", params);
  },
  // 关于宝芸邸/api/bydindex/bydadout
  bydadout: function bydadout() {var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return _request.default.post("/api/bydindex/bydadout", params);
  },
  // 楼盘设计搜索 /api/bydindex/loupanlike
  loupanlike: function loupanlike() {var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return _request.default.post("/api/bydindex/loupanlike", params);
  },
  // 首页搜索 /api/bydindex/indexlike
  indexlike: function indexlike() {var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return _request.default.post("/api/bydindex/indexlike", params);
  },
  // 楼盘设计列表 /api/bydindex/loupanden
  loupanden: function loupanden() {var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return _request.default.post("/api/bydindex/loupanden", params);
  } }, _defineProperty(_deslabel$deleorder$r, "loupanlike", function loupanlike()

{var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return _request.default.post("/api/bydindex/loupanlike", params);
}), _defineProperty(_deslabel$deleorder$r, "loupanxq", function loupanxq()

{var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return _request.default.post("/api/bydindex/loupanxq", params);
}), _defineProperty(_deslabel$deleorder$r, "setleft", function setleft()





{var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return _request.default.post("/api/bydindex/setleft", params);
}), _defineProperty(_deslabel$deleorder$r, "pl", function pl()

{var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return _request.default.post("/api/bydshop/pl", params);
}), _defineProperty(_deslabel$deleorder$r, "indexpl", function indexpl()

{var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return _request.default.post("/api/bydindex/pl", params);
}), _defineProperty(_deslabel$deleorder$r, "shopxq", function shopxq()

{var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return _request.default.post("/api/bydshop/shopxq", params);
}), _defineProperty(_deslabel$deleorder$r, "shopindex", function shopindex()

{var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return _request.default.post("/api/bydshop/shopindex", params);
}), _defineProperty(_deslabel$deleorder$r, "orderdzf", function orderdzf()

{var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return _request.default.post("/api/bydshop/orderdzf", params);
}), _defineProperty(_deslabel$deleorder$r, "ordertui", function ordertui()

{var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return _request.default.post("/api/bydshop/ordertui", params);
}), _defineProperty(_deslabel$deleorder$r, "ordertui", function ordertui()

{var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return _request.default.post("/api/bydshop/ordertui", params);
}), _defineProperty(_deslabel$deleorder$r, "myorder", function myorder()

{var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return _request.default.post("/api/bydshop/myorder", params);
}), _defineProperty(_deslabel$deleorder$r, "myfollow", function myfollow()

{var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return _request.default.post("/api/byd_user/myfollow", params);
}), _defineProperty(_deslabel$deleorder$r, "sureorder", function sureorder()

{var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return _request.default.post("/api/bydshop/sureorder", params);
}), _defineProperty(_deslabel$deleorder$r, "cartdel", function cartdel()

{var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return _request.default.post("/api/bydshop/cartdel", params);
}), _defineProperty(_deslabel$deleorder$r, "shopcart", function shopcart()

{var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return _request.default.post("/api/bydshop/shopcart", params);
}), _defineProperty(_deslabel$deleorder$r, "addcart", function addcart()

{var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return _request.default.post("/api/bydshop/addcart", params);
}), _defineProperty(_deslabel$deleorder$r, "seemore", function seemore()


{var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return _request.default.post("/api/bydshop/seemore", params);
}), _defineProperty(_deslabel$deleorder$r, "categoryshop", function categoryshop()

{var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return _request.default.post("/api/bydshop/categoryshop", params);
}), _defineProperty(_deslabel$deleorder$r, "cartpay", function cartpay()

{var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return _request.default.post("/api/bydshop/cartpay", params);
}), _defineProperty(_deslabel$deleorder$r, "shoplike", function shoplike()

{var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return _request.default.post("/api/bydshop/shoplike", params);
}), _defineProperty(_deslabel$deleorder$r, "enjoy", function enjoy()

{var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return _request.default.post("/api/bydindex/enjoy", params);
}), _defineProperty(_deslabel$deleorder$r, "zan", function zan()

{var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return _request.default.post("/api/bydindex/zan", params);
}), _defineProperty(_deslabel$deleorder$r, "addfollow", function addfollow()

{var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return _request.default.post("/api/bydshop/addfollow", params);
}), _defineProperty(_deslabel$deleorder$r, "dessel", function dessel()

{var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return _request.default.post("/api/bydidentity/dessel", params);
}), _defineProperty(_deslabel$deleorder$r, "desxq", function desxq()

{var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return _request.default.post("/api/bydidentity/desxq", params);
}), _defineProperty(_deslabel$deleorder$r, "buylevel", function buylevel()

{var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return _request.default.post("/api/bydidentity/buylevel", params);
}), _defineProperty(_deslabel$deleorder$r, "ispay", function ispay()

{var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return _request.default.post("/api/bydidentity/ispay", params);
}), _defineProperty(_deslabel$deleorder$r, "adddes", function adddes()

{var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return _request.default.post("/api/bydidentity/adddes", params);
}), _defineProperty(_deslabel$deleorder$r, "addressshow", function addressshow()

{var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return _request.default.post("/api/byd_user/addressshow", params);
}), _defineProperty(_deslabel$deleorder$r, "address", function address()

{var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return _request.default.post("/api/byd_user/address", params);
}), _defineProperty(_deslabel$deleorder$r, "des", function des()

{var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return _request.default.post("/api/bydidentity/des", params);
}), _defineProperty(_deslabel$deleorder$r, "shenfen", function shenfen()

{var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return _request.default.post("/api/bydidentity/shenfen", params);
}), _defineProperty(_deslabel$deleorder$r, "addnews", function addnews()

{var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return _request.default.post("/api/bydidentity/addnews", params);
}), _defineProperty(_deslabel$deleorder$r, "desorder", function desorder()

{var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return _request.default.post("/api/bydidentity/desorder", params);
}), _defineProperty(_deslabel$deleorder$r, "desmyteam", function desmyteam()

{var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return _request.default.post("/api/bydidentity/desmyteam", params);
}), _defineProperty(_deslabel$deleorder$r, "myteam", function myteam()

{var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return _request.default.post("/api/bydidentity/myteam", params);
}), _defineProperty(_deslabel$deleorder$r, "mysub", function mysub()

{var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return _request.default.post("/api/bydidentity/mysub", params);
}), _defineProperty(_deslabel$deleorder$r, "desorders", function desorders()

{var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return _request.default.post("/api/bydidentity/desorders", params);
}), _defineProperty(_deslabel$deleorder$r, "desindex", function desindex()

{var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return _request.default.post("/api/bydidentity/desindex", params);
}), _defineProperty(_deslabel$deleorder$r, "desmode", function desmode()

{var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return _request.default.post("/api/bydidentity/desmode", params);
}), _defineProperty(_deslabel$deleorder$r, "addprogramme", function addprogramme()

{var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return _request.default.post("/api/bydidentity/addprogramme", params);
}), _defineProperty(_deslabel$deleorder$r, "loupancategory", function loupancategory()

{var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return _request.default.post("/api/bydindex/loupancategory", params);
}), _defineProperty(_deslabel$deleorder$r, "mymake", function mymake()

{var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return _request.default.post("/api/byd_user/mymake", params);
}), _defineProperty(_deslabel$deleorder$r, "upewm", function upewm()

{var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return _request.default.post("/api/bydidentity/upewm", params);
}), _defineProperty(_deslabel$deleorder$r, "ewm", function ewm()

{var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return _request.default.post("/api/bydindex/ewm", params);
}), _defineProperty(_deslabel$deleorder$r, "business", function business()

{var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return _request.default.post("/api/byd_user/business", params);
}), _defineProperty(_deslabel$deleorder$r, "mycupon", function mycupon()

{var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return _request.default.post("/api/bydshop/mycupon", params);
}), _defineProperty(_deslabel$deleorder$r, "orderdzf", function orderdzf()

{var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return _request.default.post("/api/bydshop/orderdzf", params);
}), _defineProperty(_deslabel$deleorder$r, "orderpay", function orderpay()

{var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return _request.default.post("/api/bydshop/orderpay", params);
}), _defineProperty(_deslabel$deleorder$r, "lookexpress", function lookexpress()

{var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return _request.default.post("/api/bydshop/lookexpress", params);
}), _defineProperty(_deslabel$deleorder$r, "sureorder", function sureorder()

{var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return _request.default.post("/api/bydshop/sureorder", params);
}), _defineProperty(_deslabel$deleorder$r, "editdes", function editdes()

{var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return _request.default.post("/api/bydidentity/editdes", params);
}), _defineProperty(_deslabel$deleorder$r, "contein", function contein()

{var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return _request.default.post("/api/bydidentity/contein", params);
}), _defineProperty(_deslabel$deleorder$r, "despro", function despro()

{var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return _request.default.post("/api/bydidentity/despro", params);
}), _defineProperty(_deslabel$deleorder$r, "paymoney", function paymoney()

{var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return _request.default.post("/api/bydidentity/paymoney", params);
}), _defineProperty(_deslabel$deleorder$r, "delfollow", function delfollow()


{var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return _request.default.post("/api/byd_user/delfollow", params);
}), _defineProperty(_deslabel$deleorder$r, "mydesigner", function mydesigner()

{var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return _request.default.post("/api/byd_user/mydesigner", params);
}), _defineProperty(_deslabel$deleorder$r, "myfootxr", function myfootxr()

{var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return _request.default.post("/api/bydshop/myfootxr", params);
}), _defineProperty(_deslabel$deleorder$r, "delfootxr", function delfootxr()

{var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return _request.default.post("/api/bydshop/delfootxr", params);
}), _deslabel$deleorder$r);exports.default = _default;

/***/ }),

/***/ 5:
/*!********************************************************!*\
  !*** C:/Users/luyus/Desktop/baoyun-mansion/pages.json ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 50:
/*!************************************************************!*\
  !*** C:/Users/luyus/Desktop/baoyun-mansion/api/request.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _js_sdk = _interopRequireDefault(__webpack_require__(/*! ./u-ajax/js_sdk/ */ 51));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
// 创建实例
var instance = _js_sdk.default.create({
  baseURL: "https://bao.scwushen.com/index.php",
  timeout: 60000,
  header: {
    post: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' } } });



var token = uni.getStorageSync("token");
var user = uni.getStorageSync("user_info");
// 添加请求拦截器
instance.interceptors.request.use(
function (config) {
  if (config.data.show != '') {
    uni.showLoading({
      title: config.data.show,
      mask: true });

    delete config.data.show;
  }
  if (token != "") {
    config.header["token"] = token;
    // config.data["user_id"] = user.id
  }
  //config请求前数据，发送前做些什么
  return config;
},
function (error) {

  // 对请求错误做些什么
  uni.showToast({
    title: "网络错误",
    duration: 1000,
    icon: "none" });

  return Promise.reject(error);
});

// 添加响应拦截器
instance.interceptors.response.use(
function (response) {
  uni.hideLoading();
  //response请求接受数据
  return response;
},
function (error) {
  uni.hideLoading();
  // 对响应错误做些什么
  return Promise.reject(error);
});var _default =

instance;exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 51:
/*!************************************************************************!*\
  !*** C:/Users/luyus/Desktop/baoyun-mansion/api/u-ajax/js_sdk/index.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _Ajax = _interopRequireDefault(__webpack_require__(/*! ./lib/core/Ajax */ 52));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

function createInstance(defaultConfig) {
  return new _Ajax.default(defaultConfig).request;
}

var ajax = createInstance();

ajax.create = function create(instanceConfig) {
  return createInstance(instanceConfig);
};var _default =

ajax;exports.default = _default;

/***/ }),

/***/ 52:
/*!********************************************************************************!*\
  !*** C:/Users/luyus/Desktop/baoyun-mansion/api/u-ajax/js_sdk/lib/core/Ajax.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 26));var _InterceptorManager = _interopRequireDefault(__webpack_require__(/*! ./InterceptorManager */ 53));
var _Request = _interopRequireDefault(__webpack_require__(/*! ../adapters/Request */ 54));
var _detachConfig2 = _interopRequireDefault(__webpack_require__(/*! ../helpers/detachConfig */ 55));
var _mergeConfig = _interopRequireDefault(__webpack_require__(/*! ../helpers/mergeConfig */ 58));
var _originURL = _interopRequireDefault(__webpack_require__(/*! ../helpers/originURL */ 59));
var _dispatchRequest = _interopRequireDefault(__webpack_require__(/*! ./dispatchRequest */ 60));
var _handleCancel = __webpack_require__(/*! ./handleCancel */ 65);
var _defaults = _interopRequireWildcard(__webpack_require__(/*! ../defaults */ 63));
var _utils = __webpack_require__(/*! ../utils */ 57);function _getRequireWildcardCache() {if (typeof WeakMap !== "function") return null;var cache = new WeakMap();_getRequireWildcardCache = function _getRequireWildcardCache() {return cache;};return cache;}function _interopRequireWildcard(obj) {if (obj && obj.__esModule) {return obj;}if (obj === null || typeof obj !== "object" && typeof obj !== "function") {return { default: obj };}var cache = _getRequireWildcardCache();if (cache && cache.has(obj)) {return cache.get(obj);}var newObj = {};var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;for (var key in obj) {if (Object.prototype.hasOwnProperty.call(obj, key)) {var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;if (desc && (desc.get || desc.set)) {Object.defineProperty(newObj, key, desc);} else {newObj[key] = obj[key];}}}newObj.default = obj;if (cache) {cache.set(obj, newObj);}return newObj;}function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _toConsumableArray(arr) {return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();}function _nonIterableSpread() {throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === "string") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === "Object" && o.constructor) n = o.constructor.name;if (n === "Map" || n === "Set") return Array.from(o);if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _iterableToArray(iter) {if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);}function _arrayWithoutHoles(arr) {if (Array.isArray(arr)) return _arrayLikeToArray(arr);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) {arr2[i] = arr[i];}return arr2;}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);}_next(undefined);});};}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}var

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

/***/ 529:
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

/***/ 53:
/*!**********************************************************************************************!*\
  !*** C:/Users/luyus/Desktop/baoyun-mansion/api/u-ajax/js_sdk/lib/core/InterceptorManager.js ***!
  \**********************************************************************************************/
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

/***/ 530:
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

/***/ 531:
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

/***/ 54:
/*!***************************************************************************************!*\
  !*** C:/Users/luyus/Desktop/baoyun-mansion/api/u-ajax/js_sdk/lib/adapters/Request.js ***!
  \***************************************************************************************/
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

/***/ 55:
/*!*******************************************************************************************!*\
  !*** C:/Users/luyus/Desktop/baoyun-mansion/api/u-ajax/js_sdk/lib/helpers/detachConfig.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = detachConfig;var _isCallback = _interopRequireDefault(__webpack_require__(/*! ./isCallback */ 56));
var _utils = __webpack_require__(/*! ../utils */ 57);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}

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

/***/ 56:
/*!*****************************************************************************************!*\
  !*** C:/Users/luyus/Desktop/baoyun-mansion/api/u-ajax/js_sdk/lib/helpers/isCallback.js ***!
  \*****************************************************************************************/
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

/***/ 57:
/*!****************************************************************************!*\
  !*** C:/Users/luyus/Desktop/baoyun-mansion/api/u-ajax/js_sdk/lib/utils.js ***!
  \****************************************************************************/
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

/***/ 58:
/*!******************************************************************************************!*\
  !*** C:/Users/luyus/Desktop/baoyun-mansion/api/u-ajax/js_sdk/lib/helpers/mergeConfig.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = mergeConfig;var _utils = __webpack_require__(/*! ../utils */ 57);function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}

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

/***/ 59:
/*!****************************************************************************************!*\
  !*** C:/Users/luyus/Desktop/baoyun-mansion/api/u-ajax/js_sdk/lib/helpers/originURL.js ***!
  \****************************************************************************************/
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

/***/ 60:
/*!*******************************************************************************************!*\
  !*** C:/Users/luyus/Desktop/baoyun-mansion/api/u-ajax/js_sdk/lib/core/dispatchRequest.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = dispatchRequest;var _buildURL = _interopRequireDefault(__webpack_require__(/*! ../helpers/buildURL */ 61));
var _combineURL = _interopRequireDefault(__webpack_require__(/*! ../helpers/combineURL */ 62));
var _isCallback = _interopRequireDefault(__webpack_require__(/*! ../helpers/isCallback */ 56));
var _utils = __webpack_require__(/*! ../utils */ 57);
var _defaults = __webpack_require__(/*! ../defaults */ 63);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

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

/***/ 61:
/*!***************************************************************************************!*\
  !*** C:/Users/luyus/Desktop/baoyun-mansion/api/u-ajax/js_sdk/lib/helpers/buildURL.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = buildURL;var _utils = __webpack_require__(/*! ../utils */ 57);

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

/***/ 62:
/*!*****************************************************************************************!*\
  !*** C:/Users/luyus/Desktop/baoyun-mansion/api/u-ajax/js_sdk/lib/helpers/combineURL.js ***!
  \*****************************************************************************************/
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

/***/ 624:
/*!***************************************************************************!*\
  !*** C:/Users/luyus/Desktop/baoyun-mansion/static/icon_home_kefu_ico.png ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAAAXNSR0IArs4c6QAABn1JREFUaEPlm3msbuMVxn+PoOaqoYaYpwpibAQhtFe4aiZaQ81jCE1wcUkMrURb95rVrFfMBA1/EIQGETetKagxaKmaLjG3hvvIc+/+Trav3/n2/s759rnnHM+/+93rXc9+373f9ay1tmgQttcANgc2BFYDVgEWARYADHwBfAS8DrwCPAE8CrwgKdf7DvXbou2Q2wfYA1h+iPb/DdwB3CgpD6Bv6Ath27GzO3AssGnfvJtt6GngXOB6SV8P1/awCdveCpgCbNTFmfeAZ4DXgHeKrZy55weWBlYC1gUW72LjBWCypL8Mh/SQCdvOuzgVOKSDAzOB+4A4d6+kV+s4Wbzz2wC7AD8HOvl3O3CUpLfr2GwfMyTCttcHMvHKbQbzAboIuEzSG0NxqHWP7RVDDDgSWLDN1rvAnpIe7HWOngnb/hUwDZivNNk3wMXA7yS936sT3cbbXgI4rSA+V2lsdtHRkv7Uy3w9EbZ9GHAJUJ74RWBvSTlSGoPtfCOuB37SNslpkn5bd+LahG0fCFzdZvimvMOSPqs74XDG2V4IuCLbuc3OCZLOrmO7FmHbvwDualvZfLAmNRUgDOZ8cQT+ETi+bcy+kq6rIl1J2PaqwOPAD0vG/iDppCrjTV63/XvgxNIc/wU2lpTjb1B0JWx7HmA6sEHJQgKAXzdJpq5t21cBB5XGvwSsJynkO6KK8CnAmaU7nwQ262awrrP9GGd7XuDhrGzJ3lmSTu6ZcLGVnwN+UNz8P+Cnkp7th7P9smE7ouSp0lmd8HMtSS93mmPQFbZ9LVDeujljT+2Xo/20Yzvfk7NKNm+W1P4ln3W5I2HbawL/KF1PGLfaSB0/vT4M29mFiQcSnQWRlmtLer7d1mCEEzUlpGuh9jnXq7P9Gm/7iCIoapm8SNLRlYSLw/0/QA754HNgGUkf98u5JuzYjvKK363j8xNgKUlJMgzg/1bYdvb+jaUxN0iKoB/1sH0pcHjJ0Z0l3VlFOOFiBEILu0lK9mHUw/ZE4O6So9MkJSTuusIR61EoQRTJYpIi+0Y9CoHx95Kjr0lKHq0z4UKA52tXRkK1XeqK+Dn1VGzvWGj0udt8WFpSsiyzMPAOF1HLLcDOHZy+R9J2c4pMnXltJ9BIENKOSMr9JUWzf4fw5cChgxjP1l5C0od1Jh/pMbbXBrpFgFMkTRog3OFl7+TzBEkPjDSZOvPZzilSJQ23lPSQCn0ZUbBehfGDJP25jgMjPcZ2ZGLkYjdMl7RJCCfNWicZdpykc0aaTJ35bCeOrqPPNw3hC5IMq2H4DEmn1xg34kNsnwf8psbEU0M42zlp1yqMB8LTQzgJuBS3qjAeCM8I4bpVuvFA+NMQ/hJI7qoK44HwWyGc0uSyVWyB8UD40RBOvnmH7wnh80I4Nd0k1auQpHvKoqMOtnNcpv5UhQkhnO385mD5rZKFwySlzDHqYDtViKpSyz/TcjFLLdlONXD/CibbSbpn1LGd7f8vgZsrfDtQ0rQW4VTgozba67BlG8lrDakI3fRDsr06kKrDYPgrEPEzs6yH06MRPVwuhbYMPCJpi6YdH4592ymSL9nBRnpEtm7Vrb+TxLO9PXBl0XfRuvfTtB9I+ttwHGryXtuLASnEJ0PZiho/AKLxzyzn0ztlLVPZD/Ek45PLukNSzupRC9u7FumdzYB8nIK3s4Xbna4sl45aliXHbF8D7AUsKil59EEx5gnbzhZ+K118ktL50xXjgfABQDIxx0i6cFwTtp0TJcdp2qeWr9NBNKZX2PZ+QN7f9IWlmFaJMUvY9o+Kkm46Ateoe5KMZcKtGtiJktLVUwtjkrDtJNVD8qEiKJpVVaiDMUe46Aa8DPhX0aY0UDcaV4SLgkG6c9JVlMhvK0npou8JI7rCthcG1gF+XOjvrNIzkr7q5rXt9FRHiyczE1U0UVJ6r3vGiBC2vW3aFIGfdVBjaU2Ilk3OLImIARQ92ek1mVz8K3Fr0ds55PaLRgkX2zArc3CNpQjxtFukgp/O2b2L5vPsioSOKfXkyzwsNE34GOD8HjyMvJsBLFfcky2fPNpVVaKg7hxNE86x0WviIPr7huKvlvv78WNH+WE0Tfg2YLe6T78Yd7WkOq9Aj2ZnD2+acJo+0/yZJtA6iJZNC3B6PBtBo4Tjse1o1Mi3FSoY5ExNk/djjTAtjDZOuCCdFU4qdafi/6ScwyniJUpKJ2x+97m93+9rpwf3LbgUOSVYXC+vAAAAAElFTkSuQmCC"

/***/ }),

/***/ 625:
/*!**************************************************************************!*\
  !*** C:/Users/luyus/Desktop/baoyun-mansion/static/xianshiqiaonggoua.png ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ 63:
/*!*******************************************************************************!*\
  !*** C:/Users/luyus/Desktop/baoyun-mansion/api/u-ajax/js_sdk/lib/defaults.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = exports.HEADER = exports.METHOD = void 0;var _http = _interopRequireDefault(__webpack_require__(/*! ./adapters/http */ 64));
var _utils = __webpack_require__(/*! ./utils */ 57);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

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

/***/ 64:
/*!************************************************************************************!*\
  !*** C:/Users/luyus/Desktop/baoyun-mansion/api/u-ajax/js_sdk/lib/adapters/http.js ***!
  \************************************************************************************/
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

/***/ 647:
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
var cfg = __webpack_require__(/*! ./config.js */ 648),
blankChar = cfg.blankChar,
CssHandler = __webpack_require__(/*! ./CssHandler.js */ 649),
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

/***/ 648:
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

/***/ 649:
/*!********************************************************************************************!*\
  !*** C:/Users/luyus/Desktop/baoyun-mansion/uview-ui/components/u-parse/libs/CssHandler.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var cfg = __webpack_require__(/*! ./config.js */ 648),
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

/***/ 65:
/*!****************************************************************************************!*\
  !*** C:/Users/luyus/Desktop/baoyun-mansion/api/u-ajax/js_sdk/lib/core/handleCancel.js ***!
  \****************************************************************************************/
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

/***/ 671:
/*!*******************************************************************!*\
  !*** C:/Users/luyus/Desktop/baoyun-mansion/static/default_bg.png ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ 707:
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

/***/ }),

/***/ 797:
/*!***************************************************************************************************************!*\
  !*** C:/Users/luyus/Desktop/baoyun-mansion/uview-ui/components/u-cropper/cropper.js?vue&type=script&lang=js& ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_cropper_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./cropper.js?vue&type=script&lang=js& */ 798);
/* harmony import */ var _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_cropper_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_cropper_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_cropper_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_cropper_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_cropper_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 798:
/*!******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!C:/Users/luyus/Desktop/baoyun-mansion/uview-ui/components/u-cropper/cropper.js?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 26));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _slicedToArray(arr, i) {return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();}function _nonIterableRest() {throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === "string") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === "Object" && o.constructor) n = o.constructor.name;if (n === "Map" || n === "Set") return Array.from(o);if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) {arr2[i] = arr[i];}return arr2;}function _iterableToArrayLimit(arr, i) {if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;var _arr = [];var _n = true;var _d = false;var _e = undefined;try {for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {_arr.push(_s.value);if (i && _arr.length === i) break;}} catch (err) {_d = true;_e = err;} finally {try {if (!_n && _i["return"] != null) _i["return"]();} finally {if (_d) throw _e;}}return _arr;}function _arrayWithHoles(arr) {if (Array.isArray(arr)) return arr;}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);}_next(undefined);});};}var ABS = Math.abs;
var calcLen = function calcLen(v) {// distance between two coordinate 
  return Math.sqrt(v.x * v.x + v.y * v.y);
};
var calcAngle = function calcAngle(a, b) {// angle of the two vectors
  var l = calcLen(a) * calcLen(b);var cosValue;var angle;
  if (l) {
    cosValue = (a.x * b.x + a.y * b.y) / l;
    angle = Math.acos(Math.min(cosValue, 1));
    angle = a.x * b.y - b.x * a.y > 0 ? -angle : angle;
    return angle * 180 / Math.PI;
  }
  return 0;
};
var generateCanvasId = function generateCanvasId() {// generate a random string
  var seeds = 'abcdefghijklmnopqrstuvwxyz';
  var arr = seeds.split('').concat(seeds.toUpperCase().split('')).concat('0123456789'.split(''));
  var m = arr.length;var i;
  while (m) {
    i = Math.floor(Math.random() * m--);
    var temp = arr[m];
    arr[m] = arr[i];
    arr[i] = temp;
  }
  return arr.slice(0, 16).join('');
};var _default2 =

{
  props: {
    width: { // width of the container
      type: [String, Number],
      default: '100%' },

    height: { // height of the container
      type: [String, Number],
      default: '100%' },

    cutWidth: { // cutter width
      type: [String, Number],
      default: '50%' },

    cutHeight: { // cutter height
      type: [String, Number],
      default: 0 },

    minWidth: { // minWidth of the cutter
      type: Number,
      default: 50 },

    minHeight: { // minHeight of the cutter
      type: Number,
      default: 50 },

    center: { // autoCenter
      type: Boolean,
      default: true },

    src: String,
    disableScale: Boolean, // disable to zoom
    disableRotate: Boolean,
    disableTranslate: Boolean,
    disableCtrl: Boolean, // disable to resize the cutter
    boundDetect: Boolean, // open boundary detection
    freeBoundDetect: Boolean, // open boundary detection while doing rotation
    keepRatio: Boolean, // keep the ratio of the cutter
    disablePreview: Boolean, // disable preview after cutting
    showCtrlBorder: Boolean, // show cutter border
    resetCut: Boolean, // reset cut while img change
    fit: {
      type: Boolean,
      default: true },

    imageCenter: Boolean, // auto center/middle for image
    maxZoom: { // maximum scaling factor 
      type: Number,
      default: 10 // can not be Infinity in baidu-MiniProgram
    },
    minZoom: { // minimum scaling factor
      type: Number,
      default: 1 },

    angle: { // initial angle of rotation
      type: Number,
      default: 0 },

    zoom: { // initial scaling factor
      type: Number,
      default: 1 },

    offset: { // initial offset relative to the cutter left border
      type: Array,
      default: function _default() {
        return [0, 0];
      } },

    background: {
      type: String,
      default: '#000' },

    canvasBackground: { // background for the exported image
      type: String,
      default: '#fff' },

    canvasZoom: { // export multiples of the cutter size
      type: Number,
      default: 1 },

    fileType: {
      type: String,
      default: 'png',
      validator: function validator(t) {
        return ['png', 'jpg'].includes(t);
      } },

    quality: {
      type: Number,
      default: 1 },

    maskType: { // type for mask
      type: String,
      default: "shadow" },

    circleView: Boolean // circle clip view
  },
  data: function data() {
    return {
      transform: {
        angle: 0,
        translate: {
          x: 0,
          y: 0 },

        zoom: 1 },

      corner: {
        left: 50,
        right: 50,
        bottom: 50,
        top: 50 },

      image: {
        originWidth: 0,
        originHeight: 0,
        width: 0,
        height: 0 },

      ctrlWidth: 0,
      ctrlHeight: 0,
      view: false,
      canvasId: '' };

  },
  computed: {
    transformMeta: function transformMeta() {
      var transform = this.transform;
      return "translate3d(".concat(transform.translate.x, "px, ").concat(transform.translate.y, "px, 0) rotate(").concat(transform.angle, "deg) scale(").concat(transform.zoom, ")");
    },
    ctrlStyle: function ctrlStyle() {
      var corner = this.corner;
      var cssStr = "left: ".concat(corner.left, "px;top: ").concat(corner.top, "px;right: ").concat(corner.right, "px;bottom: ").concat(corner.bottom, "px;");
      if (this.maskType !== 'outline') {
        cssStr += "box-shadow: 0 0 0 50000rpx rgba(0,0,0, ".concat(this.view ? 0.8 : 0.4, ")");
      } else {
        cssStr += "outline: rgba(0,0,0, ".concat(this.view ? 0.8 : 0.4, ") solid 5000px");
      }
      return cssStr;
    } },

  watch: {
    src: function src() {
      if (this.resetCut) this.resetCutReact();
      this.initImage();
    } },

  created: function created() {var _this = this;
    this.canvasId = generateCanvasId();
    uni.getSystemInfo().then(function (result) {
      result = result[1] || { windowWidth: 375, windowHeight: 736 };
      _this.ratio = result.windowWidth / 750;
      _this.windowHeight = result.windowHeight;
      _this.init();
      _this.initCanvas();
    });
  },
  methods: {
    toPx: function toPx(str) {
      if (str.indexOf('%') !== -1) {
        return Math.floor(Number(str.replace('%', '')) / 100 * this.containerWidth);
      }
      if (str.indexOf('rpx') !== -1) {
        return Math.floor(Number(str.replace('rpx', '')) * this.ratio);
      }
      return Math.floor(Number(str.replace('px', '')));
    },
    initCanvas: function initCanvas() {var _this2 = this;




      var context = uni.createSelectorQuery().in(this);


      // get contianer size
      context.select('.nice-cropper').boundingClientRect();
      context.exec(function (res) {
        _this2.containerWidth = res[0].width;
        _this2.containerHeight = res[0].height;
        _this2.initCut();
      });
    },
    resetCutReact: function resetCutReact() {// init size and position of the cutter
      this.ctrlWidth = Math.min(this.toPx(this.cutWidth), this.containerWidth);
      if (this.cutHeight) {
        this.ctrlHeight = Math.min(this.toPx(this.cutHeight), this.containerHeight);
      } else {// 默认为正方形
        this.ctrlHeight = Math.min(this.ctrlWidth, this.containerHeight);
      }
      var cornerStartX = this.center ? Math.floor((this.containerWidth - this.ctrlWidth) / 2) : 0;
      var cornerStartY = this.center ? Math.floor((this.containerHeight - this.ctrlHeight) / 2) : 0;
      this.cutRatio = this.ctrlHeight / this.ctrlWidth;
      this.corner = {
        left: cornerStartX,
        right: this.containerWidth - this.ctrlWidth - cornerStartX,
        top: cornerStartY,
        bottom: this.containerHeight - this.ctrlHeight - cornerStartY };

    },
    initCut: function initCut() {
      this.resetCutReact();
      this.initImage();
    },
    initImage: function initImage() {var _this3 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {var _yield$uni$getImageIn, _yield$uni$getImageIn2, err, res, offset;return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:if (
                _this3.src) {_context.next = 2;break;}return _context.abrupt("return");case 2:_context.next = 4;return (

                  uni.getImageInfo({
                    src: _this3.src }));case 4:_yield$uni$getImageIn = _context.sent;_yield$uni$getImageIn2 = _slicedToArray(_yield$uni$getImageIn, 2);err = _yield$uni$getImageIn2[0];res = _yield$uni$getImageIn2[1];


                if (err) {
                  _this3.$emit("error", err);
                } else {
                  _this3.$emit('load', res);
                }

                // init image size
                _this3.image.originWidth = err ? _this3.ctrlWidth : res.width;
                _this3.image.originHeight = err ? _this3.ctrlHeight : res.height;
                _this3.image.width = _this3.fit ? _this3.ctrlWidth : _this3.image.originWidth;
                _this3.image.height = err ? _this3.ctrlHeight : res.height / res.width * _this3.image.width;
                _this3.img = res.path;

                offset = [0, 0];
                if (_this3.imageCenter) {
                  offset[0] = (_this3.ctrlWidth - _this3.image.width) / 2;
                  offset[1] = (_this3.ctrlHeight - _this3.image.height) / 2;
                }
                offset[0] += _this3.offset[0] || 0;
                offset[1] += _this3.offset[1] || 0;

                _this3.setTranslate(offset);
                _this3.setZoom(_this3.zoom);
                _this3.transform.angle = _this3.freeBoundDetect || !_this3.disableRotate ? _this3.angle : 0;

                _this3.setBoundary(); // boundary detect
                _this3.preview(); // preview
                _this3.draw();case 24:case "end":return _context.stop();}}}, _callee);}))();
    },
    init: function init() {
      this.pretouch = {};
      this.handles = {};
      this.preVector = {
        x: 0,
        y: 0 };

      this.distance = 30;
      this.touch = {};
      this.movetouch = {};
      this.cutMode = false;
      this.params = {
        zoom: 1,
        deltaX: 0,
        deltaY: 0,
        diffX: 0,
        diffY: 0,
        angle: 0 };

    },
    start: function start(e) {
      if (!this.src) e.preventDefault();
      var point = e.touches ? e.touches[0] : e;
      var touch = this.touch;
      var now = Date.now();
      touch.startX = point.pageX;
      touch.startY = point.pageY;
      touch.startTime = now;
      this.doubleTap = false;
      this.view = false;
      clearTimeout(this.previewTimer);
      if (e.touches.length > 1) {
        var point2 = e.touches[1];
        this.preVector = {
          x: point2.pageX - this.touch.startX,
          y: point2.pageY - this.touch.startY };

        this.startDistance = calcLen(this.preVector);
      } else {
        var pretouch = this.pretouch;
        this.doubleTap = this.pretouch.time && now - this.pretouch.time < 300 && ABS(touch.startX - pretouch.startX) < 30 && ABS(touch.startY - pretouch.startY) < 30 && ABS(touch.startTime - pretouch.time) < 300;
        pretouch = { // reserve the last touch
          startX: this.touch.startX,
          startY: this.touch.startY,
          time: this.touch.startTime };

      }
    },
    move: function move(e) {
      if (!this.src) return;
      var point = e.touches ? e.touches[0] : e;
      if (e.touches.length > 1) {// multi touch
        var point2 = e.touches[1];
        var v = {
          x: point2.pageX - point.pageX,
          y: point2.pageY - point.pageY };


        if (this.preVector.x !== null) {
          if (this.startDistance) {// zoom
            var len = calcLen(v);
            this.params.zoom = calcLen(v) / this.startDistance;
            this.startDistance = len;
            this.cutMode && !this.disableCtrl ? this.setCut() : !this.disableScale && this.pinch();
          }
          // rotate
          this.params.angle = calcAngle(v, this.preVector);
          this.cutMode && !this.disableCtrl ? this.setCut() : !this.disableRotate && this.rotate();
        }
        this.preVector.x = v.x;
        this.preVector.y = v.y;
      } else {// translate
        var diffX = point.pageX - this.touch.startX;
        var diffY = point.pageY - this.touch.startY;
        this.params.diffY = diffY;
        this.params.diffX = diffX;
        if (this.movetouch.x) {
          this.params.deltaX = point.pageX - this.movetouch.x;
          this.params.deltaY = point.pageY - this.movetouch.y;
        } else {
          this.params.deltaX = this.params.deltaY = 0;
        }
        if (ABS(diffX) > 30 || ABS(diffY) > 30) {
          this.doubleTap = false;
        }
        this.cutMode && !this.disableCtrl ? this.setCut() : !this.disableTranslate && this.translate();
        this.movetouch.x = point.pageX;
        this.movetouch.y = point.pageY;
      }
      !this.cutMode && this.setBoundary();
      if (e.touches.length > 1) {
        e.preventDefault();
      }
    },
    end: function end() {
      this.doubleTap && this.$emit('doubleTap');
      this.cutMode && this.setBoundary();
      this.init();
      !this.disablePreview && this.preview();
      this.draw();
    },
    translate: function translate() {
      var transform = this.transform.translate;
      var meta = this.params;
      transform.x += meta.deltaX;
      transform.y += meta.deltaY;
    },
    pinch: function pinch() {
      this.transform.zoom *= this.params.zoom;
    },
    rotate: function rotate() {
      this.transform.angle += this.params.angle;
    },
    setZoom: function setZoom(scale) {
      scale = Math.min(Math.max(Number(scale) || 1, this.minZoom), this.maxZoom);
      this.transform.zoom = scale;
    },
    setTranslate: function setTranslate(offset) {
      if (Array.isArray(offset)) {
        var x = Number(offset[0]);
        var y = Number(offset[1]);
        this.transform.translate.x = isNaN(x) ? this.transform.translate.x : this.corner.left + x;
        this.transform.translate.y = isNaN(y) ? this.transform.translate.y : this.corner.top + y;
      }
    },
    setRotate: function setRotate(angle) {
      this.transform.angle = Number(angle) || 0;
    },
    setTransform: function setTransform(x, y, angle, scale) {
      this.setTranslate([x, y]);
      this.setZoom(scale);
      this.setRotate(angle);
    },
    setCutMode: function setCutMode(type) {
      if (!this.src) return;
      this.cutMode = true;
      this.cutDirection = type;
    },
    setCut: function setCut() {
      var corner = this.corner;
      var meta = this.params;
      this.setMeta(this.cutDirection, meta); // correct cutter position
      if (this.keepRatio) {
        if (this.cutDirection === 'lt' || this.cutDirection === 'rb') {
          meta.deltaY = meta.deltaX * this.cutRatio;
        } else {
          meta.deltaX = meta.deltaY / this.cutRatio;
        }
      }
      switch (this.cutDirection) {
        case 'lt':
          corner.top += meta.deltaY;
          corner.left += meta.deltaX;
          break;
        case 'rt':
          corner.top += meta.deltaY;
          corner.right -= this.keepRatio ? -meta.deltaX : meta.deltaX;
          break;
        case 'rb':
          corner.right -= meta.deltaX;
          corner.bottom -= meta.deltaY;
          break;
        case 'lb':
          corner.bottom -= meta.deltaY;
          corner.left += this.keepRatio ? -meta.deltaX : meta.deltaX;
          break;}

      this.ctrlWidth = this.containerWidth - corner.left - corner.right;
      this.ctrlHeight = this.containerHeight - corner.top - corner.bottom;
    },
    setMeta: function setMeta(direction, meta) {var
      ctrlWidth = this.ctrlWidth,ctrlHeight = this.ctrlHeight,minWidth = this.minWidth,minHeight = this.minHeight;
      switch (direction) {
        case 'lt':
          if (meta.deltaX > 0 || meta.deltaY > 0) {
            meta.deltaX = Math.min(meta.deltaX, ctrlWidth - minWidth);
            meta.deltaY = Math.min(meta.deltaY, ctrlHeight - minHeight);
          }
          break;
        case 'rt':
          if (meta.deltaX < 0 || meta.deltaY > 0) {
            meta.deltaX = Math.max(meta.deltaX, minWidth - ctrlWidth);
            meta.deltaY = Math.min(meta.deltaY, ctrlHeight - minHeight);
          }
          break;
        case 'rb':
          if (meta.deltaX < 0 || meta.deltaY < 0) {
            meta.deltaX = Math.max(meta.deltaX, minWidth - ctrlWidth);
            meta.deltaY = Math.max(meta.deltaY, minHeight - ctrlHeight);
          }
          break;
        case 'lb':
          if (meta.deltaX > 0 || meta.deltaY < 0) {
            meta.deltaX = Math.min(meta.deltaX, ctrlWidth - minWidth);
            meta.deltaY = Math.max(meta.deltaY, minHeight - ctrlHeight);
          }
          break;}


    },
    setBoundary: function setBoundary() {
      var zoom = this.transform.zoom;
      zoom = zoom < this.minZoom ? this.minZoom : zoom > this.maxZoom ? this.maxZoom : zoom;
      this.transform.zoom = zoom;
      if (!this.boundDetect || !this.disableRotate && !this.freeBoundDetect) return true;
      var translate = this.transform.translate;
      var corner = this.corner;
      var minX = corner.left - this.image.width + this.ctrlWidth - this.image.width * (zoom - 1) / 2;
      var maxX = corner.left + this.image.width * (zoom - 1) / 2;
      var minY = corner.top - this.image.height + this.ctrlHeight - this.image.height * (zoom - 1) / 2;
      var maxY = corner.top + this.image.height * (zoom - 1) / 2;
      translate.x = Math.floor(translate.x < minX ? minX : translate.x > maxX ? maxX : translate.x);
      translate.y = Math.floor(translate.y < minY ? minY : translate.y > maxY ? maxY : translate.y);
    },
    preview: function preview() {var _this4 = this;
      clearTimeout(this.previewTimer);
      this.previewTimer = setTimeout(function () {
        _this4.view = true;
      }, 500);
    },
    draw: function draw() {var _this5 = this;




      var context = uni.createCanvasContext(this.canvasId, this);

      var transform = this.transform;
      var corner = this.corner;
      var canvasZoom = this.canvasZoom;
      var img = this.image;
      context.save();
      context.setFillStyle(this.canvasBackground);
      this.$emit('beforeDraw', context, transform); // beforeDraw hook

      var zoom = transform.zoom;
      context.fillRect(0, 0, this.ctrlWidth * canvasZoom, this.ctrlHeight * canvasZoom); // clear canvas
      context.translate((transform.translate.x - corner.left + img.width / 2) * canvasZoom, (transform.translate.y - corner.top + img.height / 2) * canvasZoom); // translate the canvas's orgin to the image center
      context.rotate(transform.angle * Math.PI / 180);
      context.translate(-img.width * zoom * 0.5 * canvasZoom, -img.height * zoom * 0.5 * canvasZoom);
      context.drawImage(this.img, 0, 0, img.width * zoom * canvasZoom, img.height * zoom * canvasZoom);
      context.restore();
      this.$emit('afterDraw', context, {
        width: this.ctrlWidth * canvasZoom,
        height: this.ctrlHeight * canvasZoom });
      // afterDraw hook
      context.draw(false, function () {
        uni.canvasToTempFilePath({
          canvasId: _this5.canvasId,
          quality: _this5.quality || 1,
          fileType: _this5.fileType,
          success: function success(res) {
            _this5.$emit('cropped', res.tempFilePath, {
              originWidth: _this5.image.originWidth,
              originHeight: _this5.image.originHeight,
              width: _this5.ctrlWidth * canvasZoom,
              height: _this5.ctrlHeight * canvasZoom,
              scale: zoom,
              translate: {
                x: transform.translate.x,
                y: transform.translate.y },

              rotate: transform.angle });
            // draw callback
          } },
        _this5);
      });
    } } };exports.default = _default2;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ })

}]);
//# sourceMappingURL=../../.sourcemap/mp-weixin/common/vendor.js.map