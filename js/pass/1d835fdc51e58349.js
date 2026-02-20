var ranCatch = false;
try {
  throw [1, 2, 3];
} catch ([x, y, z]) {
  ranCatch = true;
}