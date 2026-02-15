function* g() {}
Iterator.prototype.toArray.call(g());
let iter = g();
iter.toArray();