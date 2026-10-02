import type {Config} from '@docusaurus/types';
const config: Config = {
 title: 'Iron Meridian', tagline: 'Tres capas. Un campo de batalla.',
 url: 'https://aeperez94.github.io', baseUrl: '/IronMeridian-Wiki/',
 organizationName: 'aeperez94', projectName: 'IronMeridian-Wiki',
 trailingSlash: true, favicon: 'img/meridian-mark.svg', onBrokenLinks: 'throw',
 i18n: {defaultLocale: 'es', locales: ['es']},
 presets: [['classic', {docs: {routeBasePath: 'docs', sidebarPath: './sidebars.ts'}, blog: false, theme: {customCss: './src/css/custom.css'}}]],
 themeConfig: {
  colorMode: {defaultMode: 'dark', disableSwitch: true, respectPrefersColorScheme: false},
  navbar: {title: 'IRON MERIDIAN', logo: {alt: 'Iron Meridian — emblema editorial provisional', src: 'img/meridian-mark.svg'}, items: [
   {to: '/docs/getting-started/how-to-play', label: 'Comenzar', position: 'left'},
   {to: '/docs/units', label: 'Unidades', position: 'left'},
   {to: '/docs/buildings', label: 'Edificios', position: 'left'},
   {to: '/docs/gameplay/strategic-layers', label: 'Capas', position: 'left'},
   {to: '/docs/reference', label: 'Referencia', position: 'right'}]},
  footer: {style: 'dark', links: [{title: 'Manual', items: [{label: 'Gameplay', to: '/docs/gameplay'}, {label: 'Combots', to: '/docs/combots'}]}, {title: 'Consulta', items: [{label: 'Tecnología', to: '/docs/technology'}, {label: 'Controles', to: '/docs/reference/controls'}]}], copyright: 'Iron Meridian · Wiki oficial en preparación. Arte editorial provisional.'},
  // SEARCH: add themeConfig.algolia after obtaining an index and public search API key.
  // Never put an admin search key in this public configuration.
  docs: {sidebar: {hideable: true, autoCollapseCategories: true}},
 },
};
export default config;
