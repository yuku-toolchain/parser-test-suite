var index = {};
var toPrimitiveHint;
index[Symbol.toPrimitive] = function (hint) {
  toPrimitiveHint = hint;
};
var r = /./;
r.exec = function () {
  return {
    length: 1,
    0: 'a',
    index: index
  };
};