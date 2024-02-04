import { Router } from "express";
import { CategoriesController } from "../controllers/categories.controller";
import { ParamsType, validato } from "../middlewares/validator.middleware";
import { createCategorySchema } from "../dtos/categories.dto";

export const categoriesRoute = Router()
const controller = new CategoriesController()

categoriesRoute.post('/categories',validato({schema:createCategorySchema,type:ParamsType.BODY}),controller.create)
