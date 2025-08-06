import { Router } from "express";
import { CreateUserController } from "../controllers/people/CreateUserController";
import { DetailUserController } from "../controllers/people/DetailUserController";
// import { AuthUserController } from "../controllers/people/AuthUserController";
import { isAuthenticated } from "../middleware/isAuthenticated";
import { AuthUserController } from "../controllers/people/AuthUserController";
const router = Router();


router.post("/create",new CreateUserController().handleCreateUser)

router.get("/detail", new DetailUserController().handleDetail)
router.post("/login", new AuthUserController().handleLogin)
export default router;
