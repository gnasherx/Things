import { Router } from "express";
import * as SectionController from "./section.controller";

const routes = new Router();

routes.post("/section/new", SectionController.createSection);
routes.get("/section/new", SectionController.getAllSections);

routes.post(
  "/section/:sectionId/todo/new",
  SectionController.createSectionTodo
);

routes.get("/section/:sectionId/todo", SectionController.getSectionTodos);

export default routes;
