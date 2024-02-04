import { NextFunction, Request, Response } from "express";
import { ZodRawShape , z as zod} from "zod"
import { AppError } from "../errors/app.error";
import { StatusCodes } from "http-status-codes";

export enum ParamsType {
    QUERY ='query',
    BODY='body'
}

type validateParams = {
    schema:ZodRawShape;
    type:ParamsType
}

export function validato(params:validateParams){
     return(req:Request,res:Response,next:NextFunction)=>{

        const result = zod.object(params.schema).safeParse(req[params.type])
        console.log("emcima do result");
        console.log(result);
        
        
        if(!result.success){

            const erroFormated = result.error.issues.map(item => `${item.path.join('.')}: ${item.message}`)

            throw new AppError(erroFormated,StatusCodes.UNPROCESSABLE_ENTITY)

        }
     }
}