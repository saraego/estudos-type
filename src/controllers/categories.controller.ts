import { Request, Response } from "express";
import { CategoriesService } from "../service/categories.service";
import { CategoriesRepository } from "../database/repositories/categories.repository";
import { CategoryModel } from "../database/schema/category.schema";
import { CreateCategoryDTO } from "../dtos/categories.dto";


export class CategoriesController {

    async create(req:Request<unknown,unknown,CreateCategoryDTO>,res:Response){
        const {title,color} = req.body
        const repository = new CategoriesRepository(CategoryModel)
        const service = new CategoriesService(repository)
        const result = await service.create({title,color} )
        console.log(result);
        
        return res.status(201).json(result)
    }
}