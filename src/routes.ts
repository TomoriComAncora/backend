import { Router } from "express";
import { CreateUserController } from "./controllers/user/createUserController";
import { AuthUserController } from "./controllers/user/authUserController";
import { DetailUserController } from "./controllers/user/detailUserController";
import { CreateCategoryController } from "./controllers/category/CreateCategoryController"

import { authenticated } from "./middlewares/authenticated";

const router = Router();

router.post("/users", new CreateUserController().handle);

router.post("/session", new AuthUserController().handle);

router.get("/me", authenticated, new DetailUserController().handle);

//routas de categoria
router.post("/category", authenticated, new CreateCategoryController().handle)

export { router };
