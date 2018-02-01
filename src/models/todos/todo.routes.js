import { Router } from "express";

import * as TodoController from "./todo.controller";

const routes = new Router();

routes.post("/todos", TodoController.createTodo);
routes.get("/todos", TodoController.getAllTodos);

export default routes;
