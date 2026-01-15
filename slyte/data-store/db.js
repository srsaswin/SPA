import { Db,RESTConnector,RESTSerializer } from "@slyte/data";

class SlyteDb extends Db{
    static Connector = RESTConnector;
    static Serializer = RESTSerializer;
}

let Schema = SlyteDb.Schema;
export {SlyteDb,Schema};
