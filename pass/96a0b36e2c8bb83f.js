var ranCatch = false;
try {
  throw [];
} catch ([x = 23]) {
  ranCatch = true;
}