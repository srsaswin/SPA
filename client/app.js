import { Lyte } from "@slyte/core";
import  {ClientDb} from "./data-store/db";
import  {ClientComponentRegistry}  from "./components/component";
import  {ClientRouter}  from "./router/router";

class ClientApp extends Lyte{
    lookups(){
        return [{component : ClientComponentRegistry}, {router : ClientRouter} , {db : ClientDb}];
    }
}
export {ClientApp};

