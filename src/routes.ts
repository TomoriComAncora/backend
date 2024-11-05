import { Router } from "express";
import multer from "multer";
import { CreateUserController } from "./controllers/user/createUserController";
import { AuthUserController } from "./controllers/user/authUserController";
import { DetailUserController } from "./controllers/user/detailUserController";

import { CreateCategoryController } from "./controllers/category/CreateCategoryController";
import { ListCategoryController } from "./controllers/category/ListCategoryController";

import { CreateProductController } from "./controllers/product/createProductController";
import { ListByCategoryController } from "./controllers/product/listByCategoryController";

import { CreateOrderController } from "./controllers/order/createOrderController";
import { RemoveOrderController } from "./controllers/order/removeOrderController";
import { AddItemController } from "./controllers/order/addItemController";
import { RemoveItensController } from "./controllers/order/removeItensController";
import { SendOrderController } from "./controllers/order/sendOrderController";

import { authenticated } from "./middlewares/authenticated";
import uploadconfig from "./config/multer";

const router = Router();
const upload = multer(uploadconfig.upload("./tmp"));

router.post("/users", new CreateUserController().handle);

router.post("/session", new AuthUserController().handle);

router.get("/me", authenticated, new DetailUserController().handle);

//rotas de categoria
router.post("/category", authenticated, new CreateCategoryController().handle);

router.get("/category", authenticated, new ListCategoryController().handle);

//rotas produtos
router.post(
  "/product",
  authenticated,
  upload.single("file"),
  new CreateProductController().handle
);

router.get(
  "/category/product",
  authenticated,
  new ListByCategoryController().handle
);

//rotas de pedidos
router.post("/order", authenticated, new CreateOrderController().handle);
router.delete("/order", authenticated, new RemoveOrderController().handle);
router.post("/order/add", authenticated, new AddItemController().handle);
router.delete(
  "/order/remove",
  authenticated,
  new RemoveItensController().handle
);
router.put("/order/send", authenticated, new SendOrderController().handle);

export { router };
