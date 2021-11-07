#### salvar resultados em JSON. Importar 100 usuários por dia
#### Todos os produtos deverão ter os campos personalizados imported_t e status.
#### Importar os dados de maneira paginada para não sobrecargar a API do Random Users. Por exemplo, de 100 em usuários.
#### Limitar a importação a somente 2000 usuarios;

#### REST API
##### GET /: Retornar uma mensagem "REST Back-end Challenge 20201209 Running"
##### PUT /users/:userId: Será responsável por receber atualizações dso dados
##### DELETE /users/:userId: Remover o user da base
##### GET /users/:userId: Obter a informação somente de um user da base de dados
##### GET /users: Listar todos os usuários da base de dados