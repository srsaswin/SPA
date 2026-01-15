import { Db,RESTConnector,RESTSerializer } from "@slyte/data";

class ClientDb extends Db{
    static Connector = RESTConnector;
    static Serializer = RESTSerializer;
}

let Schema = ClientDb.Schema;
export {ClientDb,Schema};
