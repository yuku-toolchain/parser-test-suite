var f = function () {
  this.touched = true;
};
var obj = {};
f.apply(obj);