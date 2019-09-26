import { Router } from "express";

import CategoryController from "./controllers/Category.controller";
import ServiceController from "./controllers/Service.controller";

const routes = Router();

routes.get("/", (req, res) => res.send("Home"));

routes.get("/service/overview", ServiceController.getOverview);
routes.get("/service/:id", ServiceController.getById);
routes.post("/service", ServiceController.create);

routes.post("/category", CategoryController.create);
routes.get("/category", CategoryController.getAll);

export default routes;
