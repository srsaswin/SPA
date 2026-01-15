import { _defineProperty } from "@slyte/core/src/lyte-utils";
import { Router } from "../node_modules/@slyte/router/index.js";
import  {ClientMap}  from "./maps/map";
import {ClientComponentRegistry}  from "../components/component";

class ClientRouter extends Router {
    constructor() {
        super(...arguments);

        this.beforeRouteNavigation = function(prev,current) { 
            
        };

        this.afterRouteNavigation = function(current) {

        };
    }

    lookups(){
		return [{component : ClientComponentRegistry}]
	}

    getComponentRegistry() {
		return this.$component;
	}

    getConfig() {
		var config = {
			baseMap : ClientMap	
		}
		return config;
	}

    _() {
        _;
    }
}

export {ClientRouter} ;

