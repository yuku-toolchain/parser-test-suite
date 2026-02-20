try {
  eval("/\\\u000A/").source;
} catch (e) {
  if (e instanceof SyntaxError !== true) {}
}