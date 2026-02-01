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
var f = function () {
  p1 = 'x1';
  return value;
};
with (myObj) {
  result = f();
}
if (!(p1 === "x1")) {}
if (!(myObj.p1 === "a")) {}
if (!(result === "value")) {}