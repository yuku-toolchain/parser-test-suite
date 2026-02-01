var probe;
var C = class {
  static *m(_ = null) {
    var x = 'inside';
    probe = function () {
      return x;
    };
  }
};
C.m().next();
var x = 'outside';