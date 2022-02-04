# 1. APRESENTAÇÃO E CONTEXTO DO CASE

Esse desafio foi proposto pela ACCENTURE durante sua Academia Front-end realizada em Janeiro/2022 no intuito de melhorarmos nossas habilidades voltadas para desenvolvimento front-end com utilização da ferramenta React. O resultado final foi uma plataforma de marketplace com a temática da famosa franquia Pokémon e pode ser conhecida e explorada aqui.

# Requisitos técnicos
- Front-End em React;
- Back-End em NodeJS.

# Funcionalidades
- Efetuação de cadastro;
- Acesso através da página de login;
- Possibilidade de alteração de senha;
- Visualização do perfil do usuário; 
- Visualização de listagem de Pokémons (com paginação):
- Visualização de detalhes do Pokémon;
- Visualização do carrinho de compras (com incremento e decremento de quantidades e valores unitários e total da compra).

# Utilizando a plataforma

Após cada um dos passos a seguir, haverá um exemplo de como cada página pode ser usada.

## Primeiro contato com a plataforma:

Acessando a plataforma, você irá encontrar a tela de Login, onde você deverá se autenticar para ter acesso à página Home. Sem a autenticação você não terá acesso a Home.

![parte1](https://user-images.githubusercontent.com/74082153/152455205-ed3ab1d1-2574-421e-93dd-1fa0ebe45da9.gif)

## Realizando a mudança de senha na plataforma:

Clicando em "Forgot password" você será redirecionado para a tela de alteração da sua senha.

![parte2](https://user-images.githubusercontent.com/74082153/152455544-b100d5fc-1446-4d0a-8d03-60a41b7b0fec.gif)

## Realizando o cadastro na plataforma:

Clicando em "Register now" você poderá efetuar seu cadastro preenchendo o formulário.

![parte3](https://user-images.githubusercontent.com/74082153/152455560-360e1ca0-185e-45e0-b2d3-63ae701fb578.gif)

## Alterando o perfil:

Após você estar devidamente autenticado e logado poderá atualizar os dados do seu perfil nesta página.

![parte4](https://user-images.githubusercontent.com/74082153/152455574-7ef0300f-c63f-42da-8568-f34750c2175d.gif)

## Interação com a Home e seleção de Pokémons:

Nesta página é possível navegar pelos cards de cada Pokémon, visulaizando-se a imagem, o nome, o tipo e o preço unitário de um deles. Clicando-se sobre "Previous" ou "Next" pode-se retornar ou avançar respectivamente entre páginas.

![parte6](https://user-images.githubusercontent.com/74082153/152455606-d7a4da09-44d1-4057-a43e-1e554daeef61.gif)

## Realizando compras dos Pokémons:

Clicando em "Add to cart" será possível adicionar o Pokémon ao carrinho de compras, e neste visualizar os Pokémons selecionados e modificar as quantidades que deseja adquirir. É mostrado também os preços unitários de cada item e o valor total da compra.

![parte5](https://user-images.githubusercontent.com/74082153/152455593-534397ff-3a89-47da-8a3a-5335be1d2087.gif)

## Realizando logout e gerando erro:

E finalmente, clicando-se sobre o ícone de Logout você encerrará sua navegação sendo redirecionado para a página de Login. Nesta imagem podemos ver também que o acesso através do endpoint não é permitido mostrando uma imagem de erro na aplicação.

![parte7](https://user-images.githubusercontent.com/74082153/152455641-8ba23f3b-b4c6-47c7-9a1c-5d753c6ab320.gif)

## 2. CLONE DO REPOSITÓRIO

### 2.1. Abra o terminal e crie um diretório no local de sua preferência:
mkdir pokemon-marketplace-accenture

### 2.2. Entre no diretório que acabou de criar e depois clone o projeto:
cd pokemon-marketplace-accenture
git clone https://github.com/dudawiltiner/pokemon-marketplace-accenture

## 3. INSTALAÇÃO DAS DEPENDÊNCIAS

### 3.1. Entre no diretório criado após a clonagem do repositório:
cd pokemon-marketplace-accenture

### 3.2. Instale todas as dependências usando o CLI npm:
npm install

## 4. INICIE A APLICAÇÃO
npm start

## 5. UTILIZAÇÃO ABRINDO SEU BROWSER
http://localhost:3000

## 6. DOCUMENTAÇÃO REACT
https://reactjs.org/
https://facebook.github.io/create-react-app/docs/getting-started
