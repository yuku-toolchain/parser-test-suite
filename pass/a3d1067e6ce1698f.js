var r = /./;
var callCount = 0;
var arg = {
  toString: function () {
    return 'string form';
  }
};
var thisValue, args;
r.exec = function () {
  thisValue = this;
  args = arguments;
  callCount += 1;
  return null;
};
r[Symbol.replace](arg, '');