import { _defineProperty } from "@slyte/core/src/lyte-utils";
import {ClientApp} from "./app.js";

var app = new ClientApp({
    performance : true,
    debug : true
});

export {app};
