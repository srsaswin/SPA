import { RouterMap } from "@slyte/router";

class ClientMap extends RouterMap {
	static path='../routes'
	map() {
        this.route("index",{path:'/'}) 
	}
}
export {ClientMap};
