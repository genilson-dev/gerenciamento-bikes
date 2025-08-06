import { Request, Response } from "express";
import { DetailUserService } from "../../services/people/DetailUserService";

class DetailUserController{
    async handleDetail(req: Request, res: Response){
        const { user_id } = req.params;
        const userDetailService = new DetailUserService();
        const userDetail = await userDetailService.execute(user_id)
        return res.json(userDetail)
    }
}

export {DetailUserController}
