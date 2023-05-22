import ConsoleTransport from "./consoleTransport/console.transport";
import FileTransport from "./fileTransport/file.transport";
import { LogLevel, Logger } from "./logger/logger";

const logger = new Logger(LogLevel.INFO, {
  transport: [new ConsoleTransport()],
});

logger.addTransport(new FileTransport("application.log"));

logger.error("This is an error message");
logger.info("This is an info message");
logger.debug("This is a debug message");
