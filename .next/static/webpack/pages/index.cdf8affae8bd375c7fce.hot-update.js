webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_layout_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/layout/Layout */ \"./components/layout/Layout.js\");\n/* harmony import */ var _components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/meetups/MeetupList */ \"./components/meetups/MeetupList.js\");\n\n\nvar _jsxFileName = \"/Users/pateh1/Desktop/ReactApps/nextjs-meetup-app/pages/index.js\",\n    _this = undefined;\n\n\n\n\n\n\n// our-domain.com/\nvar HomePage = function HomePage(props) {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react__WEBPACK_IMPORTED_MODULE_1__[\"Fragment\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      meetups: props.meetups\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 20\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 10,\n    columnNumber: 10\n  }, _this);\n}; // export const getServerSideProps = async (context) => {\n//   // fetch data from API\n//   const req = context.req;\n//   const res = context.res;\n//   return {\n//     props: {\n//       meetups: DUMMY_MEETUPS,\n//     },\n//   }; // always returns an object\n// };\n\n\n_c = HomePage;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\n/*\nUsing getStaticProps() or getServerSideProps() will no longer needed useEffect and useState for fetching and setting data\n  //   const [loadedMeetups, setLoadedMeetups] = useState([]);\n  //   useEffect(() => {\n  //     setLoadedMeetups(DUMMY_MEETUPS);\n  //   }, []);\n\n\n---------------- Some basic info on getStaticProps() and getServerSideProps() -------------------\nReserved method in nextjs to get static content/data before rendering the page\nso that the current component page gets executed and rendered with required data\n\nNeeded getStaticProps method, so that when the component page is loaded and rendered,\nit contains the data which will be used by SEO(Search engine optimization) and able to search throught the page\n\nAlso, this method will be called during the build process of production.\nThat means, it doesn't runs on the client side nor on the server side\n\n{revalidate: <seconds>}, prop unlocks the incremental generation of the static content/data for the component page,\nso that if data changes after build, we will get the latest data and not the outdated one which is generated while build\n\nrevalidate prop accepts the seconds and it will re-generate the static content after every seconds given if there are incoming requests for it\nand replaces the old generated page with new one\n\n\n---------------- Some basic info on getServerSideProps() -------------------\nThe difference between getServerSideProps and getStaticProps is that,\ngetServerSideProps() will get executed on the server and prepare the data\nwhereas getStaticProps() will get executed at the time of build and prepare the data\n\nAlso, in getServerSideProps() doesn't needed revalidate prop anymore to revalidate data every seconds\n\n*/\n\nvar _c;\n\n$RefreshReg$(_c, \"HomePage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJIb21lUGFnZSIsInByb3BzIiwibWVldHVwcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBR0E7QUFFQSxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDQyxLQUFELEVBQVc7QUFDMUIsc0JBQU8scUVBQUMsOENBQUQ7QUFBQSwyQkFBVSxxRUFBQyxzRUFBRDtBQUFZLGFBQU8sRUFBRUEsS0FBSyxDQUFDQztBQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFQO0FBQ0QsQ0FGRCxDLENBSUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztLQWRNRixROztBQXlDU0EsdUVBQWY7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIEZyYWdtZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL2xheW91dC9MYXlvdXRcIjtcbmltcG9ydCBNZWV0dXBMaXN0IGZyb20gXCIuLi9jb21wb25lbnRzL21lZXR1cHMvTWVldHVwTGlzdFwiO1xuaW1wb3J0IHsgTW9uZ29DbGllbnQgfSBmcm9tIFwibW9uZ29kYlwiO1xuXG4vLyBvdXItZG9tYWluLmNvbS9cblxuY29uc3QgSG9tZVBhZ2UgPSAocHJvcHMpID0+IHtcbiAgcmV0dXJuIDxGcmFnbWVudD48TWVldHVwTGlzdCBtZWV0dXBzPXtwcm9wcy5tZWV0dXBzfSAvPjwvRnJhZ21lbnQ+O1xufTtcblxuLy8gZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wcyA9IGFzeW5jIChjb250ZXh0KSA9PiB7XG4vLyAgIC8vIGZldGNoIGRhdGEgZnJvbSBBUElcbi8vICAgY29uc3QgcmVxID0gY29udGV4dC5yZXE7XG4vLyAgIGNvbnN0IHJlcyA9IGNvbnRleHQucmVzO1xuXG4vLyAgIHJldHVybiB7XG4vLyAgICAgcHJvcHM6IHtcbi8vICAgICAgIG1lZXR1cHM6IERVTU1ZX01FRVRVUFMsXG4vLyAgICAgfSxcbi8vICAgfTsgLy8gYWx3YXlzIHJldHVybnMgYW4gb2JqZWN0XG4vLyB9O1xuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHMgPSBhc3luYyAoKSA9PiB7XG4gIC8vIGZldGNoIGRhdGEgZnJvbSBBUElcblxuICBjb25zdCBjbGllbnQgPSBhd2FpdCBNb25nb0NsaWVudC5jb25uZWN0KFxuICAgIFwibW9uZ29kYitzcnY6Ly9hZG1pbjpOYlZXM0w0aHVmeVNrRDZBQGNsdXN0ZXIwLmZobmd2Lm1vbmdvZGIubmV0L21lZXR1cHM/cmV0cnlXcml0ZXM9dHJ1ZSZ3PW1ham9yaXR5XCJcbiAgKTtcbiAgY29uc3QgZGIgPSBjbGllbnQuZGIoKTtcbiAgY29uc3QgbWVldHVwc0NvbGxlY3Rpb25zID0gZGIuY29sbGVjdGlvbihcIm1lZXR1cHNcIik7XG4gIGNvbnN0IG1lZXR1cHMgPSBhd2FpdCBtZWV0dXBzQ29sbGVjdGlvbnMuZmluZCgpLnRvQXJyYXkoKTtcblxuICBjbGllbnQuY2xvc2UoKTtcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBtZWV0dXBzOiBtZWV0dXBzLm1hcCgobWVldHVwKSA9PiAoe1xuICAgICAgICB0aXRsZTogbWVldHVwLnRpdGxlLFxuICAgICAgICBhZGRyZXNzOiBtZWV0dXAuYWRkcmVzcyxcbiAgICAgICAgaW1hZ2U6IG1lZXR1cC5pbWFnZSxcbiAgICAgICAgaWQ6IG1lZXR1cC5faWQudG9TdHJpbmcoKSxcbiAgICAgIH0pKSxcbiAgICB9LFxuICAgIHJldmFsaWRhdGU6IDEsXG4gIH07IC8vIGFsd2F5cyByZXR1cm5zIGFuIG9iamVjdFxufTtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2U7XG5cbi8qXG5Vc2luZyBnZXRTdGF0aWNQcm9wcygpIG9yIGdldFNlcnZlclNpZGVQcm9wcygpIHdpbGwgbm8gbG9uZ2VyIG5lZWRlZCB1c2VFZmZlY3QgYW5kIHVzZVN0YXRlIGZvciBmZXRjaGluZyBhbmQgc2V0dGluZyBkYXRhXG4gIC8vICAgY29uc3QgW2xvYWRlZE1lZXR1cHMsIHNldExvYWRlZE1lZXR1cHNdID0gdXNlU3RhdGUoW10pO1xuICAvLyAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gIC8vICAgICBzZXRMb2FkZWRNZWV0dXBzKERVTU1ZX01FRVRVUFMpO1xuICAvLyAgIH0sIFtdKTtcblxuXG4tLS0tLS0tLS0tLS0tLS0tIFNvbWUgYmFzaWMgaW5mbyBvbiBnZXRTdGF0aWNQcm9wcygpIGFuZCBnZXRTZXJ2ZXJTaWRlUHJvcHMoKSAtLS0tLS0tLS0tLS0tLS0tLS0tXG5SZXNlcnZlZCBtZXRob2QgaW4gbmV4dGpzIHRvIGdldCBzdGF0aWMgY29udGVudC9kYXRhIGJlZm9yZSByZW5kZXJpbmcgdGhlIHBhZ2VcbnNvIHRoYXQgdGhlIGN1cnJlbnQgY29tcG9uZW50IHBhZ2UgZ2V0cyBleGVjdXRlZCBhbmQgcmVuZGVyZWQgd2l0aCByZXF1aXJlZCBkYXRhXG5cbk5lZWRlZCBnZXRTdGF0aWNQcm9wcyBtZXRob2QsIHNvIHRoYXQgd2hlbiB0aGUgY29tcG9uZW50IHBhZ2UgaXMgbG9hZGVkIGFuZCByZW5kZXJlZCxcbml0IGNvbnRhaW5zIHRoZSBkYXRhIHdoaWNoIHdpbGwgYmUgdXNlZCBieSBTRU8oU2VhcmNoIGVuZ2luZSBvcHRpbWl6YXRpb24pIGFuZCBhYmxlIHRvIHNlYXJjaCB0aHJvdWdodCB0aGUgcGFnZVxuXG5BbHNvLCB0aGlzIG1ldGhvZCB3aWxsIGJlIGNhbGxlZCBkdXJpbmcgdGhlIGJ1aWxkIHByb2Nlc3Mgb2YgcHJvZHVjdGlvbi5cblRoYXQgbWVhbnMsIGl0IGRvZXNuJ3QgcnVucyBvbiB0aGUgY2xpZW50IHNpZGUgbm9yIG9uIHRoZSBzZXJ2ZXIgc2lkZVxuXG57cmV2YWxpZGF0ZTogPHNlY29uZHM+fSwgcHJvcCB1bmxvY2tzIHRoZSBpbmNyZW1lbnRhbCBnZW5lcmF0aW9uIG9mIHRoZSBzdGF0aWMgY29udGVudC9kYXRhIGZvciB0aGUgY29tcG9uZW50IHBhZ2UsXG5zbyB0aGF0IGlmIGRhdGEgY2hhbmdlcyBhZnRlciBidWlsZCwgd2Ugd2lsbCBnZXQgdGhlIGxhdGVzdCBkYXRhIGFuZCBub3QgdGhlIG91dGRhdGVkIG9uZSB3aGljaCBpcyBnZW5lcmF0ZWQgd2hpbGUgYnVpbGRcblxucmV2YWxpZGF0ZSBwcm9wIGFjY2VwdHMgdGhlIHNlY29uZHMgYW5kIGl0IHdpbGwgcmUtZ2VuZXJhdGUgdGhlIHN0YXRpYyBjb250ZW50IGFmdGVyIGV2ZXJ5IHNlY29uZHMgZ2l2ZW4gaWYgdGhlcmUgYXJlIGluY29taW5nIHJlcXVlc3RzIGZvciBpdFxuYW5kIHJlcGxhY2VzIHRoZSBvbGQgZ2VuZXJhdGVkIHBhZ2Ugd2l0aCBuZXcgb25lXG5cblxuLS0tLS0tLS0tLS0tLS0tLSBTb21lIGJhc2ljIGluZm8gb24gZ2V0U2VydmVyU2lkZVByb3BzKCkgLS0tLS0tLS0tLS0tLS0tLS0tLVxuVGhlIGRpZmZlcmVuY2UgYmV0d2VlbiBnZXRTZXJ2ZXJTaWRlUHJvcHMgYW5kIGdldFN0YXRpY1Byb3BzIGlzIHRoYXQsXG5nZXRTZXJ2ZXJTaWRlUHJvcHMoKSB3aWxsIGdldCBleGVjdXRlZCBvbiB0aGUgc2VydmVyIGFuZCBwcmVwYXJlIHRoZSBkYXRhXG53aGVyZWFzIGdldFN0YXRpY1Byb3BzKCkgd2lsbCBnZXQgZXhlY3V0ZWQgYXQgdGhlIHRpbWUgb2YgYnVpbGQgYW5kIHByZXBhcmUgdGhlIGRhdGFcblxuQWxzbywgaW4gZ2V0U2VydmVyU2lkZVByb3BzKCkgZG9lc24ndCBuZWVkZWQgcmV2YWxpZGF0ZSBwcm9wIGFueW1vcmUgdG8gcmV2YWxpZGF0ZSBkYXRhIGV2ZXJ5IHNlY29uZHNcblxuKi9cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})