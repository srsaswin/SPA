import { Router } from "@slyte/router";
import  {SlyteMap}  from "./maps/map";
import {SlyteComponentRegistry}  from "../components/component";
class SlyteRouter extends Router {
    lookups(){
		return [{component : SlyteComponentRegistry}]
	}

	getComponentRegistry() {
		return this.$component;
	}

	getConfig() {
		var config = {
			baseMap : SlyteMap	
		}
		return config;
	}
	
    beforeRouteNavigation = function(prev,current) { 
		
	}
	
    afterRouteNavigation = function(current) {

	}
}

export {SlyteRouter} ;

