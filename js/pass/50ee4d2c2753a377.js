try {
  eval("continue;");
} catch (e) {
  if (e instanceof SyntaxError !== true) {}
}
try {
  for (var i = 0; i <= 1; i++) {
    for (var j = 0; j <= 1; j++) {
      eval("continue;");
    }
  }
} catch (e) {
  if (e instanceof SyntaxError !== true) {}
}