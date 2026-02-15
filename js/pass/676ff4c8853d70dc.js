try {
  eval("/a\u000D/").source;
} catch (e) {
  if (e instanceof SyntaxError !== true) {}
}