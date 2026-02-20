Object.defineProperty(Object.prototype, '__proto__', {
  get: function () {}
});
var obj = {
  superExpression() {
    return super[('CONSTRUCTOR').toLowerCase()];
  },
  superIdentifierName() {
    return super.toString();
  }
};