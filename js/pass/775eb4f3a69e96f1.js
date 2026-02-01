function* g() {}
Iterator.prototype.map.call(g(), () => 0);
let iter = g();
iter.map(() => 0);