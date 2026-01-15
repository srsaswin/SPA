import { Lyte } from "@slyte/core";
import  {SlyteDb} from "./data-store/db";
import  {SlyteComponentRegistry}  from "./components/component";
import  {SlyteRouter}  from "./router/router";

class SlyteApp extends Lyte{
    lookups(){
        return [{component : SlyteComponentRegistry}, {router : SlyteRouter} , {db : SlyteDb}];
    }
}
export {SlyteApp};

