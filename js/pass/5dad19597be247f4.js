var obj = {};
function CustomError() {}
Object.defineProperty(obj, 'source', {
  get: function () {
    throw new CustomError();
  }
});
Object.defineProperty(obj, 'flags', {
  get: function () {}
});
obj[Symbol.match] = true;
obj[Symbol.match] = 'string';
obj[Symbol.match] = [];
obj[Symbol.match] = Symbol();
obj[Symbol.match] = 86;