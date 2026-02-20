try {
  1 instanceof Math;
} catch (e) {
  if (e instanceof TypeError !== true) {}
}