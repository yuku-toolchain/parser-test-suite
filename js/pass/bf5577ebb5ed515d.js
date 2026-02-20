var probe;
var C = class {
  m(_ = null) {
    var x = 'inside';
    probe = function () {
      return x;
    };
  }
};
C.prototype.m();
var x = 'outside';