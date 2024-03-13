# Client Manager

Trata-se de uma aplicação de gestão de clientes, sendo possível visualizar e adicionar novos clientes, também como filtrar por nome ou e-mail, e visualizar a melhor rota para abordagem dos clientes com relação às coordenadas X e Y, tendo a empresa como marco (0, 0). A aplicação depende da API disponível ![aqui](https://github.com/danielbped/client-manager-api).

# Sumário
- [Tecnologias utilizadas](#tecnologias)
- [Instruções para rodar o projeto](#instrucoes)
- [Demonstração](#demo)

## Tecnologias utilizadas <a name="tecnologias"></a>
- [**ReactJS**](https://react.dev/)
- [**TypeScript**](https://www.typescriptlang.org/)
- [**MUI**](https://mui.com/)
- [**Axios**](https://axios-http.com/ptbr/docs/intro)
- [**Apache Echarts**](https://echarts.apache.org/en/index.html)
- [**Vite**](https://vitejs.dev/)

## Instruções para rodar o projeto <a name="instrucoes"></a>
    Git
    Node v20.11.1

- Clone o repositório com o comando **git clone**:

      git clone git@github.com:danielbped/client-manager.git

- Entre no diretório que acabou de criar:

      cd client-manager

- Para o projeto funcionar na sua máquia, será necessário instalar suas dependências, para isso, utilize **npm install**:

      npm install

- Pronto, agora o projeto está pronto para ser rodado localmente, utilizando o comando **npm run dev**:

      npm run dev

    > ⚠️ A aplicação, por definição, estará rodando na porta 5137 ⚠️


## Demonstração <a name="demo"></a>

### Login

![Novo cliente](./public/images/login.png)

### Página de Clientes

![Página de Clientes](./public/images/dashboard.png)

### Adicionando um novo cliente

![Adicionando um novo cliente](./public/images/client-create.png)

### Filtrando cliente por nome

![Filtrando cliente por nome](./public/images/dashboard-name.png)

### Filtrando cliente por e-mail

![Filtrando cliente por e-mail](./public/images/dashboard-email.png)

### Página de rotas

![Página de rotas](./public/images/routes.png)