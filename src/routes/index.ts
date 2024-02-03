import { Router } from "express";
import { baseRoute } from "./base.route";
import { categoriesRoute } from "./categories.route";



export const routeMain = Router()

routeMain.use('/',baseRoute)
routeMain.use('/',categoriesRoute)