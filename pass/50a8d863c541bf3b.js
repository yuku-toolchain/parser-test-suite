var values = [1, 2, 3];
var ranCatch = false;
try {
  throw values;
} catch ([...[...x]]) {
  ranCatch = true;
}