# Documentação da API

## Introdução

Este documento fornece uma visão geral dos endpoints da API utilizados no projeto AImpress-Mobile-main. Cada endpoint inclui uma descrição, formato da requisição e exemplos de respostas.

---

## Endpoints

### 1. Cadastro de Usuário

**Endpoint**: `/api/register`

**Método**: `POST`

**Descrição**: Registra um novo usuário com os detalhes fornecidos.

**Parâmetros do Corpo da Requisição**:

- `email`: "joao.silva@example.com"
- `password`: "senha123"

**Exemplo de Resposta**:

- `message`: "Usuário registrado com sucesso"
- `userId`: "12345"

---

### 2. Login de Usuário

**Endpoint**: `/api/login`

**Método**: `POST`

**Descrição**: Autentica um usuário com as credenciais fornecidas.

**Parâmetros do Corpo da Requisição**:

- `email`: "joao.silva@example.com"
- `password`: "senha123"

**Exemplo de Resposta**:

- `message`: "Login realizado com sucesso"
- `token`: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."

---

### 3. Resetar Senha

**Endpoint**: `/api/reset-password`

**Método**: `POST`

**Descrição**: Envia um e-mail para resetar a senha do usuário.

**Parâmetros do Corpo da Requisição**:

- `email`: "joao.silva@example.com"

**Exemplo de Resposta**:

- `message`: "E-mail de reset de senha enviado com sucesso"

---

### 4. Capturar Imagem

**Endpoint**: `/api/capture`

**Método**: `POST`

**Descrição**: Captura uma imagem usando a câmera do dispositivo.

**Parâmetros do Corpo da Requisição**:

- `image`: {arquivo de imagem}

**Exemplo de Resposta**:

- `message`: "Imagem capturada com sucesso"
- `imageUrl`: "https://example.com/imagem.jpg"

---

### 5. Listar Capturas

**Endpoint**: `/api/captures`

**Método**: `GET`

**Descrição**: Retorna uma lista de todas as imagens capturadas pelo usuário autenticado.

**Cabeçalhos**:

- `Authorization`: Bearer {token}

**Exemplo de Resposta**:

- `captures`: [
    {
      "captureId": "67890",
      "imageUrl": "https://example.com/imagem.jpg",
      "timestamp": "2024-06-07T10:15:30"
    },
    ...
  ]

---