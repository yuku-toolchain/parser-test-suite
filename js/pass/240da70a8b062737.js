function* g() {}
Iterator.prototype.some.call(g(), () => {});
let iter = g();
iter.some(() => {});