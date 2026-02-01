var expects = [1, 3];
var s = new Set([1, 2, 3]);
s.delete(2);
s.forEach(function (value, entry, set) {
  var expect = expects.shift();
});