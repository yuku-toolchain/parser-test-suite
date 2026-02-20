class Err extends Error {}
Err.prototype.message = 'custom-error';
var err1 = new Err('foo 42');
var err2 = new Err();