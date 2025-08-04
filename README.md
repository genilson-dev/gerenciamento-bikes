# gerenciamento-bikes
sistema para gerenciar a venda de peças de bicicletas e consertos das mesmas


# delivery_pizzaria

GESTAO DE VENDAS
[X] - Instalar as dependencias do projeto
[] - Cadastrar um novo usuário
[] - Logar um novo Usuário
[] - Verificar autenticação para rotas privadas
[] - Mostrar detalhes de um usuário logado
[] - Criar e listar categorias
[]- Criar produtos de uma categoria epecífica
[] - Abrir uma mesa (Order) e fechar uma mesa aberta
[] - Adicionar itens a uma mesa e tambem poder retirar os itens
[] - Enviar (order) e retirar de rascunhos
[] - Listar todos os pedidos que nao estao em rascunhos "draft"
[] - Pode acessar todos os detalhes de uma mesa com pedido dela
[] - Concluir o pedido
[] - Listar todos os pedidos que ja foram finalizados

Instalando as dependencias do projeto
yarn tsc init
yarn init -y
yarn add typescript -D
yarn add express
yarn add @types/express -D
yarn add ts-node-dev -D
yarn add express-async-errors
yarn add cors
npm install --save-dev @types/cors
yarn add prisma
yarn add @prisma/client
npx prisma init
yarn prisma migrate dev // comando para rodar as migrates depois de criadas no vscode
yarn add bcryptjs
yarn add @types/bcryptjs -D
yarn add jsonwebtoken
npm install --save-dev @types/jsonwebtoken
yarn add dotenv
yarn add multer
yarn add @types/multer -D
