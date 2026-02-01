var iter = (/./g)[Symbol.matchAll]('');
RegExp.prototype.exec = function () {
  this.lastIndex = {
    valueOf() {}
  };
  return [''];
};