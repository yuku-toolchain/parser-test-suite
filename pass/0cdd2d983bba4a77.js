var C = class {
  static f = 'test';
  static f = this.f + '262';
  static g() {
    return 45;
  }
  static g = this.g();
};