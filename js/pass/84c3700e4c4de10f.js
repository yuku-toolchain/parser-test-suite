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
var counter = 0;
for ({...src.y} of [{
  x: 1,
  y: 2
}]) {
  counter += 1;
}