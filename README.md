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
4. Completar el comportamiento confirmado; usar `TBD` en datos desconocidos.
5. Registrar evidencia y revisión en `maintenance/source-register.md`.
6. Ejecutar `npm run check`.

Las tablas de referencia leen el mismo JSON. No copiar costes manualmente a varias páginas. Usar valores JSON numéricos para datos confirmados y `TBD` para pendientes. Los Combots necesitan estadísticas por configuración, no una cifra inventada para toda la familia.

## Agregar imágenes

Guardar imágenes propias en `static/img/units`, `static/img/buildings` o `static/img/gallery`. En JSON usar `/img/units/nombre.webp`; EntityCard aplica el baseUrl. En MDX usar `useBaseUrl` o importaciones para las imágenes. Agregar alt significativo. El emblema y render placeholder son arte editorial provisional, no assets definitivos del juego. Sustituirlos con material oficial aprobado. No usar imágenes genéricas externas.

## Publicar en GitHub Pages

El proyecto está preparado para el repositorio **aeperez94/IronMeridian-Wiki**. No se ha creado ni publicado automáticamente porque la conexión disponible no ofrece esas operaciones.

1. Crear en GitHub un repositorio vacío llamado `IronMeridian-Wiki`. Elegir visibilidad conscientemente: una wiki pública no requiere publicar el código privado del juego. No incluir los archivos privados de `sources` usados para preparar esta entrega.
2. Desde esta carpeta:

```sh
git init -b main
git add .
git commit -m "feat: initialize Iron Meridian official wiki"
git remote add origin https://github.com/aeperez94/IronMeridian-Wiki.git
git push -u origin main
```

3. Abrir **Settings → Pages → Build and deployment → Source: GitHub Actions**.
4. En Actions ejecutar **Wiki validation and Pages** si no comenzó con el push.
5. Confirmar ambos jobs verdes y abrir la URL mostrada por `deploy`.

URL prevista (no publicada durante esta entrega): `https://aeperez94.github.io/IronMeridian-Wiki/`.

El workflow valida pull requests sin desplegarlas y publica únicamente main. Si cambias owner/nombre/dominio, actualizar `url`, `baseUrl`, `organizationName` y `projectName` en `docusaurus.config.ts`. En Pages un repositorio privado requiere un plan compatible. Si el entorno github-pages exige aprobación, revisa sus reglas de deployment.

## Búsqueda futura

La búsqueda todavía no está activa. Agregar `themeConfig.algolia` en `docusaurus.config.ts` una vez creado el índice de DocSearch/Algolia y disponibles `appId`, `indexName` y una clave pública de búsqueda. Nunca agregar una clave administrativa al cliente. Alternativa: un plugin de búsqueda local compatible con esta versión. El sitio funciona sin depender de un servicio de búsqueda.

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
