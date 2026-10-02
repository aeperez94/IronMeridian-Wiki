import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import entities from '../data/entities.json';
type Entity = {name:string; gameName:string; role:string; layer:string; canon:string; image:string; visualStatus:string; producer?:string; type:string; stats:Record<string,string|number>};
const labels:Record<string,string> = {'Ferrite':'Coste de Ferrite','Energy':'Coste de Energy','Population':'Población','Hit points':'Puntos de vida','Armor':'Armadura','Time (s)':'Tiempo (s)','Vision':'Visión'};
export function EntityCard({id}:{id:string}) {
 const entity=(entities as Record<string,Entity>)[id];
 const image=useBaseUrl(entity?.image || '/img/render-placeholder.svg');
 if(!entity) throw new Error('Unknown entity: '+id);
 return <section aria-label={'Ficha de '+entity.name}>
 <img className="entity-render" src={image} alt={entity.image.includes('placeholder') ? 'Render de '+entity.name+' pendiente — TBD' : 'Render de '+entity.name}/>
 <div className="entity-meta"><span>{entity.role}</span><span>{entity.layer}</span>{entity.producer && <span>Produced at: {entity.producer}</span>}</div>
 <p>Nombre en el juego: <strong>{entity.gameName}</strong></p>
 <div className="status-note">Referencia visual: <strong>{entity.canon}</strong><br/>Estado del arte: {entity.visualStatus}.</div>
 <h2>Statistics</h2><p>Valores base. Los tiempos están expresados en segundos; no incluyen desplazamientos ni esperas de salida.</p>
 <table className="stat-table"><thead><tr><th scope="col">Dato</th><th scope="col">Valor</th></tr></thead><tbody>{Object.entries(entity.stats).map(([key,value])=><tr key={key}><th scope="row">{labels[key]||key}</th><td>{value}</td></tr>)}</tbody></table>
 </section>;
}
export function EntityStats({type}:{type:'unit'|'building'}) {return <table className="stat-table"><thead><tr><th>Nombre</th><th>Ferrite</th><th>Energy</th><th>Vida</th><th>Tiempo (s)</th></tr></thead><tbody>{Object.values(entities as Record<string,Entity>).filter(e=>e.type===type).map(e=><tr key={e.name}><th scope="row">{e.name}</th><td>{e.stats.Ferrite}</td><td>{e.stats.Energy}</td><td>{e.stats['Hit points']}</td><td>{e.stats['Time (s)']}</td></tr>)}</tbody></table>}
