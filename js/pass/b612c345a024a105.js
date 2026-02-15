function* g() {}
Iterator.prototype.flatMap.call(g(), () => []);
let iter = g();
iter.flatMap(() => []);