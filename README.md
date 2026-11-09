# Ale Representante — Catálogo de Alimentos

Site institucional e catálogo digital desenvolvido para o **Ale Representante**, com foco na apresentação de produtos alimentícios para atacado e no contato direto com clientes pelo WhatsApp.

O projeto foi pensado para funcionar como uma vitrine online simples, rápida e responsiva, permitindo consultar categorias, preços, informações de caixa e variações de produtos sem a necessidade de uma plataforma de e-commerce completa.

## Visão geral

O site reúne produtos de diferentes categorias, incluindo:

- Congelados
- Laticínios
- Frios e embutidos
- Açaí e sorvetes

Cada produto pode exibir informações como marca, peso, preço unitário, preço da caixa, quantidade por caixa e variações disponíveis.

O atendimento e os pedidos são direcionados para o WhatsApp do representante.

## Principais funcionalidades

- Catálogo de produtos organizado em cards
- Filtro de produtos por categoria
- Cards padronizados e responsivos
- Fotos reais dos produtos
- Carrossel para produtos que possuem variações específicas
- Navegação por setas, indicadores e gesto lateral em dispositivos compatíveis
- Imagem fixa para linhas de produtos apresentadas em uma única foto
- Atualização dinâmica de preço e caixa ao mudar uma variação
- Botão de pedido individual por produto
- Integração direta com WhatsApp
- Botão flutuante do WhatsApp
- Layout adaptado para desktop, tablet e celular
- Carregamento otimizado de imagens com `loading="lazy"`
- Respeito à preferência de redução de movimento do sistema
- Ano do rodapé atualizado automaticamente

## Tecnologias utilizadas

O projeto foi desenvolvido apenas com tecnologias web nativas:

- **HTML5** — estrutura e conteúdo
- **CSS3** — layout, responsividade e identidade visual
- **JavaScript Vanilla** — catálogo, filtros, carrosséis e integração dinâmica com WhatsApp
- **Google Fonts / Montserrat** — tipografia utilizada na interface

Não há dependência de frameworks, bibliotecas JavaScript ou processo de build.

## Estrutura do projeto

```text
ale-representante/
├── index.html
├── style.css
├── script.js
├── assets/
│   ├── ale-representante.jpg
│   ├── batata-uai-nova.jpg
│   ├── hamburguer-brasil-burger-original.jpg
│   ├── frutas-morango.jpg
│   ├── frutas-manga.jpg
│   ├── frutas-acerola-nova.jpg
│   ├── fruttbom-dupla-camada.jpg
│   └── ...
└── README.md
```

### `index.html`

Contém a estrutura principal da página:

- faixa informativa
- cabeçalho e navegação
- apresentação do negócio
- catálogo
- seção de contato
- rodapé
- botão flutuante do WhatsApp

### `style.css`

Responsável pela apresentação visual do projeto, incluindo:

- grid do catálogo
- padronização dos cards
- dimensionamento das imagens
- botões
- filtros
- responsividade
- estados de interação

### `script.js`

Concentra os dados dos produtos e a lógica da interface:

- cadastro dos produtos
- variações
- preços
- filtros por categoria
- carrosséis
- gesto lateral
- atualização dos cards
- geração dos links personalizados do WhatsApp

## Como executar localmente

Não é necessário instalar nenhuma dependência.

1. Clone ou baixe este repositório.
2. Mantenha `index.html`, `style.css`, `script.js` e a pasta `assets` na mesma estrutura.
3. Abra o arquivo `index.html` em um navegador moderno.

Também é possível executar o projeto com uma extensão de servidor local, como **Live Server**, caso esteja utilizando o Visual Studio Code.

## Cadastro e edição de produtos

Os produtos ficam cadastrados no arquivo `script.js`.

Estrutura simplificada de um produto:

```javascript
{
  id: 13,
  name: 'Dupla Camada',
  brand: 'Fruttbom',
  category: 'laticinios',
  categoryLabel: 'Laticínios',
  info: 'Peso 110g · caixa com 24 unidades',
  variants: [
    {
      label: 'Morango',
      image: 'assets/fruttbom-dupla-camada.jpg',
      price: 'R$ 1,35',
      box: 'R$ 32,40 / 24 un.'
    }
  ]
}
```

Para acrescentar um novo produto, basta criar um novo objeto dentro do array `products`.

## Produtos com carrossel

Um card recebe carrossel automaticamente quando possui mais de uma entrada em `variants`.

Exemplo:

```javascript
variants: [
  {
    label: 'Morango',
    image: 'assets/frutas-morango.jpg',
    price: 'R$ 11,00',
    box: 'Consulte caixa'
  },
  {
    label: 'Manga',
    image: 'assets/frutas-manga.jpg',
    price: 'R$ 16,00',
    box: 'R$ 160,00 / 10 un.'
  },
  {
    label: 'Acerola',
    image: 'assets/frutas-acerola-nova.jpg',
    price: 'R$ 15,50',
    box: 'R$ 155,00 / 10 un.'
  }
]
```

O carrossel permite:

- avançar e voltar pelas setas
- selecionar uma variação pelos indicadores
- arrastar lateralmente em dispositivos compatíveis
- alternar automaticamente quando a redução de movimento não estiver ativada

Quando um produto deve exibir apenas uma imagem fixa, basta utilizar uma única variação.

## Integração com WhatsApp

O número utilizado pelo site é configurado no início do arquivo `script.js`:

```javascript
const WHATSAPP_NUMBER = '5511994877594';
```

Ao clicar em **Pedir pelo WhatsApp**, o sistema cria automaticamente uma mensagem com o nome, a marca e a variação do produto selecionado.

Caso o número de atendimento seja alterado, atualize essa constante e também os links fixos existentes no `index.html`.

## Publicação no GitHub Pages

O site pode ser hospedado diretamente no GitHub Pages por ser um projeto estático.

1. Crie um repositório no GitHub.
2. Envie os arquivos do projeto para a branch `main`.
3. No repositório, acesse **Settings → Pages**.
4. Em **Build and deployment**, escolha **Deploy from a branch**.
5. Selecione a branch `main` e a pasta `/ (root)`.
6. Salve e aguarde a publicação.

O GitHub fornecerá uma URL pública para acesso ao site.

## Boas práticas para manutenção

- Mantenha os nomes dos arquivos de imagem simples e descritivos.
- Evite remover arquivos da pasta `assets` que ainda estejam referenciados no `script.js`.
- Ao atualizar preços, altere os valores diretamente no cadastro do respectivo produto.
- Ao substituir uma foto, mantenha o caminho correto da imagem no objeto do produto.
- Teste o site em desktop e celular após mudanças no catálogo.
- Verifique periodicamente se o número e os links do WhatsApp continuam corretos.

## Objetivo do projeto

O objetivo do site é oferecer ao **Ale Representante** uma presença digital profissional e de fácil manutenção, funcionando como catálogo comercial para apresentar produtos, condições de atacado e facilitar o contato direto com clientes.

---

**Ale Representante**  
Catálogo digital de alimentos para negócios, com atendimento e pedidos via WhatsApp.
