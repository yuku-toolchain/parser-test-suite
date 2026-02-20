var x, setValue;
var counter = 0;
for ([({
  get y() {},
  set y(val) {
    setValue = val;
  }
}).y = 42] of [[23]]) {
  counter += 1;
}