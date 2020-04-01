import { Router } from "express";

import UserController from "./app/controllers/UserController";
import UserDetailsController from "./app/controllers/UserDetailsController";
import UserReposController from "./app/controllers/UserReposController";

const routes = new Router();

routes.get("/api/users", UserController.index);
routes.get("/api/users/:username/details", UserDetailsController.index);
routes.get("/api/users/:username/repos", UserReposController.index);

export default routes;
