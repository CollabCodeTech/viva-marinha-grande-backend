import { Router } from "express";

import CategoryController from "./controllers/Category.controller";
import BusinessController from "./controllers/Business.controller";

const routes = Router();

routes.get("/", (req, res) => res.send("Home"));

routes.get("/business/overview", BusinessController.getOverview);
routes.get("/business/categories", BusinessController.getByCategories);
routes.post("/business/photo", BusinessController.uploadPhoto);
routes.get("/business/:id", BusinessController.getById);
routes.post("/business", BusinessController.create);

routes.post("/category", CategoryController.create);
routes.get("/category", CategoryController.getAll);

export default routes;
