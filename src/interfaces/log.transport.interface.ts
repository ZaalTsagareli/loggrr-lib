import { LogLevel } from "../logger/logger";

export interface Transport {
  log(level: LogLevel, message: string): void;
}
