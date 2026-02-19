var setValue;
var x = {
  get y() {},
  set y(val) {
    setValue = val;
  }
};
var result;
var vals = [23, 45, 99];
result = [...x.y] = vals;