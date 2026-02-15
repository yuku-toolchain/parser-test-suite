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
  return value;
  p1 = 'x1';
};
with (myObj) {
  result = f();
}
if (!(p1 === 1)) {}
if (!(myObj.p1 === "a")) {}
if (!(result === "value")) {}