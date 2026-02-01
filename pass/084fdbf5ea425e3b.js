try {
  eval("/a\u2028/").source;
} catch (e) {
  if (e instanceof SyntaxError !== true) {}
}