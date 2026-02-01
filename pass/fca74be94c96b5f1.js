let length = "outer";
var iterCount = 0;
for (const [...{0: v, 1: w, 2: x, 3: y, length: z}] of [[7, 8, 9]]) {
  iterCount += 1;
}