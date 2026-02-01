var obj = {};
var circular = {
  prop: obj
};
obj.toJSON = function () {
  return circular;
};