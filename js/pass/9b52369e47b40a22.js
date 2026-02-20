var values = [2, 1, 3];
var ranCatch = false;
try {
  throw [];
} catch ([[...x] = values]) {
  ranCatch = true;
}