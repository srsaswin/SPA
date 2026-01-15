import { RouterMap } from "@slyte/router";

class SlyteMap extends RouterMap {
	static path='../routes'
	map() {
        this.route("index",{path:'/'}) 
	}
}
export {SlyteMap};
