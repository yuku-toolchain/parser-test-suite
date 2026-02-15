var ranCatch = false;
try {
  throw {};
} catch ({w: [x, y, z] = [4, 5, 6]}) {
  ranCatch = true;
}