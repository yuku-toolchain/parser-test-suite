this.p1 = 1;
var result = "result";
var value = "value";
var myObj = {
  p1: 'a',
  value: 'myObj_value',
  valueOf: function () {
    return 'obj_valueOf';
  }
};
try {
  var f = function () {
    p1 = 'x1';
    throw value;
  };
  with (myObj) {
    f();
  }
} catch (e) {
  result = e;
}
if (!(p1 === "x1")) {}
if (!(myObj.p1 === "a")) {}
if (!(result === "value")) {}