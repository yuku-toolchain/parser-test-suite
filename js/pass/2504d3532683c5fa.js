function ID(x) {
  return x;
}
var object = {
  a: 'A',
  [1]: 'B',
  c: 'C',
  [ID(2)]: 'D'
};