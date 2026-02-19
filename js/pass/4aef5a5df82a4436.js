var counter = 0;
var key1 = {
  valueOf: function () {
    return 1;
  },
  toString: null
};
var key2 = {
  valueOf: function () {
    return 2;
  },
  toString: null
};
var object = {
  a: 'A',
  [key1]: 'B',
  c: 'C',
  [key2]: 'D'
};