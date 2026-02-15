var Func = function (a, b) {
  return a + b;
};
var fun = new Func();
fun.value = "FunValue";
var newObj = Object.create({}, {
  prop: fun
});