var x, setValue;
var result;
var vals = [undefined];
result = [({
  get y() {},
  set y(val) {
    setValue = val;
  }
}).y = 42] = vals;