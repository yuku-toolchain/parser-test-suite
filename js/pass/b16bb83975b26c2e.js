var s = new Set();
var expects = [1, 2, 3];
s.add(1).add(2).add(3);
s.forEach(function (value, entry, set) {
  var expect = expects.shift();
});