// Para agregar contenido, copia un bloque y edítalo. No hace falta tocar el HTML.
// Las categorías deben escribirse exactamente como en esta lista.
const CATEGORIAS = ["Diseño", "Desarrollo", "Marketing", "Web", "IA"];

// `imagen` es opcional: ruta dentro de assets/img/ o una URL. Sin imagen se muestra un recuadro de color.
const CREADORES = [
  {
    nombre: "Carmen Gerea",
    categorias: ["Marketing"],
    imagen: "assets/img/carmen-gerea.jpg",
    descripcion:
      "Asesora de negocios con más de 20 años en e-commerce, UX y estrategia digital. Fundadora de FREED, su laboratorio de ideas.",
    enlaces: [
      { red: "LinkedIn", url: "https://www.linkedin.com/in/carmengerea/" },
      { red: "YouTube", url: "https://www.youtube.com/@freedtools" },
      { red: "Instagram", url: "https://www.instagram.com/digitalwithcarmen/" },
    ],
  },
  {
    nombre: "midudev",
    categorias: ["Desarrollo", "Web", "IA"],
    imagen: "assets/img/midudev.jpg",
    descripcion:
      "Miguel Ángel Durán. Full Stack JavaScript con 15 años de experiencia: cursos, directos y contenido sobre programación, web e IA.",
    enlaces: [
      { red: "YouTube", url: "https://www.youtube.com/c/midudev" },
      { red: "Twitch", url: "https://www.twitch.tv/midudev" },
      { red: "X", url: "https://twitter.com/midudev" },
      { red: "Instagram", url: "https://www.instagram.com/midu.dev/" },
      { red: "GitHub", url: "https://github.com/midudev" },
      { red: "Web", url: "https://midu.dev" },
    ],
  },
  {
    nombre: "Mokkapp",
    categorias: ["Diseño", "IA"],
    imagen: "assets/img/mokkapp.jpg",
    descripcion:
      "Xavi, diseñador de producto digital con más de 10 años de experiencia. Tips de UX/UI, Figma y herramientas con IA.",
    enlaces: [
      { red: "YouTube", url: "https://www.youtube.com/@mokkapp" },
      { red: "Web", url: "https://www.mokkapp.com/" },
    ],
  },
  {
    nombre: "Código Facilito",
    categorias: ["Desarrollo", "Web"],
    imagen: "assets/img/codigofacilito.jpg",
    descripcion:
      "Plataforma de formación en programación en español desde 2010: HTML, JavaScript, React, Python, Go y más.",
    enlaces: [
      { red: "YouTube", url: "https://www.youtube.com/@codigofacilito" },
      { red: "Web", url: "https://codigofacilito.com/" },
    ],
  },
  {
    nombre: "Fazt Code",
    categorias: ["Desarrollo", "Web"],
    imagen: "assets/img/fazt-code.jpg",
    descripcion:
      "Tutoriales y proyectos web con ejemplos prácticos de Python, JavaScript, Go, Rust, React, Node.js y bases de datos.",
    enlaces: [{ red: "YouTube", url: "https://www.youtube.com/@FaztCode" }],
  },
  {
    nombre: "Fazt",
    categorias: ["Desarrollo", "Web"],
    imagen: "assets/img/fazt.jpg",
    descripcion:
      "Videos de programación, desarrollo web y tecnología: desde las bases de un lenguaje hasta subir tu sitio o aplicación.",
    enlaces: [{ red: "YouTube", url: "https://www.youtube.com/@FaztTech" }],
  },
];

const ARTICULOS = [
  {
    titulo: "How to Build a Figma-to-Code Design Token Pipeline — Part 1",
    categorias: ["Diseño", "Desarrollo"],
    fuente: "Design Systems Collective",
    descripcion:
      "Cómo convertir variables de Figma (exportadas a JSON) en código con Style Dictionary, evitando que diseño y código diverjan (design drift).",
    url: "https://www.designsystemscollective.com/how-to-build-a-figma-to-code-design-token-pipeline-part-1-8b66ef9a45d4",
  },
];

const INSPIRACION = [];
