let s = 0;
let f = [undefined, undefined, undefined];
for (let x of [1, 2, 3]) {
  s += x;
  f[x - 1] = function () {
    return x;
  };
}