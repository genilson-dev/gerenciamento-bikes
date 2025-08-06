import { AutRequest } from "../../interface/AutRequest";
import prismaClient from "../../prisma";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

class AuthUserService{
    async execute({email, password}: AutRequest){
        const authUser = await prismaClient.user.findFirst({
            where:{
                email: email
            }
        })
        if (!authUser){
            throw new Error(`O email${email}  ou o password informado não conferem`)
        }
        const passwordMatch = await compare(password, authUser.password);
        if(!passwordMatch){
            throw new Error(`O email ${email} ou o password ${password} não conferem`)
        }
        const token = sign({
            name: authUser.name,
            email: authUser.email
        },
        process.env.JWT_SECRET as string
    )
    return {
        id: authUser.id,
        name: authUser.name,
        email: authUser.email,
        token: token

    }
    }
} export {AuthUserService}
