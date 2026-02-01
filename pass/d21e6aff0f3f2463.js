var x, setValue;
x = {
  get y() {},
  set y(val) {
    setValue = val;
  }
};
var counter = 0;
for ([x.y] of [[23]]) {
  counter += 1;
}