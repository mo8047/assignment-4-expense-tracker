
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/assignment-4-expense-tracker/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/assignment-4-expense-tracker"
  },
  {
    "renderMode": 2,
    "route": "/assignment-4-expense-tracker/add"
  },
  {
    "renderMode": 2,
    "route": "/assignment-4-expense-tracker/expenses"
  },
  {
    "renderMode": 1,
    "route": "/assignment-4-expense-tracker/edit/*"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 5019, hash: 'b73da43256749301b2d20145eb8496fc8eab68f65d115953fe33466b7a5571a6', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 992, hash: '4e62bff0bf110ce9e136973b149fbbd93133d7f8df46f13adfc4b6030382c913', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'expenses/index.html': {size: 12948, hash: 'e9a92b88b2467123ddf12bda511eee39989bf89f124d7a4c776a100521a9b8da', text: () => import('./assets-chunks/expenses_index_html.mjs').then(m => m.default)},
    'index.html': {size: 16418, hash: '2f2fe6929ee9ca2f90b9b6b870fbafb00ec658ce4d5b76eb98be3cc663eadb52', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'add/index.html': {size: 19596, hash: '55c2ee5005c7a55680b0ec156937066ef9ad442946db114bd94ad0175b2e3377', text: () => import('./assets-chunks/add_index_html.mjs').then(m => m.default)},
    'styles-JG7EAGFK.css': {size: 230853, hash: 'YlmivfEfBiI', text: () => import('./assets-chunks/styles-JG7EAGFK_css.mjs').then(m => m.default)}
  },
};
