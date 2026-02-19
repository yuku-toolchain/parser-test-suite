var expects = [1, 2, 3];
var s = new Set(expects);
s.forEach(function (value, entry, set) {
  var expect = expects.shift();
});