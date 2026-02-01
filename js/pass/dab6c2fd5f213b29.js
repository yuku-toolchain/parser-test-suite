var toJSON = function () {
  var str = new String('str');
  str.toString = function () {
    return 'toString';
  };
  str.valueOf = function () {};
  return str;
};
var abruptReplacer = function (_key, value) {
  if (value === true) {
    var str = new String('str');
    str.toString = function () {};
    str.valueOf = function () {};
    return str;
  }
  return value;
};