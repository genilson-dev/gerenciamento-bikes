// Importa o cliente do Prisma para fazer consultas no banco de dados
import prismaClient from "../../prisma";

// Classe responsável pela lógica de negócio para buscar detalhes do usuário
class DetailUserService{
    // Método assíncrono que recebe o ID do usuário como parâmetro
    async execute(user_id:string){
        // Busca o usuário no banco de dados usando o Prisma
        // findFirst() retorna o primeiro usuário que encontrar com o ID especificado
        const userDetail = await prismaClient.user.findFirst({
            // Condição WHERE para filtrar pelo ID do usuário
            where:{
                id: user_id  // Busca o usuário que tem o ID igual ao user_id recebido
            },
            // Especifica quais campos queremos retornar da consulta
            select:{
                id: true,      // Retorna o ID do usuário
                name: true,    // Retorna o nome do usuário
                email: true    // Retorna o email do usuário
                // password não está incluído por segurança
            }
        })
        // Retorna os dados do usuário encontrado (ou null se não encontrar)
        return userDetail
    }
}

// Exporta a classe para ser usada em outros arquivos
export {DetailUserService}
