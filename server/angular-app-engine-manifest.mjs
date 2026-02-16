
export default {
  basePath: 'https://juliand-07.github.io/Portafolio',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
