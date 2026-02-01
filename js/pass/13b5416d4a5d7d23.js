function* g() {}
Iterator.prototype.take.call(g(), 0);
let iter = g();
iter.take(0);