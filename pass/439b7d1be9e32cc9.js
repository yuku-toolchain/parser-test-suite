var yield = 'prop';
var x = {};
var counter = 0;
for ([...x[yield]] of [[33, 44, 55]]) {
  counter += 1;
}