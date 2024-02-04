import {z as zod} from "zod"

export const createCategorySchema = {
    title:zod.string(),
    color:zod.string().regex(/^#[A-Fa-f0-9]$/)
}

const createCategoryObject = zod.object(createCategorySchema)

export type CreateCategoryDTO = zod.infer<typeof createCategoryObject>