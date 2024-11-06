import { Request, Response } from "express";
import { ListOrdersService } from "../../services/order/listOrdersService";

class ListOrdersController {
  async handle(req: Request, res: Response) {
    const listorders = new ListOrdersService();

    const orders = await listorders.execute();

    return res.json(orders);
  }
}

export { ListOrdersController };
