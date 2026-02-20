var values = [1, 2, 3, 4, 5];
var ranCatch = false;
try {
  throw values;
} catch ([...x]) {
  ranCatch = true;
}