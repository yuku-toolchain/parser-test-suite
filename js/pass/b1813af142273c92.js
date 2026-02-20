var iter = (/./g)[Symbol.matchAll]('');
var execResult = {
  get '0'() {
    return {
      toString() {
        return '';
      }
    };
  }
};
var internalRegExp;
RegExp.prototype.exec = function () {
  internalRegExp = this;
  return execResult;
};
var result = iter.next();
result = iter.next();