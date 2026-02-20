var toPrimitiveReplacer = function (_key, value) {
  if (value === 'str') {
    var num = new Number(42);
    num.toString = function () {};
    num.valueOf = function () {
      return 2;
    };
    return num;
  }
  return value;
};
var abruptToJSON = function () {
  var num = new Number(3.14);
  num.toString = function () {};
  num.valueOf = function () {};
  return num;
};