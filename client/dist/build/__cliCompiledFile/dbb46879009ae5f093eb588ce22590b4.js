import { _defineProperty } from "@slyte/core/src/lyte-utils";
import { ComponentRegistry } from "../node_modules/@slyte/component/index.js";

class ClientComponentRegistry extends ComponentRegistry{
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

export {ClientComponentRegistry}; 

