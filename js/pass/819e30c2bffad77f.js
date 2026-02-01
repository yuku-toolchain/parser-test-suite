var result;
[1].findLastIndex(function () {
  result = this;
});
var o = {};
[1].findLastIndex(function () {
  result = this;
}, o);