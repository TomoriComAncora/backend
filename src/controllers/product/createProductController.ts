import { Request, Response } from "express";
import { CreateProductService } from "../../services/product/createProductService";

class CreateProductController {
  async handle(req: Request, res: Response) {
    const { name, price, description, category_id } = req.body;

    const createProductController = new CreateProductService();

    if (!req.file) {
      throw new Error("A foto do produto precisa ser enviada!");
    } else {
      const { originalname, filename: banner } = req.file;

      const product = await createProductController.execute({
        name,
        price,
        description,
        category_id,
        banner,
      });

      return res.json(product);
    }
  }
}

export { CreateProductController };
