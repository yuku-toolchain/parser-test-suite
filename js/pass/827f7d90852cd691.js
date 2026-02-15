try {
  eval("/a\\\u2029/").source;
} catch (e) {
  if (e instanceof SyntaxError !== true) {}
}