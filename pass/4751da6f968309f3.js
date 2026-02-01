var ranCatch = false;
try {
  throw [1];
} catch ([...x]) {
  ranCatch = true;
}