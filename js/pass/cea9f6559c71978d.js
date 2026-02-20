var iter = (/./g)[Symbol.matchAll]('');
RegExp.prototype.exec = function () {
  return [{
    toString: function () {}
  }];
};