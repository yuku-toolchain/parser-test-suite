function* g() {}
Iterator.prototype.reduce.call(g(), () => {}, 0);
let iter = g();
iter.reduce(() => {}, 0);