var x;
var counter = 0;
for ([x = ('x' in ({}))] of [[]]) {
  counter += 1;
}