class Err extends URIError {}
Err.prototype.message = 'custom-uri-error';
var err1 = new Err('foo 42');
var err2 = new Err();