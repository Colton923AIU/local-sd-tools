const fs = require("fs");
const path = require("path");
import logger from "../logger/logger";
import { Request, Response } from "express";

const generateUiComponent = async (req: Request, res: Response) => {
  try {
    const { name } = req.body;
    const componentFolder = path.join(
      __dirname,
      "..",
      "..",
      "..",
      "frontend",
      "components",
      `${name}`
    );
    const componentPath = path.join(componentFolder, `index.tsx`);
    const componentCssPath = path.join(componentFolder, `${name}.module.scss`);

    if (!name) {
      return res.status(400).send("Name is required");
    }

    const componentTemplate = `import * as React from 'react';
import styles from './${name}.module.scss';

const ${name} = () => (
  <div className={styles.root}>
  </div>
);

export default ${name};`;

    const componentCssTemplate = `.root {
  display: flex;
};`;

    fs.mkdir(componentFolder, { recursive: true }, (err: any) => {
      if (err) {
        logger.error(`Error: ${err.message}`);
        return res.status(500).send("Failed to create folder for UI component");
      }

      logger.info(`Folder created: ${componentFolder}`);

      fs.writeFile(componentCssPath, componentCssTemplate, (err: any) => {
        if (err) {
          logger.error(`Error: ${err.message}`);
          return res.status(500).send("Failed to create SCSS for UI component");
        }
        logger.info(`SCSS module ${name}.module.scss created successfully`);

        fs.writeFile(componentPath, componentTemplate, (err: any) => {
          if (err) {
            logger.error(`Error: ${err.message}`);
            return res.status(500).send("Failed to create UI component");
          }
          logger.info(`UI component ${name} created successfully`);
          res.send(`UI component ${name} created successfully`);
        });
      });
    });
  } catch (e) {
    console.log("e: ", e),
      res.status(500).send("Failed to create UI component");
  }
};

export default generateUiComponent;
