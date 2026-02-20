var obj = {
  source: 'source text',
  flags: 'i'
};
var result;
obj[Symbol.match] = true;
result = new RegExp(obj);
obj[Symbol.match] = 'string';
result = new RegExp(obj);
obj[Symbol.match] = [];
result = new RegExp(obj);
obj[Symbol.match] = Symbol();
result = new RegExp(obj);
obj[Symbol.match] = 86;
result = new RegExp(obj);