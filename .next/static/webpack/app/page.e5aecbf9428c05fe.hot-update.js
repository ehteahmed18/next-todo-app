"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-client)/./src/app/components/AddTodo.tsx":
/*!****************************************!*\
  !*** ./src/app/components/AddTodo.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ AddTodo; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-client)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction AddTodo() {\n    _s();\n    const [task, setTask] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const handleSubmit = async ()=>{\n        try {\n            if (task) {\n                const res = await fetch(\"https://127.0.0.1:3000/api/todo\", {\n                    method: \"POST\",\n                    body: JSON.stringify({\n                        task: task.task\n                    })\n                });\n                console.log(res.ok);\n            }\n        } catch (err) {\n            console.log(\"error\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            className: \"w-full flex gap-x-4 \",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    onChange: (e)=>setTask({\n                            task: e.target.value\n                        }),\n                    className: \"w-full px-2 py-2 border rounded-full mx-2 focus:outline-secondary\",\n                    type: \"text\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\web 3\\\\next-todo-app\\\\src\\\\app\\\\components\\\\AddTodo.tsx\",\n                    lineNumber: 32,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: handleSubmit,\n                    className: \"shrink-0 mx-4 bg-gradient-to-b from-primary to-secondary rounded-full p-4\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        src: \"/Vector.png\",\n                        alt: \"vector\",\n                        width: \"20\",\n                        height: \"20\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\web 3\\\\next-todo-app\\\\src\\\\app\\\\components\\\\AddTodo.tsx\",\n                        lineNumber: 34,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"D:\\\\web 3\\\\next-todo-app\\\\src\\\\app\\\\components\\\\AddTodo.tsx\",\n                    lineNumber: 33,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\web 3\\\\next-todo-app\\\\src\\\\app\\\\components\\\\AddTodo.tsx\",\n            lineNumber: 31,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\web 3\\\\next-todo-app\\\\src\\\\app\\\\components\\\\AddTodo.tsx\",\n        lineNumber: 30,\n        columnNumber: 9\n    }, this);\n}\n_s(AddTodo, \"n06MMS4cM+pzjIb2m5Eob0R0hyY=\");\n_c = AddTodo;\nvar _c;\n$RefreshReg$(_c, \"AddTodo\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL2FwcC9jb21wb25lbnRzL0FkZFRvZG8udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQ3VDO0FBQ1I7QUFJaEIsU0FBU0csVUFBUzs7SUFFN0IsTUFBTSxDQUFDQyxNQUFLQyxRQUFRLEdBQUdKLCtDQUFRQSxDQUFpQixJQUFJO0lBRXBELE1BQU1LLGVBQWUsVUFBWTtRQUM3QixJQUFHO1lBQ0MsSUFBR0YsTUFBSztnQkFDSixNQUFNRyxNQUFNLE1BQU1DLE1BQU8sbUNBQWtDO29CQUN2REMsUUFBTztvQkFDUEMsTUFBS0MsS0FBS0MsU0FBUyxDQUFDO3dCQUNoQlIsTUFBTUEsS0FBS0EsSUFBSTtvQkFDbkI7Z0JBQ0o7Z0JBRUFTLFFBQVFDLEdBQUcsQ0FBQ1AsSUFBSVEsRUFBRTtZQUN0QixDQUFDO1FBQ0wsRUFDQSxPQUFNQyxLQUFJO1lBQ05ILFFBQVFDLEdBQUcsQ0FBQztRQUNoQjtJQUNKO0lBRUEscUJBQ0ksOERBQUNHO2tCQUNHLDRFQUFDQztZQUFLQyxXQUFVOzs4QkFDWiw4REFBQ0M7b0JBQU1DLFVBQVUsQ0FBQ0MsSUFBTWpCLFFBQVE7NEJBQUNELE1BQU1rQixFQUFFQyxNQUFNLENBQUNDLEtBQUs7d0JBQUE7b0JBQUlMLFdBQVU7b0JBQW9FTSxNQUFLOzs7Ozs7OEJBQzVJLDhEQUFDQztvQkFBT0MsU0FBU3JCO29CQUFjYSxXQUFVOzhCQUNyQyw0RUFBQ2pCLG1EQUFLQTt3QkFBQzBCLEtBQUk7d0JBQWNDLEtBQUk7d0JBQVNDLE9BQU07d0JBQUtDLFFBQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLNUUsQ0FBQztHQWhDdUI1QjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2NvbXBvbmVudHMvQWRkVG9kby50c3g/NDA1OSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxyXG5pbXBvcnQgUmVhY3QseyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuaW1wb3J0IHsgbmV3VG9kbyB9IGZyb20gXCJAL2xpYi9kcml6emxlXCI7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWRkVG9kbygpe1xyXG5cclxuICAgIGNvbnN0IFt0YXNrLHNldFRhc2tdID0gdXNlU3RhdGU8bmV3VG9kbyB8IG51bGw+KG51bGwpXHJcblxyXG4gICAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIHRyeXtcclxuICAgICAgICAgICAgaWYodGFzayl7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCAoXCJodHRwczovLzEyNy4wLjAuMTozMDAwL2FwaS90b2RvXCIse1xyXG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZDpcIlBPU1RcIixcclxuICAgICAgICAgICAgICAgICAgICBib2R5OkpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFzazogdGFzay50YXNrXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzLm9rKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoKGVycil7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZXJyb3JcIilcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cInctZnVsbCBmbGV4IGdhcC14LTQgXCI+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgb25DaGFuZ2U9eyhlKSA9PiBzZXRUYXNrKHt0YXNrOiBlLnRhcmdldC52YWx1ZX0pfSBjbGFzc05hbWU9XCJ3LWZ1bGwgcHgtMiBweS0yIGJvcmRlciByb3VuZGVkLWZ1bGwgbXgtMiBmb2N1czpvdXRsaW5lLXNlY29uZGFyeVwiIHR5cGU9XCJ0ZXh0XCIgLz5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlU3VibWl0fSBjbGFzc05hbWU9XCJzaHJpbmstMCBteC00IGJnLWdyYWRpZW50LXRvLWIgZnJvbS1wcmltYXJ5IHRvLXNlY29uZGFyeSByb3VuZGVkLWZ1bGwgcC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz1cIi9WZWN0b3IucG5nXCIgYWx0PVwidmVjdG9yXCIgd2lkdGg9XCIyMFwiIGhlaWdodD1cIjIwXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPiBcclxuICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJJbWFnZSIsIkFkZFRvZG8iLCJ0YXNrIiwic2V0VGFzayIsImhhbmRsZVN1Ym1pdCIsInJlcyIsImZldGNoIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJjb25zb2xlIiwibG9nIiwib2siLCJlcnIiLCJkaXYiLCJmb3JtIiwiY2xhc3NOYW1lIiwiaW5wdXQiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInR5cGUiLCJidXR0b24iLCJvbkNsaWNrIiwic3JjIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./src/app/components/AddTodo.tsx\n"));

/***/ })

});