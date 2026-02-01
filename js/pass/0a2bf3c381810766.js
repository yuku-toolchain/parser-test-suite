var executed = false;
var C = class {
  x = eval('executed = true; arguments;');
};