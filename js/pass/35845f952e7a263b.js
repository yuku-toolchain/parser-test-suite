var ranCatch = false;
try {
  throw [1, 2, 3];
} catch ([...{length}]) {
  ranCatch = true;
}