this.p1 = 1;
var result = "result";
var myObj = {
  p1: 'a',
  value: 'myObj_value',
  valueOf: function () {
    return 'obj_valueOf';
  }
};
var theirObj = {
  p1: true,
  value: 'theirObj_value',
  valueOf: function () {
    return 'thr_valueOf';
  }
};
try {
  with (myObj) {
    with (theirObj) {
      p1 = 'x1';
      throw value;
    }
  }
} catch (e) {
  result = p1;
}
if (p1 !== 1) {}
if (myObj.p1 !== "a") {}
if (theirObj.p1 !== "x1") {}