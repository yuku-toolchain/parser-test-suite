try {
  (null).toString();
} catch (e) {
  if (e instanceof TypeError !== true) {}
}
try {
  (null)["toString"]();
} catch (e) {
  if (e instanceof TypeError !== true) {}
}