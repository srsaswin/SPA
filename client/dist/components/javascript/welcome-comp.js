"use strict";
(self["webpackChunkclient"] = self["webpackChunkclient"] || []).push([["components/javascript/welcome-comp"],{

/***/ 83461070:
/*!***********************************************!*\
  !*** ./components/javascript/welcome-comp.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WelcomeComp": () => (/* binding */ WelcomeComp)
/* harmony export */ });
/* harmony import */ var _node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/@slyte/core/index.js */ 33115194);
/* harmony import */ var _node_modules_slyte_component_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/@slyte/component/index.js */ 81800751);




class WelcomeComp extends _node_modules_slyte_component_index_js__WEBPACK_IMPORTED_MODULE_0__.Component {
    constructor() {
		super();
	}

    data(arg1) {
		return Object.assign(super.data({
			"features" : (0,_node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_1__.prop)("array",{
				default : [
					{module : 'Router',url : 'http://lyte/2.0/doc/route/introduction'},
					{module : 'Components',url : 'http://lyte/2.0/doc/components/introduction'},
					{module : 'Data',url : 'http://lyte/2.0/doc/data/introduction'},
					{module : 'CLI',url : 'http://lyte/2.0/doc/cli/introduction'}
				]
			})
		}), arg1);
	}

    static methods(arg1) {
		return Object.assign(super.methods({
		}), arg1);
	}

    static actions(arg1) {
		return Object.assign(super.actions({
			
		}), arg1);
	}

    static observers(arg1) {
		return Object.assign(super.observers({
		}), arg1);
	}

    _() {
        _;
    }
}

WelcomeComp._template = "<template tag-name=\"welcome-comp\"> <h1>Available features of SLYTE</h1> <ul> <template items=\"{{features}}\" item=\"item\" index=\"index\" is=\"for\" _new=\"true\"><li> <a href=\"{{item.url}}\" target=\"_blank\">{{item.module}}</a> </li></template> </ul> </template>";;
WelcomeComp._dynamicNodes = [{"t":"a","p":[3,1]},{"t":"f","p":[3,1],"dN":[{"t":"a","p":[0,1]},{"t":"tX","p":[0,1,0]}]}];;
WelcomeComp._observedAttributes = ["features"];

WelcomeComp.register("welcome-comp", {
    hash: "WelcomeComp_2",
    refHash: "C_client_app_0"
});


/***/ })

}]);
//# sourceMappingURL=welcome-comp.js.map