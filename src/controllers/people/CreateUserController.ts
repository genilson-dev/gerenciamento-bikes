import {Response, Request} from 'express';
import { CreateUserServices } from '../../services/people/CreateUserServices';


class CreateUserController{
    async handleCreateUser(req: Request, res: Response){
        const { nome, email, password } = req.body;
        const createUserService = new CreateUserServices();

        const newUser = await createUserService.execute({
            nome, email, password
        })
        return res.json(newUser)
    }
}

export {CreateUserController}
