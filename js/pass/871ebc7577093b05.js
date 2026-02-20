function ID(x) {
  return x;
}
var object = {
  a: 'A',
  ['b']: 'B',
  c: 'C',
  [ID('d')]: 'D'
};