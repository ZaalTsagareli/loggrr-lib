import { LogFormat } from "../interfaces/log.format.interface";
import { Transport } from "../interfaces/log.transport.interface";

enum LogLevel {
  ERROR = "error",
  WARN = "warn",
  INFO = "info",
  DEBUG = "debug",
}

class Logger {
  private level: LogLevel;
  private format: LogFormat;
  private transports: Transport[];

  constructor(
    level: LogLevel = LogLevel.INFO,
    transports?: { transport: Transport[] },
    format: LogFormat = { format: "[{level}] {message}" }
  ) {
    this.level = level;
    this.format = format;
    this.transports = transports.transport;
  }

  public setLevel(level: LogLevel): void {
    this.level = level;
  }

  public setFormat(format: LogFormat): void {
    this.format = format;
  }

  public addTransport(transport: Transport): void {
    this.transports.push(transport);
  }

  public log(level: LogLevel, message: string): void {
    if (LogLevel[level.toUpperCase()] <= LogLevel[this.level.toUpperCase()]) {
      const formattedMessage = this.formatMessage(level, message);
      this.transports.forEach((transport) =>
        transport.log(level, formattedMessage)
      );
    }
  }

  private formatMessage(level: LogLevel, message: string): string {
    return this.format.format
      .replace("{level}", level)
      .replace("{message}", message);
  }

  public error(message: string): void {
    this.log(LogLevel.ERROR, message);
  }

  public warn(message: string): void {
    this.log(LogLevel.WARN, message);
  }

  public info(message: string): void {
    this.log(LogLevel.INFO, message);
  }

  public debug(message: string): void {
    this.log(LogLevel.DEBUG, message);
  }
}

export { LogLevel, LogFormat, Transport, Logger };
