function* g() {}
Iterator.prototype.filter.call(g(), () => false);
let iter = g();
iter.filter(() => false);