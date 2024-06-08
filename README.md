# ReciclaKi

## Integrantes 

RM97887 - João Carlos França Figueiredo 

RM550200 - Leonardo Oliveira Esparza 

RM552421 - Flavio Sousa Vasconcelos 

RM552368 - Wellington de Oliveira Urcino Da Silva 

## Introdução

ReciclaKi é um aplicativo móvel projetado para capturar e gerenciar imagens. Ele oferece funcionalidades de autenticação de usuários, registro de novos usuários, reset de senha, captura de imagens e gerenciamento de perfil do usuário.

## Funcionalidades

- Registro de usuário
- Login de usuário
- Reset de senha
- Captura de imagens

## Endpoints da API

Para obter uma descrição detalhada dos endpoints da API, consulte a [Documentação da API](API.md).

## Tecnologias Utilizadas

- React Native
- Expo
- React Navigation
- Firebase para autenticação e armazenamento

## Dependências

   Instale as dependências:
    ```bash
    npm install
    ```

## Estrutura do Projeto

- `src/`
  - `context/`: Contextos para autenticação e outras funcionalidades.
  - `screens/`: Telas do aplicativo.
  - `services/`: Serviços para integração com a API.

## Descrição das Telas

- **Home**: A tela inicial do aplicativo, onde o usuário pode criar ou logar em sua conta.
- **Cadastro**: Tela para registrar novos usuários. Permite a criação de contas com nome de usuário, senha e e-mail.
- **Login**: Tela para autenticação de usuários. Permite o login com nome de usuário e senha.
- **ResetPassword**: Tela para resetar a senha. Envia um e-mail para o usuário redefinir sua senha.
- **Onboarding**: Tela de introdução ao aplicativo. Fornece um guia rápido sobre como utilizar o aplicativo.
- **MenuScreen**: Tela de menu onde o usuário pode navegar entre diferentes funcionalidades do aplicativo.
- **Camera**: Tela para capturar imagens utilizando a câmera do dispositivo.
- **Capturas**: Tela para visualizar todas as imagens capturadas pelo usuário.

## Uso do Firebase

O Firebase é utilizado neste projeto para:

- **Autenticação**: Gerenciamento de usuários, incluindo registro, login e reset de senha.
- **Armazenamento**: Armazenamento de imagens capturadas pelo aplicativo, incluindo avatares de usuários.

## Chaves de API

As chaves de API fornecidas são para a versão de testes e não têm problemas de uso durante o desenvolvimento.

## Licença

Este projeto está licenciado sob uma licença livre.

## Repositório do Projeto

Você pode acessar o repositório do projeto [aqui](https://github.com/EsparzaPhoenix/ReciclaKi-Global).

