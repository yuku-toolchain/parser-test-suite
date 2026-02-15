var obj = Object.defineProperty({}, 'constructor', {
  get: function () {}
});
obj[Symbol.match] = true;
obj[Symbol.match] = 'string';
obj[Symbol.match] = [];
obj[Symbol.match] = Symbol();
obj[Symbol.match] = 86;