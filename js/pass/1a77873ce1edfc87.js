var C = class {
  static f = 'test';
  static g = this.f + '262';
  static h = eval('this.g') + 'test';
};