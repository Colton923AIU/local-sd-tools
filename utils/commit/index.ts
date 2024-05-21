import { exec } from "child_process";
import logger from "../logger/logger";
import { Request, Response } from "express";
import util from "util";

const execPromise = util.promisify(exec);

const commit = async (req: Request, res: Response) => {
  try {
    const { message, projectName } = req.body;

    if (!message || !projectName) {
      return res.status(400).send("Missing commit message or project name.");
    }

    // Sanitize commit message by wrapping it in quotes and escaping quotes inside it
    const safeMessage = message.replace(/"/g, '\\"');

    const cmd = `git add . && git commit -m "${safeMessage}" && git push`;

    const { stdout, stderr } = await execPromise(cmd);

    if (stderr) {
      logger.error(`Commit error for project ${projectName}: ${stderr}`);
      return res.status(500).send("Failed to execute commit.");
    }

    logger.info(`Commit to ${projectName}: ${message}`);
    console.log(stdout);
    res.status(200).send("Successful commit");
  } catch (e) {
    logger.error(`Unexpected error: ${e}`);
    res.status(500).send("Failed to execute commit.");
  }
};

export default commit;
