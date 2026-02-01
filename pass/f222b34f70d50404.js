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
  do {
    p1 = 'x1';
    break;
  } while (false);
}
if (p1 !== 1) {}
if (myObj.p1 !== "x1") {}