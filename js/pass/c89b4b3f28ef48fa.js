var executed = false;
var C = class {
  x = eval('executed = true; new.target;');
};
var c = new C();