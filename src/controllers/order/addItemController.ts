import { Request, Response } from "express";
import { AddItemService } from "../../services/order/addItemService";

class AddItemController {
  async handle(req: Request, res: Response) {
    const { order_id, product_id, amount } = req.body;

    const addItem = new AddItemService();

    const item = await addItem.execute({
      amount,
      order_id,
      product_id,
    });

    return res.json(item);
  }
}

export { AddItemController };
