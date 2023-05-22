import { LogLevel } from "../logger/logger";

// Define the transport interface
export interface Transport {
  log(level: LogLevel, message: string): void;
}
