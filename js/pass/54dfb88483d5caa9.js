function* g() {}
Iterator.prototype.forEach.call(g(), () => {});
let iter = g();
iter.forEach(() => {});