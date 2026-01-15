import { Router } from "@slyte/router";
import  {ClientMap}  from "./maps/map";
import {ClientComponentRegistry}  from "../components/component";
class ClientRouter extends Router {
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
	
    beforeRouteNavigation = function(prev,current) { 
		
	}
	
    afterRouteNavigation = function(current) {

	}
}

export {ClientRouter} ;

