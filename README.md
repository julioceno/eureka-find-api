<div align="center">
    <h2> Eureka Find - API </h2>
</div>

---

## 🔥 O Projeto

Esse projeto foi desenvolvido como teste admissional para entrar na **Eureka labs**. Usei o Sequelize para executar as migrations e acelerar no desenvolvimento, bem como facilitar a um outro desenvolvedor a trabalhar neste projeto no futuro se fosse o caso.
O intuito da api é informar dados de um determinado cep buscado por um usuário, para fazer essas requisições foi utilizada a api da <a href="https://viacep.com.br/" target="_blank">viaCEP</a>. 
Quando um cep for pesquisado pela primeira vez ele será armazenado no banco de dados para que de uma proxíma vez essa requisição seja feita mais rápidamente.

## 🚀 Tecnologias Utilizadas

- Express
- Sequelize
- MySQL
- Axios

---

## Para Clonar o projeto

```bash
    $ git clone https://github.com/julioceno/eureka-find-api.git

    # Go into the repository
    $ cd eureka-find-api

    # Install dependencies
    $ yarn install

    # Create database
    $ yarn sequelize db:create

    # Create tables
    $ yarn sequelize db:migrate

    # Run the app
    $ yarn start

    # Run the app in development
    $ yarn dev
```

### Logo após 

Renomeie o arquivo **.env.example** para **.env** e mude os valores das variáveis de ambiente para os desesejados.

---

# 📝 Rotas da Aplicação

### Consultar o cep:
`localhost:3333/getCep/:cep`

---

<h4 align="center"> <em>&lt;/&gt;</em> by <a href="https://github.com/julioceno" target="_blank">julioceno</a> </h4>
