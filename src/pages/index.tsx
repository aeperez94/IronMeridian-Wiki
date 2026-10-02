import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
// Set this path to an approved image in static/img when official hero art is ready.
const heroImage: string | null = null;
const entries = [
  ["01", "Unidades", "Roles, capacidades y estadísticas.", "units"],
  [
    "02",
    "Edificios",
    "Construcción, producción e infraestructura.",
    "buildings",
  ],
  [
    "03",
    "Capas estratégicas",
    "Surface, Underground y Orbit.",
    "gameplay/strategic-layers",
  ],
  ["04", "Combots", "Configura torso, piernas y brazos.", "combots"],
  [
    "05",
    "Tecnología",
    "Piezas, investigación y especialización.",
    "technology",
  ],
  ["06", "Mecánicas", "Economía, visión y combate.", "gameplay"],
];
export default function Home() {
  const heroSrc = useBaseUrl(heroImage || "/img/render-placeholder.svg");
  return (
    <Layout
      title="Wiki oficial"
      description="Manual y enciclopedia de Iron Meridian: unidades, edificios y guerra en tres capas."
    >
      <main className="home">
        <section className="hero-grid">
          <div>
            <p className="eyebrow">MANUAL DE CAMPO / WIKI OFICIAL</p>
            <h1>
              IRON
              <br />
              <span>MERIDIAN</span>
            </h1>
            <p className="hero-copy">
              Construye tu economía. Configura tus Combots. Combate en Surface,
              Underground y Orbit.
            </p>
            <p className="muted">
              Un RTS donde economía, ejércitos modulares y guerra estratégica se
              desarrollan simultáneamente en Surface, Underground y Orbit.
            </p>
            <div className="hero-actions">
              <Link
                className="button button--primary"
                to="/docs/getting-started/how-to-play"
              >
                Cómo jugar ↗
              </Link>
              <Link className="button button--secondary" to="/docs/gameplay">
                Explorar el manual
              </Link>
            </div>
          </div>
          <figure className="hero-art">
            {heroImage ? (
              <img
                src={heroSrc}
                alt="Iron Meridian — captura oficial del campo de batalla"
              />
            ) : (
              <div className="hero-reserve">
                <span className="archive-code">IM / ARCHIVO VISUAL</span>
                <span className="hero-reserve-title">
                  TRES CAPAS.
                  <br />
                  UN CAMPO DE BATALLA.
                </span>
                <p>Surface / Underground / Orbit</p>
              </div>
            )}
            <figcaption>CAPTURA OFICIAL / PRÓXIMAMENTE</figcaption>
            <div className="layer-strip">
              <span>01 / SURFACE</span>
              <span>02 / UNDERGROUND</span>
              <span>03 / ORBIT</span>
            </div>
          </figure>
        </section>
        <section className="archive" aria-labelledby="archive-title">
          <div className="section-label">
            <h2 id="archive-title">Explora el campo de batalla</h2>
            <span>ENCICLOPEDIA / 06 SECCIONES</span>
          </div>
          <div className="entry-grid">
            {entries.map(([n, title, desc, path]) => (
              <Link className="entry" key={path} to={"/docs/" + path}>
                <span className="entry-number">{n}</span>
                <h3>
                  {title}
                  <span aria-hidden="true"> ↗</span>
                </h3>
                <p>{desc}</p>
              </Link>
            ))}
          </div>
        </section>
        <aside className="home-note">
          Manual de campo · Unidades, infraestructura y operaciones en tres
          capas estratégicas.
        </aside>
      </main>
    </Layout>
  );
}
