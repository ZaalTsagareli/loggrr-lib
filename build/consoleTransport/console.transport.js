"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ConsoleTransport {
    log(level, message) {
        console.log(`[${level}] ${message}`);
    }
}
exports.default = ConsoleTransport;
