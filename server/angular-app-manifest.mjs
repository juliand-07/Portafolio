
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://juliand-07.github.io/Portafolio/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/Portafolio/home"
  },
  {
    "renderMode": 2,
    "route": "/Portafolio/home/deskary"
  },
  {
    "renderMode": 2,
    "route": "/Portafolio/home/events"
  },
  {
    "renderMode": 2,
    "route": "/Portafolio/home/spring"
  },
  {
    "renderMode": 2,
    "redirectTo": "/Portafolio/home",
    "route": "/Portafolio/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 795, hash: '03ce144238723ef0bdc7a3fb76f0a09866444fd481df7652395b12f80afa0848', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1034, hash: 'b1ab25d7ccc11a1620dfad9fd8254b563a62eed6f3174c5161ed367fa2b471eb', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'home/deskary/index.html': {size: 243, hash: 'e8f79782872fb7e57c29d9a2417996411ab82f5f93bd4cc27df4425ce1fdaf93', text: () => import('./assets-chunks/home_deskary_index_html.mjs').then(m => m.default)},
    'home/events/index.html': {size: 243, hash: 'e8f79782872fb7e57c29d9a2417996411ab82f5f93bd4cc27df4425ce1fdaf93', text: () => import('./assets-chunks/home_events_index_html.mjs').then(m => m.default)},
    'home/index.html': {size: 243, hash: 'e8f79782872fb7e57c29d9a2417996411ab82f5f93bd4cc27df4425ce1fdaf93', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'home/spring/index.html': {size: 243, hash: 'e8f79782872fb7e57c29d9a2417996411ab82f5f93bd4cc27df4425ce1fdaf93', text: () => import('./assets-chunks/home_spring_index_html.mjs').then(m => m.default)},
    'styles-OHTO5X6C.css': {size: 185, hash: 'L74wAvMsIFs', text: () => import('./assets-chunks/styles-OHTO5X6C_css.mjs').then(m => m.default)}
  },
};
