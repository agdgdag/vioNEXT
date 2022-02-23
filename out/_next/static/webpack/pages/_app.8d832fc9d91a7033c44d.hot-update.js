self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./pages/_app.jsx":
/*!************************!*\
  !*** ./pages/_app.jsx ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_Rivers_Desktop_vioStore_vio_next_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_Rivers_Desktop_vioStore_vio_next_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_Rivers_Desktop_vioStore_vio_next_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_Rivers_Desktop_vioStore_vio_next_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/es/Helmet.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! redux-persist/integration/react */ "./node_modules/redux-persist/es/integration/react.js");
/* harmony import */ var _store_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../store/index.js */ "./store/index.js");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/layout */ "./components/layout.jsx");
/* harmony import */ var _store_demo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../store/demo */ "./store/demo.js");
/* harmony import */ var _public_scss_plugins_owl_carousel_owl_carousel_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ~/public/scss/plugins/owl-carousel/owl.carousel.scss */ "./public/scss/plugins/owl-carousel/owl.carousel.scss");
/* harmony import */ var _public_scss_plugins_owl_carousel_owl_carousel_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_public_scss_plugins_owl_carousel_owl_carousel_scss__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _public_scss_style_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ~/public/scss/style.scss */ "./public/scss/style.scss");
/* harmony import */ var _public_scss_style_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_public_scss_style_scss__WEBPACK_IMPORTED_MODULE_10__);
/* module decorator */ module = __webpack_require__.hmd(module);



var _s = $RefreshSig$();


var __jsx = (react__WEBPACK_IMPORTED_MODULE_2___default().createElement);











var WrappedApp = function WrappedApp(_ref) {
  _s();

  var Component = _ref.Component,
      pageProps = _ref.pageProps;
  var store = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useStore)();
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    if (store.getState().demo.current != "11") {
      store.dispatch(_store_demo__WEBPACK_IMPORTED_MODULE_8__.actions.refreshStore("11"));
    }
  }, []);
  return __jsx((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null) // <Provider store={store}>
  //     <PersistGate
  //         persistor={store.__persistor}
  //         loading={
  //             <div className="loading-overlay">
  //                 <div className="bounce-loader">
  //                     <div className="bounce1"></div>
  //                     <div className="bounce2"></div>
  //                     <div className="bounce3"></div>
  //                 </div>
  //             </div>
  //         }>
  //         <Helmet>
  //             <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  //             <meta name="keywords" content="Molla React Template" />
  //             <meta name="description" content="Molla –  eCommerce React Template is a multi-use React template. It is designed to go well with multi-purpose websites."
  //             />
  //             <meta name="author" content="d-themes" />
  //             <meta name="apple-mobile-web-app-title" content="Molla" />
  //             <meta name="application-name" content="Molla React eCommerce Template" />
  //             <meta name="msapplication-TileColor" content="#cc9966" />
  //             <meta name="msapplication-config" content="images/icons/browserconfig.xml" />
  //             <meta name="theme-color" content="#ffffff" />
  //             <title>Molla - React eCommerce Template</title>
  //             <link rel="apple-touch-icon" sizes="180x180" href="images/icons/apple-touch-icon.png" />
  //             <link rel="icon" type="image/png" sizes="32x32" href="images/icons/favicon-32x32.png" />
  //             <link rel="icon" type="image/png" sizes="16x16" href="images/icons/favicon-16x16.png" />
  //             <link rel="manifest" href="images/icons/site.webmanifest" />
  //             <link rel="mask-icon" href="images/icons/safari-pinned-tab.svg" color="#666666" />
  //             <link rel="shortcut icon" href="images/icons/favicon.ico" />
  //         </Helmet>
  //         <Layout>
  //             <Component {...pageProps} />
  //         </Layout>
  //     </PersistGate>
  // </Provider >
  ;
};

_s(WrappedApp, "7WX0f3w9+vyXsBWAiuPF4CU1RJU=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_4__.useStore];
});

_c = WrappedApp;

WrappedApp.getInitialProps = /*#__PURE__*/function () {
  var _ref3 = (0,C_Users_Rivers_Desktop_vioStore_vio_next_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/C_Users_Rivers_Desktop_vioStore_vio_next_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(_ref2) {
    var Component, ctx, pageProps;
    return C_Users_Rivers_Desktop_vioStore_vio_next_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            Component = _ref2.Component, ctx = _ref2.ctx;
            pageProps = {};

            if (!Component.getInitialProps) {
              _context.next = 6;
              break;
            }

            _context.next = 5;
            return Component.getInitialProps(ctx);

          case 5:
            pageProps = _context.sent;

          case 6:
            return _context.abrupt("return", {
              pageProps: pageProps
            });

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref3.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (_c2 = _store_index_js__WEBPACK_IMPORTED_MODULE_6__.wrapper.withRedux(WrappedApp));

var _c, _c2;

$RefreshReg$(_c, "WrappedApp");
$RefreshReg$(_c2, "%default%");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC5qc3giXSwibmFtZXMiOlsiV3JhcHBlZEFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInN0b3JlIiwidXNlU3RvcmUiLCJ1c2VFZmZlY3QiLCJnZXRTdGF0ZSIsImRlbW8iLCJjdXJyZW50IiwicHJvY2VzcyIsImRpc3BhdGNoIiwiZGVtb0FjdGlvbiIsImdldEluaXRpYWxQcm9wcyIsImN0eCIsIndyYXBwZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBOztBQUVBLElBQU1BLFVBQVUsR0FBRyxTQUFiQSxVQUFhLE9BQThCO0FBQUE7O0FBQUEsTUFBM0JDLFNBQTJCLFFBQTNCQSxTQUEyQjtBQUFBLE1BQWhCQyxTQUFnQixRQUFoQkEsU0FBZ0I7QUFDN0MsTUFBTUMsS0FBSyxHQUFHQyxxREFBUSxFQUF0QjtBQUNBQyxrREFBUyxDQUFDLFlBQU07QUFDWixRQUFJRixLQUFLLENBQUNHLFFBQU4sR0FBaUJDLElBQWpCLENBQXNCQyxPQUF0QixJQUFpQ0MsSUFBckMsRUFBbUU7QUFDL0ROLFdBQUssQ0FBQ08sUUFBTixDQUFlQyw2REFBQSxDQUF3QkYsSUFBeEIsQ0FBZjtBQUNIO0FBQ0osR0FKUSxFQUlOLEVBSk0sQ0FBVDtBQU1BLFNBQ0ksb0VBREosQ0FJSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUF6Q0o7QUEyQ0gsQ0FuREQ7O0dBQU1ULFU7VUFDWUksaUQ7OztLQURaSixVOztBQXFETkEsVUFBVSxDQUFDWSxlQUFYO0FBQUEsc1VBQTZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFTWCxxQkFBVCxTQUFTQSxTQUFULEVBQW9CWSxHQUFwQixTQUFvQkEsR0FBcEI7QUFDckJYLHFCQURxQixHQUNULEVBRFM7O0FBQUEsaUJBRXJCRCxTQUFTLENBQUNXLGVBRlc7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQSxtQkFHSFgsU0FBUyxDQUFDVyxlQUFWLENBQTBCQyxHQUExQixDQUhHOztBQUFBO0FBR3JCWCxxQkFIcUI7O0FBQUE7QUFBQSw2Q0FLbEI7QUFBRUEsdUJBQVMsRUFBVEE7QUFBRixhQUxrQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUE3Qjs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFRQSwrREFBZSxNQUFBWSw4REFBQSxDQUFrQmQsVUFBbEIsQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjhkODMyZmM5ZDkxYTcwMzNjNDRkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEhlbG1ldCBmcm9tIFwicmVhY3QtaGVsbWV0XCI7XHJcbmltcG9ydCB7IHVzZVN0b3JlIH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IFBlcnNpc3RHYXRlIH0gZnJvbSAncmVkdXgtcGVyc2lzdC9pbnRlZ3JhdGlvbi9yZWFjdCc7XHJcblxyXG5pbXBvcnQgeyB3cmFwcGVyIH0gZnJvbSBcIi4uL3N0b3JlL2luZGV4LmpzXCI7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQnO1xyXG5cclxuaW1wb3J0IHsgYWN0aW9ucyBhcyBkZW1vQWN0aW9uIH0gZnJvbSBcIi4uL3N0b3JlL2RlbW9cIjtcclxuXHJcbmltcG9ydCAnfi9wdWJsaWMvc2Nzcy9wbHVnaW5zL293bC1jYXJvdXNlbC9vd2wuY2Fyb3VzZWwuc2Nzcyc7XHJcbmltcG9ydCBcIn4vcHVibGljL3Njc3Mvc3R5bGUuc2Nzc1wiO1xyXG5cclxuY29uc3QgV3JhcHBlZEFwcCA9ICh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pID0+IHtcclxuICAgIGNvbnN0IHN0b3JlID0gdXNlU3RvcmUoKTtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKHN0b3JlLmdldFN0YXRlKCkuZGVtby5jdXJyZW50ICE9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0RFTU8pIHtcclxuICAgICAgICAgICAgc3RvcmUuZGlzcGF0Y2goZGVtb0FjdGlvbi5yZWZyZXNoU3RvcmUocHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfREVNTykpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtdKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgPC8+XHJcbiAgICAgICAgLy8gPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XHJcbiAgICAgICAgLy8gICAgIDxQZXJzaXN0R2F0ZVxyXG4gICAgICAgIC8vICAgICAgICAgcGVyc2lzdG9yPXtzdG9yZS5fX3BlcnNpc3Rvcn1cclxuICAgICAgICAvLyAgICAgICAgIGxvYWRpbmc9e1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9hZGluZy1vdmVybGF5XCI+XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm91bmNlLWxvYWRlclwiPlxyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3VuY2UxXCI+PC9kaXY+XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvdW5jZTJcIj48L2Rpdj5cclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm91bmNlM1wiPjwvZGl2PlxyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAvLyAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAvLyAgICAgICAgIH0+XHJcblxyXG4gICAgICAgIC8vICAgICAgICAgPEhlbG1ldD5cclxuICAgICAgICAvLyAgICAgICAgICAgICA8bWV0YSBodHRwRXF1aXY9XCJYLVVBLUNvbXBhdGlibGVcIiBjb250ZW50PVwiSUU9ZWRnZVwiIC8+XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgPG1ldGEgbmFtZT1cImtleXdvcmRzXCIgY29udGVudD1cIk1vbGxhIFJlYWN0IFRlbXBsYXRlXCIgLz5cclxuICAgICAgICAvLyAgICAgICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiTW9sbGEg4oCTICBlQ29tbWVyY2UgUmVhY3QgVGVtcGxhdGUgaXMgYSBtdWx0aS11c2UgUmVhY3QgdGVtcGxhdGUuIEl0IGlzIGRlc2lnbmVkIHRvIGdvIHdlbGwgd2l0aCBtdWx0aS1wdXJwb3NlIHdlYnNpdGVzLlwiXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgLz5cclxuICAgICAgICAvLyAgICAgICAgICAgICA8bWV0YSBuYW1lPVwiYXV0aG9yXCIgY29udGVudD1cImQtdGhlbWVzXCIgLz5cclxuICAgICAgICAvLyAgICAgICAgICAgICA8bWV0YSBuYW1lPVwiYXBwbGUtbW9iaWxlLXdlYi1hcHAtdGl0bGVcIiBjb250ZW50PVwiTW9sbGFcIiAvPlxyXG4gICAgICAgIC8vICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJhcHBsaWNhdGlvbi1uYW1lXCIgY29udGVudD1cIk1vbGxhIFJlYWN0IGVDb21tZXJjZSBUZW1wbGF0ZVwiIC8+XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgPG1ldGEgbmFtZT1cIm1zYXBwbGljYXRpb24tVGlsZUNvbG9yXCIgY29udGVudD1cIiNjYzk5NjZcIiAvPlxyXG4gICAgICAgIC8vICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJtc2FwcGxpY2F0aW9uLWNvbmZpZ1wiIGNvbnRlbnQ9XCJpbWFnZXMvaWNvbnMvYnJvd3NlcmNvbmZpZy54bWxcIiAvPlxyXG4gICAgICAgIC8vICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJ0aGVtZS1jb2xvclwiIGNvbnRlbnQ9XCIjZmZmZmZmXCIgLz5cclxuICAgICAgICAvLyAgICAgICAgICAgICA8dGl0bGU+TW9sbGEgLSBSZWFjdCBlQ29tbWVyY2UgVGVtcGxhdGU8L3RpdGxlPlxyXG4gICAgICAgIC8vICAgICAgICAgICAgIDxsaW5rIHJlbD1cImFwcGxlLXRvdWNoLWljb25cIiBzaXplcz1cIjE4MHgxODBcIiBocmVmPVwiaW1hZ2VzL2ljb25zL2FwcGxlLXRvdWNoLWljb24ucG5nXCIgLz5cclxuICAgICAgICAvLyAgICAgICAgICAgICA8bGluayByZWw9XCJpY29uXCIgdHlwZT1cImltYWdlL3BuZ1wiIHNpemVzPVwiMzJ4MzJcIiBocmVmPVwiaW1hZ2VzL2ljb25zL2Zhdmljb24tMzJ4MzIucG5nXCIgLz5cclxuICAgICAgICAvLyAgICAgICAgICAgICA8bGluayByZWw9XCJpY29uXCIgdHlwZT1cImltYWdlL3BuZ1wiIHNpemVzPVwiMTZ4MTZcIiBocmVmPVwiaW1hZ2VzL2ljb25zL2Zhdmljb24tMTZ4MTYucG5nXCIgLz5cclxuICAgICAgICAvLyAgICAgICAgICAgICA8bGluayByZWw9XCJtYW5pZmVzdFwiIGhyZWY9XCJpbWFnZXMvaWNvbnMvc2l0ZS53ZWJtYW5pZmVzdFwiIC8+XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgPGxpbmsgcmVsPVwibWFzay1pY29uXCIgaHJlZj1cImltYWdlcy9pY29ucy9zYWZhcmktcGlubmVkLXRhYi5zdmdcIiBjb2xvcj1cIiM2NjY2NjZcIiAvPlxyXG4gICAgICAgIC8vICAgICAgICAgICAgIDxsaW5rIHJlbD1cInNob3J0Y3V0IGljb25cIiBocmVmPVwiaW1hZ2VzL2ljb25zL2Zhdmljb24uaWNvXCIgLz5cclxuICAgICAgICAvLyAgICAgICAgIDwvSGVsbWV0PlxyXG5cclxuICAgICAgICAvLyAgICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgICAgIC8vICAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICAgICAgLy8gICAgIDwvUGVyc2lzdEdhdGU+XHJcbiAgICAgICAgLy8gPC9Qcm92aWRlciA+XHJcbiAgICApXHJcbn07XHJcblxyXG5XcmFwcGVkQXBwLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICh7IENvbXBvbmVudCwgY3R4IH0pID0+IHtcclxuICAgIGxldCBwYWdlUHJvcHMgPSB7fTtcclxuICAgIGlmIChDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzKSB7XHJcbiAgICAgICAgcGFnZVByb3BzID0gYXdhaXQgQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcyhjdHgpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHsgcGFnZVByb3BzIH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3cmFwcGVyLndpdGhSZWR1eChXcmFwcGVkQXBwKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==