class Err extends RangeError {}
Err.prototype.message = 'custom-range-error';
var err1 = new Err('foo 42');
var err2 = new Err();