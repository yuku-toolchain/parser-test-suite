var executed = false;
var C = class {
  x = (0, eval)('executed = true; new.target;');
};