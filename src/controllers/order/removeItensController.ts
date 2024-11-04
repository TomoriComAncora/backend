import { Request, Response } from "express";
import { RemoveItensService } from "../../services/order/removeItensService";

class RemoveItensController {
  async handle(req: Request, res: Response) {
    const item_id = req.query.item_id as string;

    const removeItemService = new RemoveItensService();

    const item = await removeItemService.execute({ item_id });

    return res.json(item);
  }
}

export { RemoveItensController };
