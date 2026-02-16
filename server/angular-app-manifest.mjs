
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
    'index.csr.html': {size: 795, hash: '9218329fbfbd8f16535264a1c16efc1784241b24ffe19f7d18b8c6361d71e2b3', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1034, hash: '5953d04dd225a76a8aef6f8e2aff4c37bbce2083f495b7e6016f2af6d17ccfc6', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'home/index.html': {size: 15462, hash: 'bba6ad5e5b4f7dabe2a493a2fb505642f07199d139dd8976744dbc63df40c82e', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'home/events/index.html': {size: 27833, hash: '406cb1eaac798a0b9e880177dc9349f216f1fc4a03c0f3fcba894719b5f7654a', text: () => import('./assets-chunks/home_events_index_html.mjs').then(m => m.default)},
    'home/deskary/index.html': {size: 28127, hash: 'c64ed688870aa1a395e280776c0424d87adfd23a854c25436bd5a55ad8fc61b2', text: () => import('./assets-chunks/home_deskary_index_html.mjs').then(m => m.default)},
    'home/spring/index.html': {size: 25780, hash: '5046a578388d765c5fe805c8123e58108faa2fcd6f36150aacdf4f474dc0d06c', text: () => import('./assets-chunks/home_spring_index_html.mjs').then(m => m.default)},
    'styles-OHTO5X6C.css': {size: 185, hash: 'L74wAvMsIFs', text: () => import('./assets-chunks/styles-OHTO5X6C_css.mjs').then(m => m.default)}
  },
};
