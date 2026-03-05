this.p1 = 1;
var result = "result";
var myObj = {
  p1: 'a',
  value: 'myObj_value',
  valueOf: function () {
    return 'obj_valueOf';
  }
};
try {
  var f = function () {
    with (myObj) {
      p1 = 'x1';
      throw value;
    }
  };
  f();
} catch (e) {
  result = p1;
}
if (result !== 1) {}
if (p1 !== 1) {}
if (myObj.p1 !== "x1") {}