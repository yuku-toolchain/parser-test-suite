let length = "outer";
var ranCatch = false;
try {
  throw [7, 8, 9];
} catch ([...{0: v, 1: w, 2: x, 3: y, length: z}]) {
  ranCatch = true;
}