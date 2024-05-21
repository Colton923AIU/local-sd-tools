const fs = require("fs");
const path = require("path");

import ILogger from "./types";

const logPath = path.join(
  __dirname,
  "..",
  "..",
  "..",
  "server-logs",
  "actions.log"
);

const log = (level: string, message: string): void => {
  const timestamp = Math.floor(new Date().getTime() / 1000);
  const logMessage = `${timestamp} [${level.toUpperCase()}]: ${message}\n`;
  console.log("logPath: ", logPath);
  fs.appendFile(logPath, logMessage, (err: any) => {
    if (err) console.error("Failed to write to log file:", err);
  });
};

const logger: ILogger = {
  info: (message) => log("info", message),
  warn: (message) => log("warn", message),
  error: (message) => log("error", message),
};

export default logger;
