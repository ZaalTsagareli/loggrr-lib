"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const console_transport_1 = __importDefault(require("./consoleTransport/console.transport"));
const file_transport_1 = __importDefault(require("./fileTransport/file.transport"));
const logger_1 = require("./logger/logger");
const logger = new logger_1.Logger(logger_1.LogLevel.INFO, {
    transport: [new console_transport_1.default()],
});
logger.addTransport(new file_transport_1.default("application.log"));
logger.error("This is an error message");
logger.info("This is an info message");
logger.debug("This is a debug message");
