class Err extends ReferenceError {}
Err.prototype.message = 'custom-reference-error';
var err1 = new Err('foo 42');
var err2 = new Err();