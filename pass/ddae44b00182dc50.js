class Err extends TypeError {}
Err.prototype.message = 'custom-type-error';
var err1 = new Err('foo 42');
var err2 = new Err();