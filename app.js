const el = (tag, props = {}, ...hijos) => {
  const n = Object.assign(document.createElement(tag), props);
  n.append(...hijos);
  return n;
};
const enlace = (url, texto, clase = "") =>
  el("a", { href: url, textContent: texto, className: clase, target: "_blank", rel: "noopener noreferrer" });
const etiquetas = cats =>
  el("div", { className: "etiquetas" }, ...cats.map(c => el("span", { className: "etiqueta", textContent: c })));

const tarjetaCreador = c =>
  el("article", { className: "tarjeta" },
    etiquetas(c.categorias),
    el("h3", { textContent: c.nombre }),
    el("p", { textContent: c.descripcion }),
    el("div", { className: "enlaces" }, ...c.enlaces.map(e => enlace(e.url, e.red)))
  );

const tarjetaArticulo = a =>
  el("article", { className: "tarjeta" },
    etiquetas(a.categorias),
    el("h3", { textContent: a.titulo }),
    el("span", { className: "fuente", textContent: a.fuente }),
    el("p", { textContent: a.descripcion }),
    enlace(a.url, "Leer artículo →", "leer")
  );

// Pinta la lista y los botones de filtro de una sección.
function montarSeccion(items, crearTarjeta) {
  const filtros = document.getElementById("filtros");
  const lista = document.getElementById("lista");
  let activo = "Todos";

  const pintar = () => {
    const visibles = items.filter(i => activo === "Todos" || i.categorias.includes(activo));
    lista.replaceChildren(
      ...(visibles.length
        ? visibles.map(crearTarjeta)
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
}
