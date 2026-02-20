var value;
function dflt(a, b = 0) {
  arguments[0] = 2;
  value = a;
}
dflt(1);