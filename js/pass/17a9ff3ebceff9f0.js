var x, setValue;
var result;
var vals = [23];
result = [({
  get y() {},
  set y(val) {
    setValue = val;
  }
}).y] = vals;