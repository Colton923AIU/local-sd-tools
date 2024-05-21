import * as ReactDOMClient from "react-dom/client";
import { App } from "./app";

import "./global.scss";

const container = document.querySelector("#root")!;
const root = ReactDOMClient.hydrateRoot(container, <App />);
