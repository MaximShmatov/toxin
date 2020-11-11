(function () {
  const ctxPages = require.context('./pages', true, /\.js$/);
  ctxPages.keys().forEach(ctxPages);
}());
