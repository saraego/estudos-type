import { Router } from "express";
import { CategoriesController } from "../controllers/categories.controller";

export const categoriesRoute = Router()
const controller = new CategoriesController()

categoriesRoute.post('/categories',controller.create)
