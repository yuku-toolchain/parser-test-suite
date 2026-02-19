try {
  eval("throw 1;");
} catch (e) {
  if (e !== 1) {}
}