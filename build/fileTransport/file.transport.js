"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
class FileTransport {
    constructor(fileName) {
        this.fileName = fileName;
    }
    log(level, message) {
        console.log(`sending message via file ${message}`);
        fs_1.default.appendFileSync(this.fileName, `[${level}] ${message}\n`);
    }
}
exports.default = FileTransport;
