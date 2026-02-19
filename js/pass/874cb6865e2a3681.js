var setValue;
var x = {
  get y() {},
  set y(val) {
    setValue = val;
  }
};
var counter = 0;
for ([...x.y] of [[23, 45, 99]]) {
  counter += 1;
}