var obj = {
  get a() {
    delete this.b;
    return 1;
  },
  b: 2
};
var replacer = function (key, value) {
  if (key === 'b') {
    return '<replaced>';
  }
  return value;
};