var ranCatch = false;
try {
  throw [3, 4, 5];
} catch ([...[x, y, z]]) {
  ranCatch = true;
}