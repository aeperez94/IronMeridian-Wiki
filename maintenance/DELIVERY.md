# Entrega inicial de IronMeridian-Wiki

## Arquitectura

Docusaurus 3.10.2 + React + TypeScript. Markdown/MDX, sidebar automática, navbar, índices, tema oscuro graphite/naranja y landing. 73 artículos y 10 índices principales; 88 rutas generadas incluyendo categorías anidadas y portada. 21 fichas centrales con JSON compartido. Templates de unidades y edificios con ejemplos JSON. Español inicial; preparado para versiones e idiomas futuros. Búsqueda preparada, todavía no activa.

## Fuente

Repositorio de juego leído en main fdc84f3ddb94daf4a4411c1b031ca891cb4d784a. Se consultaron código, README y nombres actuales. Se priorizó código ante documentación obsoleta. No se alteró el repositorio del juego.

## Confirmado e importado

Costes, tiempos, HP, armadura, visión y población del catálogo; productores y capas; energía 1,8/8; extracción de Ferrite y variante Gold; construcción/órdenes; investigación de piezas; módulos de Combots; aviación; EMP; reglas de Orbital Strike; mapa Ashen Divide 336 × 336; modos Skirmish/AI vs AI, botones LAN y conceptos de IA estratégica.

## Pendiente

Renders/logo/hero oficiales, lore, galerías, historial de versiones públicas, mapa ilustrado, estadísticas por configuración de Combot, árbol completo y guía WAN. Cloaking Combot no confirmado; Orbital Platform visual provisional. Light Tank visual se diferencia del nombre actual KESTREL / Scout. Ver TBD.md y source-register.md.

## Validación

- TypeScript: PASS.
- Cuatro pruebas de integridad editorial y datos: PASS.
- Docusaurus production build con enlaces rotos como errores: PASS.
- Existencia de HTML para las 88 rutas del sitemap: PASS.
- Revisión visual desktop/mobile: NO COMPLETADA. Chromium local no estaba instalado; el navegador remoto rechazó el servidor local. No se afirma una validación visual realizada. El tema incluye reglas responsive y navegación móvil estándar de Docusaurus.
- GitHub Actions: configurado; no ejecutado en GitHub.
- GitHub Pages: no publicado; repositorio remoto no creado.

## Bloqueo remoto

Las herramientas conectadas permiten leer/escribir en repositorios accesibles existentes, pero no crear repositorios ni administrar GitHub Pages. No había una copia local ni credenciales Git para clonar/push. El repositorio IronMeridian-Wiki no resultó accesible. No se creó la wiki dentro de IronMeridian como alternativa. El README incluye la secuencia para crear y publicar el repositorio separado.

## Próximos pasos

1. Crear IronMeridian-Wiki y activar Pages con GitHub Actions.
2. Revisar visualmente la build en escritorio y móvil; aprobar renders y hero oficiales.
3. Completar árbol tecnológico, estadísticas de Combots y guía WAN antes de presentar esas áreas como completas.
