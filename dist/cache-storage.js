(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["cacheStorage"] = factory();
	else
		root["cacheStorage"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	// Poor man's async "localStorage" on top of Cache
	// https://developer.mozilla.org/en-US/docs/Web/API/Cache
	if (typeof caches === 'undefined') {
	  throw new Error('Cannot find object caches?! Cannot init cache-storage')
	}
	/* global caches */
	function dataStore () {
	  var id = 'cache-storage-v1'
	  return caches.open(id)
	    .then(function (cache) {
	      return {
	        setItem: function (key, data) {
	          return cache.put(key, new Response(JSON.stringify(data)))
	        },
	        getItem: function (key) {
	          return cache.match(key)
	            .then(function (res) {
	              return res &&
	                res.text().then(JSON.parse)
	            })
	        }
	      }
	    })
	}

	module.exports = dataStore


/***/ }
/******/ ])
});
;