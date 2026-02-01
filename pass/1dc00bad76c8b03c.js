var setValue;
var result;
var vals = {
  x: undefined
};
result = {x: ({
  get y() {},
  set y(val) {
    setValue = val;
  }
}).y = 42} = vals;