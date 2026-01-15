import { _defineProperty } from "@slyte/core/src/lyte-utils";
import { Db,RESTConnector,RESTSerializer } from "../node_modules/@slyte/data/index.js";

class ClientDb extends Db{
    _() {
        _;
    }
}

ClientDb.Connector = RESTConnector;ClientDb.Serializer = RESTSerializer;

ClientDb.register({
    hash: "db_client_app_0"
});

let Schema = ClientDb.Schema;
export {ClientDb,Schema};
