try {
  undefined.toString();
} catch (e) {
  if (e instanceof TypeError !== true) {}
}
try {
  undefined["toString"]();
} catch (e) {
  if (e instanceof TypeError !== true) {}
}