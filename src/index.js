(function () {
  const ctx = require.context('./pages', true, /\.js$/);
  ctx.keys().forEach(ctx);
}());
