var f = function () {
  this.touched = true;
  return this;
};
var retobj = f.call(obj);
var obj;