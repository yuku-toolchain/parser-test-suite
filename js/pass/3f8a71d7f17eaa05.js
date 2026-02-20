try {
  ("toString" in true);
} catch (e) {
  if (e instanceof TypeError !== true) {}
}
try {
  ("MAX_VALUE" in 1);
} catch (e) {
  if (e instanceof TypeError !== true) {}
}
try {
  ("length" in "string");
} catch (e) {
  if (e instanceof TypeError !== true) {}
}
try {
  ("toString" in undefined);
} catch (e) {
  if (e instanceof TypeError !== true) {}
}
try {
  ("toString" in null);
} catch (e) {
  if (e instanceof TypeError !== true) {}
}