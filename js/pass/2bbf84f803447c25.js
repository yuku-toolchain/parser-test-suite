var x, setValue;
x = {
  get y() {},
  set y(val) {
    setValue = val;
  }
};
var result;
var vals = [23];
result = [x.y] = vals;