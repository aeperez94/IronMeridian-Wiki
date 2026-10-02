import React from "react";
import useBaseUrl from "@docusaurus/useBaseUrl";
import entities from "../data/entities.json";
type Entity = {
  name: string;
  gameName: string;
  role: string;
  layer: string;
  canon: string;
  image: string;
  visualStatus: string;
  producer?: string;
  type: string;
  stats: Record<string, string | number>;
};
const labels: Record<string, string> = {
  Ferrite: "Ferrite",
  Energy: "Energy",
  Population: "Población",
  "Hit points": "Puntos de vida",
  Armor: "Armadura",
  "Time (s)": "Tiempo · s",
  Vision: "Visión",
};
export function EntityCard({ id }: { id: string }) {
  const entity = (entities as Record<string, Entity>)[id];
  const image = useBaseUrl(entity?.image || "/img/render-placeholder.svg");
  if (!entity) throw new Error("Unknown entity: " + id);
  const placeholder = entity.image.includes("placeholder");
  return (
    <section className="entity-card" aria-label={"Ficha de " + entity.name}>
      <figure className="entity-art">
        {placeholder ? (
          <div className="render-reserve">
            <span className="archive-code">ARCHIVO VISUAL</span>
            <span className="render-symbol" aria-hidden="true">
              ＋
            </span>
            <strong>{entity.name}</strong>
            <span>Render oficial pendiente</span>
          </div>
        ) : (
          <img
            className="entity-render"
            src={image}
            alt={"Render de " + entity.name}
          />
        )}
        <figcaption>
          {entity.type === "unit" ? "UNIDAD" : "EDIFICIO"} / {entity.name}
          {/^provisional$/i.test(entity.visualStatus) && (
            <span className="art-status">Arte provisional</span>
          )}
        </figcaption>
      </figure>
      <div className="entity-dossier">
        <p className="eyebrow">
          {entity.type === "unit" ? "UNIDAD" : "EDIFICIO"} / FICHA DE CAMPO
        </p>
        <h2 className="entity-name">{entity.name}</h2>
        <dl className="entity-identity">
          <div>
            <dt>Rol</dt>
            <dd>{entity.role}</dd>
          </div>
          <div>
            <dt>Capa estratégica</dt>
            <dd>{entity.layer}</dd>
          </div>
          {entity.producer && (
            <div>
              <dt>Producido en</dt>
              <dd>{entity.producer}</dd>
            </div>
          )}
        </dl>
        <h3 className="stats-title">Estadísticas</h3>
        <dl className="stat-grid">
          {Object.entries(entity.stats).map(([key, value]) => (
            <div
              className={
                typeof value === "string" && value.length > 30
                  ? "stat stat--note"
                  : "stat"
              }
              key={key}
            >
              <dt>{labels[key] || key}</dt>
              <dd>{value}</dd>
            </div>
          ))}
        </dl>
        <p className="stat-caption">
          Valores base. Tiempo de{" "}
          {entity.type === "unit" ? "producción" : "construcción"} en segundos,
          sin desplazamientos ni esperas de salida.
        </p>
      </div>
    </section>
  );
}
export function EntityStats({ type }: { type: "unit" | "building" }) {
  return (
    <div
      className="table-scroll"
      role="region"
      aria-label={
        type === "unit"
          ? "Estadísticas de unidades"
          : "Estadísticas de edificios"
      }
      tabIndex={0}
    >
      <table className="stat-table">
        <thead>
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Ferrite</th>
            <th scope="col">Energy</th>
            <th scope="col">Vida</th>
            <th scope="col">Tiempo · s</th>
          </tr>
        </thead>
        <tbody>
          {Object.values(entities as Record<string, Entity>)
            .filter((e) => e.type === type)
            .map((e) => (
              <tr key={e.name}>
                <th scope="row">{e.name}</th>
                <td>{e.stats.Ferrite}</td>
                <td>{e.stats.Energy}</td>
                <td>{e.stats["Hit points"]}</td>
                <td>{e.stats["Time (s)"]}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
