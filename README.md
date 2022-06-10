## REGISTRATION LIST BACK END

Esse Back end foi criado para uma aplicação de cadastro de pessoas, com os inputs de `NOME`, `EMAIL`, `DATA DE NASCIMENTO` e quando enviados via JSON é retornado a IDADE da pessoa cadastrada.

A aplicação foi toda desenvolvida usando linguagem [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript) em [Node.js](https://nodejs.org/en/docs/)  utilizando o [Express](https://expressjs.com/pt-br/). E utilizando banco de dados [PostgresSQL](https://www.postgresql.org/docs/), e utilizando a biblioteca do [Cors](https://developer.mozilla.org/pt-BR/docs/Web/HTTP/CORS) para liberação do back end no front.

## RODANDO A APLICAÇÃO LOCALMENTE:

```bash
No terminal, clone o projeto em SSH:
 
$ git clone git@github.com:mroenca40/registration_list_back_end_nodejs.git
 
Entre na pasta do projeto:
 
$ cd registration_list_back_end_nodejs
 
Instale as dependências:
 
$ yarn
 
Execute a aplicação:
 
$ yarn run dev
 
Pronto, agora é possível acessar a aplicação Back-End a partir da rota http://localhost:8080/
 
OBS: No endpoint acima coloque as rotas que deseja usar.
```

## ENDPOINT:

## Criando Usuário:

O cadastro deve ser feito por um requisição do tipo <strong>POST</strong> para o endpoint <code>/users</code>, contendo as seguintes informações:

#### rota - `/users`

```json
{
	"name": "Matheus Proença",
	"email": "teste@test.com",
	"birthday": "02/08/1985"
}
```

## Erro não passando a KEY:

```json
{
	"error": "/KEY/ is a required field"
}
```

## Erro do email existente:

```json
{
	"error": "Email already exists"
}
```

## Listagem de usuários:

Para fazer a listagem de todos os usuários faça uma requisição do tipo <strong>GET</strong> para o endpoint <code>/users</code> e o retorno deve ser um array com todos os usuários disponíveis do banco, como por exemplo:

```json
{
	"users": [
		{
			"id": 1,
			"name": "Aline",
			"email": "teste@gmail.com",
			"birthday": "1985-02-08T03:00:00.000Z",
			"age": 37,
			"createdAt": "2022-06-07T15:57:18.366Z",
			"updatedAt": "2022-06-07T15:57:18.366Z"
		},
		{
			"id": 2,
			"name": "Aline Proença",
			"email": "teste@test.com",
			"birthday": "1989-02-08T03:00:00.000Z",
			"age": 33,
			"createdAt": "2022-06-07T16:03:22.717Z",
			"updatedAt": "2022-06-07T16:06:02.976Z"
		}
	]
}
```

## Atualizando o usuários pelo ID:

Para fazer a atualização de um usuário faça uma requisição do tipo <strong>PUT</strong> para o endpoint <code>/users/:id</code> e o retorno é um mensagem:

```json
{
	"id": 35,
	"name": "Matheus proença",
	"email": "teste@gmail.com",
	"birthday": "1989-02-08T03:00:00.000Z",
	"age": 33,
	"createdAt": "2022-06-10T03:57:16.045Z",
	"updatedAt": "2022-06-10T05:55:00.475Z"
}
```

## Para atualizar envie o JSON:

```json
{
	"name": "Aline Proença",
	"email": "teste@gmail.com",
	"birthday": "02/08/1989"
}
```

## Erros:

ID não encontrado.

```json
{
	"error": "User not found"
}
```

Erro não passando a KEY.

```json
{
	"error": "/KEY/ is a required field"
}
```

## Removendo Produto

Aplicação permite somente remoção de um usuario por requisição, deve informar um <code>ID</code> válido de um produto que existe
no database. A requisição deve ser do tipo <strong>DELETE</strong> para o endpoint <code>/users/:id</code>.

## Erros:

ID não encontrado.

```json
{
	"error": "User not found"
}
```

## Contato
 
<a targer="_blank" href="https://www.linkedin.com/in/matheus-proenca-dev/"><img src="https://img.icons8.com/fluency/48/000000/linkedin.png"/></a>
 
## Desenvolvedor
 
[<img src="https://avatars.githubusercontent.com/u/74427703?v=4" width=115><br><sub>Matheus Proença</sub>](https://github.com/mroenca40)
 
### Contribuições
 
Caso você queira fazer alguma contribuição, fique a vontade para comentar, fazer pull requests. Toda ajuda para melhorar o código é bem vinda! :D
 
###

