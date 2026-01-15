import { _defineProperty } from "@slyte/core/src/lyte-utils";
import { Lyte } from "./node_modules/@slyte/core/index.js";
import  {ClientDb} from "./data-store/db";
import  {ClientComponentRegistry}  from "./components/component";
import  {ClientRouter}  from "./router/router";

class ClientApp extends Lyte{
    lookups(){
        return [{component : ClientComponentRegistry}, {router : ClientRouter} , {db : ClientDb}];
    }

    _() {
        _;
    }
}

export {ClientApp};

ClientApp.register({
    hash: "app_1",
    app: true
});

