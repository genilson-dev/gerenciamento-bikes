import { Router } from "express";
import { CreateUserController } from "../controllers/people/CreateUserController";

const router = Router();

router.post("/create",new CreateUserController().handleCreateUser)

export default router;
