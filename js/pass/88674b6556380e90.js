var arr = [true];
arr.toJSON = function () {};
var str = new String('str');
str.toJSON = function () {
  return null;
};
var num = new Number(14);
num.toJSON = function () {
  return {
    key: 7
  };
};