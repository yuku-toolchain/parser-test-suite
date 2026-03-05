let exprCallCount = 0;
let evalValue = {};
function foo(eval) {
  exprCallCount += 1;
}
foo(evalValue);