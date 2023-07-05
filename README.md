
# Apresentação
Primeiramente, gostaria de agradecer à Leadster pela oportunidade deste projeto, que me permitiu aplicar técnicas inovadoras e demonstrar minha capacidade de resolver problemas. O projeto consiste na criação de um SPA (Single Page Application) que se conecta a um banco de dados JSON para exibir informações na tela. Utilizei as seguintes tecnologias: Next.js, React.js, TypeScript e CSS Modules, seguindo as melhores práticas de desenvolvimento web.

## Link Vercel
[Leadster](https://teste-leadster-eud2f51o4-felipelamela.vercel.app/)

## Tecnologias

- Reactjs
- NextJs
- TypeScript
- CSS Modules


## O Projeto.

### Components

ButtonCategory - Este componente representa um botão que recebe um objeto contendo valores relevantes para seu uso.

CardSec - Este componente gerencia todos os cards de vídeo. Foi projetado para comportar dois tamanhos diferentes: PC (9 vídeos) e Mobile (4 vídeos). O objetivo é otimizar a experiência do usuário, reduzindo a quantidade de rolagem necessária para acessar a próxima seção. O componente ButtonCategory aciona a função useFetch para recuperar os vídeos de uma categoria específica, e essa alteração afeta o componente CardSec, atualizando os vídeos exibidos.

CardVideo - Este componente representa um card individual de vídeo.

ContainerButtons - Este componente gerencia todos os componentes ButtonCategory.

DescriSec - Este componente representa a seção de descrição.

Footer - Este componente representa a seção de rodapé, incluindo links e informações de contato.

FooterLinks - Este componente recebe uma lista de objetos para cada grupo de links.

Header - Este componente representa a seção de cabeçalho.

Main - Este componente é o corpo principal do SPA e contém os componentes ContainerButtons e CardSec.

Modal - Este componente representa o modal do SPA. Ele recebe os valores necessários quando um thumbnail de vídeo é clicado.

TitleSec - Este componente representa o título do site, posicionado acima da seção principal.

useFetch - Um custom hook, ele recebe a categoria atual, que é passado como valor incial do useState category, alem dele retornar os valores padrões data, loading e error, ele tambem retorna a category e setCategory, pois ao adicionar um novo valor ao setCategory ele vai fazer um fetch no banco e traser os valores referente.

Funcionais - Este é um hook personalizado que recebe a categoria atual como valor inicial do hook useState chamado 'category'. Além de retornar os valores padrão de dados, loading e error, também retorna a categoria e a função setCategory. Quando um novo valor é atribuído a setCategory, é feita uma solicitação de busca no banco de dados para obter os dados correspondentes.

### Bibliotecas e efeitos estranhos
Gostaria de mencionar um problema inesperado que ocorreu durante o desenvolvimento. Embora não fosse um requisito específico, foi sugerido o uso de uma biblioteca de estilos CSS, como o Styled Components. Inicialmente, planejei utilizar o Styled Components, porém encontrei um pequeno salto visual no CSS ao carregar o SPA, tanto com o Styled Components quanto com o Material UI. Esse salto durava aproximadamente de 0,4 a 0,6 segundos, o que era bastante incômodo. Como solução, optei por usar CSS Modules, pois não apresentava esse problema visual. Além disso, planejava usar o Material UI apenas para os componentes de paginação e modal, mas decidi implementá-los manualmente.

### Desafios
Infelizmente, encontrei alguns bugs que não consegui resolver. A ideia inicial era estabelecer uma comunicação direta entre o componente ButtonCategory e o useFetch, com os dados sendo passados diretamente para o componente CardSec, sem a necessidade de o componente Main atuar como intermediário. Esse abordagem apresentou desafios, especialmente porque esta foi a minha primeira experiência com a biblioteca Next.js. Apesar dos desafios, considerei o Next.js uma ferramenta incrível e pretendo aprofundar meus conhecimentos nele, assim como explorar o Nest.js e o Express.

## Instalação

Clone o repositório:
```sh
git clone https://github.com/felipelamela/Teste_Leadster.git
```

Navegue até a pasta do projeto e instale as dependências:
```sh
cd Teste_Leadster
npm install
```
Inicie o servidor:
```sh
npm run dev
```
