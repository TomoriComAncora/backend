import { Router } from "express";
import multer from "multer";
import { CreateUserController } from "./controllers/user/createUserController";
import { AuthUserController } from "./controllers/user/authUserController";
import { DetailUserController } from "./controllers/user/detailUserController";
import { CreateCategoryController } from "./controllers/category/CreateCategoryController";
import { ListCategoryController } from "./controllers/category/ListCategoryController";
import { CreateProductController } from "./controllers/product/createProductController";
import { ListByCategoryController } from "./controllers/product/listByCategoryController";

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

router.get("/category/product", authenticated, new ListByCategoryController().handle);

export { router };
