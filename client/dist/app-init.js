"use strict";
(self["webpackChunkclient"] = self["webpackChunkclient"] || []).push([["app-init"],{

/***/ 49822359:
/*!*********************!*\
  !*** ./app-init.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "app": () => (/* binding */ app)
/* harmony export */ });
/* harmony import */ var _app_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.js */ 672750);



var app = new _app_js__WEBPACK_IMPORTED_MODULE_0__.ClientApp({
    performance : true,
    debug : true
});




/***/ }),

/***/ 672750:
/*!****************!*\
  !*** ./app.js ***!
  \****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClientApp": () => (/* binding */ ClientApp)
/* harmony export */ });
/* harmony import */ var _node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@slyte/core/index.js */ 53501236);
/* harmony import */ var _data_store_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data-store/db */ 94558705);
/* harmony import */ var _components_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/component */ 27728346);
/* harmony import */ var _router_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./router/router */ 54604758);






class ClientApp extends _node_modules_slyte_core_index_js__WEBPACK_IMPORTED_MODULE_3__.Lyte{
    lookups(){
        return [{component : _components_component__WEBPACK_IMPORTED_MODULE_1__.ClientComponentRegistry}, {router : _router_router__WEBPACK_IMPORTED_MODULE_2__.ClientRouter} , {db : _data_store_db__WEBPACK_IMPORTED_MODULE_0__.ClientDb}];
    }

    _() {
        _;
    }
}



ClientApp.register({
    hash: "app_1",
    app: true
});



/***/ }),

/***/ 27728346:
/*!*********************************!*\
  !*** ./components/component.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClientComponentRegistry": () => (/* binding */ ClientComponentRegistry)
/* harmony export */ });
/* harmony import */ var _node_modules_slyte_component_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/@slyte/component/index.js */ 81800751);



class ClientComponentRegistry extends _node_modules_slyte_component_index_js__WEBPACK_IMPORTED_MODULE_0__.ComponentRegistry{
    constructor(){
        super();
    }
    lookups(){
        return []
    }
    // addRegistries() {

    // }

    _() {
        _;
    }
}

ClientComponentRegistry.register({
    hash: "C_client_app_0",
    refHash: "app_1",
    app: true
});

 



/***/ }),

/***/ 94558705:
/*!**************************!*\
  !*** ./data-store/db.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClientDb": () => (/* binding */ ClientDb),
/* harmony export */   "Schema": () => (/* binding */ Schema)
/* harmony export */ });
/* harmony import */ var _node_modules_slyte_data_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/@slyte/data/index.js */ 54661849);
/* harmony import */ var _node_modules_slyte_data_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/@slyte/data/index.js */ 62765273);
/* harmony import */ var _node_modules_slyte_data_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/@slyte/data/index.js */ 35623115);



class ClientDb extends _node_modules_slyte_data_index_js__WEBPACK_IMPORTED_MODULE_0__.Db{
    _() {
        _;
    }
}

ClientDb.Connector = _node_modules_slyte_data_index_js__WEBPACK_IMPORTED_MODULE_1__.RESTConnector;ClientDb.Serializer = _node_modules_slyte_data_index_js__WEBPACK_IMPORTED_MODULE_2__.RESTSerializer;

ClientDb.register({
    hash: "db_client_app_0"
});

let Schema = ClientDb.Schema;



/***/ }),

/***/ 37803362:
/*!****************************!*\
  !*** ./router/maps/map.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClientMap": () => (/* binding */ ClientMap)
/* harmony export */ });
/* harmony import */ var _router_routes_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../router/routes/index.js */ 80350985);
/* harmony import */ var _node_modules_slyte_router_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/@slyte/router/index.js */ 2224256);





class ClientMap extends _node_modules_slyte_router_index_js__WEBPACK_IMPORTED_MODULE_1__.RouterMap {
    map() {
        this.route("index",{
            path:'/',
            handler: _router_routes_index_js__WEBPACK_IMPORTED_MODULE_0__.Index
        }) 
	}

    _() {
        _;
    }
}

ClientMap.path = '../routes';



/***/ }),

/***/ 54604758:
/*!**************************!*\
  !*** ./router/router.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClientRouter": () => (/* binding */ ClientRouter)
/* harmony export */ });
/* harmony import */ var _node_modules_slyte_router_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/@slyte/router/index.js */ 2224256);
/* harmony import */ var _maps_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./maps/map */ 37803362);
/* harmony import */ var _components_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/component */ 27728346);





class ClientRouter extends _node_modules_slyte_router_index_js__WEBPACK_IMPORTED_MODULE_0__.Router {
    constructor() {
        super(...arguments);

        this.beforeRouteNavigation = function(prev,current) { 
            
        };

        this.afterRouteNavigation = function(current) {

        };
    }

    lookups(){
		return [{component : _components_component__WEBPACK_IMPORTED_MODULE_2__.ClientComponentRegistry}]
	}

    getComponentRegistry() {
		return this.$component;
	}

    getConfig() {
		var config = {
			baseMap : _maps_map__WEBPACK_IMPORTED_MODULE_1__.ClientMap	
		}
		return config;
	}

    _() {
        _;
    }
}





/***/ }),

/***/ 80350985:
/*!********************************!*\
  !*** ./router/routes/index.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Index": () => (/* binding */ Index)
/* harmony export */ });
/* harmony import */ var _node_modules_slyte_router_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/@slyte/router/index.js */ 2224256);


let WelcomeComp;

class Index extends _node_modules_slyte_router_index_js__WEBPACK_IMPORTED_MODULE_0__.Route {
    render() {
		return {outlet : "#outlet",component : WelcomeComp}
	}

    static actions(arg1) {
		return Object.assign(super.actions({
			
		}), arg1);
	}

    _() {
        _;
    }

    getRequirements() {
        arguments[1].push(__webpack_require__.e(/*! import() | components/javascript/welcome-comp */ "components/javascript/welcome-comp").then(__webpack_require__.bind(__webpack_require__, /*! ./components/javascript/welcome-comp.js */ 83461070)).then(function(res) {
            WelcomeComp = res.WelcomeComp;
        }));

        
    }
}





/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["lyte"], () => (__webpack_exec__(49822359)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=app-init.js.map