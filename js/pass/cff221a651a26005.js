var ranCatch = false;
try {
  throw [];
} catch ([x]) {
  ranCatch = true;
}