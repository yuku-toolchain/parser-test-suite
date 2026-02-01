try {
  eval("/s\u2029/").source;
} catch (e) {
  if (e instanceof SyntaxError !== true) {}
}