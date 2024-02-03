import { Category } from "../entities/category.entity";


export class CategoriesService {

    async create(): Promise<Category> {

        const category = new Category({
             color: "aziul", title: "saraego", _id: "25" 
            })

        return category
    }

}