import { CardsHoverEffect } from "@/components/ui/card-hover-effect";
import {
  ReactQueryLogo,
  JavascriptLogo,
  NextLogo,
  NodeLogo,
  ReactLogo,
  TailwindLogo,
  TypescriptLogo,
  GitLogo,
  GithubLogo,
} from "@/components/ui/logos";
import { links } from "@/utils/constants";

export function StacksFrame() {
  return (
    <div className="mx-auto flex w-full flex-col rounded-lg border-2 border-border bg-muted/60 p-8">
      <span className={`px-2 text-4xl`}>
        Minhas <span className={`text_gradients`}>Stacks</span>
      </span>
      <CardsHoverEffect items={projects} />
    </div>
  );
}

export const projects = [
  {
    id: 0,
    icon: <ReactLogo />,
    title: "React",
    description:
      "React é uma biblioteca JavaScript popular para construção de interfaces de usuário interativas e reativas em páginas web.",
    link: "https://stripe.com",
  },
  {
    id: 1,
    icon: <NextLogo />,
    title: "Next.js",
    description:
      "Next.js é um framework JavaScript para construir aplicativos web e páginas estáticas de forma eficiente, facilitando a renderização do lado do servidor, o roteamento e a gestão de estado.",
    link: "https://netflix.com",
  },
  {
    id: 2,
    icon: <TypescriptLogo />,
    title: "TypeScript",
    description:
      "TypeScript é uma extensão do JavaScript, adicionando tipos estáticos opcionais, o que ajuda a detectar erros mais cedo durante o desenvolvimento de aplicativos web e permite o desenvolvimento de código mais robusto e escalável.",
    link: "https://google.com",
  },
  {
    id: 3,
    icon: <JavascriptLogo />,
    title: "JavaScript",
    description:
      "JavaScript é uma linguagem de programação amplamente utilizada para adicionar interatividade e dinamismo a páginas da web. É executada nos navegadores e permite a manipulação de elementos HTML, estilização CSS e interações com os usuários. Também é usado em servidores e aplicativos móveis.",
    link: "https://meta.com",
  },
  {
    id: 4,
    icon: <NodeLogo />,
    title: "Node.js",
    description:
      "Node.js é um ambiente de execução JavaScript construído sobre o motor V8 do Google Chrome. Ele permite que você execute código JavaScript no lado do servidor, possibilitando a criação de aplicativos web escaláveis e de alto desempenho.",
    link: "https://amazon.com",
  },
  {
    id: 5,

    icon: <TailwindLogo />,
    title: "Tailwind CSS",
    description:
      "Tailwind CSS fornece classes utilitárias que podem ser aplicadas diretamente ao HTML para estilizar elementos, eliminando a necessidade de escrever CSS customizado. Isso simplifica o processo de desenvolvimento e oferece flexibilidade para criar designs exclusivos.",
    link: "https://microsoft.com",
  },
  {
    id: 6,
    icon: <ReactQueryLogo />,
    title: "React Query",
    description:
      "React Query é uma biblioteca JavaScript que simplifica o gerenciamento de dados em aplicativos React. Ela fornece uma camada de abstração para fazer solicitações de dados e gerenciar o cache de forma eficiente, facilitando a atualização da interface do usuário com base nos dados mais recentes disponíveis. Isso ajuda a criar aplicativos mais responsivos e robustos.",
    link: "https://microsoft.com",
  },
  {
    id: 7,
    icon: <GitLogo />,
    title: "Git",
    description:
      "Git é um sistema de controle de versão distribuído que permite rastrear as alterações feitas em arquivos ao longo do tempo. Ele facilita o trabalho colaborativo, permitindo que várias pessoas trabalhem no mesmo projeto simultaneamente e gerenciem facilmente as diferentes versões do código. Git é amplamente utilizado na indústria de desenvolvimento de software.",
    link: "https://microsoft.com",
  },
  {
    id: 8,
    icon: <GithubLogo />,
    title: "Github",
    description:
      "GitHub é uma plataforma de hospedagem de código-fonte e arquivos com controle de versão usando o Git. Ele permite que desenvolvedores e equipes colaborem em projetos de software, rastreiem e gerenciem as alterações feitas no código, facilitem revisões de código, gerenciem problemas e organizem o desenvolvimento de software de forma eficiente.",
    link: links.github,
  },
];
