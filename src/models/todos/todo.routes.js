import { Router } from "express";

import * as TodoController from "./todo.controllers";

const routes = new Routes();

routes.post("/todos", TodoController.createTodo);
routes.get("/todos", TodoController.getAllTodos);

export default routes;
