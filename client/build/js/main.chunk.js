(this["webpackJsonptwitter-showcase-app"] = this["webpackJsonptwitter-showcase-app"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!./node_modules/postcss-loader/src??postcss!./src/App.css ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Paytone+One&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "body {\n    padding: 0;\n    margin: 0;\n    background-color: #34c6da;\n    /* background: url(https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80); */\n    /* background: url(https://images.pexels.com/photos/1903702/pexels-photo-1903702.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260); */\n    background-color: #0f6fbd;\n/* This is mostly intended for prototyping; please download the pattern and re-host for production environments. Thank you! */\n}\n\nimg {\n    border-radius: 25px;\n}\n\n\nheader {\n    \n    padding-top: 30px;\n    min-height: 40px;\n    margin: auto;\n    max-width: 1100px;\n}\n\nhtml {\n    font-family: 'Noto Sans KR', sans-serif;\n}\n\nheader h1 {\n    margin-top: -5px;\n    font-family: 'Noto Sans KR', sans-serif;\n    letter-spacing: 1px;\n}\n\nheader #branding {\n    float: left;\n    margin-left: 1.5%;\n    color: #ffffff;\n}\n\nheader nav {\n    float: right;\n    margin-top: 10px;\n    \n    \n}\n\nheader li {\n    color: white;\n    font-size: 25px;\n    float: left;\n    display: inline;\n    padding: 0 20px 0 20px;\n    margin-top: -25px;\n    font-family: 'Noto Sans KR', sans-serif;\n}\n\n.home-container {\n    margin: 250px auto;\n    border-radius: 25px;\n    background-color: white;\n    width: 60%;\n    height: 60%;\n    border: 5px solid white;\n    box-shadow: 0 3px 10px rgba(0,0,0,0.2);\n}\n\n#home-header {\n    display: flex;\n    justify-content: center;\n    padding-top: 20px;\n    width: 100%;\n    \n}\n\n#input {\n      display: block;\n      margin: auto;\n      width: 50em;\n      margin-top: 50px;\n      border-radius: 50px;\n      height: 50px; \n      padding-left: 20px;\n      outline: none;\n      border: 3px solid white;\n      box-shadow: 0 3px 10px rgba(0,0,0,0.2);\n}\n\n.search-buttons {\n    display: flex;\n    justify-content: center;\n    margin-top: 35px;\n}\n\n#button-user {\n    width: 250px;\n    height: 50px;\n    border-radius: 50px;\n    outline: none;\n    background-color: white;\n    border: 3px solid white;\n    margin-right: 50px;\n    box-shadow: 0 3px 10px rgba(0,0,0,0.2);\n    font-family: 'Noto Sans KR', sans-serif;\n}\n\n#button-content {\n    width: 250px;\n    height: 50px;\n    border-radius: 50px;\n    outline: none;\n    background-color: white;\n    border: 3px solid white;\n    box-shadow: 0 3px 10px rgba(0,0,0,0.2);\n    font-family: 'Noto Sans KR', sans-serif;\n}\n\n#input placeholder {\n    padding-left: 200px;\n}\n\n#home-paragraph {\n    font-size: 25px;\n    padding-left: 20px;\n}\n\n#second-home-paragraph {\n    font-size: 20px;\n    display: flex;\n    justify-content: center;\n}\n\n\n.unordered-list {\n    color: white;\n}\n\n.modal {\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    width: 50%;\n    border: 1px solid grey;\n    margin: 0 auto;\n    padding: 25px;\n    margin-top: 10px;\n    background-color: grey;\n    color: white;\n    border-radius: 4px;\n    transform: translate(-50%, -50%);\n} \n\nbutton:focus {\n    outline: none;\n    box-shadow: none;\n}\n\n.search-modal {\n    margin: auto;\n    display: flex;\n    justify-content: center;\n    color: white;\n    width: 50%;\n    background-color: blue;\n}\n\n.modals-container {\n    display: flex;\n   justify-content: center;\n}\n\n.modals {\n  display: grid;\n  grid-template-columns: repeat(1, 1fr);\n  grid-gap: 1rem;\n  gap: 1rem;\n  background-color: transparent;\n  height: 200px;\n  overflow: hidden;\n  margin-top: 100px;\n  margin-bottom: -50px;\n  background-color: white;\n  width: 50%;\n  padding : 50px;\n  border-radius: 25px;\n  box-shadow: 0 3px 10px rgba(0,0,0,0.2);\n}\n\n.random-container {\n    display: flex;\n    justify-content: center;\n    width: 100%;\n    \n}\n\n.random-buttons {\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    justify-items: center;\n    margin-top: 100px;\n    grid-gap: 1rem;\n    gap: 1rem;\n}\n\nbutton {\n    width: 300px;\n    height: 300px;\n    border-radius: 25px;\n    background-color: white;\n}\n\n.modal-header {\n    display: flex;\n}\n\n#modal-name {\n    margin-left: 10px;\n}\n\n.random-modal {\n  position: absolute;\n  background-color: transparent;\n  height: 200px;\n  overflow: hidden;\n  margin-top: 100px;\n  margin-bottom: -50px;\n  background-color: white;\n  width: 50%;\n  padding : 50px;\n  border-radius: 25px;\n  box-shadow: 0 3px 10px rgba(0,0,0,0.2);\n}\n\n#screen-name {\n    color: gray;\n    font-size: 14px;\n    margin-top: -60px;\n    margin-left: 51px;\n}", "",{"version":3,"sources":["webpack://src/App.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Paytone+One&display=swap');\n@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400&display=swap');\n\nbody {\n    padding: 0;\n    margin: 0;\n    background-color: #34c6da;\n    /* background: url(https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80); */\n    /* background: url(https://images.pexels.com/photos/1903702/pexels-photo-1903702.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260); */\n    background-color: #0f6fbd;\n/* This is mostly intended for prototyping; please download the pattern and re-host for production environments. Thank you! */\n}\n\nimg {\n    border-radius: 25px;\n}\n\n\nheader {\n    \n    padding-top: 30px;\n    min-height: 40px;\n    margin: auto;\n    max-width: 1100px;\n}\n\nhtml {\n    font-family: 'Noto Sans KR', sans-serif;\n}\n\nheader h1 {\n    margin-top: -5px;\n    font-family: 'Noto Sans KR', sans-serif;\n    letter-spacing: 1px;\n}\n\nheader #branding {\n    float: left;\n    margin-left: 1.5%;\n    color: #ffffff;\n}\n\nheader nav {\n    float: right;\n    margin-top: 10px;\n    \n    \n}\n\nheader li {\n    color: white;\n    font-size: 25px;\n    float: left;\n    display: inline;\n    padding: 0 20px 0 20px;\n    margin-top: -25px;\n    font-family: 'Noto Sans KR', sans-serif;\n}\n\n.home-container {\n    margin: 250px auto;\n    border-radius: 25px;\n    background-color: white;\n    width: 60%;\n    height: 60%;\n    border: 5px solid white;\n    box-shadow: 0 3px 10px rgba(0,0,0,0.2);\n}\n\n#home-header {\n    display: flex;\n    justify-content: center;\n    padding-top: 20px;\n    width: 100%;\n    \n}\n\n#input {\n      display: block;\n      margin: auto;\n      width: 50em;\n      margin-top: 50px;\n      border-radius: 50px;\n      height: 50px; \n      padding-left: 20px;\n      outline: none;\n      border: 3px solid white;\n      box-shadow: 0 3px 10px rgba(0,0,0,0.2);\n}\n\n.search-buttons {\n    display: flex;\n    justify-content: center;\n    margin-top: 35px;\n}\n\n#button-user {\n    width: 250px;\n    height: 50px;\n    border-radius: 50px;\n    outline: none;\n    background-color: white;\n    border: 3px solid white;\n    margin-right: 50px;\n    box-shadow: 0 3px 10px rgba(0,0,0,0.2);\n    font-family: 'Noto Sans KR', sans-serif;\n}\n\n#button-content {\n    width: 250px;\n    height: 50px;\n    border-radius: 50px;\n    outline: none;\n    background-color: white;\n    border: 3px solid white;\n    box-shadow: 0 3px 10px rgba(0,0,0,0.2);\n    font-family: 'Noto Sans KR', sans-serif;\n}\n\n#input placeholder {\n    padding-left: 200px;\n}\n\n#home-paragraph {\n    font-size: 25px;\n    padding-left: 20px;\n}\n\n#second-home-paragraph {\n    font-size: 20px;\n    display: flex;\n    justify-content: center;\n}\n\n\n.unordered-list {\n    color: white;\n}\n\n.modal {\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    width: 50%;\n    border: 1px solid grey;\n    margin: 0 auto;\n    padding: 25px;\n    margin-top: 10px;\n    background-color: grey;\n    color: white;\n    border-radius: 4px;\n    transform: translate(-50%, -50%);\n} \n\nbutton:focus {\n    outline: none;\n    box-shadow: none;\n}\n\n.search-modal {\n    margin: auto;\n    display: flex;\n    justify-content: center;\n    color: white;\n    width: 50%;\n    background-color: blue;\n}\n\n.modals-container {\n    display: flex;\n   justify-content: center;\n}\n\n.modals {\n  display: grid;\n  grid-template-columns: repeat(1, 1fr);\n  gap: 1rem;\n  background-color: transparent;\n  height: 200px;\n  overflow: hidden;\n  margin-top: 100px;\n  margin-bottom: -50px;\n  background-color: white;\n  width: 50%;\n  padding : 50px;\n  border-radius: 25px;\n  box-shadow: 0 3px 10px rgba(0,0,0,0.2);\n}\n\n.random-container {\n    display: flex;\n    justify-content: center;\n    width: 100%;\n    \n}\n\n.random-buttons {\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    justify-items: center;\n    margin-top: 100px;\n    gap: 1rem;\n}\n\nbutton {\n    width: 300px;\n    height: 300px;\n    border-radius: 25px;\n    background-color: white;\n}\n\n.modal-header {\n    display: flex;\n}\n\n#modal-name {\n    margin-left: 10px;\n}\n\n.random-modal {\n  position: absolute;\n  background-color: transparent;\n  height: 200px;\n  overflow: hidden;\n  margin-top: 100px;\n  margin-bottom: -50px;\n  background-color: white;\n  width: 50%;\n  padding : 50px;\n  border-radius: 25px;\n  box-shadow: 0 3px 10px rgba(0,0,0,0.2);\n}\n\n#screen-name {\n    color: gray;\n    font-size: 14px;\n    margin-top: -60px;\n    margin-left: 51px;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!./node_modules/postcss-loader/src??postcss!./src/index.css ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "", "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/App.css":
/*!*********************!*\
  !*** ./src/App.css ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.css */ "./src/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Nav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Nav */ "./src/components/Nav.js");
/* harmony import */ var _components_Random__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Random */ "./src/components/Random.js");
/* harmony import */ var _components_Search__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/Search */ "./src/components/Search.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _components_Home__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/Home */ "./src/components/Home.js");

var _jsxFileName = "C:\\Users\\joe\\Documents\\coding projects\\twitter-showcase-app\\client\\src\\App.js";








const App = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["BrowserRouter"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Nav__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Switch"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Route"], {
          path: "/",
          exact: true,
          component: _components_Home__WEBPACK_IMPORTED_MODULE_7__["default"]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Route"], {
          path: "/Search",
          component: _components_Search__WEBPACK_IMPORTED_MODULE_5__["default"]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Route"], {
          path: "/Random",
          component: _components_Random__WEBPACK_IMPORTED_MODULE_4__["default"]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/components/ContentModals.js":
/*!*****************************************!*\
  !*** ./src/components/ContentModals.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\joe\\Documents\\coding projects\\twitter-showcase-app\\client\\src\\components\\ContentModals.js";


const ContentModals = ({
  contentTweet
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    class: "modals-container",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      class: "modals",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
        src: contentTweet.user.profile_image_url
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: userTweet.user.name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: contentTweet.full_text
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (ContentModals);

/***/ }),

/***/ "./src/components/Home.js":
/*!********************************!*\
  !*** ./src/components/Home.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\joe\\Documents\\coding projects\\twitter-showcase-app\\client\\src\\components\\Home.js";


class Home extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  render() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "home-container",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
        id: "home-header",
        children: "Welcome to the Twitter Showcase!"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        id: "home-paragraph",
        children: "This is a simple web application that utilizes the Twitter API to retrieve twitter timeline information. You can search based on user or content in the search page, or utilize the random tweet page to pull a random tweet from the selected choices."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        id: "second-home-paragraph",
        children: "Hope you enjoy!"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 13
    }, this);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./src/components/Nav.js":
/*!*******************************!*\
  !*** ./src/components/Nav.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");

var _jsxFileName = "C:\\Users\\joe\\Documents\\coding projects\\twitter-showcase-app\\client\\src\\components\\Nav.js";



class Nav extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  render() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("nav", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("header", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          class: "container",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            id: "branding",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
              class: "highlight",
              children: "Twitter Showcase"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 11,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 10,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("nav", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
                to: "/",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                  children: "Home"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 16,
                  columnNumber: 37
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 15,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
                to: "/Search",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                  children: "Search"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 19,
                  columnNumber: 37
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 18,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
                to: "/Random",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                  children: "Random"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 22,
                  columnNumber: 37
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 21,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 14,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 13,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 9,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }, this);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Nav);

/***/ }),

/***/ "./src/components/Random.js":
/*!**********************************!*\
  !*** ./src/components/Random.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\joe\\Documents\\coding projects\\twitter-showcase-app\\client\\src\\components\\Random.js";




const Random = () => {
  const [tweets, setTweets] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  const [isOpen, setIsOpen] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);

  const handleClick = e => {
    e.preventDefault();
    const param = e.target.name;
    axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(`/api/tweets?search=${param}`).then(res => setTweets(res.data)).catch(err => console.log(err));
    setIsOpen(!isOpen);
  };

  const randomNumber = Math.floor(Math.random() * tweets.length);
  const displayRandomTweet = tweets[randomNumber];
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    class: "random-container",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      class: "random-buttons",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        name: "NASA",
        onClick: handleClick,
        children: "get NASA Tweet!"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 13
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        name: "Spacex",
        onClick: handleClick,
        children: "Get SpaceX Tweet!"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 13
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        name: "elonmusk",
        onClick: handleClick,
        children: "Get Elon Musk Tweet!"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 13
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        class: "random-buttons-2",
        name: "whitegavriel",
        onClick: handleClick,
        children: "Get Windows 96 Tweet!"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 13
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        class: "random-buttons-2",
        name: "DanMasonVapor",
        onClick: handleClick,
        children: "Get Dan Mason Tweet!"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 13
      }, undefined), isOpen ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "random-modal",
        children: displayRandomTweet === null || displayRandomTweet === void 0 ? void 0 : displayRandomTweet.full_text
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 23
      }, undefined) : null]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Random);

/***/ }),

/***/ "./src/components/Search.js":
/*!**********************************!*\
  !*** ./src/components/Search.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _UserModals__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./UserModals */ "./src/components/UserModals.js");
/* harmony import */ var _ContentModals__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ContentModals */ "./src/components/ContentModals.js");

var _jsxFileName = "C:\\Users\\joe\\Documents\\coding projects\\twitter-showcase-app\\client\\src\\components\\Search.js";






const Search = () => {
  const [input, setInput] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('');
  const [userTweets, setUserTweets] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  const [isOpen, setisOpen] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const [contentTweets, setContentTweets] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);

  const updateInput = e => {
    setInput(e.target.value);
  }; // User Tweets


  const handleClick = e => {
    e.preventDefault();
    axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(`/api/tweets?search=${input}`).then(res => setUserTweets(res.data)).catch(err => console.log(err));
    setisOpen(!isOpen);
    console.log(userTweets);
  }; // Content Tweets


  const handleClickContent = e => {
    e.preventDefault();
    axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(`/api/tweets/content?content=${input}`).then(res => setContentTweets(res.data.statuses)).catch(err => console.log(err));
    setisOpen(!isOpen);
    console.log(contentTweets);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
        id: "input",
        type: "text",
        placeholder: "Search here",
        onChange: updateInput,
        value: input
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        class: "search-buttons",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          id: "button-user",
          onClick: handleClick,
          type: "submit",
          children: "User"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          id: "button-content",
          onClick: handleClickContent,
          type: "submit",
          children: "Content"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: userTweets.map(userTweet => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_UserModals__WEBPACK_IMPORTED_MODULE_3__["default"], {
        userTweet: userTweet
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 21
      }, undefined))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 13
    }, undefined), contentTweets.map(contentTweet => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ContentModals__WEBPACK_IMPORTED_MODULE_4__["default"], {
      contentTweet: contentTweet
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 21
    }, undefined))]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 48,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Search);

/***/ }),

/***/ "./src/components/UserModals.js":
/*!**************************************!*\
  !*** ./src/components/UserModals.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\joe\\Documents\\coding projects\\twitter-showcase-app\\client\\src\\components\\UserModals.js";


const UserModals = ({
  userTweet
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    class: "modals-container",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      class: "modals",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        class: "modal-header",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: userTweet.user.profile_image_url
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 10,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 9,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            id: "modal-name",
            children: [userTweet.user.name, "  "]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 13,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          id: "screen-name",
          children: [" @", userTweet.user.screen_name]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: userTweet.full_text
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (UserModals);

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./App */ "./src/App.js");

var _jsxFileName = "C:\\Users\\joe\\Documents\\coding projects\\twitter-showcase-app\\client\\src\\index.js";




react_dom__WEBPACK_IMPORTED_MODULE_2___default.a.render( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.StrictMode, {
  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_App__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 8,
  columnNumber: 3
}, undefined), document.getElementById('root'));

/***/ }),

/***/ 0:
/*!**********************************************************************************!*\
  !*** multi ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! C:\Users\joe\Documents\coding projects\twitter-showcase-app\client\node_modules\react-dev-utils\webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! C:\Users\joe\Documents\coding projects\twitter-showcase-app\client\src\index.js */"./src/index.js");


/***/ })

},[[0,"runtime-main",0]]]);
//# sourceMappingURL=main.chunk.js.map