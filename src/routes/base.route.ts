import { Router } from "express";
import jsonPackage from "../../package.json"
export const baseRoute = Router()

baseRoute.get('/',(req,res)=>{

    const {author,name, description} = jsonPackage

    return res.status(200).json({author,name, description})
})