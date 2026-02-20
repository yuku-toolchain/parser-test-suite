var arr = [];
var circular = [arr];
arr.toJSON = function () {
  return circular;
};