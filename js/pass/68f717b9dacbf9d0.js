var objWithExec = {
  exec: function () {
    return null;
  }
};
var objWithoutExec = {};
RegExp.prototype[Symbol.match].call(objWithExec);