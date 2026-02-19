var args;
var replacer = function () {
  args = arguments;
};
var r = /./;
r.exec = function () {
  return [];
};
r[Symbol.replace]('foo', replacer);