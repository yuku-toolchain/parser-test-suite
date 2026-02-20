var ranCatch = false;
try {
  throw [undefined];
} catch ([x = 23]) {
  ranCatch = true;
}