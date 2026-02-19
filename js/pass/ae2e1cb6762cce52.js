var iterables = [[1, 2, 3], [4, 5, 6]];
var it = Iterator.zipKeyed(iterables);
for (var i = 0; i < iterables[0].length; ++i) {
  var results = it.next().value;
  for (var j = 0; j < iterables.length; ++j) {}
}