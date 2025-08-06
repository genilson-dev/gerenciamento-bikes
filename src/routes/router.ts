import { Router } from "express";
import { CreateUserController } from "../controllers/people/CreateUserController";
import { DetailUserController } from "../controllers/people/DetailUserController";

const router = Router();

router.post("/create",new CreateUserController().handleCreateUser)
router.get("/detail", new DetailUserController().handleDetail)
export default router;
