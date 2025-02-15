# 🛒 **Vasta** - Shopify Challenge - Custom Theme Development

Este projeto foi desenvolvido como parte de um desafio técnico da empresa **VASTA**, onde a tarefa consistia em criar um site a partir de um **modelo no Figma**, utilizando **Liquid, HTML, CSS e JavaScript** dentro da plataforma **Shopify**. O objetivo era criar um **tema funcional, responsivo e dinâmico**, implementando animações, componentes interativos e garantindo uma experiência de usuário fluida.

## 🚀 Tecnologias Utilizadas

- **Liquid** - Linguagem de template da Shopify para manipulação dinâmica de dados.
- **HTML5** - Estruturação do site.
- **CSS3** - Estilização e animações.
- **JavaScript** - Interatividade do usuário.
- **Shopify-Web** - Ferramenta para desenvolvimento e pré-visualização local.
- **Figma** - Para referenciar o design e garantir a fidelidade ao projeto.

##

## 📥 Pré-requisitos

Antes de iniciar, você precisará ter os seguintes requisitos instalados em sua máquina:

1. **Conta na Shopify** *(caso ainda não tenha, [crie aqui](https://www.shopify.com/) uma conta de desenvolvedor gratuitamente)*
2. (Opcional) **Shopify CLI** *(para gerenciar o tema no ambiente local)* - [Instale aqui](https://shopify.dev/docs/themes/tools/cli/installation)

## 

## 💻 Como instalar e rodar o projeto na Shopify:

🌐 Fazendo o upload do tema manualmente no painel da Shopify (Método mais acessível para usuários sem CLI)

👨🏽‍💻 Usando a Shopify CLI (Recomendado para desenvolvedores, explicado na seção seguinte)

##

### Importando projeto diretamente na **Shopify-Web** (sem uso de CLI):

  1️⃣ Baixe o tema
  * No GitHub, clique no botão Code e depois em Download ZIP.
  Extraia o arquivo ZIP em seu computador.
  
  2️⃣ Acesse a Shopify e vá para o painel de temas
  * Entre na sua loja Shopify.
  * No menu lateral, clique em Online Store > Themes.
  
  3️⃣ Faça o upload do tema
  * Role até a seção Theme Library e clique em Add Theme > Upload ZIP File.
  * Selecione o arquivo ZIP que você extraiu.
  * Aguarde o Shopify processar e adicionar o tema à sua loja.
    
  4️⃣ Publicar e testar o tema
  * No painel de Themes, clique no botão Actions > Preview para visualizar o tema antes da publicação.
  * Se tudo estiver correto, clique em Actions > Publish para torná-lo ativo em sua loja.

### 🛠 Edit Code vs. Customize no Shopify

  A Shopify oferece duas formas de editar seu tema após a instalação:
  
  📝 Edit Code (Editor de Código)
  
  - Vá para Online Store > Themes
  - Encontre o tema instalado e clique em Actions > Edit Code
  - Você poderá modificar arquivos Liquid, CSS, JS e JSON para personalizações mais avançadas.
  
  🎨 Customize (Editor Visual)

  - Vá para Online Store > Themes
  - Clique no botão Customize ao lado do tema.
  - Isso abrirá o editor da Shopify, onde você pode alterar textos, imagens, cores e disposição dos elementos sem tocar no código.

##

### Importando projeto para **Shopify-CLI** :

#### 1️⃣ Clone este repositório:

```bash
https://github.com/MarcusCSPereira/Seletiva-vasta.git .
```
Entre no diretório do projeto:

```bash
cd Seletiva-vasta
```

#### 2️⃣ Faça login na Shopify CLI:

```bash
shopify login --store nome-da-sua-loja.myshopify.com
```

#### 3️⃣ Inicie o servidor local:

```bash
shopify theme serve
```

Isso irá gerar um **preview URL**, onde você pode visualizar e testar as alterações no tema.

#### 4️⃣ Subindo as alterações para a Shopify:

Após realizar ajustes no código, envie o tema atualizado para a Shopify:

```bash
shopify theme push
```

Agora o tema estará disponível no seu painel da Shopify para ser publicado.


## 🎥 Demonstração do Projeto

![Demo do Projeto](example/example.gif)

## 📖 Relato sobre o projeto

Este desafio técnico foi uma experiência muito enriquecedora, pois me permitiu explorar diversas áreas do desenvolvimento de temas para Shopify. Abaixo estão alguns dos pontos mais relevantes:

### 🚧 **Dificuldades enfrentadas**
- **Adaptação ao Liquid** - Como o Liquid é uma linguagem específica da Shopify, precisei aprofundar meu entendimento sobre manipulação de variáveis, loops e chamadas de outras sections dentro do Shopify. Foi essencial compreender a estrutura do schema JSON para tornar as seções dinâmicas e personalizáveis pelo usuário diretamente no Customize.
- **Reponsividade** - Alguns elementos, como o header e a seção de coleções, apresentaram desafios na responsividade, pois exigiam um comportamento dinâmico diferenciado que se alterava conforme o tamanho da tela. Ajustar o HTML e o CSS para se adequar a essa flexibilidade foi um ponto crítico.
- **Lazy-loading** - A tentativa de implementar lazy loading na seção Collections dentro do ambiente Shopify foi um desafio, já que os métodos convencionais usados em projetos com HTML, CSS e JS puros não funcionavam da mesma forma no Liquid.
- **Shopify-Web** - No início, tive dificuldades para criar seções customizáveis e dinâmicas, além de lidar com a sintaxe e a semântica do Liquid. No entanto, ao aprofundar o estudo da documentação oficial da Shopify, consegui compreender melhor seu funcionamento, a estrutura do schema JSON e as boas práticas para o desenvolvimento de temas.

### 🎓 **O que aprendi com este projeto**
- **Melhor compreensão da Shopify e do Liquid**: Durante o desenvolvimento, aprimorei minha capacidade de criar seções dinâmicas e personalizáveis, explorando boas práticas para a construção de temas customizados. Entendi como tornar os elementos mais flexíveis e como isso agrega valor ao usuário final.
- **Fidelidade ao Design no Desenvolvimento Frontend**: O desafio me permitiu aprimorar minha atenção aos detalhes ao transformar um design do Figma em um código funcional e responsivo, garantindo precisão na interface e entrega ao cliente.
- **Ajustes de Responsividade para Elementos Dinâmicos**:Trabalhar com seções dinâmicas que podem ser adicionadas ou removidas pelo usuário exigiu uma abordagem mais flexível para manter a responsividade e garantir um layout consistente em diferentes dispositivos.
- **Capacidade de Adaptação a Novas Tecnologias**: Mesmo sem um conhecimento avançado prévio sobre o Liquid, consegui compreender e aplicar seus conceitos por meio de pesquisas, consulta à documentação e análise de exemplos práticos. Esse processo reforçou minha habilidade de aprendizado rápido e adaptação a novas ferramentas.

### 🚀 **Conclusão**:
Este projeto não apenas expandiu meu conhecimento técnico, mas também reforçou minha capacidade de adaptação a novas tecnologias e desafios. Embora meu foco principal seja o desenvolvimento Back-End, acredito que um desenvolvedor completo deve ter compreensão de diversas áreas, incluindo Front-End, DevOps e tecnologias para o mercado.
Além disso, este desafio foi uma excelente oportunidade para testar minha lógica de programação em um novo ambiente, consolidando meu aprendizado e reforçando a importância da documentação e da experimentação para resolver problemas de forma analítica e eficiente.

## 📩 Contato

Caso tenha dúvidas ou queira trocar ideias, sinta-se à vontade para entrar em contato:

📧 **Email:** [E-mail](contato.marcuscspereira@gmail.com)  
💼 **LinkedIn:** [LinkedIn](https://www.linkedin.com/in/marcuscspereira/)  
📂 **Portfólio:** [Porfólio](https://marcuscspereira.netlify.app)

##

💡 **Gostou do projeto?** Considere deixar uma ⭐ para apoiar!
