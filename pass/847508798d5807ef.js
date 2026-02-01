var R_g = /./g, R_y = /./y, R_gy = /./gy;
var S = "test";
var lastIndex;
var bigLastIndexes = [Infinity, Number.MAX_VALUE, Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER - 1, 2 ** 32 + 4, 2 ** 32 + 3, 2 ** 32 + 2, 2 ** 32 + 1, 2 ** 32, 2 ** 32 - 1, 5];
for (var i = 0; i < bigLastIndexes.length; i++) {
  lastIndex = bigLastIndexes[i];
  R_g.lastIndex = lastIndex;
  R_y.lastIndex = lastIndex;
  R_gy.lastIndex = lastIndex;
}