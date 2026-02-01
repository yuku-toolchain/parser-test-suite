let exprCallCount = 0;
let evalValue = {};
let foo = function (eval) {
  exprCallCount += 1;
};
foo(evalValue);