var internalCount = 0;
Object.defineProperty(RegExp.prototype, Symbol.match, {
  get: function () {
    ++internalCount;
    return true;
  }
});
var calls = [];
var o = {
  get [Symbol.match]() {
    calls.push('get @@match');
    return false;
  },
  get flags() {
    calls.push('get flags');
    return {
      toString() {
        calls.push('flags toString');
        return "";
      }
    };
  }
};
RegExp.prototype[Symbol.matchAll].call(o, {
  toString() {
    calls.push('arg toString');
  }
});