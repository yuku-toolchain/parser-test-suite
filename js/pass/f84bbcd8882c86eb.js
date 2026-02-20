var setValue;
var x = {
  get y() {},
  set y(val) {
    setValue = val;
  }
};
var result;
var vals = {
  a: 23
};
result = {a: x.y} = vals;