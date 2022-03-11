import mixin from './libs/mixin/mixin.js'
import http from './libs/request'
function wranning(str) {
	if (process.env.NODE_ENV === 'development') {
		console.warn(str)
	}
}
import queryParams from './libs/function/queryParams.js'
import route from './libs/function/route.js'
import timeFormat from './libs/function/timeFormat.js'
import timeFrom from './libs/function/timeFrom.js'
import colorGradient from './libs/function/colorGradient.js'
import guid from './libs/function/guid.js'
import color from './libs/function/color.js'
import type2icon from './libs/function/type2icon.js'
import randomArray from './libs/function/randomArray.js'
import deepClone from './libs/function/deepClone.js'
import deepMerge from './libs/function/deepMerge.js'
import addUnit from './libs/function/addUnit.js'
import test from './libs/function/test.js'
import random from './libs/function/random.js'
import trim from './libs/function/trim.js'
import toast from './libs/function/toast.js'
import getParent from './libs/function/getParent.js'
import $parent from './libs/function/$parent.js'
import {sys, os} from './libs/function/sys.js'
import debounce from './libs/function/debounce.js'
import throttle from './libs/function/throttle.js'
import config from './libs/config/config.js'
import zIndex from './libs/config/zIndex.js'
const $u = {
	queryParams: queryParams,
	route: route,
	timeFormat: timeFormat,
	date: timeFormat, 
	timeFrom,
	colorGradient: colorGradient.colorGradient,
	colorToRgba: colorGradient.colorToRgba,
	guid,
	color,
	sys,
	os,
	type2icon,
	randomArray,
	wranning,
	get: http.get,
	post: http.post,
	put: http.put,
	'delete': http.delete,
	hexToRgb: colorGradient.hexToRgb,
	rgbToHex: colorGradient.rgbToHex,
	test,
	random,
	deepClone,
	deepMerge,
	getParent,
	$parent,
	addUnit,
	trim,
	type: ['primary', 'success', 'error', 'warning', 'info'],
	http,
	toast,
	config, 
	zIndex,
	debounce,
	throttle,
}
uni.$u = $u
const install = Vue => {
	Vue.mixin(mixin) 
	if (Vue.prototype.openShare) {
		Vue.mixin(mpShare);
	}
	Vue.filter('timeFormat', (timestamp, format) => {
		return timeFormat(timestamp, format)
	})
	Vue.filter('date', (timestamp, format) => {
		return timeFormat(timestamp, format)
	})
	Vue.filter('timeFrom', (timestamp, format) => {
		return timeFrom(timestamp, format)
	})
	Vue.prototype.$u = $u
}
export default {
	install
}