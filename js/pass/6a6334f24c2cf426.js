var setValue;
var counter = 0;
for ({x: ({
  get y() {},
  set y(val) {
    setValue = val;
  }
}).y = 42} of [{
  x: undefined
}]) {
  counter += 1;
}