var obj = null;
var yield = 'propNameViaIdentifier';
var iter = (function* () {
  obj = {
    [yield]() {}
  };
})();
iter.next();
iter.next('propNameViaExpression');