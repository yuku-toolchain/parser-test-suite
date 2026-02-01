this.p1 = 1;
var result = "result";
var myObj = {
  p1: 'a',
  value: 'myObj_value',
  valueOf: function () {
    return 'obj_valueOf';
  }
};
var f = function () {
  p1 = 'x1';
};
with (myObj) {
  f();
}
if (!(p1 === "x1")) {}
if (!(myObj.p1 === "a")) {}