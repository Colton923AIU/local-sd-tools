const exec = require("node:child_process");
const fs = require("fs");
const path = require("path");

import logger from "../logger/logger";
import { Request, Response } from "express";

const generateSpfxWebPart = (res: Response, req: Request) => {
  const { name } = req.body;
  const spfxPath = path.join(
    __dirname,
    "..",
    "..",
    "..",
    "spfx-webparts",
    name
  );

  if (!name) {
    return res.status(400).send("Missing Request Parameter {string} Name");
  }

  fs.mkdirSync(spfxPath, { recursive: true });

  const cmd = `cd ${spfxPath} && yo @microsoft/sharepoint --component-type webpart --component-name ${name} --component-description "Description" --framework none`;
  exec(cmd, (error: any, stdout: string, stderr: string) => {
    if (error) {
      logger.error(`Error: ${error.message}`);
      return res.status(500).send("Failed to create SPFx web part");
    }
    if (stderr) {
      logger.warn(`Stderr: ${stderr}`);
    }
    logger.info(`Stdout: ${stdout}`);
    res.send(`SPFx web part ${name} created successfully`);
  });
};

export default generateSpfxWebPart;
