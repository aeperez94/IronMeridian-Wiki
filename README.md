# IronMeridian-Wiki

Wiki oficial de jugadores, en español, con nombres de unidades y categorías del juego. Proyecto independiente de Unity: Docusaurus 3.10.2, React, TypeScript y Markdown/MDX. No modifica el juego.

## Instalar y ejecutar

Requiere Node.js 22 o superior y npm.

```sh
npm ci
npm start
```

Abrir la URL que imprime Docusaurus, incluyendo `/IronMeridian-Wiki/`.

```sh
npm run check
npm run serve
```

`check` ejecuta TypeScript, validación del contenido y build con enlaces rotos tratados como errores. `serve` muestra el resultado de producción.

## Agregar una página

Crear `docs/categoria/nombre.md` o `.mdx` con front matter `title` y `sidebar_position`. La sidebar se genera desde carpetas y `_category_.json`. Usar enlaces `/docs/categoria/nombre`: Docusaurus aplica el baseUrl del sitio. No incluir `.md` en las URLs. Cada categoría tiene su índice navegable.

## Agregar una unidad o edificio

1. Copiar `templates/unit.mdx` o `templates/building.mdx` a su categoría en `docs`.
2. Agregar un id único en `src/data/entities.json`, con `name`, `gameName`, `type`, `role`, `layer`, `producer` (unidades), `canon`, `visualStatus`, `image` y `stats`.
3. Activar `<EntityCard id="nuevo-id" />` con el mismo id.
4. Completar sólo el comportamiento confirmado; usar `TBD` en datos desconocidos del JSON y registrar las secciones pendientes en mantenimiento.
5. Registrar evidencia y revisión en `maintenance/source-register.md`.
6. Ejecutar `npm run check`.

Las tablas de referencia leen el mismo JSON. No copiar costes manualmente a varias páginas. Usar valores JSON numéricos para datos confirmados y `TBD` para pendientes. Los Combots necesitan estadísticas por configuración, no una cifra inventada para toda la familia.

## Agregar imágenes

Guardar imágenes propias en `static/img/units`, `static/img/buildings` o `static/img/gallery`. En JSON usar `/img/units/nombre.webp`; EntityCard aplica el baseUrl. En MDX usar `useBaseUrl` o importaciones para las imágenes. Agregar alt significativo. El emblema y render placeholder son arte editorial provisional, no assets definitivos del juego. Sustituirlos con material oficial aprobado. No usar imágenes genéricas externas.

## Publicar en GitHub Pages

El repositorio es [aeperez94/IronMeridian-Wiki](https://github.com/aeperez94/IronMeridian-Wiki), con branch `main` y URL pública [Iron Meridian Wiki](https://aeperez94.github.io/IronMeridian-Wiki/).

1. Ejecutar `npm run check` antes de publicar.
2. Hacer commit y push a `main` (o abrir una pull request para revisión).
3. El workflow **Wiki validation and Pages** valida y despliega automáticamente `main`. También permite ejecución manual desde Actions.
4. Confirmar los jobs `build` y `deploy` y revisar el sitio público.

Pages utiliza **GitHub Actions** como Source. `url` y `baseUrl` conservan el dominio y `/IronMeridian-Wiki/`. No subir `build` ni `node_modules`; Actions los genera con `npm ci`. Las pull requests se validan sin desplegarse.

## Búsqueda local

V1.1 incluye `@easyops-cn/docusaurus-search-local` (MIT), compatible con Docusaurus 3. El build genera un índice estático con nombre hash; el navegador lo consulta en GitHub Pages. No necesita backend, cuenta externa ni claves. Indexa artículos y Home en español e inglés para reconocer nombres del juego. La interfaz se presenta en español.

La búsqueda se prueba sobre producción: `npm run build && npm run serve`. El servidor de desarrollo no genera el índice completo. Cada deploy reconstruye el índice. Usar la barra de navegación o Ctrl/Cmd+K y buscar, por ejemplo, MULE, COMMAND o Ferrite. No se habilita la opción Ask AI ni ningún servicio externo. Referencia: https://github.com/easyops-cn/docusaurus-search-local.

## Tema, fichas y arte

Barlow Condensed (títulos) e IBM Plex Sans (texto), distribuidas por Fontsource bajo SIL OFL 1.1, se empaquetan localmente. No se solicitan fuentes a terceros en runtime. Licencias incluidas en `static/fonts/licenses`.

EntityCard divide la cabecera en render e información; en móvil pasa a una columna. Las estadísticas siguen leyendo `entities.json`, incluidos ceros y notas confirmadas. `canon` y `visualStatus` permanecen internos; sólo el estado explícito Provisional muestra una etiqueta discreta.

Para el hero, asignar `heroImage` en `src/pages/index.tsx` a una ruta de imagen oficial de `static/img` y ajustar su texto alternativo. Para una ficha, cambiar `image` en el registro de la entidad. No hace falta modificar el layout. Sin imagen, el componente muestra un archivo visual editorial, sin simular una unidad.

No publicar secciones vacías ni repetir párrafos para llenar una plantilla. Registrar Trasfondo, Galería e Historial pendientes en `maintenance/TBD.md`. Las estadísticas desconocidas continúan marcadas `TBD`, nunca estimadas.

## Versiones e idiomas

`i18n` empieza con `es`. Para agregar inglés, incluir `en` y generar las traducciones con Docusaurus; no activar un idioma sin contenido. Para congelar una versión: `npx docusaurus docs:version VERSION_PUBLICA`, luego revisar los enlaces y ejecutar check. No versionar por commits internos ni protocolos.

## Política editorial

Código actual > documentación actual > reportes > nombres y assets. Separar reglas jugables de canon visual. No inventar lore ni estadísticas. El registro de fuentes es mantenimiento privado del proyecto web y no aparece en la wiki. Todo artículo público describe comportamiento visible y evita detalles internos.

## Archivos principales

- `docusaurus.config.ts`: sitio, navbar, idioma y Pages.
- `sidebars.ts`: sidebar automática.
- `src/pages/index.tsx`, `src/css/custom.css`: landing y tema.
- `docs/`: enciclopedia editable.
- `src/data/entities.json`, `src/components/EntityCard.tsx`: datos y fichas compartidas.
- `templates/`: plantillas reutilizables.
- `.github/workflows/pages.yml`: CI y publicación.
- `maintenance/`: evidencia editorial y tareas pendientes; no se publica en build.
