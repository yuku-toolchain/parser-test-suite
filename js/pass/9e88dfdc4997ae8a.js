var setValue;
var x = {
  get y() {},
  set y(val) {
    setValue = val;
  }
};
var counter = 0;
for ({a: x.y} of [{
  a: 23
}]) {
  counter += 1;
}