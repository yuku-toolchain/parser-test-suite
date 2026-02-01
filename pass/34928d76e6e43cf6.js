function ID(x) {
  return x;
}
var sym1 = Symbol();
var sym2 = Symbol();
var object = {
  a: 'A',
  [sym1]: 'B',
  c: 'C',
  [ID(sym2)]: 'D'
};