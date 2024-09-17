import { Router } from "express";
import { CreateUserController } from "./controllers/user/createUserController"
import { AuthUserController } from "./controllers/user/authUserController"

const router = Router();

router.post("/users", new CreateUserController().handle);

router.post("/session", new AuthUserController().handle);

export { router };
