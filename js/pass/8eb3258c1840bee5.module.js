var result;
[1].find(function (kValue, k, O) {
  result = this;
});
var o = {};
[1].find(function () {
  result = this;
}, o);