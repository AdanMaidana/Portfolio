import CinemaPreview from "../assets/cinema-welcome.jpg";
import DomoChallengePreview from "../assets/domo-challenge.jpg";
import Calculadora from "../assets/calculadora.jpg";
import RelojPreview from "../assets/clock.jpg";
import Markdown from "../assets/markdown-previewer.jpg";

export const projectsData = [
  {
    title: "Cinema",
    img: CinemaPreview,
    description:
      [
        "Utilizando la API de 'The Movie Database', puedes buscar miles de películas y series.",
        "Incluye pagina de bienvenida, inicio, secciones personalizadas, filtro de busqueda y una página de error que se muestra cuando intentas acceder a una dirección invalida."
      ],
    skills: ["HTML", "CSS", "JavaScript", "Bootstrap", "React", "Vite"],
    web: "https://adanmaidana.github.io/Cinema/",
    repository: "https://github.com/AdanMaidana/Cinema",
  },
  {
    title: "Desafío DOMO",
    img: DomoChallengePreview,
    description: [
      "Prueba técnica realizada para DOMO en la que mediante una imagen debia replicar la página lo más parecido posible."
    ],
    skills: ["HTML", "CSS", "JavaScript", "Bootstrap", "Astro"],
    web: "https://adanmaidana-domo-challenge.netlify.app/",
    repository: "https://github.com/AdanMaidana/DOMO-FrontEnd-Challenge",
  },
  {
    title: "Previsualizador de Markdown",
    img: Markdown,
    description: [
      "Utilizando un editor de texto que funciona con el lenguaje de marcado 'Markdown' puedes crear código HTML."
    ],
    skills: ["HTML", "CSS", "JavaScript", "React"],
    web: "https://adanmaidana.github.io/Markdown-Previewer/",
    repository: "https://github.com/AdanMaidana/Markdown-Previewer",
  },
  {
    title: "Calculadora",
    img: Calculadora,
    description: [
      "Realiza operaciones matemáticas básicas."
    ],
    skills: ["HTML", "CSS", "JavaScript", "React", "Vite"],
    web: "https://adanmaidana.github.io/Calculator/",
    repository: "https://github.com/AdanMaidana/Calculator",
  },
  {
    title: "Reloj",
    img: RelojPreview,
    description:
      [
        "Permite establecer sesiones de estudio, trabajo o cualquier actividad que necesites.",
        "Puedes personalizar la duración de las sesiones, los intervalos de descanso y al finalizar el contador sonará una alarma para avisarte que puedes tomarte un descanso."
      ],
    skills: ["HTML", "CSS", "JavaScript", "React", "Vite"],
    web: "https://adanmaidana.github.io/25-5-Clock/",
    repository: "https://github.com/AdanMaidana/25-5-Clock",
  },
];