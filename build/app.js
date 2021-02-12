"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var server_1 = require("./server");
var Logger_1 = require("./logger/Logger");
var server = new server_1.Server();
server.start().catch(function (e) {
    Logger_1.logger.error('Error while starting the server', e);
    process.exit(1);
});
//# sourceMappingURL=app.js.map