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
- Visulaização do carrinho de compras (com incremento e decremento de quantidades e valores unitários e total da compra).

# Utilizando a plataforma

Após cada um dos passos a seguir, haverá um exemplo de como cada página pode ser usada.

## Primeiro contato com a plataforma:

Acessando a plataforma, você irá encontrar a tela de Login, onde você deverá se autenticar para ter acesso à página Home. Sem a autenticação você não terá acesso a Home.

## Realizando a mudança de senha na plataforma:

Clicando em "Forgot password" você será redirecionado para a tela de alteração da sua senha.

## Realizando o cadastro na plataforma:

Clicando em "Register now" você poderá efetuar seu cadastro preenchendo o formulário.

## Alterando o perfil:

Após você estar devidamente autenticado e logado poderá atualizar os dados do seu perfil nesta página.

## Realizando compras dos Pokemons:

Clicando em "Add to cart" será possível adicionar o Pokémon ao carrinho de compras, e neste visualizar os Pokémons selecionados e modificar as quantidades que deseja adquirir. É mostrado também os preços unitários de cada item e o valor total da compra.

## Interação com a Home e seleção de Pokemons:

Nesta página é possível navegar pelos cards de cada Pokémon, visulaizando-se a imagem, o nome, o tipo e o preço unitário de um deles. Clicando-se sobre "Previous" ou "Next" pode-se retornar ou avançar respectivamente entre páginas.

## Realizando logout e gerando erro:

E finalmente, clicando-se sobre o ícone de Logout você encerrará sua navegação sendo redirecionado para a página de Login. Nesta imagem podemos ver também que o acesso através do endpoint não é permitido mostrando uma imagem de erro na aplicação.

# 2. CLONE DO REPOSITÓRIO

## 2.1. Abra o terminal e crie um diretório no local de sua preferência:
mkdir pokemon-marketplace-accenture

## 2.2. Entre no diretório que acabou de criar e depois clone o projeto:
cd pokemon-marketplace-accenture
git clone https://github.com/dudawiltiner/pokemon-marketplace-accenture

# 3. INSTALAÇÃO DAS DEPENDÊNCIAS

## 3.1. Entre no diretório criado após a clonagem do repositório:
cd pokemon-marketplace-accenture

## 3.2. Instale todas as dependências usando o CLI npm:
npm install

# 4. INICIE A APLICAÇÃO
npm start

# 5. UTILIZAÇÃO ABRINDO SEU BROWSER
http://localhost:3000

# 6. DOCUMENTAÇÃO REACT
https://reactjs.org/
https://facebook.github.io/create-react-app/docs/getting-started
