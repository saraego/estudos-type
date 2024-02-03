import { Router } from "express";
import { baseRoute } from "./base.route";


export const routeMain = Router()

routeMain.use('/',baseRoute)