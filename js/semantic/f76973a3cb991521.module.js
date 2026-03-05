var a = 1;
var __obj = {
  a: 2
};
with (__obj) {
  result = (function () {
    return a;
  })();
}
if (result !== 2) {}