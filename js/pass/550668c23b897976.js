try {
  eval("/\u2028/").source;
} catch (e) {
  if (e instanceof SyntaxError !== true) {}
}