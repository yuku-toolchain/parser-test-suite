function* g() {}
Iterator.prototype.find.call(g(), () => {});
let iter = g();
iter.find(() => {});