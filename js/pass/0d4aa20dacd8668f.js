class Err extends SyntaxError {}
Err.prototype.message = 'custom-syntax-error';
var err1 = new Err('foo 42');
var err2 = new Err();