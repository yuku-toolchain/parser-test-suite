function* g() {}
Iterator.prototype.drop.call(g(), 0);
let iter = g();
iter.drop(0);