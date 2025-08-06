// Importa os tipos Request e Response do Express para tipagem
import { Request, Response } from "express";
// Importa o service que contém a lógica de negócio para buscar detalhes do usuário
import { DetailUserService } from "../../services/people/DetailUserService";

// Classe responsável por controlar as requisições de detalhes do usuário
class DetailUserController{
    // Método assíncrono que recebe a requisição e resposta do Express
    async handleDetail(req: Request, res: Response){
        // Extrai o user_id dos parâmetros da URL (ex: /users/:user_id)
        // req.params é um objeto, então usamos destructuring para pegar apenas o user_id
        const { user_id } = req.params;
        
        // Cria uma nova instância do service que contém a lógica de busca
        const userDetailService = new DetailUserService();
        
        // Chama o método execute do service passando o user_id
        // await é necessário porque o método é assíncrono
        const userDetail = await userDetailService.execute(user_id)
        
        // Retorna os dados do usuário em formato JSON
        return res.json(userDetail)
    }
}

// Exporta a classe para ser usada em outros arquivos
export {DetailUserController}
