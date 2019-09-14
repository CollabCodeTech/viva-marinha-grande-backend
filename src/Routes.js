import { Router } from "express";

import ServiceController from "./controllers/Service.controller";

const routes = Router();

routes.get("/", (req, res) => res.send("Home"));

routes.post("/service", ServiceController.create);
routes.get("/service/resume", ServiceController.getResume);

export default routes;
