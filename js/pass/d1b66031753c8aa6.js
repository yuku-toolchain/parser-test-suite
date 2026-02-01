f = function () {
  this.touched = true;
  return this;
};
retobj = f.apply(obj);
var obj;