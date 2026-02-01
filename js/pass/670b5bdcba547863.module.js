let f = [undefined, undefined, undefined];
const obj1 = {
  async [Symbol.asyncDispose]() {}
};
const obj2 = {
  async [Symbol.asyncDispose]() {}
};
const obj3 = {
  async [Symbol.asyncDispose]() {}
};
let i = 0;
for (await using x of [obj1, obj2, obj3]) {
  f[i++] = function () {
    return x;
  };
}