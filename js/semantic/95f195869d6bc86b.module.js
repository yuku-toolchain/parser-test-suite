var yield = 'prop';
var x = {};
var counter = 0;
for ([[x[yield]]] of [[[22]]]) {
  counter += 1;
}