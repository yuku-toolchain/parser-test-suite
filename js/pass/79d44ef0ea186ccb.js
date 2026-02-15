var ranCatch = false;
try {
  throw [1, 2];
} catch ([...x]) {
  ranCatch = true;
}