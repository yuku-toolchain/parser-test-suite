function base() {}
function derived() {}
derived.prototype = new base();
var d = new derived();
var x = Object.getPrototypeOf(d);