"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = exports.LogLevel = void 0;
var LogLevel;
(function (LogLevel) {
    LogLevel["ERROR"] = "error";
    LogLevel["WARN"] = "warn";
    LogLevel["INFO"] = "info";
    LogLevel["DEBUG"] = "debug";
})(LogLevel || (LogLevel = {}));
exports.LogLevel = LogLevel;
class Logger {
    constructor(level = LogLevel.INFO, transports, format = { format: "[{level}] {message}" }) {
        this.level = level;
        this.format = format;
        this.transports = transports.transport;
    }
    setLevel(level) {
        this.level = level;
    }
    setFormat(format) {
        this.format = format;
    }
    addTransport(transport) {
        this.transports.push(transport);
    }
    log(level, message) {
        if (LogLevel[level.toUpperCase()] <= LogLevel[this.level.toUpperCase()]) {
            const formattedMessage = this.formatMessage(level, message);
            this.transports.forEach((transport) => transport.log(level, formattedMessage));
        }
    }
    formatMessage(level, message) {
        return this.format.format
            .replace("{level}", level)
            .replace("{message}", message);
    }
    error(message) {
        this.log(LogLevel.ERROR, message);
    }
    warn(message) {
        this.log(LogLevel.WARN, message);
    }
    info(message) {
        this.log(LogLevel.INFO, message);
    }
    debug(message) {
        this.log(LogLevel.DEBUG, message);
    }
}
exports.Logger = Logger;
