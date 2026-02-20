var obj = {
  source: 'source text'
};
var result;
Object.defineProperty(obj, 'flags', {
  get: function () {}
});
obj[Symbol.match] = true;
result = new RegExp(obj, 'g');
obj[Symbol.match] = 'string';
result = new RegExp(obj, 'g');
obj[Symbol.match] = [];
result = new RegExp(obj, 'g');
obj[Symbol.match] = Symbol();
result = new RegExp(obj, 'g');
obj[Symbol.match] = 86;
result = new RegExp(obj, 'g');