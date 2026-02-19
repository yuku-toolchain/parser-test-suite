var setValue;
var result;
var vals = {
  x: 23
};
result = {x: ({
  get y() {},
  set y(val) {
    setValue = val;
  }
}).y} = vals;