let f = [undefined, undefined, undefined];
const obj1 = {
  [Symbol.dispose]() {}
};
const obj2 = {
  [Symbol.dispose]() {}
};
const obj3 = {
  [Symbol.dispose]() {}
};
let i = 0;
for (using x of [obj1, obj2, obj3]) {
  f[i++] = function () {
    return x;
  };
}