// consoleTransport.ts

import { LogLevel, Transport } from "../logger/logger";

class ConsoleTransport implements Transport {
  public log(level: LogLevel, message: string): void {
    console.log(`[${level}] ${message}`);
  }
}

export default ConsoleTransport;
