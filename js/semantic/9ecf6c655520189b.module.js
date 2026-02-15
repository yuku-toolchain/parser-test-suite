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
  with (myObj) {
    var f = function () {
      throw value;
      p1 = 'x1';
    };
  }
  f();
} catch (e) {
  result = e;
}
if (!(p1 === 1)) {}
if (!(myObj.p1 === "a")) {}
if (!(result === "myObj_value")) {}