class Err extends EvalError {}
Err.prototype.message = 'custom-eval-error';
var err1 = new Err('foo 42');
var err2 = new Err();