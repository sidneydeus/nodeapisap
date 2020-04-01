import express from "express";
import routes from "./routes";
import cors from "cors";

var corsOptions = {
  exposedHeaders: ["Content-Length", "Link"]
};

class App {
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
    this.server.use(cors(corsOptions));
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;
