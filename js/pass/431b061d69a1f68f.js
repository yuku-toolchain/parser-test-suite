function* g() {
  let x;
  eval('var x;');
}
var iter = g();