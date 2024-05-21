import { SSRApp } from "./frontend/app";
import * as dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import createHttpError from "http-errors";
import express from "express";
import packageJSON from "./package.json";
import path from "path";
import generateSpfxWebPart from "./utils/generateSpfxWebPart";
import generateUiComponent from "./utils/generateUiComponent";
import commit from "./utils/commit";

dotenv.config(); // load data from .env file

const app = express();
const port = process.env.PORT || 3000;

/**
 * Express configuration
 * Change it to fit your needs
 */
app.use(cors()); // Block cross-origin requests to all routes
app.use(bodyParser.json()); // Allow application/json body
app.set("trust proxy", true); // Make express aware of proxies (needed, for example, to create IP based middlewares)
app.use(express.static(path.join(__dirname, "public"))); // Serve as static content what is inside `/public`
app.set("view engine", "ejs"); // Use `ejs` as template engine

/**
 * Example API organization
 * This is ok with few and simple API routes, you should definitely
 * move this code to a different folder in case of complex applications
 */

// Create a spearate router to group all `api` routes in one place
const apiRouter = express.Router();

apiRouter.post("/generate-spfx-webpart", generateSpfxWebPart);
apiRouter.post("/generate-ui-component", generateUiComponent);
apiRouter.post("/commit", commit);

// Add APIs to the express application
app.use("/api", apiRouter);

/**
 * Example APP UI serve
 */

// Render frontend React Application using SSR
app.get("/", (request, response, next) => {
  return response.render("index", { ssr: SSRApp });
});

/**
 * Start you Express app
 */

app.listen(port, () => {
  console.log(`⚡ ${packageJSON.name} is running on port ${port}.`);
});
