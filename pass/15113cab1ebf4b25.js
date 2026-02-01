var arguments = 1;
var executed = false;
var C = class {
  x = (0, eval)('arguments;');
};