try {
  eval("break;");
} catch (e) {
  if (e instanceof SyntaxError !== true) {}
}
try {
  for (var i = 0; i <= 1; i++) {
    for (var j = 0; j <= 1; j++) {
      eval("break;");
    }
  }
} catch (e) {
  if (e instanceof SyntaxError !== true) {}
}