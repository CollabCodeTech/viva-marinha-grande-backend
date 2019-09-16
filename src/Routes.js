import { Router } from "express";

import CategoryController from "./controllers/Category.controller";
import ServiceController from "./controllers/Service.controller";

const routes = Router();

routes.get("/", (req, res) => res.send("Home"));

routes.get("/service/resume", ServiceController.getResume);
routes.post("/service", ServiceController.create);

routes.post("/category", CategoryController.create);

export default routes;
