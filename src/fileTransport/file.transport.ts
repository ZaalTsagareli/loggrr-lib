import fs from "fs";
import { LogLevel, Transport } from "../logger/logger";

class FileTransport implements Transport {
  private fileName: string;

  constructor(fileName: string) {
    this.fileName = fileName;
  }

  public log(level: LogLevel, message: string): void {
    console.log(`sending message via file ${message}`);
    fs.appendFileSync(this.fileName, `[${level}] ${message}\n`);
  }
}

export default FileTransport;
