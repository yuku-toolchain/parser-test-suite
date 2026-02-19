var settedValue;
var executedGetter = false;
var src = {
  get y() {
    executedGetter = true;
  },
  set y(v) {
    settedValue = v;
  }
};
src.y = undefined;
var result;
var vals = {
  x: 1,
  y: 2
};
result = {...src.y} = vals;