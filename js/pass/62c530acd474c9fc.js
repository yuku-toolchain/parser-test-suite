var iter = (/./g)[Symbol.matchAll]('');
RegExp.prototype.exec = function () {
  return {
    get '0'() {}
  };
};