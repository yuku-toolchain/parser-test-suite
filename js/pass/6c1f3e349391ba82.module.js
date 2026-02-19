var result;
[1].findLast(function () {
  result = this;
});
var o = {};
[1].findLast(function () {
  result = this;
}, o);