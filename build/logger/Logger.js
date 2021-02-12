"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = void 0;
var winston_1 = require("winston");
var Config_1 = require("../config/Config");
exports.logger = winston_1.createLogger({
    level: Config_1.config.logLevel,
    transports: [new winston_1.transports.Console()]
});
//# sourceMappingURL=Logger.js.map