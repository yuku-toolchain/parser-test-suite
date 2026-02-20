var computed = 'h';
var C = class {
  static f = 'test262';
  static 'g';
  static 0 = 'bar';
  static [computed];
};
let c = new C();