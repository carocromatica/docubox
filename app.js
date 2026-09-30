const el = (tag, props = {}, ...hijos) => {
  const n = Object.assign(document.createElement(tag), props);
  n.append(...hijos);
  return n;
};
const enlace = (url, texto, clase = "") =>
  el("a", { href: url, textContent: texto, className: clase, target: "_blank", rel: "noopener noreferrer" });
const etiquetas = cats =>
  el("div", { className: "etiquetas" }, ...cats.map(c => el("span", { className: "etiqueta", textContent: c })));
const imagen = (src, alt) =>
  src
    ? el("img", { className: "foto", src, alt, loading: "lazy" })
    : el("div", { className: "foto foto-vacia", textContent: "📄", ariaHidden: "true" });

const tarjetaCreador = c =>
  el("article", { className: "tarjeta" },
    imagen(c.imagen, `Foto de ${c.nombre}`),
    el("div", { className: "cuerpo" },
      etiquetas(c.categorias),
      el("h3", { textContent: c.nombre }),
      el("p", { textContent: c.descripcion }),
      el("div", { className: "enlaces" }, ...c.enlaces.map(e => enlace(e.url, e.red)))
    )
  );

const tarjetaArticulo = a =>
  el("article", { className: "tarjeta" },
    imagen(a.imagen, ""),
    el("div", { className: "cuerpo" },
      etiquetas(a.categorias),
      el("h3", { textContent: a.titulo }),
      el("span", { className: "fuente", textContent: a.fuente }),
      el("p", { textContent: a.descripcion }),
      enlace(a.url, "Leer artículo →", "leer")
    )
  );

const SECCIONES = {
  referentes: { pagina: "referentes.html", nombre: "Referentes", titulo: "Referentes para seguir", items: () => CREADORES, tarjeta: tarjetaCreador },
  articulos: { pagina: "articulos.html", nombre: "Artículos", titulo: "Artículos recomendados", items: () => ARTICULOS, tarjeta: tarjetaArticulo },
  inspiracion: { pagina: "inspiracion.html", nombre: "Inspiración", titulo: "Inspiración", items: () => INSPIRACION, tarjeta: tarjetaArticulo },
};

// Cápsula con logo (inicio) y las tres secciones.
function montarCabecera(activa) {
  return el("header", { className: "contenedor" },
    el("div", { className: "capsula" },
      el("a", { href: "index.html", className: "logo" }, el("img", { src: "assets/logo.png", alt: "Caro's Docubox, ir al inicio" })),
      el("nav", { ariaLabel: "Principal" },
        ...Object.entries(SECCIONES).map(([id, s]) => {
          const a = el("a", { href: s.pagina, textContent: s.nombre });
          if (id === activa) a.setAttribute("aria-current", "page");
          return a;
        })
      )
    ),
    el("p", { className: "descripcion", textContent: "Referentes para seguir en redes y artículos que vale la pena leer, en marketing, diseño y desarrollo web." })
  );
}

// Sección con título, filtros por categoría y lista en masonry.
function montarSeccion(id) {
  const { titulo, items, tarjeta } = SECCIONES[id];
  const filtros = el("div", { className: "filtros", role: "group", ariaLabel: `Filtrar ${titulo} por categoría` });
  const lista = el("div", { className: "masonry" });
  let activo = "Todos";

  const pintar = () => {
    const visibles = items().filter(i => activo === "Todos" || i.categorias.includes(activo));
    lista.replaceChildren(
      ...(visibles.length
        ? visibles.map(tarjeta)
        : [el("p", { className: "vacio", textContent: "Aún no hay contenido en esta categoría." })])
    );
    filtros.querySelectorAll("button").forEach(b => b.setAttribute("aria-pressed", b.textContent === activo));
  };

  filtros.append(
    ...["Todos", ...CATEGORIAS].map(c =>
      el("button", { type: "button", textContent: c, onclick: () => { activo = c; pintar(); } })
    )
  );
  pintar();
  return el("section", {}, el("div", { className: "seccion-cab" }, el("h2", { textContent: titulo }), filtros), lista);
}

// Cada página declara en <body data-secciones="..."> qué secciones muestra.
const secciones = document.body.dataset.secciones.split(",");
const activa = secciones.length === 1 ? secciones[0] : "";
document.body.prepend(montarCabecera(activa));
document.querySelector("main").append(...secciones.map(montarSeccion));
