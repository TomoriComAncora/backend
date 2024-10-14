import { Request, Response } from "express";
import { ListByCategoryService } from "../../services/product/listByCategoryService";

class ListByCategoryController{
    async handle(req: Request, res: Response){
        const category_id = req.query.category_id as string; // para o TS saber que ele espera uma string!

        const listByCategoryController = new ListByCategoryService();

        const products = await listByCategoryController.execute({category_id});

        return res.json(products)
    }
}

export {ListByCategoryController}