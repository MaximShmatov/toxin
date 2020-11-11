(function () {
  const context = require.context('./', true, /\.js$|\.sass$/);
  context.keys().forEach(context);
}());
