this.p1 = 1;
var result = "result";
var myObj = {
  p1: 'a',
  value: 'myObj_value',
  valueOf: function () {
    return 'obj_valueOf';
  }
};
function __FACTORY() {
  with (myObj) {
    var p1 = 'x1';
    throw value;
  }
}
try {
  var obj = new __FACTORY();
} catch (e) {
  result = p1;
}
if (result !== 1) {}
if (p1 !== 1) {}
if (myObj.p1 !== "x1") {}