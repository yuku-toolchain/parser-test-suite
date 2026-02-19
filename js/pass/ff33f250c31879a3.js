let executed = false;
let C = class {
  x = eval('executed = true; () => arguments;');
};