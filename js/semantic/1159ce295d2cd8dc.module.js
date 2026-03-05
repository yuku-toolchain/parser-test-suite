this.p1 = 1;
var result = "result";
var myObj = {
  p1: 'a',
  value: 'myObj_value',
  valueOf: function () {
    return 'obj_valueOf';
  }
};
with (myObj) {
  result = (function () {
    return value;
    p1 = 'x1';
  })();
}
if (p1 !== 1) {}
if (result !== 'myObj_value') {}
if (myObj.p1 !== "a") {}