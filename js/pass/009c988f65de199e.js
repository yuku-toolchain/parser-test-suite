var literal = {
  a: 1
};
var keysBefore = Object.keys(literal);
keysBefore[0] = 'x';
var keysAfter = Object.keys(literal);